# Upgrade Path — Balanced Next-Step Recommendations

Date: 2026-07-31
Status: Approved (design review) — pending implementation

## Problem

The Upgrade Path card on the FPS Calculator (`src/pages/[locale]/calculator.astro:563-586`) picks the first 4 GPUs in the dataset with a higher score than the current one. This surfaces unrealistic recommendations — an RX 580 (score 41) user sees RTX 5090-class cards — and offers no CPU recommendations at all. Users upgrade in steps, within a balanced budget, and want pair-friendly suggestions with small useful details (generation, cores).

## Approach

"Balanced next step": recommend the top cards in the *next score band only*, filtered by a pairing factor so suggestions never exceed what the current counterpart can drive. Bands reuse the thresholds already shown on GPU benchmark cards ("Best for" labels) for a consistent story.

- Score bands: `entry` <45, `mid` 45–64, `high` 65–84, `top` ≥85.
- Pair balance factor: 1.5× (recommended part score must be ≤ counterpart score × 1.5).

## Recommendation logic

Both lists follow the same rule with roles swapped:

1. **Target band** = one band above the current part's band, but at least the counterpart's band (catch-up rule: if your CPU is much stronger than your GPU, suggest GPUs that match it, and vice versa). Clamped to `top`.
2. **Picks** = top 3 parts in the target band with score > current part's score, and score ≤ counterpart score × 1.5.
3. **Top-up**: if fewer than 3 picks survive the pairing filter, fill from the same target band by score descending (cap is a heuristic, not a hard rule).
4. **Empty state**: nothing above in band, or current part already in `top` band → show the "already at the top" message (new `topTierCpu` variant for CPUs).

### Verified examples (real data)

- RX 580 (41) + Core i5-4460 (44) → GPU: RTX 4060 Ti, RTX 5060, Arc A770 · CPU: Core i5-9600K, Core i7-8700K (+ in-band top-up).
- RTX 4070 Ti Super (81) + Ryzen 5 7600X (84) → GPU: RTX 5090, RTX 4090, RTX 5080 · CPU: Core Ultra 9 385 / Ryzen 7 9800X3D-class.

## FPS gain

Estimate the gain honestly by re-running the engine with the upgraded part:

- GPU row: `window.RunFpsEngine.calculateFPS(config, game, upgradedGpu, cpu).avgFps`
- CPU row: `window.RunFpsEngine.calculateFPS(config, game, gpu, upgradedCpu).avgFps`

Displayed as `+X% · Y FPS` (percent vs. the current pair's avgFps). Bar width relative to the best gain in the list. This replaces the current raw score-ratio estimate (`upg.score / gpu.score`).

## UI

Upgrade Path card becomes two labeled mini-sections:

- **GPU upgrade** — up to 3 rows
- **CPU upgrade** — up to 3 rows

Each row: part name (bold), sub-line with small details (GPU: `generation · {vram}GB`; CPU: `generation · {cores}C/{threads}T`), right-aligned `+X% · Y FPS`, thin bar in the existing style (`bg-ink-soft`). Same visual language as the current rows — no links, no added data payloads, nothing fetched.

## i18n (4 locales: en, de, fr, es)

New keys under `calculator`:

- `upgradeGpu: 'GPU Upgrade'` (per-locale translation)
- `upgradeCpu: 'CPU Upgrade'` (per-locale translation)
- `topTierCpu: 'You already have a top-tier CPU.'` (per-locale translation)

Updated key:

- FAQ `upgrades` question answer (4 locales) — rewording to describe next-step/balanced-pair logic: suggestions are the next sensible step above your current part, filtered so they pair with your other component.

## Out of scope

- CPU benchmark pages (unchanged).
- Bottleneck/optimizer pages (unchanged).
- Filters, sort, tips sections on the calculator (unchanged).
- No budget input — pairing filter is budget-free.

## Validation

- `npx astro check` — expect 0 errors.
- `npm run build` — expect clean build.
- Node-script sanity check of the recommendation algorithm against real data (as done during design).
