# Portfolio source

The Vite + React source for **arsalan-007.github.io**. The repository root holds
the *built* site (GitHub Pages serves `index.html` + `assets/` from there); this
folder is what produces it.

## Why this folder exists

For a long time the source was never committed — only the build output was. The
working copy on disk then drifted away from what was actually deployed (it named
the wrong university, had an outdated contact email, and was missing a job), so
rebuilding from it would have *regressed* the live site. Changes were instead
being hand-patched into the minified bundle, which is not repeatable.

The components here were reconstructed from the deployed bundle and verified
against the live site section by section. Keeping this folder committed is what
stops that drift from happening again: **edit here, rebuild, copy to the root.**

## Develop

```bash
cd portfolio-src
npm install
npm run dev          # http://localhost:5173
```

## Deploy

```bash
npm run build                     # -> portfolio-src/dist
cp -r dist/assets/* ../assets/    # replace the old hashed bundle
cp dist/index.html ../
cp dist/*.png dist/*.pdf ../
# then commit the repo root and push; Pages serves main
```

Remove the previous `assets/index-*.js|css` when you copy the new ones in —
Vite hashes filenames, so stale bundles would otherwise accumulate.

## Layout

```
src/
  App.jsx                 section order
  components/
    Hero.jsx              typewriter roles, availability badge, CTAs
    About.jsx             photo + fact list
    Skills.jsx            five grouped categories (devicons + two PNG logos)
    Experience.jsx        alternating timeline, half-width cards
    Projects.jsx          one featured project + a grid; `demo` renders a
                          "Try it live" link and gates the green "live" badge
    Education.jsx         degree cards with Current / Graduated badge
    Contact.jsx           email / LinkedIn / GitHub rows
    Footer.jsx
    Navbar.jsx, ScrollProgress.jsx, ParticleBackground.jsx
public/                   images + cv.pdf, copied to the site root by Vite
tailwind.config.js        custom `accent` and `navy` scales
```

## Gotchas

- `navy-600` (`#0d1f3c`) is used by the skill tiles; it must stay in the
  Tailwind config or those borders vanish.
- Databricks uses `/Databricks-Emblem.png` (emblem only). The other file,
  `databricks.png`, includes a dark wordmark that disappears on the navy
  background — don't swap it back.
- A project's green **live** badge is driven by a non-empty `demo` field. Leave
  `demo` empty for projects that aren't actually deployed rather than
  advertising something that doesn't exist.
