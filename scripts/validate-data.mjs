import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

export function validateData(projects, publications, featured, assetExists = () => true) {
  assert(Array.isArray(projects) && projects.length > 0, 'Project dataset must be nonempty');
  const ids = projects.map(p => p.id);
  assert.equal(new Set(ids).size, ids.length, 'Duplicate project IDs');
  assert.equal(featured.length, 4, 'Exactly four featured projects required');
  assert.equal(new Set(featured).size, 4, 'Featured IDs must be unique');
  for (const id of featured) assert(ids.includes(id), `Missing featured project: ${id}`);
  const pubIds = publications.map(p => p.id);
  assert.equal(new Set(pubIds).size, pubIds.length, 'Duplicate publication IDs');
  const unsafe = /\b(?:zero false alerts|94% accuracy OCR|15\+ FPS|100% data immutability|Scopus Q1|6000\+ Containers|90\+ Cameras|400 automated|Verified professional profile)\b/i;
  for (const p of projects) {
    assert(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.id), 'Invalid route ID');
    for (const key of ['title', 'summary', 'problem', 'approach', 'impact', 'projectType', 'maturity', 'workflowAlt', 'workflowCaption']) assert(typeof p[key] === 'string' && p[key].trim(), `${p.id}: missing ${key}`);
    assert(['Industry', 'Research', 'Academic'].includes(p.category), `${p.id}: invalid category`);
    assert(Array.isArray(p.stack) && p.stack.every(s => typeof s === 'string' && s.trim()), `${p.id}: invalid stack`);
    assert.equal(new Set(p.stack).size, p.stack.length, `${p.id}: duplicate technology`);
    for (const key of ['features', 'limitations']) assert(Array.isArray(p[key]) && p[key].every(s => typeof s === 'string'), `${p.id}: invalid ${key}`);
    assert.equal(p.workflow?.length, 4, `${p.id}: four workflow stages required`);
    for (const stage of p.workflow) assert(stage.title && stage.description, `${p.id}: incomplete workflow`);
    assert(Array.isArray(p.highlights), `${p.id}: missing typed highlights`);
    for (const h of p.highlights) assert(h.label && h.value && h.context && ['reported-result', 'implementation-fact'].includes(h.kind), `${p.id}: invalid highlight`);
    for (const field of ['workflowImage', 'socialImage', 'companyLogo']) if (p[field]) assert(assetExists(p[field]), `${p.id}: missing ${field}`);
    assert(!('metrics' in p) && !('scale' in p), `${p.id}: legacy untyped metadata`);
    if (p.github) assert(/^https:\/\/github\.com\//.test(p.github), `${p.id}: source link must be a GitHub repository`);
    if (p.paperId) assert(pubIds.includes(p.paperId), `${p.id}: unknown publication`);
    if (p.projectType === 'Internal R&D') assert(p.projectContext === 'Internal R&D / Personal Engineering Project at Bondstein Technologies Ltd.', `${p.id}: inconsistent R&D context`);
    assert(!unsafe.test(JSON.stringify(p)), `${p.id}: unsupported claim regression`);
  }
  for (const pub of publications) {
    assert(['journal', 'preprint'].includes(pub.type) && Number.isInteger(pub.year), 'Invalid publication type/year');
    assert(ids.includes(pub.projectId), `${pub.id}: missing case study`);
    assert(projects.find(p => p.id === pub.projectId).paperId === pub.id, `${pub.id}: publication relationship differs`);
  }
  return { projects: projects.length, publications: publications.length, featured: featured.length };
}

export function readData() {
  const projects = JSON.parse(fs.readFileSync('src/data/projects.json', 'utf8'));
  const publications = JSON.parse(fs.readFileSync('src/data/publications.json', 'utf8'));
  const moduleSource = fs.readFileSync('src/data/portfolio.js', 'utf8');
  const featured = [...moduleSource.match(/FEATURED_IDS = \[([^\]]+)\]/)[1].matchAll(/'([^']+)'/g)].map(m => m[1]);
  return { projects, publications, featured };
}
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const { projects, publications, featured } = readData();
  console.log('Data validation passed:', validateData(projects, publications, featured, p => fs.existsSync(path.join('public', p.replace(/^\.\//, '').replace(/^\//, '')))));
}
