# Given | Portfolio (React + Vite)

This is your original vanilla HTML/CSS/JS portfolio, converted into a React app
using [Vite](https://vitejs.dev/).

## What changed and why

- **Build tool: Vite.** Fastest and simplest way to get a React dev server +
  production build with almost no config.
- **One component per section.** `Header`, `Hero`, `Projects`, `Skills`,
  `Contact` — each lives in `src/components/`. This maps 1:1 to the sections
  in your original `index.html`, so it should feel familiar.
- **`styles.css` → `src/index.css`.** Your original CSS was copied over
  as-is (imported once in `main.jsx`) — nothing was rewritten into
  CSS-in-JS or modules, so all your existing class names and animations
  still work exactly the same.
- **Images → `public/images/`.** Anything in Vite's `public/` folder is
  served as-is at the root path, so `images/logo3.png` becomes
  `/images/logo3.png` (already updated in the CSS and JSX for you).
- **`script.js` / `gsap.js` / `contact.js` → React hooks.**
  - The hamburger/overlay menu toggle is now `useState` in `Header.jsx`.
  - The hero mousemove background effect is a `useEffect` in `Hero.jsx`.
  - The `VanillaTilt` skill-card init is a `useEffect` in `Skills.jsx`.
  - The contact form's floating-label focus behavior is controlled by
    React state in `Contact.jsx` (and the form no longer needs the DOM
    query-selector approach).
- **GSAP / VanillaTilt / Font Awesome** are still loaded via the same CDN
  `<script>`/`<link>` tags (now in `index.html` at the project root, which
  Vite treats as the HTML entry point) rather than being npm-installed —
  this keeps the conversion minimal. You can swap these for npm packages
  later if you want (`npm install gsap vanilla-tilt`).

## Project structure

```
myportfolio-react/
├── index.html            # Vite entry HTML (CDN scripts + fonts + <div id="root">)
├── package.json
├── vite.config.js
├── public/
│   └── images/            # all your original images, unchanged
└── src/
    ├── main.jsx           # mounts <App /> and imports index.css
    ├── App.jsx            # composes all sections
    ├── index.css          # your original styles.css (paths updated)
    └── components/
        ├── Header.jsx
        ├── Hero.jsx
        ├── Projects.jsx
        ├── Skills.jsx
        └── Contact.jsx
```

## Run it locally

```bash
cd myportfolio-react
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

The output goes to `dist/`, which you can deploy to Vercel, Netlify,
GitHub Pages, etc.

## Things worth doing next (not required to run it)

1. **Real social links** — the `href="#"` placeholders in `Header`/`Hero`/
   `Contact` should point to your actual GitHub, LinkedIn, etc.
2. **Real project links** — `Projects.jsx` project-links icons are still `#`.
3. **Contact form backend** — `Contact.jsx`'s `handleSubmit` just shows an
   alert. Wire it to something like Formspree, EmailJS, or your own API.
4. **Resume link** — "Download Resume" button needs an actual file/href.
