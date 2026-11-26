# AI 搜索选源资格检查表（三页试点）

- 依据：`website_docs/工业 B2B 商业页面 AI 搜索选源资格检查标准.md` §5
- 数据来源：`website_docs/AI搜索选源资格检查报告.md` / `.json`（生成时间 2026-11-27 00:24:51，31 页，hardFail=0）
- 站点：titaniumcncmachining.com
- 口径：六维 = ①索引资格 20 / ②查询相关性 20 / ③事实与证据 20 / ④信息完整性 15 / ⑤来源可信度 15 / ⑥商业转化 10；①③为硬门槛，双通过才算合格
- 修复动作列中「待供应商确认」项对应 `AI搜索选源资格落地执行书.md` §5，本轮不执行

## 检查表

| 页面 URL | 目标查询 | 硬性门槛（通过/未通过） | 六维评分 | 问题证据 | 修复动作 | 复查结果 |
|---|---|---|---|---|---|---|
| `/capabilities/`（定制加工服务页） | 钛合金 CNC 定制加工能力 / machining capability / 五轴 CNC 加工能力范围 | **通过**（①索引资格 20/20，③事实与证据 20/20） | ①20 ②20 ③20 ④15 ⑤15 ⑥10　总分 **100** | D3「问题明细 › `/capabilities/`（100 分）」：唯一条目「出现 price 措辞（需确认不含金额）」；D3 JSON 该页 `forbiddenSoft` = ["出现 price 措辞（需确认不含金额）"]、`forbiddenHits` = []、`hardFailures` = []、`missingFacts` = []。即全文无金额，仅出现 price/报价相关措辞 | ①该条为**无金额的结构描述**（询价流程表述），非价格展示，判定**不构成红线违规**，不修改；②执行书 §5 三项能力口径冲突记入待确认（`capabilities.ts` 车削能力边界说明、`batchRange` 1–500 与 `leadTimes` 第三档 `500+ pcs` 断档、`finishingAddOn` 含 `pickling` 但 `finishing` 清单无此项）——**需供应商侧权威依据才可改，本轮不改任何能力数字** | 通过（2026-11-27）。`npm run build` 成功（33 页），`npm run audit:geo` → `checked=31 hardFail=0`；该页 canonical 自指、title 42 字符、description 150 字符、H1 唯一、JSON-LD = Service + BreadcrumbList、RFQ 入口 3 个、正文 997 词、10 项必备事实全部命中、og:image 存在 |
| `/parts/flanges-plates-interfaces/`（标准件供应页 / 零件族页） | 钛法兰 / 法兰盘 / 接口板 / titanium flanges plates interfaces | **通过**（①索引资格 20/20，③事实与证据 20/20） | ①20 ②20 ③20 ④15 ⑤15 ⑥10　总分 **100** | D3「问题明细」中该页**无条目**（`issues` = []、`missingFacts` = []、`hardFailures` = []）；D3 JSON 该页 `facts.scopeBoundary` = false —— 即正文未命中能力边界表述（`do not machine` / `outside scope` / `decline` / `refer out`）。该项**不在该角色必需要素内**，不扣分、不构成硬门槛失败 | 本轮**无待修问题**，`修复动作` = 无；`facts.scopeBoundary=false` 作为**待观察项**记录：若后续供应商确认转介边界口径（执行书 §5 第一项，车削为供应商网络协同伴随工序、主工序为车削的件转介出去），再在族页补能力边界说明并复跑检查器；**当前不改** | 通过（2026-11-27）。build 成功、`checked=31 hardFail=0`；canonical 自指、title 49 字符、description 143 字符、H1 唯一、JSON-LD = BreadcrumbList + Service、RFQ 入口 3 个、正文 1082 词、7 项角色必需要素全部命中、og:image 存在；S2–S6 修复后 title/description 已收敛至 ≤60 / ≤155，族页新增「报价时效」区块内容取自 `CAPABILITIES.responseTimes` |
| `/parts/flanges-plates-interfaces/titanium-blind-flanges/`（定制件页 / 产品页） | 钛盲法兰 / titanium blind flange 定制加工 | **通过**（①索引资格 20/20，③事实与证据 20/20） | ①20 ②20 ③20 ④15 ⑤15 ⑥10　总分 **100** | D3「问题明细」中该页**无条目**（`issues` = []、`missingFacts` = []、`hardFailures` = []）；D3 JSON 该页 `facts.scopeBoundary` = false（未命中能力边界表述），**不在该角色必需要素内**，不扣分 | 本轮**无待修问题**，`修复动作` = 无；`facts.scopeBoundary=false` 同上列为待观察项，待供应商确认转介边界口径后再决定是否补写；**当前不改** | 通过（2026-11-27）。build 成功、`checked=31 hardFail=0`；canonical 自指、title 50 字符、description 128 字符、H1 唯一、JSON-LD = BreadcrumbList、RFQ 入口 3 个、正文 1126 词、7 项角色必需要素全部命中、og:image 存在；S6 修复后 description 收敛至 128 字符、title 收敛至 50 字符，产品页新增「报价时效」区块内容取自 `CAPABILITIES.responseTimes` |

## 汇总

| 项 | 结果 |
|---|---|
| 三页硬性门槛 | 全部通过（①③ 双通过，未通过 0） |
| 三页总分 | 均 100（100 / 100 / 100） |
| 未解决且需外部依据的事项 | 3 项（执行书 §5 能力口径冲突，均记入「修复动作」列，本轮不改数字） |
| 待观察项 | 2 页 `facts.scopeBoundary=false`（族页、产品页），非必需要素、不扣分 |
| 待人工确认项 | 2 页 price 措辞复核结论：均为无金额结构描述，判定不违规 |
