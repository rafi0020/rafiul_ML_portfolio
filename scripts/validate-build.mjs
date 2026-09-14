import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { readData } from './validate-data.mjs';
const { projects, featured } = readData();
const routes = ['/', '/about', '/projects', '/research', '/skills', '/contact', ...projects.map(p => `/projects/${p.id}`)];
let assets = 0;
for (const route of routes) {
  const file = path.join('dist', route, 'index.html');
  assert(fs.existsSync(file), `Missing static route ${route}`);
  const html = fs.readFileSync(file, 'utf8');
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${route}: expected one h1`);
  assert(html.includes('id="main-content"'), `${route}: missing main content`);
  assert(html.includes(`href="https://rafiulislam.me${route}"`), `${route}: incorrect canonical`);
  assert(html.includes('content="index, follow"'), `${route}: index policy`);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(new Set(ids).size, ids.length, `${route}: duplicate DOM IDs`);
  for (const [,value] of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    if (value.startsWith('#')) { assert(ids.includes(value.slice(1)), `${route}: broken fragment ${value}`); continue; }
    if (!value.startsWith('/')) continue;
    const local = decodeURIComponent(value.split(/[?#]/)[0]);
    const target = path.join('dist', local);
    assert(fs.existsSync(target), `${route}: missing internal target ${local}`); assets++;
  }
  for (const [,value] of html.matchAll(/content="(https:\/\/rafiulislam.me\/assets\/[^\"]+)"/g)) assert(fs.existsSync(path.join('dist',new URL(value).pathname)), `${route}: missing social asset`);
  assert(!/Verified professional profile|zero false alerts|6000\+ Containers|90\+ Cameras|400 automated checks/.test(html), `${route}: unsupported claim regression`);
  if (route === '/') {
    const cards = [...html.matchAll(/id="project-([^"]+)"/g)].map(m => m[1]);
    assert.deepEqual(cards, featured, 'Homepage selection must remain exactly four');
  }
}
const sitemap = fs.readFileSync('dist/sitemap.xml', 'utf8');
assert.equal((sitemap.match(/<loc>/g)||[]).length,routes.length,'Sitemap route count');
for (const route of routes) assert(sitemap.includes(`https://rafiulislam.me${route}</loc>`), `Sitemap missing ${route}`);
assert(fs.readFileSync('dist/404.html','utf8').includes('noindex, nofollow'),'Unknown routes must be noindex');
console.log(`Built-route validation passed: ${routes.length} rendered pages; ${assets} local asset/link references; homepage four-card selection; sitemap; heading and DOM IDs.`);
