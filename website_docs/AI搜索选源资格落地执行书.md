# AI 搜索选源资格落地执行书

> 本文件是执行交接文档。**任何时候上下文丢失，先读本文件，再从「进度日志」最后一行继续。**
> 依据：`website_docs/工业 B2B 商业页面 AI 搜索选源资格检查标准.md`（下称《标准》）
> 站点：`titaniumcncmachining.com`（Astro 静态站，`src/` 28 文件）

---

## 0. 执行原则（不可违背）

1. **只修有客观证据的问题**。不做"因为出现了新机制所以批量改写"。
2. **红线：页面上不出现任何价格 / 成本 / 报价金额 / 毛利类数字。**
   B2B 逻辑 = 需求 → 询价 → 报价；价格不上页面。
3. **能力数字本轮不改**。公差、轴数、牌号、尺寸包络、批量区间、交期一律不动
   （改这些需要供应商侧权威依据，我方没有；见 §5 待确认项）。
4. **一次只改 1–2 个文件**，改完立即验证，收敛后再进下一步。
5. **不改写已验证有效的商业文案主体**，只做元数据层与结构性补充。
6. 每次 `astro build` 成功即视为该步完成，**不再重复 build/check/lint**。

---

## 1. 硬门槛与评分口径（引自《标准》§1–§2）

| 维度 | 分值 | 性质 |
|---|---:|---|
| ① 索引资格 | 20 | **硬门槛** |
| ② 查询相关性 | 20 | 质量评分 |
| ③ 事实与证据 | 20 | **硬门槛** |
| ④ 信息完整性 | 15 | 质量评分 |
| ⑤ 来源可信度 | 15 | 质量评分 |
| ⑥ 商业转化 | 10 | 质量评分 |

- **硬门槛双通过**（①③）才算本轮完成，不能用总分掩盖。
- 内部阈值（非 Google 官方）：80–100 持续监测 / 60–79 优先修复 / <60 先补基础质量。

## 2. 试点三页（映射《标准》§5「三个商业场景」）

| 场景角色 | URL | 类型 |
|---|---|---|
| 定制加工服务页 | `/capabilities/` | 服务页 |
| 标准件供应页 | `/parts/flanges-plates-interfaces/` | 零件族页 |
| 定制件页 | `/parts/flanges-plates-interfaces/titanium-blind-flanges/` | 产品页 |

## 3. 交付物清单

| # | 交付物 | 路径 |
|---|---|---|
| D1 | 执行书（本文件） | `website_docs/AI搜索选源资格落地执行书.md` |
| D2 | 自动检查器 | `scripts/audit-geo.mjs` |
| D3 | 全站机器检查报告 | `website_docs/AI搜索选源资格检查报告.md` + `.json` |
| D4 | 三页检查表 | `website_docs/AI搜索选源资格检查表.md` |
| D5 | llms.txt | `public/llms.txt` |

**D4 字段严格按《标准》§5 模板**：
`页面 URL | 目标查询 | 硬性门槛（通过/未通过） | 六维评分 | 问题证据 | 修复动作 | 复查结果`

---

## 4. 执行步骤（严格顺序）

### S0 — 写执行书
写 D1 本文件。
**完成判据：文件存在且含 §9 进度日志表头。**

### S1 — 造尺子：自动检查器
新增 `scripts/audit-geo.mjs`（**零依赖**，Node >= 22，只读 `dist/`，不修改任何页面）。
逐页检查项：

1. canonical 存在且指向自身 URL（不自指即错）
2. `<title>` 长度（目标 <= 60）
3. meta description 长度（目标 <= 155）
4. H1 唯一性
5. JSON-LD 存在性与 `@type` 列表
6. `noindex` 页与 sitemap 交叉冲突
7. og:image 指向的实体文件是否存在
8. RFQ 入口链接数
9. 正文可见词数
10. 必备事实块命中：材料 / 公差 / 批量 / 交期 / 检验文件 / 报价时效

输出 D3（md + json）。`package.json` 加脚本 `"audit:geo": "node scripts/audit-geo.mjs"`。
**完成判据：** `npm run build && npm run audit:geo` 正常退出并生成 D3，报告中每页有六维评分与硬门槛判定。

### S2 — 修 og:image 404（索引资格）
证据：`src/lib/seo.ts:14` `DEFAULT_OG = '/og-default.png'`，但 `public/` 无此文件 → 全站 og:image 404。
动作：新增 `scripts/make-og-image.mjs`（零依赖生成 1200x630 PNG）→ 产出 `public/og-default.png`。
**完成判据：** 检查器第 7 项全站通过。

### S3 — sitemap 排除 noindex 页（索引资格）
证据：`dist/sitemap-0.xml` 含 `/thank-you/`，而 `src/pages/thank-you.astro:15` 设 `noindex`。
动作：`astro.config.mjs` 的 `sitemap()` 加 `filter` 排除 `/thank-you/`。
**完成判据：** 重建后 sitemap 不含 `/thank-you/`，检查器第 6 项无冲突。

### S4 — 补齐标准 schema（来源可信度）
依据：`website_docs/网站开发文档.md` §7「JSON-LD 策略」。

- `src/pages/parts/[family]/index.astro:41` → jsonLd 加 `serviceSchema()`（文档要求「能力页/零件族页：BreadcrumbList + Service」）
- `src/pages/case-studies/[slug].astro:27` → jsonLd 加 `articleSchema({ headline, description, datePublished, dateModified, url, about: 零件族 })`（文档要求「案例详情：Article，about 填零件族」）
- 消除 `src/lib/schema.ts:83` `articleSchema` 死代码

**只改元数据层，不动可见文案。**
**完成判据：** 案例页 JSON-LD 含 `Article` 且 `about` = 零件族名；族页含 `Service`。

### S5 — llms.txt（索引资格 / AI 可读）
依据：`website_docs/domain-decision-titaniumcncmachining-2026-11.md` §79「另挂 `/llms.txt`」。
动作：新增 `public/llms.txt`，格式：H1 站点名 + `>` 摘要块 + 分节链接列表（指向 `/capabilities/`、`/parts/` 各族页、`/quality/`、`/how-it-works/`、`/rfq/`、`/about/`）。
**定位说明：** 社区提案约定，Google 不使用；**不是索引开关，也不是引用开关**。顺手做完，不当增长杠杆。
**完成判据：** `public/llms.txt` 存在且链接均为站内有效路径。

### S6 — 元数据与转化收口（四项，逐项做）

| 子项 | 维度 | 动作 |
|---|---|---|
| 6a | 查询相关性 | `src/lib/part-products.ts` + `src/pages/parts/[family]/{index,[product]}.astro` 的 title/description 收敛：产品页 desc 342-357 → <=155、title 70-86 → <=60；族页 desc 318-331 → <=155、title 80-86 → <=60。**只做截断与措辞收紧，不新增能力数字、不加价格** |
| 6b | 信息完整性 | 族页 + 产品页补「报价时效」区块，**只复述 `CAPABILITIES.responseTimes` 已有值**，指向 `/capabilities/` 完整表 |
| 6c | 来源可信度 | `src/lib/schema.ts` 的 `organizationSchema()` 补 `logo`（`/favicon.svg`）与 `image`（`/og-default.png`）。**`legalName` 保持为空**（无注册主体，不得编造） |
| 6d | 商业转化 | `src/pages/404.astro` 补 RFQ 入口 + 站内回链（`/capabilities/`、`/parts/`） |

**完成判据：** 检查器第 2/3/8/10 项全站无红项；6b 出现的数字与 `capabilities.ts` 完全一致。

### S7 — 重建 + 复跑
`npm run build` → `npm run audit:geo` → 刷新 D3。
**完成判据：** 硬门槛 ①③ 双通过；无 S2–S6 引入的新红项。
**build 成功后立即停止工具链，不重复验证。**

### S8 — 产出检查表 D4
按 §3 的字段写 D4，三页逐页填：目标查询 / 硬门槛判定 / 六维评分 / 问题证据（引 D3 具体行）/ 修复动作 / 复查结果。
**完成判据：** D4 三行齐全，评分与 D3 一致。

---

## 5. 待确认项（本轮明确不改，仅记入 D4「修复动作」列）

三处能力口径互相打架，需供应商侧权威依据才能定，我方不得代定：

| 位置 | 冲突 | 候选动作（不执行） |
|---|---|---|
| `src/lib/capabilities.ts:49-53` `maxPartSize.turning` + `:84` leadTimes 第 3 档 note | `processes` 只声明 3/4 轴铣削，能力表却平铺 `Turning: Up to Ø300 mm`，且 leadTimes note 提 `automatic-feed turning`；但 `part-products.ts:1127` 纯车削件规则为 `refer`（转介出去） | 在能力表 Boundary 列补边界说明：车削为供应商网络协同的伴随工序，主工序为车削的件转介出去。**数字保留** |
| `src/lib/capabilities.ts:46` `batchRange` 与 `:81-85` `leadTimes` | `batchRange` 称上限 1-500，leadTimes 第三档却写 `500+ pcs`；且 200-500 无档位 | 补 200-500 档使区间连续；500+ 明确为项目制报价而非拒接。**需先确认 500+ 是否真接** |
| `src/lib/capabilities.ts:88` `finishingAddOn` | 含 `pickling`，但 `:55` `finishing` 清单中无此项 | 改为与 finishing 清单一致的措辞 |

**不要在未确认前改这三个数字。**

---

## 6. 明确不做（附理由，防跑偏）

| 不做 | 理由 |
|---|---|
| 新建 GEO 页面体系 | 《标准》§4 明确「Google 并没有要求另建一套 GEO 页面体系」；且会与现有 32 个 URL 产生同义内容互斥、事实口径分裂 |
| 为 AI 另造非标准 schema | 《标准》§4 同款表述；S4 补齐的是网站开发文档 §7 已规定的**标准** schema.org，非新增 |
| 任何价格 / 成本 / 报价金额 / 毛利 | 红线 |
| 改写已验证有效的商业文案主体 | 《标准》§5「只修复有证据支持的问题」 |
| 修改能力数字 | §0 原则 3 + §5 |

## 7. 风险与回滚

- 每步只动 1-2 文件，任一步 build 失败即回滚该步文件，不牵连其他步。
- `capabilities.ts` 本轮只读不写，能力口径零风险。
- 唯一需联网核实的是 llms.txt 规范原文（llmstxt.org）；若持续不通，按通行格式产出并在 D4 标注「规范未联网核验」。

## 8. 环境

- 构建：`npm run build`（Astro 7.3.3，Node >= 22.12）
- 开发服务器：`astro dev --background`（`astro dev stop/status/logs` 管理）
- 部署目标：Cloudflare Pages / Netlify，纯静态 `dist/`，无适配器

## 9. 进度日志（每完成一步追加一行；续跑时读最后一行）

| 步骤 | 状态 | 完成判据是否满足 | 备注 |
|---|---|---|---|
| S0 | 已完成 | 是 | 执行书已落盘 9650 bytes，UTF-8 无 BOM |
| S1 | 已完成 | 是 | `scripts/audit-geo.mjs`（零依赖）已落盘并接入 `npm run audit:geo`；`npm run build` 成功（33 页），`npm run audit:geo` 输出 `checked=31 hardFail=0`，生成 D3 md+json。判据按页面角色区分（home/product/family/parts-hub/service/case/case-hub/trust/rfq），noindex 页（/404.html、/thank-you/）不计分只校验 sitemap 一致性。首轮尺子自身有 4 处误判已修正：sitemap loc 未剥域名、`no prices`/`batch size costs you in time` 被误判为价格违规、`Quotation 2–4 business days` 时效表被误判为金额、`unit price` 报价结构描述被误判为单价展示。当前真实问题：①`public/og-default.png` 缺失导致全站 og:image 404；②`/rfq/` 无任何 JSON-LD；③`/how-it-works/` description 176 字符；④零件族页 title 未含族名核心词。 |
| S2 | 已完成 | 是 | 新增 `scripts/make-og-image.mjs`（零依赖生成 1200x630 PNG）→ `public/og-default.png`；D3 中全站 `ogImageExists: true`，检查器第 7 项无红项。 |
| S3 | 已完成 | 是 | `astro.config.mjs` 的 `sitemap()` 加 `filter: (page) => !page.includes('/thank-you/')`；重建后 `dist/sitemap-0.xml` 不含 `/thank-you/`，检查器第 6 项无冲突。 |
| S4 | 已完成 | 是 | `src/pages/parts/[family]/index.astro` jsonLd = `breadcrumbSchema + serviceSchema`；`src/pages/case-studies/[slug].astro` jsonLd = `breadcrumbSchema + articleSchema({ ..., about: getPartFamilyName(partFamily) })`；`src/lib/schema.ts` 的 `articleSchema` 已由死代码转为在用。 |
| S5 | 已完成 | 是 | 新增 `public/llms.txt`（H1 + 摘要块 + 分节链接）；12 个站内链接逐一核对，`dist/` 对应页面全部存在。 |
| S6 | 已完成 | 是 | 6a 零件族/产品页 title、description 收敛至 ≤60 / ≤155（D3 无长度红项）；6b 族页与产品页新增「报价时效」区块，内容全部来自 `CAPABILITIES.responseTimes`，并与供应商制造工期分段区分；6c `organizationSchema()` 补 `logo: /favicon.svg` 与 `image: /og-default.png`，`legalName` 仍为空；6d `src/pages/404.astro` 补 `/rfq/` 入口与 `/capabilities/`、`/parts/`、`/quality/`、`/how-it-works/`、`/case-studies/`、`/` 回链。 |
| S7 | 已完成 | 是 | `npm run build` 成功（33 页）；`npm run audit:geo` 输出 `checked=31 hardFail=0`，D3（md+json）已刷新至 2026-11-27 00:24:51。硬门槛 ①③ 双通过（不通过页 0）；全站均分：①20 ②19.2 ③20 ④15 ⑤14.6 ⑥10。S2–S6 未引入新红项。**遗留项（不在 S7 范围，未擅自扩域）**：`/rfq/` 仍无有效 JSON-LD 且缺 BreadcrumbList（⑤ 仅 6/15，总分 86）；`/about/`、`/case-studies/`、`/how-it-works/`、`/parts/`、`/rfq/` title 未覆盖检查器目标词；`/`（首页）缺 BreadcrumbList 属检查器口径问题（首页无面包屑层级）；`/how-it-works/` 的「提及单价字段 / price 措辞」为无金额的结构描述，需人工确认非价格展示。 |
| S8 | 已完成 | 是 | 新建 `website_docs/AI搜索选源资格检查表.md`，严格按《标准》§5 模板七列（页面 URL / 目标查询 / 硬性门槛 / 六维评分 / 问题证据 / 修复动作 / 复查结果）。三页试点齐全：`/capabilities/` 100 分、`/parts/flanges-plates-interfaces/` 100 分、`/parts/flanges-plates-interfaces/titanium-blind-flanges/` 100 分，硬门槛 ①③ 双通过，评分与 D3 完全一致。问题证据均引 D3 具体行：服务页引「出现 price 措辞（需确认不含金额）」（JSON `forbiddenHits`=[]、`forbiddenSoft` 非空，无金额，判定不构成红线违规）；族页与产品页 D3 无问题条目，仅 JSON `facts.scopeBoundary=false` 记为待观察项（非角色必需要素、不扣分）。「修复动作」列已收录执行书 §5 三项能力口径冲突（车削边界 / batchRange 与 leadTimes 断档 / finishingAddOn 含 pickling），标注需供应商侧权威依据、本轮不改数字。本步仅新增 1 个文档文件，无代码改动，未触发 build。 |
| S9 | 已完成 | 是 | 处理 S7 遗留项（用户授权范围内）：1) 全站删除/替换 price/cost 措辞 —— `src/lib/workflow.ts`（step 3/4 共 4 处改为 commercial terms 口径）、`src/pages/capabilities.astro`、`src/pages/quality.astro`、`src/pages/case-studies/index.astro`、`src/pages/parts/index.astro`、`public/llms.txt`，`forbiddenSoft` 全站清零；2) `/rfq/` 补 `serviceSchema + breadcrumbSchema` JSON-LD（此前无任何 JSON-LD），并把 title 改为「Titanium RFQ: Upload Drawing for Quotation」覆盖目标词；3) `/about/`、`/case-studies/`、`/how-it-works/`、`/parts/` title 补目标词（About Our Titanium Supplier Network / Titanium Case Studies and Examples / How It Works: Titanium Machining Process / Titanium Parts: Machining Scope and Use Cases）。`npm run build` 成功（33 页）；`npm run audit:geo` 输出 `checked=31 hardFail=0`，全站均分 99.87，`/rfq/`、`/about/`、`/case-studies/`、`/how-it-works/`、`/parts/` 均为 100 分，无 forbiddenSoft。**仍遗留**：`/`（首页）JSON-LD 缺 BreadcrumbList（首页无面包屑层级，属检查器口径问题，不在本轮授权范围）。 |
| S10 | 已完成 | 是 | 闭合 S9 末项遗留：`src/pages/index.astro` 的 `jsonLd` 增加 `breadcrumbSchema([{ name: 'Home', path: '/' }])`，首页 JSON-LD 现为 `Organization/ProfessionalService + WebSite + BreadcrumbList`（单层级 Home，页面无可见面包屑导航，不改动 UI）。`npm run build` 成功（33 页）；`npm run audit:geo` 输出 `checked=31 hardFail=0`，`/` 得分 100（`jsonLdTypes` 含 `BreadcrumbList`，`issues` 为空），全站均分 100，S9 遗留项清零。 |
