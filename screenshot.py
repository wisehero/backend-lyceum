from playwright.sync_api import sync_playwright
import os

html_path = os.path.abspath(r"C:\Users\user\Desktop\practice\lecture-html\cache-lecture.html")
file_url = "file:///" + html_path.replace("\\", "/")
out_dir = r"C:\Users\user\Desktop\practice\lecture-html\screenshots"
os.makedirs(out_dir, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 900})
    page.goto(file_url)
    page.wait_for_load_state("networkidle")
    page.wait_for_timeout(1000)

    # Full page screenshot
    page.screenshot(path=os.path.join(out_dir, "full_page.png"), full_page=True)

    # Section-by-section screenshots
    sections = [
        ("sec0", "hero"),
        ("sec1", "definition"),
        ("sec2", "why_cache"),
        ("sec3", "how_it_works"),
        ("sec4", "types"),
        ("sec5", "tradeoffs"),
        ("sec6", "ttl_eviction"),
    ]

    for sec_id, name in sections:
        el = page.locator(f"#{sec_id}")
        if el.count() > 0:
            el.scroll_into_view_if_needed()
            page.wait_for_timeout(500)
            el.screenshot(path=os.path.join(out_dir, f"{name}.png"))
            print(f"Captured: {name}")

    browser.close()
    print("Done!")
