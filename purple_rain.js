const ctx = require("axel");
const rain = function() {
  ctx.clear();
  while (1) {
    for (let i = 0; i < 100; i += 1) {
      ctx.fg(148, 0, 211);
      ctx.text(Math.random() * ctx.cols, Math.random() * ctx.rows, "|");
    }
    ctx.clear();
  }
};
rain();
