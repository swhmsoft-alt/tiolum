/**
 * Case study data — 匿名案例（Illustrative examples）。
 *
 * 规则（项目硬性约束）：
 * - 不写客户名、工厂名、价格、库存、SKU。
 * - 未成交前 illustrative 必须为 true，页面上必须显示 "Illustrative example" 标签。
 * - 公差、批量、交期、后处理、检验文件等数字一律引用 CAPABILITIES，
 *   不在本文件重复，避免出现两套口径。
 * - 每个零件族一条案例，partFamily 字段与 src/lib/parts.ts 的 slug 对应，
 *   零件族页据此挂载 "Related Example" 链接。
 *
 * 本文件不 import capabilities.ts，避免与 capabilities.ts 相互引用。
 */

import { PART_FAMILIES } from './parts';

export interface CaseStudy {
  /** URL slug，例如 titanium-flanges-chemical-processing。 */
  slug: string;
  /** 卡片与 H1 使用的标题。 */
  title: string;
  /** 行业标签。 */
  industry: string;
  /** 关联的零件族 slug（来自 src/lib/parts.ts）。 */
  partFamily: string;
  /** 一句话摘要，用于卡片与 meta description。 */
  summary: string;
  /** 材料描述。 */
  material: string;
  /** 批量描述。 */
  batch: string;
  /** 后处理描述。 */
  finishing: string;
  /** 检验描述。 */
  inspection: string;
  /** 交期描述。 */
  leadTime: string;
  /** 重复采购场景。 */
  repeatScenario: string;
  /** 始终为 true：示例案例，未由真实成交交易背书。 */
  illustrative: true;
  /** 正文五段。 */
  sections: {
    industryContext: string;
    partAndDrawing: string;
    manufacturingDecision: string;
    inspectionAndDelivery: string;
    repeatOrder: string;
  };
}

/** 按零件族 slug 取案例（零件族页的 "Related Example" 用）。 */
export function getCaseStudyByFamily(partFamilySlug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((study) => study.partFamily === partFamilySlug);
}

/** 取零件族名称，零件族缺失时回退为 slug。 */
export function getPartFamilyName(partFamilySlug: string): string {
  return PART_FAMILIES.find((family) => family.slug === partFamilySlug)?.name ?? partFamilySlug;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'titanium-flanges-chemical-processing',
    title: 'Chemical Processing — Titanium Flanges & Fittings Example',
    industry: 'Chemical processing',
    partFamily: 'flanges-plates-interfaces',
    summary:
      'Sealing-face flanges and stepped fittings machined for a wetted pipe connection, with bolt-circle position and face flatness reported per drawing.',
    material: 'Titanium, grade quoted against the standard specified on the drawing',
    batch: 'Small to medium batch, multiple variants from one drawing set',
    finishing: 'Passivation for wetted surfaces; bead blasting where a uniform matte surface is required',
    inspection: 'FAI, dimensional report and material certificate 3.1',
    leadTime: 'Confirmed per order after drawing review',
    repeatScenario:
      'OEM equipment series using the same flange across multiple build slots, plus spare replacement of worn sealing faces from an archived drawing.',
    illustrative: true,
    sections: {
      industryContext:
        'Chemical processing skids run continuously in aggressive media, and a connection part that leaks or corrodes stops a line. Titanium is used where stainless cannot hold its passive film in the media, which makes sealing-face quality and bore concentricity the two features that decide whether the part survives its first service interval.',
      partAndDrawing:
        'The example covers a raised-face flange with a defined bolt circle and a stepped fitting with a concentric bore. The drawing called out bolt-hole position, sealing-face flatness, bore concentricity and a wall-thickness band that cannot be produced by turning alone. Non-standard OD and ID profiles were machined to the drawing rather than adapted from a catalogue.',
      manufacturingDecision:
        'The route stays inside 3-axis and 4-axis CNC milling: the flange disc is fixtured on the bolt circle, the raised face and sealing land are machined in the same setup, and the stepped fitting is milled from solid with the bore steps produced as concentric features. Features that cannot be reached in one clamping were flagged in the manufacturability review before quoting, together with a proposal to combine them into a single setup.',
      inspectionAndDelivery:
        'FAI was run on the first article, followed by a dimensional report listing each callout at its own station, and a material certificate 3.1 matched to the grade on the drawing. Parts were cleaned, passivated where specified, packed with the report set, and shipped with export documents; packing photos were sent before dispatch.',
      repeatOrder:
        'Repeat demand comes from the equipment series and from spare replacement. Because the drawing, the revision and the inspection record are archived on approval, a re-order is quoted from the same record, and project variants with different pressure ratings are handled as documented differences against the archived drawing.',
    },
  },
  {
    slug: 'titanium-brackets-electroplating',
    title: 'Electroplating Equipment — Titanium Brackets & Mounts Example',
    industry: 'Electroplating equipment',
    partFamily: 'mounting-structural-components',
    summary:
      'Rack and carrier support brackets machined for regular immersion, with hole-pattern position and mounting-face flatness measured against the drawing datums.',
    material: 'Titanium, grade quoted against the standard specified on the drawing',
    batch: 'Medium batch per line, re-ordered against the same drawing',
    finishing: 'Bead blasting before cosmetic finishing; passivation where the part sees a corrosive atmosphere',
    inspection: 'FAI, dimensional report and material certificate 3.1',
    leadTime: 'Confirmed per order after drawing review',
    repeatScenario:
      'Repeat builds of the same line where bracket sets are ordered per unit, and spare brackets replacing corroded originals from archived drawings.',
    illustrative: true,
    sections: {
      industryContext:
        'Electroplating lines expose racks, carriers and their supports to bath chemistry around the clock. Support brackets in this service are replaced on a schedule rather than on failure, so the drawing has to be reusable and the inspection has to be repeatable — the same drawing and the same measurement plan apply to every set.',
      partAndDrawing:
        'The example covers an L-shaped bracket with a relieved inside corner and a mounting plate with a slotted adjustment row. Hole-pattern position relative to the datum features called out on the drawing, mounting-face flatness, parallelism of opposed faces and tap condition on the threaded holes were the critical callouts; corner radii were specified to control stress concentration.',
      manufacturingDecision:
        'Both parts fit 3-axis and 4-axis CNC milling with the profile machined from plate or solid stock. Relieved inside corners were discussed during the manufacturability review so the tool can clear the radius without disturbing the adjacent face, and the tap drilling was sequenced after the hole-pattern position was finalised, since an out-of-position thread cannot be recovered.',
      inspectionAndDelivery:
        'The first article was inspected against the drawing datums, and the dimensional report covers hole-pattern position, face flatness and tap condition. A material certificate 3.1 ships with the batch, and finishing records follow the specified surface treatment. Packing photos and export documents were issued before shipment.',
      repeatOrder:
        'Scheduled replacement orders reference the archived drawing and the order record. Where a new equipment variant starts from an existing bracket, the change is handled as a documented difference list against that record rather than as a fresh description, which keeps the inspection plan comparable between batches.',
    },
  },
  {
    slug: 'titanium-housings-chemical-processing',
    title: 'Chemical Processing — Titanium Housings & Covers Example',
    industry: 'Chemical processing',
    partFamily: 'blocks-housings-manifolds',
    summary:
      'An open-face sensor housing and its cover, machined with a machined cavity, port bosses and sealing lands for corrosive wetted service.',
    material: 'Titanium, grade quoted against the standard specified on the drawing',
    batch: 'Prototype to medium batch across housing and cover variants',
    finishing: 'Passivation as standard for wetted surfaces',
    inspection: 'FAI, dimensional report and material certificate 3.1',
    leadTime: 'Confirmed per order after drawing review',
    repeatScenario:
      'Serial equipment programmes shipping the same enclosure with every unit, and replacement covers for housings whose original supplier has ceased production.',
    illustrative: true,
    sections: {
      industryContext:
        'Wetted housings and covers in chemical processing carry a double requirement: they must resist the media from inside and keep the process sealed from outside. That makes cavity geometry, port-bore position and the sealing lands the features that decide whether the assembly is fit for service, and why housings are rarely bought as an off-the-shelf item.',
      partAndDrawing:
        'The example covers an open-face housing with a machined internal cavity and a bolt-flange rim, plus a flat cover with a recessed gasket groove. The drawing defined cavity depth and floor flatness, sealing-land flatness, gasket-groove width, and port-bore position with stepped bores and gland threads on a side boss.',
      manufacturingDecision:
        'The parts sit inside 3-axis and 4-axis CNC milling scope. The cavity was machined as an open pocket with the floor held on a controlled step-down strategy, and the port boss was produced as a concentric feature in the same setup as the bore so the two stay aligned. Because deep cavities in titanium can move after material removal, the finishing allowance and stress-relief sequence were confirmed with you before production rather than decided at the machine.',
      inspectionAndDelivery:
        'FAI covered the cavity depth, floor flatness, sealing lands and port position, and the dimensional report lists each characteristic with its own measurement method. The material certificate 3.1 and the passivation record ship with the parts, and packing photos plus export documents were provided before dispatch.',
      repeatOrder:
        'Every unit of the equipment programme ships with the same housing, so repeat orders are placed against the archived drawing and the released inspection record. Where a cover is needed for a unit whose original supplier has stopped, the replacement is produced from the archived drawing and any difference against the original part is listed explicitly.',
    },
  },
  {
    slug: 'titanium-shafts-bushings-electroplating',
    title: 'Electroplating Equipment — Titanium Shafts & Bushings Example',
    industry: 'Electroplating equipment',
    partFamily: 'custom-mechanical-components',
    summary:
      'A stepped shaft with journals and a wear sleeve bush, machined for rotating assemblies, with diameter, roundness and runout reported at the callout stations.',
    material: 'Titanium, grade quoted against the standard specified on the drawing',
    batch: 'Consumable batch on a wear-interval schedule',
    finishing: 'As-machined for wear parts; passivation or blasting added where the drawing requires it',
    inspection: 'FAI, dimensional report and material certificate 3.1',
    leadTime: 'Confirmed per order after drawing review',
    repeatScenario:
      'Bushes and wear sleeves re-ordered on wear intervals, and match-set re-orders where the parts of one assembly are produced together.',
    illustrative: true,
    sections: {
      industryContext:
        'Rotating assemblies in electroplating lines run continuously in bath chemistry, and their wear components are replaced on a fixed interval rather than on failure. The shaft must therefore stay dimensionally stable in service, and the bushing must keep its bore diameter and press-fit surface intact for the whole interval.',
      partAndDrawing:
        'The example covers a stepped shaft with a central journal, a smaller drive end, a retaining groove and a keyway, plus a plain sleeve bush with a flanged end. The drawing called out diameter and roundness at each step at the named stations, runout between the journal and the driven feature, and bush bore diameter with the press-fit surface finish.',
      manufacturingDecision:
        'Turning and milling were combined within the 3-axis and 4-axis milling route: the turned diameters and the keyway were produced in the same setup sequence so the coaxial features stay referenced to one datum. The journal was finished in a separate light cut to control roundness, and the groove was left with the stock removal the drawing tolerates, so the shaft does not need a second straightening operation after machining.',
      inspectionAndDelivery:
        'FAI was carried out on the first article, with the dimensional report giving diameter and roundness at every callout station and runout against the datum scheme. The material certificate 3.1 and the finishing record were supplied with the batch, and the parts were cleaned and packed with the report set before export.',
      repeatOrder:
        'Wear parts are ordered on a schedule against the archived drawing and order record, so the same journal and bore dimensions are reproduced each time. Where several parts from one assembly are replaced together, they are produced in the same batch and reported as a set to keep the interfaces consistent.',
    },
  },
  {
    slug: 'titanium-replacement-parts-plant-maintenance',
    title: 'Plant Maintenance — Titanium Replacement Parts & Spares Example',
    industry: 'Industrial equipment maintenance',
    partFamily: 'custom-mechanical-components',
    summary:
      'An obsolete wetted component reproduced from a physical sample, with reconstructed features and a documented deviation list against the worn original.',
    material: 'Titanium, grade quoted against the standard specified on the drawing',
    batch: 'Single replacement, then re-order once the first article is approved',
    finishing: 'Follows the original specification; closest supported alternative confirmed in writing',
    inspection: 'FAI, dimensional report and material certificate 3.1',
    leadTime: 'Confirmed per order after drawing review',
    repeatScenario:
      'Batch replacement of identical worn parts across a fleet of machines, and ongoing re-orders of the reverse-engineered part once the first article is approved.',
    illustrative: true,
    sections: {
      industryContext:
        'Maintenance teams cannot wait for an original-equipment order when a line is down, and drawings for older equipment are frequently out of circulation. Reproducing a part from the worn sample or from an archived drawing keeps the machine running and, when the original part is recovered, gives a reference for checking the replacement.',
      partAndDrawing:
        'The example covers a wetted component whose original drawing was unavailable, supplied as a physical sample with wear on the sealing and bore features. Features were reconstructed deliberately: the worn surfaces were measured and restored to the original callouts where the pattern was still readable, and the reconstruction was confirmed against the sample before quoting.',
      manufacturingDecision:
        'The part was machined to the reconstructed dimensions within the 3-axis and 4-axis milling route, and the drawing was written as a new revision with the recovered features called out and the assumed ones marked. Where the original process was no longer available, the closest supported alternative was confirmed in writing before production rather than substituted silently.',
      inspectionAndDelivery:
        'The first article was inspected against the reconstructed drawing and compared with the original sample, and every deviation was listed explicitly in the dimensional report so the customer could judge it. The material certificate 3.1 was supplied, matching the original specification where it was still available, and packing photos with export documents were issued before shipment.',
      repeatOrder:
        'Once the first article was approved, the same part was re-ordered against the archived drawing and inspection record. For a fleet of identical machines, the same batch replaces the worn parts across the fleet, which keeps the reported dimensions consistent between units.',
    },
  },
  {
    slug: 'titanium-oem-components-equipment-builder',
    title: 'OEM Equipment Builder — Titanium OEM Components Example',
    industry: 'OEM equipment builders',
    partFamily: 'custom-mechanical-components',
    summary:
      'A revision-controlled OEM component and a two-part interface set, supplied against the released drawing revision with the dimensional report linked to it.',
    material: 'Titanium, grade quoted against the standard specified on the drawing',
    batch: 'Scheduled call-off orders against a released drawing revision',
    finishing: 'Specified per revision; passivation records supplied where the treatment is part of the specification',
    inspection: 'FAI on the first production run, dimensional report linked to the revision, material certificate 3.1',
    leadTime: 'Confirmed per order after drawing review',
    repeatScenario:
      'Call-off orders against a released revision, revision changes handled through a documented difference list, and repeat orders placed from the archived drawing and inspection record.',
    illustrative: true,
    sections: {
      industryContext:
        'An equipment manufacturer embedding titanium components in its own product carries a different burden from a one-off buyer: the part is shipped under the OEM brand, so the drawing revision, the interface dimensions and the inspection evidence have to stay traceable for the life of the product.',
      partAndDrawing:
        'The example covers a single component supplied against an OEM drawing revision and a two-part interface set sharing one tolerance stack. Interface dimensions were agreed before production rather than inherited from whatever the parts happened to measure, and the drawings defined the features that matter to the assembled product.',
      manufacturingDecision:
        'The components were machined within 3-axis and 4-axis CNC milling scope, and the parts of an interface set were produced in one batch so the mating features share the same setup reference. Where an interface dimension sat inside a tight stack, it was held deliberately rather than inherited from the process capability, and the DFM discussion was closed before the quotation was issued.',
      inspectionAndDelivery:
        'FAI was run on the first production run and the dimensional report was linked to the released revision number, so any later question can be answered against the exact revision that was produced. The material certificate 3.1 and, where the specification required it, the passivation record ship with the parts, with export documents and packing photos issued before dispatch.',
      repeatOrder:
        'Call-off orders are placed against the released revision and quoted from the archived drawing and inspection record. When the OEM revises the drawing, the change is handled as a documented difference list against the previous revision, and the FAI report from the first run is archived so later call-offs can be traced back to it.',
    },
  },
];
