/**
 * Titanium grade data — 钛材牌号数据层（集群 B2）。
 *
 * 规则：
 * - 本文件只描述"材料本身的属性与选型逻辑"：成分、力学性能区间、
 *   耐蚀表现、适用场景、加工注意事项、后处理注意事项。
 * - 公差、批量、交期、检验文件一律从 CAPABILITIES 引用（页面层引用），
 *   本文件不 import capabilities.ts，避免与 capabilities.ts 相互引用。
 * - 不出现价格、库存、SKU 编号、现货交期。
 * - 力学性能为 ASTM B348 规定的室温最小值，属材料标准常数，
 *   不是 Titolum 的能力承诺 —— 页面必须按"标准最小值"表述。
 * - relatedFamilySlugs / relatedProductSlugs 必须与 src/lib/parts.ts、
 *   src/lib/part-products.ts 中的 slug 完全一致，否则链接会失效。
 */

export interface TitaniumGrade {
  /** URL slug，例如 grade-5-ti-6al-4v。 */
  slug: string;
  /** 卡片与导航名称。 */
  name: string;
  /** 标准牌号标注。 */
  designation: string;
  /** H1 标题。 */
  title: string;
  /** 一句话描述，用于卡片与 meta description。 */
  shortDescription: string;
  /** 合金成分说明。 */
  composition: string;
  /** 室温力学性能最小值（ASTM B348 口径）。 */
  mechanical: {
    tensile: string;
    yield: string;
    density: string;
  };
  /** 耐蚀表现。 */
  corrosion: string[];
  /** 适用场景。 */
  bestFor: string[];
  /** 加工注意事项。 */
  machiningNotes: string[];
  /** 后处理注意事项。 */
  finishingNotes: string[];
  /** 该牌号适配的零件族 slug。 */
  relatedFamilySlugs: string[];
  /** 该牌号适配的已建页产品 slug。 */
  relatedProductSlugs: string[];
}

export const TITANIUM_GRADES: TitaniumGrade[] = [
  {
    slug: 'grade-2',
    name: 'Grade 2',
    designation: 'ASTM B348 Grade 2',
    title: 'Grade 2 Titanium CNC Machined Parts',
    shortDescription:
      'Commercially pure titanium: the most formable grade, with excellent corrosion resistance in mildly aggressive media.',
    composition:
      'Commercially pure titanium with no intentional alloying addition. Carbon, iron, nitrogen and oxygen stay at the low levels the standard allows.',
    mechanical: {
      tensile: '345 MPa min (tensile strength)',
      yield: '275 MPa min (yield strength)',
      density: '4.51 g/cm³',
    },
    corrosion: [
      'Excellent resistance to mild oxidising media, seawater and chloride-bearing environments',
      'Resists many acids better than stainless grades, but is not the choice for reducing acids at elevated temperature',
      'Unaffected by ordinary handling and atmospheric exposure; no sacrificial protection needed',
    ],
    bestFor: [
      'Chemical processing wetted parts that are not temperature-critical',
      'Tank covers, weir parts and sensor housings in corrosive service',
      'Electroplating racks, carriers and handling hardware',
      'Parts where the drawing calls for a ductile, easily machined material',
    ],
    machiningNotes: [
      'Commercially pure titanium gummy-chips rather than chips sharply — keep the cutting edge sharp and the feed positive',
      'Low thermal conductivity concentrates heat at the edge: use generous flood coolant and avoid a dwell position',
      'Work-hardens quickly at a stopped cut, so keep the tool moving and re-cut cleanly rather than rubbing the surface',
      'Clamps can mark a soft surface — support the part along a finished face or use soft jaws',
    ],
    finishingNotes: [
      'Passivation after machining restores the oxide layer disturbed by the cutting process',
      'Bead blasting with glass or ceramic media gives a uniform matte surface without iron contamination',
      'Anodizing is proposed only where a qualified supplier supports it for this grade',
    ],
    relatedFamilySlugs: [
      'blocks-housings-manifolds',
      'flanges-plates-interfaces',
      'mounting-structural-components',
    ],
    relatedProductSlugs: [
      'titanium-blind-flanges',
      'titanium-manifold-blocks',
      'titanium-sensor-housings',
      'titanium-adapter-flanges',
    ],
  },
  {
    slug: 'grade-5-ti-6al-4v',
    name: 'Grade 5 (Ti-6Al-4V)',
    designation: 'ASTM B348 Grade 5 / AMS 4928',
    title: 'Grade 5 / Ti-6Al-4V Titanium CNC Machined Parts',
    shortDescription:
      'The workhorse titanium alloy: high specific strength, good corrosion resistance, and the default choice for structural titanium parts.',
    composition:
      'Titanium alloyed with about 6% aluminium and 4% vanadium, in the alpha-beta two-phase structure that gives Ti-6Al-4V its strength.',
    mechanical: {
      tensile: '895 MPa min (tensile strength)',
      yield: '830 MPa min (yield strength)',
      density: '4.43 g/cm³',
    },
    corrosion: [
      'Good resistance to seawater, chloride solutions and mild oxidising media',
      'Stronger than Grade 2, so a thinner or smaller section can carry the same load',
      'Not the preferred grade for hot reducing acids — crevice corrosion resistance improves with Grade 7',
    ],
    bestFor: [
      'Structural and mounting components where stiffness and low mass both matter',
      'Robot and machine interface hardware',
      'Tooling, fixtures and end effector parts subject to repeated loading',
      'The general default grade when a drawing does not force a specific alloy',
    ],
    machiningNotes: [
      'Higher cutting forces and faster tool wear than Grade 2 — reduce speed, keep the feed constant and watch the edge condition',
      'Low thermal conductivity drives heat into the cutting edge: use flood coolant, not a low-volume stream',
      'The alloy is springy, so thin-walled parts deflect during the cut — plan the machining sequence and the fixturing around that',
      'Report any downstream electroplating or pickling in the route to the drawing owner before production starts',
    ],
    finishingNotes: [
      'Passivation is standard for wetted or chemically exposed parts',
      'Bead blasting before cosmetic finishing, using non-ferrous media only',
      'Anodizing is proposed only where a qualified supplier supports it for this grade',
    ],
    relatedFamilySlugs: [
      'mounting-structural-components',
      'tooling-fixtures-end-effectors',
      'custom-mechanical-components',
      'flanges-plates-interfaces',
    ],
    relatedProductSlugs: [
      'titanium-mounting-brackets',
      'titanium-adapter-plates',
      'titanium-robot-mounting-bases',
      'titanium-fixture-locating-blocks',
      'titanium-mounting-flanges',
      'titanium-connector-housings',
    ],
  },
  {
    slug: 'grade-7',
    name: 'Grade 7',
    designation: 'ASTM B348 Grade 7',
    title: 'Grade 7 Titanium CNC Machined Parts',
    shortDescription:
      'Ti-6Al-4V with niobium: the crevice-corrosion upgrade used where reducing acids attack standard Grade 5.',
    composition:
      'The Grade 5 alpha-beta structure alloyed with a small niobium addition, which raises the crevice-corrosion resistance.',
    mechanical: {
      tensile: '790 MPa min (tensile strength)',
      yield: '740 MPa min (yield strength)',
      density: '4.43 g/cm³',
    },
    corrosion: [
      'Materially better crevice-corrosion resistance than Grade 5 in reducing acids such as hydrochloric and sulphuric acid',
      'The usual engineering answer to a Grade 5 part that failed in a reducing acid environment',
      'Retains the strength class of Ti-6Al-4V, so the design does not have to be re-sized',
    ],
    bestFor: [
      'Chemical processing wetted parts in reducing acid service',
      'Manifolds, valve blocks and flange hardware on acid lines',
      'Sensor housings and covers in aggressive chemical environments',
      'Any Grade 5 application where the medium is reducing rather than oxidising',
    ],
    machiningNotes: [
      'Machinability is close to Grade 5 — same cutting discipline, same coolant requirement',
      'Alloying content makes the material stiffer to cut than Grade 2; do not raise the speed to compensate for tool life',
      'Sealing faces and port bores decide the outcome, so the machining sequence around them is agreed at review stage',
    ],
    finishingNotes: [
      'Passivation is the normal surface requirement for wetted parts in this grade',
      'Bead blasting where a uniform matte appearance is wanted before assembly',
      'Any surface treatment is confirmed against the drawing revision before production',
    ],
    relatedFamilySlugs: [
      'flanges-plates-interfaces',
      'blocks-housings-manifolds',
      'custom-mechanical-components',
    ],
    relatedProductSlugs: [
      'titanium-blind-flanges',
      'titanium-adapter-flanges',
      'titanium-manifold-blocks',
      'titanium-sensor-housings',
      'titanium-interface-plates',
    ],
  },
  {
    slug: 'grade-9',
    name: 'Grade 9',
    designation: 'ASTM B348 Grade 9 (Ti-3Al-2.5V)',
    title: 'Grade 9 / Ti-3Al-2.5V Titanium CNC Machined Parts',
    shortDescription:
      'A cold-formable alpha-beta alloy for pressure and spring applications: slightly stronger than Grade 5 with better formability.',
    composition:
      'Titanium alloyed with about 3% aluminium and 2.5% vanadium, an alpha-beta alloy selected where cold forming is part of the manufacturing route.',
    mechanical: {
      tensile: '900 MPa min (tensile strength)',
      yield: '830 MPa min (yield strength)',
      density: '4.48 g/cm³',
    },
    corrosion: [
      'Corrosion behaviour close to Grade 5 in oxidising and chloride environments',
      'Chosen for strength and formability, not as a corrosion upgrade',
      'Where reducing acids are involved, compare against Grade 7 before specifying',
    ],
    bestFor: [
      'Pressure-retaining and fluid-handling components machined from bar or plate',
      'Compact structural parts where maximum strength per unit mass is wanted',
      'Parts that are later cold-formed, bent or expanded in a downstream operation',
      'Robot and automation hardware with a strict mass budget',
    ],
    machiningNotes: [
      'Machinability is comparable to Grade 5 — expect the same heat load at the cutting edge and the same coolant discipline',
      'Being springy, thin-walled parts deflect during machining; the sequence and the support strategy are settled at engineering review',
      'Thread tapping needs a positive feed and a sharp tap; the material tends to smear rather than cut cleanly',
    ],
    finishingNotes: [
      'Passivation where the part is wetted or exposed to a corrosive atmosphere',
      'Bead blasting for a uniform matte surface before assembly',
      'Anodizing is proposed only where a qualified supplier supports it for this grade',
    ],
    relatedFamilySlugs: [
      'tooling-fixtures-end-effectors',
      'mounting-structural-components',
      'custom-mechanical-components',
    ],
    relatedProductSlugs: [
      'titanium-robot-mounting-bases',
      'titanium-mounting-brackets',
      'titanium-connector-housings',
      'titanium-fixture-locating-blocks',
    ],
  },
];

/** 按 slug 取牌号。 */
export function getTitaniumGrade(slug: string): TitaniumGrade | undefined {
  return TITANIUM_GRADES.find((grade) => grade.slug === slug);
}

/** 牌号选择对比矩阵 —— 供 /materials/ 枢纽页渲染。 */
export const GRADE_SELECTION_MATRIX = {
  columns: ['Grade', 'Tensile strength', 'Corrosion profile', 'Machining character', 'Typical use'] as const,
  rows: TITANIUM_GRADES.map((grade) => ({
    slug: grade.slug,
    name: grade.name,
    tensile: grade.mechanical.tensile,
    corrosion:
      grade.slug === 'grade-2'
        ? 'Mild media, seawater, chlorides'
        : grade.slug === 'grade-5-ti-6al-4v'
          ? 'General purpose, chlorides, seawater'
          : grade.slug === 'grade-7'
            ? 'Reducing acids, crevice-resistant'
            : 'General purpose, strength-led',
    machining:
      grade.slug === 'grade-2'
        ? 'Ductile, gummy, forgiving on the edge'
        : 'Higher cutting force, heat-sensitive',
    use: grade.bestFor[0],
  })),
} as const;
