// ── Bubble Shooter – tunable configuration ────────────────────────────────────
const CONFIG = {

  // ── Geometry ────────────────────────────────────────────────────────────────
  R:    20,   // bubble radius (px)
  COLS: 10,   // bubbles per even row (odd rows get COLS-1)

  // ── Grid ────────────────────────────────────────────────────────────────────
  MAX_ROWS:  18,  // total grid rows tracked
  FILL_ROWS:  6,  // rows pre-filled with random bubbles at game start

  // ── Gameplay ────────────────────────────────────────────────────────────────
  BUBBLE_SPEED:      24,   // flying-bubble speed in px/frame
  MATCH_COUNT:       3,   // minimum connected group size to pop
  SHOTS_PER_NEW_ROW: 20,  // every Nth shot → push a fresh row from the top
  POINTS_PER_BUBBLE: 10,  // score awarded per bubble cleared

  // ── Aim guide ───────────────────────────────────────────────────────────────
  AIM_GUIDE_LENGTH:      300,  // baseline dashed-line length (px)
  AIM_GUIDE_POST_BOUNCE: 140,  // minimum px drawn past the first wall bounce

  // ── Colors ──────────────────────────────────────────────────────────────────
  COLORS: ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6', '#e67e22'],
};
