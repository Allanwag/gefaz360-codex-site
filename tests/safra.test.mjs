import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { carregar } from './harness.mjs';

const comSafra = s => carregar({ storage: { 'gefaz360-season': s } });

test('vista sem dado por safra não finge outra safra', () => {
  const a = comSafra('2023/24');
  for (const v of ['dashboard', 'coffee', 'grains', 'loads', 'people', 'workshop', 'fuel', 'inventory', 'spray', 'mapmip']) {
    assert.doesNotMatch(a.ver(v), /2023\/24/, v);
  }
  assert.equal(a.run("dataSeason('coffee')"), '2025/26');
  assert.equal(a.run("dataSeason('soil')"), '2023/24');
});

test('selo de safra diz de que safra é o dado', () => {
  const a = comSafra('2023/24');
  assert.equal(a.run("seasonContextLabel('coffee')"), 'Dados demonstrativos da safra 2025/26');
  assert.equal(a.run("seasonContextLabel('soil')"), 'Safra 2023/24');
  assert.equal(carregar().run("seasonContextLabel('coffee')"), 'Safra 2025/26');
});

test('solo e orçamento seguem a safra escolhida', () => {
  const a = comSafra('2023/24');
  assert.match(a.ver('soil'), /SOL-036/);
  assert.match(a.ver('finance'), /Safra 2023\/24 ·/);
});

test('CSV carimba a safra do dado', () => {
  const a = comSafra('2023/24');
  a.ver('grains');
  const linhas = a.run('exportRows()');
  assert.ok(linhas.length > 1);
  assert.ok(linhas.slice(1).every(l => l[1] === '2025/26'));
  a.ver('finance');
  const fin = a.run('exportRows()');
  const orc = fin.filter(l => String(l[2]).startsWith('orcamento_'));
  assert.ok(orc.length > 0);
  assert.ok(orc.every(l => l[1] === '2023/24'));
});

test('seletor de safra continua visível no celular', () => {
  const css = fs.readFileSync(new URL('../styles.css', import.meta.url), 'utf8');
  const bloco = css.slice(css.indexOf('@media (max-width: 680px)'));
  assert.doesNotMatch(bloco.slice(0, bloco.indexOf('@media', 10)), /(^|[,\n])\s*\.season-select\s*(,[^{]*)?\{[^}]*display:\s*none/);
});
