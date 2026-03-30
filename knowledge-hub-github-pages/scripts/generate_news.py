#!/usr/bin/env python3
"""
generate_news.py
ดึงข่าว AI ล่าสุดจาก Claude และเขียนลงไฟล์ news.json
รันโดย GitHub Actions ทุก 3 วัน
"""

import json
import os
import sys
from datetime import datetime, timezone

import anthropic

# ─────────────────────────────────────────────
# Config
# ─────────────────────────────────────────────
OUTPUT_FILE = "news.json"
NUM_ARTICLES = 8
MODEL = "claude-sonnet-4-20250514"

VALID_TAGS = [
    "Research", "Product", "Regulation", "Enterprise",
    "Open Source", "Infrastructure", "Policy", "Benchmark",
    "Safety", "Tools", "Model", "Startup"
]

# ─────────────────────────────────────────────
# Prompt
# ─────────────────────────────────────────────
def build_prompt() -> str:
    today = datetime.now(timezone.utc).strftime("%d %B %Y")
    return f"""วันนี้คือ {today} (UTC)

สร้างรายการข่าว AI และเทคโนโลยีล่าสุดจำนวน {NUM_ARTICLES} รายการ ที่น่าสนใจในช่วงนี้
ครอบคลุมหัวข้อหลากหลาย ได้แก่:
- LLM / Foundation Models ใหม่
- AI Tools & Platforms
- Regulation & Policy (รวมถึงประเทศไทย)
- Enterprise AI Adoption
- Open Source AI
- AI Infrastructure & Data Center
- Research Breakthroughs
- AI Safety & Ethics

ข้อกำหนด:
- ชื่อข่าวภาษาไทย กระชับ น่าสนใจ ไม่เกิน 70 ตัวอักษร
- สรุป 2 ประโยค ให้ข้อมูลที่เป็นประโยชน์และเชื่อมกับบริบทไทย/องค์กรได้
- tag ให้เลือกจาก: {", ".join(VALID_TAGS)}
- timeAgo ให้ระบุเป็น "X วัน/สัปดาห์/ชั่วโมงที่แล้ว"

ตอบเป็น JSON array เท่านั้น — ไม่มีข้อความอื่น ไม่มี markdown backtick:
[
  {{
    "tag": "Research",
    "title": "ชื่อข่าวภาษาไทย",
    "summary": "สรุปเนื้อหา 1-2 ประโยค ภาษาไทย",
    "source": "ชื่อแหล่งข่าว",
    "timeAgo": "2 วันที่แล้ว"
  }}
]"""


# ─────────────────────────────────────────────
# Main
# ─────────────────────────────────────────────
def main():
    api_key = os.environ.get("ANTHROPIC_API_KEY")
    if not api_key:
        print("❌ ERROR: ANTHROPIC_API_KEY not set", file=sys.stderr)
        sys.exit(1)

    print(f"🤖 Generating {NUM_ARTICLES} AI news articles...")

    client = anthropic.Anthropic(api_key=api_key)

    message = client.messages.create(
        model=MODEL,
        max_tokens=2048,
        messages=[{"role": "user", "content": build_prompt()}]
    )

    raw = message.content[0].text.strip()

    # Strip accidental markdown fences
    if raw.startswith("```"):
        raw = raw.split("```")[1]
        if raw.startswith("json"):
            raw = raw[4:]
        raw = raw.strip()

    # Parse JSON
    articles = json.loads(raw)

    # Validate & sanitise
    clean = []
    for a in articles:
        tag = a.get("tag", "AI")
        if tag not in VALID_TAGS:
            tag = "Research"
        clean.append({
            "tag": tag,
            "title": str(a.get("title", ""))[:120],
            "summary": str(a.get("summary", ""))[:300],
            "source": str(a.get("source", ""))[:60],
            "timeAgo": str(a.get("timeAgo", ""))[:30],
        })

    # Build output payload
    payload = {
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "generatedAtTH": datetime.now(timezone.utc).strftime("%d %b %Y %H:%M UTC"),
        "model": MODEL,
        "articles": clean
    }

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(payload, f, ensure_ascii=False, indent=2)

    print(f"✅ Written {len(clean)} articles to {OUTPUT_FILE}")
    print(f"   Generated at: {payload['generatedAt']}")

    # Print preview
    for i, a in enumerate(clean, 1):
        print(f"   {i}. [{a['tag']}] {a['title'][:50]}...")


if __name__ == "__main__":
    main()
