import { PART_FAMILIES } from './parts';

/**
 * Capability data — the single source of truth for every capability number.
 *
 * Rule (enforced by the project rules): capability claims must be imported
 * from this file. Never hardcode tolerance, materials, batch range, size
 * limits or lead times in page prose or tables.
 *
 * Source of the figures:
 * - Machining envelope: Baoji titanium machining practice for structural
 *   Grade 5 / TC4 work at general-purpose tolerance.
 * - Tolerances: general-purpose titanium milling for Grade 5, evaluated
 *   per feature and drawing.
 * - Lead times: Baoji shop scheduling for Grade 5 (TC4) with locally
 *   available stock, split by batch size.
 * - Finishing add-on: separate local processing step, quoted separately.
 */

export const TOLERANCE = '±0.05 mm (evaluated by feature and drawing)';

export const CAPABILITIES = {
  processes: ['3-axis CNC milling', '4-axis CNC milling'] as const,

  tolerance: TOLERANCE,

  materials: ['Grade 2', 'Grade 5 (Ti-6Al-4V)', 'Grade 7', 'Grade 9'] as const,

  materialStandards: [
    'Grade 2 — ASTM B348 Grade 2',
    'Grade 5 (Ti-6Al-4V) — ASTM B348 Grade 5 / AMS 4928',
    'Grade 7 — ASTM B348 Grade 7',
    'Grade 9 (Ti-3Al-2.5V) — ASTM B348 Grade 9',
  ] as const,

  /**
   * Part families — sourced from src/lib/parts.ts so the family list, the
   * /parts/ index and the family pages can never drift apart.
   */
  partFamilies: PART_FAMILIES.map((family) => ({
    name: family.name,
    slug: family.slug,
    description: family.shortDescription,
  })),

  batchRange: 'Prototype to medium batch (typically 1–500 pcs)',

  /** Largest part we will accept for review, per axis envelope. */
  maxPartSize: {
    milling: 'Up to 400 × 300 × 250 mm',
    turning: 'Up to Ø300 mm',
    note: 'Final envelope is confirmed per drawing during engineering review.',
  },

  finishing: ['As machined', 'Passivation', 'Bead blasting', 'Anodizing (if supplier-supported)'] as const,

  inspection: [
    'First article inspection (FAI)',
    'Dimensional inspection report',
    'Material certificate 3.1 (EN 10204)',
  ] as const,

  /**
   * Explicit scope boundary. Rendered as "What We Do Not Machine".
   * Each entry carries the reason — stating it builds trust and filters buyers.
   */
  notOffered: [
    { item: '5-axis complex surfaces', reason: 'outside the 3/4-axis scope of our qualified suppliers' },
    { item: 'Ultra-thin-wall or high-deformation parts', reason: 'risk of out-of-tolerance results and warping' },
    { item: 'Sintered titanium filter elements', reason: 'a powder-metallurgy process, not CNC machining' },
    { item: 'MMO-coated titanium anodes', reason: 'a coating and electrochemical process, not machining' },
    { item: 'Welded titanium baskets or racks', reason: 'welding and assembly, not machining' },
  ] as const,

  supplyChain: 'Dual-source quotation from qualified suppliers in Baoji, China',

  /**
   * Manufacturing lead time at the supplier, by batch size.
   * This is NOT our response time — see RESPONSE_TIMES below.
   */
  leadTimes: [
    { batch: '1–20 pcs', days: '3–5 working days', note: 'Local stock cutting; setup and tolerance trimming dominate.' },
    { batch: '20–200 pcs', days: '5–10 working days', note: 'Standard shop scheduling, including deburring and cleaning.' },
    { batch: '500+ pcs', days: '10–18 working days', note: 'Suitable for automatic-feed turning and dedicated machining centres.' },
  ] as const,

  /** Additional time when post-processing is required. */
  finishingAddOn: '2–3 working days for blasting, pickling or anodizing',

  /**
   * Our own response commitments as the coordinating party.
   * Kept strictly separate from CAPABILITIES.leadTimes, which are supplier
   * manufacturing times. Never merge these two into a single promise.
   */
  responseTimes: [
    { step: 'Acknowledgement', time: 'within 1 business day' },
    { step: 'Engineering review', time: 'typically 1–2 business days, depending on drawing complexity' },
    { step: 'Quotation', time: '2–4 business days after the review is confirmed' },
    { step: 'Lead time', time: 'confirmed per order; small batches and repeat orders are quoted separately' },
  ] as const,

  /** Trust bar phrases — reused across pages. */
  trustBar: [
    'Dual-source quotation',
    'FAI and dimensional report',
    'English engineering review',
    'Mutual NDA before supplier contact',
  ] as const,

  /** Primary keyword patterns, per the domain decision document. */
  keywords: [
    'titanium CNC machining ±0.05 mm',
    'custom titanium machined parts',
    '3-axis 4-axis titanium machining',
  ] as const,
} as const;

export type Capability = typeof CAPABILITIES;
