import test from 'node:test';
import assert from 'node:assert/strict';
import { carregar } from './harness.mjs';

test('quadrado em metros continua quadrado', () => {
  const a = carregar();
  const lat = -18.9, dLat = 0.01, dLon = dLat / Math.cos(lat * Math.PI / 180);
  const r = JSON.parse(JSON.stringify(a.run(`(() => { const c = [[-47,${lat}],[-47+${dLon},${lat}],[-47+${dLon},${lat}+${dLat}],[-47,${lat}+${dLat}]]; const p = mapProjection(c); return c.map(p); })()`)));
  const w = r[1][0] - r[0][0], h = r[0][1] - r[2][1];
  assert.ok(Math.abs(w - h) / h < 0.01, `${w} x ${h}`);
  assert.ok(r.every(([x, y]) => x >= 50 && x <= 950 && y >= 50 && y <= 550));
});

test('ponto único fica no centro da área', () => {
  const a = carregar();
  const [x, y] = JSON.parse(JSON.stringify(a.run('mapProjection([[-47,-18.9]])([-47,-18.9])')));
  assert.ok(Number.isFinite(x) && Number.isFinite(y));
  assert.ok(Math.abs(x - 500) < 1 && Math.abs(y - 300) < 1, `${x},${y}`);
});

test('só o mapa mais recente é desenhado', () => {
  const m = (id, lon) => ({ id, name: id, fileName: id + '.kml', importedAt: '2026-11-15T12:00:00.000Z', features: [{ type: 'Point', name: id, coordinates: [[lon, -18.9]] }] });
  const a = carregar({ storage: { 'gefaz360-imported-maps': JSON.stringify([m('novo', -47), m('velho', -60)]) } });
  const svg = a.run('importedMapOverlay()');
  assert.match(svg, />novo</);
  assert.doesNotMatch(svg, />velho</);
  assert.match(svg, /preserveAspectRatio='xMidYMid meet'/);
});
