export function catmullRomInterpolate(point, curve) {
  if (!curve || curve.length === 0) return 0;
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

