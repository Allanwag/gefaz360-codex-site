import test from 'node:test';
import assert from 'node:assert/strict';
import { carregar } from './harness.mjs';

test('chips de Cargas filtram', () => {
  const a = carregar();
  a.ver('loads');
  const n = f => { a.run(`state.loadFilter=${JSON.stringify(f)}`); return (a.run('loadRows()').match(/<tr>/g) || []).length; };
  assert.equal(n('Todas'), 6);
  assert.equal(n('Sem NF'), 1);
  assert.equal(n('No pátio'), 1);
  assert.equal(n('A receber'), 2);
  a.run("state.loadFilter='Sem NF'");
  assert.match(a.ver('loads'), /data-load-filter="Sem NF" aria-pressed="true"/);
});

test('controles que não fazem nada dizem isso', () => {
  const a = carregar();
  const tudo = a.run('Object.keys(renderers).map(v => { navigate(v); return content.innerHTML; }).join("")');
  const selects = tudo.match(/<select class="mini-select"[^>]*>/g);
  assert.ok(selects.length >= 9);
  for (const s of selects) {
    assert.match(s, / disabled/);
    assert.match(s, /title="Filtro indisponível na demonstração"/);
  }
});

test('botões e abas têm nome e estado', () => {
  const a = carregar();
  assert.match(a.run('inventoryRows()'), /data-action="stock-move" aria-label="Movimentar /);
  assert.match(a.ver('connected'), /data-action="?play-audio"? aria-label="Ouvir áudio"/);
  assert.doesNotMatch(a.ver('mapmip'), /class="?farm-map"?[^>]*role="?img/);
  for (const f of ['soilTabs()', 'mapLayerTabs()', 'connectedTabs()', 'coffeeQualityTabs()']) {
    const abas = a.run(f).match(/<button[^>]*role="?tab"?[^>]*>/g);
    assert.ok(abas.every(b => /aria-selected="(true|false)"/.test(b)), f);
    assert.equal(abas.filter(b => /aria-selected="true"/.test(b)).length, 1, f);
  }
});

test('formulário recusa período invertido e textura que não fecha', () => {
  const a = carregar();
  const p = (v, o) => a.run(`formProblem(${JSON.stringify(v)}, ${JSON.stringify(o)})`);
  assert.equal(p('coffee_hours', { start_at: '2026-07-17T15:30', end_at: '2026-07-17T07:00' }), 'O término precisa ser depois do início.');
  assert.equal(p('coffee_hours', { start_at: '2026-07-17T07:00', end_at: '2026-07-17T15:30' }), '');
  assert.equal(p('yarding_spreading', { started_at: '2026-07-18T08:00', ended_at: '' }), '');
  assert.equal(p('soil_analysis', { clay_pct: '42', silt_pct: '18', sand_pct: '45' }), 'Argila, silte e areia precisam somar 100% (soma atual: 105%).');
  assert.equal(p('soil_analysis', { clay_pct: '42', silt_pct: '18', sand_pct: '40' }), '');
  assert.equal(a.run('defaultFormByView.mapmip'), 'map_import');
  assert.equal(a.run('defaultFormByView.connected'), 'whatsapp_entry');
});
