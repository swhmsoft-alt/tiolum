/**
 * Brand constants — single source of truth for entity identity.
 *
 * The brand wordmark is "Titolum". The domain carries the keyword layer
 * ("titanium cnc machining") and must never be used as the brand name,
 * otherwise the entity becomes indistinguishable from competitors using the
 * same keyword stem.
 */

export const BRAND = {
  name: 'Titolum',
  legalName: '', // Empty on purpose: no registered entity yet. Never fabricate.
  domain: 'titaniumcncmachining.com',
  url: 'https://titaniumcncmachining.com',
  email: 'sales@titolum.com',
  tagline: 'Drawing-based titanium CNC machining supply and engineering coordination',
  description:
    'Titolum coordinates a qualified network of titanium CNC machining suppliers in Baoji, China, and manages engineering review, dual-source quotation, quality inspection, export delivery and customer relationships.',
  /** Phrase used everywhere instead of naming any factory. */
  supplierNetwork: 'qualified supplier network',
  location: 'Baoji, China',
  serviceArea: 'Worldwide',
} as const;

export const ORG_URLS = {
  main: BRAND.url,
  linkedin: '', // TODO: fill with the real company LinkedIn URL before launch.
} as const;
