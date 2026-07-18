/** @type {Record<string, string>} */
export const genreLabels = {
  "action": "Action",
  "battle-royale": "Battle Royale",
  "competitive-fps": "Competitive FPS",
  "horror": "Horror",
  "indie": "Indie",
  "mmo": "MMO",
  "moba": "MOBA",
  "open-world": "Open World",
  "racing": "Racing",
  "rpg": "RPG",
  "sandbox": "Sandbox",
  "simulation": "Simulation",
  "strategy": "Strategy",
  "survival": "Survival"
};

/** @type {Record<string, string>} */
export const genreColors = {
  "action": "#b91c1c",
  "battle-royale": "#9a3412",
  "competitive-fps": "#0369a1",
  "horror": "#6d28d9",
  "indie": "#3f6212",
  "mmo": "#be123c",
  "moba": "#9b4707",
  "open-world": "#065f46",
  "racing": "#b91c1c",
  "rpg": "#7c3aed",
  "sandbox": "#0a7268",
  "simulation": "#4338ca",
  "strategy": "#1d4ed8",
  "survival": "#92400e"
};

export const genreBadgeGenres = Object.keys(genreLabels);

export const genreList = [...genreBadgeGenres];

