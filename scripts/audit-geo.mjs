/**
 * audit-geo.mjs — 工业 B2B 商业页面「AI 搜索选源资格」自动检查器
 *
 * 依据：website_docs/工业 B2B 商业页面 AI 搜索选源资格检查标准.md
 * 用法：npm run audit:geo   （需先 npm run build）
 *
 * 规则：
 * - 零依赖，只读 dist/，不修改任何文件。
 * - 硬门槛（必须双通过）：① 索引资格、③ 事实与证据。
 * - 红线：页面出现价格/成本类金额即判事实与证据硬门槛不通过。
 * - 事实判据按页面角色分别要求，避免用同一把尺子量所有页。
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const OUT_MD = path.join(ROOT, 'website_docs', 'AI搜索选源资格检查报告.md');
const OUT_JSON = path.join(ROOT, 'website_docs', 'AI搜索选源资格检查报告.json');
const SITE = 'https://titaniumcncmachining.com';

const TITLE_MAX = 60;
const TITLE_OK_MAX = 70;
const DESC_MAX = 155;
const DESC_OK_MAX = 170;

/* ---------- 红线：价格/成本金额 ---------- */

/** 硬红线：出现金额数值即不通过。金额必须有货币符号或货币代码佐证，避免把 "Quotation 2–4 business days" 这类时效表误判为价格。 */
const FORBIDDEN_HARD = [
  [/[$€£¥]\s?\d/, '出现货币金额'],
  [/\b(USD|EUR|RMB|CNY)\s?\d/i, '出现货币金额'],
  [/\b(price|cost|quote|quotation|budget)s?\s*(of|at|from|is|:)?\s*[$€£¥]\s?\d/i, '价格/成本与金额同现'],
  [/\bdiscount(s|ed|ing)?\b/i, '出现 discount'],
  [/\bmarkup\b/i, '出现 markup'],
  [/\bcheap(est)?\b/i, '出现 cheap'],
];

/** 软提示：仅描述报价结构，未出现金额，需人工确认。 */
const FORBIDDEN_SOFT = [
  [/\bper[- ]piece price\b/i, '提及单件价格'],
  [/\bunit price\b/i, '提及单价字段'],
  [/\bprice list\b/i, '提及价目表'],
  [/\bprice range\b/i, '提及价格区间'],
];

/** 否定语境（no prices / not price alone）与非金额语境需排除。 */
const NEGATION = /\b(no|not|never|without|non|zero|cannot|don't|doesn't|before any)\b[^.]{0,26}$/i;

/**
 * 返回 { hard, soft }：
 * - hard：金额型红线，命中即事实与证据硬门槛不通过。
 * - soft：仅出现 price/cost 措辞（多为报价流程说明），需人工确认是否含金额，不单独判失败。
 */
function findForbidden(text) {
  const hard = [];
  for (const [re, msg] of FORBIDDEN_HARD) if (re.test(text)) hard.push(msg);
  const soft = [];
  for (const [re, msg] of FORBIDDEN_SOFT) if (re.test(text)) soft.push(msg);
  for (const re of [/\bprices?\b/gi, /\bcosts?\b/gi]) {
    let m;
    while ((m = re.exec(text)) !== null) {
      const before = text.slice(Math.max(0, m.index - 40), m.index);
      if (NEGATION.test(before)) continue;
      const after = text.slice(m.index, m.index + 30);
      if (/s? you in time|in time/i.test(after)) continue;
      soft.push(`出现 ${m[0].toLowerCase()} 措辞（需确认不含金额）`);
      break;
    }
  }
  return { hard: [...new Set(hard)], soft: [...new Set(soft)] };
}

/* ---------- 事实块 ---------- */

const FACTS = {
  toleranceNum: /±\s?0\.05\s?mm/,
  materialName: /\btitanium\b/i,
  materialGrade: /Grade\s?[2579]|Ti-6Al-4V|ASTM\s?B348|AMS\s?4928/i,
  batch: /\bbatch\b|\bpcs\b|\bpieces\b/i,
  leadTime: /working days|lead time|manufacturing time/i,
  inspection: /first article inspection|\bFAI\b|dimensional (inspection )?report|material certificate/i,
  responseTime: /within (one|1) business day|engineering review|quotation/i,
  supplierNetwork: /qualified\s+(supplier|network)/i,
  sizeLimit: /\d+\s*[×x]\s*\d+|Ø\s?\d+|mm\b/i,
  scopeBoundary: /do not machine|outside (our|the) scope|decline|refer(red)? out/i,
};

/** 各角色必须回答的采购事实。 */
const ROLE_RULES = {
  home: { required: ['toleranceNum', 'materialName', 'batch', 'inspection'], minWords: 300 },
  product: {
    required: ['toleranceNum', 'materialGrade', 'batch', 'leadTime', 'inspection', 'responseTime', 'sizeLimit'],
    minWords: 600,
  },
  family: {
    required: ['toleranceNum', 'materialGrade', 'batch', 'leadTime', 'inspection', 'responseTime'],
    minWords: 600,
  },
  'parts-hub': { required: ['toleranceNum', 'materialGrade', 'batch', 'inspection'], minWords: 500 },
  service: { required: ['toleranceNum', 'materialName', 'leadTime', 'inspection'], minWords: 300 },
  rfq: { required: ['responseTime', 'materialName'], minWords: 200 },
  case: { required: ['toleranceNum', 'materialName', 'batch', 'leadTime', 'inspection'], minWords: 400 },
  'case-hub': { required: ['inspection'], minWords: 300 },
  trust: { required: [], minWords: 120 },
};

function roleOf(url) {
  if (url === '/') return 'home';
  if (/^\/parts\/[^/]+\/[^/]+\/$/.test(url)) return 'product';
  if (/^\/parts\/[^/]+\/$/.test(url)) return 'family';
  if (url === '/parts/') return 'parts-hub';
  if (/^\/case-studies\/[^/]+\/$/.test(url)) return 'case';
  if (url === '/case-studies/') return 'case-hub';
  if (['/capabilities/', '/how-it-works/', '/quality/'].includes(url)) return 'service';
  if (url === '/rfq/') return 'rfq';
  return 'trust';
}
/* ---------- 工具 ---------- */

const read = (f) => fs.readFileSync(f, 'utf8');
const stripTags = (h) =>
  h
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) walk(full, out);
    else if (name.endsWith('.html')) out.push(full);
  }
  return out;
}

function urlOf(file) {
  const rel = path.relative(DIST, file).split(path.sep).join('/');
  return '/' + rel.replace(/index\.html$/, '');
}

/** sitemap 中的 loc 为绝对 URL，需转成站内路径再比对。 */
function collectSitemapPaths() {
  const set = new Set();
  if (!fs.existsSync(DIST)) return set;
  for (const name of fs.readdirSync(DIST)) {
    if (!/^sitemap.*\.xml$/.test(name)) continue;
    const xml = read(path.join(DIST, name));
    for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
      try {
        const u = new URL(m[1].trim());
        set.add(u.pathname);
      } catch {
        /* 忽略无法解析的 loc */
      }
    }
  }
  return set;
}

function parseJsonLd(html) {
  const types = [];
  let valid = 0;
  for (const b of html.split('application/ld+json').slice(1)) {
    const raw = b.replace(/^[^>]*>/, '').split('</script>')[0].trim();
    if (!raw) continue;
    try {
      const parsed = JSON.parse(raw);
      for (const item of Array.isArray(parsed) ? parsed : [parsed]) {
        if (item && item['@type']) {
          types.push(...(Array.isArray(item['@type']) ? item['@type'] : [item['@type']]));
          valid += 1;
        }
      }
    } catch {
      /* 无效 JSON-LD 由 valid 计数体现 */
    }
  }
  return { types, valid };
}

function slugTokens(url) {
  const parts = url.replace(/^\/|\/$/g, '').split('/').filter(Boolean);
  const last = parts[parts.length - 1] ?? '';
  return last.replace(/^titanium-/, '').replace(/-/g, ' ').trim();
}

/** 各页面的目标查询词（人工映射，缩写/别名页不适用 slug 推导）。 */
const TARGET_KEYWORDS = {
  '/rfq/': ['quotation', 'quote', 'rfq', 'drawing'],
  '/capabilities/': ['capabilit'],
  '/quality/': ['quality', 'inspection'],
  '/how-it-works/': ['process', 'workflow', 'how'],
  '/contact/': ['contact'],
  '/about/': ['about', 'supplier', 'network'],
  '/parts/': ['part', 'titanium', 'machin'],
  '/case-studies/': ['case', 'stud'],
  '/': ['titanium', 'cnc', 'machin'],
};

/**
 * 取回该页目标词：优先人工映射，否则用 slug 推导。
 * 判定用「词元覆盖」而非连续子串 —— slug "blocks-housings-manifolds" 对应
 * title "Titanium Blocks, Housings & Manifolds"，子串匹配会误判为未覆盖。
 */
function targetWords(url) {
  if (TARGET_KEYWORDS[url]) return TARGET_KEYWORDS[url];
  const t = slugTokens(url);
  return t.length > 2 ? t.split(/\s+/) : [];
}

const FACT_LABEL = {
  toleranceNum: '公差数值',
  materialName: '材料名称',
  materialGrade: '材料牌号',
  batch: '批量',
  leadTime: '交期',
  inspection: '检验文件',
  responseTime: '报价响应时效',
  supplierNetwork: '供应商网络表述',
  sizeLimit: '尺寸边界',
  scopeBoundary: '能力边界',
};
/* ---------- 单页检查 ---------- */

function checkPage(file, sitemapPaths) {
  const html = read(file);
  const url = urlOf(file);
  const issues = [];
  const hard = [];

  if (/http-equiv="refresh"/i.test(html) && !/<h1[\s>]/i.test(html)) {
    return { url, redirect: true, issues, hard, facts: {}, score: null };
  }

  const text = stripTags(html);
  const rawTitle = (html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? '').trim();
  const rawDesc =
    html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1] ??
    html.match(/<meta\s+content="([^"]*)"\s+name="description"/i)?.[1] ??
    '';
  // HTML 实体需解码后再量长度（&amp; 渲染后为 &）
  const decodeEntities = (s) =>
    s
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&nbsp;/g, ' ');
  const title = decodeEntities(rawTitle);
  const desc = decodeEntities(rawDesc);
  const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i)?.[1] ?? '';
  const ogImage = html.match(/<meta\s+property="og:image"\s+content="([^"]*)"/i)?.[1] ?? '';
  const noindex = /<meta\s+name="robots"\s+content="[^"]*noindex/i.test(html);
  const h1Count = (html.match(/<h1[\s>]/gi) ?? []).length;
  const { types, valid } = parseJsonLd(html);
  const rfqLinks = (html.match(/href="\/rfq\//g) ?? []).length;
  const words = text ? text.split(/\s+/).length : 0;

  const facts = {};
  for (const [k, re] of Object.entries(FACTS)) facts[k] = re.test(text);

  const role = roleOf(url);
  const rule = ROLE_RULES[role];

  /* 非索引页（404 / thank-you）：不参与六维评分，只校验 noindex 与 sitemap 一致性 */
  if (noindex) {
    const inSitemap = sitemapPaths.has(url);
    if (inSitemap) {
      issues.push('noindex 页面却出现在 sitemap');
      hard.push('索引资格');
    }
    const isThankYou = url === '/thank-you/';
    if (isThankYou && !/href="\/rfq\/|href="\/capabilities\/|href="\/parts\//.test(html)) {
      issues.push('无二次引导出口');
    }
    if (url === '/404.html' && !/href="\/rfq\/|href="\/capabilities\/|href="\/parts\//.test(html)) {
      issues.push('404 页无有效出口');
    }
    return {
      url,
      redirect: false,
      nonIndex: true,
      role,
      title,
      titleLen: title.length,
      descLen: desc.length,
      canonical,
      noindex,
      inSitemap,
      issues,
      hardFailures: [...new Set(hard)],
      score: null,
    };
  }

  /* ① 索引资格 20（硬门槛） */
  const canonicalOk = canonical === SITE + url;
  if (!canonical) {
    issues.push('缺 canonical');
    hard.push('索引资格');
  } else if (!canonicalOk) {
    issues.push(`canonical 未自指：${canonical}`);
    hard.push('索引资格');
  }
  const inSitemap = sitemapPaths.has(url);
  if (!inSitemap) issues.push('未列入 sitemap');
  if (!title) issues.push('缺 title');
  if (!desc) issues.push('缺 meta description');

  const s1 =
    (canonicalOk ? 8 : 0) + (inSitemap ? 6 : 0) + (title ? 3 : 0) + (desc ? 3 : 0);

  /* ② 查询相关性 20 */
  const tLen = title.length;
  const dLen = desc.length;
  const titlePts = tLen === 0 ? 0 : tLen <= TITLE_MAX ? 5 : tLen <= TITLE_OK_MAX ? 3 : 0;
  const descPts = dLen === 0 ? 0 : dLen <= DESC_MAX ? 5 : dLen <= DESC_OK_MAX ? 3 : 0;
  if (tLen > TITLE_OK_MAX) issues.push(`title ${tLen} 字符，超出 ${TITLE_MAX}`);
  if (dLen > DESC_OK_MAX) issues.push(`description ${dLen} 字符，超出 ${DESC_MAX}`);

  const kwList = targetWords(url);
  const titleTokens = title.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
  const kwOk =
    kwList.length === 0 || kwList.every((w) => titleTokens.some((t) => t.startsWith(w.slice(0, 4))));
  if (!kwOk) issues.push(`title 未覆盖目标词「${kwList.join(' / ')}」`);
  const h1Ok = h1Count === 1;
  if (!h1Ok) issues.push(`H1 数量 = ${h1Count}（应为 1）`);

  const s2 = titlePts + descPts + (kwOk ? 5 : 0) + (h1Ok ? 5 : 0);

  /* ③ 事实与证据 20（硬门槛） */
  const forbidden = findForbidden(text);
  for (const msg of forbidden.hard) issues.push(msg);
  for (const msg of forbidden.soft) issues.push(msg);
  if (forbidden.hard.length) hard.push('事实与证据');
  const missingFacts = rule.required.filter((k) => !facts[k]);
  for (const k of missingFacts) issues.push(`缺${FACT_LABEL[k]}事实`);
  if (missingFacts.length) hard.push('事实与证据');

  const s3 =
    (forbidden.hard.length === 0 ? 8 : 0) +
    (rule.required.length ? (rule.required.length - missingFacts.length) * (12 / rule.required.length) : 12);

  /* ④ 信息完整性 15 */
  if (rfqLinks === 0) issues.push('无 RFQ 入口');
  if (words < rule.minWords) issues.push(`正文 ${words} 词（阈值 ${rule.minWords}）`);
  if (!/href="\/quality\/"/.test(html)) issues.push('未链接 /quality/');

  const s4 =
    (rfqLinks > 0 ? 5 : 0) +
    (words >= rule.minWords ? 5 : 0) +
    (/href="\/quality\/"/.test(html) ? 5 : 0);

  /* ⑤ 来源可信度 15 */
  if (valid === 0) issues.push('无有效 JSON-LD');
  const hasBreadcrumb = types.includes('BreadcrumbList');
  if (!hasBreadcrumb) issues.push('JSON-LD 缺 BreadcrumbList');
  const ogOk = ogImage
    ? fs.existsSync(path.join(DIST, new URL(ogImage).pathname.replace(/^\//, '')))
    : false;
  if (!ogOk) issues.push('og:image 文件不存在');
  if (!facts.supplierNetwork) issues.push('未表述 qualified supplier network');

  const s5 =
    (valid > 0 ? 5 : 0) + (hasBreadcrumb ? 4 : 0) + (ogOk ? 3 : 0) + (facts.supplierNetwork ? 3 : 0);

  /* ⑥ 商业转化 10 */
  const hasCta = /Upload Drawing|Request Quote|Request a Quote/i.test(text);
  if (!hasCta) issues.push('缺 RFQ 行动号召文案');
  if (rfqLinks === 0) issues.push('缺 RFQ 链接');
  if (!/href="\/capabilities\/"/.test(html)) issues.push('未链接 /capabilities/');

  const s6 = (rfqLinks > 0 ? 4 : 0) + (hasCta ? 3 : 0) + (/href="\/capabilities\/"/.test(html) ? 3 : 0);

  const score = Math.round((s1 + s2 + s3 + s4 + s5 + s6) * 10) / 10;

  return {
    url,
    redirect: false,
    nonIndex: false,
    role,
    title,
    titleLen: tLen,
    descLen: dLen,
    canonical,
    canonicalOk,
    inSitemap,
    noindex,
    h1Count,
    jsonLdTypes: types,
    rfqLinks,
    words,
    ogImage,
    ogImageExists: ogOk,
    facts,
    forbiddenHits: forbidden.hard,
    forbiddenSoft: forbidden.soft,
    missingFacts: missingFacts.map((k) => FACT_LABEL[k]),
    hardFailures: [...new Set(hard)],
    scores: { index: s1, relevance: s2, facts: s3, completeness: s4, trust: s5, conversion: s6 },
    score,
    issues,
  };
}
/* ---------- 主流程 ---------- */

if (!fs.existsSync(DIST)) {
  console.error('dist/ not found. Run npm run build first.');
  process.exit(1);
}

const sitemapPaths = collectSitemapPaths();
const pages = walk(DIST).map((f) => checkPage(f, sitemapPaths));
const redirects = pages.filter((p) => p.redirect);
const nonIndex = pages.filter((p) => p.nonIndex);
const real = pages.filter((p) => !p.redirect && !p.nonIndex);

const hardFail = real.filter((p) => p.hardFailures.length > 0);
const DIMS = ['index', 'relevance', 'facts', 'completeness', 'trust', 'conversion'];
const DIM_LABEL = {
  index: '1-indexability',
  relevance: '2-query-relevance',
  facts: '3-facts-evidence',
  completeness: '4-completeness',
  trust: '5-source-trust',
  conversion: '6-conversion',
};
const DIM_MAX = { index: 20, relevance: 20, facts: 20, completeness: 15, trust: 15, conversion: 10 };

const avg = {};
for (const d of DIMS) {
  avg[d] = real.length
    ? Math.round((real.reduce((s, p) => s + p.scores[d], 0) / real.length) * 10) / 10
    : 0;
}

const summary = {
  generatedAt: new Date().toISOString(),
  site: SITE,
  pagesChecked: real.length,
  nonIndexPages: nonIndex.map((p) => p.url),
  redirectStubs: redirects.length,
  hardGateFailing: hardFail.length,
  dimensionAverages: avg,
  pages: real,
};

fs.writeFileSync(OUT_JSON, JSON.stringify(summary, null, 2), 'utf8');

const lines = [];
lines.push('# AI 搜索选源资格检查报告');
lines.push('');
lines.push(`- 生成时间：${summary.generatedAt}`);
lines.push(`- 检查范围：dist/ 共 ${real.length} 个可索引页面`);
lines.push(`- 非索引页（noindex，不计分）：${nonIndex.map((p) => p.url).join('、') || '无'}`);
lines.push(`- 跳转占位页：${redirects.length} 个`);
lines.push('- 依据：website_docs/工业 B2B 商业页面 AI 搜索选源资格检查标准.md');
lines.push('');
lines.push('## 总览');
lines.push('');
lines.push(`- 硬门槛不通过页面：**${hardFail.length}**（索引资格 / 事实与证据 任一不过即算不通过）`);
lines.push('');
lines.push('| 维度 | 满分 | 全站均分 |');
lines.push('|---|---:|---:|');
for (const d of DIMS) lines.push(`| ${DIM_LABEL[d]} | ${DIM_MAX[d]} | ${avg[d]} |`);
lines.push('');
lines.push('## 逐页结果');
lines.push('');
lines.push('| 页面 URL | 角色 | 1 | 2 | 3 | 4 | 5 | 6 | 总分 | 硬门槛 |');
lines.push('|---|---|---:|---:|---:|---:|---:|---:|---:|---|');
for (const p of real) {
  lines.push(
    `| ${p.url} | ${p.role} | ${p.scores.index} | ${p.scores.relevance} | ${p.scores.facts} | ${p.scores.completeness} | ${p.scores.trust} | ${p.scores.conversion} | ${p.score} | ${p.hardFailures.length ? '未通过: ' + p.hardFailures.join('/') : '通过'} |`
  );
}
lines.push('');
lines.push('## 问题明细');
lines.push('');
for (const p of [...hardFail, ...real.filter((x) => !x.hardFailures.length && x.issues.length)]) {
  if (!p.issues.length) continue;
  lines.push(`### ${p.url}（${p.score} 分）`);
  lines.push('');
  for (const i of p.issues) lines.push(`- ${i}`);
  lines.push('');
}
fs.writeFileSync(OUT_MD, lines.join('\n'), 'utf8');

console.log(`checked=${real.length} hardFail=${hardFail.length}`);
for (const p of hardFail) console.log(`  ! ${p.url} ${p.hardFailures.join('/')} :: ${p.issues.join(' | ')}`);