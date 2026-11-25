/**
 * Part family data — 产品族页面层文案（五大产品族）。
 *
 * 规则（沿用 capabilities.ts 的约定）：
 * - 这里只描述"零件族长什么样、用于什么场景"；
 *   公差、材料、后处理、批量、交期、检验文件一律从 CAPABILITIES 引用，
 *   不在本文重复数字，避免出现两套口径。
 * - 不出现价格、库存、SKU 编号、现货交期。
 * - "标准件"只作为参考结构呈现（referenceStructure），不作为目录条目。
 * - 族清单（顺序、名称、定义）唯一来源是 src/lib/part-products.ts 的
 *   PART_PRODUCT_FAMILIES；本文件只补充页面级文案，避免两套口径。
 *
 * 本文件不 import capabilities.ts，避免与 capabilities.ts 相互引用。
 */

import { PART_PRODUCT_FAMILIES } from './part-products';

export interface PartFamily {
  /** URL slug，例如 mounting-structural-components。 */
  slug: string;
  /** 卡片与导航使用的名称。 */
  name: string;
  /** 一句话描述，用于卡片与 meta description。 */
  shortDescription: string;
  /** H1 标题。 */
  title: string;
  /** 典型几何与图纸特征。 */
  typicalFeatures: string[];
  /** 该族常见的参考结构（非库存件）。 */
  referenceStructure: string[];
  /** 适用行业场景。 */
  industryScenarios: string[];
  /** 与本族相关的重复采购场景。 */
  repeatScenarios: string[];
  /** 本族特有的检验关注点。 */
  inspectionFocus: string[];
  /** 本族特有的公差说明（不写死数字，只说明按哪些特征评估）。 */
  toleranceNote: string;
  /** 本族常见后处理的补充说明。 */
  finishingNote: string;
}

/** 页面级文案，按产品族 slug 索引。 */
const FAMILY_COPY: Record<
  string,
  Pick<
    PartFamily,
    | 'title'
    | 'typicalFeatures'
    | 'referenceStructure'
    | 'industryScenarios'
    | 'repeatScenarios'
    | 'inspectionFocus'
    | 'toleranceNote'
    | 'finishingNote'
  >
> = {
  'mounting-structural-components': {
    title: 'Titanium Mounting & Structural Components',
    typicalFeatures: [
      'L-shaped, U-shaped and cantilever brackets with filleted stress-concentration corners',
      'Mounting plates with slots, counterbores and tapped holes',
      'Adapter plates carrying two hole groups with different spacing on one body',
      'Standoffs, spacers and clamping blocks with parallel machined faces',
    ],
    referenceStructure: [
      'Two-hole L-bracket with a relieved inside corner',
      'Rectangular mounting plate with a slotted adjustment row',
      'Adapter plate with two interface hole groups and a relieved underside',
      'Stepped standoff with a counterbored fixing hole',
    ],
    industryScenarios: [
      'Industrial automation: mounting bases and retrofit adapter plates for existing equipment',
      'Electroplating: racks, carriers and fixture supports with regular immersion',
      'Chemical processing: support hardware on skids and platforms',
      'Precision assemblies: low-mass mounts where inertia matters',
    ],
    repeatScenarios: [
      'Repeat builds of the same machine where bracket sets are ordered per unit',
      'Spare brackets replacing worn or corroded originals from archived drawings',
      'Retrofit programmes where one adapter plate bridges two different interfaces',
    ],
    inspectionFocus: [
      'Hole-pattern position relative to the datum features called out on the drawing',
      'Flatness of the mounting face and parallelism of opposed faces',
      'Tap condition check on threaded holes where specified',
    ],
    toleranceNote:
      'Hole position, mounting-face flatness and corner radii are the features usually held to the tightest callouts; everything is confirmed per feature.',
    finishingNote:
      'Bead blasting is typical before cosmetic finishing; passivation is added where the part sees a corrosive atmosphere.',
  },

  'blocks-housings-manifolds': {
    title: 'Titanium Blocks, Housings & Manifolds',
    typicalFeatures: [
      'Manifold blocks with multi-direction drilled ports, cross-drilled channels and sealing faces',
      'Open-face enclosures and shallow cavity housings machined from solid or plate stock',
      'Covers with bolt patterns, gasket grooves and machined sealing lands',
      'Sensor housings with port bosses, gland threads and stepped bores',
    ],
    referenceStructure: [
      'Rectangular enclosure with a machined internal cavity and a bolt-flange rim',
      'Flat cover plate with a recessed seal groove and a bolt circle',
      'Sensor body with a stepped bore and a side port boss',
      'Block manifold with threaded ports on two faces',
    ],
    industryScenarios: [
      'Chemical processing: wetted housings and covers in corrosive service',
      'Electroplating: tank covers, weir parts and sensor housings',
      'Instrumentation: enclosures protecting sensing elements',
      'Fluid-handling equipment: manifold blocks feeding valves and actuators',
    ],
    repeatScenarios: [
      'Serial equipment programmes where the same enclosure ships with every unit',
      'Replacement covers for housings whose original supplier has ceased production',
      'Scheduled call-off orders for manifold blocks against a released revision',
    ],
    inspectionFocus: [
      'Cavity depth and floor flatness on open-face housings',
      'Sealing-land flatness and gasket-groove width on covers',
      'Port-bore position, thread and bore concentricity, plus leak-relevant surfaces where the drawing defines them',
    ],
    toleranceNote:
      'Cavity geometry, cover flatness and port position drive the tolerance discussion; deep-cavity distortion is reviewed with you before production.',
    finishingNote:
      'Passivation is standard for wetted surfaces; anodizing is only proposed where a qualified supplier supports it.',
  },
  'flanges-plates-interfaces': {
    title: 'Titanium Flanges, Plates & Interfaces',
    typicalFeatures: [
      'Raised-face and flat-face flange discs with customer-defined bolt-circle and bolt-hole patterns',
      'Blind flanges with a machined sealing face and a referenced standard interface',
      'Interface plates with positioning, mounting and threaded holes',
      'Stepped, threaded and socket-weld fittings with concentric bore steps',
    ],
    referenceStructure: [
      'Raised-face flange with a full bolt circle',
      'Flat-face sealing disc for thin-wall vessels',
      'Interface plate with a machined datum face and threaded holes',
      'Concentric stepped fitting with an external thread stub',
    ],
    industryScenarios: [
      'Chemical processing: pipe connection hardware exposed to aggressive media',
      'Electroplating equipment: tank and rack fittings with immersion exposure',
      'Vacuum and laboratory hardware: leak-relevant sealing faces',
      'Water treatment: replaceable connection parts on skid-built systems',
    ],
    repeatScenarios: [
      'OEM equipment series with the same flange across multiple build slots',
      'Spare replacement of worn sealing faces and damaged bolt patterns',
      'Project variants with different pressure ratings derived from an archived drawing',
    ],
    inspectionFocus: [
      'Bolt-circle position and sealing-face flatness reported per drawing',
      'Thread and bore concentricity on stepped fittings',
      'Passivation record when the surface is passivated after machining',
    ],
    toleranceNote:
      'Sealing-face flatness, bolt-hole position and bore concentricity are evaluated feature by feature against your drawing.',
    finishingNote:
      'Passivation is commonly specified for wetted parts; bead blasting is used when a uniform matte surface is required before assembly.',
  },

  'tooling-fixtures-end-effectors': {
    title: 'Titanium Tooling, Fixtures & End Effectors',
    typicalFeatures: [
      'Gripper fingers with a machined gripping face, threaded holes and locating holes',
      'Locating blocks with datum faces, pockets and slots for repeatable workpiece location',
      'Fixture plates with clamping hole systems and shallow lightening pockets',
      'Robot mounting bases with hole patterns on multiple faces and a defined datum',
    ],
    referenceStructure: [
      'Elongated gripper finger with a stepped gripping face',
      'Locating block with a machined pocket and parallel datum faces',
      'Fixture plate with a clamping hole grid and a shallow pocket',
      'Robot base plate with a multi-face hole pattern',
    ],
    industryScenarios: [
      'Industrial automation: robot bases, gripper hardware and retrofit fixtures',
      'Fixture and jig builders: locating blocks and workpiece supports',
      'Equipment R&D teams: prototype tooling for pre-production builds',
      'Electroplating: carriers and racks used as handling tooling',
    ],
    repeatScenarios: [
      'Fixture orders repeated for each production run of the same workpiece',
      'OEM repeat orders for gripper and robot interface hardware',
      'Consumable-style re-orders of wear-facing tooling parts on a service interval',
    ],
    inspectionFocus: [
      'Datum-face flatness and parallelism of opposed faces',
      'Hole-pattern position relative to the drawing datums',
      'Gripping-face position and edge condition on end-effectors',
    ],
    toleranceNote:
      'Locating and gripping features are evaluated against the drawing callouts; tolerance on the wear-facing surface is confirmed per application.',
    finishingNote:
      'As-machined is common for tooling parts; passivation or blasting is added when a surface specification is required.',
  },
  'custom-mechanical-components': {
    title: 'Titanium Custom & OEM Mechanical Components',
    typicalFeatures: [
      'Components defined by an OEM drawing and delivered against a drawing revision number',
      'Small machined sub-assemblies where several parts share a tolerance stack',
      'Reverse-engineered or obsolete parts reproduced from an archived drawing or a worn sample',
      'Mechanical adapters and linkage blocks with lugs and pin features',
    ],
    referenceStructure: [
      'Single machined component supplied against an OEM drawing revision',
      'Two- or three-part interface set machined to a shared tolerance stack',
      'Worn component re-machined to the original drawing dimensions',
      'Block with mounting lugs and a pin hole',
    ],
    industryScenarios: [
      'Equipment manufacturers embedding titanium components in their own products',
      'Plant maintenance: keeping equipment running without waiting for an original-equipment order',
      'Process-equipment OEMs supplying spares under their own brand',
      'Machine builders needing corrosion-resistant parts in a defined interface',
    ],
    repeatScenarios: [
      'Scheduled call-off orders against a released drawing revision',
      'Revision changes handled through a documented difference list',
      'Batch replacement of identical worn parts across a fleet of machines',
    ],
    inspectionFocus: [
      'Interface dimensions confirmed against the OEM drawing revision in force',
      'Comparison against the original drawing or sample, with deviations listed explicitly',
      'FAI on first production run, with the report archived for later call-offs',
    ],
    toleranceNote:
      'Tolerances follow the OEM drawing. Where several parts form one stack, the interface dimensions are agreed up front and reported individually.',
    finishingNote:
      'Finishing is specified per revision; passivation records are supplied where the surface treatment is part of the specification.',
  },
};

export const PART_FAMILIES: PartFamily[] = PART_PRODUCT_FAMILIES.map((family) => {
  const copy = FAMILY_COPY[family.slug];
  return {
    slug: family.slug,
    name: family.name,
    shortDescription: family.description,
    title: copy.title,
    typicalFeatures: copy.typicalFeatures,
    referenceStructure: copy.referenceStructure,
    industryScenarios: copy.industryScenarios,
    repeatScenarios: copy.repeatScenarios,
    inspectionFocus: copy.inspectionFocus,
    toleranceNote: copy.toleranceNote,
    finishingNote: copy.finishingNote,
  };
});

export function getPartFamily(slug: string): PartFamily | undefined {
  return PART_FAMILIES.find((family) => family.slug === slug);
}

