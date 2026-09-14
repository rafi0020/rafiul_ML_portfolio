import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server.js';
import { Routes, Route } from 'react-router-dom';
import fs from 'node:fs';
import path from 'node:path';
import Home from '../src/pages/Home';
import AboutPage from '../src/pages/AboutPage';
import ProjectsPage from '../src/pages/ProjectsPage';
import ResearchPage from '../src/pages/ResearchPage';
import SkillsPage from '../src/pages/SkillsPage';
import ContactPage from '../src/pages/ContactPage';
import ProjectDetail from '../src/pages/ProjectDetail';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import projects from '../src/data/projects.json';
import { SITE, DEFAULT_IMAGE, ROUTE_META } from '../src/data/portfolio';

const pages = { '/': Home, '/about': AboutPage, '/projects': ProjectsPage, '/research': ResearchPage, '/skills': SkillsPage, '/contact': ContactPage };
const routes = [...Object.keys(pages), ...projects.map(p => `/projects/${p.id}`)];
const template = fs.readFileSync('dist/index.html', 'utf8');
const escape = value => String(value).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
for (const route of routes) {
  const project = projects.find(p => route === `/projects/${p.id}`);
  const meta = project ? { title: project.title, description: project.summary, image: project.socialImage, alt: project.workflowAlt } : ROUTE_META[route];
  const title = meta.title ? `${meta.title} | MD Rafiul Islam` : 'MD Rafiul Islam | Machine Learning Engineer';
  const Page = project ? ProjectDetail : pages[route];
  const body = renderToString(<StaticRouter location={route}><a className="skip-link" href="#main-content">Skip to main content</a><Navbar /><Routes><Route path={project ? '/projects/:id' : route} element={<Page />} /></Routes><Footer /></StaticRouter>);
  let output = template.replace(/<title>.*?<\/title>/, `<title>${escape(title)}</title>`).replace(/<div id="root"><\/div>/, `<div id="root">${body}</div>`);
  const setMeta = (attribute, key, content) => {
    const tag = `<meta ${attribute}="${key}" content="${escape(content)}"/>`;
    const regex = new RegExp(`<meta ${attribute}="${key}"[^>]*>`);
    output = regex.test(output) ? output.replace(regex, () => tag) : output.replace('</head>', `${tag}\n</head>`);
  };
  setMeta('name','description',meta.description);
  setMeta('name','robots','index, follow');
  for (const prefix of ['og','twitter']) {
    const attr = prefix === 'og' ? 'property' : 'name';
    setMeta(attr,`${prefix}:title`,title);
    setMeta(attr,`${prefix}:description`,meta.description);
    setMeta(attr,`${prefix}:image`,SITE + (meta.image || DEFAULT_IMAGE));
    setMeta(attr,`${prefix}:image:alt`,meta.alt || 'MD Rafiul Islam — Machine Learning Engineer');
  }
  setMeta('property','og:url',SITE + route);
  setMeta('property','og:image:width',project ? '1280' : '1200');
  setMeta('property','og:image:height',project ? '720' : '630');
  output = output.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${SITE}${route}"/>`);
  const destination = path.join('dist',route,'index.html');
  fs.mkdirSync(path.dirname(destination),{recursive:true}); fs.writeFileSync(destination,output);
}
fs.writeFileSync('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map(r => `  <url><loc>${SITE}${r}</loc></url>`).join('\n')}\n</urlset>\n`);
// GitHub Pages serves this for unknown routes; keep it unindexed and let the app show its not-found route.
const notFound = template.replace(/<title>.*?<\/title>/, '<title>Page not found | MD Rafiul Islam</title>').replace(/<link rel="canonical"[^>]*>/, '').replace('</head>', '<meta name="robots" content="noindex, nofollow"/></head>');
fs.writeFileSync('dist/404.html',notFound);
fs.writeFileSync('dist/release.json', JSON.stringify({ commit: process.env.GITHUB_SHA || 'local-preview', pages: routes.length })+'\n');
console.log(`Prerendered ${routes.length} routes with full content, metadata, and sitemap.`);
