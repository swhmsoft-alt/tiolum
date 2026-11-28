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
    logo: new URL('/favicon.svg', `${BRAND.url}/`).toString(),
    image: new URL('/og-default.png', `${BRAND.url}/`).toString(),
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

/**
 * Service schema — 加工服务。
 *
 * `serviceType` 与 `hasOfferCatalog` 是"服务轴"的语义核心：
 * 只声明我们真实提供的服务（3/4 轴钛合金铣削、工程评审、双源报价、
 * 质检协调、出口交付），不声明任何自有工厂或 5 轴能力。
 */
export function serviceSchema(
  overrides: {
    name?: string;
    description?: string;
    serviceType?: string;
    offerCatalog?: {
      name: string;
      description: string;
      items: { name: string; description: string }[];
    };
  } = {},
): Record<string, unknown> {
  const catalog = overrides.offerCatalog;
  return {
    '@type': 'Service',
    '@id': `${BRAND.url}/#service`,
    name: overrides.name ?? 'Titanium CNC machining',
    serviceType: overrides.serviceType ?? 'Titanium CNC machining services',
    description: overrides.description ?? CAPABILITIES.supplyChain,
    provider: { '@id': ORGANIZATION_ID },
    areaServed: BRAND.serviceArea,
    audience: {
      '@type': 'BusinessAudience',
      name: 'Overseas OEM, equipment builders and distributors',
    },
    ...(catalog
      ? {
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: catalog.name,
            description: catalog.description,
            itemListElement: catalog.items.map((item) => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: item.name,
                description: item.description,
              },
            })),
          },
        }
      : {}),
  };
}

/**
 * Product schema — 加工零部件。
 *
 * 规则：不写价格、不写库存、不写 SKU。
 * 材料牌号、公差、批量等数字从 capabilities.ts 传入，页面层引用。
 */
export function productSchema(input: {
  name: string;
  description: string;
  path: string;
  category?: string;
  material?: string;
  additionalProperties?: { name: string; value: string }[];
}): Record<string, unknown> {
  return {
    '@type': 'Product',
    '@id': `${BRAND.url}${input.path}#product`,
    name: input.name,
    description: input.description,
    url: new URL(input.path, `${BRAND.url}/`).toString(),
    category: input.category ?? 'Titanium CNC Machined Part',
    brand: { '@type': 'Brand', name: BRAND.name },
    manufacturer: { '@id': ORGANIZATION_ID },
    ...(input.material ? { material: input.material } : {}),
    ...(input.additionalProperties && input.additionalProperties.length > 0
      ? {
          additionalProperty: input.additionalProperties.map((item) => ({
            '@type': 'PropertyValue',
            name: item.name,
            value: item.value,
          })),
        }
      : {}),
  };
}

/**
 * Material schema — 钛材牌号（DefinedTerm）。
 */
export function materialSchema(input: {
  name: string;
  description: string;
  path: string;
  designation?: string;
}): Record<string, unknown> {
  return {
    '@type': 'DefinedTerm',
    '@id': `${BRAND.url}${input.path}#material`,
    name: input.name,
    description: input.description,
    url: new URL(input.path, `${BRAND.url}/`).toString(),
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      '@id': `${BRAND.url}/materials/#grade-set`,
      name: 'Titanium grades',
      url: new URL('/materials/', `${BRAND.url}/`).toString(),
    },
    ...(input.designation ? { alternateName: input.designation } : {}),
  };
}

/**
 * FAQ schema — 首页常见问题。
 */
export function faqSchema(items: { q: string; a: string }[]): Record<string, unknown> {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

/**
 * ItemList schema —— 列表型页面（牌号、行业、零件族）的条目清单。
 */
export function itemListSchema(input: {
  name: string;
  path: string;
  items: { name: string; path: string }[];
}): Record<string, unknown> {
  return {
    '@type': 'ItemList',
    '@id': `${BRAND.url}${input.path}#itemlist`,
    name: input.name,
    url: new URL(input.path, `${BRAND.url}/`).toString(),
    numberOfItems: input.items.length,
    itemListElement: input.items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: new URL(item.path, `${BRAND.url}/`).toString(),
    })),
  };
}

/**
 * CollectionPage schema —— 集合型页面（行业、零件族）。
 */
export function collectionPageSchema(input: {
  name: string;
  description: string;
  path: string;
}): Record<string, unknown> {
  return {
    '@type': 'CollectionPage',
    '@id': `${BRAND.url}${input.path}#collectionpage`,
    name: input.name,
    description: input.description,
    url: new URL(input.path, `${BRAND.url}/`).toString(),
    isPartOf: { '@id': `${BRAND.url}/#website` },
    inLanguage: 'en',
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

/**
 * 站点内容发布日期 —— 案例示例页的 Article datePublished。
 * 所有案例示例在同一批次发布，故共用同一日期；不虚构逐页时间线。
 */
export const CONTENT_PUBLISHED_DATE = '2026-11-01';
