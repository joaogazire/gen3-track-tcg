#!/usr/bin/env python3
"""Servidor local do site + sincronização de preços da Liga pelo botão.

Serve o projeto como `python3 -m http.server` (abra http://localhost:8765/src/)
e expõe uma API só para a máquina local, usada pelo botão de sincronizar:

    GET  /api/liga-sync        estado da coleta (rodando, etapa, progresso)
    POST /api/liga-sync        inicia scripts/fetch_liga_prices.py
                               (body JSON opcional: {"full": false} = só o vencido)
    POST /api/liga-sync/stop   interrompe a coleta (o progresso fica no cache)

A coleta roda com o mesmo Python deste servidor, que precisa do Playwright:

    python3 -m venv .venv && .venv/bin/pip install playwright
    .venv/bin/python scripts/serve.py            # porta 8765
    .venv/bin/python scripts/serve.py 9000       # outra porta

Só escuta em 127.0.0.1. Os POST exigem o cabeçalho X-Emerald-Tracker: um site
de fora não consegue mandá-lo sem uma pré-verificação CORS, que aqui nunca é
aceita — então outra página aberta no navegador não dispara a coleta.
"""
import importlib.util
import json
import re
import subprocess
import sys
import threading
import time
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
FETCH_SCRIPT = ROOT / "scripts" / "fetch_liga_prices.py"
# Início da coleta completa em andamento: se ela for interrompida (parar,
# fechar o servidor, queda), o próximo clique retoma pelo mesmo instante —
# refaz só o que é anterior a ele — em vez de recomeçar do zero
RUN_STATE = ROOT / "scripts" / ".liga_sync_state.json"
API = "/api/liga-sync"
TOKEN_HEADER = "X-Emerald-Tracker"
MAX_LOG_LINES = 200

SEARCH_RE = re.compile(r"\[busca (\d+)/(\d+)\]")
CARD_RE = re.compile(r"\[carta (\d+)/(\d+)\]")
PLAN_RE = re.compile(r"(\d+) páginas de carta, (\d+) para buscar")
DONE_RE = re.compile(r"(\d+) de (\d+) cartas com preço da Liga")


class SyncJob:
    """Uma coleta por vez; o estado é lido do stdout do script."""

    def __init__(self):
        self.lock = threading.Lock()
        self.process = None
        self.state = self._idle()

    @staticmethod
    def _idle():
        return {"running": False, "phase": "idle", "done": 0, "total": 0,
                "startedAt": None, "finishedAt": None, "exitCode": None,
                "summary": "", "lastLine": "", "errors": 0, "log": []}

    def status(self):
        with self.lock:
            state = dict(self.state)
            state["log"] = state["log"][-20:]
            return state

    def start(self, full=True):
        with self.lock:
            if self.process and self.process.poll() is None:
                return False
            args = [sys.executable, "-u", str(FETCH_SCRIPT)]
            resumed = False
            if full:
                since = self._pending_run()
                resumed = since is not None
                since = since or time.time()
                RUN_STATE.write_text(json.dumps({"staleBefore": since, "done": False}), encoding="utf-8")
                args += ["--stale-before", str(since)]
            self.state = self._idle()
            self.state.update(running=True, phase="busca", startedAt=time.time(), resumed=resumed)
            self.process = subprocess.Popen(args, cwd=ROOT, stdout=subprocess.PIPE,
                                            stderr=subprocess.STDOUT, text=True, bufsize=1)
            threading.Thread(target=self._read, args=(self.process,), daemon=True).start()
            return True

    @staticmethod
    def _pending_run():
        """Início da coleta completa que não terminou, ou None."""
        try:
            saved = json.loads(RUN_STATE.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError):
            return None
        return None if saved.get("done") else saved.get("staleBefore")

    def stop(self):
        with self.lock:
            if self.process and self.process.poll() is None:
                self.process.terminate()
                self.state["phase"] = "parando"
                return True
            return False

    def _read(self, process):
        for raw in process.stdout:
            line = raw.rstrip()
            if not line:
                continue
            with self.lock:
                state = self.state
                state["lastLine"] = line
                state["log"] = (state["log"] + [line])[-MAX_LOG_LINES:]
                if line.lstrip().startswith("!"):
                    state["errors"] += 1
                if m := SEARCH_RE.search(line):
                    state.update(phase="busca", done=int(m.group(1)), total=int(m.group(2)))
                elif m := CARD_RE.search(line):
                    state.update(phase="cartas", done=int(m.group(1)), total=int(m.group(2)))
                elif m := PLAN_RE.search(line):
                    state.update(phase="cartas", done=0, total=int(m.group(2)))
                elif DONE_RE.search(line):
                    state["summary"] = line
        code = process.wait()
        if code == 0 and RUN_STATE.exists():
            try:
                saved = json.loads(RUN_STATE.read_text(encoding="utf-8"))
                RUN_STATE.write_text(json.dumps({**saved, "done": True}), encoding="utf-8")
            except (OSError, json.JSONDecodeError):
                pass
        with self.lock:
            self.state.update(running=False, exitCode=code, finishedAt=time.time(),
                              phase="concluído" if code == 0 else "interrompido")


JOB = SyncJob()


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def log_message(self, fmt, *args):
        if self.path.startswith(API):
            return  # o site consulta o estado a cada poucos segundos
        super().log_message(fmt, *args)

    def end_headers(self):
        # Os dados mudam durante a coleta: nada de cache no liga-prices.min.json
        if self.path.startswith("/assets/data/"):
            self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def _json(self, status, payload):
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        if self.path.split("?")[0] == API:
            return self._json(200, JOB.status())
        return super().do_GET()

    def do_POST(self):
        path = self.path.split("?")[0]
        if path not in (API, f"{API}/stop"):
            return self._json(404, {"error": "not found"})
        if self.headers.get(TOKEN_HEADER) != "1":
            return self._json(403, {"error": "missing header"})
        if path.endswith("/stop"):
            return self._json(200, {"stopped": JOB.stop(), **JOB.status()})
        length = int(self.headers.get("Content-Length") or 0)
        try:
            options = json.loads(self.rfile.read(length) or b"{}") if length else {}
        except json.JSONDecodeError:
            options = {}
        started = JOB.start(full=options.get("full", True) is not False)
        return self._json(202 if started else 409, {"started": started, **JOB.status()})


def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8765
    if importlib.util.find_spec("playwright") is None:
        print("Aviso: este Python não tem o Playwright — o site abre, mas o botão não "
              "consegue buscar na Liga. Use .venv/bin/python scripts/serve.py")
    server = ThreadingHTTPServer(("127.0.0.1", port), Handler)
    print(f"Emerald TCG em http://localhost:{port}/src/  (Ctrl+C para sair)")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        JOB.stop()
        server.server_close()


if __name__ == "__main__":
    main()
