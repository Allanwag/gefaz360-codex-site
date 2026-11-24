import test from 'node:test';
import assert from 'node:assert/strict';
import { carregar } from './harness.mjs';

test('gráfico de cada cultura soma o cartão', () => {
  const a = carregar();
  for (const k of ['milho', 'soja', 'sorgo', 'trigo', 'coberturas']) {
    const soma = a.run(`grainCropConfigs.${k}.actual.reduce((s,v)=>s+v,0)`);
    const cartao = Number(a.run(`grainCropConfigs.${k}.metrics[0].value`).replace(/\./g, '').replace(',', '.'));
    assert.equal(soma, cartao, k);
  }
});

test('situação do estoque segue saldo e mínimo', () => {
  const a = carregar();
  for (const r of a.run('inventory.map(r => [...r])')) {
    const saldo = parseFloat(r[3]), minimo = parseFloat(r[4]);
    assert.equal(r[6] === 'Normal', saldo >= minimo, r[0]);
  }
});

test('lote e talhão são os mesmos em toda a vista de café', () => {
  const a = carregar();
  a.run("state.coffeeQualityTab='physical'");
  const h = a.ver('coffee');
  assert.doesNotMatch(h, /TER-025<small>C-07/);
  assert.doesNotMatch(h, /TER-024<small>C-04/);
  assert.doesNotMatch(h, /C-07 · TER-025/);
  assert.match(a.run("otherPlotEvents.find(e => e.type==='Colheita' && e.season==='2025/26').detail"), /TER-026/);
});

test('horímetro da Case 8250 é um só', () => {
  const a = carregar();
  const combustivel = a.ver('fuel');
  assert.match(combustivel, /Case 8250<\/strong>[\s\S]{0,200}?992,0 h/);
  assert.doesNotMatch(combustivel, /1\.000,5 h/);
  assert.doesNotMatch(a.ver('connected'), /1\.842,6/);
});

test('quadro da oficina conta os cartões', () => {
  const h = carregar().ver('workshop');
  const colunas = h.split('class="kanban-col"').slice(1);
  assert.equal(colunas.length, 3);
  for (const col of colunas) {
    const n = Number(col.match(/<span>(\d+)<\/span>/)[1]);
    assert.equal((col.match(/class="work-card"/g) || []).length, n);
  }
});

test('cada carga tem a própria data', () => {
  const h = carregar().ver('loads');
  assert.match(h, /SOJ-126<\/strong><small>15\/04\/2026<\/small>/);
  assert.match(h, /MIL-084<\/strong><small>16\/07\/2026<\/small>/);
  assert.doesNotMatch(h, /SOJ-12[56]<\/strong><small>16\/07\/2026/);
});

test('laudo: V% fecha com SB e T', () => {
  const a = carregar();
  for (const s of ['2025/26', '2024/25', '2023/24']) {
    a.run(`state.season='${s}'`);
    const h = a.ver('soil');
    const n = r => Number(h.match(r)[1].replace(',', '.'));
    const sb = n(/Soma de bases · SB<\/span><strong>([\d,]+)/);
    const t = n(/CTC a pH 7 · T<\/span><strong>([\d,]+)/);
    const v = n(/Saturação por bases · V<\/span><strong>([\d,]+)/);
    assert.ok(Math.abs(100 * sb / t - v) < 0.6, `${s}: ${sb}/${t} x ${v}`);
  }
});

test('correção de solo cita laudo anterior a ela', () => {
  const a = carregar();
  const erros = a.run(`soilAmendmentRecords.filter(r => { const l = soilAnalysisRecords.find(x => x.code === r.source); return !l || soilDateSort(l.date) > r.sort; }).map(r => r.date + ' ' + r.source)`);
  assert.deepEqual([...erros], []);
});
