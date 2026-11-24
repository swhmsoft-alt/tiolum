import { BRAND } from './brand';

export interface SeoProps {
  title: string;
  description: string;
  /** Path only, e.g. "/capabilities/". Canonical is derived from BRAND.url. */
  path?: string;
  ogImage?: string;
  noindex?: boolean;
  /** JSON-LD object or array of objects. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const DEFAULT_OG = '/og-default.png';

export function buildCanonical(path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  const withSlash = clean.endsWith('/') ? clean : `${clean}/`;
  return new URL(withSlash, `${BRAND.url}/`).toString();
}

export function buildTitle(title: string): string {
  return title.includes(BRAND.name) ? title : `${title} | ${BRAND.name}`;
}

export function buildSeo(props: SeoProps) {
  const {
    title,
    description,
    path = '/',
    ogImage = DEFAULT_OG,
    noindex = false,
    jsonLd,
  } = props;

  const fullTitle = buildTitle(title);
  const canonical = buildCanonical(path);
  const ogImageUrl = new URL(ogImage, `${BRAND.url}/`).toString();

  return { fullTitle, description, canonical, ogImageUrl, noindex, jsonLd };
}
