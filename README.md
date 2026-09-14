# GIG — Get In Git

> **Stop building tutorial toy apps. Ship real software.**

A pre-launch landing page for [GIG (Get In Git)](https://github.com/) — a platform by **Braynix Studios** where developers solve real open-source and business engineering tasks, pass maintainer code review, and build a verifiable engineering record.

---

## 🚀 What is GIG?

There's a growing gap between learning software development and actually working as a software engineer. Developers accumulate tutorial-shaped portfolios (to-do apps, clones, AI-generated demos) that don't demonstrate the ability to work inside a real, unfamiliar codebase.

**GIG bridges that gap.** Developers find curated engineering tasks from opted-in open-source repos and businesses, submit real pull requests, survive maintainer review, and earn verified contributions — not fake certificates.

### Core Features

- **🔍 Inspectable Evidence Layer** — Every profile claim links to Task → Repo → PR → Diff → Reviewer Approval
- **📊 0–100 Reputation Score** — Weighted across Contribution Quality, Reliability, Code Quality, Review Performance & OS Engagement
- **💰 GIG Wallet** — Turn verified contributions into real earnings (₹25–₹1,000+), withdraw via UPI
- **🏆 Contribution Tiers** — Explore → GIG Verified → Business Contributor — unlock higher-value work through demonstrated reliability
- **🔐 Blockchain Audit Layer** — Tamper-evident, PII-free payment verification

---

## 📄 About This Page

This is the **pre-launch teaser / coming soon** landing page for GIG, designed to generate early interest and collect waitlist signups.

### Sections

1. **Hero** — Bold poster-style headline with value proposition and CTA
2. **How It Works** — 4-step developer journey (Discover → Implement → Review → Payout)
3. **Key Features** — 6 platform pillars drawn from the GIG PRD
4. **Stats & Social Proof** — Aspirational metrics + testimonial quotes
5. **Waitlist Signup** — Email capture with client-side validation, role selection, and localStorage persistence
6. **Footer** — Braynix Studios branding, navigation links, legal info

### Design System

The page follows a custom design system built on a bold black/white duality aesthetic:

| Token | Value | Usage |
|-------|-------|-------|
| Studio Black | `#000000` | Dark section backgrounds |
| Pure White | `#ffffff` | Light section backgrounds |
| Skill Green | `#55da9b` | Primary CTA buttons only |
| Neon Pulse | `#00ff84` | Small checkmark/icon fills on dark |
| Charcoal Surface | `#232424` | Elevated cards on dark sections |
| Deep Ink | `#0b1215` | Body text, button text |

Typography uses **DM Sans** (headlines, weight 700, line-height ≤ 0.96) and **Inter** (body text) via Google Fonts.

---

## 🛠️ Tech Stack

- **HTML + CSS + Vanilla JS** — no frameworks, no bundlers, zero dependencies
- **No build tools** — just open `index.html` in a browser
- **Google Fonts** — DM Sans + Inter loaded via CDN

---

## 📱 Responsive Breakpoints

| Breakpoint | Target |
|------------|--------|
| `1280px+` | Desktop |
| `1024px` | Tablet landscape |
| `768px` | Tablet portrait — hamburger menu activates |
| `640px` | Large phones — single column layout |
| `480px` | Small phones — reduced typography and padding |
| `pointer: coarse` | Touch devices — 44px minimum tap targets |

---

## ⚡ Quick Start

```bash
# Clone the repo
git clone https://github.com/your-username/gig-launch-page.git

# Open in browser — that's it!
open index.html
```

No `npm install`. No `npm run build`. Just open the file.

---

## 📁 Project Structure

```
gig_launch_page/
├── index.html      # Page markup and structure
├── style.css       # All styles — design tokens, components, responsive breakpoints
├── script.js       # Waitlist form logic, email validation, mobile menu
├── gig-logo.png    # GIG wordmark logo (green)
└── README.md       # This file
```

---

## 👤 Author

**Pranjal Yadav**
Founder, [Braynix Studios](https://github.com/)

---

## 📜 License

© 2026 Braynix Studios. All rights reserved.
