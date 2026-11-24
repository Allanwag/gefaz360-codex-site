import test from 'node:test';
import assert from 'node:assert/strict';
import { carregar } from './harness.mjs';

test('células do CSV', () => {
  const a = carregar();
  assert.equal(a.run('csvCell(5.8)'), '5,8');
  assert.equal(a.run('csvCell(3420000)'), '3420000');
  assert.equal(a.run("csvCell('a;b')"), '"a;b"');
  assert.equal(a.run(`csvCell('diz "oi"')`), '"diz ""oi"""');
  assert.equal(a.run("csvCell('R$ 1,86')"), 'R$ 1,86');
});

test('cereais exporta números, não texto com ponto', () => {
  const a = carregar();
  a.ver('grains');
  a.run("state.grainCrop='coberturas'");
  const linhas = a.run('exportRows()');
  assert.deepEqual([...linhas.find(l => l[3] === 'sementes_a_distribuir')].slice(4), [5.8, 't']);
  a.run("state.grainCrop='milho'");
  assert.equal(a.run('exportRows()').find(l => l[3] === 'preco_medio')[4], 61.8);
});

test('sem linhas não há arquivo', () => {
  const a = carregar();
  a.ver('roadmap');
  assert.equal(a.run('exportCurrentView()'), false);
  assert.match(a.toast(), /Nada para exportar/);
});

test('rótulos dizem o que o arquivo traz', () => {
  const a = carregar();
  for (const v of ['grains', 'loads', 'soil']) assert.doesNotMatch(a.ver(v), /Exportar (cargas|CSV|histórico|operações)/, v);
  assert.doesNotMatch(a.ver('roadmap'), /Exportar roadmap/);
  a.run("state.soilTab='timeline'");
  assert.doesNotMatch(a.ver('soil'), /Exportar histórico/);
});
