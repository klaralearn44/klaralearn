import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { createServer } from 'vite';

const root = path.resolve(import.meta.dirname, '..');
const outDir = path.join(root, 'dist', 'public');

const routeFile = (route: string) =>
  route === '/' ? path.join(outDir, 'index.html') : path.join(outDir, route.slice(1), 'index.html');

const escapeXml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const vite = await createServer({
  configFile: path.join(root, 'vite.config.ts'),
  server: { middlewareMode: true },
  appType: 'custom',
});

try {
  const { appRoutes, publicRoutes, SITE_URL, SITEMAP_URL, IS_INDEXABLE_BUILD } =
    await vite.ssrLoadModule('/src/route-manifest.tsx');
  const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
  const template = await readFile(path.join(outDir, 'index.html'), 'utf8');

  for (const { path: route } of appRoutes) {
    const { appHtml, head } = render(route);
    const html = template
      .replace('<!--ssr-head-->', head)
      .replace('<div id="root"></div>', `<div id="root" data-ssr="true">${appHtml}</div>`);
    const filename = routeFile(route);
    await mkdir(path.dirname(filename), { recursive: true });
    await writeFile(filename, html);
  }

  const urls = publicRoutes
    .filter((route: { sitemap: boolean }) => route.sitemap)
    .map((route: { path: string }) => `  <url><loc>${escapeXml(`${SITE_URL}${route.path}`)}</loc></url>`)
    .join('\n');
  await writeFile(
    path.join(outDir, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  );
  await writeFile(
    path.join(outDir, 'robots.txt'),
    IS_INDEXABLE_BUILD
      ? `User-agent: *\nAllow: /\nSitemap: ${SITEMAP_URL}\n`
      : 'User-agent: *\nDisallow: /\n',
  );
} finally {
  await vite.close();
}