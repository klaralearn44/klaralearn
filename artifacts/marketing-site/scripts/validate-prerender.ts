import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { createServer } from 'vite';

const root = path.resolve(import.meta.dirname, '..');
const outDir = path.join(root, 'dist', 'public');
const routeFile = (route: string) =>
  route === '/' ? path.join(outDir, 'index.html') : path.join(outDir, route.slice(1), 'index.html');
const required = (html: string, expression: RegExp, label: string, route: string) => {
  if (!expression.test(html)) throw new Error(`${route}: missing ${label}`);
};

const vite = await createServer({
  configFile: path.join(root, 'vite.config.ts'),
  server: { middlewareMode: true },
  appType: 'custom',
});

try {
  const { appRoutes, publicRoutes, SITE_URL, IS_INDEXABLE_BUILD } =
    await vite.ssrLoadModule('/src/route-manifest.tsx');
  for (const route of appRoutes as { path: string; sitemap: boolean }[]) {
    const html = await readFile(routeFile(route.path), 'utf8');
    const canonicalCount = html.match(/rel="canonical"/g)?.length ?? 0;
    if (canonicalCount !== 1) {
      throw new Error(`${route.path}: expected exactly one canonical URL, found ${canonicalCount}`);
    }
    required(html, /<div id="root" data-ssr="true">[\s\S]*?<h1[\s >]/, 'visible server-rendered H1', route.path);
    required(html, /<title[^>]*>[^<]+<\/title>/, 'title', route.path);
    required(html, /<meta[^>]+name="description"[^>]+content="[^"]+"/, 'description', route.path);
    required(html, new RegExp(`rel="canonical" href="${SITE_URL}${route.path === '/finder-a-tutor' ? '/find-a-tutor' : route.path}"`), 'canonical URL', route.path);
    required(html, /<script[^>]+type="application\/ld\+json"/, 'JSON-LD', route.path);
    required(html, /<script type="module" crossorigin src="/, 'client asset', route.path);
    const jsonLd = [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
    if (!jsonLd.length || jsonLd.some((match) => {
      try {
        JSON.parse(match[1]);
        return false;
      } catch {
        return true;
      }
    })) throw new Error(`${route.path}: invalid JSON-LD`);
  }

  const sitemap = await readFile(path.join(outDir, 'sitemap.xml'), 'utf8');
  for (const route of publicRoutes as { path: string; sitemap: boolean }[]) {
    required(sitemap, new RegExp(`<loc>${SITE_URL}${route.path}</loc>`), 'sitemap URL', route.path);
  }
  if (sitemap.includes('/finder-a-tutor')) throw new Error('sitemap must not include /finder-a-tutor');
  const robots = await readFile(path.join(outDir, 'robots.txt'), 'utf8');
  if (IS_INDEXABLE_BUILD) {
    required(robots, new RegExp(`Sitemap: ${SITE_URL.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/sitemap\\.xml`), 'production sitemap directive', 'robots.txt');
  } else {
    required(robots, /^Disallow: \/$/m, 'preview no-index directive', 'robots.txt');
  }
  const builtFiles = await readFile(path.join(outDir, 'index.html'), 'utf8');
  if (/replit\.dev|localhost(?::\d+)?/i.test(builtFiles)) {
    throw new Error('index.html contains a development-only origin');
  }
  const alias = await readFile(routeFile('/finder-a-tutor'), 'utf8');
  required(alias, /name="robots" content="noindex, follow"/, 'noindex alias directive', '/finder-a-tutor');
  console.log(`Validated ${appRoutes.length} prerendered routes and ${publicRoutes.length} sitemap URLs.`);
} finally {
  await vite.close();
}