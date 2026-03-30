# 📚 Knowledge Hub — AI · RAG · หุ้น

เว็บไซต์รวมความรู้ด้าน AI, RAG, และการลงทุน พร้อม **AI News อัปเดตอัตโนมัติทุก 3 วัน**
ผ่าน GitHub Actions + Claude API

> ⚠️ ไฟล์นี้ใช้ชื่อ `knowledge-hub.html` (ไม่ใช่ index.html)
> เพื่อให้ index.html ไฟล์แยกต่างหากทำหน้าที่ Link Hub รวมหลายหน้า

---

## 🗂️ โครงสร้างไฟล์ใน Repo

```
your-repo/
│
├── index.html                          ← Link Hub (ไฟล์ของคุณ — ชี้มาที่หน้านี้)
├── knowledge-hub.html                  ← หน้านี้ (AI · RAG · หุ้น)
├── news.json                           ← ข่าว AI (สร้างโดย GitHub Actions อัตโนมัติ)
│
├── scripts/
│   └── generate_news.py               ← Python เรียก Claude API → เขียน news.json
│
└── .github/
    └── workflows/
        └── update-news.yml            ← รัน จ/พ/ศ 08:00 น. อัตโนมัติ
```

**Link ที่ใช้เข้าถึงหน้านี้:**
```
https://<username>.github.io/<repo>/knowledge-hub.html
```

---

## 🚀 วิธี Deploy

### ขั้นที่ 1 — วางไฟล์ใน Repo ที่มีอยู่

วาง 4 ไฟล์/โฟลเดอร์นี้ลงใน root ของ repo ที่ใช้ GitHub Pages อยู่แล้ว:

```
knowledge-hub.html
news.json
scripts/generate_news.py
.github/workflows/update-news.yml
```

ไม่ต้องสร้าง repo ใหม่ — วางเพิ่มได้เลย

### ขั้นที่ 2 — เพิ่ม API Key เป็น Secret

1. Settings → **Secrets and variables** → **Actions**
2. **New repository secret**
3. Name: `ANTHROPIC_API_KEY`
4. Value: API Key จาก [console.anthropic.com](https://console.anthropic.com)

### ขั้นที่ 3 — Push ไฟล์

```bash
git add knowledge-hub.html news.json scripts/ .github/
git commit -m "✨ Add Knowledge Hub page"
git push
```

### ขั้นที่ 4 — เพิ่ม Link ใน index.html ของคุณ

เพิ่ม link ใน index.html ที่มีอยู่:

```html
<a href="knowledge-hub.html">📚 Knowledge Hub — AI · RAG · หุ้น</a>
```

---

## ⚙️ ระบบ Auto-Update ข่าว AI

### Flow การทำงาน

```
ทุก จ/พ/ศ 08:00 น. (ไทย)
        ↓
GitHub Actions รัน scripts/generate_news.py
        ↓  [server-side — API Key ปลอดภัยใน Secrets]
Claude API สร้างข่าว 8 รายการ (ภาษาไทย)
        ↓
เขียนทับ news.json → git commit & push อัตโนมัติ
        ↓
GitHub Pages serve news.json
        ↓
knowledge-hub.html fetch("news.json") ✅ ไม่มีปัญหา CORS
```

### ทำไมถึงใช้ GitHub Actions แทน fetch ตรง?

| วิธี | ผล |
|---|---|
| fetch Anthropic API จาก JS | ❌ CORS blocked — browser ไม่ได้รับอนุญาต |
| ฝัง API Key ใน HTML | ❌ ทุกคนเห็น Key ได้ — โดนขโมยทันที |
| **GitHub Actions (วิธีนี้)** | ✅ Key อยู่ใน Secrets, ไม่มี CORS, ปลอดภัย |

### รัน Manual ได้ทันที

Actions → **🤖 Update AI News** → **Run workflow** → Run

---

## 💰 ค่าใช้จ่ายโดยประมาณ

| รายการ | ราคา |
|---|---|
| GitHub Actions (public repo) | ฟรี ไม่จำกัด |
| Claude API per run (~2K tokens) | ~$0.015 |
| 3 ครั้ง/สัปดาห์ × 4 สัปดาห์ | **~$0.18/เดือน (~฿6)** |

---

## 🔧 ปรับแต่ง

| ต้องการเปลี่ยน | ไฟล์ | ตำแหน่ง |
|---|---|---|
| ความถี่ update | `update-news.yml` | `cron: '0 1 * * 1,3,5'` |
| จำนวนข่าวต่อครั้ง | `generate_news.py` | `NUM_ARTICLES = 8` |
| หัวข้อ/โทนข่าว | `generate_news.py` | `build_prompt()` |
| โมเดล Claude | `generate_news.py` | `MODEL = "..."` |
| path ไฟล์ข่าว | `knowledge-hub.html` | `NEWS_JSON_URL = 'news.json'` |
