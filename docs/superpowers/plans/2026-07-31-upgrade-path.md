# Upgrade Path Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the calculator's Upgrade Path with balanced next-step GPU + CPU recommendations (band-based, pairing-capped, honest FPS gains).

**Architecture:** Pure client-side change. All logic lives in the existing inline module script of `src/pages/[locale]/calculator.astro`; strings come from `src/i18n/translations.js` via the existing `ui` JSON blob. Two pure helper functions (`scoreBand`, `pickUpgrades`) decide picks; gains are computed by re-running `window.RunFpsEngine.calculateFPS` with the upgraded part.

**Tech Stack:** Astro 7, vanilla JS (inline module script), JSON data (`src/data/gpus.json`, `src/data/cpus.json`), no test framework (verify with node sanity scripts + `npm run check` + `npm run build`).

## Global Constraints

- Score bands: `entry` <45, `mid` 45–64, `high` 65–84, `top` ≥85.
- Pair cap factor: 1.5× (`part.score <= counterpart.score * 1.5`).
- Target band = `max(currentBandIndex + 1, counterpartBandIndex)`, clamped to `top` (catch-up rule).
- Picks: top `count` (3) in target band with `score > current.score`, capped first, then topped up in-band (cap is heuristic, not hard).
- FPS gains via engine re-run: GPU row `calculateFPS(config, game, upgGpu, cpu)`, CPU row `calculateFPS(config, game, gpu, upgCpu)`; percent vs. `result.avgFps`.
- No test framework exists; the repo's verification commands are `npm run check` and `npm run build`.

---

### Task 1: i18n keys and FAQ updates

**Files:**
- Modify: `src/i18n/translations.js` (4 locale blocks, `calculator` section)

**Interfaces:**
- Produces: translation keys `calculator.upgradeGpu`, `calculator.upgradeCpu`, `calculator.topTierCpu` in all 4 locales, and updated FAQ `upgrades` answers — consumed by Task 2.

- [ ] **Step 1: Add `upgradeGpu`, `upgradeCpu`, `topTierCpu` to the `calculator` block of each locale**

Add after the existing `upgradePath` line in each of the 4 `calculator` blocks (en ~line 127, de ~line 583, fr ~line 1039, es ~line 1495):

```js
upgradeGpu: 'GPU Upgrade',
upgradeCpu: 'CPU Upgrade',
topTierCpu: 'You already have a top-tier CPU.',
```

```js
upgradeGpu: 'GPU-Upgrade',
upgradeCpu: 'CPU-Upgrade',
topTierCpu: 'Du hast bereits eine CPU der Spitzenklasse.',
```

```js
upgradeGpu: 'Amélioration du GPU',
upgradeCpu: 'Amélioration du CPU',
topTierCpu: 'Tu as déjà un CPU haut de gamme.',
```

```js
upgradeGpu: 'Mejora de GPU',
upgradeCpu: 'Mejora de CPU',
topTierCpu: 'Ya tienes una CPU de gama alta.',
```

- [ ] **Step 2: Replace the FAQ `upgrades` answer in each locale**

Locate each FAQ entry `id: 'upgrades'` inside the calculator FAQ (en ~line 403-405, de ~line 859-861, fr ~line 1315-1317, es ~line 1771-1773) and replace the `answer` string with:

```js
// en
answer: 'Upgrade suggestions pick the next sensible step above your current part and filter it so it pairs well with your other component — we never recommend jumping several tiers at once. The estimated FPS gain is computed by simulating your system with the upgraded part. Actual performance depends on your full system, but relative ranking is a reliable indicator.'
```

```js
// de
answer: 'Upgrade-Vorschläge wählen den nächsten sinnvollen Schritt über deinem aktuellen Bauteil und filtern so, dass er gut zu deiner anderen Komponente passt — wir empfehlen nie Sprünge über mehrere Stufen. Der geschätzte FPS-Gewinn wird berechnet, indem dein System mit dem aufgerüsteten Bauteil simuliert wird. Die tatsächliche Leistung hängt von deinem gesamten System ab, aber die relative Rangfolge ist ein zuverlässiger Indikator.'
```

```js
// fr
answer: 'Les suggestions d\'amélioration choisissent le prochain pas logique au-dessus de ton composant actuel et le filtrent pour qu\'il s\'associe bien à ton autre composant — nous ne recommandons jamais de sauter plusieurs paliers à la fois. Le gain de FPS estimé est calculé en simulant ton système avec le composant amélioré. Les performances réelles dépendent de l\'ensemble du système, mais le classement relatif reste un indicateur fiable.'
```

```js
// es
answer: 'Las sugerencias de mejora eligen el siguiente paso lógico por encima de tu componente actual y lo filtran para que combine bien con tu otro componente — nunca recomendamos saltar varios niveles a la vez. La ganancia estimada de FPS se calcula simulando tu sistema con el componente mejorado. El rendimiento real depende de tu sistema completo, pero la clasificación relativa es un indicador fiable.'
```

- [ ] **Step 3: Verify key counts**

Run:
```powershell
rg -c "upgradeGpu:" src/i18n/translations.js
rg -c "upgradeCpu:" src/i18n/translations.js
rg -c "topTierCpu:" src/i18n/translations.js
```
Expected: `4` for each.

- [ ] **Step 4: Commit**

```bash
git add src/i18n/translations.js
git commit -m "i18n: add upgrade path GPU/CPU labels and update FAQ answers"
```

---

### Task 2: Calculator upgrade path logic and UI

**Files:**
- Modify: `src/pages/[locale]/calculator.astro` (frontmatter `ui` object ~line 22; inline module script — replace `showResults` upgrade block lines 563-586; card markup ~line 263-264)

**Interfaces:**
- Consumes: `t('calculator.upgradeGpu')`, `t('calculator.upgradeCpu')`, `t('calculator.topTierCpu')` from Task 1; existing `t('calculator.topTierGpu')`; `window.RunFpsEngine.calculateFPS(config, game, gpuObj, cpuObj)`.
- Produces: rendered `#upgrade-path` with two sections ("GPU upgrade" / "CPU upgrade"), up to 3 rows each, each row = name, sub-line, `+X% · Y FPS`, thin bar.

- [ ] **Step 1: Wire new keys into the frontmatter `ui` object**

After the existing `upgradePath: t('calculator.upgradePath'),` line add:

```js
  upgradeGpu: t('calculator.upgradeGpu'),
  upgradeCpu: t('calculator.upgradeCpu'),
  topTierCpu: t('calculator.topTierCpu'),
```

- [ ] **Step 2: Add the selection helpers to the inline module script**

Insert before the `showResults` function (e.g. right after `const $ = (id) => document.getElementById(id);`):

```js
const BAND_ORDER = ['entry', 'mid', 'high', 'top'];

function scoreBand(score) {
  if (score < 45) return 'entry';
  if (score < 65) return 'mid';
  if (score < 85) return 'high';
  return 'top';
}

function pickUpgrades(current, pool, counterpart, count = 3) {
  const curIdx = BAND_ORDER.indexOf(scoreBand(current.score));
  const pairIdx = BAND_ORDER.indexOf(scoreBand(counterpart.score));
  const targetIdx = Math.min(Math.max(curIdx + 1, pairIdx), BAND_ORDER.length - 1);
  const targetBand = BAND_ORDER[targetIdx];
  const cap = Math.round(counterpart.score * 1.5);
  const inBand = pool
    .filter(p => scoreBand(p.score) === targetBand && p.score > current.score)
    .sort((a, b) => b.score - a.score);
  const picks = inBand.filter(p => p.score <= cap);
  for (const p of inBand) {
    if (picks.length >= count) break;
    if (!picks.includes(p)) picks.push(p);
  }
  return picks.slice(0, count);
}
```

- [ ] **Step 3: Replace the upgrade-path rendering block**

Replace lines 563-586 (the `const upgradePath = $('upgrade-path'); ... else { upgradePath.innerHTML = ... }` block inside `showResults`) with:

```js
  const upgradePath = $('upgrade-path');
  const gpuUpgrades = pickUpgrades(gpu, gpus, cpu);
  const cpuUpgrades = pickUpgrades(cpu, cpus, gpu);

  const renderUpgradeRow = (upg, isCpu, barWidth) => {
    const upgResult = window.RunFpsEngine.calculateFPS(config, game, isCpu ? gpu : upg, isCpu ? upg : cpu);
    const gainPct = Math.round((upgResult.avgFps / result.avgFps - 1) * 100);
    const gainFps = Math.round(upgResult.avgFps - result.avgFps);
    const sub = isCpu
      ? `${upg.generation} &middot; ${upg.cores}C/${upg.threads}T`
      : `${upg.generation} &middot; ${upg.vram}GB VRAM`;
    return `<div>
      <div class="flex justify-between text-xs font-mono mb-0.5">
        <span class="text-ink dark:text-dark-ink">${upg.name}</span>
        <span class="text-mid-gray dark:text-dark-mid-gray">+${gainPct}% <span class="font-medium text-ink dark:text-dark-ink">${gainFps} ${i18n.fps}</span></span>
      </div>
      <div class="text-[11px] text-mid-gray dark:text-dark-mid-gray font-mono mb-1">${sub}</div>
      <div class="h-1.5 bg-canvas dark:bg-dark-canvas rounded-full overflow-hidden">
        <div class="h-full bg-ink-soft dark:bg-dark-ink-soft rounded-full transition-all duration-500" style="width:${barWidth}%"></div>
      </div>
    </div>`;
  };

  const renderUpgradeSection = (label, items, isCpu) => {
    if (items.length === 0) {
      return `<h3 class="text-xs font-semibold uppercase tracking-wide text-mid-gray dark:text-dark-mid-gray mb-2">${label}</h3>
        <p class="text-xs text-mid-gray dark:text-dark-mid-gray">${isCpu ? i18n.topTierCpu : i18n.topTierGpu}</p>`;
    }
    const gains = items.map(u => {
      const r = window.RunFpsEngine.calculateFPS(config, game, isCpu ? gpu : u, isCpu ? u : cpu);
      return Math.round(r.avgFps - result.avgFps);
    });
    const maxGain = Math.max(...gains, 1);
    return `<h3 class="text-xs font-semibold uppercase tracking-wide text-mid-gray dark:text-dark-mid-gray mb-2">${label}</h3>` +
      items.map((u, i) => renderUpgradeRow(u, isCpu, (gains[i] / maxGain) * 100)).join('');
  };

  upgradePath.innerHTML =
    renderUpgradeSection(i18n.upgradeGpu, gpuUpgrades, false) +
    renderUpgradeSection(i18n.upgradeCpu, cpuUpgrades, true);
```

**Note on the bar width:** the code above references `barWidth` in `renderUpgradeRow`; change the helper signature to `(upg, isCpu, barWidth)` and call it as `renderUpgradeRow(u, isCpu, (gains[i] / maxGain) * 100)` so the width is passed in. Remove the unused `counterpart` parameter from `renderUpgradeRow`.

- [ ] **Step 4: Sanity-check the selection algorithm with real data**

Run (node, standalone replica of `pickUpgrades` against the real JSON):

```powershell
node -e "const g=require('./src/data/gpus.json').gpus;const c=require('./src/data/cpus.json').cpus;const BAND_ORDER=['entry','mid','high','top'];const band=s=>BAND_ORDER[s<45?0:s<65?1:s<85?2:3];const pick=(cur,pool,counter)=>{const ci=BAND_ORDER.indexOf(band(cur.score)),pi=BAND_ORDER.indexOf(band(counter.score));const ti=Math.min(Math.max(ci+1,pi),BAND_ORDER.length-1);const tb=BAND_ORDER[ti];const cap=Math.round(counter.score*1.5);const inBand=pool.filter(p=>band(p.score)===tb&&p.score>cur.score).sort((a,b)=>b.score-a.score);const picks=inBand.filter(p=>p.score<=cap);for(const p of inBand){if(picks.length>=3)break;if(!picks.includes(p))picks.push(p)}return picks.slice(0,3)};const gpu=g.find(x=>x.id==='rx-580'),cpu=c.find(x=>/4460/.test(x.name));console.log('GPU:',pick(gpu,g,cpu).map(x=>x.name).join(', '));console.log('CPU:',pick(cpu,c,gpu).map(x=>x.name).join(', '));const hg=g.find(x=>x.name.includes('4070 Ti Super')),hc=c.find(x=>x.name.includes('7600X'));console.log('GPU high:',pick(hg,g,hc).map(x=>x.name).join(', '));console.log('CPU high:',pick(hc,c,hg).map(x=>x.name).join(', '));const top=c.find(x=>x.name.includes('9800X3D'));console.log('top CPU w/ rx580 GPU:',pick(top,c,gpu).map(x=>x.name).join(', '))"
```

Expected output:
```
GPU: RTX 4060 Ti, RTX 5060, Arc A770
CPU: Core i5-9600K, Core i7-8700K, Core i7-8700
GPU high: RTX 5090, RTX 4090, RTX 5080
CPU high: Core Ultra 9 385, Ryzen 7 9800X3D, Ryzen 9 9950X3D
top CPU w/ rx580 GPU: (empty line)
```

- [ ] **Step 5: Run the type check**

Run: `npm run check`
Expected: 0 errors (existing hints are pre-existing and acceptable).

- [ ] **Step 6: Commit**

```bash
git add "src/pages/[locale]/calculator.astro"
git commit -m "calculator: balanced next-step GPU and CPU upgrade recommendations"
```

---

### Task 3: Full build verification and push

**Files:**
- No source changes.

- [ ] **Step 1: Production build**

Run: `npm run build`
Expected: `1787 page(s) built` (or the same count as the current main) — build completes with no errors.

- [ ] **Step 2: Verify the new strings landed in the built page**

Run:
```powershell
Select-String -Path "dist\en\calculator\index.html" -Pattern "GPU Upgrade|CPU Upgrade|topTier" | Select-Object -First 3
```
Expected: matches for `GPU Upgrade` and `CPU Upgrade`.

- [ ] **Step 3: Push**

```bash
git push origin main
```

---

## Self-Review Notes

- Spec coverage: bands ✓ (Task 2 helpers), catch-up rule ✓ (Task 2 `targetIdx`), pairing cap ✓ (`cap`), top-up ✓ (fill loop), empty states ✓ (`topTierGpu`/`topTierCpu`), honest FPS gains ✓ (engine re-run), i18n ✓ (Task 1), FAQ ✓ (Task 1 Step 2), out-of-scope items untouched ✓.
- Placeholder scan: no TBD/TODO; all code blocks are complete and final.
- Type consistency: `pickUpgrades(current, pool, counterpart, count)` used identically in Step 3 (`pickUpgrades(gpu, gpus, cpu)`) and the sanity script; `scoreBand` returns one of `BAND_ORDER` values everywhere.
