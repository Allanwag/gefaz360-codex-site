import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { carregar } from './harness.mjs';

const fonte = fs.readFileSync(new URL('../app.js', import.meta.url), 'utf8');

test('selos de alerta levam a classe warning', () => {
  const a = carregar();
  const solo = a.ver('soil');
  assert.match(solo, /class="status warning">Atenção/);
  assert.match(solo, /class="status warning">Correção/);
  a.run("state.coffeeQualityTab='physical'");
  assert.match(a.ver('coffee'), /class="status warning">Revisão/);
});

test('nenhum atributo class sem aspas com mais de uma classe', () => {
  assert.doesNotMatch(fonte, /class=[\w-]+ [\w-]+[ >]/);
  assert.doesNotMatch(fonte, /class='\+[A-Za-z.]+\+'/);
});

test('busca de estoque sobrevive ao filtro', () => {
  const a = carregar();
  a.run("state.inventoryQuery='óleo'; state.inventoryFilter='Consumíveis'");
  const h = a.ver('inventory');
  assert.match(h, /id="inventorySearch"[^>]*value="óleo"/);
  assert.equal((a.run('inventoryRows()').match(/<tr>/g) || []).length, 1);
  a.run(`state.inventoryQuery='"><b>x'`);
  assert.doesNotMatch(a.ver('inventory'), /<b>x/);
});

test('todo ícone usado existe', () => {
  const a = carregar();
  assert.ok(a.run("'play' in icons && 'message' in icons"));
  const usados = new Set([...fonte.matchAll(/icon\('([\w-]+)'\)|iconName:\s*'([\w-]+)'|\bicon:\s*'([\w-]+)'/g)].map(m => m[1] || m[2] || m[3]));
  assert.ok(usados.size > 20);
  for (const n of usados) assert.ok(a.run(`${JSON.stringify(n)} in icons`), n);
});

test('aba de cultura não rola a página ao topo', () => {
  assert.match(fonte, /state\.grainCrop = btn\.dataset\.grain; rerenderView\(renderGrains\)/);
});
