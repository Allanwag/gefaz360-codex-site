import test from 'node:test';
import assert from 'node:assert/strict';
import { carregar } from './harness.mjs';

const j = x => JSON.parse(JSON.stringify(x)); // atravessa o limite entre realms do vm

// Árvore mínima com a interface de Document que kmlFeaturesFromDocument usa.
const FAKE = `
function el(tag, o = {}) {
  return { tag, kids: o.kids || [], _text: o.text || '',
    get textContent() { return this._text || this.kids.map(k => k.textContent).join(''); },
    getElementsByTagName(t) { const out = []; const walk = x => x.kids.forEach(k => { if (k.tag === t) out.push(k); walk(k); }); walk(this); return out; } };
}
const ring = c => el('LinearRing', { kids: [el('coordinates', { text: c })] });
const poly = (outer, inner) => el('Polygon', { kids: [...(inner ? [el('innerBoundaryIs', { kids: [ring(inner)] })] : []), el('outerBoundaryIs', { kids: [ring(outer)] })] });
const point = c => el('Point', { kids: [el('coordinates', { text: c })] });
const pm = (name, ...g) => el('Placemark', { kids: [el('name', { text: name }), ...g] });
const kml = (...p) => el('kml', { kids: p });
`;
const QUAD = '-47.00,-18.90,0 -46.99,-18.90,0 -46.99,-18.89,0 -47.00,-18.89,0 -47.00,-18.90,0';
const FURO = '-47.004,-18.904 -47.003,-18.904 -47.003,-18.903 -47.004,-18.904';

test('coordenadas: altitude ignorada, lixo descartado, faixa conferida', () => {
  const a = carregar();
  assert.deepEqual(j(a.run("parseKmlCoordinates(' -47.0,-18.9,0  -46.99,-18.9  x,y ')")), [[-47, -18.9], [-46.99, -18.9]]);
  assert.equal(a.run('coordinatesInRange([[-47,-18.9],[180,90]])'), true);
  assert.equal(a.run('coordinatesInRange([[285000,7909000]])'), false);
  assert.equal(a.run('coordinatesInRange([[-47,-91]])'), false);
});

test('polígono: o anel externo vale, mesmo com o furo antes dele', () => {
  const a = carregar();
  const r = j(a.run(`${FAKE} kmlFeaturesFromDocument(kml(pm('T1', poly('${QUAD}', '${FURO}'))))`));
  assert.deepEqual(r.rejeitadas, []);
  assert.equal(r.features.length, 1);
  assert.equal(r.features[0].coordinates.length, 5);
  assert.deepEqual(r.features[0].coordinates[0], [-47, -18.9]);
});

test('geometria recusada vem com o motivo e não entra', () => {
  const a = carregar();
  const utm = j(a.run(`${FAKE} kmlFeaturesFromDocument(kml(pm('UTM', poly('285000,7909000 286000,7909000 286000,7910000 285000,7910000'))))`));
  assert.equal(utm.features.length, 0);
  assert.match(utm.rejeitadas[0], /^UTM: coordenadas fora de longitude\/latitude/);
  const curto = j(carregar().run(`${FAKE} kmlFeaturesFromDocument(kml(pm('Ruim', poly('-47,-18.9 -46.99,-18.9')), pm('P', point('-47.0,-18.9'))))`));
  assert.deepEqual(curto.rejeitadas, ['Ruim: menos de 3 vértices']);
  assert.deepEqual(curto.features.map(f => f.type), ['Point']);
});

test('duplicidade: a opção padrão pergunta em vez de copiar', () => {
  const a = carregar();
  const d = (e, x) => a.run(`duplicateDecision(${JSON.stringify(e)}, ${x})`);
  assert.equal(d('Pré-visualizar e decidir', false), 'add');
  assert.equal(d('Pré-visualizar e decidir', true), 'ask');
  assert.equal(d('Atualizar pelo código', true), 'replace');
  assert.equal(d('Criar nova versão', true), 'add');
  assert.equal(d('Ignorar existentes', true), 'skip');
});

test('mapa importado pode ser excluído e a lista mostra todos', () => {
  const mapas = Array.from({ length: 6 }, (_, i) => ({ id: 'MAP-' + i, name: 'M' + i, fileName: 'm' + i + '.kml', importTarget: 'Limites de talhão', importedAt: '2026-11-15T12:00:00.000Z', features: [{ type: 'Point', name: 'p', coordinates: [[-47, -18.9]] }] }));
  const a = carregar({ storage: { 'gefaz360-imported-maps': JSON.stringify(mapas) } });
  const painel = a.run('mapImportPanel()');
  for (let i = 0; i < 6; i++) assert.match(painel, new RegExp('data-map-remove="MAP-' + i + '"'));
  assert.equal(a.run("removeImportedMap('MAP-2')"), true);
  assert.equal(JSON.parse(a.guardado.get('gefaz360-imported-maps')).length, 5);
  assert.equal(a.run("removeImportedMap('nao-existe')"), false);
});

test('mapa gravado sem id ganha um e pode ser excluído', () => {
  const velho = { name: 'Velho', fileName: 'v.kml', importTarget: 'x', importedAt: '2026-11-15T12:00:00.000Z', features: [{ type: 'Point', name: 'p', coordinates: [[-47, -18.9]] }] };
  const a = carregar({ storage: { 'gefaz360-imported-maps': JSON.stringify([velho]) } });
  const id = a.run('state.importedMaps[0].id');
  assert.ok(id);
  assert.equal(a.run(`removeImportedMap(${JSON.stringify(id)})`), true);
});

test('formulário não nasce com nome fixo', () => {
  const a = carregar();
  assert.doesNotMatch(a.run('forms.map_import.body'), /value=Mapa-safra-2025-26/);
});
