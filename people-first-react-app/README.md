# People First — React Active Page

A clean Vite + React + React Router starter based on the supplied screenshot.

## Routes

- `/` — Active radial-navigation page
- `/home`
- `/about`
- `/podcasts`
- `/what-we-do`
- `/grow-with-us`
- `/ideas-lab`
- `/insights`
- `/privacy`
- `/terms`
- `/cookies`
- `/say-hello`

## Run

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Build

```bash
npm run build
npm run preview
```

## Structure

```text
src/
├── assets/
├── components/
│   ├── layout/
│   │   ├── SiteFooter.jsx
│   │   └── StandardLayout.jsx
│   ├── navigation/
│   │   └── RadialNavigation.jsx
│   └── ui/
│       └── Logo.jsx
├── pages/
│   ├── ActivePage.jsx
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Podcasts.jsx
│   ├── WhatWeDo.jsx
│   ├── GrowWithUs.jsx
│   ├── IdeasLab.jsx
│   ├── Insights.jsx
│   ├── Privacy.jsx
│   ├── Terms.jsx
│   ├── Cookies.jsx
│   └── SayHello.jsx
├── App.jsx
├── main.jsx
└── styles.css
```

The supplied screenshot is included as `src/assets/reference-screen.jpg`, and a central reference crop is included as `src/assets/people-first-logo-reference.jpg`.
