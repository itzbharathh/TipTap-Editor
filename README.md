# Tiptap Document Editor with Real-Time Pagination

A production-ready rich text editor built using **Tiptap + Next.js** that visually paginates content in real time, allowing users to see exactly how their legal documents will appear when printed.

This project mirrors the pagination experience of **Google Docs / Microsoft Word** while preserving ProseMirror’s document stability.

---

## 🚀 Overview

Immigration professionals drafting USCIS documents need confidence in:
- What content appears on each page
- Where page breaks occur
- How formatting affects printed output

This editor provides **live visual pagination** while maintaining a **single continuous document model**, ensuring a stable cursor, reliable selection, and print-accurate formatting.

---

## ✨ Features

### ✅ Real-Time Pagination
- Automatic visual page breaks as users type
- Clear separation between pages
- Continuous typing flow across pages

### ✅ Print-Accurate Layout
- US Letter size (8.5" × 11")
- Standard 1-inch margins
- Editor layout matches printed output exactly

### ✅ Rich Text Formatting
- Headings
- Paragraphs
- Bold / Italic
- Text alignment
- Bullet lists

### ✅ Stable Editing Experience
- No document mutation for pagination
- Cursor and selection remain intact
- No runtime range or hydration errors

---

## 🧠 Technical Approach

### Key Design Principle

> Pagination is handled visually, not structurally.

The editor maintains a **single ProseMirror document**.  
Page boundaries are rendered using **CSS-based layout techniques**, rather than inserting page break nodes into the document.

This approach:
- Matches how Google Docs handles pagination
- Avoids cursor and selection corruption
- Scales cleanly for long documents

---

## 📐 Page Specifications

| Property | Value |
|-------|-------|
| Paper Size | US Letter |
| Width | 8.5 in (816px @ 96 DPI) |
| Height | 11 in (1056px @ 96 DPI) |
| Margins | 1 in (96px) |
| Content Height | 864px |

---
## 🛠️ Tech Stack

- Next.js (App Router)
- React
- Tiptap (ProseMirror)
- Tailwind CSS
- TypeScript

---

## 📦 Installation

```bash
git clone https://github.com/your-username/tiptap-pagination-editor.git
cd tiptap-pagination-editor
npm install
