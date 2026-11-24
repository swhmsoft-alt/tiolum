import { BRAND } from './brand';
import { CAPABILITIES } from './capabilities';

/**
 * JSON-LD builders.
 *
 * The entity describes itself as a coordinating service, never as a
 * manufacturer or factory. `legalName` is omitted while there is no
 * registered entity — an empty or invented legal name is worse than none.
 */

const ORGANIZATION_ID = `${BRAND.url}/#organization`;

// LinkedIn is only emitted once a real URL is provided (see brand.ts).
const ORG_URLS_HAS_LINKEDIN = '' as string;

export function organizationSchema(): Record<string, unknown> {
  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ORGANIZATION_ID,
    name: BRAND.name,
    url: BRAND.url,
    description: BRAND.description,
    email: BRAND.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Baoji',
      addressRegion: 'Shaanxi',
      addressCountry: 'CN',
    },
    areaServed: BRAND.serviceArea,
    knowsAbout: [...CAPABILITIES.keywords],
    ...(BRAND.legalName ? { legalName: BRAND.legalName } : {}),
    ...(ORG_URLS_HAS_LINKEDIN ? { sameAs: [ORG_URLS_HAS_LINKEDIN] } : {}),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: BRAND.email,
      availableLanguage: ['English'],
    },
  };
}

export function webSiteSchema(): Record<string, unknown> {
  return {
    '@type': 'WebSite',
    '@id': `${BRAND.url}/#website`,
    url: BRAND.url,
    name: BRAND.name,
    description: BRAND.description,
    publisher: { '@id': ORGANIZATION_ID },
    inLanguage: 'en',
  };
}

export function serviceSchema(): Record<string, unknown> {
  return {
    '@type': 'Service',
    name: 'Titanium CNC machining',
    serviceType: 'Titanium CNC machining',
    description: CAPABILITIES.supplyChain,
    provider: { '@id': ORGANIZATION_ID },
    areaServed: BRAND.serviceArea,
    audience: {
      '@type': 'BusinessAudience',
      name: 'Overseas OEM, equipment builders and distributors',
    },
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]): Record<string, unknown> {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: new URL(item.path, `${BRAND.url}/`).toString(),
    })),
  };
}

export function articleSchema(input: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  about?: string;
}): Record<string, unknown> {
  return {
    '@type': 'Article',
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    mainEntityOfPage: { '@type': 'WebPage', '@id': input.url },
    url: input.url,
    author: { '@id': ORGANIZATION_ID },
    publisher: { '@id': ORGANIZATION_ID },
    inLanguage: 'en',
    ...(input.about ? { about: input.about } : {}),
  };
}
