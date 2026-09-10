import os
import time
import requests
from requests import RequestException

API_BASE_URL = "https://api.pokemontcg.io"
DOWNLOAD_DIR = "pokemon_gen3_cards"
API_KEY_ENV_VAR = "POKEMONTCG_API_KEY"
PAGE_SIZE = 250


def get_api_key() -> str:
    api_key = os.getenv(API_KEY_ENV_VAR)
    if not api_key:
        raise RuntimeError(
            f"API key not found. Set the environment variable '{API_KEY_ENV_VAR}'."
        )
    return api_key


def make_headers() -> dict:
    return {
        "X-Api-Key": get_api_key(),
        "Accept": "application/json",
    }


def ensure_download_dir() -> str:
    os.makedirs(DOWNLOAD_DIR, exist_ok=True)
    return DOWNLOAD_DIR


def fetch_cards() -> list:
    headers = make_headers()
    all_cards = []
    page = 1

    while True:
        url = f"{API_BASE_URL}/v2/cards"
        params = {
            "q": "series:EX",
            "page": page,
            "pageSize": PAGE_SIZE,
        }

        try:
            response = requests.get(url, headers=headers, params=params, timeout=30)
            response.raise_for_status()
            payload = response.json()
        except RequestException as exc:
            print(f"Error fetching page {page}: {exc}")
            break
        except ValueError as exc:
            print(f"Invalid JSON on page {page}: {exc}")
            break

        cards = payload.get("data", [])
        if not cards:
            break

        all_cards.extend(cards)

        total_count = payload.get("totalCount") or payload.get("count") or 0
        if page * PAGE_SIZE >= total_count:
            break

        page += 1

    return all_cards


def download_image(image_url: str, output_path: str) -> bool:
    try:
        response = requests.get(image_url, timeout=30)
        response.raise_for_status()
        with open(output_path, "wb") as file:
            file.write(response.content)
        return True
    except RequestException as exc:
        print(f"Error downloading image {image_url}: {exc}")
        return False


def main() -> None:
    ensure_download_dir()
    cards = fetch_cards()

    if not cards:
        print("No EX-series cards found for the provided query.")
        return

    print(f"Found {len(cards)} cards. Downloading images...")

    downloaded = 0
    failed = 0

    for card in cards:
        card_id = card.get("id")
        images = card.get("images", {})
        image_url = images.get("large") or images.get("small")

        if not card_id or not image_url:
            continue

        file_name = f"{card_id}.png"
        output_path = os.path.join(DOWNLOAD_DIR, file_name)

        if os.path.exists(output_path):
            print(f"Skipping existing file: {output_path}")
            continue

        try:
            success = download_image(image_url, output_path)
            if success:
                downloaded += 1
                print(f"Downloaded: {file_name}")
            else:
                failed += 1
        except Exception as exc:
            failed += 1
            print(f"Unexpected error for card {card_id}: {exc}")

        time.sleep(0.25)

    print(f"Download complete. Success: {downloaded}, Failed: {failed}")


if __name__ == "__main__":
    try:
        main()
    except RuntimeError as exc:
        print(f"Configuration error: {exc}")
    except Exception as exc:
        print(f"Fatal error: {exc}")
