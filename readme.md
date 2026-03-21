# Code-Citadel

A small music-themed project with two parts:

- A React + Vite landing page in `landing-page/`
- A static music-player experience in `spookify/`

## Project Structure

```text
Code-Citadel/
├── landing-page/                  # React + TypeScript + Vite app
│   ├── components/                # Header, Hero, Footer
│   ├── public/
│   │   └── spookify/              # Static app copy served by Vite at /spookify
│   ├── App.tsx
│   ├── main.tsx
│   └── package.json
├── spookify/                      # Standalone static app (HTML/CSS/JS + assets)
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── images/
│   └── songs/
├── LICENSE
└── readme.md
```

## What Runs Where

- `landing-page/` is the development app and has npm scripts.
- `spookify/` can be opened directly as a static site.
- The landing page buttons navigate to `/spookify/index.html`, which is served from `landing-page/public/spookify/` when running Vite.

## Run the Landing Page (Recommended)

```bash
git clone https://github.com/Gowreesh-VT/Code-Citadel.git
cd Code-Citadel/landing-page
npm install
npm run dev
```

Then open the local URL shown by Vite (usually `http://localhost:5173`).

## Build the Landing Page

```bash
cd landing-page
npm run build
npm run preview
```

## Run the Static Spookify App Directly

Open `spookify/index.html` in a browser.

## Notes

- `spookify/index.html` and `landing-page/public/spookify/index.html` are currently not identical.
- `spookify/script.js` and `spookify/style.css` are currently in sync with their copies under `landing-page/public/spookify/`.

## License

This project is licensed under the MIT License. See `LICENSE`.