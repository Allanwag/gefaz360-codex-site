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

test('hash que não é vista cai no painel', () => {
  for (const h of ['#__proto__', '#constructor', '#toString', '#hasOwnProperty', '#naoexiste']) {
    const a = carregar({ hash: h });
    assert.equal(a.run('state.view'), 'dashboard', h);
    assert.match(a.html(), /Bom dia, Mariana/, h);
  }
  const a = carregar();
  a.run("navigate('__proto__')");
  assert.equal(a.run('state.view'), 'dashboard');
});
