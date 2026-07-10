// RunFps FPS Engine v1.0 - ES Module
'use strict';

function getPerformanceCurve(game) {
  if (game.performanceCurve && game.performanceCurve.length >= 2) return game.performanceCurve;
  const tier = game.optimizationTier;
  return [
    { gpuScore: 0, fps: 10 },
    { gpuScore: 50, fps: tier === 'light' ? 60 : tier === 'medium' ? 45 : 30 },
    { gpuScore: 100, fps: tier === 'light' ? 120 : tier === 'medium' ? 90 : 60 }
  ];
}

export function calculateFPS(config, game, gpu, cpu) {
  const {
    ramCapacity = 16, ramType = 'ddr5', ramSpeed = 6000, ramChannel = 'dual',
    storage = 'nvme', resolution = '1080p', preset = 'high',
    rtEnabled = false, upscaling = 'none', resolutionScale = 100,
    frameCap = 0, monitorHz = 144, vramLimit = 0, os = 'windows'
  } = config;

  const curve = getPerformanceCurve(game);

  let baseFps = catmullRomInterpolate(gpu.score, curve);
  const cpuFactor = 1.0 - (game.cpuWeight * (1.0 - cpu.score / 100));
  const ramFactor = calculateRamFactor(game, ramCapacity, ramType, ramSpeed, ramChannel);
  const storageFactor = storage === 'nvme' ? 1.0 : storage === 'ssd' ? 0.97 : 0.92;
  const resScales = { '720p': 1.25, '800p': 1.18, '1080p': 1.0, '1440p': 0.72, '4K': 0.45 };
  const resScale = resScales[resolution] || 1.0;
  const presetScales = { 'low': 1.4, 'medium': 1.15, 'high': 0.9, 'ultra': 0.7 };
  const presetScale = presetScales[preset] || 0.9;
  const rtPenalty = rtEnabled ? 0.8 : 1.0;
  const upscaleBoosts = {
    'none': 1.0, 'dlss_quality': 1.15, 'dlss_balanced': 1.22, 'dlss_performance': 1.30,
    'fsr_quality': 1.12, 'fsr_balanced': 1.18, 'fsr_performance': 1.25,
    'xess_quality': 1.13, 'xess_balanced': 1.19, 'xess_performance': 1.27
  };
  const upscaleBoost = upscaleBoosts[upscaling] || 1.0;
  const resScaleFactor = 0.5 + (resolutionScale / 100) * 0.5;
  const vramPenalty = calculateVramPenalty(gpu.vram, game.vramRequirement, vramLimit);
  const osFactors = { 'windows': 1.0, 'windows11': 1.0, 'linux': 0.92 };
  const osFactor = osFactors[os] || 1.0;

  let fps = baseFps * cpuFactor * ramFactor * storageFactor * resScale * presetScale * rtPenalty * upscaleBoost * resScaleFactor * vramPenalty * osFactor;

  const optStability = { 'light': 0.85, 'medium': 0.80, 'heavy': 0.72, 'very_heavy': 0.65 };
  const stability = optStability[game.optimizationTier] || 0.75;
  const minFps = Math.round(fps);
  if (frameCap > 0 && minFps > frameCap) fps = frameCap;

  const p1Low = fps * stability;
  const p01Low = fps * (stability - 0.15);

  const rating = fps >= 240 ? 'Elite' : fps >= 144 ? 'High Refresh' : fps >= 60 ? 'Smooth' : fps >= 30 ? 'Playable' : 'Unplayable';
  const bn = calculateBottleneck(cpu, gpu, game, resolution);

  return {
    avgFps: Math.round(fps), p1Low: Math.round(p1Low), p01Low: Math.round(p01Low),
    fpsCapped: frameCap > 0 && minFps > frameCap, rating,
    cpuLoad: bn.cpuLoad, gpuLoad: bn.gpuLoad,
    bottleneck: bn.bottleneckType, bottleneckPercent: bn.bottleneckPercent
  };
}

export function catmullRomInterpolate(point, curve) {
  const sorted = [...curve].sort((a, b) => a.gpuScore - b.gpuScore);
  if (point <= sorted[0].gpuScore) return sorted[0].fps;
  if (point >= sorted[sorted.length - 1].gpuScore) return sorted[sorted.length - 1].fps;
  let i = 0;
  while (i < sorted.length - 1 && sorted[i + 1].gpuScore <= point) i++;
  if (i === 0) i = 1;
  if (i >= sorted.length - 1) i = sorted.length - 2;
  const p0 = sorted[i - 1], p1 = sorted[i], p2 = sorted[i + 1], p3 = sorted[Math.min(i + 2, sorted.length - 1)];
  const t = (point - p1.gpuScore) / (p2.gpuScore - p1.gpuScore);
  const t2 = t * t, t3 = t2 * t;
  return 0.5 * ((2 * p1.fps) + (-p0.fps + p2.fps) * t + (2 * p0.fps - 5 * p1.fps + 4 * p2.fps - p3.fps) * t2 + (-p0.fps + 3 * p1.fps - 3 * p2.fps + p3.fps) * t3);
}

export function calculateRamFactor(game, capacity, type, speed, channel) {
  const req = Math.max(game.ramRequirement, 1);
  const capacityRatio = capacity / req;
  const capacityFactor = Math.min(1.0, capacityRatio);
  const severePenalty = capacityRatio < 0.5 ? 0.9 : 1.0;
  const speedMap = {
    'ddr5': { 4800: 1.0, 5200: 1.0, 5600: 1.0, 6000: 1.02, 6400: 1.02, 6800: 1.04, 7200: 1.04, 8000: 1.04 },
    'ddr4': { 2133: 0.90, 2400: 0.90, 2666: 0.90, 3000: 0.95, 3200: 0.95, 3600: 1.0, 4000: 1.0, 4400: 1.0 },
    'ddr3': { 1333: 0.80, 1600: 0.80, 1866: 0.85, 2133: 0.85 },
    'ddr2': 0.70
  };
  const typeSpeedMap = speedMap[type];
  let speedFactor;
  if (typeof typeSpeedMap === 'number') speedFactor = typeSpeedMap;
  else if (typeSpeedMap) {
    const speeds = Object.keys(typeSpeedMap).map(Number).sort((a, b) => a - b);
    let closest = speeds[0];
    for (const s of speeds) { if (Math.abs(s - speed) < Math.abs(closest - speed)) closest = s; if (s >= speed) break; }
    speedFactor = typeSpeedMap[closest] || 1.0;
  } else speedFactor = 0.8;
  const channelFactor = channel === 'quad' ? 1.02 : channel === 'dual' ? 1.0 : 0.92;
  return Math.min(1.0, capacityFactor * severePenalty * speedFactor * channelFactor);
}

export function calculateVramPenalty(gpuVram, gameVramReq, vramLimit) {
  const effectiveVram = vramLimit > 0 ? Math.min(gpuVram, vramLimit) : gpuVram;
  const ratio = effectiveVram / Math.max(gameVramReq, 1);
  if (ratio >= 1.0) return 1.0;
  if (ratio >= 0.9) return 0.95;
  if (ratio >= 0.8) return 0.90;
  if (ratio >= 0.7) return 0.85;
  if (ratio >= 0.6) return 0.80;
  return 0.75;
}

export function calculateBottleneck(cpu, gpu, game, resolution) {
  const resBias = { '720p': 1.3, '800p': 1.2, '1080p': 1.0, '1440p': 0.85, '4K': 0.7 };
  const bias = resBias[resolution] || 1.0;
  const cpuWeight = game.cpuWeight * bias;
  const cpuLoad = (cpu.score / (cpu.score + gpu.score)) * cpuWeight * 100;
  const gpuLoad = 100 - cpuLoad;
  const total = cpuLoad + gpuLoad;
  const cpuPct = Math.round((cpuLoad / total) * 100);
  const gpuPct = Math.round((gpuLoad / total) * 100);
  const bottleneckPct = Math.min(100, Math.round(Math.abs(cpuPct - 50) * 1.6));
  const diff = Math.abs(cpuPct - gpuPct);
  const type = diff <= 10 ? 'Balanced' : cpuPct > gpuPct ? 'CPU' : 'GPU';
  return { cpuLoad: cpuPct, gpuLoad: gpuPct, bottleneckPercent: bottleneckPct, bottleneckType: type };
}

export function optimizeSettings(currentFps, targetFps, game, result) {
  if (currentFps >= targetFps) return { canReach: true, changes: [], finalFps: currentFps };
  const changes = [];
  let fps = currentFps;
  const impacts = game.settingsImpact || {};
  for (const [setting, transitions] of Object.entries(impacts)) {
    if (fps >= targetFps) break;
    for (const [transition, gainPercent] of Object.entries(transitions)) {
      if (fps >= targetFps) break;
      const [from, to] = transition.split('_to_');
      const gain = Math.round(fps * (gainPercent / 100));
      if (gain > 0) { changes.push({ setting, from, to, gain }); fps += gain; }
    }
  }
  return { canReach: fps >= targetFps, changes, finalFps: Math.round(fps), qualityImpact: changes.length > 2 ? Math.max(0, 100 - changes.length * 8) : 100 };
}

window.RunFpsEngine = {
  calculateFPS, catmullRomInterpolate, calculateBottleneck,
  optimizeSettings
};


