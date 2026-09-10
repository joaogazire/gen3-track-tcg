import os
import time
import requests

API_BASE_URL = "https://api.tcgdex.net/v2"
DOWNLOAD_DIR = "pokemon_gen3_tcgdex"


def ensure_download_dir() -> str:
    os.makedirs(DOWNLOAD_DIR, exist_ok=True)
    return DOWNLOAD_DIR


def normalize_name(name: str) -> str:
    cleaned = "".join(ch if ch.isalnum() or ch in ("-", "_") else "-" for ch in str(name or "").strip())
    cleaned = cleaned.strip("-")
    cleaned = cleaned.lower()
    return cleaned or "unknown"


def fetch_ex_set_ids() -> list:
    url = f"{API_BASE_URL}/en/series/ex"
    try:
        response = requests.get(url, timeout=60)
        response.raise_for_status()
        payload = response.json()
    except requests.RequestException as exc:
        print(f"Error fetching EX series metadata: {exc}")
        return []
    except ValueError as exc:
        print(f"Invalid JSON from EX series endpoint: {exc}")
        return []

    sets = payload.get("sets", []) if isinstance(payload, dict) else []
    return [item.get("id") for item in sets if isinstance(item, dict) and item.get("id")]


def fetch_cards_from_set(set_id: str) -> list:
    url = f"{API_BASE_URL}/en/sets/{set_id}"
    try:
        response = requests.get(url, timeout=60)
        response.raise_for_status()
        payload = response.json()
    except requests.RequestException as exc:
        print(f"Warning: failed to fetch set {set_id}: {exc}")
        return []
    except ValueError as exc:
        print(f"Warning: invalid JSON for set {set_id}: {exc}")
        return []

    cards = payload.get("cards", []) if isinstance(payload, dict) else []
    return cards if isinstance(cards, list) else []


def build_high_res_image_url(image_data):
    if not image_data:
        return None

    if isinstance(image_data, str):
        base_url = image_data.rstrip("/")
        return f"{base_url}/high.png"

    if isinstance(image_data, dict):
        for key in ("high", "large", "normal", "small"):
            value = image_data.get(key)
            if value:
                return build_high_res_image_url(value)

    return None


def download_image(image_url: str, output_path: str) -> bool:
    try:
        response = requests.get(image_url, timeout=60)
        response.raise_for_status()
        with open(output_path, "wb") as file:
            file.write(response.content)
        return True
    except requests.RequestException as exc:
        print(f"Warning: failed to download {image_url}: {exc}")
        return False


def save_card_image(card: dict) -> bool:
    card_id = card.get("id")
    card_name = card.get("name") or "unknown"
    image_url = build_high_res_image_url(card.get("image"))

    if not card_id or not image_url:
        print(f"Warning: card '{card_name}' has no valid image URL. Skipping.")
        return False

    pokemon_dir = os.path.join(DOWNLOAD_DIR, normalize_name(card_name))
    os.makedirs(pokemon_dir, exist_ok=True)
    output_path = os.path.join(pokemon_dir, f"{card_id}.png")

    if os.path.exists(output_path):
        print(f"Skipping existing file: {output_path}")
        return True

    try:
        success = download_image(image_url, output_path)
        if success:
            print(f"Downloaded: {output_path}")
            return True
        print(f"Warning: download failed for {card_id} ({card_name})")
        return False
    except Exception as exc:
        print(f"Warning: unexpected error while downloading {card_id}: {exc}")
        return False


def main() -> None:
    ensure_download_dir()
    set_ids = fetch_ex_set_ids()

    if not set_ids:
        print("No EX sets were found in the TCGdex response.")
        return

    print(f"Found EX sets: {set_ids}")

    downloaded = 0
    skipped = 0

    for set_id in set_ids:
        cards = fetch_cards_from_set(set_id)
        for card in cards:
            result = save_card_image(card)
            if result:
                downloaded += 1
            else:
                skipped += 1
            time.sleep(0.5)

    print(f"Download complete. Saved: {downloaded}. Skipped/failed: {skipped}.")


if __name__ == "__main__":
    main()
