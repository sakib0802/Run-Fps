# RunFps

Know your FPS. Tweak your settings. Play better.

Select your GPU and CPU and any game to get instant FPS estimates — plus optimization tips, bottleneck analysis, and hardware comparison. Everything runs in your browser. Free, no signup.

## Tech

- [Astro](https://astro.build) v7 — static site, no SSR
- [Tailwind CSS](https://tailwindcss.com) v4 — via `@tailwindcss/vite`
- Vanilla JS — no React/Vue/Svelte
- Cloudflare Pages — static hosting with `_headers` CSP

## Commands

| Command | Action |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run check` | TypeScript validation |

## Project Structure

```
src/
  components/     — .astro components (Header, Footer, etc.)
  data/           — JSON data (GPUs, CPUs, games) + shared JS utilities
  layouts/        — Layout.astro (shared shell)
  pages/          — Route pages (calculator, benchmarks, compare, games...)
  styles/         — global.css + bg-pattern.css
public/
  engine.js       — FPS calculation engine (ES module)
  sw.js           — Service worker
  *.json          — Runtime data (fetched by calculators)
  fonts/          — Self-hosted webfonts
```
