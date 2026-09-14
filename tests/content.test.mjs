import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { readData, validateData } from '../scripts/validate-data.mjs';
const { projects, publications, featured } = readData();
const copy = () => structuredClone(projects);
test('all content has valid routes, asset references, and typed evidence', () => {
  assert.deepEqual(validateData(projects, publications, featured, p => fs.existsSync('public/' + p.replace(/^\.\//, '').replace(/^\//, ''))), { projects: 29, publications: 3, featured: 4 });
});
test('missing featured project fails rather than silently shrinking homepage', () => {
  assert.throws(() => validateData(projects.filter(p => p.id !== featured[0]), publications, featured), /Missing featured/);
});
test('duplicate route IDs are rejected', () => {
  assert.throws(() => validateData([...projects, projects[0]], publications, featured), /Duplicate/);
});
test('malformed stack data is rejected before rendering', () => {
  const p = copy(); p[0].stack = null; assert.throws(() => validateData(p, publications, featured), /invalid stack/);
});
test('missing workflow asset is rejected', () => {
  assert.throws(() => validateData(projects, publications, featured, () => false), /missing workflowImage/);
});
test('reported results require explicit context', () => {
  const p = copy(); p[0].highlights = [{ label: 'Accuracy', value: '99%', kind: 'reported-result' }]; assert.throws(() => validateData(p, publications, featured), /invalid highlight/);
});
test('source-code buttons cannot point to hosted websites', () => {
  const p = copy(); p[0].github = 'https://example.github.io/demo'; assert.throws(() => validateData(p, publications, featured), /source link/);
});
test('homepage research preview retains 2024 and 2025', () => {
  assert.deepEqual([...publications].sort((a,b) => a.year-b.year).slice(0,2).map(p => p.year), [2024,2025]);
});
test('ongoing R&D cannot carry completed production labels', () => {
  for (const p of projects.filter(p => p.inDevelopment)) assert(['In development', 'Ongoing research'].includes(p.maturity));
});
