# JOJUVO 2025 — Astro site

A lightweight, content-focused site for JOJUVO 2025 (Jornada Juvenil Vocacional), built with Astro 4, React 18, and Tailwind CSS 3.

## Tech stack
- Astro ^4.15 with React integration
- Tailwind CSS ^3.4 via @astrojs/tailwind
- PostCSS + Autoprefixer
- TypeScript ^5.5

## Project structure
```
astro.config.mjs
package.json
postcss.config.cjs
tailwind.config.mjs
public/
  favicon.ico
  og-image.png
  robots.txt
  images/
    placeholder-1.png
src/
  env.d.ts
  config/
    site.ts
  layouts/
    BaseLayout.astro
  pages/
    index.astro
  react/
    App.tsx
    components/
      AboutSection.tsx
      ContactSection.tsx
      CountdownTimer.tsx
      DivineBackground.tsx
      DivineCross.tsx
      DivineParticles.tsx
      Footer.tsx
      HeroSection.tsx
      Navigation.tsx
      RegistrationSection.tsx
      ScheduleSection.tsx
  styles/
    globals.css
```

- Entry CSS: `src/styles/globals.css` (Tailwind layers + custom theme vars)
- Global layout: `src/layouts/BaseLayout.astro`
- Home page: `src/pages/index.astro`
- React components mounted within Astro pages/layouts under `src/react/`

## Scripts
- `npm run dev` — Start local dev server
- `npm run build` — Production build
- `npm run preview` — Preview the production build

## Setup
1. Install dependencies (avoid sudo):
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open the URL printed in the terminal.

## Styling and theming
- Tailwind 3 is configured via `@astrojs/tailwind` and `postcss.config.cjs`.
- `globals.css` defines CSS custom properties for light/dark surfaces and a custom “golden” palette used for divine effects.
- Tailwind layers are declared at the top of `globals.css`:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
- Additional utilities exist for gradients and glow effects used by “Divine*” components.

## Configuration
- `astro.config.mjs` adds React, Tailwind and Sitemap integrations. `site` defaults to `https://www.jojuvo.mx`.
- `tailwind.config.mjs` scans `./src/**/*.{astro,html,js,jsx,ts,tsx}` and extends a `golden` color scale.

## Deployment
- Any static host works (Netlify, Vercel, Cloudflare Pages, S3 + CDN, etc.).
- Build locally with `npm run build` and deploy the `dist/` folder, or connect your repo to your platform.

## Troubleshooting

### 1) CssSyntaxError: "@layer base is used but no matching @tailwind base directive is present"
Cause: Tailwind’s PostCSS plugin found `@layer base` in your CSS without the required Tailwind layer directives.

Fix: Ensure the very top of `src/styles/globals.css` contains:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
This repository already includes that fix.

### 2) EACCES / permission denied when building after a sudo install
If you previously installed dependencies with `sudo npm i`, your `node_modules/` and cache may be owned by root, causing build errors like:
```
EACCES: permission denied, mkdir '.../node_modules/.vite/...'
```
Fix (choose one):
- Preferred: reset modules without sudo
  ```bash
  # optional: restore ownership of the project folder
  sudo chown -R "$USER" .
  rm -rf node_modules package-lock.json .astro
  npm install
  ```
- Or, change ownership of the project directory once, then reinstall
  ```bash
  sudo chown -R "$USER" .
  npm install
  ```
After fixing permissions, run `npm run build` again.

### 3) Editor shows "Unknown at rule" for @tailwind/@apply
This is a CSS language service warning only. The Tailwind/PostCSS pipeline handles these directives during build.

## Notes
- Dark mode uses CSS variables in `globals.css`. If you prefer Tailwind’s built-in dark variant, set `darkMode: 'class'` in `tailwind.config.mjs` and add/remove a `.dark` class on the root element.

---
Maintained for JOJUVO 2025. PRs and improvements welcome.
