# Kitgum Institute of Health Sciences — Official Website

![KIHS](https://img.shields.io/badge/KIHS-Dedicated%20to%20Excellence-blue?style=flat-square)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=flat-square&logo=tailwindcss)
![Tests](https://img.shields.io/badge/Tests-58%20passing-22c55e?style=flat-square)

Official website for **Kitgum Institute of Health Sciences (KIHS)**, a tertiary private medical training institution located in Kitgum, Uganda. The institute offers diploma and certificate programs in Allied Health Sciences and is funded with support from partners in England.

---

## Live Site

> Deployment link will be added here after going live.

---

## About the Institute

Kitgum Institute of Health Sciences is dedicated to training highly skilled and motivated medical professionals who can serve nationally and internationally, upholding medical standards.

**Programs offered:**
- Diploma in Medical Laboratory Technology *(3 years)*
- Diploma in Pharmacy *(3 years)*
- Certificate in Medical Laboratory Technology *(2 years)*
- Certificate in Pharmacy *(2 years)*

---

## Features

- **Home page** — Hero section, stats banner, course highlights, why choose us, news preview and CTA
- **About page** — Background, mission, vision, core values and leadership
- **Courses page** — Tab-filtered diploma and certificate program cards with entry requirements and fees
- **Apply page** — Multi-step application form with validation and success screen
- **News page** — Searchable and filterable news and announcements
- **Gallery page** — Category-filtered image gallery with lightbox
- **Contact page** — Enquiry form with validation and contact details
- **Partners page** — International funders and partnership information
- **404 page** — Custom not found page with quick navigation links
- Fully responsive across mobile, tablet and desktop
- Smooth page transitions and scroll to top on navigation
- Dynamic page titles on every route

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| Vite 8 | Build tool and dev server |
| Tailwind CSS 4 | Styling |
| React Router v7 | Client-side routing |
| React Hook Form | Multi-step form handling |
| Lucide React | Icons |
| Vitest | Unit and integration testing |
| React Testing Library | Component testing |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

Clone the repository:
```bash
git clone https://github.com/YOURUSERNAME/institute-website.git
cd institute-website
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run test` | Run tests in watch mode |
| `npm run test:run` | Run tests once |
| `npm run test:ui` | Run tests with visual UI |

---

## Project Structure
```
src/
├── components/        # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── CourseCard.jsx
│   ├── CoursesSection.jsx
│   ├── StatsBanner.jsx
│   ├── NewsCard.jsx
│   ├── NewsSection.jsx
│   ├── WhyChooseUs.jsx
│   ├── CTABlock.jsx
│   ├── PartnerLogos.jsx
│   └── ScrollToTop.jsx
├── pages/             # Route-level page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Courses.jsx
│   ├── Apply.jsx
│   ├── News.jsx
│   ├── Gallery.jsx
│   ├── Contact.jsx
│   ├── Partners.jsx
│   └── NotFound.jsx
├── data/              # Static data files
│   ├── courses.js
│   ├── news.js
│   └── partners.js
├── hooks/             # Custom React hooks
│   └── usePageTitle.js
├── test/              # Test files
│   ├── components/
│   ├── pages/
│   └── hooks/
├── App.jsx            # Root component with routing
├── main.jsx           # Application entry point
└── index.css          # Global styles and Tailwind import
```

---

## Testing

This project uses **Vitest** and **React Testing Library** for unit and integration tests.

Run all tests:
```bash
npm run test:run
```

Current test coverage:
- Custom hooks — `usePageTitle`
- Data integrity — courses, news, partners
- Components — Navbar, Footer, StatsBanner, CourseCard
- Pages — Home, Courses, Contact

**58 tests passing.**

---

## Deployment

This site is built with Vite and can be deployed to any static hosting platform.

### Build for production
```bash
npm run build
```

The output will be in the `dist/` folder, ready to upload to Netlify, Vercel or any static host.

---

## Contact

**Kitgum Institute of Health Sciences**
P.O Box 334, Kitgum, Uganda
Phone: +256 777 683228
Email: titolutwa@gmail.com

---

## License

This project is proprietary software developed for Kitgum Institute of Health Sciences.
All rights reserved © 2026 Kitgum Institute of Health Sciences.
```


