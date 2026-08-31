import { renderToString } from 'react-dom/server';
import App from './App';
import { preloadRoute } from './route-manifest';
import { consumeServerSeo, resetServerSeo } from './seo-server-state';

const escapeAttribute = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

export async function render(url: string) {
  await preloadRoute(url);
  resetServerSeo();
  const appHtml = renderToString(<App ssrPath={url} />);
  const seo = consumeServerSeo();
  if (!seo) throw new Error(`SEO head was not rendered for ${url}`);
  const jsonLd = JSON.stringify(seo.schema).replace(/</g, '\\u003c');

  return {
    appHtml,
    head: [
      `<title>${escapeAttribute(seo.title)}</title>`,
      `<meta name="description" content="${escapeAttribute(seo.description)}">`,
      `<link rel="canonical" href="${escapeAttribute(seo.canonical)}">`,
      seo.noindex ? '<meta name="robots" content="noindex, follow">' : '',
      `<meta property="og:title" content="${escapeAttribute(seo.title)}">`,
      `<meta property="og:description" content="${escapeAttribute(seo.description)}">`,
      `<meta property="og:url" content="${escapeAttribute(seo.canonical)}">`,
      '<meta property="og:type" content="website">',
      `<meta property="og:image" content="${escapeAttribute(seo.image)}">`,
      '<meta name="twitter:card" content="summary_large_image">',
      `<meta name="twitter:title" content="${escapeAttribute(seo.title)}">`,
      `<meta name="twitter:description" content="${escapeAttribute(seo.description)}">`,
      `<meta name="twitter:image" content="${escapeAttribute(seo.image)}">`,
      `<script type="application/ld+json">${jsonLd}</script>`,
    ].join(''),
  };
}