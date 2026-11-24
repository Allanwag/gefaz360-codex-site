// Carrega app.js num node:vm com um DOM mínimo. As funções de tela escrevem em
// content.innerHTML (string comum) e os testes leem essa string.
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function elemento(id) {
  const proprio = { id, innerHTML: '', textContent: '', value: '', dataset: {}, style: {}, hidden: false, disabled: false,
    classList: { add() {}, remove() {}, toggle() {}, contains: () => false } };
  return new Proxy(proprio, {
    get(alvo, chave) {
      if (chave in alvo) return alvo[chave];
      if (chave === Symbol.toPrimitive) return () => '';
      if (chave === Symbol.iterator) return undefined;
      if (chave === 'querySelectorAll' || chave === 'getElementsByTagName') return () => [];
      if (chave === 'querySelector') return () => elemento();
      if (chave === 'closest') return () => null;
      if (chave === 'parentElement' || chave === 'firstElementChild' || chave === 'nextElementSibling') return elemento();
      return () => undefined; // addEventListener, focus, insertBefore, setAttribute…
    },
    set(alvo, chave, valor) { alvo[chave] = valor; return true; }
  });
}

export function carregar({ hash = '', storage = {} } = {}) {
  const porId = new Map();
  const guardado = new Map(Object.entries(storage));
  const document = {
    getElementById(id) { if (!porId.has(id)) porId.set(id, elemento(id)); return porId.get(id); },
    // A navegação lateral existe no index.html: devolver um elemento evita que app.js a recrie.
    querySelector: () => elemento(),
    querySelectorAll: () => [],
    createElement: () => elemento(),
    addEventListener() {}, contains: () => false, activeElement: null,
    body: elemento(), documentElement: elemento()
  };
  const contexto = {
    document, console,
    location: { hash, origin: 'http://localhost', href: 'http://localhost/' + hash },
    history: { pushState() {}, replaceState(a, b, url) { contexto.location.hash = String(url); } },
    localStorage: {
      getItem: k => guardado.has(k) ? guardado.get(k) : null,
      setItem: (k, v) => { guardado.set(k, String(v)); },
      removeItem: k => { guardado.delete(k); }
    },
    navigator: {}, setTimeout: () => 0, clearTimeout() {}, addEventListener() {},
    scrollTo() {}, URL, Blob
  };
  contexto.window = contexto;
  vm.createContext(contexto);
  vm.runInContext(fs.readFileSync(path.join(raiz, 'app.js'), 'utf8'), contexto, { filename: 'app.js' });
  const run = codigo => vm.runInContext(codigo, contexto);
  return {
    run, guardado,
    html: () => document.getElementById('content').innerHTML,
    ver(vista) { run(`navigate(${JSON.stringify(vista)})`); return document.getElementById('content').innerHTML; },
    toast: () => document.getElementById('toastTitle').textContent + ' · ' + document.getElementById('toastMessage').textContent
  };
}
