/**
 * Part product library — 产品库（数据层）。
 *
 * 定位：本文件是"产品 + 产品族 + 工程评审状态 + 询盘筛选规则"的唯一数据源。
 * 页面层（src/lib/parts.ts）单向 import 本文件的产品族定义，
 * 本文件不 import 页面层，避免循环引用。
 *
 * 规则：
 * - 不写死公差、材料牌号、批量、交期等能力数字 —— 唯一来源是 capabilities.ts。
 * - 不出现价格、库存、SKU 编号、现货交期、供应商工厂名称。
 * - "标准件"不等于"适合铣削"：标准属性与工艺可行性分别用
 *   attribute 与 processNote 表达，不得用标准编号替代工艺判断。
 * - 每个产品必须带 reviewStatus：
 *     qualified        —— 已有供应商与工艺路径验证，可公开推广；
 *     review_required  —— 几何与采购需求合理，但需工程评审 / 供应商书面报价；
 *     excluded         —— 明确超出工艺边界，不作为产品入口。
 * - 当前 qualified 集合刻意为空：在取得宝鸡 2–3 家供应商书面报价前，
 *   任何"容易做""利润高"的判断都只能算假设。
 *
 * 数据来源：website_docs/parts_produts.md（产品体系与首批候选验证）。
 */

/** 产品属性 —— 对应文档中的四类"标准件 / 非标件"定义。 */
export type PartAttribute =
  /** 标准件：依据明确的标准尺寸、接口或规范生产。 */
  | 'standard-compliant'
  /** 标准接口定制件：接口、孔距、安装尺寸符合标准，外形由客户图纸确定。 */
  | 'standard-interface-custom'
  /** 非标图纸件：依据客户图纸、3D 模型或工程要求加工。 */
  | 'custom-to-drawing'
  /** 按标准制造的非标件：几何为非标，但部分尺寸、螺纹、孔距、表面要求采用标准。 */
  | 'nonstandard-to-standard-features';

/** 工程评审状态。 */
export type ReviewStatus = 'qualified' | 'review_required' | 'excluded';

/** 建站处理方式。 */
export type SeoAction = 'product-page' | 'family-page' | 'application-page' | 'defer';

/** 首批候选优先级。 */
export type Priority = 'P1' | 'P2' | 'P3';

/** 采购路径 —— 判断订单价值与复购可能性。 */
export type PurchasePath =
  | 'new-development'
  | 'oem-repeat'
  | 'maintenance-replacement';

/** 产品族（一级分类 = 几何结构）。 */
export interface PartProductFamily {
  /** URL slug。 */
  slug: string;
  /** 英文名。 */
  name: string;
  /** 中文名。 */
  nameZh: string;
  /** 一句话说明，描述几何结构而非应用场景。 */
  description: string;
  /** 该族的默认属性倾向，用于产品页默认文案。 */
  defaultAttribute: PartAttribute;
  /** 该族是否混合承接标准件与非标件。 */
  type: 'custom' | 'mixed';
}

/** 产品条目。 */
export interface PartProduct {
  /** URL slug。 */
  slug: string;
  /** 英文产品名。 */
  nameEn: string;
  /** 中文产品名。 */
  nameZh: string;
  /** 所属产品族 slug。 */
  familySlug: string;
  /** 产品属性。 */
  attribute: PartAttribute;
  /** 工程评审状态。 */
  reviewStatus: ReviewStatus;
  /** 首批候选优先级。 */
  priority: Priority;
  /** 建站处理方式。 */
  seoAction: SeoAction;
  /** 典型几何特征。 */
  geometryFeatures: string[];
  /** 典型海外买家。 */
  buyers: string[];
  /** 典型采购路径。 */
  purchasePath: PurchasePath;
  /** 长尾关键词。 */
  longTailKeywords: string[];
  /** 工艺说明：是否涉及车削、钻孔、攻丝或其他外协工序。 */
  processNote: string;
  /** 风险说明：需要在报价前评审的工程或商业风险。 */
  riskNote: string;
}

/**
 * 五大产品族。
 *
 * 族名来自文档的产品架构：标准件与非标件不是互斥大类，
 * 因此一级分类用几何结构，标准属性与采购场景作为二级筛选条件。
 */
export const PART_PRODUCT_FAMILIES: PartProductFamily[] = [
  {
    slug: 'mounting-structural-components',
    name: 'Mounting & Structural Components',
    nameZh: '安装与结构件',
    description:
      'Brackets, plates, adapter plates and mounting blocks — flat and prismatic structures with hole patterns, steps and machined mounting faces.',
    defaultAttribute: 'custom-to-drawing',
    type: 'custom',
  },
  {
    slug: 'blocks-housings-manifolds',
    name: 'Blocks, Housings & Manifolds',
    nameZh: '块体、壳体与歧管',
    description:
      'Manifold blocks, sensor housings and instrument enclosures — prismatic bodies with cross-drilled ports, shallow cavities and cover interfaces.',
    defaultAttribute: 'custom-to-drawing',
    type: 'custom',
  },
  {
    slug: 'flanges-plates-interfaces',
    name: 'Flanges, Plates & Interfaces',
    nameZh: '法兰、板件与接口',
    description:
      'Blind flanges, mounting and adapter flanges, interface plates — discs and plates with bolt circles, sealing faces and customer-defined hole patterns.',
    defaultAttribute: 'standard-interface-custom',
    type: 'mixed',
  },
  {
    slug: 'tooling-fixtures-end-effectors',
    name: 'Tooling, Fixtures & End Effectors',
    nameZh: '工装、夹具与末端执行器',
    description:
      'Gripper fingers, locating blocks, custom fixtures and robot mounting bases — geometrically simple blocks and plates designed around an interface.',
    defaultAttribute: 'custom-to-drawing',
    type: 'custom',
  },
  {
    slug: 'custom-mechanical-components',
    name: 'Custom Mechanical Components',
    nameZh: '其他定制机械零件',
    description:
      'Connector housings, mechanical adapters and linkage components — blocks, lugs and pin features defined entirely by the customer drawing.',
    defaultAttribute: 'custom-to-drawing',
    type: 'custom',
  },
];

/**
 * 产品条目。
 *
 * 排序 = 首批 15 条候选（文档验证表顺序），随后为文档第 2 节细分清单中
 * 未进入 15 条候选的补充条目。补充条目一律 review_required + defer + P3。
 */
export const PART_PRODUCTS: PartProduct[] = [
  {
    slug: 'titanium-mounting-brackets',
    nameEn: 'Titanium Mounting Brackets',
    nameZh: '钛合金安装支架',
    familySlug: 'mounting-structural-components',
    attribute: 'custom-to-drawing',
    reviewStatus: 'review_required',
    priority: 'P1',
    seoAction: 'product-page',
    geometryFeatures: [
      'L-shaped, U-shaped and cantilever brackets with multi-face hole patterns',
      'Stepped mounting faces and relief at stress-concentration corners',
      'Thin-sheet folded forms with local pockets',
    ],
    buyers: ['Automation equipment integrators', 'OEM machinery manufacturers'],
    purchasePath: 'new-development',
    longTailKeywords: [
      'Grade 5 Titanium Mounting Brackets',
      'Custom Titanium Brackets to Drawing',
      'CNC Milled Titanium Mounting Brackets',
    ],
    processNote:
      'Flat and prismatic geometry suits 3-axis milling; multi-face patterns are handled by 4-axis indexing or repeat fixturing. Hole tapping and counterboring are in-house operations.',
    riskNote:
      'Geometry and procurement fit are confirmed. Whether the buyer specifies Grade 5 rather than aluminium or steel must be established before investment in a dedicated page.',
  },
  {
    slug: 'titanium-adapter-plates',
    nameEn: 'Titanium Adapter Plates',
    nameZh: '钛合金转接板',
    familySlug: 'mounting-structural-components',
    attribute: 'standard-interface-custom',
    reviewStatus: 'review_required',
    priority: 'P1',
    seoAction: 'product-page',
    geometryFeatures: [
      'Two interface groups with different hole spacing on one plate',
      'Positioning holes, mounting holes and threaded holes',
      'Stepped or relieved underside for flatness control',
    ],
    buyers: ['Equipment retrofit buyers', 'Robot integrators', 'Instrument manufacturers'],
    purchasePath: 'new-development',
    longTailKeywords: [
      'CNC Milled Titanium Adapter Plates',
      'Custom Titanium Adapter Plate to Drawing',
      'Titanium Equipment Retrofit Adapter Plate',
    ],
    processNote:
      'Plate geometry with two hole groups is 3-axis work; 4-axis indexing covers the opposite side where required.',
    riskNote:
      'Interface compatibility must be checked against the existing equipment before quoting; a retrofit plate inherits the accuracy of the interface it adapts.',
  },
  {
    slug: 'titanium-mounting-blocks',
    nameEn: 'Titanium Mounting Blocks',
    nameZh: '钛合金安装块',
    familySlug: 'mounting-structural-components',
    attribute: 'custom-to-drawing',
    reviewStatus: 'review_required',
    priority: 'P1',
    seoAction: 'family-page',
    geometryFeatures: [
      'Block form with stepped faces and locating holes',
      'Threaded holes and dowel or pin features',
      'Parallel machined faces as mounting reference',
    ],
    buyers: ['Equipment manufacturers', 'Fixture builders', 'Maintenance service providers'],
    purchasePath: 'oem-repeat',
    longTailKeywords: [
      'Titanium Mounting Blocks',
      'Custom Titanium Machined Blocks',
      'Grade 5 Titanium Mounting Block to Drawing',
    ],
    processNote:
      'Simple block geometry is a core 3-axis milling case. The geometry is not the difficulty; material-grade demand and repeat ordering are.',
    riskNote:
      'Whether a separate search intent and enough product differentiation exist to justify an independent page is unverified; keep it at family level for now.',
  },
  {
    slug: 'titanium-sensor-housings',
    nameEn: 'Titanium Sensor Housings',
    nameZh: '钛合金传感器壳体',
    familySlug: 'blocks-housings-manifolds',
    attribute: 'custom-to-drawing',
    reviewStatus: 'review_required',
    priority: 'P1',
    seoAction: 'product-page',
    geometryFeatures: [
      'Regular prismatic body with a shallow internal cavity',
      'Cover interface with a bolt pattern and gasket land',
      'Port bosses, threaded entries and stepped bores',
    ],
    buyers: ['Industrial instrument makers', 'Sensor OEMs', 'R&D teams'],
    purchasePath: 'new-development',
    longTailKeywords: [
      'Titanium Sensor Housing',
      'Custom Titanium Sensor Housings to Drawing',
      'Grade 5 Titanium Instrument Housing',
    ],
    processNote:
      'Shallow cavities and regular outer faces are within 3/4-axis scope. Deep thin-walled cavities are not the same case.',
    riskNote:
      'Thin walls and cavity distortion must be reviewed against the machining sequence and fixturing before a tolerance commitment is made.',
  },
  {
    slug: 'titanium-manifold-blocks',
    nameEn: 'Titanium Manifold Blocks',
    nameZh: '钛合金歧管块',
    familySlug: 'blocks-housings-manifolds',
    attribute: 'custom-to-drawing',
    reviewStatus: 'review_required',
    priority: 'P1',
    seoAction: 'product-page',
    geometryFeatures: [
      'Block body with multi-direction drilled ports',
      'Cross-drilled channels and threaded ports',
      'Sealing faces and port shoulders',
    ],
    buyers: ['Fluid handling equipment makers', 'Instrument equipment makers', 'OEM machinery manufacturers'],
    purchasePath: 'oem-repeat',
    longTailKeywords: [
      'Custom Titanium Manifold Blocks',
      'CNC Milled Titanium Hydraulic Manifold',
      'Titanium Manifold Block to Drawing',
    ],
    processNote:
      'Regular blocks are machinable, but crossed deep holes and internal sealing surfaces drive the real difficulty. Drilling, tapping and sealing-face finishing are separate operations.',
    riskNote:
      'Hole-position accuracy is not a flow, pressure or leak guarantee. Sealing requirements and blind-hole intersections need an explicit engineering review.',
  },
  {
    slug: 'titanium-interface-plates',
    nameEn: 'Titanium Interface Plates',
    nameZh: '钛合金接口板',
    familySlug: 'flanges-plates-interfaces',
    attribute: 'standard-interface-custom',
    reviewStatus: 'review_required',
    priority: 'P2',
    seoAction: 'defer',
    geometryFeatures: [
      'Flat plate with positioning and mounting holes',
      'Threaded holes and datum faces',
      'Interface pattern taken from an existing assembly',
    ],
    buyers: ['Automation integrators', 'Instrument equipment makers', 'OEM equipment programmes'],
    purchasePath: 'oem-repeat',
    longTailKeywords: ['Titanium Interface Plates', 'CNC Milled Titanium Interface Plate'],
    processNote:
      'Plate geometry with hole systems — straightforward within 3/4-axis scope.',
    riskNote:
      'Procurement intent is clear but overlaps with adapter plates and mounting plates. An independent page risks keyword and product duplication.',
  },
  {
    slug: 'titanium-robotic-gripper-fingers',
    nameEn: 'Titanium Robotic Gripper Fingers',
    nameZh: '钛合金机械臂夹爪',
    familySlug: 'tooling-fixtures-end-effectors',
    attribute: 'custom-to-drawing',
    reviewStatus: 'review_required',
    priority: 'P2',
    seoAction: 'application-page',
    geometryFeatures: [
      'Elongated block with a machined gripping face',
      'Threaded holes and locating holes',
      'Finger geometry matched to a gripper body',
    ],
    buyers: ['Robot integrators', 'Automation equipment builders'],
    purchasePath: 'new-development',
    longTailKeywords: [
      'Titanium Robotic Gripper Fingers',
      'Custom Titanium Gripper Fingers to Drawing',
    ],
    processNote:
      'Long prismatic blocks with hole patterns — fully within 3/4-axis milling.',
    riskNote:
      'Whether buyers genuinely specify Grade 5, and whether the term carries an independent search intent, must be validated before building a dedicated page.',
  },
  {
    slug: 'titanium-fixture-locating-blocks',
    nameEn: 'Titanium Fixture Locating Blocks',
    nameZh: '钛合金夹具定位块',
    familySlug: 'tooling-fixtures-end-effectors',
    attribute: 'custom-to-drawing',
    reviewStatus: 'review_required',
    priority: 'P2',
    seoAction: 'defer',
    geometryFeatures: [
      'Block with locating holes and datum faces',
      'Parallel machined reference faces',
      'Pocket or slot features for workpiece location',
    ],
    buyers: ['Fixture and jig builders', 'Equipment manufacturers'],
    purchasePath: 'oem-repeat',
    longTailKeywords: ['Titanium Fixture Locating Blocks', 'CNC Milled Titanium Locating Block'],
    processNote:
      'Regular blocks and datum faces are standard 3-axis milling work.',
    riskNote:
      'The fixture market exists, but Grade 5 demand and the economics of titanium in this application are unverified.',
  },
  {
    slug: 'titanium-connector-housings',
    nameEn: 'Titanium Connector Housings',
    nameZh: '钛合金连接器壳体',
    familySlug: 'custom-mechanical-components',
    attribute: 'custom-to-drawing',
    reviewStatus: 'review_required',
    priority: 'P2',
    seoAction: 'defer',
    geometryFeatures: [
      'Regular block body with a mounting face and hole system',
      'Shallow cavity or cover interface',
      'Interface features matched to a connector series',
    ],
    buyers: ['Connector OEMs', 'Instrument equipment makers', 'Electronic equipment manufacturers'],
    purchasePath: 'oem-repeat',
    longTailKeywords: [
      'Titanium Connector Housings',
      'Custom Titanium Connector Housing to Drawing',
    ],
    processNote:
      'Housings are available from titanium machining suppliers; thin walls and precision interfaces need review.',
    riskNote:
      'The product boundary against sensor housings is not yet defined, so a separate page would blur two product categories.',
  },
  {
    slug: 'titanium-blind-flanges',
    nameEn: 'Titanium Blind Flanges',
    nameZh: '钛合金盲板法兰',
    familySlug: 'flanges-plates-interfaces',
    attribute: 'standard-compliant',
    reviewStatus: 'review_required',
    priority: 'P2',
    seoAction: 'product-page',
    geometryFeatures: [
      'Flat disc with a machined sealing face',
      'Outer diameter and bolt-circle pattern per the referenced standard',
      'Bolted hole system',
    ],
    buyers: ['Pipe equipment suppliers', 'Project procurement', 'Maintenance and repair buyers'],
    purchasePath: 'maintenance-replacement',
    longTailKeywords: [
      'Titanium Blind Flanges',
      'Custom Titanium Flanges to ASME B16.5 Interface',
      'Grade 5 Titanium Blind Flanges',
    ],
    processNote:
      'A disc with a hole system is machinable, but standard compliance also constrains material form, manufacturing route and inspection — not only the drilled features.',
    riskNote:
      'A flange with a standard interface is not a fully standard-compliant flange. Material applicability to the referenced standard, material form and pressure rating must be verified before any compliance wording is used.',
  },
  {
    slug: 'titanium-mounting-flanges',
    nameEn: 'Titanium Mounting Flanges',
    nameZh: '钛合金安装法兰',
    familySlug: 'flanges-plates-interfaces',
    attribute: 'standard-interface-custom',
    reviewStatus: 'review_required',
    priority: 'P2',
    seoAction: 'defer',
    geometryFeatures: [
      'Circular or square mounting face with a bolt pattern',
      'Locating features and a stepped back face',
      'Interface proportions drawn from an existing assembly',
    ],
    buyers: ['OEM equipment manufacturers', 'Instrument equipment makers'],
    purchasePath: 'oem-repeat',
    longTailKeywords: [
      'Titanium Mounting Flanges',
      'Custom Grade 5 Titanium Mounting Flange',
    ],
    processNote:
      'May involve turning steps or concentric features; the turning share must be confirmed per drawing.',
    riskNote:
      'A custom mounting interface is a plausible purchase, but independent search demand is not yet demonstrated, and the boundary against mounting blocks and adapter flanges is undefined.',
  },
  {
    slug: 'titanium-adapter-flanges',
    nameEn: 'Titanium Adapter Flanges',
    nameZh: '钛合金转接法兰',
    familySlug: 'flanges-plates-interfaces',
    attribute: 'custom-to-drawing',
    reviewStatus: 'review_required',
    priority: 'P2',
    seoAction: 'defer',
    geometryFeatures: [
      'Two different interfaces on one body',
      'Steps between the interfaces and a combined bolt system',
      'Machined sealing faces at both ends',
    ],
    buyers: ['Project buyers', 'Equipment retrofit buyers', 'Maintenance and replacement buyers'],
    purchasePath: 'maintenance-replacement',
    longTailKeywords: [
      'Titanium Adapter Flanges',
      'Custom Titanium Adapter Flange to Drawing',
    ],
    processNote:
      'Two interfaces on one body increase the turning share; this has to be checked against the 3/4-axis route before quoting.',
    riskNote:
      'Standard-compliance wording must not be used for a custom geometry, and the demand distinction against adapter plates is unverified.',
  },
  {
    slug: 'titanium-robot-mounting-bases',
    nameEn: 'Titanium Robot Mounting Bases',
    nameZh: '钛合金机械臂安装座',
    familySlug: 'tooling-fixtures-end-effectors',
    attribute: 'custom-to-drawing',
    reviewStatus: 'review_required',
    priority: 'P2',
    seoAction: 'defer',
    geometryFeatures: [
      'Plate or block form with mounting holes on multiple faces',
      'Locating features and datum reference',
      'Interface matched to a robot base',
    ],
    buyers: ['Automation equipment builders', 'Robot integrators'],
    purchasePath: 'oem-repeat',
    longTailKeywords: [
      'Titanium Robot Mounting Bases',
      'Custom Titanium Robot Base Plate',
    ],
    processNote:
      'Plate and block geometry with a hole system — comfortably within 3/4-axis scope.',
    riskNote:
      'Geometry and purchase scenario are clear, but it is unknown whether the customer actually specifies Grade 5.',
  },
  {
    slug: 'titanium-milled-shafts',
    nameEn: 'Titanium Milled Shafts',
    nameZh: '钛合金带铣削特征轴类',
    familySlug: 'custom-mechanical-components',
    attribute: 'custom-to-drawing',
    reviewStatus: 'excluded',
    priority: 'P3',
    seoAction: 'defer',
    geometryFeatures: [
      'Shaft body with milled flats, keyways or cross holes',
      'End mounting faces and transverse slots',
      'Turned journals and shoulders',
    ],
    buyers: ['Machinery manufacturers', 'Replacement part buyers', 'Special mechanism makers'],
    purchasePath: 'maintenance-replacement',
    longTailKeywords: ['Titanium Milled Shafts', 'Titanium Shafts with Milled Flats or Keyways'],
    processNote:
      'The shaft body is normally turned; milling is only one operation in the route. Without accepting turning coordination this is not a milling product.',
    riskNote:
      'Excluded from the product library. It attracts inquiries beyond the confirmed process scope and would pull in tolerance, coaxiality and runout commitments that are not part of the current route.',
  },
  {
    slug: 'titanium-custom-fixtures',
    nameEn: 'Titanium Custom Fixtures',
    nameZh: '钛合金专用夹具',
    familySlug: 'tooling-fixtures-end-effectors',
    attribute: 'custom-to-drawing',
    reviewStatus: 'review_required',
    priority: 'P3',
    seoAction: 'defer',
    geometryFeatures: [
      'Plate, block and shallow slot structures',
      'Locating and clamping hole systems',
      'Lightweight pockets for weight reduction',
    ],
    buyers: ['Fixture builders', 'Equipment R&D teams', 'Automation integrators'],
    purchasePath: 'new-development',
    longTailKeywords: ['Titanium Custom Fixtures', 'Custom Titanium Jig and Fixture Parts'],
    processNote:
      'Regular blocks and plates are within scope; complex fixture frames require an engineering review.',
    riskNote:
      'The demand is broad and would attract both non-titanium inquiries and complex tooling work that is outside the current process scope.',
  },
  {
    slug: 'titanium-structural-plates',
    nameEn: 'Titanium Structural Plates',
    nameZh: '钛合金结构连接板',
    familySlug: 'mounting-structural-components',
    attribute: 'custom-to-drawing',
    reviewStatus: 'review_required',
    priority: 'P3',
    seoAction: 'defer',
    geometryFeatures: [
      'Flat plate outline with through holes, counterbores and threaded holes',
      'Lightening pockets on structural faces',
      'Edge chamfers and datum reference edges',
    ],
    buyers: ['Equipment structural builders', 'Lightweight equipment makers'],
    purchasePath: 'oem-repeat',
    longTailKeywords: ['Titanium Structural Plates', 'Custom Titanium Structural Connection Plates'],
    processNote:
      'Flat plate geometry with a hole system — 3-axis work with 4-axis indexing for the second face.',
    riskNote:
      'Weight-reduction motivation is only relevant where the customer has confirmed it; aluminium or steel may be more economical without that requirement.',
  },
  {
    slug: 'titanium-sensor-brackets',
    nameEn: 'Titanium Sensor Brackets',
    nameZh: '钛合金传感器支架',
    familySlug: 'mounting-structural-components',
    attribute: 'custom-to-drawing',
    reviewStatus: 'review_required',
    priority: 'P3',
    seoAction: 'defer',
    geometryFeatures: [
      'Thin-sheet folded or bracketed form',
      'Mounting holes and a local pocket for the sensor body',
      'Angled or offset mounting face',
    ],
    buyers: ['Automation and instrumentation builders', 'Sensor OEMs'],
    purchasePath: 'new-development',
    longTailKeywords: ['Titanium Sensor Brackets', 'Custom Titanium Sensor Mounting Bracket'],
    processNote:
      'Thin-sheet forms with a few features; sheet thickness and spring-back behaviour need to be reviewed.',
    riskNote:
      'Closely related to mounting brackets; an independent page risks overlapping with the P1 bracket entry.',
  },
  {
    slug: 'titanium-hinge-mounts',
    nameEn: 'Titanium Hinge Mounts',
    nameZh: '钛合金铰链座',
    familySlug: 'mounting-structural-components',
    attribute: 'custom-to-drawing',
    reviewStatus: 'review_required',
    priority: 'P3',
    seoAction: 'defer',
    geometryFeatures: [
      'Two side lugs with a pin hole',
      'Mounting holes on both lugs',
      'Body thickness and fillet at the pin bore',
    ],
    buyers: ['Machinery makers', 'Special mechanism builders'],
    purchasePath: 'new-development',
    longTailKeywords: ['Titanium Hinge Mounts', 'Titanium Hinge Bracket to Drawing'],
    processNote:
      'Two-lug bodies with a pin bore — within 3/4-axis scope, with the pin bore position as the critical feature.',
    riskNote:
      'Pin-bore fit and hole position relative to the mounting face must be agreed before production.',
  },
  {
    slug: 'titanium-junction-box-housings',
    nameEn: 'Titanium Junction Box Housings',
    nameZh: '钛合金接线盒壳体',
    familySlug: 'blocks-housings-manifolds',
    attribute: 'custom-to-drawing',
    reviewStatus: 'review_required',
    priority: 'P3',
    seoAction: 'defer',
    geometryFeatures: [
      'Box body with a cover interface',
      'Sealing groove and mounting holes',
      'Cable entry and clearance features',
    ],
    buyers: ['Industrial equipment makers', 'Marine and offshore equipment makers'],
    purchasePath: 'oem-repeat',
    longTailKeywords: ['Titanium Junction Box Housings', 'Titanium Junction Enclosure to Drawing'],
    processNote:
      'Box bodies with a cover interface and cable entries stay inside a simple prismatic envelope.',
    riskNote:
      'Sealing-groove geometry and wall thickness around entries need a review before a tolerance commitment.',
  },
  {
    slug: 'titanium-actuator-mounts',
    nameEn: 'Titanium Actuator Mounts',
    nameZh: '钛合金阀门执行器支座',
    familySlug: 'blocks-housings-manifolds',
    attribute: 'custom-to-drawing',
    reviewStatus: 'review_required',
    priority: 'P3',
    seoAction: 'defer',
    geometryFeatures: [
      'Regular block body with a mounting pattern',
      'Interface connection face with a locating feature',
      'Through holes and threaded holes for the actuator',
    ],
    buyers: ['Automation equipment makers', 'Valve system integrators'],
    purchasePath: 'oem-repeat',
    longTailKeywords: ['Titanium Actuator Mounts', 'Titanium Valve Actuator Mounting Block'],
    processNote:
      'Regular block geometry with a hole system — a straightforward milling case.',
    riskNote:
      'Interface compatibility with the actuator must be confirmed against the existing equipment.',
  },
  {
    slug: 'titanium-instrument-enclosures',
    nameEn: 'Titanium Instrument Enclosures',
    nameZh: '钛合金仪器保护壳',
    familySlug: 'blocks-housings-manifolds',
    attribute: 'custom-to-drawing',
    reviewStatus: 'review_required',
    priority: 'P3',
    seoAction: 'defer',
    geometryFeatures: [
      'Regular outer form with a shallow cavity',
      'Mounting faces and interface holes',
      'Cover interface and fastener pattern',
    ],
    buyers: ['Instrument makers', 'R&D prototype teams'],
    purchasePath: 'new-development',
    longTailKeywords: ['Titanium Instrument Enclosures', 'Titanium Instrument Protection Housing'],
    processNote:
      'Shallow-cavity bodies with regular outer faces are within 3/4-axis scope.',
    riskNote:
      'Overlaps with sensor housings; the distinction between the two categories needs to be defined before either gets a dedicated page.',
  },
  {
    slug: 'titanium-mating-flanges',
    nameEn: 'Titanium Mating Flanges',
    nameZh: '钛合金连接法兰',
    familySlug: 'flanges-plates-interfaces',
    attribute: 'standard-interface-custom',
    reviewStatus: 'review_required',
    priority: 'P3',
    seoAction: 'defer',
    geometryFeatures: [
      'Flange face with a machined bolt system',
      'Connection structure and locating features',
      'Sealing face finish to the drawing callout',
    ],
    buyers: ['Equipment makers', 'Replacement part buyers'],
    purchasePath: 'oem-repeat',
    longTailKeywords: ['Titanium Mating Flanges', 'Titanium Mating Flange to Drawing'],
    processNote:
      'Flange faces and hole systems are machinable, but the interface must be confirmed against the mating part.',
    riskNote:
      'Overlaps with mounting and adapter flanges; a dedicated page needs a clearly distinct interface and search intent.',
  },
  {
    slug: 'titanium-pipe-mounting-plates',
    nameEn: 'Titanium Pipe Mounting Plates',
    nameZh: '钛合金管路安装板',
    familySlug: 'flanges-plates-interfaces',
    attribute: 'custom-to-drawing',
    reviewStatus: 'review_required',
    priority: 'P3',
    seoAction: 'defer',
    geometryFeatures: [
      'Flat plate with a pipe clamp hole pattern',
      'Mounting hole system for the skid or support structure',
      'Clearance features around the pipe line',
    ],
    buyers: ['Pipe installation contractors', 'Equipment maintenance teams'],
    purchasePath: 'maintenance-replacement',
    longTailKeywords: ['Titanium Pipe Mounting Plates', 'Titanium Pipe Support Plate to Drawing'],
    processNote:
      'Plate geometry with two hole patterns — within 3/4-axis scope.',
    riskNote:
      'Clamp-hole spacing must match the pipe line it supports; fit is confirmed from the drawing rather than from a standard.',
  },
  {
    slug: 'titanium-gripper-adapter-blocks',
    nameEn: 'Titanium Gripper Adapter Blocks',
    nameZh: '钛合金夹持转接块',
    familySlug: 'tooling-fixtures-end-effectors',
    attribute: 'custom-to-drawing',
    reviewStatus: 'review_required',
    priority: 'P3',
    seoAction: 'defer',
    geometryFeatures: [
      'Regular block with an interface on each side',
      'Mounting hole system on both faces',
      'Locating features for repeatable gripper alignment',
    ],
    buyers: ['Robot and gripper integrators', 'Special equipment makers'],
    purchasePath: 'oem-repeat',
    longTailKeywords: ['Titanium Gripper Adapter Blocks', 'Titanium Gripper Adapter Block to Drawing'],
    processNote:
      'Two-sided block geometry — 3-axis with a second setup, or 4-axis indexing.',
    riskNote:
      'Both interfaces must be verified against the gripper body and the workpiece fixture.',
  },
  {
    slug: 'titanium-lightweight-tooling-components',
    nameEn: 'Titanium Lightweight Tooling Components',
    nameZh: '钛合金轻量化工装部件',
    familySlug: 'tooling-fixtures-end-effectors',
    attribute: 'custom-to-drawing',
    reviewStatus: 'review_required',
    priority: 'P3',
    seoAction: 'defer',
    geometryFeatures: [
      'Plate and regular block forms',
      'Shallow weight-reduction pockets',
      'Machined locating and mounting features retained around the pockets',
    ],
    buyers: ['High-end equipment makers', 'R&D project teams'],
    purchasePath: 'new-development',
    longTailKeywords: [
      'Titanium Lightweight Tooling Components',
      'Lightweight Titanium Fixture Parts',
    ],
    processNote:
      'Shallow pockets in flat or block forms are within 3/4-axis scope.',
    riskNote:
      'Weight reduction only justifies titanium where the customer confirms a mass target; a pocket that weakens a locating face must be reviewed.',
  },
  {
    slug: 'titanium-mechanical-adapters',
    nameEn: 'Titanium Mechanical Adapters',
    nameZh: '钛合金机械转接座',
    familySlug: 'custom-mechanical-components',
    attribute: 'custom-to-drawing',
    reviewStatus: 'review_required',
    priority: 'P3',
    seoAction: 'defer',
    geometryFeatures: [
      'Multi-face mounting structure with steps',
      'Hole systems referencing more than one interface',
      'Datum features for assembly alignment',
    ],
    buyers: ['Equipment retrofit buyers', 'Mechanical system integrators'],
    purchasePath: 'new-development',
    longTailKeywords: ['Titanium Mechanical Adapters', 'Custom Titanium Mechanical Adapter to Drawing'],
    processNote:
      'Multi-face structures are handled by 4-axis indexing or repeat fixturing; complexity is judged per drawing.',
    riskNote:
      'Multi-face geometry with several hole systems requires a per-drawing manufacturability check before a route is committed.',
  },
  {
    slug: 'titanium-milled-linkage-shafts',
    nameEn: 'Titanium Milled-Linkage Shafts',
    nameZh: '钛合金带铣削特征的连接轴',
    familySlug: 'custom-mechanical-components',
    attribute: 'custom-to-drawing',
    reviewStatus: 'excluded',
    priority: 'P3',
    seoAction: 'defer',
    geometryFeatures: [
      'Shaft body with an end mounting face',
      'Transverse holes and milled slots',
      'Turned journal sections',
    ],
    buyers: ['Mechanical mechanism makers', 'Special equipment makers'],
    purchasePath: 'maintenance-replacement',
    longTailKeywords: ['Titanium Milled-Linkage Shafts', 'Titanium Linkage Shaft with Cross Holes'],
    processNote:
      'The shaft body is normally turned; milling is a secondary operation in the route.',
    riskNote:
      'Excluded from the product library for the same reason as titanium-milled-shafts — the turning share puts it outside the confirmed process route.',
  },
  {
    slug: 'titanium-linkage-components',
    nameEn: 'Titanium Linkage Components',
    nameZh: '钛合金机械连接件',
    familySlug: 'custom-mechanical-components',
    attribute: 'custom-to-drawing',
    reviewStatus: 'review_required',
    priority: 'P3',
    seoAction: 'defer',
    geometryFeatures: [
      'Regular block with lugs and pin holes',
      'Mounting holes and locating features',
      'Machined mating faces between connected members',
    ],
    buyers: ['Machinery makers', 'R&D project teams'],
    purchasePath: 'new-development',
    longTailKeywords: ['Titanium Linkage Components', 'Titanium Mechanical Linkage Parts to Drawing'],
    processNote:
      'Blocks, lugs and pin holes are standard milling features.',
    riskNote:
      'Pin-hole position relative to the mating faces governs assembly fit and must be agreed before production.',
  },
];

/** 询盘处理方式。 */
export type ScreeningAction = 'reject' | 'refer' | 'engineering-review';

/** 特征级排除规则 —— 询盘筛选用，不作为产品条目。 */
export interface ScreeningRule {
  /** 触发规则的产品或特征。 */
  item: string;
  /** 为什么不适合当前工艺边界。 */
  reason: string;
  /** 处理方式。 */
  action: ScreeningAction;
}

/**
 * 明确拒接、转介或需要工程评审的产品 / 特征。
 * 这张表是询盘筛选规则，而不只是网站上的免责声明。
 */
export const INQUIRY_SCREENING_RULES: ScreeningRule[] = [
  {
    item: 'Pure cylindrical shafts, stepped shafts and precision bushes',
    reason: 'The main operation is turning, usually with coaxiality, roundness and fit requirements.',
    action: 'refer',
  },
  {
    item: 'High-precision bearing bores',
    reason: 'Typically involve precision boring, grinding and strict fit tolerances.',
    action: 'reject',
  },
  {
    item: 'Complex spatial surfaces and closed impellers',
    reason: 'Require multi-axis simultaneous tool paths, special fixturing and dedicated inspection.',
    action: 'reject',
  },
  {
    item: 'Deep-cavity thin-wall parts deeper than three times the diameter',
    reason: 'Stiffness, chip evacuation, tool interference and distortion risk are high.',
    action: 'engineering-review',
  },
  {
    item: 'Cold-formed volume bolts',
    reason: 'The manufacturing process is cold heading and thread rolling, not CNC milling.',
    action: 'reject',
  },
  {
    item: 'Complex flow-channel parts requiring strict sealing',
    reason: 'Machining accuracy is not a guarantee of leak, flow or sealing performance.',
    action: 'engineering-review',
  },
  {
    item: 'High-precision thin-wall housings',
    reason: 'Prone to distortion; dimensional stability depends on machining sequence and fixtures.',
    action: 'engineering-review',
  },
  {
    item: 'Structural parts requiring special heat treatment or forging certification',
    reason: 'May exceed the material and process capability of the current supplier network.',
    action: 'engineering-review',
  },
];

/**
 * 标准件中的典型陷阱 —— 供页面文案与销售说明调用，
 * 避免把标准制造要求简化为"加工几个孔"。
 */
export const STANDARD_PART_PITFALLS: ScreeningRule[] = [
  {
    item: 'Standard bolts',
    reason:
      'Do not list standard hex-socket bolts as a core milling product. Side holes, special heads or non-standard structures can be taken as custom parts, but thread, heat treatment and strength class requirements must be confirmed.',
    action: 'engineering-review',
  },
  {
    item: 'Standard bushes',
    reason:
      'A standard size does not make a bush a milling product. Most cylindrical bushes are turned; only special structures with milled features may fit.',
    action: 'engineering-review',
  },
  {
    item: 'Standard flanges',
    reason:
      'Confirm the standard scope, material specification, pressure rating, manufacturing route and inspection requirements together. Hole pattern machining is only part of it.',
    action: 'engineering-review',
  },
  {
    item: 'Standard tolerance',
    reason:
      'General machining tolerance is not an unconditional guarantee on every dimension. Sealing faces, mating holes, datum dimensions and key position callouts are reviewed feature by feature.',
    action: 'engineering-review',
  },
];

/** 行业入口 —— 作为应用解决方案与关键词入口，而不是产品目录主干。 */
export interface IndustryEntry {
  /** 行业名称。 */
  industry: string;
  /** 值得切入的零件。 */
  parts: string;
  /** 典型采购场景。 */
  purchaseScenario: string;
  /** 长尾关键词方向。 */
  keywordDirection: string;
  /** 优先级。 */
  priority: 'high' | 'medium-high' | 'medium';
  /** 是否需要严格审查（材料规范、体系、追溯性等）。 */
  strictReview: boolean;
}

/**
 * 行业优先级。
 * 基于材料、零件几何与采购场景的适配度筛选，
 * 不是经过市场规模统计后的需求排名。
 */
export const INDUSTRY_PRIORITY: IndustryEntry[] = [
  {
    industry: 'Industrial automation',
    parts: 'Brackets, mounting bases, gripper fingers, locating blocks',
    purchaseScenario: 'Equipment integration, line retrofit, OEM repeat orders',
    keywordDirection: 'custom titanium automation parts; titanium robotic gripper fingers',
    priority: 'high',
    strictReview: false,
  },
  {
    industry: 'Special equipment and machinery manufacturing',
    parts: 'Mounting plates, adapter blocks, housings, manifolds',
    purchaseScenario: 'New equipment development, spare replacement, repeat production',
    keywordDirection: 'custom titanium machine components; titanium mounting brackets',
    priority: 'high',
    strictReview: false,
  },
  {
    industry: 'Industrial instruments and sensors',
    parts: 'Sensor housings, mounting bases, interface plates',
    purchaseScenario: 'R&D prototypes, small-volume OEM',
    keywordDirection: 'titanium sensor housing; titanium instrument mounting bracket',
    priority: 'high',
    strictReview: false,
  },
  {
    industry: 'Racing and high-performance machinery',
    parts: 'Adapter plates, mounting brackets, fixtures',
    purchaseScenario: 'Modification, prototype development, small repeat batches',
    keywordDirection: 'custom titanium adapter plate; titanium racing brackets',
    priority: 'medium-high',
    strictReview: false,
  },
  {
    industry: 'Marine and ship equipment',
    parts: 'Mounting bases, structural connections, interface plates',
    purchaseScenario: 'Corrosion-exposed equipment, maintenance replacement',
    keywordDirection: 'Grade 5 titanium marine mounting brackets; titanium marine components',
    priority: 'medium',
    strictReview: false,
  },
  {
    industry: 'Aerospace development',
    parts: 'Structural brackets, connection parts, mounting bases',
    purchaseScenario: 'Prototypes, ground testing, non-flight-critical parts',
    keywordDirection: 'Grade 5 titanium aerospace prototype brackets',
    priority: 'medium',
    strictReview: true,
  },
  {
    industry: 'Medical equipment',
    parts: 'Non-implant equipment housings, mounting bases, instrument parts',
    purchaseScenario: 'Equipment development, instrument OEM',
    keywordDirection: 'titanium medical equipment components; titanium instrument housings',
    priority: 'medium',
    strictReview: true,
  },
];

/** 采购路径 —— 判断订单价值与复购可能性。 */
export interface PurchasePathEntry {
  path: PurchasePath;
  /** 路径描述。 */
  description: string;
  /** 适合的候选产品。 */
  suitableProducts: string;
  /** 需要验证的关键问题。 */
  keyQuestions: string;
}

/**
 * 三类采购路径。
 * 轻资产 B2B 模式下，新项目研发与 OEM 配套值得优先验证。
 */
export const PURCHASE_PATHS: PurchasePathEntry[] = [
  {
    path: 'new-development',
    description: 'New project development → first sample → small batch.',
    suitableProducts: 'Brackets, adapter plates, sensor housings, gripper fingers',
    keyQuestions: 'Is there a drawing, a project stage and a follow-up purchasing plan?',
  },
  {
    path: 'oem-repeat',
    description: 'OEM equipment → repeat purchasing against the same drawing.',
    suitableProducts: 'Mounting blocks, manifold blocks, interface plates',
    keyQuestions:
      'Is there annual demand, repeat batches, and any supplier qualification requirement?',
  },
  {
    path: 'maintenance-replacement',
    description: 'Equipment maintenance → replacement of an existing part.',
    suitableProducts: 'Mounting flanges, adapter flanges, interface plates',
    keyQuestions:
      'Is the original drawing available, is the material specified, and is there an urgent delivery requirement?',
  },
];

/** 长尾关键词模板。 */
export interface KeywordTemplate {
  /** 模板名。 */
  pattern: string;
  /** 示例。 */
  example: string;
}

/**
 * 关键词组合模板 —— 不使用覆盖面过宽但采购意图不具体的通用词。
 */
export const KEYWORD_TEMPLATES: KeywordTemplate[] = [
  { pattern: 'Product + material', example: 'Grade 5 Titanium Mounting Brackets' },
  { pattern: 'Product + customisation', example: 'Custom Titanium Manifold Blocks' },
  { pattern: 'Product + process', example: 'CNC Milled Titanium Adapter Plates' },
  { pattern: 'Product + industry', example: 'Titanium Robotic Gripper Fingers' },
  {
    pattern: 'Product + procurement intent',
    example: 'Custom Grade 5 Titanium Parts to Drawing',
  },
  {
    pattern: 'Product + quantity',
    example: 'Low Volume Titanium CNC Machined Components',
  },
  {
    pattern: 'Product + interface',
    example: 'Custom Titanium Flanges to ASME B16.5 Interface',
  },
];

/** 按 slug 取产品。 */
export function getPartProduct(slug: string): PartProduct | undefined {
  return PART_PRODUCTS.find((product) => product.slug === slug);
}

/** 按 slug 取产品族。 */
export function getPartProductFamily(slug: string): PartProductFamily | undefined {
  return PART_PRODUCT_FAMILIES.find((family) => family.slug === slug);
}

/** 取某产品族下的全部产品。 */
export function getProductsByFamily(familySlug: string): PartProduct[] {
  return PART_PRODUCTS.filter((product) => product.familySlug === familySlug);
}

/** 按评审状态取产品。 */
export function getProductsByStatus(status: ReviewStatus): PartProduct[] {
  return PART_PRODUCTS.filter((product) => product.reviewStatus === status);
}

/** 取已可公开推广的产品（qualified）。 */
export function getQualifiedProducts(): PartProduct[] {
  return getProductsByStatus('qualified');
}

/**
 * 取值得建立独立页面的候选产品。
 * 仅按建站处理方式筛选，不代表已验证搜索量。
 */
export function getSeoCandidates(): PartProduct[] {
  return PART_PRODUCTS.filter((product) => product.seoAction !== 'defer');
}
