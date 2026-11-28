/**
 * Industry profile data — 行业应用数据层（集群 B3）。
 *
 * 规则：
 * - 本文件只描述"服役环境与选型逻辑"：介质、失效模式、优先牌号、
 *   适配零件族与产品、检验关注点、后处理注意事项。
 * - 公差、批量、交期、检验文件一律从 CAPABILITIES 引用（页面层引用），
 *   本文件不 import capabilities.ts，避免相互引用。
 * - 不出现价格、库存、SKU 编号、现货交期、客户名称。
 * - relatedFamilySlugs / relatedProductSlugs / caseStudySlugs 必须与
 *   src/lib/parts.ts、src/lib/part-products.ts、src/lib/caseStudies.ts
 *   中的 slug 完全一致，否则链接会失效。
 */

export interface IndustryProfile {
  /** URL slug，例如 chemical-processing。 */
  slug: string;
  /** 卡片与导航名称。 */
  name: string;
  /** H1 标题。 */
  title: string;
  /** 一句话描述，用于卡片与 meta description。 */
  shortDescription: string;
  /** 服役环境概述：这套环境在挑战什么。 */
  serviceContext: string;
  /** 典型失效模式 —— 选型时真正要防的东西。 */
  failureModes: string[];
  /** 优先牌号 slug（按顺序）。 */
  priorityGradeSlugs: string[];
  /** 适配的零件族 slug。 */
  relatedFamilySlugs: string[];
  /** 适配的已建页产品 slug。 */
  relatedProductSlugs: string[];
  /** 检验关注点。 */
  inspectionFocus: string[];
  /** 后处理注意事项。 */
  finishingNotes: string[];
  /** 关联的匿名案例 slug。 */
  caseStudySlugs: string[];
}

export const INDUSTRY_PROFILES: IndustryProfile[] = [
  {
    slug: 'chemical-processing',
    name: 'Chemical Processing',
    title: 'Titanium Parts for Chemical Processing Equipment',
    shortDescription:
      'Wetted flanges, manifold blocks, housings and covers machined to drawing for chemical process skids and pipework.',
    serviceContext:
      'Chemical process equipment fails at the wetted boundary, not in the bulk material. The parts we machine for this industry are the ones that touch the medium: sealing faces, port bores, covers and cavity floors.',
    failureModes: [
      'Crevice corrosion at a bolted joint or a seal pocket that water cannot flush',
      'General wall thinning on a wetted component in aggressive acid service',
      'Leakage from a sealing face that lost flatness after machining or after a thermal cycle',
      'Contamination of the product stream from a material substituted without a certificate',
    ],
    priorityGradeSlugs: ['grade-7', 'grade-2', 'grade-5-ti-6al-4v'],
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
    inspectionFocus: [
      'Sealing-face flatness and the seal land width, reported per drawing',
      'Port-bore position, bore concentricity and thread condition',
      'Traceability of the material back to the 3.1 certificate for the delivered batch',
      'Passivation record where the surface was passivated after machining',
    ],
    finishingNotes: [
      'Passivation is the normal requirement on wetted surfaces',
      'Bead blasting before assembly where a uniform matte appearance is specified',
      'Any additional treatment is quoted separately and confirmed against the drawing revision',
    ],
    caseStudySlugs: ['titanium-flanges-chemical-processing', 'titanium-housings-chemical-processing'],
  },
  {
    slug: 'electroplating',
    name: 'Electroplating Equipment',
    title: 'Titanium Parts for Electroplating Equipment',
    shortDescription:
      'Immersed racks, carriers, brackets and covers machined to drawing for plating lines and anodising baths.',
    serviceContext:
      'Plating line hardware lives in the bath. It is attacked by the electrolyte, it has to carry current and mass through the tank, and it is handled wet on every shift.',
    failureModes: [
      'Bath contamination when a submerged component corrodes and dissolves into the electrolyte',
      'Rack contact points wearing or picking up plating deposit',
      'Corrosion of the fastener and support hardware that is not part of the wetted assembly',
      'Surface marking of the plated workpiece caused by a rough or contaminated carrier',
    ],
    priorityGradeSlugs: ['grade-2', 'grade-5-ti-6al-4v', 'grade-7'],
    relatedFamilySlugs: [
      'mounting-structural-components',
      'custom-mechanical-components',
      'blocks-housings-manifolds',
      'tooling-fixtures-end-effectors',
    ],
    relatedProductSlugs: [
      'titanium-mounting-brackets',
      'titanium-adapter-plates',
      'titanium-connector-housings',
      'titanium-fixture-locating-blocks',
    ],
    inspectionFocus: [
      'Contact and gripping surfaces checked for edge condition and burr removal',
      'Hole-pattern position relative to the datum features called out on the drawing',
      'Flatness of the mounting faces that carry the component in the bath',
      'Surface finish on any face that touches the plated workpiece',
    ],
    finishingNotes: [
      'Bead blasting is common to reach an even matte surface that will not hold deposits in the corners',
      'Passivation where the part is used as a wetted support',
      'Anodizing is proposed only where a qualified supplier supports it for the grade',
    ],
    caseStudySlugs: ['titanium-brackets-electroplating', 'titanium-shafts-bushings-electroplating'],
  },
  {
    slug: 'industrial-automation',
    name: 'Industrial Automation & Robotics',
    title: 'Titanium Parts for Industrial Automation',
    shortDescription:
      'Lightweight robot bases, gripper hardware, locating blocks and brackets machined to drawing for automation cells and machine builders.',
    serviceContext:
      'Automation hardware is judged on three things at once: it has to hold position, it has to keep the moving mass low, and it has to survive a coolant-splash environment that a plain steel part would not.',
    failureModes: [
      'Fatigue starting at a fillet or a stress-concentration corner at the mounting face',
      'Thread wear in a repeatedly fastened interface',
      'Mass and inertia exceeding what the robot payload and the cell cycle can carry',
      'Galling or crevice corrosion where the part is clamped against an aluminium frame',
    ],
    priorityGradeSlugs: ['grade-5-ti-6al-4v', 'grade-9', 'grade-2'],
    relatedFamilySlugs: [
      'tooling-fixtures-end-effectors',
      'mounting-structural-components',
      'custom-mechanical-components',
    ],
    relatedProductSlugs: [
      'titanium-robot-mounting-bases',
      'titanium-fixture-locating-blocks',
      'titanium-adapter-plates',
      'titanium-mounting-brackets',
      'titanium-connector-housings',
    ],
    inspectionFocus: [
      'Datum-face flatness and parallelism of the opposed faces that locate the part',
      'Hole-pattern position relative to the drawing datums, and bolt-circle position on robot bases',
      'Edge and burr condition on gripping faces and on any surface facing a moving tool',
      'Mass-critical dimensions where a weight budget applies to the assembly',
    ],
    finishingNotes: [
      'As-machined is common for tooling and end-effector parts',
      'Bead blasting to take the stress-raising sharpness off a machined edge where fatigue matters',
      'Passivation where the part is exposed to coolant or a humid environment',
    ],
    caseStudySlugs: ['titanium-oem-components-equipment-builder'],
  },
];

/** 按 slug 取行业。 */
export function getIndustryProfile(slug: string): IndustryProfile | undefined {
  return INDUSTRY_PROFILES.find((industry) => industry.slug === slug);
}
