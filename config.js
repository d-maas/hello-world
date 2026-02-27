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

  // ── Head bubble (special type; renders as a face image instead of a colour) ─
  HEAD_ID:        'head',       // internal identifier – never treated as a colour string
  HEAD_CHANCE:    0.12,         // probability any randomly generated bubble is a head
  HEAD_IMAGE_SRC: 'head.png',   // path to the head photo (place the file next to index.html)

  // ── Aim guide ───────────────────────────────────────────────────────────────
  AIM_GUIDE_LENGTH:      300,  // baseline dashed-line length (px)
  AIM_GUIDE_POST_BOUNCE: 140,  // minimum px drawn past the first wall bounce

  // ── Big-pop celebration toast ────────────────────────────────────────────────
  WIJNTJE_TEXT:     'Wijntje verdient',  // message shown on a big pop
  WIJNTJE_MIN_POP:  4,                   // matched-group size (≥) that triggers it
  WIJNTJE_DURATION: 2000,                // ms the toast stays visible

  // ── Colors ──────────────────────────────────────────────────────────────────
  COLORS: ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6', '#e67e22'],
};
