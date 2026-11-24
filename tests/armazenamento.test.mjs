import test from 'node:test';
import assert from 'node:assert/strict';
import { carregar } from './harness.mjs';

test('valor inválido é preservado numa chave à parte', () => {
  const a = carregar({ storage: { 'pvgest-activities': '{quebrado', 'gefaz360-imported-maps': '{"a":1}' } });
  assert.equal(a.guardado.get('pvgest-activities-corrompido'), '{quebrado');
  assert.equal(a.guardado.get('gefaz360-imported-maps-corrompido'), '{"a":1}');
  a.run("saveActivity({icon:'check',title:'t',meta:'m'})");
  assert.equal(a.guardado.get('pvgest-activities-corrompido'), '{quebrado');
});

test('idade da atividade', () => {
  const a = carregar();
  const t = Date.parse('2026-11-15T12:00:00Z');
  const idade = iso => a.run(`activityAge(${JSON.stringify(iso)}, ${t})`);
  assert.equal(idade('2026-11-15T11:59:40Z'), 'Agora');
  assert.equal(idade('2026-11-15T11:30:00Z'), 'Há 30 min');
  assert.equal(idade('2026-11-15T07:00:00Z'), 'Há 5 h');
  assert.match(idade('2026-11-01T12:00:00Z'), /^01\/11\/2026$/);
  assert.equal(idade(null), '');
});

test('atividade gravada leva a data e mostra a idade', () => {
  const a = carregar();
  a.run("saveActivity({icon:'check',title:'Registro novo',meta:'detalhe'})");
  const gravado = JSON.parse(a.guardado.get('pvgest-activities'));
  assert.ok(Number.isFinite(Date.parse(gravado[0].at)));
  assert.match(a.ver('dashboard'), /Agora · detalhe/);
});

test('atividade antiga sem data carrega e perde o "Agora"', () => {
  const a = carregar({ storage: { 'pvgest-activities': JSON.stringify([{ icon: 'map', title: 'Mapa KML importado · x', meta: 'Agora · 1 feição' }]) } });
  const h = a.ver('dashboard');
  assert.match(h, /Mapa KML importado · x/);
  assert.doesNotMatch(h, /Agora · 1 feição/);
  assert.match(h, /<small>1 feição<\/small>/);
});

test('resultado repetido do Gefaz Calda não ocupa outra vaga', () => {
  const a = carregar();
  const res = "{status:'compativel',confianca:.9,resumo:{rotulo:'Compatível'}}";
  a.run(`registrarResultadoCalda(${res})`);
  a.run("saveActivity({icon:'check',title:'Registro do usuário',meta:'x'})");
  a.run(`registrarResultadoCalda(${res})`);
  assert.equal(a.run('state.activities.length'), 2);
  assert.equal(a.run('state.activities[0].title'), 'Registro do usuário');
  assert.doesNotThrow(() => a.run('registrarResultadoCalda(null)'));
});
