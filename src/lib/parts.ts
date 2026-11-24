/**
 * Part family data — 零件族 + 行业场景的数据源。
 *
 * 规则（沿用 capabilities.ts 的约定）：
 * - 这里只描述"零件族长什么样、用于什么场景"；
 *   公差、材料、后处理、批量、交期、检验文件一律从 CAPABILITIES 引用，
 *   不在本文重复数字，避免出现两套口径。
 * - 不出现价格、库存、SKU 编号、现货交期。
 * - "标准件"只作为参考结构呈现（referenceStructure），不作为目录条目。
 *
 * 本文件不 import capabilities.ts，避免与 capabilities.ts 相互引用。
 */

export interface PartFamily {
  /** URL slug，例如 titanium-flanges。 */
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

export const PART_FAMILIES: PartFamily[] = [
  {
    slug: 'titanium-flanges',
    name: 'Titanium Flanges & Fittings',
    shortDescription:
      'Raised-face and flat-face flanges, stepped and threaded fittings, custom profiles machined to drawing.',
    title: 'Titanium Flanges & Fittings',
    typicalFeatures: [
      'Raised-face and flat-face flange discs with customer-defined bolt-circle and bolt-hole patterns',
      'Stepped, threaded and socket-weld fittings with concentric bore steps',
      'Wall-thickness controlled bodies for pressure or vacuum service',
      'Non-standard OD / ID profiles machined to the drawing rather than adapted from a catalogue',
    ],
    referenceStructure: [
      'Raised-face flange with a full bolt circle',
      'Concentric stepped fitting with an external thread stub',
      'Flat-face sealing disc for thin-wall vessels',
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
  {
    slug: 'titanium-brackets',
    name: 'Titanium Brackets & Mounts',
    shortDescription:
      'Structural brackets, mounting plates, support components and fixture bases.',
    title: 'Titanium Brackets & Mounts',
    typicalFeatures: [
      'L-shaped, U-shaped and cantilever brackets with filleted stress-concentration corners',
      'Mounting plates with slots, counterbores and tapped holes',
      'Standoffs, spacers and clamping blocks with parallel machined faces',
      'Fixture bases and instrument mounting plates with datum references on the drawing',
    ],
    referenceStructure: [
      'Two-hole L-bracket with a relieved inside corner',
      'Rectangular mounting plate with a slotted adjustment row',
      'Stepped standoff with a counterbored fixing hole',
    ],
    industryScenarios: [
      'Industrial equipment: corrosion-exposed mounting of pumps, sensors and guarding',
      'Electroplating: racks, carriers and fixture supports with regular immersion',
      'Chemical processing: support hardware on skids and platforms',
      'Precision assemblies: low-mass mounts where inertia matters',
    ],
    repeatScenarios: [
      'Repeat builds of the same machine where bracket sets are ordered per unit',
      'Spare brackets replacing worn or corroded originals from archived drawings',
      'New equipment variants using an existing bracket as the basis for a modified version',
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
  {
    slug: 'titanium-housings',
    name: 'Titanium Housings & Covers',
    shortDescription: 'Enclosures, covers and simple cavities within 3/4-axis scope.',
    title: 'Titanium Housings & Covers',
    typicalFeatures: [
      'Open-face enclosures and shallow cavity housings machined from solid or plate stock',
      'Covers with bolt patterns, gasket grooves and machined sealing lands',
      'Sensor housings with port bosses, gland threads and stepped bores',
      'Cable-entry and clearance features that stay within a simple prismatic envelope',
    ],
    referenceStructure: [
      'Rectangular enclosure with a machined internal cavity and a bolt-flange rim',
      'Flat cover plate with a recessed seal groove and a bolt circle',
      'Sensor body with a stepped bore and a side port boss',
    ],
    industryScenarios: [
      'Chemical processing: wetted housings and covers in corrosive service',
      'Electroplating: tank covers, weir parts and sensor housings',
      'Instrumentation: enclosures protecting sensing elements',
      'Vacuum systems: cover plates with sealing lands',
    ],
    repeatScenarios: [
      'Serial equipment programmes where the same enclosure ships with every unit',
      'Replacement covers for housings whose original supplier has ceased production',
      'Variants with different port or cover configurations from an archived drawing',
    ],
    inspectionFocus: [
      'Cavity depth and floor flatness on open-face housings',
      'Sealing-land flatness and gasket-groove width on covers',
      'Thread and port-bore position, plus leak-relevant surfaces where the drawing defines them',
    ],
    toleranceNote:
      'Cavity geometry, cover flatness and port position drive the tolerance discussion; deep-cavity distortion is reviewed with you before production.',
    finishingNote:
      'Passivation is standard for wetted surfaces; anodizing is only proposed where a qualified supplier supports it.',
  },
  {
    slug: 'titanium-shafts-bushings',
    name: 'Titanium Shafts & Bushings',
    shortDescription: 'Shafts, bushes and sleeves with turned and milled features.',
    title: 'Titanium Shafts & Bushings',
    typicalFeatures: [
      'Stepped shafts with journals, shoulders, retaining-groove and undercut features',
      'Keyways, flats and threaded stubs combined with turned diameters',
      'Sleeves and bushes with press-fit, flanged or grooved ends',
      'Concentric features where turning and milling are combined in the same drawing',
    ],
    referenceStructure: [
      'Stepped shaft with a central journal and a smaller drive end',
      'Plain sleeve bush with a flanged end',
      'Grooved bush with an anti-rotation slot',
    ],
    industryScenarios: [
      'Process equipment: shafts running in corrosive media',
      'Electroplating: rollers, mandrels and wear parts on rotating assemblies',
      'Chemical processing: agitator and pump shaft components',
      'High-speed motion: reduced rotating mass compared with steel equivalents',
    ],
    repeatScenarios: [
      'Consumable replacement schedules — bushes and wear sleeves are re-ordered on wear intervals',
      'OEM spare-part programmes for shaft assemblies',
      'Match-set re-orders where parts from one assembly are produced together',
    ],
    inspectionFocus: [
      'Diameter and roundness at each step, measured at the callout stations',
      'Runout between the journal and the driven feature',
      'Bush bore diameter and press-fit surface finish',
    ],
    toleranceNote:
      'Roundness, step diameters and coaxiality are evaluated per feature; runout is confirmed against the datum scheme on your drawing.',
    finishingNote:
      'As-machined is common for wear parts; passivation or blasting is added when a surface specification is required.',
  },
  {
    slug: 'titanium-replacement-parts',
    name: 'Titanium Replacement Parts & Spares',
    shortDescription:
      'Re-machined or reverse-engineered parts made from existing drawings and samples.',
    title: 'Titanium Replacement Parts & Spares',
    typicalFeatures: [
      'Parts restored to the original drawing after wear, corrosion or mechanical damage',
      'Reverse-engineered components produced from a physical sample or a failed part',
      'Obsolete components reproduced when the original supplier or material data is unavailable',
      'Cross-checked against the worn sample so critical surfaces are reconstructed deliberately',
    ],
    referenceStructure: [
      'Worn component re-machined to the original drawing dimensions',
      'Sample-based reproduction with reconstructed features and callouts',
      'Obsolete part replaced by an updated revision with a documented difference list',
    ],
    industryScenarios: [
      'Plant maintenance: keeping equipment running without waiting for an original-equipment order',
      'Chemical processing: replacement of parts exposed to corrosive service',
      'Electroplating: submerged wear components replaced on schedule',
      'Legacy equipment: reviving assemblies whose drawings are long out of circulation',
    ],
    repeatScenarios: [
      'Scheduled spare replenishment against the archived drawing and order record',
      'Batch replacement of identical worn parts across a fleet of machines',
      'Ongoing re-order of a reverse-engineered part once the first article is approved',
    ],
    inspectionFocus: [
      'Comparison against the original drawing or sample, with deviations listed explicitly',
      'Dimensional report on the features that caused the original failure',
      'Material certificate matched to the original specification where it is still available',
    ],
    toleranceNote:
      'Tolerances are restored to the original drawing callouts; where the drawing is unavailable, we propose a tolerance scheme with you before quoting.',
    finishingNote:
      'Finishing follows the original specification. If the original process is no longer available, the closest supported alternative is confirmed in writing.',
  },
  {
    slug: 'titanium-oem-components',
    name: 'Titanium OEM Components',
    shortDescription:
      'Customer-specified components and small machined sub-assemblies for OEM equipment programmes.',
    title: 'Titanium OEM Components',
    typicalFeatures: [
      'Components defined by an OEM drawing and delivered against a drawing revision number',
      'Small machined sub-assemblies where several parts share a tolerance stack',
      'Matched sets produced together to keep interfaces consistent',
      'Interface features held to the values that matter to the assembled product',
    ],
    referenceStructure: [
      'Single machined component supplied against an OEM drawing revision',
      'Two- or three-part interface set machined to a shared tolerance stack',
      'Assembly-matched batch of identical components for one build slot',
    ],
    industryScenarios: [
      'Equipment manufacturers embedding titanium components in their own products',
      'Machine builders needing corrosion-resistant parts in a defined interface',
      'Process-equipment OEMs supplying spares under their own brand',
      'Instrument and fixture makers with low-volume, revision-controlled programmes',
    ],
    repeatScenarios: [
      'Scheduled call-off orders against a released drawing revision',
      'Revision changes handled through a documented difference list',
      'Repeat orders placed from the archived drawing and inspection record',
    ],
    inspectionFocus: [
      'Interface dimensions confirmed against the OEM drawing revision in force',
      'Dimensional report linked to the released revision number',
      'FAI on first production run, with the report archived for later call-offs',
    ],
    toleranceNote:
      'Tolerances follow the OEM drawing. Where several parts form one stack, the interface dimensions are agreed up front and reported individually.',
    finishingNote:
      'Finishing is specified per revision; passivation records are supplied where the surface treatment is part of the specification.',
  },
] as const;

export function getPartFamily(slug: string): PartFamily | undefined {
  return PART_FAMILIES.find((family) => family.slug === slug);
}
