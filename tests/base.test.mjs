import test from 'node:test';
import assert from 'node:assert/strict';
import { carregar } from './harness.mjs';

test('app.js carrega e abre no painel', () => {
  const a = carregar();
  assert.equal(a.run('state.view'), 'dashboard');
  assert.match(a.html(), /Bom dia, Mariana/);
});

test('todas as vistas desenham sem erro', () => {
  const a = carregar();
  for (const v of a.run('Object.keys(renderers)')) {
    assert.ok(a.ver(v).length > 500, v);
  }
});
