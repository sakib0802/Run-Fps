// Localized optimization profile text for src/data/profiles.js
// `target` values (FPS ranges) are universal across locales.
// `impact` values are technical (percentages / Stability / Quality / Input / Accessibility) and kept as-is.

export const profileTranslations = {
  "counter-strike-2": {
    de: {
      title: "Wettbewerbseinstellungen",
      target: "144-240+ FPS",
      focus: "Maximale Sichtbarkeit und Bildrate",
      tips: [
        { text: "Multicore-Rendering auf Aktiviert setzen", impact: "+10-20%" },
        { text: "Schattenqualität: Niedrig oder Mittel (Schatten auf Wettbewerbsdistanz noch sichtbar)", impact: "+5-10%" },
        { text: "Texturqualität: Niedrig (gibt VRAM frei, minimaler visueller Verlust)", impact: "+3-5%" },
        { text: "Partikeldetail: Niedrig (reduziert Rauch-/Blendeffekt-Wirrwarr)", impact: "+5-8%" },
        { text: "Umgebungslicht: Deaktiviert oder Niedrig", impact: "+3-5%" },
        { text: "Modell-/Texturdetail: Niedrig", impact: "+2-4%" },
        { text: "Shader-Detail: Niedrig", impact: "+3-5%" },
        { text: "FidelityFX Super Resolution: Deaktiviert oder Ultrable-Qualität bei Bedarf", impact: "+15-30%" }
      ]
    },
    fr: {
      title: "Réglages compétitifs",
      target: "144-240+ FPS",
      focus: "Visibilité et framerate maximaux",
      tips: [
        { text: "Activer le rendu multicœur", impact: "+10-20%" },
        { text: "Qualité des ombres : Basse ou Moyenne (ombres encore visibles à distance compétitive)", impact: "+5-10%" },
        { text: "Qualité des textures : Basse (libère de la VRAM, perte visuelle minime)", impact: "+3-5%" },
        { text: "Détail des particules : Bas (réduit l'encombrement visuel fumée/flash)", impact: "+5-8%" },
        { text: "Lumière ambiante : Désactivée ou Basse", impact: "+3-5%" },
        { text: "Détail modèle/textures : Bas", impact: "+2-4%" },
        { text: "Détail des shaders : Bas", impact: "+3-5%" },
        { text: "FidelityFX Super Resolution : Désactivé ou Qualité Ultrable si besoin", impact: "+15-30%" }
      ]
    },
    es: {
      title: "Ajustes competitivos",
      target: "144-240+ FPS",
      focus: "Visibilidad y fps máximos",
      tips: [
        { text: "Activa el renderizado multicore", impact: "+10-20%" },
        { text: "Calidad de sombras: Baja o Media (visibles a distancia de competición)", impact: "+5-10%" },
        { text: "Calidad de texturas: Baja (libera VRAM, pérdida visual mínima)", impact: "+3-5%" },
        { text: "Detalle de partículas: Bajo (reduce el desorden de humo/flash)", impact: "+5-8%" },
        { text: "Luz ambiental: Desactivada o Baja", impact: "+3-5%" },
        { text: "Detalle de modelo/texturas: Bajo", impact: "+2-4%" },
        { text: "Detalle de shaders: Bajo", impact: "+3-5%" },
        { text: "FidelityFX Super Resolution: Desactivado o Calidad Ultra si hace falta", impact: "+15-30%" }
      ]
    }
  },
  "valorant": {
    de: {
      title: "Pro-Einstellungen",
      target: "144-240+ FPS",
      focus: "Minimales visuelles Rauschen, scharfe Gegnerkonturen",
      tips: [
        { text: "Materialqualität: Niedrig", impact: "+3-5%" },
        { text: "Texturqualität: Niedrig", impact: "+2-4%" },
        { text: "Detailqualität: Niedrig", impact: "+3-5%" },
        { text: "UI-Qualität: Niedrig", impact: "+1-2%" },
        { text: "Vignette: Aus", impact: "+2-3%" },
        { text: "VSync: Aus", impact: "+5-10%" },
        { text: "Antialiasing: MSAA 2x (MSAA 4x halbiert FPS, vermeiden)", impact: "+5-15%" },
        { text: "Anisotrope Filterung: 4x oder 8x", impact: "+1-2%" },
        { text: "Klarheit verbessern: An", impact: "Quality" },
        { text: "Bloom: Aus", impact: "+2-3%" },
        { text: "Verzerrung: Aus", impact: "+2-3%" },
        { text: "Schatten werfen: Aus", impact: "+5-8%" }
      ]
    },
    fr: {
      title: "Réglages Pro",
      target: "144-240+ FPS",
      focus: "Bruit visuel minimal, contours nets des ennemis",
      tips: [
        { text: "Qualité des matériaux : Basse", impact: "+3-5%" },
        { text: "Qualité des textures : Basse", impact: "+2-4%" },
        { text: "Qualité des détails : Basse", impact: "+3-5%" },
        { text: "Qualité d'interface : Basse", impact: "+1-2%" },
        { text: "Vignette : Désactivée", impact: "+2-3%" },
        { text: "VSync : Désactivé", impact: "+5-10%" },
        { text: "Antialiasing : MSAA 2x (MSAA 4x divise les FPS par deux, à éviter)", impact: "+5-15%" },
        { text: "Filtrage anisotrope : 4x ou 8x", impact: "+1-2%" },
        { text: "Améliorer la clarté : Activé", impact: "Quality" },
        { text: "Bloom : Désactivé", impact: "+2-3%" },
        { text: "Distorsion : Désactivée", impact: "+2-3%" },
        { text: "Ombres portées : Désactivées", impact: "+5-8%" }
      ]
    },
    es: {
      title: "Ajustes Pro",
      target: "144-240+ FPS",
      focus: "Ruido visual mínimo, contornos de enemigos nítidos",
      tips: [
        { text: "Calidad de materiales: Baja", impact: "+3-5%" },
        { text: "Calidad de texturas: Baja", impact: "+2-4%" },
        { text: "Calidad de detalles: Baja", impact: "+3-5%" },
        { text: "Calidad de UI: Baja", impact: "+1-2%" },
        { text: "Viñeta: Desactivada", impact: "+2-3%" },
        { text: "VSync: Desactivado", impact: "+5-10%" },
        { text: "Antialiasing: MSAA 2x (MSAA 4x reduce a la mitad los FPS, evítalo)", impact: "+5-15%" },
        { text: "Filtrado anisótropo: 4x o 8x", impact: "+1-2%" },
        { text: "Mejorar claridad: Activado", impact: "Quality" },
        { text: "Bloom: Desactivado", impact: "+2-3%" },
        { text: "Distorsión: Desactivada", impact: "+2-3%" },
        { text: "Sombras proyectadas: Desactivadas", impact: "+5-8%" }
      ]
    }
  },
  "fortnite": {
    de: {
      title: "Performance-Modus-Einstellungen",
      target: "60-144+ FPS",
      focus: "Performance-Modus + minimale visuelle Ablenkung",
      tips: [
        { text: "Auf Performance-Modus umschalten (DX11/12 → Performance in Videoeinstellungen)", impact: "+30-50%" },
        { text: "3D-Auflösung: 100% (nur bei absoluter Notwendigkeit senken)", impact: "Baseline" },
        { text: "Sichtweite: Episch oder Hoch (Gegner aus der Ferne sehen)", impact: "-5-10%" },
        { text: "Schatten: Aus", impact: "+10-15%" },
        { text: "Antialiasing: Aus (SMAA T2X falls nötig)", impact: "+5-10%" },
        { text: "Texturen: Niedrig oder Mittel", impact: "+5-8%" },
        { text: "Effekte: Niedrig", impact: "+8-12%" },
        { text: "Post-Processing: Niedrig", impact: "+5-8%" },
        { text: "Globale Beleuchtung: Aus", impact: "+5-10%" },
        { text: "Reflexionen: Aus", impact: "+5-8%" },
        { text: "VSync: Aus", impact: "+5-10%" }
      ]
    },
    fr: {
      title: "Réglages du mode Performance",
      target: "60-144+ FPS",
      focus: "Mode Performance + distractions visuelles minimales",
      tips: [
        { text: "Passer en mode Performance (DX11/12 → Performance dans les paramètres vidéo)", impact: "+30-50%" },
        { text: "Résolution 3D : 100% (abaisser seulement si vraiment nécessaire)", impact: "Baseline" },
        { text: "Distance d'affichage : Épique ou Haute (voir les ennemis au loin)", impact: "-5-10%" },
        { text: "Ombres : Désactivées", impact: "+10-15%" },
        { text: "Antialiasing : Désactivé (SMAA T2X si nécessaire)", impact: "+5-10%" },
        { text: "Textures : Basses ou Moyennes", impact: "+5-8%" },
        { text: "Effets : Bas", impact: "+8-12%" },
        { text: "Post-traitement : Bas", impact: "+5-8%" },
        { text: "Illumination globale : Désactivée", impact: "+5-10%" },
        { text: "Réflexions : Désactivées", impact: "+5-8%" },
        { text: "VSync : Désactivée", impact: "+5-10%" }
      ]
    },
    es: {
      title: "Ajustes del modo Rendimiento",
      target: "60-144+ FPS",
      focus: "Modo Rendimiento + distracciones visuales mínimas",
      tips: [
        { text: "Cambia al modo Rendimiento (DX11/12 → Rendimiento en vídeo)", impact: "+30-50%" },
        { text: "Resolución 3D: 100% (baja solo si es imprescindible)", impact: "Baseline" },
        { text: "Distancia de visión: Épica o Alta (ver enemigos lejanos)", impact: "-5-10%" },
        { text: "Sombras: Desactivadas", impact: "+10-15%" },
        { text: "Antialiasing: Desactivado (SMAA T2X si hace falta)", impact: "+5-10%" },
        { text: "Texturas: Bajas o Medias", impact: "+5-8%" },
        { text: "Efectos: Bajos", impact: "+8-12%" },
        { text: "Post-procesado: Bajo", impact: "+5-8%" },
        { text: "Iluminación global: Desactivada", impact: "+5-10%" },
        { text: "Reflejos: Desactivados", impact: "+5-8%" },
        { text: "VSync: Desactivado", impact: "+5-10%" }
      ]
    }
  },
  "cyberpunk-2077": {
    de: {
      title: "Ausgewogene Qualitätseinstellungen",
      target: "60 FPS",
      focus: "Visuelle Qualität bewahren und dennoch 60 FPS halten",
      tips: [
        { text: "DLSS/FSR: Qualität oder Ausgeglichen", impact: "+20-40%" },
        { text: "Texturqualität: Hoch (minimaler FPS-Einfluss, großer visueller Gewinn)", impact: "-1-2%" },
        { text: "Schattenqualität: Mittel", impact: "+5-8%" },
        { text: "Volumetrischer Nebel: Mittel oder Niedrig (riesiger FPS-Einfluss)", impact: "+10-20%" },
        { text: "Bildschirmraum-Reflexionen: Mittel oder Niedrig", impact: "+5-10%" },
        { text: "Umgebungsverdeckung: Niedrig oder Mittel", impact: "+3-5%" },
        { text: "Raytracing: Aus (außer RTX 4070+ mit Spielraum)", impact: "+20-35%" },
        { text: "Menschendichte: Mittel", impact: "+3-5%" },
        { text: "Detailgrad: Hoch", impact: "-2-3%" },
        { text: "Kontaktschatten: An oder Niedrig", impact: "+2-4%" }
      ]
    },
    fr: {
      title: "Réglages qualité équilibrés",
      target: "60 FPS",
      focus: "Préserver la qualité visuelle tout en maintenant 60 FPS",
      tips: [
        { text: "DLSS/FSR : Qualité ou Équilibré", impact: "+20-40%" },
        { text: "Qualité des textures : Haute (impact FPS minime, gain visuel important)", impact: "-1-2%" },
        { text: "Qualité des ombres : Moyenne", impact: "+5-8%" },
        { text: "Brouillard volumétrique : Moyen ou Bas (énorme impact FPS)", impact: "+10-20%" },
        { text: "Réflexions en espace d'écran : Moyennes ou Basses", impact: "+5-10%" },
        { text: "Occlusion ambiante : Basse ou Moyenne", impact: "+3-5%" },
        { text: "Ray Tracing : Désactivé (sauf RTX 4070+ avec marge)", impact: "+20-35%" },
        { text: "Densité de la foule : Moyenne", impact: "+3-5%" },
        { text: "Niveau de détail : Haute", impact: "-2-3%" },
        { text: "Ombres de contact : Activées ou Basses", impact: "+2-4%" }
      ]
    },
    es: {
      title: "Ajustes de calidad equilibrados",
      target: "60 FPS",
      focus: "Conservar la calidad visual manteniendo 60 FPS",
      tips: [
        { text: "DLSS/FSR: Calidad o Equilibrado", impact: "+20-40%" },
        { text: "Calidad de texturas: Alta (impacto FPS mínimo, gran ganancia visual)", impact: "-1-2%" },
        { text: "Calidad de sombras: Media", impact: "+5-8%" },
        { text: "Niebla volumétrica: Media o Baja (gran impacto en FPS)", impact: "+10-20%" },
        { text: "Reflejos en espacio de pantalla: Medios o Bajos", impact: "+5-10%" },
        { text: "Oclusión ambiental: Baja o Media", impact: "+3-5%" },
        { text: "Ray Tracing: Desactivado (salvo RTX 4070+ con margen)", impact: "+20-35%" },
        { text: "Densidad de multitud: Media", impact: "+3-5%" },
        { text: "Nivel de detalle: Alto", impact: "-2-3%" },
        { text: "Sombras de contacto: Activadas o Bajas", impact: "+2-4%" }
      ]
    }
  },
  "call-of-duty-warzone": {
    de: {
      title: "Wettbewerbseinstellungen",
      target: "120-144+ FPS",
      focus: "Wettbewerbs-Sichtbarkeit mit stabiler Bildrate",
      tips: [
        { text: "Anzeigemodus: Reine Vollbildanzeige", impact: "+3-5%" },
        { text: "Render-Auflösung: 100%", impact: "Baseline" },
        { text: "Hochskalierung: FSR 2.1 Qualität oder DLSS Qualität", impact: "+15-25%" },
        { text: "VRAM-Skalierung: 80-85", impact: "Stability" },
        { text: "Textureauflösung: Niedrig oder Normal", impact: "+3-5%" },
        { text: "Anisotrope Texturfilterung: Niedrig", impact: "+2-3%" },
        { text: "Schattenauflösung: Niedrig", impact: "+5-8%" },
        { text: "Spot-Schattenqualität: Niedrig", impact: "+3-5%" },
        { text: "Spot-Cache: Niedrig", impact: "+2-4%" },
        { text: "Partikelbeleuchtung: Niedrig", impact: "+3-5%" },
        { text: "Tessellation: Aus", impact: "+3-5%" },
        { text: "Antialiasing: SMAA 1x oder Filmic SMAA T2X", impact: "+5-10%" },
        { text: "Tiefenunschärfe: Aus", impact: "+2-3%" },
        { text: "Welt-Bewegungsunschärfe: Aus", impact: "+1-2%" },
        { text: "Waffen-Bewegungsunschärfe: Aus", impact: "+1-2%" }
      ]
    },
    fr: {
      title: "Réglages compétitifs",
      target: "120-144+ FPS",
      focus: "Visibilité compétitive avec framerate stable",
      tips: [
        { text: "Mode d'affichage : Plein écran exclusif", impact: "+3-5%" },
        { text: "Résolution de rendu : 100%", impact: "Baseline" },
        { text: "Upscaling : FSR 2.1 Qualité ou DLSS Qualité", impact: "+15-25%" },
        { text: "Échelle VRAM : 80-85", impact: "Stability" },
        { text: "Résolution des textures : Basse ou Normale", impact: "+3-5%" },
        { text: "Filtre de texture anisotrope : Bas", impact: "+2-3%" },
        { text: "Résolution des ombres : Basse", impact: "+5-8%" },
        { text: "Qualité des ombres projetées : Basse", impact: "+3-5%" },
        { text: "Cache des spots : Bas", impact: "+2-4%" },
        { text: "Éclairage des particules : Bas", impact: "+3-5%" },
        { text: "Tessellation : Désactivée", impact: "+3-5%" },
        { text: "Antialiasing : SMAA 1x ou Filmic SMAA T2X", impact: "+5-10%" },
        { text: "Profondeur de champ : Désactivée", impact: "+2-3%" },
        { text: "Flou de mouvement global : Désactivé", impact: "+1-2%" },
        { text: "Flou de mouvement des armes : Désactivé", impact: "+1-2%" }
      ]
    },
    es: {
      title: "Ajustes competitivos",
      target: "120-144+ FPS",
      focus: "Visibilidad competitiva con tasa de fps estable",
      tips: [
        { text: "Modo de pantalla: Pantalla completa exclusiva", impact: "+3-5%" },
        { text: "Resolución de render: 100%", impact: "Baseline" },
        { text: "Upscaling: FSR 2.1 Calidad o DLSS Calidad", impact: "+15-25%" },
        { text: "Escala de VRAM: 80-85", impact: "Stability" },
        { text: "Resolución de texturas: Baja o Normal", impact: "+3-5%" },
        { text: "Filtro de textura anisótropo: Bajo", impact: "+2-3%" },
        { text: "Resolución de sombras: Baja", impact: "+5-8%" },
        { text: "Calidad de sombras focalizadas: Baja", impact: "+3-5%" },
        { text: "Caché de focos: Baja", impact: "+2-4%" },
        { text: "Iluminación de partículas: Baja", impact: "+3-5%" },
        { text: "Teselado: Desactivado", impact: "+3-5%" },
        { text: "Antialiasing: SMAA 1x o Filmic SMAA T2X", impact: "+5-10%" },
        { text: "Profundidad de campo: Desactivada", impact: "+2-3%" },
        { text: "Desenfoque de movimiento global: Desactivado", impact: "+1-2%" },
        { text: "Desenfoque de movimiento de armas: Desactivado", impact: "+1-2%" }
      ]
    }
  },
  "apex-legends": {
    de: {
      title: "Wettbewerbseinstellungen",
      target: "144-240+ FPS",
      focus: "Maximale Klarheit und Reaktionsfähigkeit",
      tips: [
        { text: "Anzeigemodus: Vollbild", impact: "+3-5%" },
        { text: "Texturen-Streaming-Budget: Niedrig oder 2-3 GB (an VRAM anpassen)", impact: "+5-10%" },
        { text: "Texturfilterung: Anisotrop 2x oder 4x", impact: "+2-3%" },
        { text: "Umgebungsverdeckung: Deaktiviert (riesiger FPS-Gewinn)", impact: "+10-15%" },
        { text: "Sonnen-Schattenabdeckung: Niedrig", impact: "+5-8%" },
        { text: "Sonnen-Schatten Detail: Niedrig", impact: "+3-5%" },
        { text: "Spot-Schatten Detail: Niedrig oder Deaktiviert", impact: "+3-5%" },
        { text: "Volumetrische Beleuchtung: Deaktiviert (großer FPS-Verlust wenn an)", impact: "+8-12%" },
        { text: "Dynamische Spot-Schatten: Deaktiviert", impact: "+5-8%" },
        { text: "Modell-Detail: Niedrig", impact: "+3-5%" },
        { text: "Effekt-Detail: Niedrig", impact: "+3-5%" },
        { text: "Aufprallmarkierungen: Niedrig", impact: "+1-2%" },
        { text: "Ragdolls: Niedrig", impact: "+1-2%" },
        { text: "VSync: Deaktiviert", impact: "+5-10%" },
        { text: "Adaptive Auflösung FPS-Ziel: 0 (aus)", impact: "Stability" }
      ]
    },
    fr: {
      title: "Réglages compétitifs",
      target: "144-240+ FPS",
      focus: "Clarté et réactivité maximales",
      tips: [
        { text: "Mode d'affichage : Plein écran", impact: "+3-5%" },
        { text: "Budget de streaming des textures : Bas ou 2-3 Go (selon VRAM)", impact: "+5-10%" },
        { text: "Filtrage des textures : Anisotrope 2x ou 4x", impact: "+2-3%" },
        { text: "Occlusion ambiante : Désactivée (gain FPS énorme)", impact: "+10-15%" },
        { text: "Couverture des ombres soleil : Basse", impact: "+5-8%" },
        { text: "Détail des ombres soleil : Bas", impact: "+3-5%" },
        { text: "Détail des ombres projetées : Bas ou Désactivé", impact: "+3-5%" },
        { text: "Éclairage volumétrique : Désactivé (grosse perte FPS si actif)", impact: "+8-12%" },
        { text: "Ombres dynamiques des spots : Désactivées", impact: "+5-8%" },
        { text: "Détail des modèles : Bas", impact: "+3-5%" },
        { text: "Détail des effets : Bas", impact: "+3-5%" },
        { text: "Marques d'impact : Basses", impact: "+1-2%" },
        { text: "Ragdolls : Bas", impact: "+1-2%" },
        { text: "VSync : Désactivée", impact: "+5-10%" },
        { text: "Cible FPS résolution adaptative : 0 (désactivée)", impact: "Stability" }
      ]
    },
    es: {
      title: "Ajustes competitivos",
      target: "144-240+ FPS",
      focus: "Máxima claridad y capacidad de respuesta",
      tips: [
        { text: "Modo de pantalla: Pantalla completa", impact: "+3-5%" },
        { text: "Presupuesto de streaming de texturas: Bajo o 2-3 GB (según VRAM)", impact: "+5-10%" },
        { text: "Filtrado de texturas: Anisotrópico 2x o 4x", impact: "+2-3%" },
        { text: "Oclusión ambiental: Desactivada (gran ganancia de FPS)", impact: "+10-15%" },
        { text: "Cobertura de sombras solares: Baja", impact: "+5-8%" },
        { text: "Detalle de sombras solares: Bajo", impact: "+3-5%" },
        { text: "Detalle de sombras focalizadas: Bajo o Desactivado", impact: "+3-5%" },
        { text: "Iluminación volumétrica: Desactivada (gran pérdida de FPS si está on)", impact: "+8-12%" },
        { text: "Sombras dinámicas de focos: Desactivadas", impact: "+5-8%" },
        { text: "Detalle de modelo: Bajo", impact: "+3-5%" },
        { text: "Detalle de efectos: Bajo", impact: "+3-5%" },
        { text: "Marcas de impacto: Bajas", impact: "+1-2%" },
        { text: "Ragdolls: Bajos", impact: "+1-2%" },
        { text: "VSync: Desactivado", impact: "+5-10%" },
        { text: "Objetivo FPS de resolución adaptativa: 0 (off)", impact: "Stability" }
      ]
    }
  },
  "elden-ring": {
    de: {
      title: "Stabile 60-FPS-Einstellungen",
      target: "60 FPS",
      focus: "Ruckler eliminieren, stabile Bildrate halten",
      tips: [
        { text: "Raytracing: Aus (hohe Leistungskosten, minimaler visueller Nutzen in diesem Spiel)", impact: "+15-25%" },
        { text: "Schattenqualität: Niedrig oder Mittel", impact: "+5-8%" },
        { text: "Lichtqualität: Mittel oder Niedrig", impact: "+5-8%" },
        { text: "Effektqualität: Niedrig (weniger Partikelwirrwarr)", impact: "+5-10%" },
        { text: "Volumetrische Qualität: Niedrig (großer FPS-Einfluss)", impact: "+10-15%" },
        { text: "Reflexionsqualität: Niedrig", impact: "+5-8%" },
        { text: "Wasseroberflächenqualität: Niedrig", impact: "+2-3%" },
        { text: "Shaderqualität: Niedrig", impact: "+3-5%" },
        { text: "Globale Beleuchtungsqualität: Mittel oder Niedrig", impact: "+5-8%" },
        { text: "Maximale FPS über GPU-Treiber setzen (nicht im Spiel) für smootheren Frame-Pacing", impact: "Stability" }
      ]
    },
    fr: {
      title: "Réglages 60 FPS stables",
      target: "60 FPS",
      focus: "Éliminer les saccades, maintenir un framerate stable",
      tips: [
        { text: "Ray Tracing : Désactivé (coût élevé, impact visuel minime dans ce jeu)", impact: "+15-25%" },
        { text: "Qualité des ombres : Basse ou Moyenne", impact: "+5-8%" },
        { text: "Qualité de l'éclairage : Moyenne ou Basse", impact: "+5-8%" },
        { text: "Qualité des effets : Basse (moins d'encombrement de particules)", impact: "+5-10%" },
        { text: "Qualité volumétrique : Basse (gros impact FPS)", impact: "+10-15%" },
        { text: "Qualité des réflexions : Basse", impact: "+5-8%" },
        { text: "Qualité de la surface de l'eau : Basse", impact: "+2-3%" },
        { text: "Qualité des shaders : Basse", impact: "+3-5%" },
        { text: "Qualité de l'illumination globale : Moyenne ou Basse", impact: "+5-8%" },
        { text: "Définir les FPS max via le pilote GPU (pas en jeu) pour un frame pacing plus fluide", impact: "Stability" }
      ]
    },
    es: {
      title: "Ajustes estables de 60 FPS",
      target: "60 FPS",
      focus: "Eliminar tirones, mantener fps estable",
      tips: [
        { text: "Ray Tracing: Desactivado (alto coste, impacto visual mínimo en este juego)", impact: "+15-25%" },
        { text: "Calidad de sombras: Baja o Media", impact: "+5-8%" },
        { text: "Calidad de iluminación: Media o Baja", impact: "+5-8%" },
        { text: "Calidad de efectos: Baja (menos desorden de partículas)", impact: "+5-10%" },
        { text: "Calidad volumétrica: Baja (gran impacto en FPS)", impact: "+10-15%" },
        { text: "Calidad de reflejos: Baja", impact: "+5-8%" },
        { text: "Calidad de superficie de agua: Baja", impact: "+2-3%" },
        { text: "Calidad de shaders: Baja", impact: "+3-5%" },
        { text: "Calidad de iluminación global: Media o Baja", impact: "+5-8%" },
        { text: "Fija los FPS máximos vía el driver de GPU (no en juego) para frame pacing más suave", impact: "Stability" }
      ]
    }
  },
  "grand-theft-auto-v": {
    de: {
      title: "Optimierte Einstellungen",
      target: "60-144 FPS",
      focus: "Tolle Grafik ohne verschwendete Leistung",
      tips: [
        { text: "DirectX-Version: DX11 (stabiler als DX10, schneller als DX12 in diesem Spiel)", impact: "+5-10%" },
        { text: "Texturqualität: Hoch (sehr geringer FPS-Einfluss)", impact: "-1-2%" },
        { text: "Shaderqualität: Hoch", impact: "-2-3%" },
        { text: "Schattenqualität: Hoch oder Normal (Softest gibt weniger Aliasing)", impact: "+3-5%" },
        { text: "Reflexionsqualität: Normal oder Hoch (MSAA-Reflexionen sind teuer)", impact: "+5-8%" },
        { text: "Reflexions-MSAA: Aus (sehr teuer, subtiler Unterschied)", impact: "+10-15%" },
        { text: "Wasserqualität: Normal (hohe Qualität kostet FPS in Wassernähe)", impact: "+3-5%" },
        { text: "Partikelqualität: Normal", impact: "+2-3%" },
        { text: "Grasqualität: Normal (Ultra ist in Grasgebieten extrem teuer)", impact: "+10-20%" },
        { text: "Weiche Schatten: NVIDIA PCSS oder Soft (Sharpest ist am günstigsten)", impact: "+0-5%" },
        { text: "Post-FX: Normal oder Hoch", impact: "+3-5%" },
        { text: "Bewegungsunschärfe: Aus", impact: "+2-3%" },
        { text: "Anisotrope Filterung: 4x oder 8x", impact: "+1-2%" },
        { text: "Umgebungsverdeckung: Aus oder Normal (HDAO+ kostet FPS)", impact: "+5-8%" },
        { text: "Tessellation: Aus oder Normal", impact: "+2-3%" }
      ]
    },
    fr: {
      title: "Réglages optimisés",
      target: "60-144 FPS",
      focus: "Superbes visuels sans gaspiller de performance",
      tips: [
        { text: "Version DirectX : DX11 (plus stable que DX10, plus rapide que DX12 dans ce jeu)", impact: "+5-10%" },
        { text: "Qualité des textures : Haute (impact FPS très faible)", impact: "-1-2%" },
        { text: "Qualité des shaders : Haute", impact: "-2-3%" },
        { text: "Qualité des ombres : Haute ou Normale (Softest donne moins d'aliasing)", impact: "+3-5%" },
        { text: "Qualité des réflexions : Normale ou Haute (réflexions MSAA coûteuses)", impact: "+5-8%" },
        { text: "Réflexions MSAA : Désactivées (très coûteuses, différence subtile)", impact: "+10-15%" },
        { text: "Qualité de l'eau : Normale (haute qualité coûte des FPS près de l'eau)", impact: "+3-5%" },
        { text: "Qualité des particules : Normale", impact: "+2-3%" },
        { text: "Qualité de l'herbe : Normale (Ultra est extrêmement coûteuse)", impact: "+10-20%" },
        { text: "Ombres douces : NVIDIA PCSS ou Douces (Sharpest est le moins cher)", impact: "+0-5%" },
        { text: "Post-FX : Normal ou Haut", impact: "+3-5%" },
        { text: "Flou de mouvement : Désactivé", impact: "+2-3%" },
        { text: "Filtrage anisotrope : 4x ou 8x", impact: "+1-2%" },
        { text: "Occlusion ambiante : Désactivée ou Normale (HDAO+ coûte des FPS)", impact: "+5-8%" },
        { text: "Tessellation : Désactivée ou Normale", impact: "+2-3%" }
      ]
    },
    es: {
      title: "Ajustes optimizados",
      target: "60-144 FPS",
      focus: "Grandes visuales sin malgastar rendimiento",
      tips: [
        { text: "Versión de DirectX: DX11 (más estable que DX10, más rápido que DX12 en este juego)", impact: "+5-10%" },
        { text: "Calidad de texturas: Alta (impacto FPS muy bajo)", impact: "-1-2%" },
        { text: "Calidad de shaders: Alta", impact: "-2-3%" },
        { text: "Calidad de sombras: Alta o Normal (Softest da menos aliasing)", impact: "+3-5%" },
        { text: "Calidad de reflejos: Normal o Alta (los reflejos MSAA son caros)", impact: "+5-8%" },
        { text: "Reflejos MSAA: Desactivados (muy caros, diferencia sutil)", impact: "+10-15%" },
        { text: "Calidad del agua: Normal (la alta cuesta FPS cerca del agua)", impact: "+3-5%" },
        { text: "Calidad de partículas: Normal", impact: "+2-3%" },
        { text: "Calidad de hierba: Normal (Ultra es extremadamente cara)", impact: "+10-20%" },
        { text: "Sombras suaves: NVIDIA PCSS o Suaves (Sharpest es la más barata)", impact: "+0-5%" },
        { text: "Post-FX: Normal o Alto", impact: "+3-5%" },
        { text: "Desenfoque de movimiento: Desactivado", impact: "+2-3%" },
        { text: "Filtrado anisótropo: 4x o 8x", impact: "+1-2%" },
        { text: "Oclusión ambiental: Desactivada o Normal (HDAO+ cuesta FPS)", impact: "+5-8%" },
        { text: "Teselado: Desactivado o Normal", impact: "+2-3%" }
      ]
    }
  },
  "minecraft": {
    de: {
      title: "Performance-Einstellungen (Java-Edition)",
      target: "60-144+ FPS",
      focus: "Performance-Mods installieren + Vanilla-Einstellungen optimieren",
      tips: [
        { text: "Sodium-Mod installieren (riesiger FPS-Boost ohne visuellen Verlust)", impact: "+100-300%" },
        { text: "Lithium-Mod installieren (optimiert serverseitige Physik)", impact: "+10-20%" },
        { text: "Starlight-Mod installieren (optimiert die Beleuchtungs-Engine)", impact: "+20-40%" },
        { text: "Iris-Shader installieren, falls gewünscht (bessere FPS als OptiFine)", impact: "Quality" },
        { text: "Render-Distanz: 8-12 Chunks (16+ ist teuer)", impact: "+10-25%" },
        { text: "Grafik: Fabulous ist sehr teuer — Fancy oder Fast nutzen", impact: "+15-30%" },
        { text: "Weiche Beleuchtung: Minimum oder Aus", impact: "+5-10%" },
        { text: "Wolken: Aus", impact: "+2-5%" },
        { text: "Entity-Distanz: 50-100% (in vollen Bereichen senken)", impact: "+5-15%" },
        { text: "Partikel: Minimal oder Verringert", impact: "+3-8%" },
        { text: "Mipmap-Stufen: 1 oder 2 (4 ist auf schwachen GPUs teuer)", impact: "+3-5%" },
        { text: "Biom-Mischung: 1×1 oder 3×3", impact: "+1-2%" },
        { text: "Mindestens 4 GB RAM in den Launcher-Einstellungen zuweisen (nicht 2 GB Standard)", impact: "Stability" }
      ]
    },
    fr: {
      title: "Réglages performance (Java Edition)",
      target: "60-144+ FPS",
      focus: "Installer des mods de performance + optimiser les réglages vanilla",
      tips: [
        { text: "Installer le mod Sodium (énorme gain FPS sans perte visuelle)", impact: "+100-300%" },
        { text: "Installer le mod Lithium (optimise la physique côté serveur)", impact: "+10-20%" },
        { text: "Installer le mod Starlight (optimise le moteur d'éclairage)", impact: "+20-40%" },
        { text: "Installer Iris Shaders si vous voulez des shaders (meilleurs FPS qu'OptiFine)", impact: "Quality" },
        { text: "Distance de rendu : 8-12 chunks (16+ est coûteux)", impact: "+10-25%" },
        { text: "Graphismes : Fabulous est très coûteux — utiliser Fancy ou Fast", impact: "+15-30%" },
        { text: "Éclairage doux : Minimum ou Désactivé", impact: "+5-10%" },
        { text: "Nuages : Désactivés", impact: "+2-5%" },
        { text: "Distance des entités : 50-100% (réduire dans les zones bondées)", impact: "+5-15%" },
        { text: "Particules : Minimals ou Réduites", impact: "+3-8%" },
        { text: "Niveaux Mipmap : 1 ou 2 (4 est coûteux sur GPU faibles)", impact: "+3-5%" },
        { text: "Mélange des biomes : 1×1 ou 3×3", impact: "+1-2%" },
        { text: "Allouer au moins 4 Go de RAM dans les paramètres du launcher (pas 2 Go par défaut)", impact: "Stability" }
      ]
    },
    es: {
      title: "Ajustes de rendimiento (Java Edition)",
      target: "60-144+ FPS",
      focus: "Instalar mods de rendimiento + optimizar ajustes vanilla",
      tips: [
        { text: "Instala el mod Sodium (gran subida de FPS sin pérdida visual)", impact: "+100-300%" },
        { text: "Instala el mod Lithium (optimiza la física del servidor)", impact: "+10-20%" },
        { text: "Instala el mod Starlight (optimiza el motor de iluminación)", impact: "+20-40%" },
        { text: "Instala Iris Shaders si quieres shaders (mejor FPS que OptiFine)", impact: "Quality" },
        { text: "Distancia de render: 8-12 chunks (16+ es caro)", impact: "+10-25%" },
        { text: "Gráficos: Fabulous es muy caro — usa Fancy o Fast", impact: "+15-30%" },
        { text: "Iluminación suave: Mínima o Desactivada", impact: "+5-10%" },
        { text: "Nubes: Desactivadas", impact: "+2-5%" },
        { text: "Distancia de entidades: 50-100% (baja en zonas llenas)", impact: "+5-15%" },
        { text: "Partículas: Mínimas o Reducidas", impact: "+3-8%" },
        { text: "Niveles Mipmap: 1 o 2 (4 es caro en GPUs básicas)", impact: "+3-5%" },
        { text: "Mezcla de biomas: 1×1 o 3×3", impact: "+1-2%" },
        { text: "Asigna al menos 4 GB de RAM en el launcher (no los 2 GB por defecto)", impact: "Stability" }
      ]
    }
  },
  "overwatch-2": {
    de: {
      title: "Wettbewerbseinstellungen",
      target: "144-240+ FPS",
      focus: "Stabile hohe Bildrate mit klaren Visuals",
      tips: [
        { text: "Anzeigemodus: Vollbild", impact: "+3-5%" },
        { text: "Render-Skalierung: 100% (Auto, falls unter Ziel)", impact: "Baseline" },
        { text: "Hochskalierung: FSR 2.2 Qualität oder DLSS Qualität", impact: "+15-25%" },
        { text: "Texturqualität: Niedrig oder Mittel", impact: "+3-5%" },
        { text: "Texturfilterung: 2x oder 4x", impact: "+1-2%" },
        { text: "Schattendetail: Aus oder Niedrig", impact: "+5-8%" },
        { text: "Modell-Detail: Niedrig", impact: "+3-5%" },
        { text: "Effekt-Detail: Niedrig", impact: "+3-5%" },
        { text: "Lichtqualität: Niedrig", impact: "+3-5%" },
        { text: "Antialiasing: Niedrig oder Aus (FXAA unscharf, SMAA besser)", impact: "+5-10%" },
        { text: "Reflexionen: Aus oder Niedrig", impact: "+3-5%" },
        { text: "Umgebungsverdeckung: Aus", impact: "+5-8%" },
        { text: "VSync: Aus", impact: "+5-10%" },
        { text: "Triple-Buffering: Aus", impact: "+5-10%" },
        { text: "Lokale Reflexionen: Aus", impact: "+3-5%" },
        { text: "Reduziertes Buffering: An (senkt Eingabeverzögerung)", impact: "Input" }
      ]
    },
    fr: {
      title: "Réglages compétitifs",
      target: "144-240+ FPS",
      focus: "Framerate élevé stable avec visuels nets",
      tips: [
        { text: "Mode d'affichage : Plein écran", impact: "+3-5%" },
        { text: "Échelle de rendu : 100% (Auto si sous la cible)", impact: "Baseline" },
        { text: "Upscaling : FSR 2.2 Qualité ou DLSS Qualité", impact: "+15-25%" },
        { text: "Qualité des textures : Basse ou Moyenne", impact: "+3-5%" },
        { text: "Filtrage des textures : 2x ou 4x", impact: "+1-2%" },
        { text: "Détail des ombres : Désactivé ou Bas", impact: "+5-8%" },
        { text: "Détail des modèles : Bas", impact: "+3-5%" },
        { text: "Détail des effets : Bas", impact: "+3-5%" },
        { text: "Qualité de l'éclairage : Basse", impact: "+3-5%" },
        { text: "Antialiasing : Bas ou Désactivé (FXAA floute, SMAA meilleur)", impact: "+5-10%" },
        { text: "Réflexions : Désactivées ou Basses", impact: "+3-5%" },
        { text: "Occlusion ambiante : Désactivée", impact: "+5-8%" },
        { text: "VSync : Désactivée", impact: "+5-10%" },
        { text: "Triple buffering : Désactivé", impact: "+5-10%" },
        { text: "Réflexions locales : Désactivées", impact: "+3-5%" },
        { text: "Tampon réduit : Activé (réduit la latence)", impact: "Input" }
      ]
    },
    es: {
      title: "Ajustes competitivos",
      target: "144-240+ FPS",
      focus: "Tasa de fps alta y estable con visuales nítidos",
      tips: [
        { text: "Modo de pantalla: Pantalla completa", impact: "+3-5%" },
        { text: "Escala de render: 100% (Auto si baja del objetivo)", impact: "Baseline" },
        { text: "Upscaling: FSR 2.2 Calidad o DLSS Calidad", impact: "+15-25%" },
        { text: "Calidad de texturas: Baja o Media", impact: "+3-5%" },
        { text: "Filtrado de texturas: 2x o 4x", impact: "+1-2%" },
        { text: "Detalle de sombras: Desactivado o Bajo", impact: "+5-8%" },
        { text: "Detalle de modelo: Bajo", impact: "+3-5%" },
        { text: "Detalle de efectos: Bajo", impact: "+3-5%" },
        { text: "Calidad de iluminación: Baja", impact: "+3-5%" },
        { text: "Antialiasing: Bajo o Desactivado (FXAA desenfoca, SMAA mejor)", impact: "+5-10%" },
        { text: "Reflejos: Desactivados o Bajos", impact: "+3-5%" },
        { text: "Oclusión ambiental: Desactivada", impact: "+5-8%" },
        { text: "VSync: Desactivado", impact: "+5-10%" },
        { text: "Triple buffering: Desactivado", impact: "+5-10%" },
        { text: "Reflejos locales: Desactivados", impact: "+3-5%" },
        { text: "Buffer reducido: Activado (reduce la latencia)", impact: "Input" }
      ]
    }
  },
  "red-dead-redemption-2": {
    de: {
      title: "Optimierte Qualitätseinstellungen",
      target: "60 FPS",
      focus: "Ausgewogene Grafik mit stabilen 60 FPS auf Mittelklasse-Hardware",
      tips: [
        { text: "Hochskalierung: FSR 2.0 Qualität oder DLSS Qualität", impact: "+20-35%" },
        { text: "Texturqualität: Ultra oder Hoch (minimaler FPS-Einfluss)", impact: "-1-2%" },
        { text: "Schattenqualität: Hoch oder Mittel (Ultra ist teuer)", impact: "+5-10%" },
        { text: "Lichtqualität: Mittel oder Hoch", impact: "+3-5%" },
        { text: "Globale Beleuchtung: Mittel (Ultra ist schwer)", impact: "+5-8%" },
        { text: "Reflexionsqualität: Mittel oder Niedrig (bei Ultra sehr teuer)", impact: "+10-15%" },
        { text: "Wasserqualität: Benutzerdefiniert — Reflexion auf Niedrig, Physik auf 1/4", impact: "+5-10%" },
        { text: "Volumetrik: Niedrig oder Mittel (starker FPS-Einfluss)", impact: "+10-15%" },
        { text: "Partikelqualität: Mittel", impact: "+3-5%" },
        { text: "Tessellation: Aus oder Mittel", impact: "+3-5%" },
        { text: "Baumqualität: Mittel oder Niedrig", impact: "+5-8%" },
        { text: "Parallax-Occlusion-Mapping: Aus", impact: "+2-3%" },
        { text: "Decal-Qualität: Hoch (geringer Einfluss)", impact: "-1-2%" },
        { text: "Fellqualität: Niedrig (sehr teuer, subtiler Unterschied)", impact: "+5-10%" },
        { text: "Gras-Schatten: Niedrig oder Mittel", impact: "+3-5%" },
        { text: "Weiche Schatten: Soft (PCSS ist teuer, Sharpest am günstigsten)", impact: "+3-5%" }
      ]
    },
    fr: {
      title: "Réglages qualité optimisés",
      target: "60 FPS",
      focus: "Visuels équilibrés avec 60 FPS stables sur matériel milieu de gamme",
      tips: [
        { text: "Upscaling : FSR 2.0 Qualité ou DLSS Qualité", impact: "+20-35%" },
        { text: "Qualité des textures : Ultra ou Haute (impact FPS minime)", impact: "-1-2%" },
        { text: "Qualité des ombres : Haute ou Moyenne (Ultra est coûteux)", impact: "+5-10%" },
        { text: "Qualité de l'éclairage : Moyenne ou Haute", impact: "+3-5%" },
        { text: "Illumination globale : Moyenne (Ultra est lourd)", impact: "+5-8%" },
        { text: "Qualité des réflexions : Moyenne ou Basse (très coûteux en Ultra)", impact: "+10-15%" },
        { text: "Qualité de l'eau : Personnalisée — Réflexion sur Basse, Physique sur 1/4", impact: "+5-10%" },
        { text: "Volumétriques : Bas ou Moyen (gros impact FPS)", impact: "+10-15%" },
        { text: "Qualité des particules : Moyenne", impact: "+3-5%" },
        { text: "Tessellation : Désactivée ou Moyenne", impact: "+3-5%" },
        { text: "Qualité des arbres : Moyenne ou Basse", impact: "+5-8%" },
        { text: "Parallax Occlusion Mapping : Désactivé", impact: "+2-3%" },
        { text: "Qualité des décalcomanies : Haute (faible impact)", impact: "-1-2%" },
        { text: "Qualité de la fourrure : Basse (très coûteuse, différence subtile)", impact: "+5-10%" },
        { text: "Ombres d'herbe : Basses ou Moyennes", impact: "+3-5%" },
        { text: "Ombres douces : Douces (PCSS est coûteux, Sharpest est le moins cher)", impact: "+3-5%" }
      ]
    },
    es: {
      title: "Ajustes de calidad optimizados",
      target: "60 FPS",
      focus: "Visuales equilibrados con 60 FPS estables en hardware de gama media",
      tips: [
        { text: "Upscaling: FSR 2.0 Calidad o DLSS Calidad", impact: "+20-35%" },
        { text: "Calidad de texturas: Ultra o Alta (impacto FPS mínimo)", impact: "-1-2%" },
        { text: "Calidad de sombras: Alta o Media (Ultra es cara)", impact: "+5-10%" },
        { text: "Calidad de iluminación: Media o Alta", impact: "+3-5%" },
        { text: "Iluminación global: Media (Ultra es pesada)", impact: "+5-8%" },
        { text: "Calidad de reflejos: Media o Baja (muy caro en Ultra)", impact: "+10-15%" },
        { text: "Calidad del agua: Personalizada — Reflejo en Bajo, Física en 1/4", impact: "+5-10%" },
        { text: "Volumétricos: Bajo o Medio (gran impacto en FPS)", impact: "+10-15%" },
        { text: "Calidad de partículas: Media", impact: "+3-5%" },
        { text: "Teselado: Desactivado o Medio", impact: "+3-5%" },
        { text: "Calidad de árboles: Media o Baja", impact: "+5-8%" },
        { text: "Parallax Occlusion Mapping: Desactivado", impact: "+2-3%" },
        { text: "Calidad de calcomanías: Alta (bajo impacto)", impact: "-1-2%" },
        { text: "Calidad de pelaje: Baja (muy cara, diferencia sutil)", impact: "+5-10%" },
        { text: "Sombras de hierba: Bajas o Medias", impact: "+3-5%" },
        { text: "Sombras suaves: Suaves (PCSS es cara, Sharpest la más barata)", impact: "+3-5%" }
      ]
    }
  },
  "pubg": {
    de: {
      title: "Wettbewerbseinstellungen",
      target: "144 FPS",
      focus: "Gegnersichtbarkeit und stabile Leistung",
      tips: [
        { text: "Render-Skalierung: 100% (Auto, falls unter Ziel-FPS)", impact: "Baseline" },
        { text: "Texturqualität: Niedrig oder Mittel (Niedrig verbessert Sichtbarkeit von Spielern)", impact: "+3-5%" },
        { text: "Antialiasing: Niedrig oder Mittel (TSM besser als FXAA)", impact: "+3-5%" },
        { text: "Post-Processing: Niedrig oder Sehr Niedrig (verschwimmt Sicht bei Hoch)", impact: "+5-8%" },
        { text: "Schattenqualität: Niedrig (Schatten noch sichtbar, weniger GPU-Last)", impact: "+5-10%" },
        { text: "Effektqualität: Niedrig (weniger Rauch/Suppression-Visuallärm)", impact: "+3-5%" },
        { text: "Folienqualität: Niedrig (Gegner besser durch Büsche erkennen)", impact: "+5-8%" },
        { text: "Sichtweite: Ultra (ferne Gegner sehen)", impact: "-3-5%" },
        { text: "Bewegungsunschärfe: Aus", impact: "+2-3%" },
        { text: "Schärfe: An (hilft, Gegner zu erkennen)", impact: "Quality" },
        { text: "VSync: Aus", impact: "+5-10%" },
        { text: "DirectX-Version: DX11 (stabiler als DX12 für dieses Spiel)", impact: "+5-10%" }
      ]
    },
    fr: {
      title: "Réglages compétitifs",
      target: "144 FPS",
      focus: "Visibilité des ennemis et performance stable",
      tips: [
        { text: "Échelle de rendu : 100% (Auto si sous la cible FPS)", impact: "Baseline" },
        { text: "Qualité des textures : Basse ou Moyenne (Basse améliore la visibilité des joueurs)", impact: "+3-5%" },
        { text: "Antialiasing : Bas ou Moyen (TSM meilleur que FXAA)", impact: "+3-5%" },
        { text: "Post-traitement : Bas ou Très bas (floute la vue quand élevé)", impact: "+5-8%" },
        { text: "Qualité des ombres : Basse (ombres encore visibles, moins de charge GPU)", impact: "+5-10%" },
        { text: "Qualité des effets : Basse (moins de bruit visuel fumée/suppression)", impact: "+3-5%" },
        { text: "Qualité du feuillage : Basse (voir les ennemis à travers les buissons)", impact: "+5-8%" },
        { text: "Distance d'affichage : Ultra (voir les ennemis lointains)", impact: "-3-5%" },
        { text: "Flou de mouvement : Désactivé", impact: "+2-3%" },
        { text: "Netteté : Activée (aide à repérer les ennemis)", impact: "Quality" },
        { text: "VSync : Désactivée", impact: "+5-10%" },
        { text: "Version DirectX : DX11 (plus stable que DX12 pour ce jeu)", impact: "+5-10%" }
      ]
    },
    es: {
      title: "Ajustes competitivos",
      target: "144 FPS",
      focus: "Visibilidad de enemigos y rendimiento estable",
      tips: [
        { text: "Escala de render: 100% (Auto si baja del objetivo de FPS)", impact: "Baseline" },
        { text: "Calidad de texturas: Baja o Media (Baja mejora la visibilidad de jugadores)", impact: "+3-5%" },
        { text: "Antialiasing: Bajo o Medio (TSM mejor que FXAA)", impact: "+3-5%" },
        { text: "Post-procesado: Bajo o Muy bajo (desenfoca la vista cuando está alto)", impact: "+5-8%" },
        { text: "Calidad de sombras: Baja (sombras aún visibles, menos carga de GPU)", impact: "+5-10%" },
        { text: "Calidad de efectos: Baja (menos ruido visual de humo/supresión)", impact: "+3-5%" },
        { text: "Calidad de follaje: Baja (ver enemigos a través de arbustos)", impact: "+5-8%" },
        { text: "Distancia de visión: Ultra (ver enemigos lejanos)", impact: "-3-5%" },
        { text: "Desenfoque de movimiento: Desactivado", impact: "+2-3%" },
        { text: "Nitidez: Activada (ayuda a detectar enemigos)", impact: "Quality" },
        { text: "VSync: Desactivado", impact: "+5-10%" },
        { text: "Versión de DirectX: DX11 (más estable que DX12 en este juego)", impact: "+5-10%" }
      ]
    }
  },
  "rainbow-six-siege": {
    de: {
      title: "Wettbewerbseinstellungen",
      target: "144-240+ FPS",
      focus: "Klare Sichtlinien, maximale FPS, minimale Ablenkung",
      tips: [
        { text: "Anzeigemodus: Vollbild", impact: "+3-5%" },
        { text: "Texturqualität: Niedrig oder Mittel (Spielermodelle bleiben klar)", impact: "+3-5%" },
        { text: "Texturfilterung: Linear oder Anisotrop 2x", impact: "+1-2%" },
        { text: "Schattenqualität: Mittel (Niedrig versteckt einige Spielerschatten)", impact: "+5-8%" },
        { text: "Post-Processing-Antialiasing: Aus oder T-AA (T-AA unscharf leicht)", impact: "+5-10%" },
        { text: "Umgebungsverdeckung: Aus (SSBC kostet 10-15% FPS)", impact: "+10-15%" },
        { text: "Linseneffekt: Aus (Bloom blendet)", impact: "+2-3%" },
        { text: "Tiefenunschärfe beim Zoomen: Aus", impact: "+1-2%" },
        { text: "Grafik-API: Vulkan (höhere FPS als DX11 auf den meisten GPUs)", impact: "+10-20%" },
        { text: "TAA-Schärfe: 0,5-1,0 (hilft gegen T-AA-Unschärfe)", impact: "Quality" },
        { text: "VSync: Aus", impact: "+5-10%" },
        { text: "Bildratenbegrenzung: Auf Bildschirmfrequenz oder Aus setzen", impact: "Input" }
      ]
    },
    fr: {
      title: "Réglages compétitifs",
      target: "144-240+ FPS",
      focus: "Lignes de vue dégagées, FPS max, distractions minimales",
      tips: [
        { text: "Mode d'affichage : Plein écran", impact: "+3-5%" },
        { text: "Qualité des textures : Basse ou Moyenne (modèles de joueurs restent nets)", impact: "+3-5%" },
        { text: "Filtrage des textures : Linéaire ou Anisotrope 2x", impact: "+1-2%" },
        { text: "Qualité des ombres : Moyenne (Basse cache certaines ombres joueurs)", impact: "+5-8%" },
        { text: "Antialiasing post-traitement : Désactivé ou T-AA (T-AA floute légèrement)", impact: "+5-10%" },
        { text: "Occlusion ambiante : Désactivée (SSBC coûte 10-15% FPS)", impact: "+10-15%" },
        { text: "Effet de lentille : Désactivé (le bloom aveugle)", impact: "+2-3%" },
        { text: "Profondeur de champ au zoom : Désactivée", impact: "+1-2%" },
        { text: "API graphique : Vulkan (FPS plus élevés que DX11 sur la plupart des GPU)", impact: "+10-20%" },
        { text: "Netteté TAA : 0,5-1,0 (combat le flou T-AA)", impact: "Quality" },
        { text: "VSync : Désactivée", impact: "+5-10%" },
        { text: "Limite de framerate : Réglée sur la fréquence de l'écran ou Désactivée", impact: "Input" }
      ]
    },
    es: {
      title: "Ajustes competitivos",
      target: "144-240+ FPS",
      focus: "Líneas de visión despejadas, FPS máximos, distracciones mínimas",
      tips: [
        { text: "Modo de pantalla: Pantalla completa", impact: "+3-5%" },
        { text: "Calidad de texturas: Baja o Media (los modelos de jugador siguen nítidos)", impact: "+3-5%" },
        { text: "Filtrado de texturas: Lineal o Anisotrópico 2x", impact: "+1-2%" },
        { text: "Calidad de sombras: Media (Baja oculta algunas sombras de jugadores)", impact: "+5-8%" },
        { text: "Antialiasing de post-procesado: Desactivado o T-AA (T-AA desenfoca ligeramente)", impact: "+5-10%" },
        { text: "Oclusión ambiental: Desactivada (SSBC cuesta 10-15% de FPS)", impact: "+10-15%" },
        { text: "Efecto de lente: Desactivado (el bloom deslumbra)", impact: "+2-3%" },
        { text: "Profundidad de campo al hacer zoom: Desactivada", impact: "+1-2%" },
        { text: "API gráfica: Vulkan (más FPS que DX11 en la mayoría de GPUs)", impact: "+10-20%" },
        { text: "Nitidez TAA: 0,5-1,0 (combate el desenfoque T-AA)", impact: "Quality" },
        { text: "VSync: Desactivado", impact: "+5-10%" },
        { text: "Límite de FPS: A la frecuencia del monitor o Desactivado", impact: "Input" }
      ]
    }
  },
  "dota-2": {
    de: {
      title: "Performance-Einstellungen",
      target: "120-144+ FPS",
      focus: "Reibungslose Teamfight-Leistung, keine Ruckler",
      tips: [
        { text: "API: DirectX 11 (bestes Gleichgewicht aus FPS und Stabilität)", impact: "+5-10%" },
        { text: "Schattenqualität: Mittel oder Niedrig", impact: "+5-8%" },
        { text: "Texturqualität: Hoch (minimaler FPS-Einfluss)", impact: "-1-2%" },
        { text: "Effektqualität: Niedrig (reduziert Partikelwirrwarr in Teamfights)", impact: "+5-10%" },
        { text: "Render-Qualität des Spiels: 80-100% (niedriger = mehr FPS)", impact: "+10-20%" },
        { text: "Umgebungsverdeckung: Aus (kein Wettbewerbswert)", impact: "+5-8%" },
        { text: "Lichtqualität: Mittel oder Niedrig", impact: "+2-3%" },
        { text: "Antialiasing: Aus oder 2x (weniger Unschärfe, hilft, Gegner zu sehen)", impact: "+5-10%" },
        { text: "Gras: Aus (klarere Bodensicht)", impact: "+3-5%" },
        { text: "Baum-Detail: Mittel oder Niedrig", impact: "+2-3%" },
        { text: "Wasserqualität: Mittel oder Niedrig", impact: "+2-3%" },
        { text: "Glühen: Aus", impact: "+2-3%" },
        { text: "Normal Maps: Aus", impact: "+3-5%" },
        { text: "VSync: Aus", impact: "+5-10%" },
        { text: "Qualitäts-Regler auf Schnellst oder Performance für die Basis", impact: "+15-25%" }
      ]
    },
    fr: {
      title: "Réglages performance",
      target: "120-144+ FPS",
      focus: "Performance fluide en teamfight, sans saccades",
      tips: [
        { text: "API : DirectX 11 (meilleur équilibre FPS/stabilité)", impact: "+5-10%" },
        { text: "Qualité des ombres : Moyenne ou Basse", impact: "+5-8%" },
        { text: "Qualité des textures : Haute (impact FPS minime)", impact: "-1-2%" },
        { text: "Qualité des effets : Basse (réduit l'encombrement de particules en teamfight)", impact: "+5-10%" },
        { text: "Qualité de rendu du jeu : 80-100% (plus bas = plus de FPS)", impact: "+10-20%" },
        { text: "Occlusion ambiante : Désactivée (aucun intérêt compétitif)", impact: "+5-8%" },
        { text: "Qualité de l'éclairage : Moyenne ou Basse", impact: "+2-3%" },
        { text: "Antialiasing : Désactivé ou 2x (floute moins, aide à voir les ennemis)", impact: "+5-10%" },
        { text: "Herbe : Désactivée (visibilité du sol plus claire)", impact: "+3-5%" },
        { text: "Détail des arbres : Moyen ou Bas", impact: "+2-3%" },
        { text: "Qualité de l'eau : Moyenne ou Basse", impact: "+2-3%" },
        { text: "Lueur : Désactivée", impact: "+2-3%" },
        { text: "Normal Maps : Désactivées", impact: "+3-5%" },
        { text: "VSync : Désactivée", impact: "+5-10%" },
        { text: "Curseur de qualité sur le plus rapide ou performance de base", impact: "+15-25%" }
      ]
    },
    es: {
      title: "Ajustes de rendimiento",
      target: "120-144+ FPS",
      focus: "Rendimiento fluido en teamfights, sin tirones",
      tips: [
        { text: "API: DirectX 11 (mejor equilibrio FPS/estabilidad)", impact: "+5-10%" },
        { text: "Calidad de sombras: Media o Baja", impact: "+5-8%" },
        { text: "Calidad de texturas: Alta (impacto FPS mínimo)", impact: "-1-2%" },
        { text: "Calidad de efectos: Baja (reduce el desorden de partículas en teamfights)", impact: "+5-10%" },
        { text: "Calidad de render del juego: 80-100% (más bajo = más FPS)", impact: "+10-20%" },
        { text: "Oclusión ambiental: Desactivada (sin valor competitivo)", impact: "+5-8%" },
        { text: "Calidad de iluminación: Media o Baja", impact: "+2-3%" },
        { text: "Antialiasing: Desactivado o 2x (desenfoca menos, ayuda a ver enemigos)", impact: "+5-10%" },
        { text: "Hierba: Desactivada (mejor visibilidad del suelo)", impact: "+3-5%" },
        { text: "Detalle de árboles: Medio o Bajo", impact: "+2-3%" },
        { text: "Calidad del agua: Media o Baja", impact: "+2-3%" },
        { text: "Brillo: Desactivado", impact: "+2-3%" },
        { text: "Normal Maps: Desactivadas", impact: "+3-5%" },
        { text: "VSync: Desactivado", impact: "+5-10%" },
        { text: "Mueve el control de calidad a Más rápido o Rendimiento como base", impact: "+15-25%" }
      ]
    }
  },
  "league-of-legends": {
    de: {
      title: "Wettbewerbseinstellungen",
      target: "144-240+ FPS",
      focus: "Stabile FPS in Teamfights, minimale Eingabeverzögerung",
      tips: [
        { text: "Vertikale Synchronisation aktivieren — Aus (senkt Eingabeverzögerung)", impact: "+5-10%" },
        { text: "Antialiasing: Aus (geringer visueller Nutzen in LoL)", impact: "+5-8%" },
        { text: "Schattenqualität: Niedrig oder Aus (Schatten geben keinen Wettbewerbsvorteil)", impact: "+5-8%" },
        { text: "Charakterqualität: Mittel oder Hoch (Skillshots leichter sichtbar)", impact: "-2-3%" },
        { text: "Umgebungsqualität: Niedrig (kein Wettbewerbswert)", impact: "+3-5%" },
        { text: "Effektqualität: Niedrig (weniger visuelles Rauschen in Teamfights)", impact: "+5-8%" },
        { text: "Frame-Cap: Auf Bildschirmfrequenz oder deaktiviert setzen", impact: "Input" },
        { text: "Farbmodus: Farbenblind-Modus für klarere Lebensanzeigen", impact: "Accessibility" },
        { text: "Interface-Skalierung: Niedriger = mehr Sicht auf das Spiel", impact: "Quality" },
        { text: "Mausbeschleunigung: In Windows-Einstellungen aus für gleichmäßiges Zielen", impact: "Input" },
        { text: "Grafik-Regler im Spiel: Performance oder Mittel als Basis", impact: "+10-20%" }
      ]
    },
    fr: {
      title: "Réglages compétitifs",
      target: "144-240+ FPS",
      focus: "FPS stables en teamfight, latence d'entrée minimale",
      tips: [
        { text: "Synchronisation verticale — Désactivée (réduit la latence)", impact: "+5-10%" },
        { text: "Antialiasing : Désactivé (gain visuel minime en LoL)", impact: "+5-8%" },
        { text: "Qualité des ombres : Basse ou Désactivée (les ombres n'apportent aucun avantage)", impact: "+5-8%" },
        { text: "Qualité des personnages : Moyenne ou Haute (skillshots plus faciles à voir)", impact: "-2-3%" },
        { text: "Qualité de l'environnement : Basse (aucun intérêt compétitif)", impact: "+3-5%" },
        { text: "Qualité des effets : Basse (moins de bruit visuel en teamfight)", impact: "+5-8%" },
        { text: "Limite de FPS : Réglée sur la fréquence de l'écran ou désactivée", impact: "Input" },
        { text: "Mode couleur : Mode daltonien pour des barres de vie plus nettes", impact: "Accessibility" },
        { text: "Échelle d'interface : Plus basse = plus de visibilité du jeu", impact: "Quality" },
        { text: "Accélération de la souris : Désactivée dans Windows pour une visée cohérente", impact: "Input" },
        { text: "Curseur graphique en jeu : Performance ou Moyen de base", impact: "+10-20%" }
      ]
    },
    es: {
      title: "Ajustes competitivos",
      target: "144-240+ FPS",
      focus: "FPS estables en teamfights, latencia de entrada mínima",
      tips: [
        { text: "Sincronización vertical — Desactivada (reduce la latencia)", impact: "+5-10%" },
        { text: "Antialiasing: Desactivado (ganancia visual mínima en LoL)", impact: "+5-8%" },
        { text: "Calidad de sombras: Baja o Desactivada (las sombras no dan ventaja)", impact: "+5-8%" },
        { text: "Calidad de personajes: Media o Alta (los skillshots se ven mejor)", impact: "-2-3%" },
        { text: "Calidad del entorno: Baja (sin valor competitivo)", impact: "+3-5%" },
        { text: "Calidad de efectos: Baja (menos ruido visual en teamfights)", impact: "+5-8%" },
        { text: "Límite de FPS: A la frecuencia del monitor o desactivado", impact: "Input" },
        { text: "Modo de color: Modo daltonismo para barras de vida más claras", impact: "Accessibility" },
        { text: "Escala de interfaz: Más baja = más visibilidad del juego", impact: "Quality" },
        { text: "Aceleración del ratón: Desactivada en Windows para una puntería consistente", impact: "Input" },
        { text: "Deslizador gráfico del juego: Rendimiento o Medio como base", impact: "+10-20%" }
      ]
    }
  }
};
