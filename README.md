# RunFps

Know your FPS. Tweak your settings. Play better.

RunFps is a free, client-side tool that estimates FPS for any combination of GPU, CPU, and game. It includes a settings optimizer, bottleneck analysis, and hardware comparison — everything runs in the browser, no signup required.

## Tech Stack

- [Astro](https://astro.build) 7 — static site, no SSR
- [Tailwind CSS](https://tailwindcss.com) 4 — via `@tailwindcss/vite`
- Vanilla JavaScript — no component framework
- Cloudflare Pages — static hosting with `_headers` CSP
- i18n — English, German, French, Spanish (`/en`, `/de`, `/fr`, `/es`)

## Commands

| Command | Action |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Build to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run check` | TypeScript validation |

## Project Structure

```
src/
  components/   .astro components (Header, Footer, etc.)
  data/         Game, GPU, and CPU data + shared JS utilities
  i18n/         Translations and locale helpers
  layouts/      Layout.astro (shared page shell)
  pages/        Routes (calculator, benchmarks, compare, games, ...)
  styles/       Global CSS
public/
  engine.js     FPS calculation engine (ES module)
  sw.js         Service worker (offline cache)
  favicon/      Site icons
  fonts/        Self-hosted webfonts
```

## Development

Start the dev server in background mode:

```
astro dev --background
```

Manage it with `astro dev stop`, `astro dev status`, and `astro dev logs`.
