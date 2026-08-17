interface Window {
  _rtHeaderInit?: boolean;
  RunFpsEngine?: {
    calculateFPS: (config: unknown, game: unknown, gpu: unknown, cpu: unknown) => { avgFps: number };
    optimizeSettings: (currentFps: number, targetFps: number, game: unknown) => unknown;
  };
}
