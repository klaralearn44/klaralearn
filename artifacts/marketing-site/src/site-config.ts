function normaliseOrigin(value: string, variableName: string) {
  let url: URL;

  try {
    url = new URL(value);
  } catch {
    throw new Error(`${variableName} must be a valid absolute URL.`);
  }

  if (!['http:', 'https:'].includes(url.protocol)) {
    throw new Error(`${variableName} must use http or https.`);
  }

  return url.origin;
}

const viteEnv = import.meta.env ?? {};
const configuredSiteUrl = viteEnv.VITE_SITE_URL?.trim();

export const SITE_URL = normaliseOrigin(
  configuredSiteUrl || 'https://klaralearn.com',
  'VITE_SITE_URL',
);

const configuredApiOrigin = viteEnv.VITE_PUBLIC_API_ORIGIN?.trim();

export const PUBLIC_API_ORIGIN = configuredApiOrigin
  ? normaliseOrigin(configuredApiOrigin, 'VITE_PUBLIC_API_ORIGIN')
  : '';

// Preview deployments should never compete with the production URL in search.
export const IS_INDEXABLE_BUILD =
  viteEnv.VITE_INDEXABLE_BUILD?.trim().toLowerCase() === 'true';

export const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;