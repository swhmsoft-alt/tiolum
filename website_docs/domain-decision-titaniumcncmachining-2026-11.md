# 域名选型决策（最终版）：titaniumcncmachining.com

> **主域名：`titaniumcncmachining.com`**（2026-11-24 定稿）
> `titaniumcncparts.com`、`titanium-cnc.com` → 301 到主域，不建内容
> `titolum.com` → 建议注册，**品牌 wordmark 用 "Titolum"**，做品牌域名承接并 301 到主域
> ⚠️ 本文件取代 2026-11-24 早前那份"以 titolum.com 为主域"的备忘（前提不同：那份假设三个已注册域名不是你的）。

---

## 1. 三个候选的横向评估

| 维度 | titaniumcncmachining.com ✅ | titaniumcncparts.com | titanium-cnc.com |
|---|---|---|---|
| 形态 | 无连字符无数字，21 字符 | 无连字符无数字，17 字符 | **带连字符**，12 字符 |
| 根域与全站主题的关系 | **伞形词**：牌号/公差/检验/表面处理/行业应用全部属"titanium CNC machining" | "parts" 只是交付物形态，不覆盖牌号/公差/DFM/检验这些知识型页面 | 同左 |
| 进入的竞争池 | **服务型加工商池**（钛图纸定制、报价型） | **目录/电商型出口商池**（SKU 广度、现货目录、价格战） | 同左 + 连字符 |
| 该池的现有赢家 | titaniumcnc.com #1、cnctitanium.com、4umachining、ms-machining、bozemetal、hlhcnc、xtjcnc、titaniumseller | heletitanium、titaniumstudy、aulistermetal、xstarparts、cnctal、alloys-metal | — |
| 手输承接 | 手输 titaniumcncmachining → 命中你 | 手输 titaniumcncparts → 命中你 | 手输 **titaniumcnc（少一个词）→ 竞品** |
| 采购观感 | 读作"钛 CNC 加工服务" | 读作"钛零件目录站"，偏电商 | 带连字符在供应商名录里显得不专业 |

### 淘汰 titanium-cnc.com（硬淘汰）
带连字符域名在 B2B 长尾场景是**流量漏斗**：欧洲工程师手输几乎必然打成 `titaniumcnc.com`——而那是竞品的域。带连字符 + 关键词根 + 与竞品近形三重叠加，且在航空航天/医疗供应商审核里增加"信息站/贸易商"红旗。

### 淘汰 titaniumcncparts.com（选错了对手）
关键不是"哪个词流量大"，是**跟谁比选**。
- `titanium cnc parts supplier custom machined` 前 10 实测：**无任何 EMD**（aulistermetal ×2、titaniumstudy ×2、tiyesheng、glorymachining、customparts-mfg、heletitanium、cxmet-tech ×2）→ 全是**目录/产品型出口商**，赢法是 SKU 广度与目录 SEO。
- `titanium cnc machining service supplier` 前 10 实测：titaniumcnc.com #1、titaniumseller.com #2、xtjcnc.com #4、hlhcnc.com #6——**EMD 密集**，赢家全是"图纸驱动、按件报价"的服务型加工商。

你的对标对象是 titaniumcnc.com / cnctitanium.com 这一类**图纸驱动、工程师评审、按件报价**的站点。选 `titaniumcncparts` 等于把自己扔进现货目录电商池去和目录站拼价格，那是另一个价格战市场，你没有差异优势（你不做现货 SKU）。选 `titaniumcncmachining` = 直接进同一个比选池。

### 选 titaniumcncmachining.com（三条硬理由）
1. **伞形词覆盖全站主题**：你的 100+ 页内容（牌号对比、公差指南、检验、表面处理、行业应用）全部是 "titanium CNC machining" 的下位概念。根域信号与页面内容同向 → 子查询 fan-out（`titanium machining tolerances` / `ti-6al-4v machining` / `titanium flange cnc`）在一个伞下做，一致性最高。用 "parts" 做根，则有一半知识型页面与根域信号不同向。
2. **进对池子**：买家在"供应商比选"场景里用的就是 machining 语汇；且该池子里 EMD 密集本身就证明**EMD + 深度内容在这个细分能赢**——cnctitanium.com 是个人小厂，靠 `cnctitanium.com` 这个根域在 "titanium cnc machining" 上打到 #1，tiokncnc.com 的 /processes 页打到 #2。
3. **语义即服务**：买家要的是"按我的图加工钛件"，不是"买一个目录零件"。`titaniumcncmachining.com` 读作服务，`titaniumcncparts.com` 读作商城。

---

## 2. 必须同步做的品牌层动作（否则你就是竞品的克隆）

竞品的域名字面是 `titaniumcnc.com`，品牌名就叫 "Titanium CNC"。你用 `titaniumcncmachining.com`，域名词干与竞品**同源**，品牌若也叫 "Titanium CNC" → 对买家和算法都是同一家的两个域。
**对策：品牌 wordmark 固定为 "Titolum"，域名只承担关键词层。**

| 层 | 承担者 | 动作 |
|---|---|---|
| 品牌 / 实体（门 B 引用对象） | Titolum | logo、首页 H1「Titolum — Custom Titanium CNC Machining」、schema Organization `name: Titolum`、legalName 写实际中国主体、/about/ 首屏披露主体与工厂网络 |
| 关键词（门 A 召回） | titaniumcncmachining.com + URL 路径 | 路径承接 `titanium-cnc-machining`、`ti-6al-4v`、`titanium-flanges`、行业路径；首段 20 词内出现词项 |
| 防御/手输承接 | titolum.com、titaniumcncparts.com、titanium-cnc.com | 全部 301 → 主域，单 canonical |

`[B]` 竞品品牌名与页面结构：直接抓取 titaniumcnc.com 首页 / about / robots.txt / sitemap 得出（© 2026 Titanium CNC，sitemap 131 URL，最后更新 2026-11-21）。

---

## 3. 其余域名的处置

| 域名 | 处置 | 理由 |
|---|---|---|
| `titaniumcncparts.com` | **301** → titaniumcncmachining.com | 承接手输、防抢注；不建内容（避免近重复站被降权 + 实体分散） |
| `titanium-cnc.com` | **301** → titaniumcncmachining.com | 同上；连字符版流量本来就要流失，至少接住"titanium-cnc"这批手输 |
| `titolum.com` | **注册**（仍未被注册，RDAP 404）→ 301 到主域，或作为品牌 mini 站 | 品牌词承接 + 商标实体锚。若你担心"品牌在关键词域上不牢"，可反向用 titolum.com 承载品牌页并链到主域——但**只能有一个 canonical**，不能两套并跑 |

反向方案（titolum.com 主域 + 三个关键词域全 301）只在"品牌优先、不打关键词正面战"时成立。你既然要在这三个里选，说明打法是关键词+服务比选——那就一条路走到底，别双轨。

---

## 4. URL 架构（关键词下沉，主域只做伞）

```
titaniumcncmachining.com/                     ← 唯一 canonical
/capabilities/titanium-cnc-machining/
/capabilities/3-axis-4-axis-milling/
/materials/ti-6al-4v/   /materials/ti-gr2/   /materials/ti-gr5/   /materials/ti-gr23/
/parts/titanium-flanges/   /parts/titanium-brackets/   /parts/titanium-housings/
/parts/titanium-shafts-bushings/
/industries/aerospace/   /industries/medical-device/
/quality/  /rfq/  /case-studies/  /blog/  /about/  /contact/
```
- 根域不重复堆词：路径已含 `titanium-cnc-machining`，首页 H1 承担一次即可，避免关键词堆砌。
- 事实表挂 `/about/`、`/quality/`、`/materials/*/`：牌号 / 公差 / 表面处理膜厚 µm / Ra / 检验项 → AI 概览可直接抽取引用。
- robots.txt 显式 Allow：Googlebot / Bingbot / GPTBot / ClaudeBot / PerplexityBot / Google-Extended；另挂 `/llms.txt`。
- NAP 跨源一致：site / LinkedIn / Europages / WLW / 航天名录 / 地图页，名称统一用 "Titolum" + 主域。

---

## 5. 执行清单

### 立刻（域名注册局状态随时会变）
- [ ] `titolum.com` 注册（1–2 年期；`.net`/`.org`/`.io` 实测也可注册，作防御）
- [ ] 三个关键词域统一配置：301 → titaniumcncmachining.com，保持 single canonical
- [ ] 部署上线前把 www / 非 www / http / https 统一到 https + 主域

### 本周
- [ ] 提交 EUIPO 商标 **TITOLUM**：第 **40** 类（材料处理/金属加工服务，核心）、**6**（金属制品）、**42**（工程/工业设计服务）、**35**（零售批发），交付机器零件加 **7**
- [ ] 非 EEA 申请人**必须**指定欧盟境内执业代表（Reg. 2017/1001 第 120 条）；5 年内无真实使用可被撤三 → 申请要与真实报价/交付记录绑定
- [ ] 官费：首类 €850，第 2 类 +€50，第 3 类起每类 +€150

### 内容侧（决定你能不能进池子）
- [ ] MVP 顺序：首页 → /capabilities/titanium-cnc-machining/ → 3 个零件页 → /quality/ → /rfq/ → /about/
- [ ] 差异化抓手（竞品抄不走的）：双源报价可核验、图纸 DFM 评审时效、检验记录可查、批次追溯、中国主体+出口管制立场明示（欧洲航天的真壁垒是供应商准入/责任划分/保险，钛不在 CBAM 范围）

---

## 6. 风险与对策

| 风险 | 等级 | 对策 |
|---|---|---|
| 与 titaniumcnc.com 域名词干同源 + 易被当同一家 | 高 | 品牌 wordmark 固定 "Titolum"；schema Organization name/legalName 分离；NAP 一致；FAQ 明写"Titolum 与 Titanium CNC 无关联"（如被混淆投诉再上） |
| 头部词 SERP 被 4+ EMD 占位（titaniumcnc #1、titaniumseller #2、xtjcnc #4、hlhcnc #6） | 中高 | 不抢 #1：先用长尾（`ti-6al-4v machining`、`titanium flange cnc supplier`、`anodized titanium brackets`）开门，再收伞词 |
| "titanium cnc parts" 这类目录型查询你天然吃亏 | 中 | 不进目录池；对目录型买家只做"按图定制、图纸评审、检验报告"的差异化承接 |
| 品牌名 Titolum 与 Titomic Limited（ASX: TTT，美国 Huntsville 冷喷涂增材，同批航空航天/国防客户）音近同类 | 中 | 商标近似检索（本环境 TMview 被 WAF 拦截，未做）需你补；建议正式品牌写法 "Titolum Titanium" 拉开字面距离 |
| 手输 titaniumcnc.com 直接到竞品 | 中 | 靠线下物料（名片、报价单、邮件签名、B2B 名录）反复暴露 titaniumcncmachining.com 与 Titolum 双要素 |

---

## 7. 数据可信度表

| 数据 | 等级 | 来源 |
|---|---|---|
| 三域名注册日/注册商/NS、titolum.com 未注册、titolum 各后缀可注册 | [B] | Verisign RDAP 及各注册局 RDAP，2026-11-24 当次应答 |
| titaniumcnc.com 竞品：品牌名、sitemap 131 URL、/processes /applications /blog /rfq /for-suppliers /for-vendors 结构、报价与 24 小时机制 | [B] | 直接抓取 robots.txt / sitemap-0.xml / 首页 / about |
| cnctitanium.com 为个人小厂、靠根域在 "titanium cnc machining" 排 #1 | [B] | 直接抓取其首页与栏目结构 + 搜索快照 |
| "titanium cnc machining service supplier" EMD 占位（#1/#2/#4/#6） | [C] | 单次搜索快照，未做多窗口稳定性验证 |
| "titanium cnc parts supplier custom machined" 前 10 无 EMD | [C] | 同上，单次快照 |
| 手输习惯（连字符域会被少打/多打字） | [C] | 行业通识 + 本次竞品域结构对比推演 |
| TITOLUM 商标官方库状态、域名历史足迹 | [待核] | TMview / USPTO / CNIPA / archive.org 本环境不可达 |
| EUIPO 官费与代理人要求、.eu/.de 规则 | [C] | 沿用 2026-10-29 结论，未复核当期费率 |

## 8. 待核占位符（据实填写）

- 品牌正式写法：____________（建议 Titolum；法律主体另设 ____________）
- 欧盟执业代表：____________
- 商标类别组合（40/6/42/35/7）：____________
- 三域名的 301 目标与上线日期：____________
- 首批目标长尾词（各配 1 个落地页）：____________
