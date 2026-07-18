export const profiles = {
  "counter-strike-2": {
    title: "Competitive Settings",
    target: "144-240+ FPS",
    focus: "Maximum visibility and framerate",
    tips: [
      { text: "Set Multicore Rendering to Enabled", impact: "+10-20%" },
      { text: "Shadow Quality: Low or Medium (shadows still visible at comp distance)", impact: "+5-10%" },
      { text: "Texture Quality: Low (frees VRAM, minimal visual loss)", impact: "+3-5%" },
      { text: "Particle Detail: Low (reduces smoke/flash visual clutter)", impact: "+5-8%" },
      { text: "Ambient Light: Disabled or Low", impact: "+3-5%" },
      { text: "Model/Texture Detail: Low", impact: "+2-4%" },
      { text: "Shader Detail: Low", impact: "+3-5%" },
      { text: "FidelityFX Super Resolution: Disabled or Ultra Quality if needed", impact: "+15-30%" }
    ]
  },
  "valorant": {
    title: "Pro Settings",
    target: "144-240+ FPS",
    focus: "Minimal visual noise, sharp enemy outlines",
    tips: [
      { text: "Material Quality: Low", impact: "+3-5%" },
      { text: "Texture Quality: Low", impact: "+2-4%" },
      { text: "Detail Quality: Low", impact: "+3-5%" },
      { text: "UI Quality: Low", impact: "+1-2%" },
      { text: "Vignette: Off", impact: "+2-3%" },
      { text: "VSync: Off", impact: "+5-10%" },
      { text: "Anti-Aliasing: MSAA 2x (MSAA 4x halves FPS, avoid)", impact: "+5-15%" },
      { text: "Anisotropic Filtering: 4x or 8x", impact: "+1-2%" },
      { text: "Improve Clarity: On", impact: "Quality" },
      { text: "Bloom: Off", impact: "+2-3%" },
      { text: "Distortion: Off", impact: "+2-3%" },
      { text: "Cast Shadows: Off", impact: "+5-8%" }
    ]
  },
  "fortnite": {
    title: "Performance Mode Settings",
    target: "60-144+ FPS",
    focus: "Performance Mode + minimal visual distractions",
    tips: [
      { text: "Switch to Performance Mode (DX11/12 → Performance in Video settings)", impact: "+30-50%" },
      { text: "3D Resolution: 100% (lower only if absolutely needed)", impact: "Baseline" },
      { text: "View Distance: Epic or High (see enemies at range)", impact: "-5-10%" },
      { text: "Shadows: Off", impact: "+10-15%" },
      { text: "Anti-Aliasing: Off (SMAA T2X if you must)", impact: "+5-10%" },
      { text: "Textures: Low or Medium", impact: "+5-8%" },
      { text: "Effects: Low", impact: "+8-12%" },
      { text: "Post-Processing: Low", impact: "+5-8%" },
      { text: "Global Illumination: Off", impact: "+5-10%" },
      { text: "Reflections: Off", impact: "+5-8%" },
      { text: "VSync: Off", impact: "+5-10%" }
    ]
  },
  "cyberpunk-2077": {
    title: "Balanced Quality Settings",
    target: "60 FPS",
    focus: "Preserve visual quality while maintaining 60 FPS",
    tips: [
      { text: "DLSS/FSR: Quality or Balanced", impact: "+20-40%" },
      { text: "Texture Quality: High (minimal FPS impact, big visual gain)", impact: "-1-2%" },
      { text: "Shadow Quality: Medium", impact: "+5-8%" },
      { text: "Volumetric Fog: Medium or Low (huge FPS impact)", impact: "+10-20%" },
      { text: "Screen Space Reflections: Medium or Low", impact: "+5-10%" },
      { text: "Ambient Occlusion: Low or Medium", impact: "+3-5%" },
      { text: "Ray Tracing: Off (unless RTX 4070+ with headroom)", impact: "+20-35%" },
      { text: "Crowd Density: Medium", impact: "+3-5%" },
      { text: "Level of Detail: High", impact: "-2-3%" },
      { text: "Contact Shadows: On or Low", impact: "+2-4%" }
    ]
  },
  "call-of-duty-warzone": {
    title: "Competitive Settings",
    target: "120-144+ FPS",
    focus: "Competitive visibility with stable framerate",
    tips: [
      { text: "Display Mode: Fullscreen Exclusive", impact: "+3-5%" },
      { text: "Render Resolution: 100%", impact: "Baseline" },
      { text: "Upscaling: FSR 2.1 Quality or DLSS Quality", impact: "+15-25%" },
      { text: "VRAM Scale: 80-85", impact: "Stability" },
      { text: "Texture Resolution: Low or Normal", impact: "+3-5%" },
      { text: "Texture Filter Anisotropic: Low", impact: "+2-3%" },
      { text: "Shadow Resolution: Low", impact: "+5-8%" },
      { text: "Spot Shadow Quality: Low", impact: "+3-5%" },
      { text: "Spot Cache: Low", impact: "+2-4%" },
      { text: "Particle Lighting: Low", impact: "+3-5%" },
      { text: "Tessellation: Off", impact: "+3-5%" },
      { text: "Anti-Aliasing: SMAA 1x or Filmic SMAA T2X", impact: "+5-10%" },
      { text: "Depth of Field: Off", impact: "+2-3%" },
      { text: "World Motion Blur: Off", impact: "+1-2%" },
      { text: "Weapon Motion Blur: Off", impact: "+1-2%" }
    ]
  },
  "apex-legends": {
    title: "Competitive Settings",
    target: "144-240+ FPS",
    focus: "Maximum clarity and responsiveness",
    tips: [
      { text: "Display Mode: Fullscreen", impact: "+3-5%" },
      { text: "Texture Streaming Budget: Low or 2-3 GB (match your VRAM)", impact: "+5-10%" },
      { text: "Texture Filtering: Anisotropic 2x or 4x", impact: "+2-3%" },
      { text: "Ambient Occlusion: Disabled (huge FPS gain)", impact: "+10-15%" },
      { text: "Sun Shadow Coverage: Low", impact: "+5-8%" },
      { text: "Sun Shadow Detail: Low", impact: "+3-5%" },
      { text: "Spot Shadow Detail: Low or Disabled", impact: "+3-5%" },
      { text: "Volumetric Lighting: Disabled (big FPS hit when on)", impact: "+8-12%" },
      { text: "Dynamic Spot Shadows: Disabled", impact: "+5-8%" },
      { text: "Model Detail: Low", impact: "+3-5%" },
      { text: "Effects Detail: Low", impact: "+3-5%" },
      { text: "Impact Marks: Low", impact: "+1-2%" },
      { text: "Ragdolls: Low", impact: "+1-2%" },
      { text: "VSync: Disabled", impact: "+5-10%" },
      { text: "Adaptive Resolution FPS Target: 0 (off)", impact: "Stability" }
    ]
  },
  "elden-ring": {
    title: "Stable 60 FPS Settings",
    target: "60 FPS",
    focus: "Eliminate stutter, maintain stable framerate",
    tips: [
      { text: "Ray Tracing: Off (heavy performance cost, minimal visual impact in this game)", impact: "+15-25%" },
      { text: "Shadow Quality: Low or Medium", impact: "+5-8%" },
      { text: "Lighting Quality: Medium or Low", impact: "+5-8%" },
      { text: "Effects Quality: Low (less particle clutter)", impact: "+5-10%" },
      { text: "Volumetric Quality: Low (big FPS impact)", impact: "+10-15%" },
      { text: "Reflections Quality: Low", impact: "+5-8%" },
      { text: "Water Surface Quality: Low", impact: "+2-3%" },
      { text: "Shader Quality: Low", impact: "+3-5%" },
      { text: "Global Illumination Quality: Medium or Low", impact: "+5-8%" },
      { text: "Set max FPS via GPU driver (not in-game) for smoother frame pacing", impact: "Stability" }
    ]
  },
  "grand-theft-auto-v": {
    title: "Optimized Settings",
    target: "60-144 FPS",
    focus: "Great visuals without wasting performance",
    tips: [
      { text: "DirectX Version: DX11 (more stable than DX10, faster than DX12 in this game)", impact: "+5-10%" },
      { text: "Texture Quality: High (very little FPS impact)", impact: "-1-2%" },
      { text: "Shader Quality: High", impact: "-2-3%" },
      { text: "Shadow Quality: High or Normal (Softest gives less aliasing)", impact: "+3-5%" },
      { text: "Reflection Quality: Normal or High (MSAA reflections are expensive)", impact: "+5-8%" },
      { text: "Reflection MSAA: Off (very expensive, subtle difference)", impact: "+10-15%" },
      { text: "Water Quality: Normal (high quality costs FPS near water)", impact: "+3-5%" },
      { text: "Particles Quality: Normal", impact: "+2-3%" },
      { text: "Grass Quality: Normal (Ultra is extremely expensive in grassy areas)", impact: "+10-20%" },
      { text: "Soft Shadows: NVIDIA PCSS or Soft (Sharpest is cheapest)", impact: "+0-5%" },
      { text: "Post FX: Normal or High", impact: "+3-5%" },
      { text: "Motion Blur: Off", impact: "+2-3%" },
      { text: "Anisotropic Filtering: 4x or 8x", impact: "+1-2%" },
      { text: "Ambient Occlusion: Off or Normal (HDAO+ costs FPS)", impact: "+5-8%" },
      { text: "Tessellation: Off or Normal", impact: "+2-3%" }
    ]
  },
  "minecraft": {
    title: "Performance Settings (Java Edition)",
    target: "60-144+ FPS",
    focus: "Install performance mods + optimize vanilla settings",
    tips: [
      { text: "Install Sodium mod (huge FPS boost with no visual loss)", impact: "+100-300%" },
      { text: "Install Lithium mod (optimizes server-side physics)", impact: "+10-20%" },
      { text: "Install Starlight mod (optimizes lighting engine)", impact: "+20-40%" },
      { text: "Install Iris Shaders if you want shaders (better FPS than OptiFine)", impact: "Quality" },
      { text: "Render Distance: 8-12 chunks (16+ is expensive)", impact: "+10-25%" },
      { text: "Graphics: Fabulous is very expensive — use Fancy or Fast", impact: "+15-30%" },
      { text: "Smooth Lighting: Minimum or Off", impact: "+5-10%" },
      { text: "Clouds: Off", impact: "+2-5%" },
      { text: "Entity Distance: 50-100% (lower in crowded areas)", impact: "+5-15%" },
      { text: "Particles: Minimal or Decreased", impact: "+3-8%" },
      { text: "Mipmap Levels: 1 or 2 (4 is expensive on low-end GPUs)", impact: "+3-5%" },
      { text: "Biome Blend: 1×1 or 3×3", impact: "+1-2%" },
      { text: "Allocate at least 4 GB RAM in launcher settings (not default 2 GB)", impact: "Stability" }
    ]
  },
  "overwatch-2": {
    title: "Competitive Settings",
    target: "144-240+ FPS",
    focus: "Stable high framerate with clear visuals",
    tips: [
      { text: "Display Mode: Fullscreen", impact: "+3-5%" },
      { text: "Render Scale: 100% (Auto if below target)", impact: "Baseline" },
      { text: "Upscaling: FSR 2.2 Quality or DLSS Quality", impact: "+15-25%" },
      { text: "Texture Quality: Low or Medium", impact: "+3-5%" },
      { text: "Texture Filtering: 2x or 4x", impact: "+1-2%" },
      { text: "Shadow Detail: Off or Low", impact: "+5-8%" },
      { text: "Model Detail: Low", impact: "+3-5%" },
      { text: "Effects Detail: Low", impact: "+3-5%" },
      { text: "Lighting Quality: Low", impact: "+3-5%" },
      { text: "Anti-Aliasing: Low or Off (FXAA blurs, SMAA is better)", impact: "+5-10%" },
      { text: "Reflections: Off or Low", impact: "+3-5%" },
      { text: "Ambient Occlusion: Off", impact: "+5-8%" },
      { text: "VSync: Off", impact: "+5-10%" },
      { text: "Triple Buffering: Off", impact: "+5-10%" },
      { text: "Local Reflections: Off", impact: "+3-5%" },
      { text: "Reduced Buffering: On (reduces input lag)", impact: "Input" }
    ]
  },
  "red-dead-redemption-2": {
    title: "Optimized Quality Settings",
    target: "60 FPS",
    focus: "Balanced visuals with stable 60 FPS on mid-range hardware",
    tips: [
      { text: "Upscaling: FSR 2.0 Quality or DLSS Quality", impact: "+20-35%" },
      { text: "Texture Quality: Ultra or High (minimal FPS impact)", impact: "-1-2%" },
      { text: "Shadow Quality: High or Medium (Ultra is expensive)", impact: "+5-10%" },
      { text: "Lighting Quality: Medium or High", impact: "+3-5%" },
      { text: "Global Illumination: Medium (Ultra is heavy)", impact: "+5-8%" },
      { text: "Reflection Quality: Medium or Low (very expensive at Ultra)", impact: "+10-15%" },
      { text: "Water Quality: Custom — set Reflection to Low, Physics to 1/4", impact: "+5-10%" },
      { text: "Volumetrics: Low or Medium (heavy FPS impact)", impact: "+10-15%" },
      { text: "Particle Quality: Medium", impact: "+3-5%" },
      { text: "Tessellation: Off or Medium", impact: "+3-5%" },
      { text: "Tree Quality: Medium or Low", impact: "+5-8%" },
      { text: "Parallax Occlusion Mapping: Off", impact: "+2-3%" },
      { text: "Decal Quality: High (low impact)", impact: "-1-2%" },
      { text: "Fur Quality: Low (very expensive, subtle difference)", impact: "+5-10%" },
      { text: "Grass Shadows: Low or Medium", impact: "+3-5%" },
      { text: "Soft Shadows: Soft (PCSS is expensive, Sharpest is cheapest)", impact: "+3-5%" }
    ]
  },
  "pubg": {
    title: "Competitive Settings",
    target: "144 FPS",
    focus: "Enemy visibility and stable performance",
    tips: [
      { text: "Render Scale: 100% (Auto if below target FPS)", impact: "Baseline" },
      { text: "Texture Quality: Low or Medium (Low improves visibility of players)", impact: "+3-5%" },
      { text: "Anti-Aliasing: Low or Medium (TSM better than FXAA)", impact: "+3-5%" },
      { text: "Post-Processing: Low or Very Low (blurs vision when high)", impact: "+5-8%" },
      { text: "Shadow Quality: Low (shadows still visible, less GPU work)", impact: "+5-10%" },
      { text: "Effect Quality: Low (less smoke/suppression visual noise)", impact: "+3-5%" },
      { text: "Foliage Quality: Low (see enemies through bushes better)", impact: "+5-8%" },
      { text: "View Distance: Ultra (see far enemies)", impact: "-3-5%" },
      { text: "Motion Blur: Off", impact: "+2-3%" },
      { text: "Sharpen: On (helps spot enemies)", impact: "Quality" },
      { text: "VSync: Off", impact: "+5-10%" },
      { text: "DirectX Version: DX11 (more stable than DX12 for this game)", impact: "+5-10%" }
    ]
  },
  "rainbow-six-siege": {
    title: "Competitive Settings",
    target: "144-240+ FPS",
    focus: "Clear sightlines, maximum FPS, minimal distractions",
    tips: [
      { text: "Display Mode: Fullscreen", impact: "+3-5%" },
      { text: "Texture Quality: Low or Medium (player models still clear)", impact: "+3-5%" },
      { text: "Texture Filtering: Linear or Anisotropic 2x", impact: "+1-2%" },
      { text: "Shadow Quality: Medium (Low hides some player shadows)", impact: "+5-8%" },
      { text: "Post-Processing Anti-Aliasing: Off or T-AA (T-AA blurs slightly)", impact: "+5-10%" },
      { text: "Ambient Occlusion: Off (SSBC costs 10-15% FPS)", impact: "+10-15%" },
      { text: "Lens Effect: Off (bloom blinds you)", impact: "+2-3%" },
      { text: "Zoom-In Depth of Field: Off", impact: "+1-2%" },
      { text: "Graphics API: Vulkan (higher FPS than DX11 on most GPUs)", impact: "+10-20%" },
      { text: "TAA Sharpness: 0.5-1.0 (helps with T-AA blur)", impact: "Quality" },
      { text: "VSync: Off", impact: "+5-10%" },
      { text: "Frame Rate Limit: Set to monitor refresh rate or Off", impact: "Input" }
    ]
  },
  "dota-2": {
    title: "Performance Settings",
    target: "120-144+ FPS",
    focus: "Smooth teamfight performance, no stutter",
    tips: [
      { text: "API: DirectX 11 (best balance of FPS and stability)", impact: "+5-10%" },
      { text: "Shadow Quality: Medium or Low", impact: "+5-8%" },
      { text: "Texture Quality: High (minimal FPS impact)", impact: "-1-2%" },
      { text: "Effects Quality: Low (reduces particle clutter in teamfights)", impact: "+5-10%" },
      { text: "Game Screen Render Quality: 80-100% (lower = more FPS)", impact: "+10-20%" },
      { text: "Ambient Occlusion: Off (no competitive value)", impact: "+5-8%" },
      { text: "Light Quality: Medium or Low", impact: "+2-3%" },
      { text: "Anti-Aliasing: Off or 2x (blurs less, helps see enemies)", impact: "+5-10%" },
      { text: "Grass: Off (clearer ground visibility)", impact: "+3-5%" },
      { text: "Tree Detail: Medium or Low", impact: "+2-3%" },
      { text: "Water Quality: Medium or Low", impact: "+2-3%" },
      { text: "Glow: Off", impact: "+2-3%" },
      { text: "Normal Maps: Off", impact: "+3-5%" },
      { text: "VSync: Off", impact: "+5-10%" },
      { text: "Move Quality slider to Fastest or Performance for base", impact: "+15-25%" }
    ]
  },
  "league-of-legends": {
    title: "Competitive Settings",
    target: "144-240+ FPS",
    focus: "Stable FPS in teamfights, minimal input lag",
    tips: [
      { text: "Enable: Wait for Vertical Sync — turn Off (reduces input lag)", impact: "+5-10%" },
      { text: "Anti-Aliasing: Off (minimal visual gain in LoL)", impact: "+5-8%" },
      { text: "Shadow Quality: Low or Off (shadows give no competitive advantage)", impact: "+5-8%" },
      { text: "Character Quality: Medium or High (skillshots easier to see)", impact: "-2-3%" },
      { text: "Environment Quality: Low (no competitive value)", impact: "+3-5%" },
      { text: "Effects Quality: Low (less visual noise in teamfights)", impact: "+5-8%" },
      { text: "Frame Cap: Set to monitor refresh rate or uncap", impact: "Input" },
      { text: "Color Mode: Colorblind mode for clearer health bars", impact: "Accessibility" },
      { text: "Interface Scale: Lower = more game visibility", impact: "Quality" },
      { text: "Mouse Acceleration: Off in Windows settings for consistent aim", impact: "Input" },
      { text: "In-game graphics slider: Performance or Medium for base", impact: "+10-20%" }
    ]
  }
};

export function getProfile(gameId) {
  return profiles[gameId] || null;
}

