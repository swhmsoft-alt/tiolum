/**
 * make-og-image.mjs — 生成 public/og-default.png（1200x630）
 *
 * 背景：src/lib/seo.ts 的 DEFAULT_OG 指向 /og-default.png，但 public/ 中从未存在该文件，
 *       导致全站 og:image 404。执行书 S2 修复此项。
 *
 * 零依赖：只用 Node 内置 zlib 手写 PNG 编码 + 内嵌 5x7 位图字体，
 *         不引入 sharp（sharp 仅为 astro 的传递依赖，未在 package.json 声明）。
 *
 * 用法：node scripts/make-og-image.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'public', 'og-default.png');

const W = 1200;
const H = 630;

/* ---------- 5x7 位图字体（'#' = 亮） ---------- */

const GLYPHS = {
  A: '.###.|#...#|#...#|#####|#...#|#...#|#...#',
  B: '####.|#...#|#...#|####.|#...#|#...#|####.',
  C: '.###.|#...#|#....|#....|#....|#...#|.###.',
  D: '####.|#...#|#...#|#...#|#...#|#...#|####.',
  E: '#####|#....|#....|####.|#....|#....|#####',
  F: '#####|#....|#....|####.|#....|#....|#....',
  G: '.###.|#...#|#....|#.###|#...#|#...#|.###.',
  H: '#...#|#...#|#...#|#####|#...#|#...#|#...#',
  I: '#####|..#..|..#..|..#..|..#..|..#..|#####',
  J: '..###|...#.|...#.|...#.|...#.|#..#.|.##..',
  K: '#...#|#..#.|#.#..|##...|#.#..|#..#.|#...#',
  L: '#....|#....|#....|#....|#....|#....|#####',
  M: '#...#|##.##|#.#.#|#...#|#...#|#...#|#...#',
  N: '#...#|##..#|#.#.#|#..##|#...#|#...#|#...#',
  O: '.###.|#...#|#...#|#...#|#...#|#...#|.###.',
  P: '####.|#...#|#...#|####.|#....|#....|#....',
  Q: '.###.|#...#|#...#|#...#|#.#.#|#..#.|.##.#',
  R: '####.|#...#|#...#|####.|#.#..|#..#.|#...#',
  S: '.####|#....|#....|.###.|....#|....#|####.',
  T: '#####|..#..|..#..|..#..|..#..|..#..|..#..',
  U: '#...#|#...#|#...#|#...#|#...#|#...#|.###.',
  V: '#...#|#...#|#...#|#...#|#...#|.#.#.|..#..',
  W: '#...#|#...#|#...#|#.#.#|#.#.#|##.##|#...#',
  X: '#...#|#...#|.#.#.|..#..|.#.#.|#...#|#...#',
  Y: '#...#|#...#|.#.#.|..#..|..#..|..#..|..#..',
  Z: '#####|....#|...#.|..#..|.#...|#....|#####',
  '0': '.###.|#...#|#..##|#.#.#|##..#|#...#|.###.',
  '1': '..#..|.##..|..#..|..#..|..#..|..#..|.###.',
  '2': '.###.|#...#|....#|...#.|..#..|.#...|#####',
  '3': '####.|....#|....#|.###.|....#|....#|####.',
  '4': '#..#.|#..#.|#..#.|#####|...#.|...#.|...#.',
  '5': '#####|#....|####.|....#|....#|#...#|.###.',
  '6': '.###.|#...#|#....|####.|#...#|#...#|.###.',
  '7': '#####|....#|...#.|..#..|.#...|.#...|.#...',
  '8': '.###.|#...#|#...#|.###.|#...#|#...#|.###.',
  '9': '.###.|#...#|#...#|.####|....#|#...#|.###.',
  ' ': '.....|.....|.....|.....|.....|.....|.....',
  '.': '.....|.....|.....|.....|.....|.##..|.##..',
  ',': '.....|.....|.....|.....|.##..|.##..|.#...',
  '-': '.....|.....|.....|#####|.....|.....|.....',
  '/': '....#|....#|...#.|..#..|.#...|#....|#....',
  ':': '.....|.##..|.##..|.....|.##..|.##..|.....',
  '+': '.....|..#..|..#..|#####|..#..|..#..|.....',
  '&': '.##..|#..#.|#..#.|.##..|#.#.#|#..#.|.##.#',
};

/* ---------- 画布 ---------- */

const BG = [0x0b, 0x0f, 0x14];
const px = Buffer.alloc(W * H * 3);

const setPx = (x, y, rgb) => {
  if (x < 0 || y < 0 || x >= W || y >= H) return;
  const o = (y * W + x) * 3;
  px[o] = rgb[0];
  px[o + 1] = rgb[1];
  px[o + 2] = rgb[2];
};

const fillRect = (x, y, w, h, rgb) => {
  for (let j = y; j < y + h; j++) for (let i = x; i < x + w; i++) setPx(i, j, rgb);
};

const drawText = (text, x, y, scale, rgb) => {
  let cx = x;
  for (const ch of text.toUpperCase()) {
    const g = GLYPHS[ch];
    if (!g) {
      cx += scale * 6;
      continue;
    }
    g.split('|').forEach((row, ry) => {
      for (let rxi = 0; rxi < 5; rxi++) {
        if (row[rxi] === '#') fillRect(cx + rxi * scale, y + ry * scale, scale, scale, rgb);
      }
    });
    cx += 6 * scale;
  }
  return cx;
};
/* ---------- 画面构成 ---------- */

// 背景
fillRect(0, 0, W, H, BG);

// 钛金属质感的斜向渐变条纹（低对比）
for (let i = 0; i < W; i += 8) {
  const t = i / W;
  const v = Math.round(10 + 16 * t);
  fillRect(i, 0, 4, H, [v, v + 4, v + 9]);
}

// 左侧品牌色竖条
fillRect(0, 0, 14, H, [0x35, 0x87, 0xac]);

// 主标题
drawText('TITOLUM', 90, 150, 14, [0xf5, 0xf8, 0xfa]);

// 分隔线
fillRect(92, 265, 320, 4, [0x35, 0x87, 0xac]);

// 副标题
drawText('TITANIUM CNC MACHINING', 92, 305, 6, [0x8f, 0xc6, 0xdc]);
drawText('BAOJI CHINA', 92, 375, 5, [0x35, 0x87, 0xac]);

// 底部说明
drawText('DRAWING BASED SUPPLY', 92, 470, 4, [0x5b, 0x6b, 0x7b]);
drawText('QUALIFIED SUPPLIER NETWORK', 92, 510, 4, [0x5b, 0x6b, 0x7b]);

// 右上角装饰：同心圆环（机械加工意象）
const cx = 1010;
const cy = 200;
for (const [r, w] of [[150, 3], [110, 2], [70, 2]]) {
  for (let a = 0; a < 360; a += 0.4) {
    const rad = (a * Math.PI) / 180;
    for (let t = 0; t < w; t++) {
      setPx(Math.round(cx + Math.cos(rad) * (r + t)), Math.round(cy + Math.sin(rad) * (r + t)), [
        0x1d, 0x4f, 0x6b,
      ]);
    }
  }
}
for (let a = 0; a < 360; a += 30) {
  const rad = (a * Math.PI) / 180;
  for (let t = -6; t <= 6; t++) {
    setPx(Math.round(cx + Math.cos(rad) * (150 + t)), Math.round(cy + Math.sin(rad) * (150 + t)), [
      0x26, 0x68, 0x8a,
    ]);
  }
}
/* ---------- PNG 编码（零依赖，仅用 zlib） ---------- */

const CRC_TABLE = (() => {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const body = Buffer.concat([typeBuf, data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body), 0);
  return Buffer.concat([len, body, crc]);
}

function encodePng(rgb, width, height) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // color type: truecolor RGB
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  // 每行前置 filter byte 0
  const raw = Buffer.alloc(height * (width * 3 + 1));
  for (let y = 0; y < height; y++) {
    const o = y * (width * 3 + 1);
    raw[o] = 0;
    rgb.copy(raw, o + 1, y * width * 3, (y + 1) * width * 3);
  }

  const idat = zlib.deflateSync(raw, { level: 9 });

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', idat),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

/* ---------- 输出 ---------- */

fs.mkdirSync(path.dirname(OUT), { recursive: true });
const png = encodePng(px, W, H);
fs.writeFileSync(OUT, png);
console.log(`written ${path.relative(ROOT, OUT)} ${W}x${H} ${png.length} bytes`);