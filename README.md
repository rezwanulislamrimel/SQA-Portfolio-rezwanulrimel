<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=2,12,24&height=200&section=header&text=Rezwanul%20Rimel%20%E2%80%94%20Portfolio&fontSize=38&fontColor=ffffff&fontAlignY=38&desc=SQA%20Engineer%20%7C%20QA%20Test%20Report%20Themed%20React%20Portfolio&descAlignY=58&descSize=16" />

<br/>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![lucide-react](https://img.shields.io/badge/lucide--react-Icons-F97316?style=for-the-badge&logoColor=white)

<br/>

![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=flat-square)
![Theme](https://img.shields.io/badge/Theme-QA%20Test%20Report-00F5D4?style=flat-square)
![Responsive](https://img.shields.io/badge/Responsive-Yes-38BDF8?style=flat-square)
![License](https://img.shields.io/badge/License-Reference%20Only-lightgrey?style=flat-square)

<br/>

**🌐 Live Site:** _[https://rezwanurimel.netlify.app/]_

</div>

---

## 📌 Overview

A personal portfolio website built as a **single-page React application** with a distinctive **QA test-report visual theme** — dark navy background, terminal-style logs, `PASS` / `FAIL` status indicators, and monospace accents throughout.

Built by **Rezwanul Rimel**, SQA Engineer at unidevGO Software Solutions Ltd. — instead of a generic developer-portfolio look, every section is styled like a QA report or terminal log, reflecting the QA engineering identity.

---

## 🎨 Design System

<div align="center">

| Token | Hex | Usage |
|-------|-----|-------|
| `bg` | `#0B132B` | Base background — Deep Midnight Navy |
| `surface` | `#1C2541` | Cards and panels |
| `pass` | `#00F5D4` | Primary accent — CTAs, links, pass states |
| `warn` | `#38BDF8` | Secondary accent |
| `fail` | `#FF6B6B` | Sparingly — used as a report stripe |

</div>

```
Dark navy + cyan "PASS" accents + terminal/log-file visual language
```

---

## 📂 Project Structure

```text
rezwanul-portfolio/
│
├── 📁 src/
│   ├── App.jsx              # Entire site — all sections, data, and components
│   └── main.jsx
│
├── 📁 public/               # Static assets — put your CV PDF here
│
├── 📄 index.html
├── 📄 vite.config.js
├── 📄 package.json
└── 📄 README.md
```

> All personal data lives in the `PERSONAL_INFO` object near the top of `src/App.jsx` — edit there to update the site.

---

## 🖥️ Sections

| Section | Description |
|---------|-------------|
| 🏠 **Home** | Intro, role, live status indicator, terminal-style "test run" log |
| 💼 **Experience** | unidevGO SQA role, ICT Success Academy, freelance frontend/Shopify (2018–2023), Rizzq |
| 🚀 **Projects** | QA automation, API testing, and frontend project cards |
| 🛠️ **Skills** | Playwright, Postman/Newman, K6, JMeter, OWASP ZAP, Jenkins, Appium, SQL + frontend stack |
| 📝 **Blog** | Write-ups on QA practice and AI in QA |
| 📬 **Contact** | Email, LinkedIn, GitHub, CV download, working contact form |

---

## 🛠️ Tech Stack

<div align="center">

| Tool | Purpose |
|------|---------|
| ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) | SPA framework — functional components + hooks |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) | Build tool and dev server |
| ![lucide-react](https://img.shields.io/badge/lucide--react-F97316?style=flat-square) | Icon library |
| Inline styles + design tokens | No external CSS framework — shared `C` token object |
| Google Fonts | Space Grotesk · Inter · JetBrains Mono |

</div>

**Responsive breakpoints:** `860px` · `720px` · `600px` · `420px`

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/rezwanulislamrimel/rezwanul-portfolio.git
cd rezwanul-portfolio

# Install dependencies
npm install

# Run locally
npm run dev
```

Open `http://localhost:5173` in your browser.

```bash
# Build for production
npm run build
```

Upload the `dist/` folder to any static host — **Vercel**, **Netlify**, or **GitHub Pages**.

---

## ⚙️ Configuration

All personal details are in the `PERSONAL_INFO` object in `src/App.jsx`:

```js
const PERSONAL_INFO = {
  name: "Rezwanul Rimel",
  email: "rezwanul.rimel97@gmail.com",
  cvLink: "#",   // ← replace this — see below
  // ...
};
```

### CV Download Setup

<details>
<summary><b>Option A — Host locally (recommended)</b></summary>

<br/>

1. Place your CV PDF in the `public/` folder: `public/Rezwanul_Rimel_CV.pdf`
2. Update `cvLink` in `App.jsx`:
   ```js
   cvLink: "/Rezwanul_Rimel_CV.pdf",
   ```
3. Rebuild — the Download CV button will work.

</details>

<details>
<summary><b>Option B — Google Drive link</b></summary>

<br/>

1. Upload CV to Google Drive → set sharing to "Anyone with the link"
2. Update `cvLink`:
   ```js
   cvLink: "https://drive.google.com/file/d/YOUR_FILE_ID/view",
   ```

> Note: Google Drive opens a viewer rather than force-downloading — that is normal.

</details>

### Contact Form

The contact form currently shows a confirmation locally only — no emails are sent yet. To make it functional, connect the `onSubmit` handler in `App.jsx` to:

- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)
- Your own backend endpoint

---

## 🔗 Links

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rezwanulislamrimel)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/Rezwanulrimel)
[![Behance](https://img.shields.io/badge/Behance-1769FF?style=for-the-badge&logo=behance&logoColor=white)](https://www.behance.net/rezwanulrimel)
[![Facebook](https://img.shields.io/badge/Rizzq%20(Business)-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/Rizzqbd)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:rezwanul.rimel97@gmail.com)

</div>

---

## 📜 License

The **code structure** is free to reference and learn from.
Please do **not** reuse the personal content, name, copy, or branding as-is.

---

<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=2,12,24&height=100&section=footer" />

<br/>

`PASS` **All sections loaded** · `0 failures` · Built by **Rezwanul Rimel**

</div>
