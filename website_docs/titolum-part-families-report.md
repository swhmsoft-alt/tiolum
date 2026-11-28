# Titolum Grade 5 钛合金铣削件零件族与选品调研

**副标题：标准接口引流、非标图纸成交、工艺闸门控制风险**  
研究日期：2026-11-26 至 2026-11-27  
适用边界：Ti-6Al-4V Grade 5；3/4 轴 CNC 铣削；常规公差 ±0.05 mm；按单加工，而非现货分销。

## 执行摘要

本项目不宜在“按标准分类”与“按行业分类”之间二选一。更适合 Titolum 的架构是：**以五类零件族组织产品，以标准尺寸/接口和非标几何描述交付方式，以行业及采购动机建设落地页。**这样既能让工程师按 ISO、DIN、零件名找到页面，也能让采购按机器人、摩托车、海洋设备等应用场景进入询盘。

本报告建议优先发展三组产品：

1. **有直接 Grade 5 商品证据、几何又高度匹配的安装与转接件**：自行车刹车安装片、卡钳转接件、摩托车脚踏基座、水翼轨道 T 螺母、口袋支架等。
2. **可承接标准搜索词、但必须清楚限定标准范围的产品**：ISO 9409-1 机器人接口板、ISO 5211 执行器转接板、DIN 508 T 槽螺母、DIN 6314/6315 压板。页面应写 `dimensions/interface based on`，而不是把材料、载荷或性能等级一并冒称为符合原标准。
3. **按图替换与小批试制件**：非标安装板、导向板、凸轮板、连接板等 2.5D 板/块件。这类产品适合作为通用询盘入口，但直接钛材商品证据较少，需通过真实询盘继续验证。

原设想中的三个“标准件流量入口”需要修正：**ASME B16.5 盲板法兰只能作为项目制黄灯产品；DIN 912 钻孔螺栓不应作为核心产品；标准公制精密轴套应排除。**B16.5 涵盖材料、压力—温度额定、试验等内容，并非单纯尺寸表；精密钻套通常具有硬化、磨削及紧配合要求，均不能被“按图铣削”概念覆盖。[S03][S04]

现有公开资料可以证明产品族和采购路径存在，但**不能证明哪些行业需求最旺、利润最高，也没有提供可靠搜索量或转化率**。因此，本报告的优先级是按“工艺匹配度、直接 Grade 5 证据、按单/小批适配度和质量风险”排序，而不是虚构市场规模或毛利排名。

---

## 阅读口径与产品标签

### 标准属性

- **SD｜标准尺寸定制件**：采用某标准的部分名义尺寸或尺寸系列；不自动继承原材料、硬度、压力、载荷或试验等级。
- **SI｜标准接口定制件**：采用标准安装孔系、法兰或机械接口，其他外形按图加工。
- **SI+C｜标准接口＋非标几何**：一侧或部分接口已知，其余连接、减重或工件接触形状按项目设计。
- **C｜完全按图非标件**：以客户 2D 图纸、3D 模型及技术规范为准。

> 本报告不把 Grade 5 材料替换后的产品自动称为“完全符合原 DIN/ISO/ASME 标准”。只有合同约定的标准版次、适用条款和全部验收项目均得到满足时，才可使用完整符合性表述。

### 商业与工艺优先级

- **P1｜首批上线**：几何与现有能力匹配，并有较直接产品证据；仍需逐图审核。
- **P2｜条件上线**：可以建立落地页，但钛材需求、后处理、安全验证或局部公差存在前置条件。
- **P3｜验证/暂缓**：仅作关键词测试、项目评审或未来能力储备，不作为主动广告核心。
- **黄灯**：不是直接拒接，但必须由工艺或质量人员关闭风险后才能报价。

### 证据强度

- **E2**：有明确 Titanium Grade 5 或 6/4 titanium 产品证据。
- **E1**：有真实产品族或目录证据，但整件采用 Grade 5 的需求尚未验证。
- **P**：依据零件几何和采购逻辑形成的工程候选，尚需关键词及询盘验证。

---

## 一、顶层零件族架构：五大类兼顾搜索与按单加工

### 1.1 为什么采用混合架构

思路 A 的“Standard-compliant / Custom Engineered”符合工程采购语言，却无法独立承载行业搜索意图；而且“标准件”一词容易误导为现货，或误导为材料、性能也完全符合标准。思路 B 的行业分类有利于表达 MRO、研发和 OEM 复购场景，但若只按行业分，会把转接板、夹指、歧管和压力壳等不同工艺风险混在同一页面。

因此建议：

- **产品层按零件族分类**，确保同一页面的几何与工艺相近；
- **标准号作为产品属性**，明确是尺寸、接口还是完整符合；
- **行业与采购动机作为标签和落地页**，例如“机器人换型”“车架小批 OEM”“帆船维修替换”；
- **研发、MRO、OEM 复购作为全站通用采购路径**，不分别复制一套重复产品目录。

### 1.2 五大顶层分类

| 顶层零件族 | 建议英文类目名 | 核心产品 | 主要采购动机 | 建站任务 |
|---|---|---|---|---|
| 1. 标准接口与工装连接件 | Standard-Interface & Workholding Components | ISO 机器人/执行器接口板、DIN 压板、T 槽螺母、方斜垫圈 | OEM 设备集成、产线改造、MRO 替换 | 拦截“标准号＋titanium/custom”搜索，同时解释定制材料边界 |
| 2. 自动化与设备板／块件 | Automation & Equipment Plates, Brackets & Blocks | 夹指、传感器支架、口袋支架、安装板、低压歧管 | 新项目研发、机器人换型、设备复制 | 展示 2.5D 加工能力与按图交付，避免高精度快换本体 |
| 3. 自行车、摩托车与赛车安装件 | Bicycle, Motorcycle & Motorsport Mounts | 刹车安装片、卡钳转接件、脚踏基座、尾钩 | 新车型开发、碰撞/磨损替换、改装品牌小批复购 | 以“车型接口＋非标连接端”形成产品矩阵，并设置安全件审查 |
| 4. 海洋、水翼与 ROV 非承压件 | Marine, Hydrofoil & ROV Components | 水翼轨道螺母、链板、相机支架、ROV 角板 | 腐蚀环境升级、船艇 MRO、设备集成 | 聚焦非承压板/块件，排除耐压壳、推进器曲面和大型焊接总成 |
| 5. MRO 按图替换与研发试制件 | Build-to-Print MRO & Prototype Parts | 非标垫板、导向板、凸轮板、连接板、特殊轴/套黄灯件 | 停机维修、停产件替换、样机验证、小批复制 | 建立通用询盘入口，以图纸字段筛选，而非承诺“任何钛件都能做” |

### 1.3 采购动机如何转化为页面内容

| 采购动机 | 买家真正关心的问题 | 页面应提供的内容 | 不应采用的空泛表述 |
|---|---|---|---|
| 新项目研发 | 能否评审图纸、做单件/小批、处理设计迭代 | 文件格式、DFM 评审、材料追溯、首件检验、版本管理 | “全球领先”“任何复杂件” |
| MRO 停机维修 | 旧件能否按图替换、接口能否确认、交期与检验是否可控 | 2D/3D 要求、样品逆向边界、关键接口清单、替换件检验 | “所有零件快速替换” |
| OEM 产线复购 | 批次一致性、版本冻结、双源与交付稳定性 | 图纸版本、批次数量、检验计划、变更控制、重复订单机制 | “永久稳定供货” |

**架构结论：**标准流量与非标成交并不矛盾。真正可用的“虚实结合”是：用标准号、接口名和零件名帮助买家找到页面，再用按图加工、工程审核和明确边界完成询盘过滤。

## 二、细分产品清单：标准属性、几何特征与采购场景

以下全部为**按单加工候选**，不是建议备货的现货 SKU。表中的“适合 3/4 轴”仅指典型几何，最终仍以图纸、刀具可达性、装夹、公差和检测要求为准。

### 2.1 标准接口与工装连接件

| 具体产品（中英文） | 标准/非标属性 | 典型几何及 3/4 轴适配原因 | 采购动机 | 优先级与证据 | 必须写入页面的边界 |
|---|---|---|---|---|---|
| 机器人末端转接板；**Robot EOAT Adapter Plates** | SI+C；孔系可基于 ISO 9409-1:2004 | 圆形或异形板、螺栓孔系、沉孔、背腔；3 轴可完成轮廓和多面孔系 | 研发、MRO、OEM | **P1／E1**；ISO 范围见 [S01]，EOAT 场景见 [S09] | `mounting pattern based on ISO 9409-1`；定位销孔、止口及载荷另审，不宣称 payload 或 OEM 认证 |
| 角行程执行器安装转接板；**Part-Turn Actuator Mounting Adapter Plates** | SI+C；可选 ISO 5211 F05/F07 等接口 | 板状支架、中心开口、孔系、止口；3 轴或 4 轴分度加工多面 | 研发、MRO、OEM | **P2／E1**；[S02] | ISO 5211:2026 不覆盖中间支撑与阀侧连接；阀侧接口、驱动配合和总成扭矩须另审 |
| T 槽螺母；**T-Slot Nuts** | SD+C；槽宽/螺纹系列可参考 DIN 508、DIN 650 | T 形阶梯轮廓、平面和攻丝，非回转体，适合 3 轴 | MRO、OEM | **P2／E1**；[S05] | Grade 5 定制版不得继承热处理钢目录件的 quality 或最小试验力 |
| 直压板；**Straight Clamp Straps** | SD+C；尺寸系列可参考 DIN 6314 | 平板轮廓、长槽、台阶与斜面，典型 3 轴特征 | MRO、OEM | **P1／E1**；[S06] | 夹紧力、接触寿命及螺钉组合须按 Grade 5 与实际应用校核 |
| 叉形压板；**Forked Clamp Straps** | SD+C；尺寸系列可参考 DIN 6315 | 平板、叉口、长槽、平行面；3 轴轮廓与槽铣削 | MRO、OEM | **P1／E1**；[S06] | 不把原钢件目录的夹紧性能直接移植到钛定制件 |
| U 型钢用方斜垫圈；**Square Taper Washers for U-Sections** | SD；8% 斜度及尺寸可参考 DIN 434 | 方形轮廓、通孔、单斜面；3 轴加角度工装即可 | MRO、项目配套 | **P3／E1**；[S07] | 只作尺寸系列参考；结构连接适用性、材料与硬度不能自动继承，先验证钛材需求 |
| I 型钢用方斜垫圈；**Square Taper Washers for I-Sections** | SD；14% 斜度及尺寸可参考 DIN 435 | 同上，单斜面与通孔适合铣削 | MRO、项目配套 | **P3／E1**；[S07] | 同上；不因外形一致就宣称适用于原钢结构连接等级 |
| 定制平键；**Custom Parallel Keys** | SD+C；截面/长度可参考 DIN 6885-1 | 长条轮廓、端圆弧、倒角，可加固定孔；3 轴适合，小件装夹需评审 | MRO、OEM | **P3／E1**；[S07] | h9 等配合不属于常规 ±0.05 mm 自动承诺；不是原标准键钢供货 |
| B16.5 孔系参考盲板／盲盖；**Blind Plates with B16.5 Dimensional Patterns** | SD+C；仅项目制尺寸参考 | 简单圆板、厚度面与孔系可铣；密封面、台阶或环槽常引入车削/磨削 | MRO、项目制替换 | **P3／E1，黄灯**；[S03] | 标题不得写成 `ASME B16.5 Grade 5 Class 150/300 pressure-rated flange`；压力、温度和密封适用性须项目批准 |

**本类推荐顺序：**ISO 9409-1 转接板 → DIN 6314/6315 压板 → DIN 508 T 槽螺母 → ISO 5211 转接板。方斜垫圈和平键虽能拦截标准词，但 Grade 5 的应用理由与商业价值尚需验证；B16.5 不应成为广告主力。

### 2.2 自动化与设备板／块件

| 具体产品（中英文） | 标准/非标属性 | 典型几何及 3/4 轴适配原因 | 采购动机 | 优先级与证据 | 接单条件 |
|---|---|---|---|---|---|
| 定制机器人夹指；**Custom Robot Gripper Fingers** | SI+C；夹爪安装孔系＋非标工件夹持轮廓 | 长条块、台阶、开放槽、安装孔及可分层仿形面；普通结构适合 3 轴 | 研发、换型 MRO、OEM | **P2／E1**；SCHUNK 模式见 [S08] | 只做普通螺栓接口；不复制快换锁止、精密定心或严于能力的高重复定位结构；铝/钢为目录主流，钛需求待验证 |
| 非标 EOAT 安装板；**Custom EOAT Mounting Plates** | SI+C；机器人侧与工具侧孔系＋非标板形 | 矩形/异形板、多组孔系、长槽、沉孔和浅背腔，3 轴适配 | 研发、MRO、OEM | **P1／E1**；[S09] | 限定被动安装板；完整快换机构、精密定位销孔和密封组件另审 |
| 传感器安装支架；**Sensor Mounting Brackets** | C，或 SI+C | L 形/U 形支架、长圆调节槽、间隙孔和局部台阶；两装夹或 4 轴分度可完成 | 研发、MRO、OEM | **P2／P**；由 EOAT 与安装板产品族推导 [S09][S10] | 薄壁、高悬臂和精密传感器基准面需复核；先验证为何必须选 Grade 5 |
| 轻量化口袋支架；**Pocketed Lightweight Mounting Brackets** | C | 两面铣削、开放减重口袋、间隙孔；无需纯车削 | 研发、MRO、OEM | **P1／E2**；直接 Grade 5 样件见 [S10] | 腔深、薄底、内 R 和跨装夹位置度按图检查，是展示 3 轴能力的理想样件 |
| 非标设备连接／底座板；**Custom Equipment Connector & Base Plates** | C，或 SI+C | 中厚板、孔系、沉孔、浅台阶与开放轮廓，3 轴适配 | 研发、MRO、OEM | **P2／P**；几何依据 [S10] | 精密轴承座、严平面度、超大薄板和多件焊接总成不自动纳入 |
| 非飞行研发用设备安装板；**Non-Flight R&D Equipment Mounting Plates** | C | 开放口袋、设备孔系、局部凸台，适合 3 轴 | 研发、小批试制 | **P3／P**；由 [S10] 几何推导 | 只面向地面设备或非飞行研发；飞行关键、疲劳关键及指定航空质量要求另审 |
| 低压气动／真空歧管块；**Low-Pressure Pneumatic & Vacuum Manifold Blocks** | SI+C；螺纹端口可标准，孔路与块体非标 | 矩形块、正交浅孔、螺纹口和安装孔；3 轴多装夹或 4 轴分度可完成 | 研发、MRO、OEM | **P2／E2/E1，黄灯**；[S17] | 深小孔、不可达交叉毛刺、精密阀腔、严平面度、压力/泄漏/清洁度要求必须专项评审 |

**本类商业判断：**几何匹配度高，但钛材支付意愿弱于自行车、摩托车和水翼等已有直接 Grade 5 商品的领域。应以“腐蚀、特殊减重或客户指定材料”的真实项目为切入点，而不是宣称钛 EOAT 已成为主流。

### 2.3 自行车、摩托车与赛车安装件

| 具体产品（中英文） | 标准/非标属性 | 典型几何及 3/4 轴适配原因 | 采购动机 | 优先级与证据 | 接单条件 |
|---|---|---|---|---|---|
| ISO 斜切刹车安装片；**ISO Mitered Brake Tabs** | SI+C；ISO 刹车接口＋非标角度/车架端 | 平板、双孔、斜切端；3 轴或角度工装/4 轴分度 | 新车架研发、维修、OEM | **P1／E2**；[S11] | 校验孔距、角度与安装面；涉及焊接时明确焊后检验责任 |
| Post Mount 160 刹车安装片；**Post Mount 160 Brake Tabs** | SI+C；Post Mount 接口＋非标车架端 | 阶梯块、双孔和侧向特征；3/4 轴适配 | 研发、MRO、OEM | **P1／E2**；[S11] | 桶形螺母等车削件外购；焊后复检孔距和安装面 |
| 双孔 Flat Mount 刹车座；**Flat-Mount Double Brake Bosses** | SI+C；Flat Mount 接口＋非标连接轮廓 | 紧凑台阶块、双孔及定位轮廓，适合 3/4 轴 | 研发、MRO、OEM | **P1／E2**；[S11] | 制动安全件，须成熟图纸、载荷和验证要求；焊接路线需合格外协 |
| 平装刹车尾钩板；**Flat-Mount Plate Dropouts** | SI+C；刹车接口＋非标车架连接端 | 异形平板、轴孔、定位台阶与刹车安装面；3 轴可加工 | 新车架、维修、OEM | **P2／E2，黄灯**；[S11] | 需后续焊接的产品不能只按单体铣件报价；检查左右件、焊后变形和安全验证 |
| 滑动尾钩板；**Sliding Dropout Plates** | SI+C；滑动调节接口＋非标焊接耳 | 板状轮廓、长槽、钻孔和攻丝，3 轴适配 | 研发、MRO、OEM | **P2／E2，黄灯**；[S11] | 槽宽、平行度、左右一致性和调节螺钉配套需确认 |
| 自行车卡钳转接件；**Bicycle Brake Caliper Adapters** | SI+C；车架/卡钳/转子规格＋非标转接体 | 小型块状件、两组安装面、孔系和局部台阶；3/4 轴可加工 | 新适配研发、碰撞替换、OEM | **P1／E2**；直接 Grade 5 商品见 [S12] | 不因“小件”降低制动安全审查；不照搬其他品牌保修、强度或兼容性声明 |
| 摩托车脚踏安装基座；**Motorcycle Footpeg Mounts / Pedal Bases** | SI+C；车型安装接口＋可定制外形 | 小型支架、多面孔系和台阶，适合 4 轴分度 | 新车型、碰撞替换、改装品牌 OEM | **P1／E2**；[S13] | 只承接铣削基座；销轴、转轴外购；枢轴孔及承载要求超界即拒接 |
| 后制动摇臂／杠杆；**Rear Brake Rocker Arms & Levers** | SI+C；车型接口＋非标杠杆几何 | 不规则扁平板、枢轴孔、连杆孔和开放减重轮廓 | 研发、MRO、OEM | **P2／E2，黄灯**；[S13] | 枢轴孔、衬套配合、疲劳和制动安全测试须先确认 |
| 后拨吊耳；**Rear Derailleur Hangers** | SI+C；车型专用接口 | 异形板、槽孔、攻丝或螺纹铣，3/4 轴可加工 | 研发、摔车替换、OEM | **P2／E2，黄灯**；[S11] | 部分产品可能出现严于 Titolum 能力的孔位/配合要求；不能默认全部 ±0.05 mm 可接 |
| 刹车垫隔热片；**Titanium Brake Pad Shims** | SI+C；卡钳型号适配 | 薄板仿形轮廓、小孔或槽，几何简单 | 赛道维护、OEM | **P3／E2**；[S13] | 薄板通常切割下料更经济；仅考虑切割毛坯＋特殊精修，不作为全铣削成本优势品 |
| 两/三螺栓排气法兰；**2-Bolt / 3-Bolt Exhaust Flanges** | SI+C；既有孔系＋非标外形 | 简单平板可铣，但圆形内外圆和密封面常引入车削/磨削 | 研发、MRO、OEM | **P3／E2，黄灯**；[S13] | 只评非圆形、可由铣削满足密封要求的特殊法兰，不把整个法兰族归入核心能力 |

**本类推荐顺序：**刹车安装片与卡钳转接件 → 脚踏基座 → 尾钩板 → 制动杠杆 → 后拨吊耳。它们具有明确的适配关系和小批采购场景，但同时也是安全审查最不能省略的一组产品。

### 2.4 海洋、水翼与 ROV 非承压件

| 具体产品（中英文） | 标准/非标属性 | 典型几何及 3/4 轴适配原因 | 采购动机 | 优先级与证据 | 接单条件 |
|---|---|---|---|---|---|
| 水翼轨道 T 螺母／安装滑块；**Hydrofoil Track T-Nuts / Mounting Sliders** | SI+C；可适配 90 mm US foil track box 等接口 | 非回转阶梯轮廓、平面与攻丝，适合 3 轴 | 新产品适配、维修、OEM | **P1／E2**；[S16] | 按实际轨道与螺纹图纸确认；不要把供应商的“完全防腐蚀”等营销语变成绝对保证 |
| 水翼转接座；**Custom Hydrofoil Adapters** | SI+C；不同品牌/接口之间的按图转接 | 板/块体、安装槽、孔系和局部台阶；简单结构可 3/4 轴 | 新系统研发、MRO、OEM | **P2／E1**；[S16] | 公开资料只证明 adapter 产品族和可选钛材，未证明其为成熟 Grade 5 主力品；曲面、长深孔另审 |
| 帆船支索链板；**Sailboat Chainplates** | SI+C；销接口和既有安装孔＋按船型非标 | 长条平板、销孔与安装孔；可铣轮廓和孔 | 船艇翻新、MRO、同船型 OEM | **P2／E2，黄灯**；[S14] | 薄板可先水切/激光再精修；桅杆与人员安全相关，客户须提供载荷、疲劳及安装验证要求 |
| 前帆 tack 平板／船首支撑板；**Screecher Tack Plates / Stemplates** | C，或 SI+C | 不规则平板、索具孔和安装孔；平面版适合 3 轴 | 帆装改版、MRO、OEM | **P2／E2，黄灯**；[S14] | 折弯、U/A 形焊接件和车削螺柱不属于同一接单范围；结构验证不可省略 |
| 水下相机／灯 L 形支架；**Subsea Camera & Light L-Brackets** | SI+C；设备接口＋ROV 侧非标 | L 形板、长槽和安装孔；两次装夹可完成 | 设备集成、MRO、OEM | **P2／E1**；[S15] | 整件钛材需求未由目录证明；不做耐压壳、连接器壳体和精密密封槽 |
| 水下设备轭形支架；**Underwater Equipment Yoke Brackets** | SI+C | U/叉形板、槽与安装孔；3 轴两装夹或 4 轴加工侧孔 | 研发、MRO、OEM | **P2／E1**；[S15] | 销轴、collar 等回转件外购；薄耳、枢轴配合和冲击载荷需复核 |
| ROV 滑橇角板／安装支撑；**ROV Skid Corner Plates & Mounting Supports** | C，或 SI+C | 小型角板、开放轮廓、孔系和局部台阶，适合 3 轴 | 工具集成、MRO、同型复制 | **P2／E1**；[S15] | 只接独立铣削小件，不接大型焊接滑橇；原目录偏塑料，钛替代价值需客户确认 |
| ROV 推进器护板；**ROV Thruster Guard Plates** | C | 开放板状轮廓和安装孔可铣 | 研发、碰撞替换、OEM | **P3／E1**；[S15] | 大型薄板、焊接框架和复杂曲面护罩不纳入；先评估切割工艺是否更经济 |
| 水翼机身／ fuselage；**Hydrofoil Fuselages** | C，或 SI+C | 长条多面体，可能含连续曲面、深孔或回转特征，不能仅凭名称判定轴数 | 新产品、OEM | **P3／E2，黄灯**；[S16] | 有真实 Grade 5 产品证据，但不等于适合 Titolum；CAM 可达性、长径比和车削比例未关闭前不报价 |

**本类推荐顺序：**水翼轨道 T 螺母 → 水下设备支架 → 链板/平板索具件 → ROV 独立小板件 → 水翼转接座。所有耐压电子舱、连接器壳体、载人或入级要求件均应升级到质量审查。

### 2.5 MRO 按图替换与研发试制件

本类是通用询盘入口，不建议为每个候选都建立“已验证热销品”页面。以下主要由 2.5D 几何和 MRO 场景推导，直接 Grade 5 商品证据较弱，统一标为 **P**。

| 具体产品（中英文） | 标准/非标属性 | 适合的目标几何 | 采购动机 | 建议 |
|---|---|---|---|---|
| 替换安装板；**Replacement Mounting Plates** | C，或 SI+C | 板状轮廓、旧设备孔系、沉孔、浅台阶 | 停机维修、研发、OEM | **P2**；作为通用 MRO 落地页主产品，要求正式图纸与接口清单 |
| 非标连接／垫高板；**Custom Connector & Spacer Plates** | C | 非圆形外轮廓、多组孔、局部凸台或浅腔 | MRO、研发 | **P2**；区别于纯车削圆垫圈和超薄 shim |
| 导向板／耐磨承载板；**Guide Plates & Wear Plates** | C | 平面、导向槽、沉孔和开放轮廓 | MRO、OEM | **P2**；若要求特定硬度、磨削平面、严平行度或摩擦学验证则黄灯 |
| 凸轮板；**Cam Plates** | C | 可由固定刀轴逼近的 2.5D 轮廓、轮毂孔和槽 | 研发、MRO、OEM | **P2**；精密孔、淬硬磨削轮廓或空间曲面不纳入 |
| 连接耳板／连杆板；**Clevis & Link Plates** | C，或 SI+C | 开放轮廓、双孔、台阶与减重槽 | MRO、研发、OEM | **P2**；销孔配合、耳板薄壁和疲劳载荷需复核 |
| 带铣削扁位／键槽的阶梯轴；**Stepped Shafts with Milled Flats or Keyways** | C | 回转主体＋真实键槽、侧平面、偏心孔等铣削特征 | MRO、OEM | **P3，车铣复合黄灯**；纯回转部分占比过大则按纯车削件拒接 |
| 带防转平面／侧槽的法兰套筒；**Flanged Sleeves with Anti-Rotation Flats or Side Slots** | C | 回转套筒＋非回转法兰、侧槽或平面 | MRO、OEM | **P3，车铣复合黄灯**；紧同轴度、磨削内外圆、压配和薄壁变形超界即拒接 |

## 三、行业优先级与高转化搜索场景

### 3.1 行业排序：按可承接度，而非虚构“利润最高”

| 排名 | 目标行业/客户 | 为什么值得优先 | 主要风险 | 商业动作 |
|---|---|---|---|---|
| 1 | **自行车车架制造、定制车架品牌与高性能售后** | 多个直接 6/4 钛产品证据；刹车接口明确；板/块几何与 3/4 轴高度匹配；存在新品、维修和小批 OEM 路径 [S11][S12] | 制动与尾钩安全、焊后变形、部分吊耳精密配合 | 首批建设刹车安装片、卡钳转接件和尾钩 3 个产品组 |
| 2 | **摩托车与赛车改装品牌、赛车团队** | Grade 5 脚踏基座等小批 OEM 产品证据明确；车型适配带来系列化可能 [S13] | 大量询盘可能是螺栓、轮轴等车削件；制动/脚踏安全验证 | 只展示铣削支架和基座，把车削紧固件列为不接或外购 |
| 3 | **水翼、帆船与 ROV 非承压设备** | 水翼 T 螺母和 Grade 5 链板有直接证据；海水环境和定制适配提供明确材料理由 [S14][S16] | 薄板切割更经济；部分产品仅螺纹为钛；桅杆/载人/入级风险 | 先做 T 螺母和非承压支架，再做链板；不主动承接耐压壳 |
| 4 | **工业自动化、机器人集成与一般设备研发** | 夹指、转接板、支架具有研发、换型和复制场景；几何适配度高 [S08][S09][S10] | 铝和钢更常见，钛材支付意愿未证实；快换机构常有高重复定位要求 | 以“客户指定 Grade 5＋特殊腐蚀/减重需求”为定位，不做泛化钛替代宣传 |
| 5 | **低压流体、气动和真空设备** | 定制钛歧管产品真实存在；块体与正交孔可采用 3/4 轴 [S17] | 深孔、内部毛刺、密封、压力、泄漏与清洁度容易使订单超界 | 只设置“低压浅孔歧管”页面，RFQ 强制收集流道和测试字段 |
| 6 | **地面设备、科研及非飞行研发** | 口袋支架、安装板适合单件和小批试制 [S10] | 一旦转为飞行关键、疲劳关键或指定航空认证，质量门槛显著变化 | 页面明确 `non-flight R&D`，不用泛航空结构件广告引流 |
| 暂缓 | **医疗外固定临床产品** | 外置夹块和连接板在几何上可能可铣 | ASTM F1541 涉及设计、机械功能和多项测试；材料、法规、追溯及 QMS 不能省略 [S18] | 仅保留未来合规研究，不在无质量路径时主动广告；可先做非医疗研究夹具，但不得暗示临床用途 |

> “高转化”在本报告中指**搜索词与可交付产品高度一致、询盘更容易被有效筛选**，不是已有转化率数据。若要判断真实利润，还需记录询价数量、合格率、报价工时、材料占比、刀具/外协成本、成交率和复购率。

### 3.2 长尾关键词清单

以下关键词由真实标准号、产品词与 `custom / manufacturer / made to drawing / CNC milling / Grade 5` 等采购词组合而成，**未做搜索量、CPC 或竞争度验证**。建议先用自然落地页和询盘数据验证，再决定是否投放广告。

| 页面组 | 建议英文长尾词 | 对应搜索意图 |
|---|---|---|
| 机器人标准接口 | `custom ISO 9409-1 titanium adapter plate`；`titanium robot mounting plate 50-4-M6`；`Grade 5 titanium EOAT adapter plate` | 标准接口＋定制材料＋零件名 |
| 执行器与工装 | `ISO 5211 F05 titanium mounting plate`；`custom DIN 6314 titanium clamp strap`；`DIN 6315 titanium forked clamp`；`DIN 508 titanium T-slot nut` | 标准号驱动的替换或项目采购 |
| 自动化与支架 | `custom titanium gripper fingers`；`titanium EOAT mounting plate made to drawing`；`Grade 5 titanium sensor mounting bracket`；`titanium pocketed bracket CNC milling` | 非标零件＋按图加工＋工艺 |
| 自行车刹车与尾钩 | `titanium post mount 160 brake tab`；`custom titanium ISO brake tab`；`Grade 5 titanium brake caliper adapter`；`custom titanium flat mount dropout`；`titanium sliding dropout plate made to drawing` | 车型/刹车接口＋具体零件 |
| 摩托车与赛车 | `custom titanium footpeg mount`；`titanium footpeg base manufacturer`；`Grade 5 titanium rear brake rocker arm`；`custom titanium brake bracket CNC milling` | 改装件＋制造方＋小批 OEM |
| 水翼与海洋 | `Grade 5 titanium hydrofoil track nuts`；`custom titanium hydrofoil adapter`；`custom titanium sailboat chainplate`；`titanium ROV camera mounting bracket`；`titanium underwater light yoke bracket` | 海洋应用＋非标适配/MRO |
| 流体歧管 | `custom titanium pneumatic manifold block`；`Grade 5 titanium vacuum manifold made to drawing`；`low volume titanium manifold supplier` | 按图、低压、小批制造 |
| 通用 MRO/研发 | `custom titanium replacement mounting plate`；`Grade 5 titanium cam plate CNC milling`；`custom titanium guide plate made to drawing`；`low volume titanium milling supplier` | 替换件、研发、小批量 |

### 3.3 页面应覆盖的五类采购词根

1. **标准词根**：`ISO 9409-1`、`ISO 5211 F05`、`DIN 6314`、`Post Mount 160`。
2. **零件词根**：`adapter plate`、`brake tab`、`gripper finger`、`track nut`、`chainplate`。
3. **定制词根**：`custom`、`made to drawing`、`build to print`、`OEM`。
4. **采购词根**：`manufacturer`、`supplier`、`low volume`、`replacement`。
5. **工艺与材料词根**：`Grade 5 titanium`、`Ti-6Al-4V`、`CNC milling`、`3-axis / 4-axis`。

不建议把 `cheap`、`in stock`、`bulk DIN 912 bolts`、`precision drill bushings`、`5-axis impeller`、`Grade 23 implant` 等作为核心广告词。它们分别偏向现货价格、排除工艺、超界几何或不符合材料/合规边界。对于 `ASME B16.5 titanium blind flange Class 150`，除非已经建立完整合规交付路径，否则不应以压力额定产品页主动承接。

## 四、工艺避坑与剔除清单：按特征判定，不按名称判定

钛的低导热、高反应性和加工应变硬化会提高切削刃温度、刀具磨损及沟槽磨损风险；因此深腔、薄壁、长悬伸和长时间精加工不能按普通铝件思路报价。[S19] 同时，4 轴分度不等于 5 轴联动，某个零件使用 5 轴更高效也不等于 3/4 轴绝对无法加工；应通过 CAM 可达性、装夹和碰撞分析判断。[S20]

### 4.1 红灯：满足条件即拒接

| 红灯特征 | 常见产品/图纸表现 | 拒接原因与安全替代表述 |
|---|---|---|
| **纯车削，无实质铣削特征** | 阶梯轴、普通轴套、圆垫圈、销轴、barrel nut、banjo bolt；只有同轴外圆、内孔、端面、锥面、环槽和车削螺纹 | 不属于核心能力；不要以“铣床也能铣圆”为理由纳入。只有键槽、扁位、偏心孔等真实铣削特征才可转车铣复合复核 |
| **冷镦或大批量标准紧固件** | 常规 M6 螺栓、DIN 912/ISO 4762 标准螺钉、标准螺母 | 与轻资产按图铣削定位不符；定制钻孔后也属于特殊螺栓，不应继续包装为普通标准件 |
| **精密轴套/钻套路线** | DIN 172/DIN 179、F7/n6、硬化、内外圆磨削、严同轴度或压配 | 通常涉及车、热处理、磨削及紧配合，超出常规 ±0.05 mm 铣削承诺 [S04] |
| **精密轴承孔公差严于 ±0.02 mm** | 明确标识的轴承座孔、精密定位孔，图纸为 ±0.01 mm 或更严 | 命中内部红线；不能因供应商宣传可达 ±0.005 mm 就默认 Titolum 也能交付 |
| **深度 >3D 的深腔薄壁件** | 小内 R 迫使使用长细刀、薄底薄壁、深腔排屑困难 | 命中内部红线。建议把 D 定义为“完成最小内 R 和腔宽所需的实际精加工立铣刀直径”，而非零件外径 |
| **唯一可行路线为 5 轴联动** | 闭式叶轮、扭曲叶盘、复杂推进器、连续变化刀轴的复合底切 | 超设备边界；普通自由曲面先黄灯分析，只有确认必须连续 5 轴时才拒接 [S20] |
| **必须采用未配置的专用工艺** | 图纸强制磨削、珩磨、研磨、枪钻/BTA、EDM、焊接或特殊修复，而无合格路线 | 不接“先拿单再想办法”的项目；紧公差孔不必然都要磨削，精镗可行性可另审 [S20] |
| **材料或材料规范不符** | Grade 23/ELI、其他钛牌号、钢/铝；或指定不能由现有 Grade 5 原料满足的规范 | 不用“都是钛合金”替代材料审核；客户正式改图批准后方可重评 |
| **无法证明的压力/合规交付** | 直接要求 `ASME B16.5 Class 150 Grade 5 pressure-rated flange`、承压耐压壳、强制认证但供应网络不满足 | B16.5 不是纯尺寸标准；无法验证材料、设计、额定、试验或指定认证时拒接 [S03] |
| **植入物或无合规路径的临床器械** | 骨钉、植入板、要求 Grade 23/ELI 的产品，或无材料/验证/QMS 路径的临床外固定件 | 不作为普通支架订单承接；外固定也涉及机械性能和法规要求 [S18] |
| **超设备或检测能力** | 超机床行程/承重、无法装夹、无方法检测关键 GD&T 或内部流道 | 无法加工或无法验证交付，均不应报价 |

### 4.2 黄灯：名称相同，可能接也可能拒

| 易误判产品 | 可以考虑的几何 | 必须关闭的问题 |
|---|---|---|
| **法兰** | 非回转板状外形、浅台阶、孔系可由 3 轴完成 | 是否主要车削；密封面、平面度、压力等级、材料规范、焊接颈及检测要求 |
| **歧管/阀块** | 正交浅孔、普通螺纹、可进入去毛刺的流道 | 孔深径比、交叉孔毛刺、深孔偏斜、阀腔、密封槽、压力/泄漏/清洁度及封堵方式 [S17] |
| **卡钳转接码/制动支架** | 开放耳座、安装孔、台阶和浅减重腔 | 复合角度、精密销孔、薄耳变形、疲劳与制动验证；不得因小件而免于安全审查 |
| **夹指/夹爪** | 普通螺栓孔、台阶、槽及可分层夹持轮廓 | 快换锁止、精密定心、配对加工、花键/齿形、薄长夹指挠曲 [S08] |
| **自行车尾钩和刹车片座** | 平板、台阶、孔槽及标准刹车接口 | 是否需焊接、焊后变形、左右一致性、孔距和安装面复检 [S11] |
| **海洋件** | 非承压支架、链板、角板和小型底座 | 耐压、入级、焊接、NDT、桅杆/人员安全、薄板切割经济性；“海洋用途”不自动等于需或无需船级社要求 |
| **航空/无人机支架** | 非飞行研发的开放 2.5D 支架 | 飞行/疲劳关键性、薄壁深腔、炉批追溯、首件、NDT 和客户指定体系；不能由行业名称自动推断全部认证 |
| **带铣削特征的轴/套** | 键槽、扁位、侧孔、非回转法兰 | 车削占比、同轴度、轴承颈、磨削、细长变形、薄壁夹持；只有真实铣削工作量才进入车铣复合评审 |
| **薄板件** | 简单链板、隔热片、护板 | 激光/水切是否更经济、铣削变形、毛刺、平面度及后续折弯/焊接 |
| **连续自由曲面** | 某些固定刀轴可逼近的开放曲面 | CAM 刀具可达性、碰撞、残留高度和表面要求；不凭“曲面”二字直接判 5 轴，也不盲目承诺 3 轴可做 |
| **局部公差为 ±0.02～±0.05 mm** | 单个非关键尺寸，具明确基准和检测方法 | 尺寸与 GD&T 区别、跨装夹关系、薄壁自由状态、温度与测量不确定度；常规 ±0.05 mm 不是所有特征的统一保证 |

### 4.3 绿灯目标几何

优先报价的零件通常具有以下组合：

- 中厚板或块体，开放 2.5D 轮廓；
- 通孔、沉孔、间隙孔、普通螺纹孔；
- 浅腔、开放槽、局部台阶、倒角和可达内 R；
- 多面特征可通过重复装夹或单一旋转轴分度接近；
- 无超紧轴承孔、无不可达内部毛刺、无强制 5 轴联动；
- 图纸、材料、数量、检验与后处理要求完整。

### 4.4 RFQ 必收字段与后台判级

**RFQ 至少收集：**

1. 2D PDF 图纸＋STEP；只有 3D 时不得自动报价，2D/3D 冲突须澄清。
2. 材料牌号、材料标准、原料形态及炉批/证书要求。
3. 零件数量、批次、预计年复购、目标交期和图纸版本。
4. 外形包络、最小壁厚/薄底、最大腔深、最小内 R、实际所需精加工刀径。
5. 每个关键孔的孔径、公差、深度、通/盲/交叉、位置度、圆度/同轴度和粗糙度。
6. 螺纹标准、规格、精度、有效深度和验收量规。
7. 通用公差、局部加严尺寸、基准 A/B/C、完整 GD&T 与表面粗糙度。
8. 热处理、阳极化、抛光、涂层、清洗、钝化等后处理及工序顺序。
9. 是否含焊缝、多个零件、封闭流道或必须由外部完成的工序。
10. 是否压力、泄漏、清洁度、疲劳、飞行、制动、医疗、载人和入级相关。
11. 所需检验：CMM、全尺寸、首件、材料报告、NDT、压力/功能测试及抽样比例。
12. 客户指定 QMS、过程认可、批准供应商和可追溯要求的具体范围。

```text
资料不全或 2D/3D 冲突
  → 不报价，人工澄清

命中材料不符、纯车削、强制 5 轴、>3D 深腔薄壁、
超严精密轴承孔、冷镦标准件、无合格特殊工艺/认证路线
  → 红灯拒接

存在多面可达性、薄壁、深孔、局部严公差、
压力/安全/医疗/航空/入级要求
  → 黄灯，由工艺＋质量联合关闭

无红灯、无未关闭黄灯、RFQ 字段完整
  → 进入双源报价与交付评审
```

## 五、建站落地：首批页面、数据结构与标准表述

### 5.1 建议首批 12 个页面

| 顺序 | 页面/产品组 | 对应产品 | 主要搜索意图 | 页面必须具备的筛选信息 |
|---|---|---|---|---|
| 1 | `bicycle-brake-tabs` | ISO、Post Mount、Flat Mount 刹车安装片 | 标准刹车接口＋定制车架件 | 接口类型、3/4 轴几何、焊接与制动验证要求 |
| 2 | `brake-caliper-adapters` | 自行车/摩托车卡钳转接件 | 卡钳、车架、转子适配 | 两组安装接口、孔公差、安全件 RFQ 字段 |
| 3 | `motorcycle-footpeg-mounts` | 脚踏安装基座 | 车型适配＋小批 OEM | 只做基座、销轴外购、枢轴孔边界 |
| 4 | `hydrofoil-track-nuts` | 水翼轨道 T 螺母/滑块 | 轨道接口＋Grade 5＋OEM | 轨道规格、螺纹、非回转铣削结构 |
| 5 | `pocketed-titanium-brackets` | 轻量化口袋支架 | Grade 5＋3 轴＋按图 | 开放腔、壁厚、内 R、样件到小批流程 |
| 6 | `robot-adapter-plates` | ISO 9409-1 机器人转接板 | 标准号＋机器人接口 | `interface based on` 声明、定位孔与载荷复核 |
| 7 | `custom-eoat-mounting-plates` | 非标 EOAT 安装板 | 机器人换型＋按图 | 被动板定位，排除完整快换机构 |
| 8 | `titanium-clamp-straps` | DIN 6314/6315 压板 | DIN 标准词＋定制材料 | 尺寸参考与夹紧性能免责声明 |
| 9 | `subsea-camera-brackets` | L 形、轭形水下设备支架 | ROV 设备集成/MRO | 非承压、无耐压壳、销轴外购 |
| 10 | `sailboat-chainplates` | 链板、前帆 tack 平板 | 帆船 MRO＋按船型定制 | 薄板下料、结构载荷、疲劳与安装验证 |
| 11 | `low-pressure-titanium-manifolds` | 低压气动/真空歧管 | 定制块体＋浅孔流道 | 强制收集孔深、去毛刺、密封与测试字段 |
| 12 | `titanium-mro-replacement-parts` | 安装板、连接板、导向板、凸轮板 | 停机维修＋按图替换 | 2D＋STEP、关键接口、检验与版本字段 |

ISO 5211、DIN 508、方斜垫圈、平键、水翼转接座和 ROV 角板可作为第二批页面。B16.5、医疗外固定、纯车削件和 5 轴零件不进入首批广告计划。

### 5.2 `src/lib/part-families.ts` 推荐数据结构

关键不是只存中英文名称，而是把**标准声明、几何、采购动机、证据强度和拒接规则**一起结构化，避免前端页面把工程边界写丢。

```ts
export type Priority = "P1" | "P2" | "P3";
export type EvidenceLevel = "E2" | "E1" | "P";
export type BuyingMotive = "R&D" | "MRO" | "OEM_REPEAT";
export type MachiningRoute =
  | "3-axis"
  | "4-axis-indexing"
  | "mill-turn-review";

export interface PartFamily {
  slug: string;
  name: { en: string; zh: string };
  category:
    | "standard-interface"
    | "automation-equipment"
    | "performance-vehicle"
    | "marine-rov"
    | "mro-prototype";
  standardBasis?: {
    code: string;
    scope: "dimensions" | "interface";
    claim: string;       // 前端必须展示的限定语
  };
  customGeometry: boolean;
  typicalGeometry: string[];
  machiningRoutes: MachiningRoute[];
  buyingMotives: BuyingMotive[];
  industries: string[];
  priority: Priority;
  evidenceLevel: EvidenceLevel;
  riskLevel: "core" | "engineering-review" | "hold";
  exclusions: string[];
  seo: {
    title: string;
    longTailKeywords: string[];
  };
}
```

**单个对象示例：**

```ts
export const partFamilies: PartFamily[] = [
  {
    slug: "robot-eoat-adapter-plates",
    name: {
      en: "Robot EOAT Adapter Plates",
      zh: "机器人末端转接板",
    },
    category: "standard-interface",
    standardBasis: {
      code: "ISO 9409-1:2004",
      scope: "interface",
      claim:
        "Mounting pattern based on ISO 9409-1; payload and OEM approval are not implied.",
    },
    customGeometry: true,
    typicalGeometry: ["bolt patterns", "counterbores", "shallow pockets"],
    machiningRoutes: ["3-axis", "4-axis-indexing"],
    buyingMotives: ["R&D", "MRO", "OEM_REPEAT"],
    industries: ["robotics", "industrial-automation"],
    priority: "P1",
    evidenceLevel: "E1",
    riskLevel: "engineering-review",
    exclusions: [
      "precision locating features beyond stated capability",
      "complete quick-change locking mechanisms",
    ],
    seo: {
      title: "Custom Ti-6Al-4V ISO 9409-1 Robot Adapter Plates",
      longTailKeywords: [
        "custom ISO 9409-1 titanium adapter plate",
        "Grade 5 titanium EOAT adapter plate",
      ],
    },
  },
];
```

如果提供现有 `src/lib/part-families.ts`，下一步可将本报告产品表逐项转换成完整数据文件；在未读取现有文件前，不建议直接覆盖其类型和字段。

### 5.3 网站标准声明：可直接使用与必须避免

**推荐表述：**

- `Custom Ti-6Al-4V adapter plates with mounting patterns based on ISO 9409-1:2004. Payload and OEM approval are not implied.`
- `Straight and forked clamp straps in selected DIN 6314 / DIN 6315 dimensional series, custom machined from Grade 5 titanium. Clamping capacity requires application-specific verification.`
- `T-slot nuts with nominal slot and thread dimensions based on DIN 508 / DIN 650. Material and proof-force ratings are defined by the order specification.`
- `Dimensions/interface based on the stated standard; custom geometry, material substitution, tolerances, testing and certification are governed by the approved drawing and purchase order.`

**必须避免：**

- `ASME B16.5 Grade 5 Titanium Blind Flange Class 150`，除非完整压力额定交付路径已经验证；
- `DIN 912 Custom Drilled Standard Bolts`，建议改为按图特殊螺栓，但仍不进入核心目录；
- `DIN 179 Titanium Drill Bushings F7/n6`；
- `DIN 508 Grade 10 Titanium T-Nut`，除非对应性能和试验已经验证；
- `ISO 9409-1 Payload-Certified Robot Flange`；
- `DIN 6885 h9 Titanium Keys`，若实际只承诺常规 ±0.05 mm。

### 5.4 上线后的验证指标

不要用供应商目录数量判断成功。建议按产品页记录：

- Google Search Console 中的实际查询词与展示页面；
- 每月 RFQ 数、资料完整率和合格询盘率；
- 红灯/黄灯原因分布，尤其是纯车削、超严孔和 5 轴需求；
- 报价率、成交率、报价工程工时和实际外协成本；
- 单页毛利率、交付准时率、返工率及 OEM 复购率。

若某页流量高但合格询盘率持续低，应优先修改页面边界和否定关键词，而不是放宽工艺红线。若 P 类通用 MRO 页面连续获得合格订单，再把高频几何拆成独立产品族。

---

## 结论

Titolum 最有辨识度的定位不是“什么钛件都能做”，而是：**专注 Grade 5 钛合金的板/块类按图铣削件，用标准接口帮助买家定义需求，用工程审核和双源报价保证可交付性。**

首批资源应集中在刹车安装片、卡钳转接件、脚踏基座、水翼轨道螺母、口袋支架、机器人转接板和 DIN 压板。标准法兰、特殊螺栓和精密轴套不要为了“标准件流量”而突破工艺与合规边界。对自动化、ROV 和通用 MRO 产品，应明确标注钛材需求仍待验证；对制动、帆船、医疗、压力及航空件，则应把质量审查置于流量和成交之前。

## 参考来源

以下来源用于核验标准范围、产品存在和工艺风险。供应商目录只证明其产品或能力声明，不代表 Titolum 已具备相同能力、认证或性能。检索日期为 2026-11-26。

### [S01] ISO 9409-1:2004
ISO，《Manipulating industrial robots — Mechanical interfaces — Part 1: Plates》：  
https://www.iso.org/standard/36578.html

### [S02] ISO 5211:2026
ISO，《Industrial valves — Part-turn actuator attachments》：  
https://iso.org/standard/89904.html

### [S03] ASME B16.5 与钛锻件材料
- ASME，《B16.5-2025 Pipe Flanges and Flanged Fittings》：https://www.asme.org/redirecturl.aspx?product=M01525
- ASTM，《B381 Standard Specification for Titanium and Titanium Alloy Forgings》：https://www.astm.org/b0381-08.html

### [S04] DIN 912 / ISO 4762 与精密钻套
- ISO，《ISO 4762:2004 Hexagon socket head cap screws》：https://www.iso.org/standard/34460.html
- Fasteners.eu，《DIN 912 — Hexagon Socket Head Cap Screws》：https://www.fasteners.eu/standards/DIN/912/
- Ganter，《DIN 172 Guide Bushings / Drill Bushings》：https://www.ganternorm.com/en/products/3.2-Mounting-Positioning-Leveling-with-Retaining-Cables-Screws-Clamping-and-Supporting-Elements/Positioning-elements-Clamping-pads/DIN-172-Guide-Bushings-Drill-Bushings-Steel-with-Collar?artikelnr=172-B4%2C9-12-A

### [S05] DIN 508 T 槽螺母
Halder，《Nuts for T-Slots DIN 508》：  
https://www.halder.com/eng/PM/Standard-Parts/Clamping-Elements/Nuts-for-T-Slots/Nuts-for-T-Slots-DIN-508

### [S06] DIN 6314 / DIN 6315 压板
- FIBRO，《Clamp, straight, DIN 6314》：https://www.cn.fibro.com/en/214016-clamp-straight-din-6314-6688
- Halder，《Clamps DIN 6315 B, forked》：https://www.halderusa.com/us/PM/Standard-Parts/Standard-Parts-for-Fixture-Systems/Clamps-DIN-6315-B-forked/23150.0014

### [S07] 方斜垫圈与平键
- DIN，《DIN 434 Square taper washers for U-sections》：https://www.din.de/en/wdc-beuth:din21:383351828
- DIN，《DIN 435 Square taper washers for I-sections》：https://www.din.de/en/wdc-beuth:din21:383351931
- AFNOR，《DIN 6885-1:2021-11 Parallel keys / keyways》：https://www.boutique.afnor.org/en-gb/standard/din-68851/drive-type-fastenings-without-taper-action-parallel-keys-keyways-deep-patte/de30092409/498881

### [S08] 机器人夹指毛坯
SCHUNK，《BSWS-ABR Finger Blank》：  
https://schunk.com/se/en/workpiece-clamping-technology/accessories/spare-parts/ratchet/c/PGR_3218/

### [S09] EOAT 转接板
Manufacturing.net / SAS Automation，《Quick Change Mounting Plates》：  
https://www.manufacturing.net/home/press-release/13153797/quick-change-mounting-plates

### [S10] Grade 5 口袋支架
PREMSA，《Titanium Grade 5 CNC Machining》：  
https://premsaindustries.com/en/resources/materials/cnc-machining-grade-5-titanium

### [S11] 自行车刹车安装片、尾钩与后拨吊耳
- Firsthand / Paragon Machine Works，《Titanium Post Mount 160 Brake Tab》：https://firsthand.bike/collections/brake-mounts/products/brake-tab-titanium-post-mount-160-select-version
- Firsthand，《Titanium ISO Mitered Brake Tab》：https://firsthand.bike/products/brake-tab-titanium-iso-mitered-for-sram-udh-dropout
- Firsthand，《Titanium Flat-Mount Double Brake Boss》：https://firsthand.bike/collections/brake-mounts/products/paragon-titanium-flat-mount-double
- Firsthand，《Titanium Flat Mount Plate Dropout》：https://firsthand.bike/products/dropout-titanium-plate-flat-mount-70-degree-no-eyelets
- Firsthand，《Titanium Conventional Sliding Dropout Plate》：https://firsthand.bike/products/dropout-titanium-conventional-slider-plate-select-version
- VMT，《Custom CNC Machining Bicycle Derailleur Hanger》：https://vmtcnc.com/product-item/bicycle-derailleur-hanger/

### [S12] Grade 5 卡钳转接件
Ti-Parts，《Fearless Knight Front Caliper Adapter — Grade 5 Titanium CNC》：  
https://tipartstitanium.com/products/titanium-cnc-universal-sl8-front-brake-adapter-ti-flat-mount-roadbike-shimano-specialized-sworks-aethos

### [S13] 摩托车、隔热片与排气法兰产品族
- BOZE，《Titanium Pedal Base》：https://bozemetal.com/Titanium-off-road-motorcycle-Footpegs/Titanium-Pedal-Base
- PYTITANS，《GR5 Titanium Motorcycle Rear Brake Rocker Arm Lever》：https://www.pytitans.com/index.php?ie=32-98-302-1
- Paragon，《Titanium Pad Shims》：https://paragonbrakes.com/titanium-pad-shims/aftermarket-calipers/alcon
- Wisdom，《Titanium 2-Bolt Exhaust Flange》：https://www.wisdomtitanium.com/titanium-forgings/titanium-2-bolt-exhaust-flange
- Wisdom，《3-Bolt Titanium Exhaust Flange》：https://www.wisdomtitanium.com/titanium-forgings/3-bolt-titanium-exhaust-flange

### [S14] 帆船链板与索具平板件
- Allied Titanium，《Grade 5 Titanium Chainplate 0076257》：https://www.alliedtitanium.com/products/marine/rigging-parts/chainplates/vupdc_Detail.php?UPDCID=1038937001
- Allied Titanium，《Chainplates Catalog》：https://www.alliedtitanium.com/products/marine/rigging-parts/chainplates/vupdc_Results.php

### [S15] 水下设备与 ROV 支架
- DeepSea，《Mounting Brackets for Underwater Lights & Cameras》：https://www.deepsea.com/accessories/brackets/
- WKH Group，《Gas, Oil, ROV & Subsea》：https://wkhgroup.co.uk/pages/oil-gas-rov-subsea

### [S16] 水翼产品
- BOZE，《Titanium Hydrofoil Fuselage and Hardware》：http://bozemetal.com/Titanium-Hydrofoil-Fuselage-and-Hardware
- Unity Sport，《Foil Adapter — Customized Manufacturer》：https://www.unitysurf.com?p=4224/

### [S17] 钛歧管与轴数路线
- Sunrise，《Custom Titanium Manifolds》：https://www.sunrisetitanium.com/custom-titanium-manifolds.html
- DMG MORI，《5-Axis Excellence — Fluid Manifold Application》：https://us.dmgmori.com/solutions/5-axis-excellence

### [S18] 医疗外固定与医疗器械 QMS
- ASTM，《F1541-24 Standard Specification and Test Methods for External Skeletal Fixation Devices》：https://store.astm.org/f1541-24.html
- ISO，《ISO 13485 — Medical Devices》：https://www.iso.org/iso/iso13485

### [S19] 钛合金加工风险
Seco Tools，《A Guide to Titanium Machining》：  
https://www.secotools.com/article/a_guide_to_titanium_machining

### [S20] 轴数、分度、镗削与深孔
- DMG MORI，《Competitive Production with CNC Milling Machines》：https://ca-en.dmgmori.com/products/machines/milling
- Autodesk，《FeatureCAM — 4th-Axis Positioning》：https://help.autodesk.com/view/FCAM/2023/ENU?guid=GUID-ABFCCC70-ECC1-4433-B73C-BBC2E52C0138
- Sandvik Coromant，《Boring Holes》：https://www.sandvik.coromant.com/en-us/knowledge/boring
- Sandvik Coromant，《CoroDrill 861》：https://www.sandvik.coromant.com/en-us/tools/solid-round-tools/solid-carbide-drills/corodrill-861

---

**研究限制：**本报告未购买 ASME/DIN 标准全文，公开摘要不能用于生成具体生产尺寸；具体 SKU 上线前须核对合同采用的标准版次和完整尺寸表。关键词未做搜索量验证，行业排序也不构成利润率或市场规模结论。