/**
 * Process data — the single source of truth for the 8-step order flow.
 *
 * Rule (enforced by the project rules): any figure that is a promise
 * (lead time, response time, tolerance) must come from capabilities.ts,
 * never be hardcoded in the page prose.
 *
 * Each step states three things explicitly, because that is what a buyer
 * needs to decide whether to work with us:
 * - what the customer has to provide
 * - what we are responsible for
 * - what document the customer receives at the end of the step
 */

export interface ProcessStep {
  /** Step number, 1-based. */
  n: number;
  /** Short stage name used in the overview strip and the section heading. */
  stage: string;
  /** One-line statement of the purpose of the step. */
  purpose: string;
  /** What the customer must provide to move the step forward. */
  youProvide: string[];
  /** What we take responsibility for. */
  weDo: string[];
  /** The document(s) the customer receives as the output of this step. */
  youReceive: string[];
  /** The output stated as a document or a deliverable, one line. */
  output: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    n: 1,
    stage: 'Upload drawing',
    purpose: 'The order starts with your drawing and the few parameters we cannot read from it.',
    youProvide: [
      '2D drawing as PDF, or 3D model as STEP (DWG / IGES also accepted)',
      'Material grade, or "not sure" — we confirm against the standard on the drawing',
      'Quantity',
      'Tolerance requirement and surface finishing (or "not specified")',
      'Target delivery date and application, if known',
    ],
    weDo: [
      'Initial feasibility scan of the file before anything else happens',
      'File completeness check — a missing model or unreadable PDF is flagged the same day',
      'NDA handling, if you requested one: the mutual NDA is sent before any supplier sees the file',
    ],
    youReceive: [
      'Acknowledgement that the drawing is received and in review',
      'A note if the upload failed or the file is incomplete',
    ],
    output: 'Acknowledgement within one business day',
  },
  {
    n: 2,
    stage: 'Engineering review',
    purpose: 'We confirm the part is actually machinable — and say so honestly if it is not.',
    youProvide: [
      'Answers to the open questions we raise (missing tolerances, unclear datums, thread or surface callouts)',
      'Confirmation that we have the correct revision of the drawing',
    ],
    weDo: [
      'DFM check: datum scheme, feature accessibility, tool reach, distortion risk in thin sections',
      'Scope confirmation against 3-axis / 4-axis capability, batch range and maximum part size',
      'Tolerance feasibility per feature — not a blanket tolerance promise',
      'A clear go / no-go decision with the reason attached',
    ],
    youReceive: [
      'Review result: in scope, or out of scope with the specific reason',
      'The list of open questions we need answered',
    ],
    output: 'Review result and open questions',
  },
  {
    n: 3,
    stage: 'Supplier matching',
    purpose: 'The approved drawing is routed to suppliers that can actually make it well.',
    youProvide: [
      'Your approval of the review result and the drawing revision',
      'Any change you want applied before the drawing is released',
    ],
    weDo: [
      'Match the drawing to qualified suppliers with titanium milling experience on comparable parts',
      'Check each supplier\'s inspection capability, material stock and current load against the requirement',
      'Confirm which inspection documents are available for this part before any price is discussed',
    ],
    youReceive: [
      'Confirmation of the released drawing revision that will be produced',
      'The inspection plan that applies to your part',
    ],
    output: 'Released drawing revision and confirmed inspection plan',
  },
  {
    n: 4,
    stage: 'Dual-source quotation',
    purpose: 'Two independent quotes become one quotation you can compare against the market.',
    youProvide: [
      'Target delivery date and, if you have one, a target price',
      'Any commercial constraint: packaging, marking, delivery location',
    ],
    weDo: [
      'Request quotes independently from two qualified suppliers for the same drawing revision',
      'Compare process plan, tooling setup, material source, inspection capability and lead time — not price alone',
      'Flag any supplier that cannot meet the inspection requirement instead of quietly dropping it',
      'Merge the two quotes into a single commercial offer',
    ],
    youReceive: [
      'One consolidated quotation with unit price, quantity break and lead time',
      'The exact document list that will be delivered with the parts',
      'The manufacturing duration, separated from our own response time',
    ],
    output: 'Consolidated quotation with lead time and document list',
  },
  {
    n: 5,
    stage: 'Order confirmation',
    purpose: 'Commercial terms become a locked production slot.',
    youProvide: [
      'Purchase order or written confirmation of the quotation',
      'Delivery address and consignee details',
      'Shipping terms and payment terms',
    ],
    weDo: [
      'Place the order with the selected supplier and reserve the production slot',
      'Freeze the drawing revision, the inspection plan and the document list as the order reference',
      'Confirm the production schedule and the date the first article will be measured',
    ],
    youReceive: [
      'Order confirmation with the order reference and the frozen specification',
      'Production schedule and planned first article date',
    ],
    output: 'Order confirmation and production schedule',
  },
  {
    n: 6,
    stage: 'Production & inspection',
    purpose: 'Parts are made, measured against the drawing, and documented before anything ships.',
    youProvide: [
      'Fast approval of the first article measurement report — this is the usual cause of a delay',
      'Any corrective instruction issued during production',
    ],
    weDo: [
      'Coordinate production with the supplier and track it against the schedule',
      'First article inspection on the first part, measured against the drawing',
      'Dimensional inspection across the batch, and confirmation of the surface finishing',
      'Pre-packing final check with packing photos taken',
    ],
    youReceive: [
      'First article inspection (FAI) report',
      'Dimensional inspection report',
      'Material certificate 3.1 (EN 10204)',
      'Finishing record where a surface treatment is applied',
      'Packing photos',
    ],
    output: 'Inspection documents, released before shipment',
  },
  {
    n: 7,
    stage: 'Export delivery',
    purpose: 'The parts leave Baoji with the paperwork a customs broker needs.',
    youProvide: [
      'Final shipping instructions and consignee details',
      'Confirmation of the freight terms agreed in the order',
    ],
    weDo: [
      'Export documentation and packing preparation',
      'Freight arrangement and shipment tracking',
      'Transmission of all inspection documents to you before or with the shipment',
    ],
    youReceive: [
      'Commercial invoice and packing list',
      'Bill of lading or airway bill',
      'Certificate of origin where it applies',
      'Tracking number and the inspection document set',
    ],
    output: 'Export documents and delivered parts',
  },
  {
    n: 8,
    stage: 'Repeat order',
    purpose: 'The second order is not a new project — it starts from the archived record.',
    youProvide: [
      'The order reference or drawing number from the previous order',
      'New quantity, and any drawing revision since the last delivery',
    ],
    weDo: [
      'Retrieve the archived drawing, material certificate and inspection record for your part',
      'Requote against the same specification, without a new engineering review',
      'Confirm whether the previous inspection plan still applies or a new first article is required',
    ],
    youReceive: [
      'The archived drawing and inspection record for your part',
      'A fast-track quotation and an updated lead time',
      'A new inspection plan if anything in the specification changed',
    ],
    output: 'Archived record, fast-track quotation and a new order in the same loop',
  },
] satisfies ProcessStep[];
