/* Gefaz360 — protótipo funcional sem dependências externas */
const icons = {
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  coffee: '<path d="M6 9h10v5a5 5 0 0 1-5 5h0a5 5 0 0 1-5-5V9Z"/><path d="M16 11h1.5a2.5 2.5 0 0 1 0 5H16"/><path d="M8 5c0 1 1 1 1 2M12 5c0 1 1 1 1 2"/>',
  sprout: '<path d="M12 21v-9"/><path d="M12 14c-4 0-7-2.5-7-6 4 0 7 2.5 7 6Z"/><path d="M12 11c3.5 0 6-2.2 6-5.5-3.5 0-6 2.2-6 5.5Z"/>',
  truck: '<path d="M3 6h11v10H3z"/><path d="M14 9h4l3 3v4h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
  wallet: '<path d="M4 6h14a2 2 0 0 1 2 2v10H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12"/><path d="M20 10h-5a2 2 0 0 0 0 4h5"/><circle cx="15" cy="12" r=".5"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.2a4 4 0 0 1 0 7.6"/>',
  wrench: '<path d="M14.7 6.3a4 4 0 0 0-5-5L7.5 3.5 10.5 6 8 8.5 5.5 5.5 3.3 7.7a4 4 0 0 0 5 5L17 21.4a2 2 0 0 0 2.8-2.8Z"/>',
  package: '<path d="m3 6 9-4 9 4-9 4-9-4Z"/><path d="M3 6v12l9 4 9-4V6M12 10v12"/>',
  sync: '<path d="M20 7h-7a5 5 0 0 0-5 5"/><path d="m17 4 3 3-3 3"/><path d="M4 17h7a5 5 0 0 0 5-5"/><path d="m7 20-3-3 3-3"/>',
  sparkles: '<path d="m12 3 1.2 3.3L16.5 7.5l-3.3 1.2L12 12l-1.2-3.3-3.3-1.2 3.3-1.2L12 3Z"/><path d="m19 13 .8 2.2L22 16l-2.2.8L19 19l-.8-2.2L16 16l2.2-.8L19 13ZM5 14l.9 2.6L8.5 17.5l-2.6.9L5 21l-.9-2.6-2.6-.9 2.6-.9L5 14Z"/>',
  cloud: '<path d="M17.5 19H6a4 4 0 0 1-.5-8 6 6 0 0 1 11.7-1.4A4.8 4.8 0 0 1 17.5 19Z"/><path d="m9 15 3-3 3 3M12 12v7"/>',
  chevrons: '<path d="m7 15 5 5 5-5M7 9l5-5 5 5"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  chevron: '<path d="m9 18 6-6-6-6"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  close: '<path d="M18 6 6 18M6 6l12 12"/>',
  coins: '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
  gauge: '<path d="M4.9 19a9 9 0 1 1 14.2 0"/><path d="m12 13 4-4"/><path d="M8 19h8"/>',
  map: '<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z"/><path d="M9 3v15M15 6v15"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  alert: '<path d="M10.3 3.5 2.4 17a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.5a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/>',
  receipt: '<path d="M6 3h12v19l-3-2-3 2-3-2-3 2V3Z"/><path d="M9 8h6M9 12h6M9 16h3"/>',
  droplet: '<path d="M12 2.7 6.5 9a7 7 0 1 0 11 0L12 2.7Z"/>',
  bolt: '<path d="m13 2-9 12h8l-1 8 9-12h-8l1-8Z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  document: '<path d="M6 2h8l5 5v15H6V2Z"/><path d="M14 2v6h5M9 13h6M9 17h6"/>',
  download: '<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  filter: '<path d="M4 5h16M7 12h10M10 19h4"/>',
  external: '<path d="M14 4h6v6M10 14 20 4M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5"/>',
  upload: '<path d="M12 17V4M7 9l5-5 5 5M5 20h14"/>',
  fuel: '<path d="M5 3h9v18H5zM7 7h5"/><path d="M14 8h2l3 3v7a2 2 0 0 0 2 2V9l-2-2"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
  trending: '<path d="m3 17 6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
  layers: '<path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/>',
  tractor: '<path d="M6 16h9l2-5h3l2 5"/><path d="M9 16V7h6l2 4M3 13h6"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="18" r="3"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  clipboard: '<rect x="5" y="4" width="14" height="18" rx="2"/><path d="M9 4V2h6v2M9 10h6M9 14h6M9 18h4"/>',
  database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.1 1.1"/><path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.1-1.1"/>',
  scale: '<path d="M12 3v18M4 7h16M7 7l-4 7h8L7 7ZM17 7l-4 7h8l-4-7ZM8 21h8"/>'
};

const storageRecoveryKeys = [];

function plainActivityText(value) {
  const entities = {'&amp;':'&','&lt;':'<','&gt;':'>'};
  return String(value ?? '')
    .replace(/&(amp|lt|gt);/g,entity => entities[entity] || entity)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;');
}

function readStoredArray(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed;
  } catch (error) {
    // O valor original permanece no navegador para recuperação manual.
  }
  storageRecoveryKeys.push(key);
  return [];
}

function normalizeMapFeatures(features) {
  if (!Array.isArray(features)) return [];
  return features.flatMap(feature => {
    if (!feature || !['Point','LineString','Polygon'].includes(feature.type) || !Array.isArray(feature.coordinates)) return [];
    const coordinates = feature.coordinates
      .filter(point => Array.isArray(point) && point.length >= 2)
      .map(point => [Number(point[0]),Number(point[1])])
      .filter(point => point.every(Number.isFinite));
    const minimum = feature.type === 'Point' ? 1 : feature.type === 'LineString' ? 2 : 3;
    if (coordinates.length < minimum) return [];
    return [{...feature,name:String(feature.name || 'Feição importada'),coordinates}];
  });
}

function normalizeImportedMaps(items) {
  return items.flatMap(item => {
    if (!item || typeof item !== 'object') return [];
    const features = normalizeMapFeatures(item.features);
    if (!features.length) return [];
    return [{...item,features}];
  }).slice(0,20);
}

function normalizeActivities(items) {
  return items.flatMap(item => {
    if (!item || typeof item !== 'object') return [];
    return [{
      icon:String(item.icon || 'check'),
      title:plainActivityText(item.title || 'Atividade local'),
      meta:plainActivityText(item.meta || '')
    }];
  }).slice(0,5);
}

const seasonStartYear = 2018;
const seasonEndYear = 2049;
const defaultSeason = '2025/26';
const seasonOptions = Array.from({ length: seasonEndYear - seasonStartYear + 1 }, (_, index) => {
  const startYear = seasonEndYear - index;
  return startYear+'/'+String((startYear + 1) % 100).padStart(2,'0');
});
const savedSeason = localStorage.getItem('gefaz360-season');

const state = {
  view: 'dashboard',
  season: seasonOptions.includes(savedSeason) ? savedSeason : defaultSeason,
  grainCrop: 'milho',
  coffeeLotFilter: 'Todos',
  coffeeDryerLot: 'SEC-041',
  coffeeQualityTab: 'sensorial',
  mapLayer: 'ndvi',
  connectedTab: 'inbox',
  importedMaps: normalizeImportedMaps(readStoredArray('gefaz360-imported-maps')),
  pendingMapImport: null,
  mapImportToken: 0,
  soilQuery: '',
  soilTab: 'analyses',
  soilPlot: 'Todos',
  inventoryFilter: 'Todos',
  activities: normalizeActivities(readStoredArray('pvgest-activities'))
};

const content = document.getElementById('content');
const pageTitle = document.getElementById('pageTitle');
const modalBackdrop = document.getElementById('modalBackdrop');
const seasonSelect = document.getElementById('seasonSelect');

function clarifyPrototypeStatus() {
  const navStatus = document.querySelector('[data-view=pvgest] .live-dot');
  if (navStatus) navStatus.title = 'Demonstração · não conectado';
  const syncTitle = document.querySelector('.sync-card-top span');
  const syncFoot = document.querySelector('.sync-card-foot');
  if (syncTitle) syncTitle.textContent = 'PVGest · demonstração';
  if (syncFoot) syncFoot.innerHTML = '<span>Sem conexão externa</span><b>Demo</b>';
  content.querySelectorAll('[data-action=sync-now]').forEach(button => {
    button.textContent = 'Simular sincronização';
  });
  if (state.view === 'pvgest') {
    const connection = content.querySelector('.integration-hero .connection-status');
    if (connection) connection.textContent = 'Demonstração · não conectado';
    const demoMetrics = [
      ['Última simulação','18:42','Dados fixos da interface'],
      ['Aplicações demonstrativas','42','Nenhum dado externo'],
      ['Cobertura do cenário','97,62%','Métrica ilustrativa'],
      ['Agenda simulada','18:57','Sem execução automática']
    ];
    content.querySelectorAll('.integration-metric').forEach((metric,index) => {
      const values = demoMetrics[index];
      if (!values) return;
      const parts = metric.querySelectorAll('span,strong,small');
      parts.forEach((part,partIndex) => { part.textContent = values[partIndex] || ''; });
    });
  }
  if (state.view === 'connected') {
    content.querySelectorAll('.data-table td small').forEach(label => {
      if (label.textContent.includes('FieldView')) label.textContent = 'FieldView · demonstração não conectada';
      if (label.textContent.includes('Operations Center')) label.textContent = 'Operations Center · demonstração não conectada';
    });
  }
}

seasonSelect.innerHTML = seasonOptions.map(season => '<option value='+season+'>Safra '+season+'</option>').join('');
seasonSelect.value = state.season;
const farmNavSection = document.querySelector('[data-view=coffee]').parentElement;
if (!document.querySelector('[data-view=soil]')) {
  const soilNav = document.createElement('button');
  soilNav.className = 'nav-item';
  soilNav.dataset.view = 'soil';
  soilNav.dataset.title = 'Solo & talhões';
  soilNav.innerHTML = '<i data-icon=layers></i><span>Solo & talhões</span>';
  farmNavSection.insertBefore(soilNav, farmNavSection.querySelector('[data-view=coffee]'));
}
if (!document.querySelector('[data-view=mapmip]')) {
  const mapNav = document.createElement('button');
  mapNav.className = 'nav-item';
  mapNav.dataset.view = 'mapmip';
  mapNav.dataset.title = 'Mapa agronômico & MIP';
  mapNav.innerHTML = '<i data-icon=map></i><span>Mapa & MIP</span><b class=nav-alert>5</b>';
  farmNavSection.insertBefore(mapNav, farmNavSection.firstElementChild.nextElementSibling);
}
const systemNavSection = document.querySelector('[data-view=pvgest]').parentElement;
if (!document.querySelector('[data-view=connected]')) {
  const connectedNav = document.createElement('button');
  connectedNav.className = 'nav-item';
  connectedNav.dataset.view = 'connected';
  connectedNav.dataset.title = 'Campo conectado';
  connectedNav.innerHTML = '<i data-icon=cloud></i><span>Campo conectado</span><b class=nav-count>7</b>';
  systemNavSection.insertBefore(connectedNav, systemNavSection.querySelector('[data-view=pvgest]'));
}

function icon(name) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.grid}</svg>`;
}

function hydrateIcons(root = document) {
  root.querySelectorAll('[data-icon]').forEach(node => {
    node.innerHTML = icon(node.dataset.icon);
  });
}

function fmtBR(value, digits = 0) {
  return Number(value).toLocaleString('pt-BR', { maximumFractionDigits: digits, minimumFractionDigits: digits });
}

function metricCard({ label, value, unit = '', iconName = 'trending', delta, foot, tone = 'green', down = false, neutral = false }) {
  const tones = {
    green: ['var(--green)', 'var(--green-soft)'], gold: ['var(--gold)', 'var(--gold-soft)'],
    blue: ['var(--blue)', 'var(--blue-soft)'], orange: ['var(--orange)', 'var(--orange-soft)'], purple: ['var(--purple)', 'var(--purple-soft)']
  };
  const [color, soft] = tones[tone] || tones.green;
  return `<article class="metric-card" data-export-label="${label}" style="--metric-color:${color};--metric-soft:${soft}">
    <div class="metric-top"><span>${label}</span><span class="metric-icon">${icon(iconName)}</span></div>
    <div class="metric-value" data-export-value="${value}" data-export-unit="${unit}">${value}${unit ? `<small>${unit}</small>` : ''}</div>
    <div class="metric-foot">${delta ? `<span class="delta ${down ? 'down' : neutral ? 'neutral' : ''}">${delta}</span>` : ''}<span>${foot || ''}</span></div>
  </article>`;
}

function pageHead({ eyebrow, title, description, primary = 'Novo registro', secondary = '', action = 'open-modal', meta = true }) {
  return `<header class="page-head">
    <div><div><span class="eyebrow">${eyebrow}</span>${meta ? '<span class="freshness">Atualizado há 4 min</span><span class="demo-badge">dados demonstrativos</span>' : ''}</div><h1>${title}</h1><p>${description}</p></div>
    <div class="page-actions">${secondary ? `<button class="secondary-button" data-action="${secondary.action || 'export'}">${secondary.icon ? icon(secondary.icon) : ''}${secondary.label}</button>` : ''}${primary ? `<button class="primary-button" data-action="${action}">${icon('plus')}${primary}</button>` : ''}</div>
  </header>`;
}

function panel(title, subtitle, body, actions = '') {
  return `<section class="panel"><div class="panel-head"><div><h2>${title}</h2>${subtitle ? `<p>${subtitle}</p>` : ''}</div>${actions}</div>${body}</section>`;
}

function lineChart(values, labels, options = {}) {
  const width = 760, height = 225, left = 38, right = 16, top = 16, bottom = 30;
  const all = [...values, ...(options.secondary || [])];
  const min = options.min ?? Math.floor(Math.min(...all) * .88);
  const max = options.max ?? Math.ceil(Math.max(...all) * 1.08);
  const x = i => left + (i * (width - left - right) / (values.length - 1));
  const y = v => top + (max - v) * (height - top - bottom) / (max - min || 1);
  const path = arr => arr.map((v, i) => `${i ? 'L' : 'M'} ${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ');
  const area = `${path(values)} L ${x(values.length - 1)} ${height - bottom} L ${left} ${height - bottom} Z`;
  const grid = Array.from({ length: 4 }, (_, i) => {
    const gy = top + i * (height - top - bottom) / 3;
    const gv = max - i * (max - min) / 3;
    return `<g class="chart-grid"><line x1="${left}" y1="${gy}" x2="${width-right}" y2="${gy}"/><text class="chart-axis" x="0" y="${gy+3}">${options.prefix || ''}${fmtBR(gv, options.decimals || 0)}</text></g>`;
  }).join('');
  const axes = labels.map((label, i) => `<text class="chart-axis" x="${x(i)}" y="${height-7}" text-anchor="middle">${label}</text>`).join('');
  const dots = values.map((v, i) => `<circle class="chart-dot chart-point" cx="${x(i)}" cy="${y(v)}" r="3.5" data-tip="${labels[i]} · ${options.prefix || ''}${fmtBR(v, options.decimals || 0)}${options.suffix || ''}"/>`).join('');
  const secondary = options.secondary ? `<path class="chart-line secondary" d="${path(options.secondary)}"/>` : '';
  return `<div class="chart-wrap"><div class="chart-tooltip"></div><svg class="line-chart" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" role="img" aria-label="${options.aria || 'Gráfico de evolução'}">${grid}<path class="chart-area" d="${area}"/><path class="chart-line" d="${path(values)}"/>${secondary}${dots}${axes}</svg></div>`;
}

function harvestCard({ crop, iconName, detail, value, unit, progress, plan, color }) {
  return `<article class="harvest-card"><div class="harvest-card-top"><span class="crop-icon ${crop}">${icon(iconName)}</span><span><strong>${detail.title}</strong><small>${detail.subtitle}</small></span></div><div class="harvest-number"><b>${value}</b><span>${unit}</span></div><div class="progress" style="--progress:${color}"><span style="width:${progress}%"></span></div><div class="harvest-foot"><span>${progress}% concluído</span><span>Meta ${plan}</span></div></article>`;
}

function recentActivities() {
  const defaults = [
    { icon: 'truck', title: 'Carga MIL-084 liberada para expedição', meta: 'Há 18 min · Balança norte' },
    { icon: 'coffee', title: 'Talhão C-07 atingiu 72% da previsão', meta: 'Há 41 min · Equipe 03' },
    { icon: 'receipt', title: 'NF-e 000.184 autorizada pela SEFAZ', meta: 'Há 1h · R$ 86.420,00' },
    { icon: 'wrench', title: 'OS #184 movida para “Em execução”', meta: 'Há 2h · Trator JD 7230J' }
  ];
  return [...state.activities, ...defaults].slice(0, 5).map(a => `<div class="activity"><span class="activity-icon">${icon(a.icon || 'check')}</span><span><strong>${a.title}</strong><small>${a.meta}</small></span></div>`).join('');
}

function renderDashboard() {
  const chart = lineChart([31,34,38,42,46,49,52,57,61,64,67,68], ['S1','S2','S3','S4','S5','S6','S7','S8','S9','S10','S11','S12'], {
    secondary: [29,33,37,41,45,49,53,57,61,65,69,73], min: 25, max: 76, suffix: '%', aria: 'Evolução semanal consolidada da colheita versus plano'
  });
  content.innerHTML = `<div class="page-enter">
    ${pageHead({ eyebrow: 'CENTRO DE OPERAÇÕES', title: 'Bom dia, Mariana.', description: 'Acompanhe safra, caixa e ativos em uma única visão. Hoje há 3 exceções que precisam da sua decisão.', primary: 'Registrar produção', secondary: { label: 'Exportar visão', icon: 'download', action: 'export' } })}
    <section class="metric-grid">
      ${metricCard({ label: 'Colheita registrada hoje', value: '1.248', unit: 'sc', iconName: 'sprout', delta: '+12,4%', foot: 'versus média de 7 dias' })}
      ${metricCard({ label: 'Área colhida', value: '68,2', unit: '%', iconName: 'map', delta: '+4,1 p.p.', foot: 'nesta semana', tone: 'gold' })}
      ${metricCard({ label: 'Saldo projetado · 90 dias', value: 'R$ 2,41', unit: 'mi', iconName: 'wallet', delta: 'R$ 380 mil', foot: 'acima do piso', tone: 'blue' })}
      ${metricCard({ label: 'Disponibilidade da frota', value: '92,4', unit: '%', iconName: 'gauge', delta: '-1,8 p.p.', foot: '2 máquinas paradas', tone: 'orange', down: true })}
    </section>
    <div class="dashboard-grid">
      <div class="stack">
        ${panel('Progresso da safra', 'Produção acumulada e percentual realizado sobre o plano por cultura', `<div class="harvest-cards">
          ${harvestCard({ crop:'coffee', iconName:'coffee', detail:{title:'Café',subtitle:'Manual · árvore · varrição'}, value:'18.640', unit:'sc beneficiadas', progress:68, plan:'27,4 mil sc', color:'#7b593f' })}
          ${harvestCard({ crop:'corn', iconName:'sprout', detail:{title:'Milho',subtitle:'2ª safra · 540 ha'}, value:'32.880', unit:'sc expedidas', progress:74, plan:'44,6 mil sc', color:'#c6923c' })}
          ${harvestCard({ crop:'soy', iconName:'sprout', detail:{title:'Soja',subtitle:'Safra verão · 680 ha'}, value:'41.230', unit:'sc expedidas', progress:91, plan:'45,3 mil sc', color:'#557c46' })}
        </div>`, '<button class="text-button" data-view-link="coffee">Ver detalhes '+icon('arrow')+'</button>')}
        ${panel('Evolução consolidada da colheita', 'Percentual acumulado da área planejada · últimas 12 semanas', `${chart}<div class="chart-legend"><span><i style="--legend-color:var(--green)"></i>Realizado</span><span><i class="dashed" style="--legend-color:var(--gold)"></i>Plano</span></div>`, '<span class="panel-meta">Safra 2025/26</span>')}
      </div>
      <aside class="stack">
        ${panel('Atenção necessária', 'Exceções ordenadas por impacto operacional', `<div class="alerts">
          <button class="alert-item" data-view-link="loads" style="--alert-color:var(--red);--alert-soft:var(--red-soft);border:0;text-align:left;width:100%;cursor:pointer"><span class="alert-icon">${icon('receipt')}</span><span><strong>3 cargas sem NF autorizada</strong><small>R$ 214 mil aguardando faturamento</small></span><i>${icon('chevron')}</i></button>
          <button class="alert-item" data-view-link="workshop" style="--alert-color:var(--gold);--alert-soft:var(--gold-soft);border:0;text-align:left;width:100%;cursor:pointer"><span class="alert-icon">${icon('wrench')}</span><span><strong>Colheitadeira vence revisão em 8h</strong><small>Case 8250 · prioridade alta</small></span><i>${icon('chevron')}</i></button>
          <button class="alert-item" data-view-link="inventory" style="--alert-color:var(--blue);--alert-soft:var(--blue-soft);border:0;text-align:left;width:100%;cursor:pointer"><span class="alert-icon">${icon('package')}</span><span><strong>12 itens abaixo do estoque mínimo</strong><small>4 críticos para a oficina</small></span><i>${icon('chevron')}</i></button>
        </div>`, '<span class="status warning">3 abertas</span>')}
        ${panel('Atividade recente', 'Eventos consolidados do campo e do escritório', `<div class="activity-list">${recentActivities()}</div>`, '<button class="text-button" data-action="show-all">Ver todas</button>')}
      </aside>
    </div>
  </div>`;
}

const coffeeDryingLots = [
  { code:'TER-026', yard:'Terreiro 02 · Quadra B', plot:'C-07 · Boa Esperança', origin:'De árvore', received:'17 jul · 07:20', volume:'4.850 L', moisture:'22,4%', rain:true, weather:'Chuva 12 mm · 16 jul', notes:'Revolver a cada 40 min; coberto às 16:10.', status:'Secagem' },
  { code:'TER-025', yard:'Terreiro 01 · Quadra A', plot:'C-04 · Lavoura Sede', origin:'De árvore', received:'16 jul · 14:05', volume:'5.000 L', moisture:'19,8%', rain:false, weather:'Sem chuva', notes:'Uniforme, sem fermentação observada.', status:'Pronto' },
  { code:'TER-024', yard:'Terreiro 03 · Quadra C', plot:'C-02 · Vargem', origin:'De chão', received:'16 jul · 10:40', volume:'4.600 L', moisture:'24,1%', rain:true, weather:'Garoa · 8 mm', notes:'Separado por umidade; retirar folhas na próxima movimentação.', status:'Atenção' },
  { code:'TER-023', yard:'Terreiro 02 · Quadra A', plot:'C-12 · Pedra Branca', origin:'De chão', received:'15 jul · 17:25', volume:'4.200 L', moisture:'17,6%', rain:false, weather:'Sem chuva', notes:'Lote limpo; liberar para secador após conferência.', status:'Pronto' }
];

function coffeeLotRows() {
  const lots = coffeeDryingLots.filter(lot =>
    state.coffeeLotFilter === 'Todos' ||
    state.coffeeLotFilter === lot.origin ||
    state.coffeeLotFilter === 'Tomou chuva' && lot.rain
  );
  return lots.map(lot => {
    const statusClass = lot.status === 'Atenção' ? 'warning' : lot.status === 'Secagem' ? 'info' : '';
    return `<tr><td><strong>${lot.code}</strong><small>${lot.received}</small></td><td><strong>${lot.yard}</strong><small>${lot.plot}</small></td><td><span class="status ${lot.origin === 'De chão' ? 'warning' : ''}">${lot.origin}</span></td><td><strong>${lot.volume}</strong><small>Umidade ${lot.moisture}</small></td><td><span class="status ${lot.rain ? 'warning' : ''}">${lot.weather}</span></td><td class="notes-cell">${lot.notes}</td><td><span class="status ${statusClass}">${lot.status}</span></td><td><button class="icon-button" style="width:29px;height:29px;padding:7px" data-action="row-detail" aria-label="Abrir ${lot.code}">${icon('chevron')}</button></td></tr>`;
  }).join('');
}

const coffeeDryerBatches = {
  'SEC-041': {
    code:'SEC-041', lot:'TER-025', dryer:'Secador 02', started:'16 jul · 17:30', ended:'17 jul · 05:30',
    entryMoisture:19.8, exitMoisture:11.6, airTemp:78.0, massTemp:42.0, hours:12.0, target:11.5,
    status:'Concluído', destination:'Tulha 04', notes:'Fluxo de ar estável; reduzir 2 °C nas últimas duas horas.',
    moisture:[19.8,18.9,18.0,17.2,16.4,15.7,15.0,14.4,13.8,13.2,12.6,12.1,11.6]
  },
  'SEC-040': {
    code:'SEC-040', lot:'TER-023', dryer:'Secador 01', started:'15 jul · 19:10', ended:'16 jul · 09:10',
    entryMoisture:17.6, exitMoisture:11.5, airTemp:72.0, massTemp:39.5, hours:14.0, target:11.5,
    status:'Concluído', destination:'Tulha 02', notes:'Queda mais lenta entre 4h e 7h; verificar carga e distribuição.',
    moisture:[17.6,17.0,16.5,16.0,15.6,15.3,15.0,14.7,14.2,13.7,13.2,12.7,12.2,11.8,11.5]
  },
  'SEC-042': {
    code:'SEC-042', lot:'TER-026', dryer:'Secador 03', started:'17 jul · 11:20', ended:'Em andamento',
    entryMoisture:22.4, exitMoisture:15.8, airTemp:80.0, massTemp:44.2, hours:7.0, target:11.8,
    status:'Em secagem', destination:'A definir', notes:'Lote tomou chuva; acompanhar temperatura da massa a cada hora.',
    moisture:[22.4,21.3,20.2,19.2,18.3,17.4,16.6,15.8]
  }
};

function renderDryerSection() {
  const batch = coffeeDryerBatches[state.coffeeDryerLot] || coffeeDryerBatches['SEC-041'];
  const labels = batch.moisture.map((_, index) => `${index}h`);
  const target = batch.moisture.map(() => batch.target);
  const moistureLoss = batch.entryMoisture - batch.exitMoisture;
  const hourlyLoss = moistureLoss / batch.hours;
  const chart = lineChart(batch.moisture, labels, {
    secondary: target,
    min: 10,
    max: Math.ceil(batch.entryMoisture + 1),
    decimals: 1,
    suffix: '%',
    aria: `Perda de umidade por hora do lote ${batch.code}, de ${fmtBR(batch.entryMoisture,1)}% para ${fmtBR(batch.exitMoisture,1)}%`
  });
  const tabs = Object.values(coffeeDryerBatches).map(item => `<button class="${item.code===batch.code?'active':''}" data-dryer-lot="${item.code}" role="tab" aria-selected="${item.code===batch.code}">${item.code}</button>`).join('');
  const batchRows = Object.values(coffeeDryerBatches).map(item => {
    const loss = item.entryMoisture - item.exitMoisture;
    const rate = loss / item.hours;
    return `<tr><td><strong>${item.code}</strong><small>${item.lot} · ${item.dryer}</small></td><td>${item.started}<small>${item.ended}</small></td><td><strong>${fmtBR(item.entryMoisture,1)}%</strong><small>entrada</small></td><td><strong>${item.status==='Em secagem'?fmtBR(item.exitMoisture,1)+'% atual':fmtBR(item.exitMoisture,1)+'%'}</strong><small>${item.status==='Em secagem'?'leitura atual':'saída'}</small></td><td>${fmtBR(item.airTemp,1)} °C<small>ar médio</small></td><td>${fmtBR(item.massTemp,1)} °C<small>massa média</small></td><td>${fmtBR(item.hours,1)} h</td><td>${fmtBR(rate,2)} p.p./h</td><td><span class="status ${item.status==='Em secagem'?'info':''}">${item.status}</span></td></tr>`;
  }).join('');
  return `<div class="dryer-section">
    <div class="two-col">
      <div class="dryer-chart-panel">${panel(`Perda de umidade por hora · ${batch.code}`, `${batch.lot} · ${batch.dryer} · leituras horárias em pontos percentuais`, `<div class="subnav dryer-tabs" role="tablist" aria-label="Selecionar lote do secador">${tabs}</div>${chart}<div class="chart-legend"><span><i style="--legend-color:var(--green)"></i>Umidade medida</span><span><i class="dashed" style="--legend-color:var(--gold)"></i>Meta de saída · ${fmtBR(batch.target,1)}%</span></div>`, `<span class="status ${batch.status==='Em secagem'?'info':''}">${batch.status}</span>`)}</div>
      ${panel('Indicadores da secagem','Resumo do lote selecionado para comparação e melhoria do processo',`<div class="summary-list"><div class="summary-row"><span>Umidade de entrada</span><strong>${fmtBR(batch.entryMoisture,1)}%</strong></div><div class="summary-row"><span>${batch.status==='Em secagem'?'Umidade atual':'Umidade de saída'}</span><strong>${fmtBR(batch.exitMoisture,1)}%</strong></div><div class="summary-row"><span>Temperatura média do ar</span><strong>${fmtBR(batch.airTemp,1)} °C</strong></div><div class="summary-row"><span>Temperatura média da massa</span><strong>${fmtBR(batch.massTemp,1)} °C</strong></div><div class="summary-row"><span>Tempo de secagem</span><strong>${fmtBR(batch.hours,1)} h</strong></div><div class="summary-row"><span>Perda total de umidade</span><strong>${fmtBR(moistureLoss,1)} p.p.</strong></div><div class="summary-total"><span>Perda média por hora</span><strong>${fmtBR(hourlyLoss,2)} p.p./h</strong></div></div><div class="form-note dryer-note">${icon('clipboard')}${batch.notes}</div>`, `<div class="panel-actions"><button class="secondary-button" data-action="dryer-reading">${icon('plus')}Leitura</button><button class="secondary-button" data-action="dryer-close">${icon('check')}Encerrar</button></div>`)}
    </div>
    <div style="height:16px"></div>
    ${panel('Lotes enviados ao secador','Parâmetros finais e taxa de retirada de umidade para comparação entre ciclos',`<div class="table-wrap"><table class="data-table dryer-table"><thead><tr><th>Lote / secador</th><th>Período</th><th>Umidade entrada</th><th>Umidade saída</th><th>Temperatura do ar</th><th>Temperatura da massa</th><th>Tempo</th><th>Perda / hora</th><th>Situação</th></tr></thead><tbody>${batchRows}</tbody></table></div>`, '<button class="primary-button" data-action="dryer-batch">'+icon('plus')+'Nova secagem</button>')}
  </div>`;
}

const coffeeSensoryAttributes = [
  ['Fragrância / aroma',8.25], ['Sabor',8.50], ['Finalização',8.00],
  ['Acidez',8.00], ['Corpo',8.25], ['Equilíbrio',8.25],
  ['Uniformidade',10.00], ['Xícara limpa',10.00], ['Doçura',10.00],
  ['Avaliação global',8.25]
];

function sensoryBars() {
  return coffeeSensoryAttributes.map(function(item) {
    return '<div class=sensory-row><span>'+item[0]+'</span><div class=sensory-track role=img><i style=width:'+(item[1]*10)+'%></i></div><strong>'+fmtBR(item[1],2)+'</strong></div>';
  }).join('');
}

const coffeeSieveDistribution = [
  { screen: '19', retained: 7.8, accumulated: 7.8, grams: 39 },
  { screen: '18', retained: 23.4, accumulated: 31.2, grams: 117 },
  { screen: '17', retained: 37.2, accumulated: 68.4, grams: 186 },
  { screen: '16', retained: 18.6, accumulated: 87.0, grams: 93 },
  { screen: '15', retained: 7.8, accumulated: 94.8, grams: 39 },
  { screen: 'Fundo', retained: 5.2, accumulated: 100.0, grams: 26 }
];

function coffeeSieveBars() {
  return coffeeSieveDistribution.map(function(item) {
    return '<div class=sieve-row><strong>'+item.screen+'</strong><div class=sieve-bar-cell><div class=sieve-track role=img aria-label=Peneira-'+item.screen+'><i style=width:'+item.retained+'%></i></div><small>Acumulado '+fmtBR(item.accumulated,1)+'%</small></div><b>'+fmtBR(item.retained,1)+'%</b><span>'+fmtBR(item.grams,0)+' g</span></div>';
  }).join('');
}

function renderCoffeeQualityLegacy() {
  var sensory = state.coffeeQualityTab === 'sensorial';
  var physicalTab = sensory ? '<button data-coffee-quality-tab=physical role=tab>Classificação física</button>' : '<button class=active data-coffee-quality-tab=physical role=tab>Classificação física</button>';
  var sensoryTab = sensory ? '<button class=active data-coffee-quality-tab=sensorial role=tab>Perfil sensorial</button>' : '<button data-coffee-quality-tab=sensorial role=tab>Perfil sensorial</button>';
  var tabs = '<div class=subnav role=tablist>'+physicalTab+sensoryTab+'</div>';
  if (!sensory) {
    var physicalBody = tabs+'<div class=harvest-cards><article class=harvest-card><strong>Peneira 17+</strong><div class=harvest-number><b>68,4</b><span>%</span></div><small>342 g de 500 g</small></article><article class=harvest-card><strong>Peneira 16+</strong><div class=harvest-number><b>87,0</b><span>%</span></div><small>435 g de 500 g</small></article><article class=harvest-card><strong>Fundo</strong><div class=harvest-number><b>5,2</b><span>%</span></div><small>26 g retidos</small></article></div><div style=height:16px></div><div class=two-col><div class=sieve-card><div class=sieve-card-head><div><span class=eyebrow>FIS-018 · PRO-018 · TER-025</span><h3>Distribuição por peneira</h3><p>Percentual e peso retido · amostra de 500 g</p></div><span class=status>Conferida</span></div><div class=sieve-axis><span>Peneira</span><span>Retenção / acumulado</span><span>Retido</span><span>Peso</span></div><div class=sieve-bars>'+coffeeSieveBars()+'</div></div><div class=sensory-summary><div class=summary-list><div class=summary-row><span>Talhão / lote</span><strong>C-07 · TER-025</strong></div><div class=summary-row><span>Ciclo de secador</span><strong>SEC-041</strong></div><div class=summary-row><span>Variedade</span><strong>Catuaí 144</strong></div><div class=summary-row><span>Umidade da amostra</span><strong>11,4%</strong></div><div class=summary-row><span>Tipo</span><strong>4/5</strong></div><div class=summary-total><span>Classificação comercial</span><strong>Bica corrida · 17/18</strong></div></div><div class=form-note>'+icon('scale')+'Peneiras 17, 18 e 19 representam 68,4% da amostra. Pesos e percentuais permanecem ligados ao lote e à prova sensorial.</div></div></div><div style=height:16px></div><div class=table-wrap><table class=data-table><thead><tr><th>Análise / amostra</th><th>Lote / talhão</th><th>Amostra</th><th>Peneira 17+</th><th>Peneira 16+</th><th>Fundo</th><th>Umidade</th><th>Data / situação</th></tr></thead><tbody><tr><td><strong>FIS-018</strong><small>PRO-018</small></td><td>TER-025<small>C-07 · Boa Esperança</small></td><td>500 g</td><td><strong>68,4%</strong></td><td>87,0%</td><td>5,2%</td><td>11,4%</td><td>17 jul 2026<small><span class=status>Conferida</span></small></td></tr><tr><td><strong>FIS-017</strong><small>PRO-017</small></td><td>TER-023<small>C-12 · Pedra Branca</small></td><td>500 g</td><td><strong>61,8%</strong></td><td>82,6%</td><td>7,4%</td><td>11,7%</td><td>16 jul 2026<small><span class=status>Conferida</span></small></td></tr><tr><td><strong>FIS-016</strong><small>PRO-016</small></td><td>TER-024<small>C-04 · Lavoura Sede</small></td><td>300 g</td><td><strong>54,7%</strong></td><td>76,3%</td><td>9,0%</td><td>12,1%</td><td>16 jul 2026<small><span class=status warning>Revisão</span></small></td></tr></tbody></table></div>';
    return panel('Qualidade do café','Classificação física, peneiras e perfil sensorial ligados ao lote de origem',physicalBody,'<button class=primary-button data-action=coffee-sieve>'+icon('plus')+'Nova análise de peneira</button>');
  }
  var profile = '<div class=two-col><div class=sensory-card><div class=sensory-card-head><div><span class=eyebrow>PRO-018 · TER-025 · SEC-041</span><h3>Perfil sensorial do lote</h3><p>Protocolo SCA · 17 jul 2026 · Ana Ribeiro</p></div><div class=sensory-total><strong>87,50</strong><span>pontos</span></div></div><div class=sensory-bars>'+sensoryBars()+'</div></div><div class=sensory-summary><div class=summary-list><div class=summary-row><span>Classificação</span><strong>Especial · excelente</strong></div><div class=summary-row><span>Acidez</span><strong>Cítrica · málica</strong></div><div class=summary-row><span>Corpo</span><strong>Cremoso</strong></div><div class=summary-row><span>Processo / origem</span><strong>Natural · de árvore</strong></div><div class=summary-total><span>Lote rastreado</span><strong>TER-025 → SEC-041</strong></div></div><div class=descriptor-block><span>Descritores predominantes</span><div class=descriptor-tags><i>Chocolate ao leite</i><i>Caramelo</i><i>Frutas amarelas</i><i>Laranja</i><i>Floral</i></div></div><div class=form-note>'+icon('coffee')+'Xícara doce e limpa, com acidez cítrica elegante, corpo cremoso e finalização longa.</div></div></div>';
  var history = '<div class=table-wrap><table class=data-table><thead><tr><th>Prova / lote</th><th>Pontuação</th><th>Classificação</th><th>Descritores</th><th>Provador</th><th>Data</th><th>Situação</th></tr></thead><tbody><tr><td><strong>PRO-018</strong><small>TER-025 · SEC-041</small></td><td><strong>87,50</strong></td><td>Especial · excelente</td><td class=notes-cell>Chocolate, caramelo, frutas amarelas, floral</td><td>Ana Ribeiro</td><td>17 jul 2026</td><td><span class=status>Liberado</span></td></tr><tr><td><strong>PRO-017</strong><small>TER-023 · SEC-040</small></td><td><strong>84,25</strong></td><td>Especial · muito bom</td><td class=notes-cell>Castanhas, melaço, laranja madura</td><td>Lucas Martins</td><td>16 jul 2026</td><td><span class=status>Liberado</span></td></tr><tr><td><strong>PRO-016</strong><small>TER-024 · de chão</small></td><td><strong>81,75</strong></td><td>Especial</td><td class=notes-cell>Cacau, especiarias, leve fermentado</td><td>Ana Ribeiro</td><td>16 jul 2026</td><td><span class=status>Revisão</span></td></tr></tbody></table></div>';
  return panel('Qualidade do café','Classificação física e perfil sensorial ligados ao lote de origem',tabs+profile+'<div style=height:16px></div>'+history,'<button class=primary-button data-action=coffee-sensory>'+icon('plus')+'Nova prova</button>');
}

function coffeeQualityTabs() {
  const tabs = [['physical','Classificação física'],['sensorial','SCAA histórico'],['cva','CVA'],['ledger','Razão de lotes'],['intelligence','Inteligência']];
  return '<div class=subnav role=tablist aria-label=Qualidade-do-café>'+tabs.map(item => '<button class='+(state.coffeeQualityTab===item[0]?'active':'inactive')+' data-coffee-quality-tab='+item[0]+' role=tab>'+item[1]+'</button>').join('')+'</div>';
}

function renderCoffeeCva() {
  const dimensions = '<div class=cva-grid><article><span>01 · Avaliação física</span><strong>86,2</strong><small>Peneira 17+ · 68,4% · tipo 4/5 · 11,4% umidade</small></article><article><span>02 · Avaliação descritiva</span><strong>8,6</strong><small>Chocolate, caramelo, laranja, floral · intensidade e CATA</small></article><article><span>03 · Avaliação afetiva</span><strong>8,8</strong><small>Impressão de qualidade · 3 provadores calibrados</small></article><article><span>04 · Fatores extrínsecos</span><strong>9,1</strong><small>Origem, variedade, processo, sustentabilidade e rastreabilidade</small></article></div>';
  const history = '<div class=table-wrap><table class=data-table><thead><tr><th>Ficha / lote</th><th>Físico</th><th>Descritivo</th><th>Afetivo</th><th>Extrínseco</th><th>Resultado</th><th>Versão</th><th>Situação</th></tr></thead><tbody><tr><td><strong>CVA-026</strong><small>TER-025 · SEC-041</small></td><td>86,2</td><td>8,6</td><td>8,8</td><td>9,1</td><td><strong>Especial · excelente</strong></td><td>CVA 2024</td><td><span class=status>Liberada</span></td></tr><tr><td><strong>SCAA-184</strong><small>TER-023 · SEC-040</small></td><td>84,0</td><td>8,1</td><td>8,3</td><td>—</td><td><strong>84,25 pontos</strong></td><td>SCAA 2004</td><td><span class=status-info>Histórico</span></td></tr></tbody></table></div>';
  return panel('Coffee Value Assessment · CVA','Avaliação física, descritiva, afetiva e extrínseca; fichas antigas SCAA permanecem preservadas',coffeeQualityTabs()+dimensions+'<div style=height:16px></div>'+history,'<button class=primary-button data-action=coffee-cva>'+icon('plus')+'Nova ficha CVA</button>');
}

function renderCoffeeLedger() {
  const balances = '<div class=harvest-cards><article class=harvest-card><strong>Armazém próprio</strong><div class=harvest-number><b>128.460</b><span>kg</span></div><small>7 lotes · 4 posições físicas</small></article><article class=harvest-card><strong>Cooperativa · terceiro</strong><div class=harvest-number><b>42.180</b><span>kg</span></div><small>Saldo de propriedade da fazenda</small></article><article class=harvest-card><strong>Comprometido</strong><div class=harvest-number><b>36.000</b><span>kg</span></div><small>2 contratos · ainda não expedido</small></article></div>';
  const genealogy = '<div class=lot-genealogy><article><span>Origem</span><strong>TER-025 · 5.840 kg</strong><small>C-07 · árvore · Catuaí 144</small></article><b>'+icon('arrow')+'</b><article><span>Secagem</span><strong>SEC-041 · 5.410 kg</strong><small>Perda 7,36% · 12 h</small></article><b>'+icon('arrow')+'</b><article><span>Desdobramento</span><strong>LOT-026A · 3.600 kg</strong><small>Tulha 04 · especial</small></article><article class=lot-branch><strong>LOT-026B · 1.810 kg</strong><small>Tulha 05 · comercial</small></article></div>';
  const movements = '<div class=table-wrap><table class=data-table><thead><tr><th>Movimento</th><th>Data / origem</th><th>Destino</th><th>Quantidade canônica</th><th>Proprietário</th><th>Documento</th><th>Situação</th></tr></thead><tbody><tr><td><strong>MOV-184 · Desdobramento</strong><small>LOT-026</small></td><td>17 jul · Tulha 04</td><td>LOT-026A + LOT-026B</td><td><strong>5.410 kg</strong></td><td>Fazenda Boa Vista</td><td>Guia A4 + QR</td><td><span class=status>Confirmado</span></td></tr><tr><td><strong>MOV-181 · Mistura</strong><small>LOT-021A + LOT-022</small></td><td>16 jul · Tulhas 01/02</td><td>BLD-009</td><td><strong>9.840 kg</strong></td><td>Fazenda Boa Vista</td><td>QR BLD-009</td><td><span class=status>Confirmado</span></td></tr><tr><td><strong>MOV-176 · Transferência</strong><small>LOT-019</small></td><td>15 jul · Armazém próprio</td><td>Cooperativa Sul</td><td><strong>12.000 kg</strong></td><td>Fazenda Boa Vista</td><td>Romaneio 00418</td><td><span class=status-info>Em terceiro</span></td></tr><tr><td><strong>MOV-169-R · Estorno</strong><small>corrige MOV-169</small></td><td>14 jul · auditoria</td><td>Saldo restaurado</td><td><strong>+600 kg</strong></td><td>Fazenda Boa Vista</td><td>Motivo obrigatório</td><td><span class=status-warning>Estornado</span></td></tr></tbody></table></div>';
  const actions = '<div class=panel-actions><button class=secondary-button data-action=lot-split>Desdobrar</button><button class=secondary-button data-action=lot-mix>Misturar</button><button class=secondary-button data-action=lot-reverse>Estornar</button><button class=primary-button data-action=lot-movement>'+icon('plus')+'Movimentar</button></div>';
  return panel('Razão físico de lotes','Saldo canônico em kg, localização, proprietário, genealogia e correções por estorno — nunca por exclusão',coffeeQualityTabs()+balances+'<div style=height:16px></div>'+genealogy+'<div style=height:16px></div>'+movements,actions);
}

function renderCoffeeIntelligence() {
  const factors = '<div class=intelligence-grid><article><span>Chuva no terreiro</span><strong>-2,35 pontos</strong><small>média histórica em lotes de chão que receberam mais de 8 mm</small></article><article><span>Secagem ideal</span><strong>0,54 p.p./h</strong><small>ar 72–76 °C · massa abaixo de 42 °C</small></article><article><span>Prêmio sensorial</span><strong>R$ 18,40/sc</strong><small>por ponto acima de 84 nos contratos fechados</small></article><article><span>Custo do especial</span><strong>R$ 64,80/sc</strong><small>pós-colheita, qualidade e armazenagem incluídos</small></article></div>';
  const ranking = '<div class=table-wrap><table class=data-table><thead><tr><th>Talhão</th><th>Produtividade</th><th>Custo / sc</th><th>CVA / SCAA</th><th>Preço realizado</th><th>Margem / ha</th><th>Melhor ajuste</th></tr></thead><tbody><tr><td><strong>C-07 · Boa Esperança</strong><small>Catuaí 144</small></td><td>34,2 sc/ha</td><td>R$ 312,40</td><td><strong>87,50</strong></td><td>R$ 1.486,00/sc</td><td><strong>R$ 31.842</strong></td><td>1,20 km/h · vibração 850 rpm</td></tr><tr><td><strong>C-04 · Lavoura Sede</strong><small>Mundo Novo</small></td><td>31,5 sc/ha</td><td>R$ 326,10</td><td><strong>84,25</strong></td><td>R$ 1.394,00/sc</td><td><strong>R$ 27.604</strong></td><td>1,35 km/h · vibração 780 rpm</td></tr><tr><td><strong>C-12 · Pedra Branca</strong><small>Catucaí</small></td><td>27,9 sc/ha</td><td>R$ 351,80</td><td><strong>81,75</strong></td><td>R$ 1.218,00/sc</td><td><strong>R$ 20.418</strong></td><td>2,55 km/h · escovas 300 rpm</td></tr></tbody></table></div>';
  const recommendations = '<div class=alerts><div class=alert-item style=--alert-color:var(--green);--alert-soft:var(--green-soft)><span class=alert-icon>'+icon('sparkles')+'</span><span><strong>Replicar curva SEC-041</strong><small>Apresentou maior uniformidade, menor custo térmico e +1,2 ponto em lotes comparáveis.</small></span></div><div class=alert-item style=--alert-color:var(--gold);--alert-soft:var(--gold-soft)><span class=alert-icon>'+icon('cloud')+'</span><span><strong>Priorizar cobertura do TER-026</strong><small>Previsão de chuva em 6 horas; risco projetado de perda de 1,4 ponto.</small></span></div><div class=alert-item style=--alert-color:var(--blue);--alert-soft:var(--blue-soft)><span class=alert-icon>'+icon('tractor')+'</span><span><strong>Ajustar vibração no C-04</strong><small>Histórico indica 6,8% menos verde com 810 rpm, sem aumento de desfolha.</small></span></div></div>';
  return panel('Inteligência do café','Relações entre agronomia, colheita, terreiro, secagem, qualidade, venda e margem',coffeeQualityTabs()+factors+'<div style=height:16px></div><div class=two-col>'+panel('Recomendações baseadas no histórico','Hipóteses transparentes para validação do responsável',recommendations)+panel('Indicadores de aprendizado','Amostra demonstrativa da safra','<div class=summary-list><div class=summary-row><span>Rendimento verde → beneficiado</span><strong>18,4%</strong></div><div class=summary-row><span>Dias colheita → laudo</span><strong>6,2 dias</strong></div><div class=summary-row><span>Lotes especiais</span><strong>62%</strong></div><div class=summary-row><span>Ganho por segregação</span><strong>R$ 284 mil</strong></div><div class=summary-total><span>Margem adicional estimada</span><strong>R$ 46,80/sc</strong></div></div>')+'</div><div style=height:16px></div>'+ranking,'<button class=secondary-button data-action=coffee-model>'+icon('trending')+'Atualizar análise</button>');
}

function renderCoffeeQuality() {
  if (state.coffeeQualityTab === 'cva') return renderCoffeeCva();
  if (state.coffeeQualityTab === 'ledger') return renderCoffeeLedger();
  if (state.coffeeQualityTab === 'intelligence') return renderCoffeeIntelligence();
  return renderCoffeeQualityLegacy().replace(/<div class=subnav role=tablist>.*?<\/div>/, coffeeQualityTabs());
}

function renderCoffeeSoilSprayPanel() {
  const cards = '<div class=harvest-cards><article class=harvest-card><div class=harvest-card-top><span class=crop-icon>'+icon('map')+'</span><span><strong>Área programada</strong><small>APL-045 · C-07</small></span></div><div class=summary-list style=margin-top:11px><div class=summary-row><span>Faixa sob a saia</span><strong>18,4 ha</strong></div><div class=summary-row><span>Condição do solo</span><strong>Levemente úmido</strong></div></div></article><article class=harvest-card><div class=harvest-card-top><span class=crop-icon>'+icon('gauge')+'</span><span><strong>Regulagem dirigida</strong><small>Barra cafeeira · dois lados</small></span></div><div class=summary-list style=margin-top:11px><div class=summary-row><span>Velocidade / motor</span><strong>5,2 km/h · 1.850 rpm</strong></div><div class=summary-row><span>Faixa / espaçamento</span><strong>1,20 m · 3,60 m</strong></div></div></article><article class=harvest-card><div class=harvest-card-top><span class=crop-icon>'+icon('droplet')+'</span><span><strong>Calibração no solo</strong><small>FCX 80-02 · proteção antideriva</small></span></div><div class=summary-list style=margin-top:11px><div class=summary-row><span>Bicos direcionados</span><strong>8 · 4 por lado</strong></div><div class=summary-row><span>Vazão</span><strong>220 L/ha · 0,64 L/min</strong></div></div></article></div>';
  const history = '<div class=table-wrap><table class=data-table><thead><tr><th>Aplicação / talhão</th><th>Receita / alvo</th><th>Modalidade</th><th>Faixa / lados</th><th>Área</th><th>Solo</th><th>Situação</th></tr></thead><tbody><tr><td><strong>APL-045</strong><small>C-07 · Boa Esperança</small></td><td>Nematicida NS-03<small>Zona radicular</small></td><td>Via solo<small>Faixa sob a saia</small></td><td>1,20 m<small>Dois lados</small></td><td>18,4 ha</td><td>Levemente úmido</td><td><span class=status>Liberada</span></td></tr><tr><td><strong>APL-037</strong><small>C-04 · Lavoura Sede</small></td><td>Inseticida SI-02<small>Aplicação sistêmica</small></td><td>Via solo<small>Linha dirigida</small></td><td>0,80 m<small>Um lado</small></td><td>12,6 ha</td><td>Úmido após chuva</td><td><span class=status>Concluída</span></td></tr></tbody></table></div>';
  const actions = '<div class=panel-actions><button class=secondary-button data-action=coffee-soil-params>'+icon('gauge')+'Salvar preset via solo</button><button class=primary-button data-action=coffee-soil-spray>'+icon('plus')+'Nova aplicação via solo</button></div>';
  return panel('Pulverização via solo · café','Aplicações dirigidas à faixa sob a saia ou à linha, separadas da pulverização foliar e rastreadas pelo PVGest',cards+'<div style=height:16px></div>'+history,actions);
}

function renderCoffee() {
  const chart = lineChart([520,610,705,770,840,930,1010,1120,1190,1265,1310,1368], ['29/4','6/5','13/5','20/5','27/5','3/6','10/6','17/6','24/6','1/7','8/7','15/7'], {
    secondary: [500,590,680,760,850,940,1030,1120,1210,1300,1390,1480], min: 400, max: 1550, suffix: ' sc', aria: 'Evolução semanal da colheita de café em sacas'
  });
  content.innerHTML = `<div class="page-enter">
    ${pageHead({ eyebrow: 'COLHEITA DE CAFÉ', title: 'Controle do fruto ao lote.', description: 'Acompanhe carretas, colhedoras, lotes de terreiro e ciclos de secador com temperaturas, umidade de entrada e saída e perda por hora.', primary: 'Novo apontamento', secondary: { label: 'Registrar horas', icon: 'clock', action: 'coffee-hours' } })}
    <section class="metric-grid">
      ${metricCard({ label:'Volume acumulado', value:'18.640', unit:'sc', iconName:'coffee', delta:'+8,7%', foot:'versus safra anterior' })}
      ${metricCard({ label:'Volume em carretas · hoje', value:'73.000', unit:'L', iconName:'truck', delta:'14,6 carretas', foot:'capacidade de 5.000 L', tone:'gold' })}
      ${metricCard({ label:'Horas mecanizadas · hoje', value:'28,6', unit:'h', iconName:'tractor', delta:'17,4 próprias', foot:'11,2 h terceirizadas', tone:'blue' })}
      ${metricCard({ label:'Custo colhido', value:'R$ 38,70', unit:'/sc', iconName:'coins', delta:'-R$ 2,10', foot:'abaixo do orçamento', tone:'orange' })}
    </section>
    ${renderCoffeeSoilSprayPanel()}
    <div style=height:16px></div>
    <div class="two-col">
      ${panel('Evolução da colheita de café', 'Sacas beneficiadas por semana · realizado versus plano', `${chart}<div class="chart-legend"><span><i style="--legend-color:var(--green)"></i>Realizado</span><span><i class="dashed" style="--legend-color:var(--gold)"></i>Plano</span></div>`, '<select class="mini-select"><option>Todos os talhões</option><option>Lavoura Norte</option><option>Lavoura Sede</option></select>')}
      ${panel('Composição por método', 'Participação no volume colhido · 18.640 sc', `<div class="donut-layout"><div class="donut"><div class="donut-center"><strong>18,6 mil</strong><span>sacas totais</span></div></div><div class="legend-list"><div class="legend-row" style="--legend-color:var(--green)"><i></i><span>Manual</span><b>57%</b></div><div class="legend-row" style="--legend-color:var(--gold)"><i></i><span>De árvore</span><b>26%</b></div><div class="legend-row" style="--legend-color:#a68973"><i></i><span>Varrição</span><b>17%</b></div></div></div><div class="summary-list" style="margin-top:16px"><div class="summary-row"><span>Menor custo / saca</span><strong>De árvore · R$ 29,40</strong></div><div class="summary-row"><span>Maior rendimento</span><strong>Manual · 34,2 sc/ha</strong></div></div>`, '<button class="text-button" data-action="method-report">Relatório</button>')}
    </div>
    <div style="height:16px"></div>
    <div class="two-col">
      ${panel('Carretas de café · 5.000 L', 'Cada medição preserva capacidade, percentual preenchido, volume e origem', `<div class="vehicle-list"><div class="vehicle"><span class="vehicle-icon">${icon('truck')}</span><span><strong>CAR-018 · 4.850 L</strong><small>C-07 · De árvore · 97% preenchida</small></span><span class="status">No terreiro</span></div><div class="vehicle"><span class="vehicle-icon">${icon('truck')}</span><span><strong>CAR-017 · 5.000 L</strong><small>C-04 · De árvore · 100% preenchida</small></span><span class="status">Recebida</span></div><div class="vehicle"><span class="vehicle-icon">${icon('truck')}</span><span><strong>CAR-016 · 4.200 L</strong><small>C-12 · Chão · 84% preenchida</small></span><span class="status info">Em trânsito</span></div><div class="vehicle"><span class="vehicle-icon">${icon('truck')}</span><span><strong>CAR-015 · 4.600 L</strong><small>C-02 · Chão · 92% preenchida</small></span><span class="status muted">Beneficiada</span></div></div>`, '<button class="secondary-button" data-action="coffee-trailer">'+icon('plus')+'Registrar carreta</button>')}
      ${panel('Horas de colhedora', 'Jornada líquida por máquina, propriedade e método mecanizado', `<div class="vehicle-list"><div class="vehicle"><span class="vehicle-icon">${icon('tractor')}</span><span><strong>Case 8250 · Própria</strong><small>Árvore · C-07 · 08:10–16:40</small></span><b>7,8 h</b></div><div class="vehicle"><span class="vehicle-icon">${icon('tractor')}</span><span><strong>Jacto K3 · Terceirizada</strong><small>Chão · C-02 · Agrícola Souza</small></span><b>8,2 h</b></div><div class="vehicle"><span class="vehicle-icon">${icon('tractor')}</span><span><strong>Case 7700 · Própria</strong><small>Árvore · C-04 · 07:00–14:30</small></span><b>6,9 h</b></div><div class="vehicle"><span class="vehicle-icon">${icon('tractor')}</span><span><strong>MIAC Master · Terceirizada</strong><small>Chão · C-12 · Campo Forte</small></span><b>5,7 h</b></div></div>`, '<button class="secondary-button" data-action="coffee-hours">'+icon('plus')+'Registrar horas</button>')}
    </div>
    <div style="height:16px"></div>
    ${panel('Lotes de terreiro', 'Identificação, procedência, umidade, ocorrências climáticas e anotações preservadas por lote', `<div class="subnav coffee-lot-tabs" role="tablist" aria-label="Filtrar lotes de terreiro">${['Todos','De árvore','De chão','Tomou chuva'].map(filter=>`<button class="${state.coffeeLotFilter===filter?'active':''}" data-coffee-lot-filter="${filter}" role="tab" aria-selected="${state.coffeeLotFilter===filter}">${filter}</button>`).join('')}</div><div class="table-wrap"><table class="data-table coffee-lot-table"><thead><tr><th>Lote / entrada</th><th>Terreiro / origem</th><th>Tipo</th><th>Volume / umidade</th><th>Clima</th><th>Observações</th><th>Situação</th><th></th></tr></thead><tbody>${coffeeLotRows()}</tbody></table></div>`, '<button class="primary-button" data-action="coffee-lot">'+icon('plus')+'Novo lote</button>')}
    <div style="height:16px"></div>
    ${renderDryerSection()}
    <div style=height:16px></div>
    ${renderCoffeeQuality()}
    <div style="height:16px"></div>
    ${panel('Regulagens da colheita mecanizada', 'Parâmetros versionados por equipamento, método e talhão · árvore e chão', `<div class="table-wrap"><table class="data-table"><thead><tr><th>Método</th><th>Máquina / propriedade</th><th>Talhão</th><th>Velocidade</th><th>RPM motor</th><th>Órgão colhedor</th><th>Limpeza</th><th>Atualização</th></tr></thead><tbody><tr><td><span class="status">Árvore</span></td><td><strong>Case 8250</strong><small>Própria</small></td><td>C-07</td><td>1,20 km/h</td><td>2.100 rpm</td><td>Vibração 850 rpm<small>Abertura 28 mm</small></td><td>Ventilador 1.650 rpm</td><td>Hoje · 07:52<small>Ana Ribeiro</small></td></tr><tr><td><span class="status warning">Chão</span></td><td><strong>Jacto K3</strong><small>Terceirizada · Agrícola Souza</small></td><td>C-02</td><td>2,80 km/h</td><td>1.950 rpm</td><td>Escovas 320 rpm<small>Peneira 18 mm</small></td><td>Exaustor 1.580 rpm</td><td>Hoje · 06:08<small>Lucas Martins</small></td></tr><tr><td><span class="status">Árvore</span></td><td><strong>Case 7700</strong><small>Própria</small></td><td>C-04</td><td>1,35 km/h</td><td>2.050 rpm</td><td>Vibração 780 rpm<small>Abertura 30 mm</small></td><td>Ventilador 1.580 rpm</td><td>Ontem · 16:42<small>Ana Ribeiro</small></td></tr><tr><td><span class="status warning">Chão</span></td><td><strong>MIAC Master</strong><small>Terceirizada · Campo Forte</small></td><td>C-12</td><td>2,55 km/h</td><td>2.000 rpm</td><td>Escovas 300 rpm<small>Peneira 20 mm</small></td><td>Exaustor 1.620 rpm</td><td>Ontem · 15:18<small>Lucas Martins</small></td></tr></tbody></table></div>`, '<button class="primary-button" data-action="harvest-settings">'+icon('plus')+'Salvar regulagem</button>')}
    <div style="height:16px"></div>
    ${panel('Rendimento por talhão', 'Área, volume e produtividade sobre o hectare produtivo', `<div class="table-wrap"><table class="data-table"><thead><tr><th>Talhão / lavoura</th><th>Método dominante</th><th>Área</th><th>Colhido</th><th>Rendimento</th><th>Progresso</th><th>Situação</th></tr></thead><tbody>
      <tr><td><div class="cell-main"><span class="cell-icon">${icon('map')}</span><span><strong>C-07 · Boa Esperança</strong><small>Catuaí 144 · 11 anos</small></span></div></td><td>Manual</td><td>42,0 ha</td><td><strong>1.436 sc</strong></td><td>34,2 sc/ha</td><td><div class="row-progress"><div class="row-progress-line"><span style="width:72%"></span></div><small>72%</small></div></td><td><span class="status">No ritmo</span></td></tr>
      <tr><td><div class="cell-main"><span class="cell-icon">${icon('map')}</span><span><strong>C-04 · Lavoura Sede</strong><small>Mundo Novo · 15 anos</small></span></div></td><td>De árvore</td><td>55,8 ha</td><td><strong>1.756 sc</strong></td><td>31,5 sc/ha</td><td><div class="row-progress"><div class="row-progress-line"><span style="width:81%"></span></div><small>81%</small></div></td><td><span class="status">Adiantado</span></td></tr>
      <tr><td><div class="cell-main"><span class="cell-icon">${icon('map')}</span><span><strong>C-12 · Pedra Branca</strong><small>Arara · 6 anos</small></span></div></td><td>Manual</td><td>37,4 ha</td><td><strong>1.089 sc</strong></td><td>29,1 sc/ha</td><td><div class="row-progress"><div class="row-progress-line"><span style="width:59%"></span></div><small>59%</small></div></td><td><span class="status warning">Atenção</span></td></tr>
      <tr><td><div class="cell-main"><span class="cell-icon">${icon('map')}</span><span><strong>C-02 · Vargem</strong><small>Catucaí · 9 anos</small></span></div></td><td>Varrição</td><td>29,1 ha</td><td><strong>824 sc</strong></td><td>28,3 sc/ha</td><td><div class="row-progress"><div class="row-progress-line"><span style="width:94%"></span></div><small>94%</small></div></td><td><span class="status info">Finalizando</span></td></tr>
    </tbody></table></div>`, '<select class="mini-select"><option>Rendimento ↓</option><option>Área ↓</option><option>Progresso ↓</option></select>')}
  </div>`;
}

function renderSpray() {
  content.innerHTML = `<div class="page-enter">
    ${pageHead({eyebrow:'PVGEST · GESTÃO DE PULVERIZAÇÃO',title:'Aplicações seguras, orientadas e rastreáveis.',description:'O núcleo original do PVGest evolui dentro do ERP: o Gestor acompanha custo e conformidade, o Agrônomo prescreve e o Tratorista executa no campo, inclusive offline.',primary:'Nova aplicação',secondary:{label:'Mapa de aplicações',icon:'map',action:'spray-map'}})}
    <section class="metric-grid">
      ${metricCard({label:'Área aplicada hoje',value:'186,4',unit:'ha',iconName:'map',delta:'+8,2%',foot:'versus programação',tone:'green'})}
      ${metricCard({label:'Operações em curso',value:'6',unit:'aplicações',iconName:'tractor',delta:'4 talhões',foot:'2 fazendas',tone:'blue',neutral:true})}
      ${metricCard({label:'Conformidade climática',value:'94,8',unit:'%',iconName:'shield',delta:'+2,4 p.p.',foot:'janela e deriva',tone:'gold'})}
      ${metricCard({label:'Custo médio aplicado',value:'R$ 126,80',unit:'/ha',iconName:'coins',delta:'-R$ 7,40',foot:'versus orçamento',tone:'orange'})}
    </section>
    ${renderCoffeeSoilSprayPanel()}
    <div style=height:16px></div>
    ${panel('Um fluxo, três perfis','A separação de responsabilidades do PVGest é preservada e conectada aos demais módulos',`<div class="harvest-cards"><article class="harvest-card"><div class="harvest-card-top"><span class="crop-icon soy">${icon('wallet')}</span><span><strong>Gestor</strong><small>Decisão e governança</small></span></div><div class="summary-list" style="margin-top:11px"><div class="summary-row"><span>Custo por hectare</span><strong>R$ 126,80</strong></div><div class="summary-row"><span>Aplicações conformes</span><strong>94,8%</strong></div></div></article><article class="harvest-card"><div class="harvest-card-top"><span class="crop-icon corn">${icon('sprout')}</span><span><strong>Agrônomo</strong><small>Prescrição e liberação</small></span></div><div class="summary-list" style="margin-top:11px"><div class="summary-row"><span>Receitas liberadas</span><strong>8</strong></div><div class="summary-row"><span>Aguardando janela</span><strong>2</strong></div></div></article><article class="harvest-card"><div class="harvest-card-top"><span class="crop-icon coffee">${icon('tractor')}</span><span><strong>Tratorista</strong><small>Checklist e execução offline</small></span></div><div class="summary-list" style="margin-top:11px"><div class="summary-row"><span>Em execução</span><strong>6</strong></div><div class="summary-row"><span>Checklists completos</span><strong>100%</strong></div></div></article></div>`,'<a class="text-button" href="https://allanwag.github.io/pvgest/" target="_blank" rel="noopener">Abrir PVGest atual '+icon('external')+'</a>')}
    <div style="height:16px"></div>
    <div class="two-col">
      ${panel('Operações em campo','Status transmitido pelos dispositivos dos tratoristas',`<div class="vehicle-list"><div class="vehicle"><span class="vehicle-icon">${icon('tractor')}</span><span><strong>APL-042 · Talhão C-07</strong><small>Uniport 3030 · Carlos Mendes · Fungicida F-12</small></span><span class="status">62%</span></div><div class="vehicle"><span class="vehicle-icon">${icon('tractor')}</span><span><strong>APL-041 · Talhão M-03</strong><small>JD 4730 · Paulo Nunes · Herbicida H-08</small></span><span class="status">84%</span></div><div class="vehicle"><span class="vehicle-icon">${icon('tractor')}</span><span><strong>APL-039 · Talhão S-11</strong><small>Imperador 3000 · R. Souza · Nutrição N-04</small></span><span class="status warning">Pausa clima</span></div><div class="vehicle"><span class="vehicle-icon">${icon('tractor')}</span><span><strong>APL-038 · Talhão C-12</strong><small>Uniport 3030 · M. Oliveira · Fungicida F-12</small></span><span class="status info">Sincronizando</span></div></div>`,'<span class="connection-status" style="color:var(--green-dark);background:var(--green-soft);border-color:#cfdfca"><i></i>Campo conectado</span>')}
      ${panel('Parâmetros em uso','Médias das operações em andamento · clima dentro dos limites',`<div class="summary-list"><div class="summary-row"><span>Velocidade operacional</span><strong>14,8 km/h</strong></div><div class="summary-row"><span>Rotação do motor</span><strong>2.000 rpm</strong></div><div class="summary-row"><span>Bicos ativos</span><strong>36 <small>AI 11002</small></strong></div><div class="summary-row"><span>Vazão por hectare</span><strong>142 L/ha</strong></div><div class="summary-row"><span>Vazão por bico</span><strong>0,58 L/min</strong></div><div class="summary-total"><span>Clima atual</span><strong>7,4 km/h · 68% UR</strong></div></div>`,'<button class="secondary-button" data-action="spray-params">'+icon('plus')+'Salvar parâmetros</button>')}
    </div>
    <div style="height:16px"></div>
    ${panel('Parâmetros salvos por equipamento', 'Presets versionados por receita, máquina e responsável técnico', `<div class="table-wrap"><table class="data-table"><thead><tr><th>Equipamento</th><th>Receita / alvo</th><th>Velocidade</th><th>RPM</th><th>Modelo do bico</th><th>Quantidade</th><th>Vazão / ha</th><th>Vazão / bico</th><th>Salvo por</th></tr></thead><tbody><tr><td><strong>Uniport 3030</strong><small>Pulverizador próprio</small></td><td>Fungicida F-12<small>Ferrugem</small></td><td>14,8 km/h</td><td>2.000 rpm</td><td>AI 11002</td><td>36 bicos</td><td>142 L/ha</td><td>0,58 L/min</td><td>Ana Ribeiro<small>Hoje · 14:52</small></td></tr><tr><td><strong>John Deere 4730</strong><small>Pulverizador próprio</small></td><td>Herbicida H-08<small>Folhas largas</small></td><td>16,2 km/h</td><td>2.100 rpm</td><td>TTI 11003</td><td>48 bicos</td><td>120 L/ha</td><td>0,65 L/min</td><td>Lucas Martins<small>Hoje · 12:46</small></td></tr><tr><td><strong>Imperador 3000</strong><small>Pulverizador terceirizado</small></td><td>Nutrição N-04<small>Foliar</small></td><td>13,5 km/h</td><td>1.950 rpm</td><td>AIXR 11002</td><td>40 bicos</td><td>160 L/ha</td><td>0,60 L/min</td><td>Lucas Martins<small>Ontem · 17:20</small></td></tr></tbody></table></div>`, '<button class="primary-button" data-action="spray-params">'+icon('plus')+'Novo preset</button>')}
    <div style="height:16px"></div>
    ${panel('Agenda de aplicações','Receita, responsável técnico, equipamento e evidência de execução',`<div class="table-wrap"><table class="data-table"><thead><tr><th>Aplicação</th><th>Talhão</th><th>Receita / agrônomo</th><th>Equipamento / tratorista</th><th>Área</th><th>Janela</th><th>Status</th></tr></thead><tbody><tr><td><strong>APL-042</strong><small>16 jul · 15:20</small></td><td>C-07 · Boa Esperança</td><td>Fungicida F-12<small>R.T. Ana Ribeiro</small></td><td>Uniport 3030<small>Carlos Mendes</small></td><td>42,0 ha</td><td>14:00–20:30</td><td><span class="status">Em execução</span></td></tr><tr><td><strong>APL-041</strong><small>16 jul · 13:05</small></td><td>M-03 · Chapadão</td><td>Herbicida H-08<small>R.T. Lucas Martins</small></td><td>JD 4730<small>Paulo Nunes</small></td><td>58,6 ha</td><td>12:30–18:00</td><td><span class="status">Em execução</span></td></tr><tr><td><strong>APL-043</strong><small>17 jul · 05:40</small></td><td>S-08 · Cerrado</td><td>Nutrição N-04<small>R.T. Lucas Martins</small></td><td>Imperador 3000<small>Rafael Souza</small></td><td>64,2 ha</td><td>05:30–09:00</td><td><span class="status info">Liberada</span></td></tr><tr><td><strong>APL-044</strong><small>17 jul · 16:00</small></td><td>C-04 · Lavoura Sede</td><td>Inseticida I-06<small>R.T. Ana Ribeiro</small></td><td>Uniport 3030<small>Marcos Oliveira</small></td><td>55,8 ha</td><td>A confirmar</td><td><span class="status warning">Aguarda clima</span></td></tr></tbody></table></div>`,'<select class="mini-select"><option>Próximas 48 horas</option><option>Esta semana</option><option>Safra</option></select>')}
  </div>`;
}

const grainCropConfigs = {
  milho: {
    name: 'Milho', tone: 'gold', color: 'var(--gold)', period: 'Últimas 7 semanas',
    actual: [2980, 4510, 5230, 5840, 6580, 5610, 2130], plan: [3200, 4800, 5600, 6200, 7100, 6000, 3180],
    metrics: [
      { label:'Milho colhido', value:'32.880', unit:'sc', iconName:'sprout', delta:'74%', foot:'do plano de safra', tone:'gold' },
      { label:'Saídas registradas', value:'84', unit:'cargas', iconName:'truck', delta:'7 hoje', foot:'com pesagem líquida', tone:'blue' },
      { label:'Preço médio realizado', value:'R$ 61,80', unit:'/sc', iconName:'coins', delta:'+R$ 2,30', foot:'sobre orçamento', tone:'green' },
      { label:'A receber', value:'R$ 428', unit:'mil', iconName:'wallet', delta:'3 NFs abertas', foot:'próximos 30 dias', tone:'orange', neutral:true }
    ],
    summary: [['Peso líquido expedido','1.973 t'],['Desconto médio','1,8%'],['Frete médio','R$ 4,92 <small>/sc</small>'],['Tempo médio no pátio','38 min']],
    total: ['Receita faturada','R$ 1,62 mi'],
    rows: [
      ['MIL-084','16/07 · 16:42','Volvo FH 540','RTH-8A22','42.180 kg','Coop. Vale Verde','NF pendente','Aguardando'],
      ['MIL-083','16/07 · 14:18','Scania R 450','FQD-2J18','41.760 kg','Cargill Uberlândia','NF 000.184','Programado'],
      ['MIL-082','16/07 · 11:05','DAF XF 530','RFN-4C90','42.340 kg','Coop. Vale Verde','NF 000.183','Pago'],
      ['MIL-081','16/07 · 08:27','Volvo VM 330','GHT-9B12','31.880 kg','Armazém Central','NF 000.182','Pago']
    ]
  },
  soja: {
    name: 'Soja', tone: 'green', color: 'var(--green)', period: 'Fechamento da safra',
    actual: [3980, 5510, 6320, 7460, 6810, 4970, 3180], plan: [4200, 5900, 6800, 7900, 7200, 5400, 3830],
    metrics: [
      { label:'Soja colhida', value:'41.230', unit:'sc', iconName:'sprout', delta:'91%', foot:'do plano de safra', tone:'green' },
      { label:'Saídas registradas', value:'126', unit:'cargas', iconName:'truck', delta:'safra encerrada', foot:'com pesagem líquida', tone:'blue', neutral:true },
      { label:'Preço médio realizado', value:'R$ 128,40', unit:'/sc', iconName:'coins', delta:'+R$ 6,10', foot:'sobre orçamento', tone:'green' },
      { label:'A receber', value:'R$ 312', unit:'mil', iconName:'wallet', delta:'2 parcelas', foot:'próximos 30 dias', tone:'orange', neutral:true }
    ],
    summary: [['Peso líquido expedido','2.474 t'],['Desconto médio','1,3%'],['Frete médio','R$ 5,36 <small>/sc</small>'],['Tempo médio no pátio','31 min']],
    total: ['Receita faturada','R$ 5,08 mi'],
    rows: [
      ['SOJ-126','15/04 · 17:10','Scania R 500','RTV-5F36','43.020 kg','Bunge Araguari','NF 000.156','Pago'],
      ['SOJ-125','15/04 · 14:32','Volvo FH 460','QOP-7D41','42.680 kg','ADM Uberlândia','NF 000.155','Pago'],
      ['SOJ-124','15/04 · 10:16','DAF XF 480','PVL-2E88','41.940 kg','Bunge Araguari','NF 000.154','Pago'],
      ['SOJ-123','15/04 · 07:48','Scania G 410','RMY-6A07','39.860 kg','Coop. Vale Verde','NF 000.153','Conciliando']
    ]
  },
  sorgo: {
    name: 'Sorgo', tone: 'purple', color: 'var(--purple)', period: 'Safrinha 2025/26',
    actual: [920, 1380, 1920, 2250, 2380, 2040, 1750], plan: [1100, 1600, 2100, 2500, 2600, 2250, 2050],
    metrics: [
      { label:'Sorgo colhido', value:'12.640', unit:'sc', iconName:'sprout', delta:'68%', foot:'do plano de safra', tone:'purple' },
      { label:'Saídas registradas', value:'31', unit:'cargas', iconName:'truck', delta:'4 hoje', foot:'com pesagem líquida', tone:'blue' },
      { label:'Preço médio realizado', value:'R$ 52,70', unit:'/sc', iconName:'coins', delta:'+R$ 1,40', foot:'sobre orçamento', tone:'green' },
      { label:'A receber', value:'R$ 186', unit:'mil', iconName:'wallet', delta:'2 NFs abertas', foot:'próximos 30 dias', tone:'orange', neutral:true }
    ],
    summary: [['Peso líquido expedido','758 t'],['Desconto médio','1,6%'],['Frete médio','R$ 4,70 <small>/sc</small>'],['Tempo médio no pátio','32 min']],
    total: ['Receita faturada','R$ 666 mil'],
    rows: [
      ['SOR-031','16/07 · 17:05','Volvo FH 460','RZE-4B18','39.840 kg','Granja Horizonte','NF pendente','Aguardando'],
      ['SOR-030','16/07 · 13:44','Scania G 440','QXZ-9H27','40.260 kg','Coop. Vale Verde','NF 000.196','Programado'],
      ['SOR-029','16/07 · 10:12','DAF CF 480','RMW-2E61','41.080 kg','Nutriaves Patrocínio','NF 000.195','Pago'],
      ['SOR-028','15/07 · 16:38','Volvo VM 330','GKT-7J04','31.640 kg','Armazém Central','NF 000.194','Pago']
    ]
  },
  trigo: {
    name: 'Trigo', tone: 'orange', color: 'var(--orange)', period: 'Safra de inverno',
    actual: [640, 980, 1320, 1680, 1870, 1640, 1350], plan: [720, 1100, 1500, 1800, 2050, 1850, 1540],
    metrics: [
      { label:'Trigo colhido', value:'9.480', unit:'sc', iconName:'sprout', delta:'82%', foot:'do plano de safra', tone:'orange' },
      { label:'Saídas registradas', value:'24', unit:'cargas', iconName:'truck', delta:'3 hoje', foot:'com pesagem líquida', tone:'blue' },
      { label:'Preço médio realizado', value:'R$ 78,90', unit:'/sc', iconName:'coins', delta:'+R$ 3,20', foot:'sobre orçamento', tone:'green' },
      { label:'A receber', value:'R$ 142', unit:'mil', iconName:'wallet', delta:'1 NF aberta', foot:'próximos 30 dias', tone:'orange', neutral:true }
    ],
    summary: [['Peso líquido expedido','569 t'],['PH médio','79,4 kg/hl'],['Frete médio','R$ 5,18 <small>/sc</small>'],['Tempo médio no pátio','35 min']],
    total: ['Receita faturada','R$ 748 mil'],
    rows: [
      ['TRI-024','16/07 · 16:18','Scania R 450','RZQ-5C32','40.920 kg','Moinho Triângulo','NF pendente','Aguardando'],
      ['TRI-023','16/07 · 12:56','Volvo FH 460','QPY-8D11','41.360 kg','Coop. Vale Verde','NF 000.203','Programado'],
      ['TRI-022','16/07 · 09:34','DAF XF 480','RXN-3A74','42.040 kg','Moinho Nacional','NF 000.202','Pago'],
      ['TRI-021','15/07 · 15:47','Mercedes Actros','RKV-6F29','39.780 kg','Armazém Central','NF 000.201','Pago']
    ]
  },
  coberturas: {
    name: 'Culturas de cobertura', tone: 'green', color: 'var(--green)', period: 'Janela atual', isCover: true,
    actual: [24, 38, 52, 47, 54, 43, 28], plan: [30, 40, 48, 52, 50, 42, 32],
    metrics: [
      { label:'Área implantada', value:'286,0', unit:'ha', iconName:'map', delta:'79%', foot:'do plano de cobertura', tone:'green' },
      { label:'Operações registradas', value:'18', unit:'talhões', iconName:'tractor', delta:'3 hoje', foot:'com lote rastreado', tone:'blue' },
      { label:'Custo médio realizado', value:'R$ 412', unit:'/ha', iconName:'coins', delta:'-R$ 18', foot:'abaixo do orçamento', tone:'green' },
      { label:'Sementes a distribuir', value:'5,8', unit:'t', iconName:'package', delta:'6 lotes', foot:'para os próximos 7 dias', tone:'orange', neutral:true }
    ],
    summary: [['Área total planejada','362 ha'],['Sementes utilizadas','7,4 t'],['Dose média do mix','25,9 kg/ha'],['Emergência verificada','91%']],
    total: ['Custo realizado','R$ 117,8 mil'],
    rows: [
      ['COB-018','16/07 · 16:10','Plantadeira JD 2117','Carlos Mendes','38,4 ha','C-12 · Pedra Branca','SEM-2048 · Mix 03','Concluída'],
      ['COB-017','16/07 · 13:25','Semeadora Tatu PST4','Paulo Nunes','42,0 ha','C-07 · Boa Esperança','SEM-2046 · Braquiária','Em andamento'],
      ['COB-016','16/07 · 08:40','Distribuidor Hércules','Rafael Souza','29,1 ha','C-02 · Vargem','SEM-2042 · Milheto','Concluída'],
      ['COB-015','15/07 · 15:05','Plantadeira JD 2117','Marcos Oliveira','55,8 ha','C-04 · Lavoura Sede','SEM-2041 · Mix 02','Programada']
    ]
  }
};

function grainRows(config) {
  return config.rows.map(row => {
    const docClass = row[6].includes('pendente') ? 'warning' : '';
    const finalStatus = ['Pago','Concluída'].includes(row[7]);
    const statusClass = finalStatus ? '' : ['Conciliando','Em andamento'].includes(row[7]) ? 'info' : 'warning';
    return `<tr><td><strong>${row[0]}</strong><small>${row[1]}</small></td><td><div class="cell-main"><span class="cell-icon">${icon(config.isCover?'tractor':'truck')}</span><span><strong>${row[2]}</strong><small>${row[3]}</small></span></div></td><td>${row[4]}</td><td>${row[5]}</td><td><span class="status ${docClass}">${row[6]}</span></td><td><span class="status ${statusClass}">${row[7]}</span></td><td><button class="icon-button" style="width:29px;height:29px;padding:7px" data-action="row-detail" aria-label="Abrir ${row[0]}">${icon('chevron')}</button></td></tr>`;
  }).join('');
}

function renderGrains() {
  const config = grainCropConfigs[state.grainCrop] || grainCropConfigs.milho;
  const labels = ['S1','S2','S3','S4','S5','S6','S7'];
  const max = Math.max(...config.actual, ...config.plan);
  const chartUnit = config.isCover ? 'ha implantados' : 'sc expedidas';
  const barHtml = `<div class="bar-chart">${config.actual.map((value,index)=>`<div class="bar-group"><span class="bar" style="--h:${Math.round(value/max*180)}px;--bar-color:${config.color}"></span><span class="bar open" style="--h:${Math.round(config.plan[index]/max*180)}px;--bar-color:${config.color}"></span><span class="bar-label">${labels[index]}</span></div>`).join('')}</div><div class="chart-legend"><span><i style="--legend-color:${config.color}"></i>${config.isCover?'Implantado':'Expedido'}</span><span><i style="--legend-color:${config.color};opacity:.25"></i>Planejado</span></div>`;
  const summaryHtml = `<div class="summary-list">${config.summary.map(item=>`<div class="summary-row"><span>${item[0]}</span><strong>${item[1]}</strong></div>`).join('')}<div class="summary-total"><span>${config.total[0]}</span><strong>${config.total[1]}</strong></div></div>`;
  const tabs = Object.entries(grainCropConfigs).map(([key,crop])=>`<button class="${state.grainCrop===key?'active':''}" data-grain="${key}" role="tab" aria-selected="${state.grainCrop===key}">${crop.name}</button>`).join('');
  const tableHead = config.isCover
    ? '<tr><th>Operação / horário</th><th>Equipamento / operador</th><th>Área</th><th>Talhão</th><th>Lote / espécie</th><th>Situação</th><th></th></tr>'
    : '<tr><th>Carga / horário</th><th>Veículo</th><th>Peso líquido</th><th>Destino</th><th>Documento</th><th>Pagamento</th><th></th></tr>';
  const tableAction = config.isCover
    ? '<button class="text-button" data-action="show-all">Ver operações '+icon('arrow')+'</button>'
    : '<button class="text-button" data-view-link="loads">Ver todas '+icon('arrow')+'</button>';
  content.innerHTML = `<div class="page-enter">
    ${pageHead({
      eyebrow:'CEREAIS & COBERTURAS',
      title:'Cereais e coberturas, do campo ao recebimento.',
      description:'Acompanhe milho, soja, sorgo e trigo por colheita e expedição; nas coberturas, controle área implantada, sementes, custo e execução por talhão.',
      primary:config.isCover?'Registrar implantação':'Registrar saída',
      action:config.isCover?'grain-cover':'open-modal',
      secondary:{label:config.isCover?'Exportar operações':'Exportar cargas',icon:'download',action:'export'}
    })}
    <div class="subnav grain-tabs" role="tablist" aria-label="Selecionar cultura">${tabs}</div>
    <section class="metric-grid">${config.metrics.map(metric=>metricCard(metric)).join('')}</section>
    <div class="two-col">
      ${panel(`${config.isCover?'Implantação':'Expedição'} semanal · ${config.name}`, `${chartUnit} versus programação operacional`, barHtml, `<span class="panel-meta">${config.period}</span>`)}
      ${panel(config.isCover?'Resumo da implantação':'Resumo da operação',config.isCover?'Insumos, execução e custo por área':'Da balança à liquidação financeira',summaryHtml,'<span class="status">Reconciliado</span>')}
    </div>
    <div style="height:16px"></div>
    ${panel(config.isCover?'Últimas implantações de cobertura':`Últimas saídas de ${config.name.toLowerCase()}`, config.isCover?'Cada operação conecta talhão, equipamento, operador e lote de sementes':'Cada carga conecta balança, NF-e, contrato e contas a receber', `<div class="table-wrap"><table class="data-table"><thead>${tableHead}</thead><tbody>${grainRows(config)}</tbody></table></div>`, tableAction)}
  </div>`;
}

function renderLoadsLegacy() {
  const rows = [
    ['MIL-084','Milho','Volvo FH 540 · RTH-8A22','42.180 kg','Coop. Vale Verde','Não emitida','R$ 43.454','Aguardando'],
    ['MIL-083','Milho','Scania R 450 · FQD-2J18','41.760 kg','Cargill Uberlândia','NF 000.184','R$ 43.021','Programado'],
    ['MIL-082','Milho','DAF XF 530 · RFN-4C90','42.340 kg','Coop. Vale Verde','NF 000.183','R$ 43.619','Pago'],
    ['SOJ-126','Soja','Scania R 500 · RTV-5F36','43.020 kg','Bunge Araguari','NF 000.156','R$ 92.062','Pago'],
    ['SOJ-125','Soja','Volvo FH 460 · QOP-7D41','42.680 kg','ADM Uberlândia','NF 000.155','R$ 91.334','Pago'],
    ['MIL-081','Milho','Volvo VM 330 · GHT-9B12','31.880 kg','Armazém Central','NF 000.182','R$ 32.836','Pago']
  ];
  content.innerHTML = `<div class="page-enter">
    ${pageHead({eyebrow:'LOGÍSTICA & FATURAMENTO',title:'Cargas e documentos fiscais.',description:'Rastreabilidade única do ticket de balança ao pagamento, com bloqueios automáticos para divergências de peso, NF e contrato.',primary:'Nova saída',secondary:{label:'Exportar CSV',icon:'download',action:'export'}})}
    <section class="metric-grid">
      ${metricCard({label:'No pátio agora',value:'4',unit:'caminhões',iconName:'truck',delta:'38 min',foot:'tempo médio',tone:'blue',neutral:true})}
      ${metricCard({label:'Expedido hoje',value:'283,4',unit:'t',iconName:'scale',delta:'+9,2%',foot:'versus programação',tone:'green'})}
      ${metricCard({label:'NF-e pendente',value:'3',unit:'cargas',iconName:'receipt',delta:'R$ 214 mil',foot:'sem faturamento',tone:'orange',down:true})}
      ${metricCard({label:'Divergência de peso',value:'0,34',unit:'%',iconName:'alert',delta:'-0,18 p.p.',foot:'últimos 30 dias',tone:'gold'})}
    </section>
    ${panel('Fila de expedição e faturamento','Safra 2025/26 · atualizado após cada pesagem',`<div class="search-row"><label class="search-box">${icon('search')}<input id="loadSearch" placeholder="Buscar carga, placa, NF ou destino"></label><div class="filter-chips"><button class="filter-chip active">Todas</button><button class="filter-chip">No pátio</button><button class="filter-chip">Sem NF</button><button class="filter-chip">A receber</button></div></div><div class="table-wrap"><table class="data-table" id="loadsTable"><thead><tr><th>Carga</th><th>Cultura</th><th>Veículo</th><th>Peso líquido</th><th>Destino</th><th>NF-e</th><th>Valor</th><th>Pagamento</th></tr></thead><tbody>${rows.map(r=>`<tr><td><strong>${r[0]}</strong><small>16/07/2026</small></td><td><span class="status ${r[1]==='Milho'?'warning':''}">${r[1]}</span></td><td>${r[2]}</td><td><strong>${r[3]}</strong></td><td>${r[4]}</td><td><span class="status ${r[5]==='Não emitida'?'danger':''}">${r[5]}</span></td><td>${r[6]}</td><td><span class="status ${r[7]==='Pago'?'':'warning'}">${r[7]}</span></td></tr>`).join('')}</tbody></table></div>`, '<select class="mini-select"><option>16 jul 2026</option><option>Últimos 7 dias</option><option>Safra completa</option></select>')}
  </div>`;
}

function renderLoads() {
  renderLoadsLegacy();
  const workflow = '<div class=fiscal-flow><article><span>01</span><strong>XML de entrada</strong><small>Importado e validado</small><b>18 hoje</b></article><article><span>02</span><strong>NF-e produtor</strong><small>3 aguardam autorização</small><b>126 emitidas</b></article><article><span>03</span><strong>MDF-e</strong><small>Vinculado às cargas</small><b>8 abertos</b></article><article><span>04</span><strong>LCDPR</strong><small>Classificação automática</small><b>98,7% completo</b></article></div>';
  const contracts = '<div class=table-wrap><table class=data-table><thead><tr><th>Contrato / cultura</th><th>Comprador</th><th>Quantidade</th><th>Fixação</th><th>Preço</th><th>Adiantamentos / retenções</th><th>Frete / descontos</th><th>Margem realizada</th></tr></thead><tbody><tr><td><strong>MIL-2026-04</strong><small>Milho · disponível</small></td><td>Coop. Vale Verde</td><td>600 t<small>432 t entregues</small></td><td><span class=status-warning>168 t a fixar</span></td><td>R$ 67,40/sc</td><td>R$ 84 mil<small>Funrural 1,5%</small></td><td>FOB<small>Quebra máx. 0,5%</small></td><td><strong>R$ 418/t</strong></td></tr><tr><td><strong>SOJ-2026-02</strong><small>Soja · fixo</small></td><td>Bunge Araguari</td><td>900 t<small>900 t entregues</small></td><td><span class=status>100% fixado</span></td><td>R$ 142,80/sc</td><td>Sem adiantamento<small>Retenção R$ 12,4 mil</small></td><td>CIF<small>Desconto qualidade 0,3%</small></td><td><strong>R$ 864/t</strong></td></tr><tr><td><strong>CAF-2026-01</strong><small>Café · a fixar</small></td><td>Exportadora Mantiqueira</td><td>360 sc<small>em armazém</small></td><td><span class=status-info>Bolsa + diferencial</span></td><td>A definir</td><td>Adiantamento R$ 180 mil</td><td>FOB<small>Prêmio CVA previsto</small></td><td><strong>Projetada 31,4%</strong></td></tr></tbody></table></div>';
  const actions = '<div class=panel-actions><button class=secondary-button data-action=fiscal-xml>'+icon('upload')+'Importar XML</button><button class=secondary-button data-action=fiscal-document>Emitir NF-e / MDF-e</button><button class=primary-button data-action=sales-contract>'+icon('plus')+'Novo contrato</button></div>';
  const target = content.querySelector('.page-enter');
  target.insertAdjacentHTML('beforeend','<div style=height:16px></div>'+panel('Fluxo fiscal operacional','Do XML e da carga aos documentos, obrigações e lançamentos financeiros',workflow,actions)+'<div style=height:16px></div>'+panel('Contratos e posição comercial','Disponível, fixo e a fixar com adiantamentos, retenções, frete, descontos e margem',contracts,'<button class=secondary-button data-action=bank-reconciliation>'+icon('sync')+'Conciliar banco</button>'));
}

function renderFinance() {
  const cash = lineChart([1.46,1.21,1.38,1.74,1.56,1.92,2.11,2.41,2.18,2.66,2.52,2.87], ['JUL','AGO','SET','OUT','NOV','DEZ','JAN','FEV','MAR','ABR','MAI','JUN'], {secondary:[1.40,1.32,1.45,1.61,1.72,1.88,2.00,2.14,2.28,2.43,2.58,2.74],min:1,max:3,prefix:'R$ ',decimals:1,aria:'Fluxo de caixa projetado em milhões de reais'});
  content.innerHTML = `<div class="page-enter">
    ${pageHead({eyebrow:'ADMINISTRAÇÃO GERAL',title:'Financeiro e fluxo de caixa.',description:'Visão integrada de contas, compromissos, recebimentos, custos por cultura e projeção de liquidez.',primary:'Novo lançamento',secondary:{label:'Conciliação',icon:'sync',action:'reconcile'}})}
    <section class="metric-grid">
      ${metricCard({label:'Saldo disponível',value:'R$ 1,86',unit:'mi',iconName:'wallet',delta:'+R$ 124 mil',foot:'no mês',tone:'green'})}
      ${metricCard({label:'Contas a receber · 30d',value:'R$ 742',unit:'mil',iconName:'coins',delta:'R$ 428 mil',foot:'grãos',tone:'blue'})}
      ${metricCard({label:'Contas a pagar · 30d',value:'R$ 516',unit:'mil',iconName:'receipt',delta:'18 títulos',foot:'3 vencem nesta semana',tone:'orange',neutral:true})}
      ${metricCard({label:'Margem operacional',value:'24,8',unit:'%',iconName:'trending',delta:'+2,1 p.p.',foot:'versus orçamento',tone:'gold'})}
    </section>
    <div class="two-col">
      ${panel('Fluxo de caixa projetado','Saldo final mensal · R$ milhões · próximos 12 meses',`${cash}<div class="chart-legend"><span><i style="--legend-color:var(--green)"></i>Projeção atual</span><span><i class="dashed" style="--legend-color:var(--gold)"></i>Orçamento</span></div>`,'<select class="mini-select"><option>Cenário base</option><option>Conservador</option><option>Otimista</option></select>')}
      ${panel('Resultado por cultura','Receita líquida e margem de contribuição',`<div class="summary-list"><div class="summary-row"><span>Café</span><strong>R$ 4,82 mi <small>31,2%</small></strong></div><div class="summary-row"><span>Soja</span><strong>R$ 5,08 mi <small>26,4%</small></strong></div><div class="summary-row"><span>Milho</span><strong>R$ 1,62 mi <small>17,8%</small></strong></div><div class="summary-row"><span>Serviços / outros</span><strong>R$ 184 mil <small>12,1%</small></strong></div><div class="summary-total"><span>Receita líquida safra</span><strong>R$ 11,70 mi</strong></div></div>`,'<span class="panel-meta">Realizado + contratado</span>')}
    </div>
    <div style="height:16px"></div>
    ${panel('Próximos compromissos','Títulos ordenados por vencimento e criticidade',`<div class="table-wrap"><table class="data-table"><thead><tr><th>Vencimento</th><th>Descrição</th><th>Centro de custo</th><th>Tipo</th><th>Valor</th><th>Status</th></tr></thead><tbody>
      <tr><td><strong>18 jul</strong><small>em 2 dias</small></td><td>Folha equipe de colheita</td><td>Café · colheita</td><td>Pagamento</td><td><strong>R$ 186.420</strong></td><td><span class="status warning">Programado</span></td></tr>
      <tr><td><strong>19 jul</strong><small>em 3 dias</small></td><td>Combustíveis Triângulo</td><td>Máquinas</td><td>Pagamento</td><td><strong>R$ 74.860</strong></td><td><span class="status info">Aprovação</span></td></tr>
      <tr><td><strong>22 jul</strong><small>em 6 dias</small></td><td>Contrato milho · lote 04</td><td>Milho · comercial</td><td>Recebimento</td><td><strong>R$ 214.320</strong></td><td><span class="status">Confirmado</span></td></tr>
      <tr><td><strong>25 jul</strong><small>em 9 dias</small></td><td>Peças e rolamentos Oeste</td><td>Oficina</td><td>Pagamento</td><td><strong>R$ 28.740</strong></td><td><span class="status muted">A lançar</span></td></tr>
    </tbody></table></div>`,'<button class="text-button" data-action="show-all">Ver agenda completa</button>')}
  </div>`;
}

function renderPeople() {
  const prod = [78,91,86,73,95,88,69];
  content.innerHTML = `<div class="page-enter">
    ${pageHead({eyebrow:'PESSOAS & RH',title:'Equipes, jornada e produtividade.',description:'Cadastro, ponto, folha, treinamentos e desempenho operacional com transparência para o gestor e para o trabalhador.',primary:'Novo colaborador',secondary:{label:'Fechar ponto',icon:'clock',action:'close-timesheet'}})}
    <section class="metric-grid">
      ${metricCard({label:'Pessoas ativas',value:'214',unit:'colaboradores',iconName:'users',delta:'+62',foot:'temporários na safra',tone:'green'})}
      ${metricCard({label:'Presentes hoje',value:'96,7',unit:'%',iconName:'check',delta:'207 pessoas',foot:'7 ausências',tone:'blue'})}
      ${metricCard({label:'Custo da folha · mês',value:'R$ 684',unit:'mil',iconName:'wallet',delta:'+4,2%',foot:'versus orçamento',tone:'orange',down:true})}
      ${metricCard({label:'Produtividade café',value:'7,4',unit:'medidas/dia',iconName:'trending',delta:'+5,9%',foot:'versus 7 dias',tone:'gold'})}
    </section>
    <div class="two-col">
      ${panel('Produtividade das equipes de café','Índice sobre a meta diária · últimos 7 dias',`<div class="bar-chart">${prod.map((v,i)=>`<div class="bar-group"><span class="bar" style="--h:${v*1.8}px;--bar-color:${v>=85?'var(--green)':v>=75?'var(--gold)':'var(--orange)'}"></span><span class="bar-label">EQ ${String(i+1).padStart(2,'0')}</span></div>`).join('')}</div><div class="chart-legend"><span><i style="--legend-color:var(--green)"></i>Meta atingida</span><span><i style="--legend-color:var(--gold)"></i>75%–84%</span><span><i style="--legend-color:var(--orange)"></i>Abaixo de 75%</span></div>`, '<select class="mini-select"><option>Café · hoje</option><option>Últimos 7 dias</option></select>')}
      ${panel('Pendências de RH','Ações necessárias antes do fechamento',`<div class="alerts"><div class="alert-item" style="--alert-color:var(--orange);--alert-soft:var(--orange-soft)"><span class="alert-icon">${icon('clock')}</span><span><strong>11 marcações inconsistentes</strong><small>Precisam de justificativa do líder</small></span><i>${icon('chevron')}</i></div><div class="alert-item" style="--alert-color:var(--gold);--alert-soft:var(--gold-soft)"><span class="alert-icon">${icon('document')}</span><span><strong>4 contratos vencem em 15 dias</strong><small>Equipe temporária · café</small></span><i>${icon('chevron')}</i></div><div class="alert-item" style="--alert-color:var(--blue);--alert-soft:var(--blue-soft)"><span class="alert-icon">${icon('shield')}</span><span><strong>6 treinamentos de NR-31</strong><small>Agendar antes de 31 jul</small></span><i>${icon('chevron')}</i></div></div>`,'<span class="status warning">21 itens</span>')}
    </div>
    <div style="height:16px"></div>
    ${panel('Equipes em campo','Líder, frente de trabalho e rendimento do dia',`<div class="table-wrap"><table class="data-table"><thead><tr><th>Equipe</th><th>Líder</th><th>Atividade</th><th>Pessoas</th><th>Jornada</th><th>Produção</th><th>Meta</th></tr></thead><tbody>
      <tr><td><strong>Equipe 05</strong><small>Lavoura Sede</small></td><td>Ana Pereira</td><td>Colheita manual</td><td>28</td><td>7h 14min</td><td><strong>224 medidas</strong></td><td><span class="status">112%</span></td></tr>
      <tr><td><strong>Equipe 02</strong><small>Boa Esperança</small></td><td>José Carlos</td><td>Colheita manual</td><td>31</td><td>7h 08min</td><td><strong>229 medidas</strong></td><td><span class="status">104%</span></td></tr>
      <tr><td><strong>Equipe 07</strong><small>Pedra Branca</small></td><td>Luiz Ribeiro</td><td>Varrição</td><td>19</td><td>6h 52min</td><td><strong>108 medidas</strong></td><td><span class="status warning">79%</span></td></tr>
      <tr><td><strong>Equipe 03</strong><small>Vargem</small></td><td>Cláudia Souza</td><td>De árvore</td><td>24</td><td>7h 21min</td><td><strong>176 medidas</strong></td><td><span class="status">102%</span></td></tr>
    </tbody></table></div>`,'<button class="text-button" data-action="show-all">Ver colaboradores</button>')}
  </div>`;
}

function workCard(id, title, asset, due, initials, priority = 'var(--gold)') {
  return `<article class="work-card"><div class="work-card-top"><span>${id}</span><i class="priority-dot" style="--priority:${priority}"></i></div><h4>${title}</h4><p>${asset}</p><div class="work-card-foot"><span>${icon('clock')} ${due}</span><i class="tiny-avatar">${initials}</i></div></article>`;
}

function renderWorkshopLegacy() {
  content.innerHTML = `<div class="page-enter">
    ${pageHead({eyebrow:'ATIVOS & OFICINA',title:'Manutenção sem surpresa na colheita.',description:'Ordens de serviço, horímetros, planos preventivos, peças, ferramentas e custo total por máquina em uma única rotina.',primary:'Nova ordem de serviço',secondary:{label:'Registrar horímetro',icon:'gauge',action:'meter'}})}
    <section class="metric-grid">
      ${metricCard({label:'Disponibilidade da frota',value:'92,4',unit:'%',iconName:'gauge',delta:'Meta 95%',foot:'2 máquinas paradas',tone:'green',neutral:true})}
      ${metricCard({label:'OS em aberto',value:'12',unit:'ordens',iconName:'clipboard',delta:'4 críticas',foot:'2 vencidas',tone:'orange',down:true})}
      ${metricCard({label:'Custo manutenção · mês',value:'R$ 148',unit:'mil',iconName:'wrench',delta:'-6,3%',foot:'versus orçamento',tone:'blue'})}
      ${metricCard({label:'Preventiva no prazo',value:'88,6',unit:'%',iconName:'shield',delta:'+3,4 p.p.',foot:'últimos 30 dias',tone:'gold'})}
    </section>
    ${panel('Ordens de serviço','Fluxo diário da oficina · arraste conceitual entre etapas',`<div class="kanban">
      <div class="kanban-col" style="--kanban-color:var(--orange)"><div class="kanban-head"><strong>Aguardando</strong><span>4</span></div>${workCard('#OS-188','Troca de rolamento do rotor','Colheitadeira Case 8250','Vence hoje','LM','var(--red)')}${workCard('#OS-187','Revisão de 500 horas','Trator JD 7230J','18 jul','FR')}${workCard('#OS-185','Vazamento no comando hidráulico','Pulverizador Uniport 3030','19 jul','PC')}</div>
      <div class="kanban-col" style="--kanban-color:var(--gold)"><div class="kanban-head"><strong>Em execução</strong><span>3</span></div>${workCard('#OS-184','Troca do kit de filtros','Trator MF 6713','Há 2h','AS')}${workCard('#OS-181','Reparo elétrico do painel','Caminhão Ford Cargo 2429','Há 5h','RM')}${workCard('#OS-179','Alinhamento de plataforma','Colheitadeira S770','Ontem','LM')}</div>
      <div class="kanban-col" style="--kanban-color:var(--green)"><div class="kanban-head"><strong>Concluídas</strong><span>5</span></div>${workCard('#OS-178','Substituição correia do alternador','Trator Valtra T230','Hoje · 10:42','AS','var(--green)')}${workCard('#OS-177','Manutenção preventiva 250h','Pá carregadeira WA200','Hoje · 08:16','PC','var(--green)')}${workCard('#OS-176','Reparo no sistema de freio','Caminhão Volvo VM 330','Ontem · 17:30','RM','var(--green)')}</div>
    </div>`,'<div class="panel-actions"><select class="mini-select"><option>Todas as prioridades</option><option>Críticas</option><option>Preventivas</option></select></div>')}
    <div style="height:16px"></div>
    <div class="two-col">
      ${panel('Próximas preventivas','Programação por horímetro e calendário',`<div class="vehicle-list"><div class="vehicle"><span class="vehicle-icon">${icon('tractor')}</span><span><strong>Case 8250 · revisão 1.000h</strong><small>992h registradas · janela máxima 10h</small></span><b style="color:var(--red)">8h</b></div><div class="vehicle"><span class="vehicle-icon">${icon('tractor')}</span><span><strong>John Deere 7230J · revisão 500h</strong><small>471h registradas · kit reservado</small></span><b>29h</b></div><div class="vehicle"><span class="vehicle-icon">${icon('truck')}</span><span><strong>Volvo VM 330 · troca de óleo</strong><small>Vence por data · 23 jul 2026</small></span><b>7 dias</b></div><div class="vehicle"><span class="vehicle-icon">${icon('sprout')}</span><span><strong>Uniport 3030 · calibração</strong><small>Vence por data · 29 jul 2026</small></span><b>13 dias</b></div></div>`,'<button class="text-button" data-action="schedule">Ver plano</button>')}
      ${panel('Consumo da oficina','Peças e consumíveis aplicados no mês',`<div class="summary-list"><div class="summary-row"><span>Peças de reposição</span><strong>R$ 62.840</strong></div><div class="summary-row"><span>Lubrificantes</span><strong>R$ 21.360</strong></div><div class="summary-row"><span>Filtros e correias</span><strong>R$ 18.920</strong></div><div class="summary-row"><span>Parafusos, porcas e fixadores</span><strong>R$ 7.480</strong></div><div class="summary-row"><span>Ferramentas</span><strong>R$ 4.620</strong></div><div class="summary-total"><span>Total aplicado</span><strong>R$ 115.220</strong></div></div>`,'<button class="text-button" data-view-link="inventory">Abrir estoque '+icon('arrow')+'</button>')}
    </div>
    <div style="height:16px"></div>
    ${panel('Lembretes e anotações de manutenção','Trocas de óleo, filtros, lubrificação e demais rotinas com vencimento por data ou horímetro',`<div class="table-wrap"><table class="data-table maintenance-reminders"><thead><tr><th>Ativo</th><th>Manutenção</th><th>Última execução</th><th>Próximo vencimento</th><th>Leitura atual</th><th>Anotação</th><th>Situação</th></tr></thead><tbody>
      <tr><td><strong>Case 8250</strong><small>Colhedora</small></td><td>Óleo do motor + filtros</td><td>750,4 h<small>18 abr 2026</small></td><td><strong>1.000 h</strong><small>ou 23 jul 2026</small></td><td>992,0 h</td><td class="notes-cell">Kit OLE-15W40 e filtros já separado na oficina.</td><td><span class="status danger">Vence em 8h</span></td></tr>
      <tr><td><strong>JD 7230J</strong><small>Trator</small></td><td>Óleo hidráulico</td><td>2.030 h<small>02 fev 2026</small></td><td><strong>2.500 h</strong><small>ou 30 jul 2026</small></td><td>2.471 h</td><td class="notes-cell">Verificar vazamento leve na conexão traseira.</td><td><span class="status warning">Vence em 29h</span></td></tr>
      <tr><td><strong>Uniport 3030</strong><small>Pulverizador</small></td><td>Filtros + calibração</td><td>3.000 h<small>12 mar 2026</small></td><td><strong>3.250 h</strong><small>29 jul 2026</small></td><td>3.228,4 h</td><td class="notes-cell">Trocar filtro de linha e conferir vazão de todos os bicos.</td><td><span class="status warning">21,6 h</span></td></tr>
      <tr><td><strong>Volvo VM 330</strong><small>Caminhão</small></td><td>Óleo do motor</td><td>174.320 km<small>22 jan 2026</small></td><td><strong>184.500 km</strong><small>23 jul 2026</small></td><td>184.320 km</td><td class="notes-cell">Agendar após a última viagem do contrato MIL-2026-04.</td><td><span class="status danger">180 km</span></td></tr>
    </tbody></table></div>`,'<button class="primary-button" data-action="maintenance-reminder">'+icon('plus')+'Novo lembrete</button>')}
  </div>`;
}

function renderWorkshop() {
  renderWorkshopLegacy();
  const telemetry = '<div class=table-wrap><table class=data-table><thead><tr><th>Ativo / origem</th><th>Operação planejada</th><th>Realizado</th><th>Horas produtivas</th><th>Transporte</th><th>Ociosa</th><th>Custo real</th><th>Condição</th></tr></thead><tbody><tr><td><strong>Case 8250</strong><small>FieldView · há 3 min</small></td><td>C-07 · 42 ha<small>colheita de árvore</small></td><td>38,6 ha<small>91,9%</small></td><td><strong>7,8 h</strong></td><td>1,2 h</td><td>0,6 h</td><td>R$ 286,40/ha</td><td><span class=status>Normal</span></td></tr><tr><td><strong>JD 7230J</strong><small>Operations Center · há 1 min</small></td><td>C-04 · 22,6 ha<small>adubação</small></td><td>14,8 ha<small>65,5%</small></td><td><strong>4,4 h</strong></td><td>0,8 h</td><td>1,1 h</td><td>R$ 198,20/ha</td><td><span class=status-warning>DTC 1569.31</span></td></tr><tr><td><strong>Uniport 3030</strong><small>Gateway Gefaz360 · agora</small></td><td>PR-048 · 7,6 ha<small>taxa variável</small></td><td>0 ha<small>aguarda aprovação</small></td><td><strong>0 h</strong></td><td>0 h</td><td>0,4 h</td><td>—</td><td><span class=status-info>Plano recebido</span></td></tr></tbody></table></div>';
  const alerts = '<div class=alerts><div class=alert-item style=--alert-color:var(--red);--alert-soft:var(--red-soft)><span class=alert-icon>'+icon('alert')+'</span><span><strong>JD 7230J · falha DTC 1569.31</strong><small>Potência reduzida; abrir inspeção antes da próxima jornada.</small></span><button class=secondary-button data-action=telemetry-work-order>Abrir OS</button></div><div class=alert-item style=--alert-color:var(--gold);--alert-soft:var(--gold-soft)><span class=alert-icon>'+icon('gauge')+'</span><span><strong>Case 8250 · consumo 9,4% acima</strong><small>Comparação com mesma operação, talhão e faixa de umidade.</small></span><button class=secondary-button data-action=telemetry-review>Comparar</button></div></div>';
  content.querySelector('.page-enter').insertAdjacentHTML('beforeend','<div style=height:16px></div>'+panel('Telemetria e custo real por operação','Planos enviados ao operador, realizado, tempos produtivo/transportando/ocioso, consumo e falhas',telemetry,'<button class=primary-button data-action=telemetry-plan>'+icon('plus')+'Enviar plano à máquina</button>')+'<div style=height:16px></div>'+panel('Alertas por condição','Falhas e desvios que alimentam manutenção preventiva e corretiva',alerts));
}

function renderFuel() {
  content.innerHTML = `<div class="page-enter">
    ${pageHead({eyebrow:'ATIVOS · COMBUSTÍVEIS',title:'Cada litro ligado à máquina e ao horímetro.',description:'Controle entradas, saldos por tanque e abastecimentos com quantidade, operador, ativo, horímetro e consumo médio por hora.',primary:'Registrar abastecimento',action:'fuel-dispense',secondary:{label:'Entrada de combustível',icon:'download',action:'fuel-receipt'}})}
    <section class="metric-grid">
      ${metricCard({label:'Estoque disponível',value:'24.680',unit:'L',iconName:'fuel',delta:'70,5%',foot:'da capacidade total',tone:'green',neutral:true})}
      ${metricCard({label:'Consumo · hoje',value:'1.284',unit:'L',iconName:'gauge',delta:'18 abastecimentos',foot:'até 18:42',tone:'blue',neutral:true})}
      ${metricCard({label:'Custo médio ponderado',value:'R$ 6,18',unit:'/L',iconName:'coins',delta:'-R$ 0,12',foot:'versus mês anterior',tone:'green'})}
      ${metricCard({label:'Diferença físico × sistema',value:'-0,7',unit:'%',iconName:'alert',delta:'-172 L',foot:'dentro da tolerância de 1%',tone:'orange',neutral:true})}
    </section>
    <div class="two-col">
      ${panel('Posição dos tanques','Saldo disponível, capacidade e última medição física',`<div class="vehicle-list"><div class="vehicle"><span class="vehicle-icon">${icon('fuel')}</span><span><strong>Tanque 01 · Diesel S10</strong><small>15.840 de 20.000 L · medido hoje 17:55</small><div class="row-progress"><div class="row-progress-line"><span style="width:79%"></span></div><small>79%</small></div></span><b>15.840 L</b></div><div class="vehicle"><span class="vehicle-icon">${icon('fuel')}</span><span><strong>Tanque 02 · Diesel S500</strong><small>6.420 de 10.000 L · medido hoje 17:48</small><div class="row-progress"><div class="row-progress-line"><span style="width:64%"></span></div><small>64%</small></div></span><b>6.420 L</b></div><div class="vehicle"><span class="vehicle-icon">${icon('droplet')}</span><span><strong>Tanque 03 · Arla 32</strong><small>2.420 de 5.000 L · medido hoje 16:30</small><div class="row-progress"><div class="row-progress-line"><span style="width:48%"></span></div><small>48%</small></div></span><b>2.420 L</b></div></div>`,'<button class="text-button" data-action="fuel-count">Registrar medição</button>')}
      ${panel('Consumo por ativo · hoje','Quantidade abastecida e média calculada pela variação do horímetro',`<div class="summary-list"><div class="summary-row"><span>Case 8250</span><strong>286 L <small>18,6 L/h</small></strong></div><div class="summary-row"><span>John Deere 7230J</span><strong>214 L <small>12,8 L/h</small></strong></div><div class="summary-row"><span>Uniport 3030</span><strong>168 L <small>10,9 L/h</small></strong></div><div class="summary-row"><span>Case 7700</span><strong>246 L <small>17,8 L/h</small></strong></div><div class="summary-row"><span>Demais ativos</span><strong>370 L <small>média 9,7 L/h</small></strong></div><div class="summary-total"><span>Total do dia</span><strong>1.284 L</strong></div></div>`,'<span class="status">Horímetros conferidos</span>')}
    </div>
    <div style="height:16px"></div>
    ${panel('Últimos abastecimentos','Rastreabilidade do tanque ao ativo, com leitura de horímetro e indicador de consumo',`<div class="table-wrap"><table class="data-table fuel-table"><thead><tr><th>Registro / horário</th><th>Ativo</th><th>Combustível / tanque</th><th>Quantidade</th><th>Horímetro</th><th>Consumo médio</th><th>Operador</th><th>Situação</th></tr></thead><tbody>
      <tr><td><strong>ABS-0184</strong><small>Hoje · 18:12</small></td><td><strong>Case 8250</strong><small>Colhedora própria</small></td><td>Diesel S10<small>Tanque 01</small></td><td><strong>186 L</strong></td><td>1.000,5 h</td><td>18,6 L/h</td><td>Carlos Mendes</td><td><span class="status">Conferido</span></td></tr>
      <tr><td><strong>ABS-0183</strong><small>Hoje · 16:48</small></td><td><strong>JD 7230J</strong><small>Trator próprio</small></td><td>Diesel S10<small>Tanque 01</small></td><td><strong>142 L</strong></td><td>2.471,0 h</td><td>12,8 L/h</td><td>Paulo Nunes</td><td><span class="status">Conferido</span></td></tr>
      <tr><td><strong>ABS-0182</strong><small>Hoje · 15:30</small></td><td><strong>Uniport 3030</strong><small>Pulverizador próprio</small></td><td>Diesel S10<small>Tanque 01</small></td><td><strong>118 L</strong></td><td>3.228,4 h</td><td>10,9 L/h</td><td>Rafael Souza</td><td><span class="status">Conferido</span></td></tr>
      <tr><td><strong>ABS-0181</strong><small>Hoje · 13:05</small></td><td><strong>Volvo VM 330</strong><small>Caminhão</small></td><td>Diesel S500<small>Tanque 02</small></td><td><strong>96 L</strong></td><td>184.320 km</td><td>—</td><td>Marcos Oliveira</td><td><span class="status warning">Odômetro</span></td></tr>
      <tr><td><strong>ABS-0180</strong><small>Hoje · 11:22</small></td><td><strong>Case 7700</strong><small>Colhedora própria</small></td><td>Diesel S10<small>Tanque 01</small></td><td><strong>164 L</strong></td><td>1.876,2 h</td><td>17,8 L/h</td><td>João Vieira</td><td><span class="status info">Revisar média</span></td></tr>
    </tbody></table></div>`,'<button class="secondary-button" data-action="fuel-dispense">'+icon('plus')+'Novo abastecimento</button>')}
    <div style="height:16px"></div>
    ${panel('Conferências e alertas','Pendências que podem afetar saldo, custo ou consumo específico',`<div class="alerts"><div class="alert-item" style="--alert-color:var(--gold);--alert-soft:var(--gold-soft)"><span class="alert-icon">${icon('gauge')}</span><span><strong>Case 7700 acima da média de consumo</strong><small>17,8 L/h · referência de 15,9 L/h para esta operação</small></span><button class="secondary-button" data-action="resolve">Revisar</button></div><div class="alert-item" style="--alert-color:var(--blue);--alert-soft:var(--blue-soft)"><span class="alert-icon">${icon('fuel')}</span><span><strong>Tanque 02 aguarda conferência física</strong><small>Diferença estimada de 86 L após a última entrada</small></span><button class="secondary-button" data-action="fuel-count">Medir</button></div></div>`,'<span class="status warning">2 pendências</span>')}
  </div>`;
}

const inventory = [
  ['ROL-6208','Rolamento 6208 2RS','Peças','8 un','6 un','R$ 1.960','Crítico'],
  ['FIL-JD500','Kit filtros JD 500h','Peças','2 kits','3 kits','R$ 3.420','Baixo'],
  ['OLE-15W40','Óleo motor 15W40','Consumíveis','184 L','120 L','R$ 6.872','Normal'],
  ['PAR-M12X40','Parafuso M12 × 40 · 8.8','Fixadores','340 un','200 un','R$ 748','Normal'],
  ['POR-M12','Porca sextavada M12','Fixadores','286 un','200 un','R$ 286','Normal'],
  ['COR-5V900','Correia 5V900','Peças','3 un','4 un','R$ 780','Baixo'],
  ['CHV-IMPACT','Chave de impacto 1/2”','Ferramentas','6 un','4 un','R$ 8.940','Normal'],
  ['GRX-EP2','Graxa multiuso EP2','Consumíveis','48 kg','30 kg','R$ 1.824','Normal'],
  ['DIS-115','Disco de corte 115 mm','Consumíveis','22 un','30 un','R$ 396','Baixo'],
  ['BOM-UNI3030','Bomba hidráulica Uniport','Peças','1 un','1 un','R$ 14.860','Normal']
];

function inventoryRows() {
  const q = (document.getElementById('inventorySearch')?.value || '').toLowerCase();
  return inventory.filter(r => (state.inventoryFilter === 'Todos' || r[2] === state.inventoryFilter || state.inventoryFilter === 'Baixo estoque' && ['Baixo','Crítico'].includes(r[6])) && r.join(' ').toLowerCase().includes(q)).map(r => {
    const statusClass = r[6] === 'Crítico' ? 'danger' : r[6] === 'Baixo' ? 'warning' : '';
    return `<tr><td><div class="cell-main"><span class="cell-icon">${icon(r[2]==='Ferramentas'?'wrench':'package')}</span><span><strong>${r[1]}</strong><small>${r[0]}</small></span></div></td><td>${r[2]}</td><td><strong>${r[3]}</strong></td><td>${r[4]}</td><td>${r[5]}</td><td><span class="status ${statusClass}">${r[6]}</span></td><td><button class="icon-button" style="width:29px;height:29px;padding:7px" data-action="stock-move">${icon('chevron')}</button></td></tr>`;
  }).join('') || `<tr><td colspan="7"><div class="empty-state"><strong>Nenhum item encontrado</strong><p>Ajuste a busca ou selecione outra categoria.</p></div></td></tr>`;
}

function renderInventoryLegacy() {
  content.innerHTML = `<div class="page-enter">
    ${pageHead({eyebrow:'ESTOQUE & SUPRIMENTOS',title:'Tudo no lugar, antes de parar a máquina.',description:'Inventário de ferramentas, peças, consumíveis e fixadores com mínimo, custo médio, localização e vínculo obrigatório à ordem de serviço.',primary:'Nova movimentação',secondary:{label:'Inventário físico',icon:'clipboard',action:'count'}})}
    <section class="metric-grid">
      ${metricCard({label:'Valor em estoque',value:'R$ 684',unit:'mil',iconName:'package',delta:'+2,8%',foot:'versus mês anterior',tone:'green',neutral:true})}
      ${metricCard({label:'Itens cadastrados',value:'1.284',unit:'SKUs',iconName:'database',delta:'92,1%',foot:'com localização',tone:'blue'})}
      ${metricCard({label:'Abaixo do mínimo',value:'12',unit:'itens',iconName:'alert',delta:'4 críticos',foot:'para a oficina',tone:'orange',down:true})}
      ${metricCard({label:'Giro de estoque',value:'4,7',unit:'vezes/ano',iconName:'sync',delta:'+0,6',foot:'versus ano anterior',tone:'gold'})}
    </section>
    ${panel('Posição de estoque','Saldo, ponto de reposição e valor pelo custo médio',`<div class="search-row"><label class="search-box">${icon('search')}<input id="inventorySearch" placeholder="Buscar item ou código"></label><div class="filter-chips" id="inventoryChips">${['Todos','Peças','Consumíveis','Fixadores','Ferramentas','Baixo estoque'].map(x=>`<button class="filter-chip ${state.inventoryFilter===x?'active':''}" data-inventory-filter="${x}">${x}</button>`).join('')}</div></div><div class="table-wrap"><table class="data-table"><thead><tr><th>Item</th><th>Categoria</th><th>Saldo</th><th>Mínimo</th><th>Valor</th><th>Situação</th><th></th></tr></thead><tbody id="inventoryBody">${inventoryRows()}</tbody></table></div>`,'<select class="mini-select"><option>Almoxarifado central</option><option>Oficina</option><option>Campo</option></select>')}
  </div>`;
}

function renderInventory() {
  renderInventoryLegacy();
  const cycle = '<div class=purchase-flow><article><span>1</span><strong>Estoque mínimo</strong><small>12 itens · 4 críticos</small></article><b>'+icon('arrow')+'</b><article><span>2</span><strong>Solicitação</strong><small>SC-048 · R$ 18.420</small></article><b>'+icon('arrow')+'</b><article><span>3</span><strong>3 cotações</strong><small>melhor prazo e custo</small></article><b>'+icon('arrow')+'</b><article><span>4</span><strong>Aprovação</strong><small>gestor + financeiro</small></article><b>'+icon('arrow')+'</b><article><span>5</span><strong>Pedido</strong><small>PC-026 emitido</small></article><b>'+icon('arrow')+'</b><article><span>6</span><strong>Recebimento + NF</strong><small>quantidade e preço validados</small></article></div>';
  const quotes = '<div class=table-wrap><table class=data-table><thead><tr><th>Solicitação / item</th><th>Necessidade</th><th>Cotações</th><th>Selecionada</th><th>Prazo</th><th>Aprovação</th><th>Pedido / recebimento</th><th>Divergência</th></tr></thead><tbody><tr><td><strong>SC-048</strong><small>FIL-JD500 · kit filtros</small></td><td>6 kits<small>estoque: 2</small></td><td>3 fornecedores<small>R$ 17.820–19.460</small></td><td>Agro Peças Oeste<small>R$ 18.420</small></td><td>2 dias</td><td><span class=status-warning>Gestor</span></td><td>Aguardando</td><td>—</td></tr><tr><td><strong>SC-047</strong><small>ROL-6208 · rolamento</small></td><td>12 un<small>estoque: 8</small></td><td>3 fornecedores<small>R$ 2.760–3.180</small></td><td>Rolamentos Minas<small>R$ 2.880</small></td><td>Mesmo dia</td><td><span class=status>Aprovada</span></td><td>PC-025<small>recebido hoje</small></td><td><span class=status-warning>+1 un na NF</span></td></tr><tr><td><strong>SC-044</strong><small>OLE-15W40 · óleo</small></td><td>240 L<small>estoque: 184 L</small></td><td>3 fornecedores<small>R$ 7.440–8.160</small></td><td>LubriCampo<small>R$ 7.680</small></td><td>3 dias</td><td><span class=status>Aprovada</span></td><td>PC-022<small>entrada e contas a pagar</small></td><td><span class=status>Conferido</span></td></tr></tbody></table></div>';
  const actions = '<div class=panel-actions><button class=secondary-button data-action=purchase-quote>Registrar cotação</button><button class=secondary-button data-action=purchase-receipt>Receber pedido</button><button class=primary-button data-action=purchase-request>'+icon('plus')+'Nova solicitação</button></div>';
  content.querySelector('.page-enter').insertAdjacentHTML('beforeend','<div style=height:16px></div>'+panel('Ciclo inteligente de compras','Da ruptura prevista à entrada física e financeira, com alçadas e validação de divergências',cycle,actions)+'<div style=height:16px></div>'+panel('Solicitações, cotações e recebimentos','Três propostas comparáveis, aprovação, pedido e conferência com a NF',quotes));
}

const soilAnalysisRecords = [
  { season:'2025/26', code:'SOL-052', date:'12 mai 2026', plot:'C-07 · Boa Esperança', farm:'Fazenda Santa Helena', depth:'0–20 cm', lab:'LabSolo', ph:5.6, p:18.4, k:0.31, ca:3.4, mg:1.2, v:58, clay:42, status:'Revisada' },
  { season:'2025/26', code:'SOL-051', date:'10 mai 2026', plot:'C-04 · Lavoura Sede', farm:'Fazenda Santa Helena', depth:'0–20 cm', lab:'LabSolo', ph:5.2, p:12.1, k:0.24, ca:2.8, mg:0.9, v:49, clay:38, status:'Atenção' },
  { season:'2025/26', code:'SOL-050', date:'28 abr 2026', plot:'M-03 · Chapadão', farm:'Fazenda Horizonte', depth:'0–20 cm', lab:'AgroLab', ph:5.8, p:21.6, k:0.36, ca:3.9, mg:1.4, v:63, clay:46, status:'Revisada' },
  { season:'2025/26', code:'SOL-049', date:'25 abr 2026', plot:'S-08 · Cerrado', farm:'Fazenda Horizonte', depth:'0–20 cm', lab:'AgroLab', ph:4.9, p:8.6, k:0.18, ca:2.1, mg:0.7, v:41, clay:52, status:'Correção' },
  { season:'2024/25', code:'SOL-044', date:'18 mai 2025', plot:'C-07 · Boa Esperança', farm:'Fazenda Santa Helena', depth:'0–20 cm', lab:'LabSolo', ph:5.3, p:14.2, k:0.27, ca:3.0, mg:1.0, v:52, clay:42, status:'Revisada' },
  { season:'2024/25', code:'SOL-043', date:'17 mai 2025', plot:'C-04 · Lavoura Sede', farm:'Fazenda Santa Helena', depth:'0–20 cm', lab:'LabSolo', ph:5.0, p:10.5, k:0.20, ca:2.5, mg:0.8, v:45, clay:38, status:'Atenção' },
  { season:'2024/25', code:'SOL-042', date:'04 mai 2025', plot:'M-03 · Chapadão', farm:'Fazenda Horizonte', depth:'0–20 cm', lab:'AgroLab', ph:5.6, p:18.7, k:0.33, ca:3.6, mg:1.2, v:59, clay:46, status:'Revisada' },
  { season:'2024/25', code:'SOL-041', date:'02 mai 2025', plot:'S-08 · Cerrado', farm:'Fazenda Horizonte', depth:'0–20 cm', lab:'AgroLab', ph:4.8, p:7.9, k:0.16, ca:1.9, mg:0.6, v:38, clay:52, status:'Correção' },
  { season:'2023/24', code:'SOL-036', date:'22 mai 2024', plot:'C-07 · Boa Esperança', farm:'Fazenda Santa Helena', depth:'0–20 cm', lab:'LabSolo', ph:5.1, p:12.8, k:0.23, ca:2.7, mg:0.9, v:48, clay:41, status:'Revisada' },
  { season:'2023/24', code:'SOL-035', date:'20 mai 2024', plot:'C-04 · Lavoura Sede', farm:'Fazenda Santa Helena', depth:'20–40 cm', lab:'LabSolo', ph:4.8, p:7.1, k:0.15, ca:1.8, mg:0.6, v:37, clay:40, status:'Atenção' },
  { season:'2023/24', code:'SOL-034', date:'09 mai 2024', plot:'M-03 · Chapadão', farm:'Fazenda Horizonte', depth:'0–20 cm', lab:'AgroLab', ph:5.4, p:16.3, k:0.29, ca:3.2, mg:1.1, v:55, clay:46, status:'Revisada' },
  { season:'2022/23', code:'SOL-029', date:'19 mai 2023', plot:'C-07 · Boa Esperança', farm:'Fazenda Santa Helena', depth:'0–20 cm', lab:'LabSolo', ph:4.9, p:9.8, k:0.19, ca:2.2, mg:0.7, v:42, clay:41, status:'Revisada' },
  { season:'2022/23', code:'SOL-028', date:'16 mai 2023', plot:'C-04 · Lavoura Sede', farm:'Fazenda Santa Helena', depth:'0–20 cm', lab:'LabSolo', ph:4.7, p:6.9, k:0.14, ca:1.7, mg:0.5, v:34, clay:39, status:'Atenção' },
  { season:'2022/23', code:'SOL-027', date:'03 mai 2023', plot:'S-08 · Cerrado', farm:'Fazenda Horizonte', depth:'0–20 cm', lab:'AgroLab', ph:4.6, p:6.1, k:0.13, ca:1.5, mg:0.5, v:31, clay:51, status:'Correção' },
  { season:'2021/22', code:'SOL-021', date:'21 mai 2022', plot:'C-07 · Boa Esperança', farm:'Fazenda Santa Helena', depth:'0–20 cm', lab:'CampoLab', ph:4.8, p:8.4, k:0.17, ca:2.0, mg:0.6, v:39, clay:40, status:'Revisada' },
  { season:'2021/22', code:'SOL-020', date:'18 mai 2022', plot:'C-04 · Lavoura Sede', farm:'Fazenda Santa Helena', depth:'0–20 cm', lab:'CampoLab', ph:4.6, p:6.2, k:0.12, ca:1.6, mg:0.5, v:32, clay:39, status:'Atenção' },
  { season:'2021/22', code:'SOL-019', date:'07 mai 2022', plot:'M-03 · Chapadão', farm:'Fazenda Horizonte', depth:'0–20 cm', lab:'CampoLab', ph:5.0, p:10.7, k:0.21, ca:2.4, mg:0.8, v:44, clay:45, status:'Revisada' },
  { season:'2020/21', code:'SOL-013', date:'15 mai 2021', plot:'C-07 · Boa Esperança', farm:'Fazenda Santa Helena', depth:'0–20 cm', lab:'CampoLab', ph:4.7, p:7.5, k:0.15, ca:1.8, mg:0.6, v:35, clay:40, status:'Revisada' },
  { season:'2020/21', code:'SOL-012', date:'12 mai 2021', plot:'M-03 · Chapadão', farm:'Fazenda Horizonte', depth:'0–20 cm', lab:'CampoLab', ph:4.9, p:9.3, k:0.18, ca:2.1, mg:0.7, v:40, clay:45, status:'Revisada' }
];

const soilAmendmentRecords = [
  { season:'2025/26', sort:'2026-06-18', date:'18 jun 2026', plot:'C-07 · Boa Esperança', type:'Adubação', product:'20-05-20 + B e Zn', dose:'450 kg/ha', area:18.4, total:'8,28 t', equipment:'DCA 5500', responsible:'Carlos Mendes', source:'SOL-052', status:'Concluída' },
  { season:'2025/26', sort:'2026-06-06', date:'06 jun 2026', plot:'C-04 · Lavoura Sede', type:'Adubação', product:'18-08-18 + micros', dose:'420 kg/ha', area:22.6, total:'9,49 t', equipment:'DCA 5500', responsible:'Paulo Nunes', source:'SOL-051', status:'Concluída' },
  { season:'2025/26', sort:'2026-03-20', date:'20 mar 2026', plot:'M-03 · Chapadão', type:'Calagem', product:'Calcário dolomítico · PRNT 88%', dose:'2,20 t/ha', area:64.0, total:'140,80 t', equipment:'Jan Lancer 12.000', responsible:'Rafael Souza', source:'SOL-050', status:'Concluída' },
  { season:'2025/26', sort:'2026-03-15', date:'15 mar 2026', plot:'S-08 · Cerrado', type:'Calagem', product:'Calcário dolomítico · PRNT 82%', dose:'2,80 t/ha', area:48.0, total:'134,40 t', equipment:'Jan Lancer 12.000', responsible:'Rafael Souza', source:'SOL-049', status:'Concluída' },
  { season:'2025/26', sort:'2026-02-12', date:'12 fev 2026', plot:'C-07 · Boa Esperança', type:'Gessagem', product:'Gesso agrícola', dose:'1,20 t/ha', area:18.4, total:'22,08 t', equipment:'Jan Lancer 12.000', responsible:'Carlos Mendes', source:'SOL-052', status:'Concluída' },
  { season:'2024/25', sort:'2025-06-14', date:'14 jun 2025', plot:'C-07 · Boa Esperança', type:'Adubação', product:'20-05-20', dose:'430 kg/ha', area:18.4, total:'7,91 t', equipment:'DCA 5500', responsible:'Carlos Mendes', source:'SOL-044', status:'Concluída' },
  { season:'2024/25', sort:'2025-03-18', date:'18 mar 2025', plot:'C-04 · Lavoura Sede', type:'Calagem', product:'Calcário dolomítico · PRNT 86%', dose:'2,40 t/ha', area:22.6, total:'54,24 t', equipment:'Jan Lancer 12.000', responsible:'Paulo Nunes', source:'SOL-043', status:'Concluída' },
  { season:'2023/24', sort:'2024-06-10', date:'10 jun 2024', plot:'M-03 · Chapadão', type:'Adubação', product:'18-08-18', dose:'390 kg/ha', area:64.0, total:'24,96 t', equipment:'DCA 5500', responsible:'Rafael Souza', source:'SOL-034', status:'Concluída' },
  { season:'2022/23', sort:'2023-03-11', date:'11 mar 2023', plot:'S-08 · Cerrado', type:'Calagem', product:'Calcário calcítico · PRNT 80%', dose:'3,00 t/ha', area:48.0, total:'144,00 t', equipment:'Jan Lancer 12.000', responsible:'Marcos Oliveira', source:'SOL-027', status:'Concluída' }
];

const pruningRecords = [
  { season:'2025/26', sort:'2025-09-12', date:'12 set 2025', plot:'C-04 · Lavoura Sede', type:'Decote', area:6.5, plants:'8.120 plantas', height:'1,80 m', equipment:'Podador hidráulico', team:'Equipe 03', responsible:'Ana Pereira', next:'Desbrota · nov 2025', status:'Concluída' },
  { season:'2025/26', sort:'2025-08-30', date:'30 ago 2025', plot:'C-07 · Boa Esperança', type:'Esqueletamento', area:8.2, plants:'10.250 plantas', height:'1,70 m', equipment:'Podador lateral', team:'Equipe 05', responsible:'José Carlos', next:'Desbrota · out 2025', status:'Concluída' },
  { season:'2025/26', sort:'2025-08-22', date:'22 ago 2025', plot:'C-12 · Pedra Branca', type:'Recepa', area:3.8, plants:'4.760 plantas', height:'0,40 m', equipment:'Motosserra leve', team:'Equipe 02', responsible:'Ana Pereira', next:'Seleção de brotos · nov 2025', status:'Concluída' },
  { season:'2025/26', sort:'2025-08-15', date:'15 ago 2025', plot:'C-02 · Vargem', type:'Desponte', area:5.1, plants:'6.380 plantas', height:'2,00 m', equipment:'Podador manual', team:'Equipe 04', responsible:'José Carlos', next:'Revisão · dez 2025', status:'Concluída' },
  { season:'2024/25', sort:'2024-09-05', date:'05 set 2024', plot:'C-07 · Boa Esperança', type:'Decote', area:7.6, plants:'9.500 plantas', height:'1,85 m', equipment:'Podador hidráulico', team:'Equipe 05', responsible:'Ana Pereira', next:'Desbrota · nov 2024', status:'Concluída' },
  { season:'2023/24', sort:'2023-08-27', date:'27 ago 2023', plot:'C-04 · Lavoura Sede', type:'Esqueletamento', area:9.0, plants:'11.250 plantas', height:'1,75 m', equipment:'Podador lateral', team:'Equipe 03', responsible:'José Carlos', next:'Desbrota · out 2023', status:'Concluída' }
];

const culturalManagementRecords = [
  { season:'2025/26', sort:'2026-07-03', date:'03 jul 2026', plot:'C-07 · Boa Esperança', type:'Esparramação', method:'Mecanizada', area:18.4, equipment:'Esparramador cafeeiro', team:'Equipe 05', responsible:'José Carlos', hours:12.4, fuel:68, cost:4420, detail:'Redistribuição uniforme da palha após a colheita', status:'Concluída' },
  { season:'2025/26', sort:'2026-06-22', date:'22 jun 2026', plot:'C-04 · Lavoura Sede', type:'Roçada', method:'Mecanizada', area:22.6, equipment:'Roçadeira ecológica', team:'Equipe mecanizada', responsible:'Carlos Mendes', hours:16.8, fuel:92, cost:5180, detail:'Vegetação de 35 cm reduzida para aproximadamente 8 cm', status:'Concluída' },
  { season:'2025/26', sort:'2026-05-18', date:'18 mai 2026', plot:'C-07 · Boa Esperança', type:'Capina', method:'Manual', area:6.8, equipment:'Ferramentas manuais', team:'Equipe 04', responsible:'Ana Pereira', hours:54.0, fuel:0, cost:6480, detail:'Capina seletiva na linha do cafeeiro', status:'Concluída' },
  { season:'2025/26', sort:'2026-05-12', date:'12 mai 2026', plot:'M-03 · Chapadão', type:'Capina', method:'Mecanizada', area:64.0, equipment:'Cultivador entrelinhas', team:'Equipe mecanizada', responsible:'Rafael Souza', hours:21.5, fuel:148, cost:8950, detail:'Controle mecânico de plantas espontâneas', status:'Concluída' },
  { season:'2025/26', sort:'2026-04-10', date:'10 abr 2026', plot:'C-07 · Boa Esperança', type:'Arruação', method:'Mecanizada', area:18.4, equipment:'Arruador e soprador', team:'Equipe 05', responsible:'José Carlos', hours:14.2, fuel:77, cost:4860, detail:'Faixa de 1,20 m preparada sob a saia para início da colheita', status:'Concluída' },
  { season:'2025/26', sort:'2026-03-28', date:'28 mar 2026', plot:'C-04 · Lavoura Sede', type:'Arruação', method:'Mista', area:22.6, equipment:'Soprador + acabamento manual', team:'Equipe 03', responsible:'Ana Pereira', hours:28.0, fuel:64, cost:6720, detail:'Limpeza sob a saia e redistribuição do material para a entrelinha', status:'Concluída' },
  { season:'2024/25', sort:'2025-07-20', date:'20 jul 2025', plot:'C-07 · Boa Esperança', type:'Esparramação', method:'Mecanizada', area:18.4, equipment:'Esparramador cafeeiro', team:'Equipe 05', responsible:'José Carlos', hours:11.8, fuel:65, cost:4190, detail:'Retorno da palha e matéria orgânica para a linha', status:'Concluída' },
  { season:'2024/25', sort:'2025-04-05', date:'05 abr 2025', plot:'C-07 · Boa Esperança', type:'Arruação', method:'Mecanizada', area:18.4, equipment:'Arruador e soprador', team:'Equipe 05', responsible:'José Carlos', hours:13.9, fuel:75, cost:4610, detail:'Preparação pré-colheita', status:'Concluída' },
  { season:'2024/25', sort:'2025-02-18', date:'18 fev 2025', plot:'C-04 · Lavoura Sede', type:'Roçada', method:'Mecanizada', area:22.6, equipment:'Roçadeira ecológica', team:'Equipe mecanizada', responsible:'Carlos Mendes', hours:16.1, fuel:88, cost:4920, detail:'Roçada das entrelinhas', status:'Concluída' },
  { season:'2023/24', sort:'2024-05-08', date:'08 mai 2024', plot:'C-04 · Lavoura Sede', type:'Capina', method:'Manual', area:8.0, equipment:'Ferramentas manuais', team:'Equipe 03', responsible:'Ana Pereira', hours:61.0, fuel:0, cost:7010, detail:'Capina seletiva e coroamento', status:'Concluída' }
];

const otherPlotEvents = [
  { season:'2025/26', sort:'2026-07-16', date:'16 jul 2026', plot:'C-07 · Boa Esperança', type:'Colheita', title:'Colheita mecanizada de árvore', detail:'Case 8250 · 7,8 h · 4.850 L enviados ao TER-025', icon:'coffee' },
  { season:'2025/26', sort:'2026-07-08', date:'08 jul 2026', plot:'C-04 · Lavoura Sede', type:'Pulverização', title:'Fungicida F-12 aplicado', detail:'Uniport 3030 · 142 L/ha · parâmetros PVGest preservados', icon:'droplet' },
  { season:'2025/26', sort:'2026-06-28', date:'28 jun 2026', plot:'C-04 · Lavoura Sede', type:'Pulverização via solo', title:'Inseticida SI-02 · linha dirigida', detail:'PVGest · faixa 0,80 m · 210 L/ha · solo úmido após chuva', icon:'droplet' },
  { season:'2025/26', sort:'2025-11-18', date:'18 nov 2025', plot:'C-07 · Boa Esperança', type:'Desbrota', title:'Desbrota pós-esqueletamento', detail:'Equipe 05 · seleção de dois brotos por haste', icon:'sprout' },
  { season:'2024/25', sort:'2025-07-12', date:'12 jul 2025', plot:'C-07 · Boa Esperança', type:'Colheita', title:'Encerramento da colheita', detail:'31,8 sc/ha · lote final beneficiado', icon:'coffee' },
  { season:'2023/24', sort:'2024-01-22', date:'22 jan 2024', plot:'M-03 · Chapadão', type:'Pulverização', title:'Aplicação nutricional', detail:'PVGest · 118 L/ha · sem ocorrências', icon:'droplet' }
];

function soilSeasonRecords() {
  return soilAnalysisRecords.filter(item => item.season === state.season);
}

function soilRows() {
  const query = state.soilQuery.trim().toLowerCase();
  const records = soilSeasonRecords().filter(item => state.soilPlot === 'Todos' || item.plot === state.soilPlot).filter(item => !query || Object.values(item).join(' ').toLowerCase().includes(query));
  if (!records.length) return '<tr><td colspan=10><div class=empty-state>Nenhuma análise encontrada para esta busca.</div></td></tr>';
  return records.map(item => {
    const statusClass = item.status === 'Revisada' ? 'status' : 'status warning';
    return '<tr><td><strong>'+item.code+'</strong><small>'+item.date+'</small></td><td><strong>'+item.plot+'</strong><small>'+item.farm+'</small></td><td>'+item.depth+'</td><td>'+item.lab+'</td><td><strong>'+fmtBR(item.ph,1)+'</strong></td><td>'+fmtBR(item.p,1)+'</td><td>'+fmtBR(item.k,2)+'</td><td>'+fmtBR(item.ca,1)+' / '+fmtBR(item.mg,1)+'</td><td>'+fmtBR(item.v,0)+'%</td><td><span class='+statusClass+'>'+item.status+'</span></td></tr>';
  }).join('');
}

function soilPlotOptions() {
  const plots = new Set();
  soilSeasonRecords().forEach(item => plots.add(item.plot));
  soilAmendmentRecords.filter(item => item.season === state.season).forEach(item => plots.add(item.plot));
  pruningRecords.filter(item => item.season === state.season).forEach(item => plots.add(item.plot));
  culturalManagementRecords.filter(item => item.season === state.season).forEach(item => plots.add(item.plot));
  otherPlotEvents.filter(item => item.season === state.season).forEach(item => plots.add(item.plot));
  return ['Todos',...plots];
}

function soilPlotFilters() {
  return '<div class=filter-chips>'+soilPlotOptions().map(plot => '<button class=filter-chip data-active='+(state.soilPlot === plot ? 'true' : 'false')+' data-soil-plot='+encodeURIComponent(plot)+'>'+plot+'</button>').join('')+'</div>';
}

function soilTabs() {
  const tabs = [['analyses','Análises completas'],['amendments','Adubação & calagem'],['pruning','Podas'],['cultural','Manejo cultural'],['timeline','Linha do tempo']];
  return '<div class=subnav role=tablist>'+tabs.map(tab => '<button class='+(state.soilTab === tab[0] ? 'active' : 'inactive')+' data-soil-tab='+tab[0]+' role=tab>'+tab[1]+'</button>').join('')+'</div>';
}

function soilParameterGroup(title, subtitle, items) {
  return '<article class=soil-parameter-group><div><h3>'+title+'</h3><p>'+subtitle+'</p></div><div class=soil-parameter-list>'+items.map(item => '<div class=soil-parameter><span>'+item[0]+'</span><strong>'+item[1]+'</strong><small>'+item[2]+'</small></div>').join('')+'</div></article>';
}

function soilCompleteProfile(record) {
  if (!record) return '<div class=empty-state>Selecione uma safra com análises cadastradas.</div>';
  const baseSum = record.ca + record.mg + record.k;
  const hAl = Math.max(2.4, 7.6 - baseSum);
  const cecPh7 = baseSum + hAl;
  const aluminum = record.v < 45 ? 0.4 : 0.1;
  const effectiveCec = baseSum + aluminum;
  const aluminumSat = effectiveCec ? aluminum * 100 / effectiveCec : 0;
  const silt = record.clay >= 50 ? 16 : 18;
  const sand = 100 - record.clay - silt;
  const textureClass = record.clay >= 50 ? 'Muito argilosa' : record.clay >= 35 ? 'Argilosa' : 'Média';
  const acidity = [['pH em CaCl₂',fmtBR(record.ph,1),'índice'],['pH em H₂O',fmtBR(record.ph + .5,1),'índice'],['Índice SMP',fmtBR(record.ph + 1.0,1),'índice'],['Al³⁺',fmtBR(aluminum,2),'cmolc/dm³'],['H + Al',fmtBR(hAl,2),'cmolc/dm³'],['Soma de bases · SB',fmtBR(baseSum,2),'cmolc/dm³'],['CTC efetiva · t',fmtBR(effectiveCec,2),'cmolc/dm³'],['CTC a pH 7 · T',fmtBR(cecPh7,2),'cmolc/dm³'],['Saturação por bases · V',fmtBR(record.v,0),'%'],['Saturação por Al · m',fmtBR(aluminumSat,1),'%']];
  const macros = [['Matéria orgânica',fmtBR(26 + record.ph,1),'g/dm³'],['Carbono orgânico',fmtBR((26 + record.ph) / 1.724,1),'g/dm³'],['Fósforo · Mehlich-1',fmtBR(record.p,1),'mg/dm³'],['Potássio',fmtBR(record.k,2),'cmolc/dm³'],['Potássio equivalente',fmtBR(record.k * 391,0),'mg/dm³'],['Cálcio',fmtBR(record.ca,1),'cmolc/dm³'],['Magnésio',fmtBR(record.mg,1),'cmolc/dm³'],['Enxofre',fmtBR(8.2 + record.k * 5,1),'mg/dm³']];
  const micros = [['Boro',fmtBR(.32 + record.ph / 55,2),'mg/dm³'],['Cobre',fmtBR(1.3 + record.clay / 100,2),'mg/dm³'],['Ferro',fmtBR(31 + record.clay / 5,1),'mg/dm³'],['Manganês',fmtBR(9.5 + record.p / 6,1),'mg/dm³'],['Zinco',fmtBR(2.1 + record.p / 18,1),'mg/dm³'],['Silício',fmtBR(5.2 + record.clay / 35,1),'mg/dm³']];
  const texture = [['Argila',fmtBR(record.clay,0),'%'],['Silte',fmtBR(silt,0),'%'],['Areia total',fmtBR(sand,0),'%'],['Classe textural',textureClass,'classe'],['Fósforo remanescente',fmtBR(24 - record.clay / 10,1),'mg/L'],['Condutividade elétrica',fmtBR(.12 + record.k / 5,2),'dS/m'],['Relação Ca/Mg',fmtBR(record.ca / record.mg,2),'relação'],['Relação Ca/K',fmtBR(record.ca / record.k,1),'relação']];
  return '<div class=soil-profile-head><div><span class=eyebrow>'+record.code+' · '+record.plot+'</span><h3>Laudo completo de fertilidade</h3><p>'+record.lab+' · '+record.date+' · '+record.depth+'</p></div><span class=status>'+record.status+'</span></div><div class=soil-parameter-grid>'+soilParameterGroup('Acidez, bases e CTC','Complexo sortivo e saturações',acidity)+soilParameterGroup('Macronutrientes','Disponibilidade e matéria orgânica',macros)+soilParameterGroup('Micronutrientes','Elementos extraídos no laudo',micros)+soilParameterGroup('Textura e indicadores','Granulometria e relações de fertilidade',texture)+'</div><div class=form-note>'+icon('alert')+'Valores demonstrativos para desenho do ERP. Métodos, unidades e faixas de interpretação devem acompanhar o laudo original e a recomendação do responsável técnico.</div>';
}

function soilAnalysisTab(records) {
  const search = '<div class=search-row><label class=search-box>'+icon('search')+'<input id=soilSearch></label><span class=status>Safra '+state.season+'</span></div><div class=table-wrap><table class=data-table><thead><tr><th>Análise / coleta</th><th>Talhão / fazenda</th><th>Profundidade</th><th>Laboratório</th><th>pH</th><th>P · mg/dm³</th><th>K · cmolc/dm³</th><th>Ca / Mg</th><th>V%</th><th>Situação</th></tr></thead><tbody id=soilTableBody>'+soilRows()+'</tbody></table></div>';
  return panel('Análise completa selecionada','Macros, micros, textura e indicadores de fertilidade',soilCompleteProfile(records[0]),'<button class=primary-button data-action=soil-analysis>'+icon('plus')+'Cadastrar análise anterior</button>')+'<div style=height:16px></div>'+panel('Histórico de laudos','Resultados por safra, fazenda, talhão e profundidade',search);
}

function soilAmendmentRows() {
  const rows = soilAmendmentRecords.filter(item => item.season === state.season && (state.soilPlot === 'Todos' || item.plot === state.soilPlot));
  if (!rows.length) return '<tr><td colspan=10><div class=empty-state>Nenhuma adubação ou correção cadastrada neste filtro.</div></td></tr>';
  return rows.map(item => '<tr><td><strong>'+item.date+'</strong><small>'+item.source+'</small></td><td><strong>'+item.plot+'</strong></td><td><span class=status>'+item.type+'</span></td><td><strong>'+item.product+'</strong></td><td>'+item.dose+'</td><td>'+fmtBR(item.area,1)+' ha</td><td>'+item.total+'</td><td>'+item.equipment+'</td><td>'+item.responsible+'</td><td><span class=status>'+item.status+'</span></td></tr>').join('');
}

function soilAmendmentsTab() {
  const table = '<div class=table-wrap><table class=data-table><thead><tr><th>Data / análise</th><th>Talhão</th><th>Operação</th><th>Produto / formulação</th><th>Dose</th><th>Área</th><th>Total</th><th>Equipamento</th><th>Responsável</th><th>Situação</th></tr></thead><tbody>'+soilAmendmentRows()+'</tbody></table></div>';
  const actions = '<div class=panel-actions><button class=secondary-button data-action=liming>'+icon('plus')+'Registrar calagem</button><button class=primary-button data-action=fertilization>'+icon('plus')+'Registrar adubação</button></div>';
  return panel('Adubações, calagens e gessagens','Aplicações vinculadas à safra, ao talhão e à análise que originou a recomendação',table,actions);
}

function pruningRows() {
  const rows = pruningRecords.filter(item => item.season === state.season && (state.soilPlot === 'Todos' || item.plot === state.soilPlot));
  if (!rows.length) return '<tr><td colspan=10><div class=empty-state>Nenhuma poda cadastrada neste filtro.</div></td></tr>';
  return rows.map(item => '<tr><td><strong>'+item.date+'</strong><small>'+item.team+'</small></td><td><strong>'+item.plot+'</strong></td><td><span class=status>'+item.type+'</span></td><td>'+fmtBR(item.area,1)+' ha</td><td>'+item.plants+'</td><td>'+item.height+'</td><td>'+item.equipment+'</td><td>'+item.responsible+'</td><td>'+item.next+'</td><td><span class=status>'+item.status+'</span></td></tr>').join('');
}

function soilPruningTab() {
  const table = '<div class=table-wrap><table class=data-table><thead><tr><th>Data / equipe</th><th>Talhão</th><th>Tipo de poda</th><th>Área</th><th>Plantas</th><th>Altura</th><th>Equipamento</th><th>Responsável</th><th>Próxima ação</th><th>Situação</th></tr></thead><tbody>'+pruningRows()+'</tbody></table></div>';
  return panel('Podas por talhão','Esqueletamento, decote, recepa, desponte, formação e condução',table,'<button class=primary-button data-action=pruning>'+icon('plus')+'Registrar poda</button>');
}

function culturalManagementRows() {
  const rows = culturalManagementRecords.filter(item => item.season === state.season && (state.soilPlot === 'Todos' || item.plot === state.soilPlot));
  if (!rows.length) return '<tr><td colspan=11><div class=empty-state>Nenhum manejo cultural cadastrado neste filtro.</div></td></tr>';
  return rows.map(item => '<tr><td><strong>'+item.date+'</strong><small>'+item.detail+'</small></td><td><strong>'+item.plot+'</strong></td><td><span class=status>'+item.type+'</span></td><td>'+item.method+'</td><td>'+fmtBR(item.area,1)+' ha</td><td>'+item.equipment+'</td><td>'+item.team+'<small>'+item.responsible+'</small></td><td>'+fmtBR(item.hours,1)+' h</td><td>'+fmtBR(item.fuel,0)+' L</td><td>R$ '+fmtBR(item.cost,2)+'</td><td><span class=status>'+item.status+'</span></td></tr>').join('');
}

function soilCulturalTab() {
  const table = '<div class=table-wrap><table class=data-table><thead><tr><th>Data / observação</th><th>Talhão</th><th>Operação</th><th>Método</th><th>Área</th><th>Equipamento</th><th>Equipe</th><th>Horas</th><th>Combustível</th><th>Custo</th><th>Situação</th></tr></thead><tbody>'+culturalManagementRows()+'</tbody></table></div>';
  const actions = '<div class=panel-actions><button class=secondary-button data-action=yarding-spreading>'+icon('plus')+'Arruação / esparramação</button><button class=primary-button data-action=weeding-mowing>'+icon('plus')+'Capina / roçada</button></div>';
  return panel('Manejo cultural por talhão','Capina, roçada, arruação e esparramação com custos e recursos operacionais',table,actions);
}

function soilDateSort(date) {
  const months = {jan:'01',fev:'02',mar:'03',abr:'04',mai:'05',jun:'06',jul:'07',ago:'08',set:'09',out:'10',nov:'11',dez:'12'};
  const parts = String(date).split(' ');
  return parts.length === 3 ? parts[2]+'-'+(months[parts[1]] || '01')+'-'+parts[0].padStart(2,'0') : String(date);
}

function plotTimelineEvents() {
  const analyses = soilSeasonRecords().map(item => ({season:item.season,sort:soilDateSort(item.date),date:item.date,plot:item.plot,type:'Análise de solo',title:item.code+' · laudo de fertilidade',detail:'pH '+fmtBR(item.ph,1)+' · P '+fmtBR(item.p,1)+' mg/dm³ · V '+fmtBR(item.v,0)+'% · '+item.depth,icon:'layers'}));
  const amendments = soilAmendmentRecords.filter(item => item.season === state.season).map(item => ({...item,title:item.type+' · '+item.product,detail:item.dose+' · '+fmtBR(item.area,1)+' ha · origem '+item.source,icon:'package'}));
  const prunings = pruningRecords.filter(item => item.season === state.season).map(item => ({...item,title:item.type+' · '+fmtBR(item.area,1)+' ha',detail:item.plants+' · '+item.team+' · próxima ação: '+item.next,icon:'sprout'}));
  const cultural = culturalManagementRecords.filter(item => item.season === state.season).map(item => ({...item,title:item.type+' · '+item.method,detail:fmtBR(item.area,1)+' ha · '+item.equipment+' · '+fmtBR(item.hours,1)+' h · '+item.detail,icon:'wrench'}));
  return [...analyses,...amendments,...prunings,...cultural,...otherPlotEvents.filter(item => item.season === state.season)].filter(item => item.season === state.season && (state.soilPlot === 'Todos' || item.plot === state.soilPlot)).sort((a,b) => String(b.sort).localeCompare(String(a.sort)));
}

function soilTimelineTab() {
  const events = plotTimelineEvents();
  const body = events.length ? '<div class=plot-timeline>'+events.map(item => '<article class=timeline-event><div class=timeline-marker>'+icon(item.icon || 'clipboard')+'</div><div class=timeline-card><div class=timeline-event-head><div><span>'+item.date+'</span><h3>'+item.title+'</h3></div><span class=status>'+item.type+'</span></div><strong>'+item.plot+'</strong><p>'+item.detail+'</p></div></article>').join('')+'</div>' : '<div class=empty-state>Nenhum evento cadastrado para este talhão e safra.</div>';
  return panel('Linha do tempo do talhão','Solo, correções, adubações, podas, manejos culturais, pulverizações e colheitas em ordem cronológica',body,'<button class=secondary-button data-action=export>'+icon('download')+'Exportar histórico</button>');
}

function renderSoil() {
  const availablePlots = soilPlotOptions();
  if (!availablePlots.includes(state.soilPlot)) state.soilPlot = 'Todos';
  const records = soilSeasonRecords().filter(item => state.soilPlot === 'Todos' || item.plot === state.soilPlot);
  const amendments = soilAmendmentRecords.filter(item => item.season === state.season && (state.soilPlot === 'Todos' || item.plot === state.soilPlot));
  const prunings = pruningRecords.filter(item => item.season === state.season && (state.soilPlot === 'Todos' || item.plot === state.soilPlot));
  const cultural = culturalManagementRecords.filter(item => item.season === state.season && (state.soilPlot === 'Todos' || item.plot === state.soilPlot));
  const amendedArea = amendments.reduce((sum,item) => sum + item.area,0);
  const pruningArea = prunings.reduce((sum,item) => sum + item.area,0);
  const actions = state.soilTab === 'amendments' ? {primary:'Registrar adubação',action:'fertilization',secondary:{label:'Registrar calagem',icon:'layers',action:'liming'}} : state.soilTab === 'pruning' ? {primary:'Registrar poda',action:'pruning',secondary:{label:'Exportar histórico',icon:'download',action:'export'}} : state.soilTab === 'cultural' ? {primary:'Capina / roçada',action:'weeding-mowing',secondary:{label:'Arruação / esparramação',icon:'sprout',action:'yarding-spreading'}} : {primary:'Cadastrar análise anterior',action:'soil-analysis',secondary:{label:'Importar laudo',icon:'upload',action:'soil-import'}};
  const head = pageHead({eyebrow:'GESTÃO AGRONÔMICA',title:'Solo & talhões · '+state.season+'.',description:'Preserve o histórico de fertilidade e reúna análises, correções, adubações, podas e demais operações em uma linha do tempo por talhão.',primary:actions.primary,action:actions.action,secondary:actions.secondary});
  const metrics = '<section class=metric-grid>'+metricCard({label:'Análises de solo',value:String(records.length),unit:'laudos',iconName:'clipboard',delta:String(new Set(records.map(item => item.plot)).size)+' talhões',foot:'no filtro selecionado'})+metricCard({label:'Adubações e correções',value:String(amendments.length),unit:'operações',iconName:'package',delta:fmtBR(amendedArea,1)+' ha somados',foot:'registros da safra',tone:'blue'})+metricCard({label:'Área de podas',value:fmtBR(pruningArea,1),unit:'ha',iconName:'sprout',delta:String(prunings.length)+' operações',foot:'por talhão e tipo',tone:'gold'})+metricCard({label:'Manejo cultural',value:String(cultural.length),unit:'operações',iconName:'wrench',delta:fmtBR(cultural.reduce((sum,item) => sum + item.area,0),1)+' ha somados',foot:'capina, roçada e preparo',tone:'orange'})+'</section>';
  const tabBody = state.soilTab === 'amendments' ? soilAmendmentsTab() : state.soilTab === 'pruning' ? soilPruningTab() : state.soilTab === 'cultural' ? soilCulturalTab() : state.soilTab === 'timeline' ? soilTimelineTab() : soilAnalysisTab(records);
  content.innerHTML = '<div class=page-enter>'+head+metrics+'<div style=height:16px></div>'+soilTabs()+soilPlotFilters()+'<div style=height:16px></div>'+tabBody+'</div>';
}

function mapLayerTabs() {
  const layers = [['ndvi','NDVI'],['mip','MIP'],['soil','Solo'],['yield','Produtividade']];
  return '<div class=subnav role=tablist aria-label=Camadas-do-mapa>'+layers.map(item => '<button class='+(state.mapLayer===item[0]?'active':'inactive')+' data-map-layer='+item[0]+' role=tab>'+item[1]+'</button>').join('')+'</div>';
}

function renderMapMipLegacy() {
  const layerNames = {ndvi:'Vigor vegetativo · NDVI',mip:'Pressão de pragas · MIP',soil:'Fertilidade e textura',yield:'Produtividade histórica'};
  const map = '<div class=farm-map data-layer='+state.mapLayer+' role=img aria-label=Mapa-agronômico-da-fazenda><div class=map-compass>N</div><button class=map-plot data-plot=a data-action=map-plot><strong>C-07</strong><small>42,0 ha</small></button><button class=map-plot data-plot=b data-action=map-plot><strong>C-04</strong><small>55,8 ha</small></button><button class=map-plot data-plot=c data-action=map-plot><strong>M-03</strong><small>86,2 ha</small></button><button class=map-plot data-plot=d data-action=map-plot><strong>S-08</strong><small>74,5 ha</small></button><i class=map-spot data-spot=a title=Cercosporiose></i><i class=map-spot data-spot=b title=Falha-de-stand></i><i class=map-spot data-spot=c title=Erosão></i><i class=map-spot data-spot=d title=Encharcamento></i><div class=map-legend><span><i></i>Baixo</span><span><i></i>Médio</span><span><i></i>Alto</span></div></div>';
  const observations = '<div class=table-wrap><table class=data-table><thead><tr><th>Ocorrência / GPS</th><th>Talhão</th><th>Tipo</th><th>Severidade</th><th>Foto</th><th>Responsável</th><th>Destino</th></tr></thead><tbody><tr><td><strong>OBS-145</strong><small>-20.7112, -46.6158</small></td><td>C-07</td><td>Cercosporiose</td><td><span class=status-warning>Alta · 18%</span></td><td>3 fotos</td><td>Ana Ribeiro</td><td><span class=status>Prescrição</span></td></tr><tr><td><strong>OBS-144</strong><small>-20.7141, -46.6202</small></td><td>M-03</td><td>Falha de stand</td><td><span class=status-info>Média · 7%</span></td><td>1 foto</td><td>Lucas Martins</td><td><span class=status-info>Monitorar</span></td></tr><tr><td><strong>OBS-141</strong><small>-20.7189, -46.6114</small></td><td>C-04</td><td>Erosão em sulco</td><td><span class=status-warning>Alta</span></td><td>4 fotos</td><td>Marcos Oliveira</td><td><span class=status-warning>OS aberta</span></td></tr></tbody></table></div>';
  const mip = '<div class=mip-grid><article><span>Bicho-mineiro</span><strong>12,4%</strong><small>Acima do nível de ação em 3 zonas</small><div class=row-progress-line><span style=width:72%></span></div></article><article><span>Cercosporiose</span><strong>8,7%</strong><small>C-07 · bordadura leste</small><div class=row-progress-line><span style=width:58%></span></div></article><article><span>Ferrugem</span><strong>3,1%</strong><small>Abaixo do nível de ação</small><div class=row-progress-line><span style=width:24%></span></div></article><article><span>Broca</span><strong>2,8%</strong><small>Armadilhas atualizadas hoje</small><div class=row-progress-line><span style=width:20%></span></div></article></div>';
  const prescription = '<div class=summary-list><div class=summary-row><span>Talhão / zona</span><strong>C-07 · Z03 · 7,6 ha</strong></div><div class=summary-row><span>Base da decisão</span><strong>MIP + NDVI + solo</strong></div><div class=summary-row><span>Alvo / limiar</span><strong>Cercosporiose · 8%</strong></div><div class=summary-row><span>Taxa variável</span><strong>180–240 L/ha</strong></div><div class=summary-row><span>Economia projetada</span><strong>14,8% de calda</strong></div><div class=summary-total><span>Destino</span><strong>PVGest · PR-048</strong></div></div><div class=form-note>'+icon('link')+'A prescrição localizada mantém a geometria da zona, o motivo agronômico, a dose e os parâmetros de aplicação até a execução.</div>';
  content.innerHTML = '<div class=page-enter>'+pageHead({eyebrow:'AGRONOMIA GEOREFERENCIADA',title:'Mapa & MIP · '+state.season+'.',description:'Cruze vigor, pragas, fertilidade, produtividade e observações com GPS para decidir por zona e enviar prescrições ao PVGest.',primary:'Nova observação',action:'field-observation',secondary:{label:'Nova avaliação MIP',icon:'clipboard',action:'mip-scout'}})+'<section class=metric-grid>'+metricCard({label:'Área mapeada',value:'258,5',unit:'ha',iconName:'map',delta:'100% dos talhões',foot:'limites conferidos'})+metricCard({label:'Zonas em atenção',value:'5',unit:'zonas',iconName:'alert',delta:'2 críticas',foot:'MIP e anomalias',tone:'orange'})+metricCard({label:'Pontos vistoriados',value:'148',unit:'pontos',iconName:'clipboard',delta:'+32 na semana',foot:'com GPS e fotos',tone:'blue'})+metricCard({label:'Economia estimada',value:'14,8',unit:'%',iconName:'trending',delta:'R$ 18,4 mil',foot:'taxa localizada',tone:'gold'})+'</section><div style=height:16px></div>'+panel(layerNames[state.mapLayer], 'Camada selecionada sobre os limites validados dos talhões', map, mapLayerTabs())+'<div style=height:16px></div><div class=two-col>'+panel('Monitoramento integrado de pragas','Percentual amostrado versus nível de ação',mip,'<button class=secondary-button data-action=mip-scout>'+icon('plus')+'Nova vistoria</button>')+panel('Prescrição localizada sugerida','Decisão assistida, sempre sujeita à aprovação do agrônomo',prescription,'<button class=primary-button data-action=localized-prescription>'+icon('arrow')+'Enviar ao PVGest</button>')+'</div><div style=height:16px></div>'+panel('Observações georreferenciadas','Pragas, falhas, erosão e encharcamento com evidência de campo',observations,'<button class=primary-button data-action=field-observation>'+icon('plus')+'Registrar ponto</button>')+'</div>';
}

function safeMapText(value) {
  return String(value || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function importedMapOverlay() {
  const mapRecords = state.importedMaps.filter(item => Array.isArray(item.features) && item.features.length);
  const features = mapRecords.flatMap(item => item.features.map(feature => ({...feature,mapName:item.name,fileName:item.fileName})));
  const coordinates = features.flatMap(feature => feature.coordinates || []);
  if (!coordinates.length) return '';
  const longitudes = coordinates.map(point => Number(point[0])).filter(Number.isFinite);
  const latitudes = coordinates.map(point => Number(point[1])).filter(Number.isFinite);
  if (!longitudes.length || !latitudes.length) return '';
  const minLon = longitudes.reduce((min,value) => Math.min(min,value), Infinity);
  const maxLon = longitudes.reduce((max,value) => Math.max(max,value), -Infinity);
  const minLat = latitudes.reduce((min,value) => Math.min(min,value), Infinity);
  const maxLat = latitudes.reduce((max,value) => Math.max(max,value), -Infinity);
  const lonRange = maxLon - minLon || .0001, latRange = maxLat - minLat || .0001;
  const project = point => [50 + (Number(point[0]) - minLon) * 900 / lonRange, 550 - (Number(point[1]) - minLat) * 500 / latRange];
  const colors = ['#166534','#2563eb','#b45309','#7c3aed','#be123c'];
  const shapes = features.map((feature,index) => {
    const projected = (feature.coordinates || []).map(project).filter(point => point.every(Number.isFinite));
    if (!projected.length) return '';
    const color = colors[index % colors.length];
    const points = projected.map(point => point.map(value => value.toFixed(1)).join(',')).join(' ');
    const center = projected.reduce((sum,point) => [sum[0]+point[0],sum[1]+point[1]],[0,0]).map(value => value/projected.length);
    const label = safeMapText(feature.name || feature.mapName || 'Feição importada');
    if (feature.type === 'Point') return `<g><circle cx='${projected[0][0].toFixed(1)}' cy='${projected[0][1].toFixed(1)}' r='9' fill='${color}' stroke='#fff' stroke-width='4'/><text x='${(projected[0][0]+13).toFixed(1)}' y='${(projected[0][1]-10).toFixed(1)}'>${label}</text></g>`;
    if (feature.type === 'LineString') return `<g><polyline points='${points}' fill='none' stroke='${color}' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'/><text x='${center[0].toFixed(1)}' y='${center[1].toFixed(1)}'>${label}</text></g>`;
    return `<g><polygon points='${points}' fill='${color}' fill-opacity='.38' stroke='${color}' stroke-width='6' stroke-linejoin='round'/><text x='${center[0].toFixed(1)}' y='${center[1].toFixed(1)}'>${label}</text></g>`;
  }).join('');
  const latest = mapRecords[0];
  return `<svg class=imported-map-layer viewBox='0 0 1000 600' preserveAspectRatio=none role=img aria-label='Mapa KML importado'>${shapes}</svg><div class=imported-map-badge><strong>${safeMapText(latest.fileName || latest.name)}</strong><small>${features.length} feição${features.length===1?'':'ões'} importada${features.length===1?'':'s'} · persistido neste navegador</small></div>`;
}

function mapImportPanel() {
  const sources = '<div class=map-import-grid><article><span class=import-source-icon>'+icon('upload')+'</span><div><strong>Arquivo cartográfico</strong><small>KML, KMZ, GeoJSON, GeoPackage ou pacote QGIS</small></div><b>Importação local</b></article><article><span class=import-source-icon>'+icon('map')+'</span><div><strong>Google Earth</strong><small>Link KML/KMZ publicado ou arquivo exportado do projeto</small></div><b>Link direto</b></article><article><span class=import-source-icon>'+icon('layers')+'</span><div><strong>QGIS</strong><small>WFS, QGIS Server ou pacote de projeto com camadas</small></div><b>Serviço sincronizável</b></article></div>';
  const importedRecords = state.importedMaps.length ? '<div class=imported-records>'+state.importedMaps.slice(0,4).map(item => '<article><span class=import-source-icon>'+icon('check')+'</span><div><strong>'+safeMapText(item.name)+'</strong><small>'+safeMapText(item.fileName)+' · '+item.features.length+' feição'+(item.features.length===1?'':'ões')+' · '+safeMapText(item.importTarget)+'</small></div><b>Importado · '+new Date(item.importedAt).toLocaleString('pt-BR')+'</b></article>').join('')+'</div><div style=height:16px></div>' : '';
  const history = '<div class=table-wrap><table class=data-table><thead><tr><th>Importação / origem</th><th>Formato / serviço</th><th>CRS original</th><th>Camadas</th><th>Feições</th><th>Destino</th><th>Validação</th><th>Situação</th></tr></thead><tbody><tr><td><strong>MAP-018</strong><small>talhoes_santa_helena.kml</small></td><td>Arquivo KML</td><td>EPSG:4326</td><td>Limites + carreadores</td><td>28</td><td>Talhões</td><td><span class=status>Geometrias válidas</span></td><td><span class=status>Importado</span></td></tr><tr><td><strong>MAP-017</strong><small>Projeto Google Earth · Safra 25/26</small></td><td>Network Link KML</td><td>WGS 84</td><td>Pontos MIP</td><td>148</td><td>Observações</td><td><span class=status-info>Atualização diária</span></td><td><span class=status>Sincronizado</span></td></tr><tr><td><strong>MAP-016</strong><small>QGIS Server · Fazenda Horizonte</small></td><td>WFS 2.0</td><td>EPSG:31983</td><td>NDVI + zonas</td><td>64</td><td>Camadas agronômicas</td><td><span class=status-warning>Transformar CRS</span></td><td><span class=status-info>Configurado</span></td></tr></tbody></table></div>';
  return panel('Importação de mapas','Traga limites, pontos, linhas, zonas e estilos por arquivo ou serviço, sempre com pré-validação antes de substituir dados',importedRecords+sources+'<div style=height:16px></div>'+history,'<button class=primary-button data-action=map-import>'+icon('upload')+'Importar mapa</button>');
}

function renderMapMip() {
  renderMapMipLegacy();
  const firstPanel = content.querySelector('.panel');
  if (firstPanel) firstPanel.insertAdjacentHTML('afterend','<div style=height:16px></div>'+mapImportPanel());
  const farmMap = content.querySelector('.farm-map');
  const importedOverlay = importedMapOverlay();
  if (farmMap && importedOverlay) {
    farmMap.classList.add('has-imported-map');
    farmMap.insertAdjacentHTML('beforeend',importedOverlay);
  }
  const primary = content.querySelector('.page-actions .primary-button');
  if (primary) {
    primary.dataset.action = 'map-import';
    primary.innerHTML = icon('upload')+'Importar mapa';
  }
}

function connectedTabs() {
  const tabs = [['inbox','Caixa de entrada'],['sync','Offline & sincronização'],['events','Eventos & aprovações']];
  return '<div class=subnav role=tablist aria-label=Central-conectada>'+tabs.map(item => '<button class='+(state.connectedTab===item[0]?'active':'inactive')+' data-connected-tab='+item[0]+' role=tab>'+item[1]+'</button>').join('')+'</div>';
}

function connectedInbox() {
  const messages = '<div class=chat-list><article class=chat-item><span class=chat-avatar>CM</span><div><div class=chat-head><strong>Carlos Mendes · WhatsApp</strong><small>Hoje · 10:42</small></div><p>Áudio · Case 8250 abastecida com 312 litros. Horímetro 1.842,6. Talhão C-07.</p><div class=audio-line><button data-action=play-audio>'+icon('play')+'</button><i><span style=width:64%></span></i><small>0:18</small></div><div class=ai-draft><span>Rascunho extraído</span><b>Abastecimento · Case 8250 · 312 L · 1.842,6 h · C-07</b><small>Confiança 96% · nenhum lançamento realizado</small></div><div class=panel-actions><button class=secondary-button data-action=whatsapp-review>Revisar</button><button class=primary-button data-action=whatsapp-confirm>'+icon('check')+'Confirmar e salvar</button></div></div></article><article class=chat-item><span class=chat-avatar>AP</span><div><div class=chat-head><strong>Ana Pereira · WhatsApp</strong><small>Hoje · 09:15</small></div><p>Foto + texto · Mancha de ferrugem na borda do C-04. Ponto enviado pelo celular.</p><div class=ai-draft><span>Rascunho extraído</span><b>Observação MIP · Ferrugem · C-04 · GPS anexado · 2 fotos</b><small>Confiança 88% · requer severidade</small></div><button class=secondary-button data-action=whatsapp-review>Completar dados</button></div></article></div>';
  return panel('Entrada assistida pelo WhatsApp','Texto, foto e áudio viram rascunhos estruturados; somente a confirmação humana cria o registro',messages,'<button class=primary-button data-action=whatsapp-entry>'+icon('plus')+'Simular mensagem</button>');
}

function connectedSync() {
  const devices = '<div class=table-wrap><table class=data-table><thead><tr><th>Dispositivo / usuário</th><th>Última sincronização</th><th>Fila local</th><th>Conflitos</th><th>Versão</th><th>Situação</th></tr></thead><tbody><tr><td><strong>CEL-CM-04</strong><small>Carlos Mendes · tratorista</small></td><td>Há 2 min</td><td>0 registros</td><td>0</td><td>v26.7.1</td><td><span class=status>Online</span></td></tr><tr><td><strong>TAB-COL-02</strong><small>Equipe de colheita 02</small></td><td>Há 38 min</td><td><strong>7 registros</strong></td><td>0</td><td>v26.7.1</td><td><span class=status-info>Offline</span></td></tr><tr><td><strong>CEL-AP-01</strong><small>Ana Pereira · agrônoma</small></td><td>Há 5 min</td><td>2 registros</td><td><strong>2</strong></td><td>v26.7.0</td><td><span class=status-warning>Revisar</span></td></tr><tr><td><strong>BAL-NORTE</strong><small>Balança norte</small></td><td>Agora</td><td>0 registros</td><td>0</td><td>gateway 3.2</td><td><span class=status>Online</span></td></tr></tbody></table></div>';
  const rules = '<div class=summary-list><div class=summary-row><span>ID local imutável</span><strong>UUID v7</strong></div><div class=summary-row><span>Estratégia de envio</span><strong>Fila idempotente</strong></div><div class=summary-row><span>Conflito de edição</span><strong>Revisão assistida</strong></div><div class=summary-row><span>Anexos</span><strong>Upload retomável</strong></div><div class=summary-row><span>Retenção no aparelho</span><strong>30 dias cifrados</strong></div><div class=summary-total><span>Banco central proposto</span><strong>PostgreSQL + API</strong></div></div>';
  return '<div class=two-col>'+panel('Dispositivos e filas offline','Cada máquina trabalha sem sinal e sincroniza com idempotência quando a conexão volta',devices,'<button class=secondary-button data-action=sync-now>'+icon('sync')+'Sincronizar agora</button>')+panel('Contrato de sincronização','Regras propostas para a futura API central',rules,'<button class=secondary-button data-action=sync-policy>Configurar</button>')+'</div>';
}

function connectedEvents() {
  const flow = '<div class=event-flow><article><i>'+icon('droplet')+'</i><span><strong>Aplicação concluída</strong><small>APL-045 · C-07 · operador confirmou</small></span></article><b>'+icon('arrow')+'</b><article><i>'+icon('package')+'</i><span><strong>Baixa de estoque</strong><small>3 produtos · lote e validade preservados</small></span></article><b>'+icon('arrow')+'</b><article><i>'+icon('tractor')+'</i><span><strong>Máquina e diesel</strong><small>2,8 h · 41 L · R$ 487,60</small></span></article><b>'+icon('arrow')+'</b><article><i>'+icon('wallet')+'</i><span><strong>Custo e financeiro</strong><small>R$ 264,99/ha · centro C-07</small></span></article></div><div class=event-flow><article><i>'+icon('clock')+'</i><span><strong>Carência</strong><small>Bloqueia colheita até 29 jul</small></span></article><b>'+icon('arrow')+'</b><article><i>'+icon('clipboard')+'</i><span><strong>Caderno de campo</strong><small>Documento pronto para auditoria</small></span></article><b>'+icon('arrow')+'</b><article><i>'+icon('bell')+'</i><span><strong>Alertas</strong><small>Supervisor + agrônoma notificados</small></span></article></div>';
  const approvals = '<div class=table-wrap><table class=data-table><thead><tr><th>Solicitação</th><th>Origem</th><th>Impacto</th><th>Regra</th><th>Prazo</th><th>Ação</th></tr></thead><tbody><tr><td><strong>APR-284 · Compra</strong><small>Kit filtros · 3 cotações</small></td><td>Estoque mínimo</td><td>R$ 18.420,00</td><td>Gestor + financeiro</td><td>Hoje · 14:00</td><td><button class=secondary-button data-action=approval-review>Revisar</button></td></tr><tr><td><strong>APR-283 · Divergência</strong><small>NF 18492 · 4,8% acima</small></td><td>Recebimento</td><td>R$ 2.184,00</td><td>Compras</td><td>Hoje · 12:30</td><td><button class=secondary-button data-action=approval-review>Revisar</button></td></tr><tr><td><strong>APR-281 · Aplicação</strong><small>PR-048 · taxa variável</small></td><td>MIP + NDVI</td><td>7,6 ha</td><td>Agrônomo</td><td>Amanhã</td><td><button class=secondary-button data-action=approval-review>Revisar</button></td></tr></tbody></table></div>';
  return panel('Motor de eventos operacionais','Uma confirmação gera efeitos rastreáveis e reversíveis em todos os módulos',flow,'<button class=secondary-button data-action=event-rule>'+icon('plus')+'Nova regra</button>')+'<div style=height:16px></div>'+panel('Fila de aprovações','Alçadas por valor, risco agronômico e divergência',approvals,'<span class=status-warning>3 decisões</span>');
}

function renderConnected() {
  const tabBody = state.connectedTab === 'sync' ? connectedSync() : state.connectedTab === 'events' ? connectedEvents() : connectedInbox();
  const telemetry = '<div class=table-wrap><table class=data-table><thead><tr><th>Máquina / integração</th><th>Plano recebido</th><th>Produtiva</th><th>Deslocamento</th><th>Ociosa</th><th>Consumo</th><th>Falhas</th></tr></thead><tbody><tr><td><strong>Case 8250</strong><small>FieldView · sincronizada</small></td><td>C-07 · 42 ha</td><td><strong>7,8 h</strong></td><td>1,2 h</td><td>0,6 h</td><td>15,2 L/h</td><td><span class=status>Sem falha</span></td></tr><tr><td><strong>JD 7230J</strong><small>Operations Center · sincronizado</small></td><td>PR-048 · 7,6 ha</td><td><strong>4,4 h</strong></td><td>0,8 h</td><td>1,1 h</td><td>10,6 L/h</td><td><span class=status-warning>DTC 1569.31</span></td></tr></tbody></table></div>';
  content.innerHTML = '<div class=page-enter>'+pageHead({eyebrow:'OPERAÇÃO MULTIUSUÁRIO',title:'Campo conectado.',description:'Centralize entradas por WhatsApp, trabalho offline, sincronização, aprovações e integrações de máquinas com trilha de auditoria.',primary:'Nova entrada',action:'whatsapp-entry',secondary:{label:'Sincronizar agora',icon:'sync',action:'sync-now'}})+'<section class=metric-grid>'+metricCard({label:'Dispositivos ativos',value:'12',unit:'dispositivos',iconName:'cloud',delta:'10 online',foot:'2 trabalhando offline'})+metricCard({label:'Fila de sincronização',value:'7',unit:'registros',iconName:'sync',delta:'0 bloqueados',foot:'envio automático',tone:'blue'})+metricCard({label:'Entradas WhatsApp',value:'18',unit:'hoje',iconName:'message',delta:'16 confirmadas',foot:'2 aguardam revisão',tone:'gold'})+metricCard({label:'Aprovações abertas',value:'3',unit:'decisões',iconName:'check',delta:'R$ 20,6 mil',foot:'maior impacto',tone:'orange'})+'</section><div style=height:16px></div>'+connectedTabs()+'<div style=height:16px></div>'+tabBody+'<div style=height:16px></div>'+panel('Telemetria integrada','Plano enviado ao operador e comparação entre planejado, realizado, horas e falhas',telemetry,'<button class=primary-button data-action=telemetry-plan>'+icon('plus')+'Enviar plano</button>')+'</div>';
}

function renderPvgest() {
  content.innerHTML = `<div class="page-enter">
    ${pageHead({eyebrow:'INTEGRAÇÃO DO PRODUTO',title:'PVGest atual → Gefaz360.',description:'O produto atual, especializado em Gestão de Pulverização, permanece operacional durante a evolução. Esta central concilia talhões, receitas, aplicações, perfis e equipamentos com a base única do ERP.',primary:'Importar lote',secondary:{label:'Sincronizar agora',icon:'sync',action:'sync-now'}})}
    <section class="integration-hero"><div class="integration-top"><div class="integration-brand"><div class="brand-mark"><svg viewBox="0 0 36 36"><path d="M9 25.5c8.6-.7 14.6-5.8 18-15.5 1 9.2-2.2 16.6-10.2 18.3-3.6.8-6.3-.1-7.8-2.8Z"/><path class="brand-mark-line" d="M11.4 24.6c4.8-1.6 8.8-4.8 12-9.7"/></svg></div><div><h2>PVGest · Gestão de Pulverização</h2><p>Gestor · Agrônomo · Tratorista · sincronização incremental demonstrativa</p></div></div><div class="connection-status"><i></i>Conectado e saudável</div></div><div class="integration-metrics"><div class="integration-metric"><span>Última sincronização</span><strong>18:42</strong><small>Hoje · concluída em 12s</small></div><div class="integration-metric"><span>Aplicações hoje</span><strong>42</strong><small>41 processadas</small></div><div class="integration-metric"><span>Taxa de sucesso</span><strong>97,62%</strong><small>1 exige revisão</small></div><div class="integration-metric"><span>Próxima execução</span><strong>18:57</strong><small>A cada 15 minutos</small></div></div></section>
    <div style="height:16px"></div>
    <div class="two-col">
      ${panel('Fila de conciliação','Registros do PVGest que precisam de decisão humana',`<div class="alerts"><div class="alert-item" style="--alert-color:var(--red);--alert-soft:var(--red-soft)"><span class="alert-icon">${icon('user')}</span><span><strong>Tratorista sem vínculo de contrato</strong><small>PVG #98218 · “João P. Silva” · perfil Tratorista</small></span><button class="secondary-button" data-action="resolve">Resolver</button></div><div class="alert-item" style="--alert-color:var(--gold);--alert-soft:var(--gold-soft)"><span class="alert-icon">${icon('map')}</span><span><strong>Talhão C7 difere do cadastro C-07</strong><small>PVG #98204 · sugestão de correspondência 98%</small></span><button class="secondary-button" data-action="resolve">Revisar</button></div><div class="alert-item" style="--alert-color:var(--blue);--alert-soft:var(--blue-soft)"><span class="alert-icon">${icon('droplet')}</span><span><strong>Produto da receita sem SKU correspondente</strong><small>PVG #98176 · “Fungi Max 500” · confiança 82%</small></span><button class="secondary-button" data-action="resolve">Comparar</button></div></div>`,'<span class="status warning">3 pendências</span>')}
      ${panel('Regras de sincronização','Controle do que entra, quando e para onde',`<div class="summary-list"><div class="summary-row"><span>Receitas agronômicas</span><span class="status">Automático</span></div><div class="summary-row"><span>Aplicações executadas</span><span class="status">Automático</span></div><div class="summary-row"><span>Gestor, agrônomo e tratorista</span><span class="status info">Validação</span></div><div class="summary-row"><span>Produtos e consumo de estoque</span><span class="status warning">Aprovação</span></div><div class="summary-row"><span>Talhões e equipamentos</span><span class="status info">Base Gefaz360</span></div></div>`,'<button class="text-button" data-action="settings">Configurar</button>')}
    </div>
    <div style="height:16px"></div>
    ${panel('Mapa de dados','Correspondências explícitas entre o PVGest atual e o modelo integrado',`<div class="mapping-list"><div class="mapping"><span><strong>PVGest · Talhão</strong><small>codigo, area, cultura</small></span><i>${icon('arrow')}</i><span><strong>Gefaz360 · Unidade produtiva</strong><small>plot + crop_cycle</small></span><span class="status">100%</span></div><div class="mapping"><span><strong>PVGest · Receita</strong><small>agronomo, produto, dose</small></span><i>${icon('arrow')}</i><span><strong>Gefaz360 · Prescrição</strong><small>spray_prescription</small></span><span class="status">99,4%</span></div><div class="mapping"><span><strong>PVGest · Aplicação</strong><small>tratorista, equipamento, área</small></span><i>${icon('arrow')}</i><span><strong>Gefaz360 · Operação de campo</strong><small>spray_operation</small></span><span class="status">100%</span></div><div class="mapping"><span><strong>PVGest · Perfil</strong><small>gestor, agronomo, tratorista</small></span><i>${icon('arrow')}</i><span><strong>Gefaz360 · Pessoa / permissão</strong><small>person + role_assignment</small></span><span class="status warning">98,6%</span></div></div>`,'<button class="text-button" data-action="mapping">Ver dicionário</button>')}
  </div>`;
}

function renderRoadmapLegacy() {
  const recs = [
    ['P0 · PRIMEIROS 90 DIAS','Cadastros mestres e identidade única','Unificar fazenda → lavoura → talhão, pessoas, máquinas, itens e centros de custo. Sem essa base, integrações criam duplicidade e relatórios não reconciliam.',['Fundação','Alto impacto','Baixo risco']],
    ['P0 · PRIMEIROS 90 DIAS','Operação offline com ticket digital','Registrar colheita e balança sem sinal, com ID local, impressão opcional e sincronização idempotente. O trabalhador consegue conferir sua produção no mesmo dia.',['Campo','Transparência','Produtividade']],
    ['P1 · 3 A 6 MESES','Custo por talhão e por máquina','Ratear mão de obra, insumo, diesel, depreciação e manutenção pelo evento operacional. A margem deixa de ser apenas contábil e vira instrumento agronômico.',['Financeiro','Talhão','Rentabilidade']],
    ['P1 · 3 A 6 MESES','NF-e e recebimento sem redigitação','Gerar documento a partir da carga e contrato, validar peso e preço, criar contas a receber e conciliar retorno bancário automaticamente.',['Fiscal','Grãos','Caixa']],
    ['P2 · 6 A 12 MESES','Manutenção por condição','Combinar horímetro, telemetria, falhas e consumo para antecipar revisões e medir disponibilidade, MTBF, MTTR e custo por hora produtiva.',['Oficina','Telemetria','Disponibilidade']],
    ['P2 · 6 A 12 MESES','Previsão de produção e caixa','Usar histórico por talhão, ritmo de colheita, contratos e cenários de preço para revisar semanalmente volume, margem e necessidade de capital.',['Planejamento','Cenários','Decisão']]
  ];
  content.innerHTML = `<div class="page-enter">
    ${pageHead({eyebrow:'EVOLUÇÃO DO PRODUTO',title:'Melhorias guiadas por impacto.',description:'Roadmap recomendado para transformar o PVgest em uma plataforma integrada sem perder a simplicidade operacional que o campo exige.',primary:'',secondary:{label:'Exportar roadmap',icon:'download',action:'export'},meta:false})}
    <div class="two-col">
      <section><div class="roadmap-grid">${recs.map(r=>`<article class="roadmap-card"><div class="roadmap-card-top"><span>${r[0]}</span><span class="status">Recomendado</span></div><h3>${r[1]}</h3><p>${r[2]}</p><div class="impact-row">${r[3].map(x=>`<span class="impact-chip">${x}</span>`).join('')}</div></article>`).join('')}</div></section>
      <aside class="stack">
        ${panel('Benchmarks incorporados','Práticas publicadas que orientaram o desenho do protótipo',`<div class="benchmark-list"><div class="benchmark"><span class="benchmark-num">01</span><span><strong>Operação offline + tickets</strong><small>SigColheita relata redução de erros e ganho de produtividade na colheita de café.</small></span><a href="https://saas.sigcolheita.com.br/casos-de-sucesso.html" target="_blank" rel="noopener" title="Abrir fonte">${icon('external')}</a></div><div class="benchmark"><span class="benchmark-num">02</span><span><strong>Campo + financeiro integrados</strong><small>Aegro conecta safra, NF-e, custos, finanças e exportação de dados.</small></span><a href="https://aegro.com.br/" target="_blank" rel="noopener" title="Abrir fonte">${icon('external')}</a></div><div class="benchmark"><span class="benchmark-num">03</span><span><strong>Produtividade por hectare</strong><small>Arcádia estrutura fazenda, lavoura e talhão para custo e rendimento cafeeiro.</small></span><a href="https://atlantasistemas.com.br/produtos/arcadia/" target="_blank" rel="noopener" title="Abrir fonte">${icon('external')}</a></div><div class="benchmark"><span class="benchmark-num">04</span><span><strong>Menos customização estrutural</strong><small>Western Sugar reporta menos parada e maior precisão ao adotar processos padronizados.</small></span><a href="https://www.sap.com/central-asia-caucasus/asset/dynamic/2023/10/fab357af-947e-0010-bca6-c68f7e60039b.html" target="_blank" rel="noopener" title="Abrir fonte">${icon('external')}</a></div><div class="benchmark"><span class="benchmark-num">05</span><span><strong>Máquina, diesel e manutenção</strong><small>Case Agro Analytics conecta apontamentos para decidir troca de equipamentos e controlar consumo.</small></span><a href="https://scriptcaseblog.net/pt/cases-pt/scriptcase-case-de-sucesso-master-business-agro-analytics/" target="_blank" rel="noopener" title="Abrir fonte">${icon('external')}</a></div></div>`)}
        ${panel('Princípios de arquitetura','Guardrails para o ERP continuar evoluindo',`<div class="summary-list"><div class="summary-row"><span>1. Um evento, uma origem</span><strong>Sem redigitação</strong></div><div class="summary-row"><span>2. Offline por padrão</span><strong>Campo resiliente</strong></div><div class="summary-row"><span>3. APIs antes de telas</span><strong>Integração modular</strong></div><div class="summary-row"><span>4. Auditoria imutável</span><strong>Rastreabilidade</strong></div><div class="summary-row"><span>5. Configurar, não customizar</span><strong>Baixo TCO</strong></div></div>`)}
      </aside>
    </div>
  </div>`;
}

function renderRoadmap() {
  renderRoadmapLegacy();
  const coverage = '<div class=benchmark-coverage><article><span>P0</span><strong>Cloud, autenticação e offline</strong><small>Telas, fluxos e esquema prontos · infraestrutura externa pendente</small><b>Especificado</b></article><article><span>P0</span><strong>WhatsApp com áudio</strong><small>Caixa, extração, revisão e confirmação implementadas</small><b>Protótipo pronto</b></article><article><span>P0</span><strong>Eventos e aprovações</strong><small>Cascata operacional, fila e modelo append-only</small><b>Protótipo pronto</b></article><article><span>P1</span><strong>CVA + histórico SCAA</strong><small>Quatro avaliações, versões e vínculo ao lote</small><b>Implementado</b></article><article><span>P1</span><strong>Razão de lotes</strong><small>kg, posições, dono, split, mix, QR e estorno</small><b>Implementado</b></article><article><span>P1</span><strong>Mapa, MIP e prescrição</strong><small>Camadas, GPS, fotos, limiar e destino PVGest</small><b>Implementado</b></article><article><span>P1</span><strong>Fiscal e comercial</strong><small>XML, NF-e, MDF-e, LCDPR, contratos e banco</small><b>Fluxo pronto</b></article><article><span>P2</span><strong>Telemetria</strong><small>Plano/realizado, tempos, falha, consumo e custo</small><b>Adaptadores pendentes</b></article><article><span>P2</span><strong>Compras inteligentes</strong><small>Mínimo, 3 cotações, alçada, pedido e recebimento</small><b>Implementado</b></article><article><span>P2</span><strong>Inteligência do café</strong><small>Qualidade, secagem, regulagem, preço e margem</small><b>Indicadores prontos</b></article></div>';
  content.querySelector('.page-enter').insertAdjacentHTML('afterbegin',panel('Cobertura do benchmark','Estado atual do protótipo e dependências que exigem serviços oficiais',coverage,'<span class=status>10 de 10 frentes cobertas</span>')+'<div style=height:16px></div>');
}

const renderers = {
  dashboard: renderDashboard,
  mapmip: renderMapMip,
  spray: renderSpray,
  coffee: renderCoffee,
  grains: renderGrains,
  loads: renderLoads,
  finance: renderFinance,
  people: renderPeople,
  workshop: renderWorkshop,
  fuel: renderFuel,
  inventory: renderInventory,
  soil: renderSoil,
  connected: renderConnected,
  pvgest: renderPvgest,
  roadmap: renderRoadmap
};

const agronomicSeasonOptions = seasonOptions.map(season => '<option>'+season+'</option>').join('');
const agronomicPlotOptions = '<option>C-07 · Boa Esperança</option><option>C-04 · Lavoura Sede</option><option>C-12 · Pedra Branca</option><option>C-02 · Vargem</option><option>M-03 · Chapadão</option><option>S-08 · Cerrado</option>';
const soilFormMeta = '<div class=form-section><div class=form-section-head><strong>Identificação e origem</strong><span>Dados do laudo histórico</span></div><div class=form-grid><div class=form-field><label>Código da análise</label><input name=analysis_code value=SOL-053 required></div><div class=form-field><label>Ano de safra original</label><select name=season required>'+agronomicSeasonOptions+'</select></div><div class=form-field><label>Fazenda</label><select name=farm required><option>Fazenda Santa Helena</option><option>Fazenda Horizonte</option></select></div><div class=form-field><label>Talhão</label><select name=plot required>'+agronomicPlotOptions+'</select></div><div class=form-field><label>Data da coleta</label><input name=sampled_at type=date value=2025-05-18 required></div><div class=form-field><label>Profundidade</label><select name=depth><option>0–20 cm</option><option>20–40 cm</option><option>40–60 cm</option></select></div><div class=form-field><label>Laboratório</label><input name=laboratory value=LabSolo required></div><div class=form-field><label>Número do laudo</label><input name=report_number value=LS-2025-8841></div><div class=form-field><label>Método de fósforo</label><select name=phosphorus_method><option>Mehlich-1</option><option>Resina</option><option>Mehlich-3</option></select></div><div class=form-field><label>Arquivo ou referência</label><input name=report_file_ref placeholder=PDF-ou-código-do-arquivo></div></div></div>';

const soilFormBases = '<div class=form-section><div class=form-section-head><strong>Acidez, bases e CTC</strong><span>Complexo sortivo e saturações</span></div><div class=form-grid><div class=form-field><label>pH · CaCl₂</label><input name=ph_cacl2 type=number min=0 max=14 step=0.1 value=5.3></div><div class=form-field><label>pH · H₂O</label><input name=ph_water type=number min=0 max=14 step=0.1 value=5.8></div><div class=form-field><label>Índice SMP</label><input name=smp_index type=number min=0 max=14 step=0.1 value=6.3></div><div class=form-field><label>Alumínio · cmolc/dm³</label><input name=aluminum_cmolc_dm3 type=number min=0 step=0.01 value=0.10></div><div class=form-field><label>H + Al · cmolc/dm³</label><input name=h_al_cmolc_dm3 type=number min=0 step=0.01 value=3.80></div><div class=form-field><label>Sódio · cmolc/dm³</label><input name=sodium_cmolc_dm3 type=number min=0 step=0.01 value=0.03></div><div class=form-field><label>Soma de bases · SB</label><input name=base_sum_cmolc_dm3 type=number step=0.01 value=4.30></div><div class=form-field><label>CTC efetiva · t</label><input name=effective_cec_cmolc_dm3 type=number step=0.01 value=4.40></div><div class=form-field><label>CTC a pH 7 · T</label><input name=cec_ph7_cmolc_dm3 type=number step=0.01 value=8.10></div><div class=form-field><label>Saturação por bases · V%</label><input name=base_saturation_pct type=number min=0 max=100 step=0.1 value=52></div><div class=form-field><label>Saturação por alumínio · m%</label><input name=aluminum_saturation_pct type=number min=0 max=100 step=0.1 value=2.3></div><div class=form-field><label>Condutividade elétrica · dS/m</label><input name=electrical_conductivity_ds_m type=number min=0 step=0.01 value=0.18></div></div></div>';

const soilFormNutrients = '<div class=form-section><div class=form-section-head><strong>Macronutrientes e matéria orgânica</strong><span>Unidades e métodos preservados</span></div><div class=form-grid><div class=form-field><label>Matéria orgânica · g/dm³</label><input name=organic_matter_g_dm3 type=number min=0 step=0.1 value=28.4></div><div class=form-field><label>Carbono orgânico · g/dm³</label><input name=organic_carbon_g_dm3 type=number min=0 step=0.1 value=16.5></div><div class=form-field><label>Fósforo · mg/dm³</label><input name=phosphorus_mg_dm3 type=number min=0 step=0.1 value=14.2></div><div class=form-field><label>Fósforo remanescente · mg/L</label><input name=remaining_phosphorus_mg_l type=number min=0 step=0.1 value=19.8></div><div class=form-field><label>Potássio · mg/dm³</label><input name=potassium_mg_dm3 type=number min=0 step=0.1 value=105.6></div><div class=form-field><label>Potássio · cmolc/dm³</label><input name=potassium_cmolc_dm3 type=number min=0 step=0.01 value=0.27></div><div class=form-field><label>Cálcio · cmolc/dm³</label><input name=calcium_cmolc_dm3 type=number min=0 step=0.1 value=3.0></div><div class=form-field><label>Magnésio · cmolc/dm³</label><input name=magnesium_cmolc_dm3 type=number min=0 step=0.1 value=1.0></div><div class=form-field><label>Enxofre · mg/dm³</label><input name=sulfur_mg_dm3 type=number min=0 step=0.1 value=9.8></div><div class=form-field><label>Nitrogênio total · g/kg</label><input name=total_nitrogen_g_kg type=number min=0 step=0.1 value=1.6></div><div class=form-field><label>Relação C/N</label><input name=carbon_nitrogen_ratio type=number min=0 step=0.1 value=10.3></div><div class=form-field><label>Relação Ca/Mg</label><input name=calcium_magnesium_ratio type=number min=0 step=0.01 value=3.00></div></div></div>';

const soilFormMicrosTexture = '<div class=form-section><div class=form-section-head><strong>Micronutrientes</strong><span>Resultados em mg/dm³</span></div><div class=form-grid><div class=form-field><label>Boro</label><input name=boron_mg_dm3 type=number min=0 step=0.01 value=0.42></div><div class=form-field><label>Cobre</label><input name=copper_mg_dm3 type=number min=0 step=0.01 value=1.80></div><div class=form-field><label>Ferro</label><input name=iron_mg_dm3 type=number min=0 step=0.1 value=38.0></div><div class=form-field><label>Manganês</label><input name=manganese_mg_dm3 type=number min=0 step=0.1 value=12.6></div><div class=form-field><label>Zinco</label><input name=zinc_mg_dm3 type=number min=0 step=0.1 value=3.1></div><div class=form-field><label>Silício</label><input name=silicon_mg_dm3 type=number min=0 step=0.1 value=6.4></div><div class=form-field><label>Molibdênio</label><input name=molybdenum_mg_dm3 type=number min=0 step=0.001 value=0.080></div><div class=form-field><label>Cloro</label><input name=chloride_mg_dm3 type=number min=0 step=0.1 value=4.2></div></div></div><div class=form-section><div class=form-section-head><strong>Textura e granulometria</strong><span>A soma deve fechar em 100%</span></div><div class=form-grid><div class=form-field><label>Argila · %</label><input data-texture-fraction name=clay_pct type=number min=0 max=100 step=0.1 value=42></div><div class=form-field><label>Silte · %</label><input data-texture-fraction name=silt_pct type=number min=0 max=100 step=0.1 value=18></div><div class=form-field><label>Areia total · %</label><input data-texture-fraction name=sand_pct type=number min=0 max=100 step=0.1 value=40></div><div class=form-field><label>Soma da textura · %</label><input name=texture_total_pct type=number value=100 readonly></div><div class=form-field><label>Classe textural</label><select name=texture_class><option>Argilosa</option><option>Muito argilosa</option><option>Média</option><option>Arenosa</option></select></div><div class=form-field><label>Densidade do solo · g/cm³</label><input name=bulk_density_g_cm3 type=number min=0 step=0.01 value=1.18></div></div></div><div class=form-section><div class=form-grid><div class=form-field><label>Observações do laudo</label><textarea name=notes>Resultado histórico digitado a partir do laudo original.</textarea></div><div class=form-field><label>Recomendação registrada na época</label><textarea name=historical_recommendation placeholder=Transcrever-a-recomendação-original></textarea></div></div><div class=form-note>Recomendações antigas ficam preservadas para consulta e não devem ser reaplicadas automaticamente na safra atual.</div></div>';

const forms = {
  dashboard: {
    eyebrow: 'PRODUÇÃO DE CAMPO', title: 'Registrar produção', success: 'Produção registrada', activity: 'Novo apontamento de produção salvo', icon: 'sprout',
    body: `<div class="form-grid"><div class="form-field"><label>Cultura</label><select name="cultura" required><option>Café</option><option>Milho</option><option>Soja</option><option>Sorgo</option><option>Trigo</option><option>Cultura de cobertura</option></select></div><div class="form-field"><label>Data e hora</label><input name="data" type="datetime-local" value="2026-07-16T18:45" required></div><div class="form-field"><label>Talhão</label><select name="talhao" required><option>C-07 · Boa Esperança</option><option>C-04 · Lavoura Sede</option><option>M-03 · Chapadão</option><option>S-08 · Cerrado</option></select></div><div class="form-field"><label>Volume ou área</label><input name="volume" type="number" step="0.01" placeholder="0,00" required></div><div class="form-field full"><label>Observação</label><textarea name="obs" placeholder="Ocorrência, qualidade ou condição de campo"></textarea></div></div>`
  },
  yarding_spreading: {
    eyebrow: 'CAFÉ · PREPARO DO TALHÃO', title: 'Registrar arruação ou esparramação', success: 'Arruação ou esparramação registrada', activity: 'Preparo ou recomposição pós-colheita vinculado ao talhão', icon: 'sprout',
    body: '<div class=form-grid><div class=form-field><label>Safra</label><select name=season>'+agronomicSeasonOptions+'</select></div><div class=form-field><label>Talhão</label><select name=plot required>'+agronomicPlotOptions+'</select></div><div class=form-field><label>Data e hora de início</label><input name=started_at type=datetime-local value=2026-07-18T08:00 required></div><div class=form-field><label>Data e hora de término</label><input name=ended_at type=datetime-local></div><div class=form-field><label>Operação</label><select name=cultural_operation_type><option>Arruação</option><option>Esparramação</option></select></div><div class=form-field><label>Método</label><select name=method><option>Mecanizada</option><option>Manual</option><option>Mista</option></select></div><div class=form-field><label>Área trabalhada · ha</label><input name=area_ha type=number min=0 step=0.01 value=18.4 required></div><div class=form-field><label>Quantidade de linhas</label><input name=row_count type=number min=0 step=1 value=42></div><div class=form-field><label>Largura da faixa sob a saia · m</label><input name=strip_width_m type=number min=0 step=0.01 value=1.20></div><div class=form-field><label>Posição / destino do material</label><select name=material_destination><option>Entrelinha</option><option>Linha do cafeeiro</option><option>Distribuição uniforme</option><option>Leiras temporárias</option></select></div><div class=form-field><label>Equipamento</label><select name=equipment><option>Arruador e soprador</option><option>Esparramador cafeeiro</option><option>Soprador costal</option><option>Ferramentas manuais</option></select></div><div class=form-field><label>Equipe</label><select name=team><option>Equipe 05</option><option>Equipe 03</option><option>Equipe mecanizada</option><option>Equipe 04</option></select></div><div class=form-field><label>Responsável</label><select name=responsible><option>José Carlos</option><option>Ana Pereira</option><option>Carlos Mendes</option></select></div><div class=form-field><label>Horas trabalhadas</label><input name=labor_hours type=number min=0 step=0.1 value=14.2></div><div class=form-field><label>Combustível consumido · L</label><input name=fuel_l type=number min=0 step=0.1 value=77></div><div class=form-field><label>Umidade / condição do solo</label><select name=soil_condition><option>Seco</option><option>Levemente úmido</option><option>Úmido</option></select></div><div class=form-field><label>Relação com a colheita</label><select name=harvest_relation><option>Pré-colheita</option><option>Pós-colheita</option><option>Entre etapas</option></select></div><div class=form-field><label>Custo total · R$</label><input name=total_cost type=number min=0 step=0.01></div><div class=form-field><label>Observações</label><textarea name=notes placeholder=Uniformidade-faixas-pedras-folhas-e-ocorrências></textarea></div><div class=form-note>A arruação e a esparramação ficam ligadas ao talhão e à colheita, permitindo comparar horas, custos e condições com a eficiência da safra.</div></div>'
  },
  weeding_mowing: {
    eyebrow: 'TALHÃO · MANEJO CULTURAL', title: 'Registrar capina ou roçada', success: 'Capina ou roçada registrada', activity: 'Manejo de plantas espontâneas vinculado ao talhão', icon: 'wrench',
    body: '<div class=form-grid><div class=form-field><label>Safra</label><select name=season>'+agronomicSeasonOptions+'</select></div><div class=form-field><label>Talhão</label><select name=plot required>'+agronomicPlotOptions+'</select></div><div class=form-field><label>Data e hora de início</label><input name=started_at type=datetime-local value=2026-07-18T08:00 required></div><div class=form-field><label>Data e hora de término</label><input name=ended_at type=datetime-local></div><div class=form-field><label>Operação</label><select name=cultural_operation_type><option>Capina</option><option>Roçada</option></select></div><div class=form-field><label>Método</label><select name=method><option>Manual</option><option>Mecanizada</option><option>Química · integrar ao PVGest</option><option>Mista</option></select></div><div class=form-field><label>Área trabalhada · ha</label><input name=area_ha type=number min=0 step=0.01 value=18.4 required></div><div class=form-field><label>Linhas / extensão</label><input name=row_extent placeholder=Ex-42-linhas-ou-18-km></div><div class=form-field><label>Altura da vegetação antes · cm</label><input name=vegetation_height_before_cm type=number min=0 step=0.1 value=35></div><div class=form-field><label>Altura após a operação · cm</label><input name=vegetation_height_after_cm type=number min=0 step=0.1 value=8></div><div class=form-field><label>Equipamento</label><select name=equipment><option>Roçadeira ecológica</option><option>Cultivador entrelinhas</option><option>Roçadeira costal</option><option>Ferramentas manuais</option><option>Pulverizador PVGest</option></select></div><div class=form-field><label>Equipe</label><select name=team><option>Equipe mecanizada</option><option>Equipe 04</option><option>Equipe 05</option><option>Equipe 03</option></select></div><div class=form-field><label>Responsável</label><select name=responsible><option>Carlos Mendes</option><option>Ana Pereira</option><option>José Carlos</option><option>Rafael Souza</option></select></div><div class=form-field><label>Horas trabalhadas</label><input name=labor_hours type=number min=0 step=0.1 value=16.8></div><div class=form-field><label>Combustível consumido · L</label><input name=fuel_l type=number min=0 step=0.1 value=92></div><div class=form-field><label>Produto / aplicação PVGest</label><input name=herbicide_ref placeholder=Opcional-para-capina-química></div><div class=form-field><label>Dose do produto</label><input name=product_dose placeholder=Opcional></div><div class=form-field><label>Custo total · R$</label><input name=total_cost type=number min=0 step=0.01></div><div class=form-field><label>Condição e observações</label><textarea name=notes placeholder=Infestação-falhas-obstáculos-e-ocorrências></textarea></div><div class=form-note>Quando a capina for química, o registro deve manter o vínculo com a prescrição e os parâmetros de aplicação do PVGest.</div></div>'
  },
  pruning: {
    eyebrow: 'TALHÃO · PODA', title: 'Registrar poda do cafeeiro', success: 'Poda registrada', activity: 'Nova poda vinculada ao talhão e à safra', icon: 'sprout',
    body: '<div class=form-grid><div class=form-field><label>Safra</label><select name=season>'+agronomicSeasonOptions+'</select></div><div class=form-field><label>Talhão</label><select name=plot required>'+agronomicPlotOptions+'</select></div><div class=form-field><label>Data de início</label><input name=started_at type=date value=2026-07-18 required></div><div class=form-field><label>Data de término</label><input name=ended_at type=date></div><div class=form-field><label>Tipo de poda</label><select name=pruning_type><option>Esqueletamento</option><option>Decote</option><option>Recepa</option><option>Desponte</option><option>Poda de formação</option><option>Desbrota / condução</option></select></div><div class=form-field><label>Motivo</label><select name=reason><option>Renovação produtiva</option><option>Controle de altura</option><option>Recuperação da lavoura</option><option>Formação</option><option>Sanidade</option></select></div><div class=form-field><label>Área podada · ha</label><input name=area_ha type=number min=0 step=0.01 value=8.2 required></div><div class=form-field><label>Quantidade de plantas</label><input name=plant_count type=number min=0 step=1 value=10250></div><div class=form-field><label>Altura de corte · m</label><input name=cut_height_m type=number min=0 step=0.01 value=1.70></div><div class=form-field><label>Lado / intensidade</label><select name=side_intensity><option>Dois lados</option><option>Um lado</option><option>Leve</option><option>Moderada</option><option>Severa</option></select></div><div class=form-field><label>Equipamento</label><select name=equipment><option>Podador lateral</option><option>Podador hidráulico</option><option>Motosserra leve</option><option>Podador manual</option></select></div><div class=form-field><label>Equipe</label><select name=team><option>Equipe 05</option><option>Equipe 03</option><option>Equipe 02</option><option>Equipe 04</option></select></div><div class=form-field><label>Responsável</label><select name=responsible><option>Ana Pereira</option><option>José Carlos</option><option>Carlos Mendes</option></select></div><div class=form-field><label>Destino dos resíduos</label><select name=residue_destination><option>Trituração na linha</option><option>Leiras</option><option>Retirada do talhão</option></select></div><div class=form-field><label>Próxima ação</label><select name=next_action><option>Desbrota</option><option>Seleção de brotos</option><option>Revisão da condução</option><option>Adubação pós-poda</option></select></div><div class=form-field><label>Data prevista da próxima ação</label><input name=next_action_at type=date value=2026-10-15></div><div class=form-field><label>Custo total · R$</label><input name=total_cost type=number min=0 step=0.01></div><div class=form-field><label>Observações</label><textarea name=notes placeholder=Falhas-condição-das-plantas-e-ocorrências></textarea></div><div class=form-note>O registro de poda entra automaticamente na linha do tempo do talhão e mantém a próxima intervenção prevista.</div></div>'
  },
  liming: {
    eyebrow: 'TALHÃO · CALAGEM', title: 'Registrar calagem ou gessagem', success: 'Correção do solo registrada', activity: 'Calagem ou gessagem vinculada ao talhão', icon: 'layers',
    body: '<div class=form-grid><div class=form-field><label>Safra</label><select name=season>'+agronomicSeasonOptions+'</select></div><div class=form-field><label>Talhão</label><select name=plot required>'+agronomicPlotOptions+'</select></div><div class=form-field><label>Data e hora</label><input name=occurred_at type=datetime-local value=2026-07-18T08:00 required></div><div class=form-field><label>Análise / recomendação de origem</label><select name=soil_analysis_ref><option>SOL-052</option><option>SOL-051</option><option>SOL-050</option><option>Sem vínculo</option></select></div><div class=form-field><label>Operação</label><select name=amendment_type><option>Calagem</option><option>Gessagem</option><option>Correção localizada</option></select></div><div class=form-field><label>Produto</label><select name=product><option>Calcário dolomítico</option><option>Calcário calcítico</option><option>Gesso agrícola</option><option>Óxido de cálcio e magnésio</option></select></div><div class=form-field><label>Lote do corretivo</label><input name=product_batch value=CAL-2603></div><div class=form-field><label>PRNT · %</label><input name=prnt_pct type=number min=0 max=200 step=0.1 value=88></div><div class=form-field><label>V% atual</label><input name=current_base_saturation_pct type=number min=0 max=100 step=0.1 value=41></div><div class=form-field><label>V% desejado</label><input name=target_base_saturation_pct type=number min=0 max=100 step=0.1 value=60></div><div class=form-field><label>Dose · t/ha</label><input data-operation-dose name=dose_per_ha type=number min=0 step=0.01 value=2.20 required></div><div class=form-field><label>Área aplicada · ha</label><input data-operation-area name=area_ha type=number min=0 step=0.01 value=18.4 required></div><div class=form-field><label>Quantidade total · t</label><input name=operation_total type=number value=40.48 readonly></div><div class=form-field><label>Método de distribuição</label><select name=application_method><option>Lanço em área total</option><option>Faixa sob a saia</option><option>Localizada</option></select></div><div class=form-field><label>Incorporação</label><select name=incorporation><option>Sem incorporação</option><option>0–10 cm</option><option>0–20 cm</option></select></div><div class=form-field><label>Equipamento</label><select name=equipment><option>Jan Lancer 12.000</option><option>DCA 5500</option><option>Distribuidor terceirizado</option></select></div><div class=form-field><label>Operador / equipe</label><select name=responsible><option>Rafael Souza</option><option>Carlos Mendes</option><option>Paulo Nunes</option></select></div><div class=form-field><label>Custo · R$/t</label><input name=unit_cost type=number min=0 step=0.01 value=218></div><div class=form-field><label>Observações</label><textarea name=notes placeholder=Condição-do-solo-faixa-e-ocorrências></textarea></div><div class=form-note>O sistema preserva PRNT, dose, área, quantidade total, método, incorporação e vínculo com a análise utilizada no cálculo.</div></div>'
  },
  fertilization: {
    eyebrow: 'TALHÃO · ADUBAÇÃO', title: 'Registrar adubação', success: 'Adubação registrada', activity: 'Adubação vinculada ao talhão e à análise de solo', icon: 'package',
    body: '<div class=form-grid><div class=form-field><label>Safra</label><select name=season>'+agronomicSeasonOptions+'</select></div><div class=form-field><label>Talhão</label><select name=plot required>'+agronomicPlotOptions+'</select></div><div class=form-field><label>Data e hora</label><input name=occurred_at type=datetime-local value=2026-07-18T08:00 required></div><div class=form-field><label>Análise / recomendação de origem</label><select name=soil_analysis_ref><option>SOL-052</option><option>SOL-051</option><option>SOL-050</option><option>Sem vínculo</option></select></div><div class=form-field><label>Tipo de adubação</label><select name=fertilization_type><option>Produção</option><option>Plantio</option><option>Cobertura</option><option>Corretiva</option><option>Orgânica</option></select></div><div class=form-field><label>Produto / formulação</label><input name=product value=20-05-20 + B e Zn required></div><div class=form-field><label>Lote do produto</label><input name=product_batch value=FERT-2607></div><div class=form-field><label>Unidade da dose</label><select name=dose_unit><option>kg/ha</option><option>t/ha</option><option>L/ha</option></select></div><div class=form-field><label>Dose por hectare</label><input data-operation-dose name=dose_per_ha type=number min=0 step=0.01 value=450 required></div><div class=form-field><label>Área aplicada · ha</label><input data-operation-area name=area_ha type=number min=0 step=0.01 value=18.4 required></div><div class=form-field><label>Quantidade total</label><input name=operation_total type=number value=8280 readonly></div><div class=form-field><label>Método</label><select name=application_method><option>Faixa sob a saia</option><option>Lanço em área total</option><option>Sulco</option><option>Localizada</option></select></div><div class=form-field><label>Equipamento</label><select name=equipment><option>DCA 5500</option><option>Jan Lancer 12.000</option><option>Adubadora cafeeira</option></select></div><div class=form-field><label>Operador / equipe</label><select name=responsible><option>Carlos Mendes</option><option>Paulo Nunes</option><option>Rafael Souza</option><option>Equipe 05</option></select></div><div class=form-field><label>Custo unitário · R$/unidade</label><input name=unit_cost type=number min=0 step=0.01 value=2.85></div><div class=form-field><label>Condição do solo</label><select name=soil_condition><option>Úmido</option><option>Seco</option><option>Após chuva</option></select></div><div class=form-field><label>Observações</label><textarea name=notes placeholder=Faixa-aplicada-regulagem-e-ocorrências></textarea></div><div class=form-note>A dose, a área e o total aplicado ficam ligados ao talhão, à safra, ao lote do produto e à análise que originou a recomendação.</div></div>'
  },
  soil_analysis: {
    eyebrow: 'SOLO · LAUDO HISTÓRICO', title: 'Cadastrar análise de solo anterior', success: 'Análise de solo cadastrada', activity: 'Laudo histórico de solo vinculado ao talhão', icon: 'layers',
    body: '<div class=form-stack>'+soilFormMeta+soilFormBases+soilFormNutrients+soilFormMicrosTexture+'</div>'
  },
  coffee_soil_spray: {
    eyebrow: 'PVGEST · CAFÉ · VIA SOLO', title: 'Registrar aplicação via solo', success: 'Aplicação via solo programada', activity: 'Nova aplicação via solo no café criada no PVGest', icon: 'droplet',
    body: '<div class=form-grid><div class=form-field><label>Safra</label><select name=season>'+agronomicSeasonOptions+'</select></div><div class=form-field><label>Talhão de café</label><select name=plot required><option>C-07 · Boa Esperança</option><option>C-04 · Lavoura Sede</option><option>C-12 · Pedra Branca</option><option>C-02 · Vargem</option></select></div><div class=form-field><label>Janela planejada</label><input name=planned_at type=datetime-local value=2026-07-19T07:00 required></div><div class=form-field><label>Receita agronômica</label><select name=prescription required><option>Nematicida NS-03 · Ana Ribeiro</option><option>Inseticida sistêmico SI-02 · Ana Ribeiro</option><option>Herbicida dirigido HD-07 · Lucas Martins</option></select></div><div class=form-field><label>Modalidade via solo</label><select name=application_target required><option value=COFFEE_SOIL_BAND>Faixa sob a saia</option><option value=COFFEE_SOIL_LINE>Linha dirigida</option><option value=COFFEE_DRENCH>Drench / coroamento</option></select></div><div class=form-field><label>Zona-alvo</label><select name=target_zone><option>Zona radicular</option><option>Faixa de controle de plantas</option><option>Colo da planta</option><option>Solo entre linha e saia</option></select></div><div class=form-field><label>Condição do solo</label><select name=soil_condition><option>Levemente úmido</option><option>Úmido após chuva</option><option>Seco</option><option>Saturado · bloquear aplicação</option></select></div><div class=form-field><label>Umidade do solo · %</label><input name=soil_moisture_pct type=number min=0 max=100 step=0.1 value=22.0></div><div class=form-field><label>Área prevista · ha</label><input name=planned_area_ha type=number min=0 step=0.01 value=18.4 required></div><div class=form-field><label>Espaçamento das ruas · m</label><input name=row_spacing_m type=number min=0 step=0.01 value=3.60 required></div><div class=form-field><label>Largura da faixa tratada · m</label><input name=target_band_width_m type=number min=0 step=0.01 value=1.20 required></div><div class=form-field><label>Lados tratados</label><select data-application-sides name=application_sides><option value=2>Dois lados</option><option value=1>Um lado</option></select></div><div class=form-field><label>Equipamento</label><select name=asset><option>Pulverizador cafeeiro PC-2000</option><option>Barra dirigida BD-12</option><option>Uniport 3030 · kit dirigido</option></select></div><div class=form-field><label>Operador</label><select name=operator><option>Carlos Mendes</option><option>Paulo Nunes</option><option>Rafael Souza</option><option>Marcos Oliveira</option></select></div><div class=form-field><label>Velocidade · km/h</label><input name=speed_kmh type=number min=0 step=0.1 value=5.2 required></div><div class=form-field><label>Rotação do motor · rpm</label><input name=engine_rpm type=number min=0 step=1 value=1850 required></div><div class=form-field><label>Modelo do bico dirigido</label><input name=nozzle_model value=FCX-80-02 required></div><div class=form-field><label>Bicos por lado</label><input data-directed-nozzles name=directed_nozzles_per_side type=number min=1 step=1 value=4 required></div><div class=form-field><label>Quantidade total de bicos</label><input name=nozzle_count type=number value=8 readonly></div><div class=form-field><label>Vazão por hectare · L/ha</label><input name=rate_l_ha type=number min=0 step=0.1 value=220 required></div><div class=form-field><label>Vazão por bico · L/min</label><input name=nozzle_flow_l_min type=number min=0 step=0.01 value=0.64 required></div><div class=form-field><label>Pressão · bar</label><input name=pressure_bar type=number min=0 step=0.1 value=3.0></div><div class=form-field><label>Dose por planta · mL</label><input name=dose_per_plant_ml type=number min=0 step=0.1></div><div class=form-field><label>Plantas previstas</label><input name=plants_treated type=number min=0 step=1></div><div class=form-field><label>Proteção antideriva</label><select name=drift_shield_used><option value=true>Instalada e conferida</option><option value=false>Não utilizada</option></select></div><div class=form-field><label>Janela sem chuva prevista · h</label><input name=rain_free_window_h type=number min=0 step=0.5 value=6></div><div class=form-field full><label>Observações e checklist</label><textarea name=notes placeholder=Umidade-solo-faixa-pressão-retorno-vazamentos-proteção-e-ocorrências></textarea></div><div class=form-field full><div class=form-note>'+icon('shield')+'A modalidade via solo é registrada separadamente da aplicação foliar. O PVGest preserva receita, faixa tratada, condição do solo, calibração realizada e evidência de execução; a liberação depende do responsável técnico e do rótulo do produto.</div></div></div>'
  },
  coffee_soil_params: {
    eyebrow: 'PVGEST · CAFÉ · PRESET VIA SOLO', title: 'Salvar parâmetros via solo', success: 'Preset via solo salvo', activity: 'Novo preset de aplicação via solo versionado', icon: 'gauge',
    body: '<div class=form-grid><div class=form-field><label>Equipamento</label><select name=asset><option>Pulverizador cafeeiro PC-2000</option><option>Barra dirigida BD-12</option><option>Uniport 3030 · kit dirigido</option></select></div><div class=form-field><label>Receita / alvo</label><select name=prescription><option>Nematicida NS-03 · Zona radicular</option><option>Inseticida SI-02 · Sistêmico</option><option>Herbicida HD-07 · Faixa de controle</option></select></div><div class=form-field><label>Modalidade via solo</label><select name=application_target><option value=COFFEE_SOIL_BAND>Faixa sob a saia</option><option value=COFFEE_SOIL_LINE>Linha dirigida</option><option value=COFFEE_DRENCH>Drench / coroamento</option></select></div><div class=form-field><label>Responsável técnico</label><input name=technical_responsible value=Ana-Ribeiro required></div><div class=form-field><label>Espaçamento das ruas · m</label><input name=row_spacing_m type=number min=0 step=0.01 value=3.60 required></div><div class=form-field><label>Largura da faixa · m</label><input name=target_band_width_m type=number min=0 step=0.01 value=1.20 required></div><div class=form-field><label>Lados tratados</label><select data-application-sides name=application_sides><option value=2>Dois lados</option><option value=1>Um lado</option></select></div><div class=form-field><label>Proteção antideriva</label><select name=drift_shield_required><option value=true>Obrigatória</option><option value=false>Não aplicável</option></select></div><div class=form-field><label>Velocidade · km/h</label><input name=speed_kmh type=number min=0 step=0.1 value=5.2 required></div><div class=form-field><label>Rotação do motor · rpm</label><input name=engine_rpm type=number min=0 step=1 value=1850 required></div><div class=form-field><label>Modelo do bico dirigido</label><input name=nozzle_model value=FCX-80-02 required></div><div class=form-field><label>Bicos por lado</label><input data-directed-nozzles name=directed_nozzles_per_side type=number min=1 step=1 value=4 required></div><div class=form-field><label>Quantidade total de bicos</label><input name=nozzle_count type=number value=8 readonly></div><div class=form-field><label>Vazão por hectare · L/ha</label><input name=rate_l_ha type=number min=0 step=0.1 value=220 required></div><div class=form-field><label>Vazão por bico · L/min</label><input name=nozzle_flow_l_min type=number min=0 step=0.01 value=0.64 required></div><div class=form-field><label>Pressão · bar</label><input name=pressure_bar type=number min=0 step=0.1 value=3.0></div><div class=form-field full><label>Condição de calibração e observações</label><textarea name=notes placeholder=Solo-faixa-malha-altura-dos-bicos-pressão-proteção-e-teste-de-vazão></textarea></div><div class=form-field full><div class=form-note>'+icon('clipboard')+'Cada alteração cria uma nova versão do preset. A aplicação mantém uma cópia dos valores efetivamente utilizados para comparação com a regulagem aprovada.</div></div></div>'
  },
  spray: {
    eyebrow: 'PVGEST · PULVERIZAÇÃO', title: 'Nova aplicação', success: 'Aplicação programada', activity: 'Nova aplicação criada no PVGest', icon: 'droplet',
    body: `<div class="form-grid"><div class="form-field"><label>Talhão</label><select name="talhao"><option>C-07 · Boa Esperança</option><option>C-04 · Lavoura Sede</option><option>M-03 · Chapadão</option><option>S-08 · Cerrado</option></select></div><div class="form-field"><label>Janela planejada</label><input name="data" type="datetime-local" value="2026-07-17T05:40" required></div><div class="form-field full"><label>Receita agronômica</label><select name="receita"><option>Fungicida F-12 · Ana Ribeiro</option><option>Herbicida H-08 · Lucas Martins</option><option>Nutrição N-04 · Lucas Martins</option><option>Inseticida I-06 · Ana Ribeiro</option></select></div><div class="form-field"><label>Equipamento</label><select name="equipamento"><option>Uniport 3030</option><option>John Deere 4730</option><option>Imperador 3000</option></select></div><div class="form-field"><label>Tratorista</label><select name="tratorista"><option>Carlos Mendes</option><option>Paulo Nunes</option><option>Rafael Souza</option><option>Marcos Oliveira</option></select></div><div class="form-field"><label>Área prevista · ha</label><input name="area" type="number" step="0.01" required></div><div class="form-field"><label>Velocidade · km/h</label><input name="speed_kmh" type="number" step="0.1" value="14.8" required></div><div class="form-field"><label>Rotação do motor · rpm</label><input name="engine_rpm" type="number" step="1" value="2000" required></div><div class="form-field"><label>Modelo do bico</label><input name="nozzle_model" value="AI 11002" required></div><div class="form-field"><label>Quantidade de bicos</label><input name="nozzle_count" type="number" step="1" value="36" required></div><div class="form-field"><label>Vazão por hectare · L/ha</label><input name="rate_l_ha" type="number" step="0.1" value="142" required></div><div class="form-field"><label>Vazão por bico · L/min</label><input name="nozzle_flow_l_min" type="number" step="0.01" value="0.58" required></div><div class="form-field full"><div class="form-note">${icon('shield')}A liberação final depende da assinatura do agrônomo, checklist do equipamento, parâmetros salvos e condições climáticas dentro dos limites da receita.</div></div></div>`
  },
  coffee: {
    eyebrow: 'COLHEITA DE CAFÉ', title: 'Novo apontamento', success: 'Apontamento salvo', activity: 'Apontamento de café registrado', icon: 'coffee',
    body: `<div class="form-grid"><div class="form-field"><label>Data</label><input name="data" type="date" value="2026-07-17" required></div><div class="form-field"><label>Método</label><select name="metodo" required><option>Manual</option><option>De árvore</option><option>De chão / varrição</option><option>Mecanizada de árvore</option><option>Mecanizada de chão</option></select></div><div class="form-field"><label>Talhão</label><select name="talhao" required><option>C-07 · Boa Esperança</option><option>C-04 · Lavoura Sede</option><option>C-12 · Pedra Branca</option><option>C-02 · Vargem</option></select></div><div class="form-field"><label>Equipe / máquina</label><select name="equipe"><option>Equipe 05 · Ana Pereira</option><option>Equipe 02 · José Carlos</option><option>Case 8250 · Própria</option><option>Jacto K3 · Terceirizada</option></select></div><div class="form-field"><label>Quantidade original</label><input name="quantidade" type="number" step="0.1" placeholder="0,0" required></div><div class="form-field"><label>Unidade original</label><select name="unidade"><option>Medida</option><option>Litro</option><option>Carreta de 5.000 L</option><option>Saca</option></select></div><div class="form-field"><label>Sacas equivalentes</label><input name="sacas" type="number" step="0.1" placeholder="Calculado ao salvar"></div><div class="form-field"><label>Registro relacionado</label><select name="registro"><option>Nenhum</option><option>CAR-018 · 4.850 L</option><option>Jornada Case 8250 · 7,8 h</option></select></div><div class="form-field full"><div class="form-note">${icon('alert')}A quantidade e a unidade originais são preservadas. Conversões para litros e sacas usam fatores versionados por safra, talhão e método.</div></div></div>`
  },
  coffee_trailer: {
    eyebrow: 'CAFÉ · MEDIÇÃO EM CARRETA', title: 'Registrar carreta de 5.000 L', success: 'Carreta registrada', activity: 'Nova medida em carreta de café registrada', icon: 'truck',
    body: `<div class="form-grid"><div class="form-field"><label>Data e hora</label><input name="occurred_at" type="datetime-local" value="2026-07-17T16:30" required></div><div class="form-field"><label>Identificação da carreta</label><input name="trailer_code" value="CAR-019" required></div><div class="form-field"><label>Talhão de origem</label><select name="talhao"><option>C-07 · Boa Esperança</option><option>C-04 · Lavoura Sede</option><option>C-12 · Pedra Branca</option><option>C-02 · Vargem</option></select></div><div class="form-field"><label>Método</label><select name="metodo"><option>De árvore</option><option>De chão / varrição</option><option>Manual</option></select></div><div class="form-field"><label>Capacidade nominal · L</label><input name="capacity_l" type="number" value="5000" readonly></div><div class="form-field"><label>Preenchimento · %</label><input name="fill_pct" type="number" min="0" max="100" step="0.1" value="100" required></div><div class="form-field"><label>Volume medido · L</label><input name="volume_l" type="number" value="5000" readonly></div><div class="form-field"><label>Destino</label><select name="destino"><option>Terreiro 01</option><option>Lavador</option><option>Secador 02</option><option>Moega central</option></select></div><div class="form-field full"><label>Responsável / observação</label><input name="responsavel" placeholder="Operador e ocorrência de transporte"></div><div class="form-field full"><div class="form-note">${icon('scale')}O volume é calculado como capacidade nominal × percentual preenchido. A capacidade permanece registrada para auditoria mesmo quando a carreta não está completa.</div></div></div>`
  },
  coffee_lot: {
    eyebrow: 'CAFÉ · LOTE DE TERREIRO', title: 'Identificar lote de terreiro', success: 'Lote de terreiro criado', activity: 'Novo lote de café recebido no terreiro', icon: 'coffee',
    body: `<div class="form-grid"><div class="form-field"><label>Código do lote</label><input name="lot_code" value="TER-027" required></div><div class="form-field"><label>Recebido em</label><input name="received_at" type="datetime-local" value="2026-07-17T18:00" required></div><div class="form-field"><label>Terreiro / quadra</label><select name="yard"><option>Terreiro 01 · Quadra A</option><option>Terreiro 02 · Quadra A</option><option>Terreiro 02 · Quadra B</option><option>Terreiro 03 · Quadra C</option></select></div><div class="form-field"><label>Talhão de origem</label><select name="plot"><option>C-07 · Boa Esperança</option><option>C-04 · Lavoura Sede</option><option>C-12 · Pedra Branca</option><option>C-02 · Vargem</option></select></div><div class="form-field"><label>Origem da colheita</label><select name="origin_method"><option>De árvore</option><option>De chão</option></select></div><div class="form-field"><label>Carreta / apontamento relacionado</label><select name="source_record"><option>CAR-018 · 4.850 L</option><option>CAR-017 · 5.000 L</option><option>CAR-016 · 4.200 L</option><option>Sem vínculo</option></select></div><div class="form-field"><label>Volume recebido · L</label><input name="volume_l" type="number" step="0.1" value="5000" required></div><div class="form-field"><label>Umidade inicial · %</label><input name="moisture_pct" type="number" step="0.1" value="22.0"></div><div class="form-field"><label>Tomou chuva?</label><select name="rain_exposure"><option>Não</option><option>Sim</option></select></div><div class="form-field"><label>Chuva estimada · mm</label><input name="rainfall_mm" type="number" step="0.1" placeholder="0,0"></div><div class="form-field"><label>Data da ocorrência de chuva</label><input name="rain_at" type="datetime-local"></div><div class="form-field"><label>Situação</label><select name="status"><option>Recebido</option><option>Secagem</option><option>Atenção</option><option>Pronto para secador</option><option>Encerrado</option></select></div><div class="form-field full"><label>Observações do lote</label><textarea name="notes" placeholder="Condição do café, revolvimento, chuva, cobertura, folhas, fermentação ou outras ocorrências"></textarea></div><div class="form-field full"><div class="form-note">${icon('cloud')}A origem, exposições à chuva e anotações permanecem ligadas ao lote mesmo depois da movimentação para secador, tulha ou beneficiamento.</div></div></div>`
  },
  coffee_sieve: {
    eyebrow: 'CAFÉ · QUALIDADE FÍSICA', title: 'Registrar análise de peneiras', success: 'Análise de peneiras salva', activity: 'Nova classificação física vinculada ao lote', icon: 'scale',
    body: '<div class=form-grid><div class=form-field><label>Código da análise</label><input name=analysis_code value=FIS-019 required></div><div class=form-field><label>Amostra de qualidade</label><input name=quality_sample value=PRO-019 required></div><div class=form-field><label>Lote de terreiro</label><select name=drying_lot><option>TER-025 · Boa Esperança</option><option>TER-024 · Lavoura Sede</option><option>TER-023 · Pedra Branca</option></select></div><div class=form-field><label>Lote de secador</label><select name=dryer_batch><option>SEC-041 · Secador 02</option><option>SEC-040 · Secador 01</option><option>Sem passagem por secador</option></select></div><div class=form-field><label>Data e hora da análise</label><input name=analyzed_at type=datetime-local value=2026-07-17T16:00 required></div><div class=form-field><label>Analista responsável</label><input name=analyst value=Marina Lopes required></div><div class=form-field><label>Variedade</label><input name=variety value=Catuaí 144></div><div class=form-field><label>Umidade da amostra · %</label><input name=moisture_pct type=number min=0 max=100 step=0.1 value=11.4></div><div class=form-field><label>Peneira 19 · g</label><input data-sieve-weight data-sieve-17plus name=screen_19_g type=number min=0 step=0.1 value=39 required></div><div class=form-field><label>Peneira 18 · g</label><input data-sieve-weight data-sieve-17plus name=screen_18_g type=number min=0 step=0.1 value=117 required></div><div class=form-field><label>Peneira 17 · g</label><input data-sieve-weight data-sieve-17plus name=screen_17_g type=number min=0 step=0.1 value=186 required></div><div class=form-field><label>Peneira 16 · g</label><input data-sieve-weight name=screen_16_g type=number min=0 step=0.1 value=93 required></div><div class=form-field><label>Peneira 15 · g</label><input data-sieve-weight name=screen_15_g type=number min=0 step=0.1 value=39 required></div><div class=form-field><label>Fundo · g</label><input data-sieve-weight name=screen_bottom_g type=number min=0 step=0.1 value=26 required></div><div class=form-field><label>Peso total da amostra · g</label><input name=sample_weight_g type=number value=500 readonly></div><div class=form-field><label>Peneira 17+ · %</label><input name=screen_17_plus_pct type=number value=68.40 readonly></div><div class=form-field><label>Tipo</label><select name=coffee_type><option>Tipo 4/5</option><option>Tipo 5/6</option><option>Tipo 6/7</option><option>Tipo 7/8</option></select></div><div class=form-field><label>Classificação comercial</label><input name=commercial_class value=Bica corrida · 17/18></div><div class=form-field><label>Observações</label><textarea name=notes>Boa uniformidade granulométrica e baixa presença de fundo.</textarea></div><div class=form-note>Informe o peso retido em cada peneira. O peso total e o percentual de peneira 17+ são recalculados automaticamente.</div></div>'
  },
  coffee_sensory: {
    eyebrow: 'CAFÉ · QUALIDADE', title: 'Registrar perfil sensorial', success: 'Perfil sensorial salvo', activity: 'Nova avaliação sensorial vinculada ao lote', icon: 'coffee',
    body: '<div class=form-grid><div class=form-field><label>Código da amostra</label><input name=sample_code value=PRO-019 required></div><div class=form-field><label>Lote de terreiro</label><select name=drying_lot><option>TER-025 · Boa Esperança</option><option>TER-024 · Lavoura Sede</option><option>TER-023 · Pedra Branca</option></select></div><div class=form-field><label>Lote de secador</label><select name=dryer_batch><option>SEC-041 · Secador 02</option><option>SEC-040 · Secador 01</option><option>Sem passagem por secador</option></select></div><div class=form-field><label>Data e hora da prova</label><input name=cupped_at type=datetime-local value=2026-07-17T15:30 required></div><div class=form-field><label>Provador responsável</label><input name=taster value=Marina Lopes required></div><div class=form-field><label>Protocolo</label><select name=protocol><option>SCA · escala de 100 pontos</option><option>Protocolo interno</option></select></div><div class=form-field><label>Torra da amostra</label><select name=roast><option>Clara · prova</option><option>Média clara</option><option>Média</option></select></div><div class=form-field><label>Fragrância / aroma</label><input data-sensory-score name=fragrance_aroma type=number min=0 max=10 step=0.25 value=8.25 required></div><div class=form-field><label>Sabor</label><input data-sensory-score name=flavor type=number min=0 max=10 step=0.25 value=8.50 required></div><div class=form-field><label>Finalização</label><input data-sensory-score name=aftertaste type=number min=0 max=10 step=0.25 value=8.00 required></div><div class=form-field><label>Acidez</label><input data-sensory-score name=acidity type=number min=0 max=10 step=0.25 value=8.00 required></div><div class=form-field><label>Corpo</label><input data-sensory-score name=body_score type=number min=0 max=10 step=0.25 value=8.25 required></div><div class=form-field><label>Equilíbrio</label><input data-sensory-score name=balance type=number min=0 max=10 step=0.25 value=8.25 required></div><div class=form-field><label>Uniformidade</label><input data-sensory-score name=uniformity type=number min=0 max=10 step=0.25 value=10.00 required></div><div class=form-field><label>Xícara limpa</label><input data-sensory-score name=clean_cup type=number min=0 max=10 step=0.25 value=10.00 required></div><div class=form-field><label>Doçura</label><input data-sensory-score name=sweetness type=number min=0 max=10 step=0.25 value=10.00 required></div><div class=form-field><label>Avaliação global</label><input data-sensory-score name=overall type=number min=0 max=10 step=0.25 value=8.25 required></div><div class=form-field><label>Pontuação total</label><input name=total_score type=number value=87.50 readonly></div><div class=form-field><label>Classificação</label><select name=classification><option>Especial</option><option>Premium</option><option>Comercial fino</option><option>Comercial</option></select></div><div class=form-field><label>Tipo de acidez</label><input name=acidity_profile value=Cítrica · brilhante></div><div class=form-field><label>Tipo de corpo</label><input name=body_profile value=Cremoso · médio alto></div><div class=form-field><label>Descritores</label><input name=descriptors value=Chocolate ao leite, caramelo, frutas amarelas, laranja, floral></div><div class=form-field><label>Defeitos ou contaminações</label><input name=taints placeholder=Ausente></div><div class=form-field><label>Observações finais</label><textarea name=notes>Doçura persistente, xícara limpa e finalização longa.</textarea></div><div class=form-note>A avaliação fica ligada à amostra, ao lote de terreiro e ao lote de secador para comparar manejo, secagem e resultado na xícara.</div></div>'
  },
  dryer_batch: {
    eyebrow: 'CAFÉ · SECADOR', title: 'Iniciar nova secagem', success: 'Lote enviado ao secador', activity: 'Novo ciclo de secagem iniciado', icon: 'gauge',
    body: `<div class="form-grid"><div class="form-field"><label>Código da secagem</label><input name="batch_code" value="SEC-043" required></div><div class="form-field"><label>Lote de terreiro</label><select name="drying_lot"><option>TER-026 · 4.850 L</option><option>TER-024 · 4.600 L</option><option>TER-025 · 5.000 L</option><option>TER-023 · 4.200 L</option></select></div><div class="form-field"><label>Secador</label><select name="dryer"><option>Secador 01</option><option>Secador 02</option><option>Secador 03</option></select></div><div class="form-field"><label>Início</label><input name="started_at" type="datetime-local" value="2026-07-17T18:30" required></div><div class="form-field"><label>Umidade de entrada · %</label><input name="entry_moisture_pct" type="number" step="0.1" value="22.4" required></div><div class="form-field"><label>Volume de entrada · L</label><input name="entry_volume_l" type="number" step="0.1" value="4850" required></div><div class="form-field"><label>Temperatura planejada do ar · °C</label><input name="air_temp_setpoint_c" type="number" step="0.1" value="78.0" required></div><div class="form-field"><label>Limite da massa · °C</label><input name="mass_temp_limit_c" type="number" step="0.1" value="45.0" required></div><div class="form-field"><label>Meta de umidade de saída · %</label><input name="target_exit_moisture_pct" type="number" step="0.1" value="11.5" required></div><div class="form-field"><label>Operador</label><select name="operator"><option>Carlos Mendes</option><option>Paulo Nunes</option><option>Rafael Souza</option><option>Marcos Oliveira</option></select></div><div class="form-field full"><label>Programa e observações iniciais</label><textarea name="notes" placeholder="Origem do lote, chuva, carga, fluxo de ar, combustível e condição inicial"></textarea></div><div class="form-field full"><div class="form-note">${icon('gauge')}O ciclo herda a identificação e as ocorrências do lote de terreiro. As leituras horárias formarão a curva de retirada de umidade.</div></div></div>`
  },
  dryer_reading: {
    eyebrow: 'CAFÉ · LEITURA DO SECADOR', title: 'Registrar leitura horária', success: 'Leitura adicionada à curva', activity: 'Nova leitura de secagem registrada', icon: 'clock',
    body: `<div class="form-grid"><div class="form-field"><label>Ciclo de secagem</label><select name="dryer_batch"><option>SEC-042 · Em secagem</option><option>SEC-041 · Concluído</option><option>SEC-040 · Concluído</option></select></div><div class="form-field"><label>Data e hora da leitura</label><input name="recorded_at" type="datetime-local" value="2026-07-17T18:20" required></div><div class="form-field"><label>Hora do ciclo</label><input name="elapsed_hours" type="number" step="0.1" value="8.0" required></div><div class="form-field"><label>Umidade · %</label><input name="moisture_pct" type="number" step="0.1" value="15.0" required></div><div class="form-field"><label>Temperatura do ar · °C</label><input name="air_temp_c" type="number" step="0.1" value="80.0" required></div><div class="form-field"><label>Temperatura da massa · °C</label><input name="mass_temp_c" type="number" step="0.1" value="44.0" required></div><div class="form-field"><label>Operador</label><select name="operator"><option>Carlos Mendes</option><option>Paulo Nunes</option><option>Rafael Souza</option></select></div><div class="form-field"><label>Situação</label><select name="reading_status"><option>Normal</option><option>Atenção</option><option>Pausa</option><option>Ajuste realizado</option></select></div><div class="form-field full"><label>Anotação da leitura</label><textarea name="notes" placeholder="Ajuste de temperatura, fluxo de ar, cheiro, cor, pausa ou outra observação"></textarea></div></div>`
  },
  dryer_close: {
    eyebrow: 'CAFÉ · ENCERRAMENTO DO SECADOR', title: 'Encerrar ciclo de secagem', success: 'Secagem encerrada e indicadores calculados', activity: 'Ciclo de secagem concluído', icon: 'check',
    body: `<div class="form-grid"><div class="form-field"><label>Ciclo de secagem</label><select name="dryer_batch"><option>SEC-042 · TER-026</option><option>SEC-041 · TER-025</option><option>SEC-040 · TER-023</option></select></div><div class="form-field"><label>Destino após secagem</label><select name="destination"><option>Tulha 01</option><option>Tulha 02</option><option>Tulha 04</option><option>Beneficiamento</option></select></div><div class="form-field"><label>Início</label><input name="start_at" type="datetime-local" value="2026-07-17T11:20" required></div><div class="form-field"><label>Fim</label><input name="end_at" type="datetime-local" value="2026-07-17T23:20" required></div><div class="form-field"><label>Tempo de secagem · h</label><input name="hours" type="number" step="0.01" value="12.00" readonly></div><div class="form-field"><label>Umidade de saída · %</label><input name="exit_moisture_pct" type="number" step="0.1" value="11.8" required></div><div class="form-field"><label>Temperatura média do ar · °C</label><input name="air_temp_avg_c" type="number" step="0.1" value="79.2"></div><div class="form-field"><label>Temperatura média da massa · °C</label><input name="mass_temp_avg_c" type="number" step="0.1" value="43.8"></div><div class="form-field"><label>Volume final · L</label><input name="exit_volume_l" type="number" step="0.1"></div><div class="form-field"><label>Responsável</label><input name="responsible" value="Carlos Mendes"></div><div class="form-field full"><label>Anotações finais</label><textarea name="notes" placeholder="Uniformidade, ajustes realizados, qualidade, ocorrência e recomendação para o próximo ciclo"></textarea></div><div class="form-field full"><div class="form-note">${icon('trending')}Ao encerrar, o Gefaz360 calcula perda total de umidade, pontos percentuais por hora e preserva a curva horária para comparação entre lotes.</div></div></div>`
  },
  coffee_hours: {
    eyebrow: 'CAFÉ · COLHEITA MECANIZADA', title: 'Registrar horas de colhedora', success: 'Horas registradas', activity: 'Jornada de colhedora registrada', icon: 'tractor',
    body: `<div class="form-grid"><div class="form-field"><label>Máquina</label><select name="asset"><option>Case 8250</option><option>Case 7700</option><option>Jacto K3</option><option>MIAC Master</option></select></div><div class="form-field"><label>Propriedade</label><select name="ownership"><option>Própria</option><option>Terceirizada</option></select></div><div class="form-field"><label>Prestador, se terceirizada</label><input name="provider" placeholder="Razão social / equipe"></div><div class="form-field"><label>Método</label><select name="metodo"><option>Mecanizada de árvore</option><option>Mecanizada de chão</option></select></div><div class="form-field"><label>Talhão</label><select name="talhao"><option>C-07 · Boa Esperança</option><option>C-04 · Lavoura Sede</option><option>C-12 · Pedra Branca</option><option>C-02 · Vargem</option></select></div><div class="form-field"><label>Operador</label><input name="operador" placeholder="Nome do operador" required></div><div class="form-field"><label>Início</label><input name="start_at" type="datetime-local" value="2026-07-17T07:00" required></div><div class="form-field"><label>Fim</label><input name="end_at" type="datetime-local" value="2026-07-17T15:30" required></div><div class="form-field"><label>Horímetro inicial</label><input name="meter_start" type="number" step="0.1" value="992.0"></div><div class="form-field"><label>Horímetro final</label><input name="meter_end" type="number" step="0.1" value="1000.5"></div><div class="form-field"><label>Horas líquidas</label><input name="hours" type="number" step="0.01" value="8.50" readonly></div><div class="form-field"><label>Área colhida · ha</label><input name="area_ha" type="number" step="0.01" required></div><div class="form-field full"><label>Paradas / observações</label><textarea name="notes" placeholder="Abastecimento, manutenção, chuva ou deslocamento"></textarea></div></div>`
  },
  harvest_settings: {
    eyebrow: 'CAFÉ · REGULAGEM MECANIZADA', title: 'Salvar regulagem de colheita', success: 'Regulagem versionada', activity: 'Nova regulagem de colheita mecanizada salva', icon: 'gauge',
    body: `<div class="form-grid"><div class="form-field"><label>Método</label><select name="metodo"><option>Colheita de árvore</option><option>Colheita de chão</option></select></div><div class="form-field"><label>Máquina</label><select name="asset"><option>Case 8250 · Própria</option><option>Case 7700 · Própria</option><option>Jacto K3 · Terceirizada</option><option>MIAC Master · Terceirizada</option></select></div><div class="form-field"><label>Talhão</label><select name="talhao"><option>C-07 · Boa Esperança</option><option>C-04 · Lavoura Sede</option><option>C-12 · Pedra Branca</option><option>C-02 · Vargem</option></select></div><div class="form-field"><label>Responsável técnico</label><input name="responsavel" value="Ana Ribeiro" required></div><div class="form-field"><label>Velocidade · km/h</label><input name="speed_kmh" type="number" step="0.01" value="1.20" required></div><div class="form-field"><label>RPM do motor</label><input name="engine_rpm" type="number" step="1" value="2100" required></div><div class="form-field"><label>Vibração / escovas · rpm</label><input name="harvester_rpm" type="number" step="1" value="850"></div><div class="form-field"><label>Ventilador / exaustor · rpm</label><input name="cleaning_rpm" type="number" step="1" value="1650"></div><div class="form-field"><label>Abertura de varetas · mm</label><input name="rod_gap_mm" type="number" step="0.1" value="28"></div><div class="form-field"><label>Abertura de peneira · mm</label><input name="screen_gap_mm" type="number" step="0.1" placeholder="Usado na colheita de chão"></div><div class="form-field full"><label>Condição e observações</label><textarea name="notes" placeholder="Carga pendente, umidade do chão, maturação e perdas observadas"></textarea></div><div class="form-field full"><div class="form-note">${icon('clipboard')}A regulagem fica versionada. Alterações futuras criam uma nova versão sem modificar o histórico ligado às horas e ao volume colhido.</div></div></div>`
  },
  spray_params: {
    eyebrow: 'PVGEST · PARÂMETROS', title: 'Salvar parâmetros de aplicação', success: 'Parâmetros salvos', activity: 'Novo preset de pulverização salvo', icon: 'droplet',
    body: `<div class="form-grid"><div class="form-field"><label>Equipamento</label><select name="equipamento"><option>Uniport 3030</option><option>John Deere 4730</option><option>Imperador 3000</option></select></div><div class="form-field"><label>Receita / alvo</label><select name="receita"><option>Fungicida F-12 · Ferrugem</option><option>Herbicida H-08 · Folhas largas</option><option>Nutrição N-04 · Foliar</option></select></div><div class="form-field"><label>Velocidade · km/h</label><input name="speed_kmh" type="number" step="0.1" value="14.8" required></div><div class="form-field"><label>Rotação do motor · rpm</label><input name="engine_rpm" type="number" step="1" value="2000" required></div><div class="form-field"><label>Modelo do bico</label><input name="nozzle_model" value="AI 11002" required></div><div class="form-field"><label>Quantidade de bicos</label><input name="nozzle_count" type="number" min="1" step="1" value="36" required></div><div class="form-field"><label>Vazão por hectare · L/ha</label><input name="rate_l_ha" type="number" step="0.1" value="142" required></div><div class="form-field"><label>Vazão por bico · L/min</label><input name="nozzle_flow_l_min" type="number" step="0.01" value="0.58" required></div><div class="form-field"><label>Pressão · bar</label><input name="pressure_bar" type="number" step="0.1" value="3.2"></div><div class="form-field"><label>Espaçamento entre bicos · cm</label><input name="nozzle_spacing_cm" type="number" step="0.1" value="50"></div><div class="form-field full"><label>Observações técnicas</label><textarea name="notes" placeholder="Ponta, malha, pressão, alvo e condição de calibração"></textarea></div><div class="form-field full"><div class="form-note">${icon('shield')}O preset pode ser reutilizado, mas a aplicação preserva uma cópia dos parâmetros efetivamente usados para manter a rastreabilidade.</div></div></div>`
  },
  grains: {
    eyebrow: 'EXPEDIÇÃO DE GRÃOS', title: 'Registrar saída', success: 'Saída registrada', activity: 'Nova carga de grãos liberada', icon: 'truck',
    body: `<div class="form-grid"><div class="form-field"><label>Cultura</label><select name="cultura"><option>Milho</option><option>Soja</option><option>Sorgo</option><option>Trigo</option></select></div><div class="form-field"><label>Data e hora</label><input name="data" type="datetime-local" value="2026-07-16T18:45" required></div><div class="form-field"><label>Placa do veículo</label><input name="placa" placeholder="ABC-1D23" required></div><div class="form-field"><label>Motorista</label><input name="motorista" placeholder="Nome completo" required></div><div class="form-field"><label>Peso bruto · kg</label><input name="bruto" type="number" required></div><div class="form-field"><label>Tara · kg</label><input name="tara" type="number" required></div><div class="form-field full"><label>Destino / contrato</label><select name="destino"><option>Cooperativa Vale Verde · MIL-2026-04</option><option>Cargill Uberlândia · MIL-2026-07</option><option>Bunge Araguari · SOJ-2026-02</option><option>Granja Horizonte · SOR-2026-03</option><option>Moinho Triângulo · TRI-2026-02</option></select></div></div>`
  },
  grain_cover: {
    eyebrow: 'CULTURAS DE COBERTURA', title: 'Registrar implantação', success: 'Implantação registrada', activity: 'Nova implantação de cultura de cobertura registrada', icon: 'sprout',
    body: `<div class="form-grid"><div class="form-field"><label>Data e hora</label><input name="data" type="datetime-local" value="2026-07-17T08:00" required></div><div class="form-field"><label>Talhão</label><select name="talhao"><option>C-07 · Boa Esperança</option><option>C-04 · Lavoura Sede</option><option>C-12 · Pedra Branca</option><option>C-02 · Vargem</option></select></div><div class="form-field full"><label>Espécie ou mix</label><select name="mix"><option>Mix 03 · braquiária + milheto + crotalária</option><option>Braquiária ruziziensis</option><option>Milheto</option><option>Crotalária spectabilis</option><option>Nabo forrageiro + aveia</option></select></div><div class="form-field"><label>Lote de sementes</label><input name="seed_lot" value="SEM-2049" required></div><div class="form-field"><label>Área implantada · ha</label><input name="area_ha" type="number" step="0.01" required></div><div class="form-field"><label>Dose de sementes · kg/ha</label><input name="seed_rate_kg_ha" type="number" step="0.1" value="25.0" required></div><div class="form-field"><label>Equipamento</label><select name="equipamento"><option>Plantadeira JD 2117</option><option>Semeadora Tatu PST4</option><option>Distribuidor Hércules</option></select></div><div class="form-field"><label>Operador</label><select name="operador"><option>Carlos Mendes</option><option>Paulo Nunes</option><option>Rafael Souza</option><option>Marcos Oliveira</option></select></div><div class="form-field"><label>Custo previsto · R$/ha</label><input name="cost_ha" type="number" step="0.01" value="430.00"></div><div class="form-field full"><label>Objetivo agronômico e observações</label><textarea name="notes" placeholder="Cobertura de solo, palhada, descompactação, fixação de nitrogênio ou manejo de nematoides"></textarea></div><div class="form-field full"><div class="form-note">${icon('clipboard')}O registro mantém espécie ou composição do mix, lote, dose, área e custo por talhão para avaliar implantação e resultado agronômico.</div></div></div>`
  },
  loads: null,
  finance: {
    eyebrow: 'FINANCEIRO', title: 'Novo lançamento', success: 'Lançamento criado', activity: 'Novo lançamento financeiro salvo', icon: 'wallet',
    body: `<div class="form-grid"><div class="form-field"><label>Tipo</label><select name="tipo"><option>Conta a pagar</option><option>Conta a receber</option><option>Transferência</option></select></div><div class="form-field"><label>Competência</label><input name="competencia" type="date" value="2026-07-16" required></div><div class="form-field full"><label>Descrição</label><input name="descricao" placeholder="Descrição do lançamento" required></div><div class="form-field"><label>Centro de custo</label><select name="centro"><option>Café · colheita</option><option>Milho · comercial</option><option>Soja · produção</option><option>Oficina</option><option>Administração</option></select></div><div class="form-field"><label>Valor</label><input name="valor" type="number" step="0.01" placeholder="R$ 0,00" required></div><div class="form-field"><label>Vencimento</label><input name="vencimento" type="date" required></div><div class="form-field"><label>Fornecedor / cliente</label><input name="terceiro" placeholder="Razão social"></div></div>`
  },
  people: {
    eyebrow: 'PESSOAS & RH', title: 'Novo colaborador', success: 'Colaborador cadastrado', activity: 'Novo colaborador incluído no RH', icon: 'user',
    body: `<div class="form-grid"><div class="form-field full"><label>Nome completo</label><input name="nome" required></div><div class="form-field"><label>CPF</label><input name="cpf" placeholder="000.000.000-00" required></div><div class="form-field"><label>Data de admissão</label><input name="admissao" type="date" value="2026-07-16"></div><div class="form-field"><label>Função</label><select name="funcao"><option>Colhedor(a)</option><option>Tratorista</option><option>Mecânico(a)</option><option>Motorista</option><option>Administrativo</option></select></div><div class="form-field"><label>Equipe</label><select name="equipe"><option>Equipe 02</option><option>Equipe 03</option><option>Equipe 05</option><option>Equipe 07</option><option>Oficina</option></select></div><div class="form-field full"><div class="form-note">${icon('shield')}Dados pessoais devem respeitar perfis de acesso, retenção mínima e registro de consentimento conforme a LGPD.</div></div></div>`
  },
  workshop: {
    eyebrow: 'OFICINA', title: 'Nova ordem de serviço', success: 'Ordem de serviço criada', activity: 'Nova OS aberta na oficina', icon: 'wrench',
    body: `<div class="form-grid"><div class="form-field"><label>Máquina / ativo</label><select name="ativo"><option>Colheitadeira Case 8250</option><option>Trator JD 7230J</option><option>Trator MF 6713</option><option>Pulverizador Uniport 3030</option><option>Caminhão Volvo VM 330</option></select></div><div class="form-field"><label>Tipo</label><select name="tipo"><option>Corretiva</option><option>Preventiva</option><option>Inspeção</option><option>Melhoria</option></select></div><div class="form-field full"><label>Serviço solicitado</label><input name="servico" placeholder="Descreva de forma objetiva" required></div><div class="form-field"><label>Prioridade</label><select name="prioridade"><option>Alta</option><option>Média</option><option>Baixa</option></select></div><div class="form-field"><label>Previsão</label><input name="previsao" type="date" value="2026-07-17"></div><div class="form-field full"><label>Diagnóstico inicial</label><textarea name="diagnostico" placeholder="Sintomas, código de falha ou condição observada"></textarea></div></div>`
  },
  meter_reading: {
    eyebrow: 'ATIVOS · HORÍMETRO', title: 'Registrar leitura do ativo', success: 'Leitura registrada', activity: 'Nova leitura de horímetro ou odômetro registrada', icon: 'gauge',
    body: `<div class="form-grid"><div class="form-field"><label>Ativo</label><select name="asset"><option>Case 8250</option><option>Case 7700</option><option>John Deere 7230J</option><option>Uniport 3030</option><option>Volvo VM 330</option></select></div><div class="form-field"><label>Tipo de medidor</label><select name="meter_type"><option>Horímetro · h</option><option>Odômetro · km</option></select></div><div class="form-field"><label>Data e hora</label><input name="read_at" type="datetime-local" value="2026-07-17T18:30" required></div><div class="form-field"><label>Leitura</label><input name="reading" type="number" step="0.1" required></div><div class="form-field"><label>Origem</label><select name="source"><option>Leitura manual</option><option>Abastecimento</option><option>Telemetria</option><option>Ordem de serviço</option></select></div><div class="form-field"><label>Responsável</label><input name="responsible" value="Mariana Alves"></div><div class="form-field full"><label>Anotação</label><textarea name="notes" placeholder="Foto do painel, troca do medidor, divergência ou observação"></textarea></div></div>`
  },
  maintenance_reminder: {
    eyebrow: 'OFICINA · PREVENTIVA', title: 'Criar lembrete de manutenção', success: 'Lembrete programado', activity: 'Novo lembrete preventivo criado', icon: 'clock',
    body: `<div class="form-grid"><div class="form-field"><label>Ativo</label><select name="asset"><option>Case 8250</option><option>Case 7700</option><option>John Deere 7230J</option><option>Uniport 3030</option><option>Volvo VM 330</option></select></div><div class="form-field"><label>Tipo de manutenção</label><select name="maintenance_type"><option>Troca de óleo do motor</option><option>Óleo hidráulico</option><option>Troca de filtros</option><option>Lubrificação geral</option><option>Correias e tensionadores</option><option>Calibração</option><option>Inspeção periódica</option><option>Outro</option></select></div><div class="form-field"><label>Leitura atual</label><input name="current_meter" type="number" step="0.1"></div><div class="form-field"><label>Unidade do medidor</label><select name="meter_unit"><option>h</option><option>km</option></select></div><div class="form-field"><label>Vencer no horímetro / odômetro</label><input name="due_meter" type="number" step="0.1"></div><div class="form-field"><label>Vencer na data</label><input name="due_date" type="date" value="2026-07-23"></div><div class="form-field"><label>Avisar com antecedência</label><input name="warning_threshold" type="number" step="0.1" value="20"></div><div class="form-field"><label>Unidade do aviso</label><select name="warning_unit"><option>horas</option><option>quilômetros</option><option>dias</option></select></div><div class="form-field full"><label>Peças, óleo e materiais previstos</label><input name="materials" placeholder="Ex.: 28 L óleo 15W40 + filtros de óleo e combustível"></div><div class="form-field full"><label>Anotações e instruções</label><textarea name="notes" placeholder="Cuidados, sintomas observados, agendamento, fornecedor ou dependência operacional"></textarea></div><div class="form-field full"><div class="form-note">${icon('alert')}O primeiro limite atingido — data ou medidor — gera o alerta. A anotação permanece visível até a conclusão da manutenção.</div></div></div>`
  },
  fuel_dispense: {
    eyebrow: 'COMBUSTÍVEIS · ABASTECIMENTO', title: 'Registrar abastecimento', success: 'Abastecimento registrado', activity: 'Novo abastecimento vinculado ao ativo e horímetro', icon: 'fuel',
    body: `<div class="form-grid"><div class="form-field"><label>Data e hora</label><input name="occurred_at" type="datetime-local" value="2026-07-17T18:30" required></div><div class="form-field"><label>Tanque de origem</label><select name="tank"><option>Tanque 01 · Diesel S10</option><option>Tanque 02 · Diesel S500</option><option>Tanque 03 · Arla 32</option></select></div><div class="form-field"><label>Ativo abastecido</label><select name="asset"><option>Case 8250</option><option>Case 7700</option><option>John Deere 7230J</option><option>Uniport 3030</option><option>Volvo VM 330</option></select></div><div class="form-field"><label>Combustível</label><select name="fuel_type"><option>Diesel S10</option><option>Diesel S500</option><option>Arla 32</option><option>Gasolina</option></select></div><div class="form-field"><label>Quantidade · L</label><input name="quantity_l" type="number" step="0.01" required></div><div class="form-field"><label>Horímetro / odômetro</label><input name="meter_reading" type="number" step="0.1" required></div><div class="form-field"><label>Tipo de medidor</label><select name="meter_type"><option>Horímetro · h</option><option>Odômetro · km</option></select></div><div class="form-field"><label>Operador</label><select name="operator"><option>Carlos Mendes</option><option>Paulo Nunes</option><option>Rafael Souza</option><option>Marcos Oliveira</option></select></div><div class="form-field"><label>Frente / local</label><input name="location" placeholder="Oficina, lavoura ou ponto móvel"></div><div class="form-field"><label>Contador da bomba · L</label><input name="pump_meter_l" type="number" step="0.01"></div><div class="form-field full"><label>Observação</label><textarea name="notes" placeholder="Abastecimento parcial, vazamento, divergência ou condição do medidor"></textarea></div><div class="form-field full"><div class="form-note">${icon('gauge')}A leitura registrada atualiza o histórico do ativo e permite calcular litros por hora entre abastecimentos válidos.</div></div></div>`
  },
  fuel_receipt: {
    eyebrow: 'COMBUSTÍVEIS · ENTRADA', title: 'Registrar entrada de combustível', success: 'Entrada registrada', activity: 'Nova entrada de combustível adicionada ao tanque', icon: 'download',
    body: `<div class="form-grid"><div class="form-field"><label>Data e hora</label><input name="received_at" type="datetime-local" value="2026-07-17T14:00" required></div><div class="form-field"><label>Tanque de destino</label><select name="tank"><option>Tanque 01 · Diesel S10</option><option>Tanque 02 · Diesel S500</option><option>Tanque 03 · Arla 32</option></select></div><div class="form-field full"><label>Fornecedor</label><input name="supplier" placeholder="Razão social" required></div><div class="form-field"><label>NF-e</label><input name="invoice_number" placeholder="Número / série" required></div><div class="form-field"><label>Combustível</label><select name="fuel_type"><option>Diesel S10</option><option>Diesel S500</option><option>Arla 32</option></select></div><div class="form-field"><label>Quantidade recebida · L</label><input name="quantity_l" type="number" step="0.01" required></div><div class="form-field"><label>Preço unitário · R$/L</label><input name="unit_cost" type="number" step="0.0001" required></div><div class="form-field"><label>Densidade conferida</label><input name="density" type="number" step="0.0001" placeholder="kg/L"></div><div class="form-field"><label>Volume antes · L</label><input name="stock_before_l" type="number" step="0.01"></div><div class="form-field"><label>Volume após · L</label><input name="stock_after_l" type="number" step="0.01"></div><div class="form-field full"><label>Responsável e observações</label><textarea name="notes" placeholder="Lacre, temperatura, amostra, divergência ou ocorrência no recebimento"></textarea></div></div>`
  },
  fuel_count: {
    eyebrow: 'COMBUSTÍVEIS · MEDIÇÃO', title: 'Conferir saldo físico do tanque', success: 'Medição registrada', activity: 'Nova medição física de combustível registrada', icon: 'scale',
    body: `<div class="form-grid"><div class="form-field"><label>Tanque</label><select name="tank"><option>Tanque 01 · Diesel S10</option><option>Tanque 02 · Diesel S500</option><option>Tanque 03 · Arla 32</option></select></div><div class="form-field"><label>Data e hora</label><input name="measured_at" type="datetime-local" value="2026-07-17T18:30" required></div><div class="form-field"><label>Volume físico · L</label><input name="physical_volume_l" type="number" step="0.01" required></div><div class="form-field"><label>Temperatura · °C</label><input name="temperature_c" type="number" step="0.1"></div><div class="form-field"><label>Método</label><select name="method"><option>Régua de medição</option><option>Sensor do tanque</option><option>Medidor eletrônico</option></select></div><div class="form-field"><label>Responsável</label><input name="responsible" value="Mariana Alves"></div><div class="form-field full"><label>Observação da conferência</label><textarea name="notes" placeholder="Nível, água no fundo, lacre, vazamento ou ajuste necessário"></textarea></div></div>`
  },
  inventory: {
    eyebrow: 'ESTOQUE', title: 'Nova movimentação', success: 'Movimentação registrada', activity: 'Movimentação de estoque registrada', icon: 'package',
    body: `<div class="form-grid"><div class="form-field"><label>Operação</label><select name="operacao"><option>Saída para OS</option><option>Entrada por compra</option><option>Transferência</option><option>Ajuste de inventário</option><option>Empréstimo de ferramenta</option></select></div><div class="form-field"><label>Data e hora</label><input name="data" type="datetime-local" value="2026-07-16T18:45"></div><div class="form-field full"><label>Item</label><select name="item"><option>ROL-6208 · Rolamento 6208 2RS</option><option>FIL-JD500 · Kit filtros JD 500h</option><option>OLE-15W40 · Óleo motor 15W40</option><option>PAR-M12X40 · Parafuso M12 × 40</option></select></div><div class="form-field"><label>Quantidade</label><input name="quantidade" type="number" step="0.01" required></div><div class="form-field"><label>OS / destino</label><input name="destino" placeholder="#OS-188"></div><div class="form-field full"><div class="form-note">${icon('link')}Saídas para manutenção exigem vínculo com uma OS; isso preserva o custo completo por máquina.</div></div></div>`
  },
  pvgest: {
    eyebrow: 'CENTRAL PVGEST', title: 'Importar lote', success: 'Lote enviado para validação', activity: 'Lote do PVGest importado', icon: 'sync',
    body: `<div class="form-grid"><div class="form-field full"><label>Origem</label><select name="origem"><option>Arquivo exportado do PVGest atual</option><option>Receitas agronômicas</option><option>Aplicações executadas</option><option>Perfis e equipamentos</option></select></div><div class="form-field full"><label>Arquivo</label><input name="arquivo" type="file" accept=".csv,.xlsx,.json"></div><div class="form-field"><label>Competência inicial</label><input name="inicio" type="date" value="2026-07-16"></div><div class="form-field"><label>Competência final</label><input name="fim" type="date" value="2026-07-16"></div><div class="form-field full"><div class="form-note">${icon('alert')}O arquivo passa por validação de formato, duplicidade, talhão, pessoa, equipamento e produto antes de alimentar o Gefaz360.</div></div></div>`
  }
};
forms.loads = forms.grains;
forms.fuel = forms.fuel_dispense;
forms.soil = forms.soil_analysis;

function registerPrototypeForm(key, eyebrow, title, success, activity, iconName, body) {
  forms[key] = {eyebrow:eyebrow,title:title,success:success,activity:activity,icon:iconName,body:body};
}

registerPrototypeForm('whatsapp_entry','CAMPO CONECTADO · WHATSAPP','Revisar entrada assistida','Entrada confirmada','Entrada do WhatsApp revisada e confirmada','message','<div class=form-grid><div class=form-field><label>Remetente</label><input name=sender value=Carlos-Mendes required></div><div class=form-field><label>Formato</label><select name=media_type><option>Áudio</option><option>Texto</option><option>Foto</option><option>Documento</option></select></div><div class=form-field><label>Data e hora</label><input name=received_at type=datetime-local value=2026-07-25T10:42 required></div><div class=form-field><label>Número autorizado</label><input name=phone value=+55-34-99999-0042 required></div><div class=form-field full><label>Mensagem / transcrição</label><textarea name=transcript>Case 8250 abastecida com 312 litros. Horímetro 1842,6. Talhão C-07.</textarea></div><div class=form-field><label>Tipo de registro extraído</label><select name=record_type><option>Abastecimento</option><option>Observação MIP</option><option>Produção</option><option>Horímetro</option><option>Manutenção</option></select></div><div class=form-field><label>Confiança da extração · %</label><input name=confidence_pct type=number min=0 max=100 value=96></div><div class=form-field full><label>Dados estruturados para conferência</label><textarea name=structured_draft>Ativo: Case 8250; quantidade: 312 L; horímetro: 1842,6 h; talhão: C-07</textarea></div><div class=form-field full><label>Evidência</label><input name=media type=file accept=audio/*,image/*,.pdf></div><div class=form-note>Nenhum dado definitivo é criado pela IA. Este formulário exige revisão humana, identifica quem confirmou e preserva mensagem, mídia e extração para auditoria.</div></div>');

registerPrototypeForm('field_observation','MAPA & MIP','Registrar observação georreferenciada','Observação registrada','Novo ponto de campo com GPS e evidências','map','<div class=form-grid><div class=form-field><label>Talhão</label><select name=plot>'+agronomicPlotOptions+'</select></div><div class=form-field><label>Data e hora</label><input name=observed_at type=datetime-local value=2026-07-25T11:00 required></div><div class=form-field><label>Latitude</label><input name=latitude type=number step=0.000001 value=-20.7112 required></div><div class=form-field><label>Longitude</label><input name=longitude type=number step=0.000001 value=-46.6158 required></div><div class=form-field><label>Tipo</label><select name=observation_type><option>Praga ou doença</option><option>Falha de stand</option><option>Erosão</option><option>Encharcamento</option><option>Planta daninha</option><option>Outro</option></select></div><div class=form-field><label>Severidade</label><select name=severity><option>Baixa</option><option>Média</option><option>Alta</option><option>Crítica</option></select></div><div class=form-field full><label>Fotos com GPS</label><input name=photos type=file accept=image/* multiple></div><div class=form-field full><label>Observações</label><textarea name=notes></textarea></div></div>');

registerPrototypeForm('map_import','MAPA & MIP · IMPORTAÇÃO','Importar mapa ou configurar conexão','Mapa validado para importação','Nova fonte cartográfica validada e registrada','upload','<div class=form-stack><div class=form-section><div class=form-section-head><strong>Origem do mapa</strong><span>Arquivo ou conexão direta</span></div><div class=form-grid><div class=form-field><label>Fonte</label><select name=source_type data-map-source><option value=FILE>Arquivo KML, KMZ ou geodados</option><option value=GOOGLE_EARTH>Google Earth · link KML/KMZ</option><option value=QGIS_SERVICE>QGIS · WFS ou QGIS Server</option><option value=QGIS_PROJECT>QGIS · pacote de projeto</option></select></div><div class=form-field><label>Identificação</label><input name=import_name value=Mapa-safra-2025-26 required></div></div></div><div class=form-section data-source-group=FILE><div class=form-section-head><strong>Arquivo cartográfico</strong><span>Leitura local do KML antes do envio</span></div><div class=form-grid><div class=form-field full><label>Arquivo</label><input name=map_file type=file accept=.kml,.kmz,.geojson,.json,.gpkg,.qgz,.zip></div><div class=form-note>KML é analisado no navegador para contar Placemark, pontos, linhas e polígonos. KMZ, GeoPackage e pacotes QGIS seguem para processamento no servidor central.</div></div></div><div class=form-section data-source-group=GOOGLE_EARTH><div class=form-section-head><strong>Google Earth</strong><span>Network Link ou arquivo publicado</span></div><div class=form-grid><div class=form-field full><label>URL KML/KMZ publicada</label><input name=google_earth_url type=url placeholder=https://exemplo.com/projeto.kml></div><div class=form-field><label>Atualização</label><select name=google_refresh_mode><option>Importar uma vez</option><option>Sincronizar diariamente</option><option>Sincronizar a cada hora</option></select></div><div class=form-field><label>Autorização</label><select name=google_auth_mode><option>Link público ou assinado</option><option>Google Drive · credencial futura</option></select></div><div class=form-note>Projetos privados do Google Earth exigem exportação KML/KMZ ou autorização por Google Drive. O Gefaz360 nunca solicita a senha pessoal do usuário.</div></div></div><div class=form-section data-source-group=QGIS_SERVICE><div class=form-section-head><strong>QGIS por serviço</strong><span>WFS ou QGIS Server publicado</span></div><div class=form-grid><div class=form-field full><label>URL do serviço</label><input name=qgis_service_url type=url placeholder=https://geo.exemplo.com/qgisserver></div><div class=form-field><label>Protocolo</label><select name=qgis_service_type><option>WFS 2.0</option><option>WFS 1.1</option><option>QGIS Server</option></select></div><div class=form-field><label>Camada</label><input name=qgis_layer_name placeholder=fazenda:talhoes></div><div class=form-field><label>Usuário técnico</label><input name=qgis_service_user autocomplete=off></div><div class=form-field><label>Referência da credencial</label><input name=qgis_credential_ref placeholder=cofre/qgis-fazenda></div><div class=form-note>A senha ou token deve ficar no cofre do servidor. O navegador salva somente a referência segura da credencial.</div></div></div><div class=form-section data-source-group=QGIS_PROJECT><div class=form-section-head><strong>Pacote QGIS</strong><span>Projeto e dados portáveis</span></div><div class=form-grid><div class=form-field full><label>Arquivo QGZ, GeoPackage ou ZIP</label><input name=qgis_project_file type=file accept=.qgz,.gpkg,.zip,.qml></div><div class=form-field full><label>Camadas a importar</label><input name=qgis_project_layers placeholder=talhoes-zonas-mip-carreadores></div></div></div><div class=form-section><div class=form-section-head><strong>Validação e destino</strong><span>Nada substitui o mapa antes da conferência</span></div><div class=form-grid><div class=form-field><label>CRS de origem</label><input name=source_crs value=EPSG:4326></div><div class=form-field><label>CRS de destino</label><input name=target_crs value=EPSG:4326 readonly></div><div class=form-field><label>Destino das feições</label><select name=import_target><option>Limites de talhão</option><option>Observações MIP</option><option>Zonas de manejo</option><option>Carreadores e infraestrutura</option><option>Camada agronômica</option></select></div><div class=form-field><label>Duplicidades</label><select name=duplicate_strategy><option>Pré-visualizar e decidir</option><option>Atualizar pelo código</option><option>Criar nova versão</option><option>Ignorar existentes</option></select></div><div class=form-field><label>Geometrias inválidas</label><select name=invalid_geometry_strategy><option>Bloquear importação</option><option>Tentar corrigir e revisar</option><option>Ignorar com relatório</option></select></div><div class=form-field><label>Estilos QGIS / KML</label><select name=style_strategy><option>Importar quando compatível</option><option>Usar padrão Gefaz360</option><option>Não importar estilos</option></select></div><div class=form-field full><label>Mapeamento de atributos</label><textarea name=attribute_mapping>codigo → código do talhão; nome → nome; area_ha → área; cultura → cultura</textarea></div><div class=form-field full><label>Pré-validação</label><textarea name=import_summary readonly>Aguardando arquivo ou configuração da fonte.</textarea></div><div class=form-note>O sistema valida CRS, geometrias, área, sobreposição, códigos duplicados e atributos obrigatórios. A importação confirmada gera nova versão e preserva o mapa anterior.</div></div></div></div>');
forms.map_import.body = forms.map_import.body
  .replace('KMZ, GeoPackage e pacotes QGIS seguem para processamento no servidor central.','KMZ, GeoJSON, GeoPackage e pacotes QGIS exigem a futura API central e não são importados neste protótipo.')
  .replace('O sistema valida CRS, geometrias, área, sobreposição, códigos duplicados e atributos obrigatórios. A importação confirmada gera nova versão e preserva o mapa anterior.','A versão produtiva validará CRS, geometrias, área, sobreposição, códigos e atributos. Neste protótipo, somente KML compatível é lido e persistido localmente.');

registerPrototypeForm('mip_scout','MONITORAMENTO INTEGRADO DE PRAGAS','Nova avaliação MIP','Avaliação MIP registrada','Amostragem MIP vinculada ao talhão e zona','clipboard','<div class=form-grid><div class=form-field><label>Talhão</label><select name=plot>'+agronomicPlotOptions+'</select></div><div class=form-field><label>Zona</label><input name=zone value=Z03></div><div class=form-field><label>Alvo</label><select name=target><option>Bicho-mineiro</option><option>Cercosporiose</option><option>Ferrugem</option><option>Broca</option></select></div><div class=form-field><label>Método amostral</label><input name=method value=30-pontos-por-zona></div><div class=form-field><label>Pontos avaliados</label><input name=sample_count type=number value=30></div><div class=form-field><label>Incidência · %</label><input name=incidence_pct type=number step=0.1 value=12.4></div><div class=form-field><label>Nível de ação · %</label><input name=action_threshold_pct type=number step=0.1 value=10></div><div class=form-field><label>Decisão</label><select name=decision><option>Gerar prescrição localizada</option><option>Monitorar</option><option>Abrir recomendação</option></select></div><div class=form-field full><label>Anotações</label><textarea name=notes></textarea></div></div>');

registerPrototypeForm('localized_prescription','MAPA → PVGEST','Enviar prescrição localizada','Prescrição enviada ao PVGest','Prescrição localizada criada a partir de MIP e mapas','droplet','<div class=form-grid><div class=form-field><label>Talhão / zona</label><input name=plot_zone value=C-07-Z03 required></div><div class=form-field><label>Área · ha</label><input name=area_ha type=number step=0.01 value=7.6></div><div class=form-field><label>Base da decisão</label><select name=decision_basis><option>MIP + NDVI + solo</option><option>MIP</option><option>NDVI + produtividade</option></select></div><div class=form-field><label>Alvo</label><input name=target value=Cercosporiose></div><div class=form-field><label>Volume mínimo · L/ha</label><input name=volume_min_l_ha type=number value=180></div><div class=form-field><label>Volume máximo · L/ha</label><input name=volume_max_l_ha type=number value=240></div><div class=form-field full><label>Arquivo de zonas</label><input name=geometry_file type=file accept=.geojson,.json,.shp></div><div class=form-note>A prescrição entra no PVGest como rascunho e depende de assinatura do responsável técnico antes de ser enviada ao operador.</div></div>');

registerPrototypeForm('event_rule','AUTOMAÇÃO OPERACIONAL','Configurar regra de evento','Regra criada','Nova regra de eventos e impactos cadastrada','sync','<div class=form-grid><div class=form-field><label>Evento de origem</label><select name=source_event><option>Aplicação concluída</option><option>Abastecimento confirmado</option><option>Carga pesada</option><option>OS concluída</option><option>Recebimento de compra</option></select></div><div class=form-field><label>Aprovação exigida</label><select name=approval_required><option>Conforme valor e risco</option><option>Sempre</option><option>Não</option></select></div><div class=form-field full><label>Efeitos automáticos</label><textarea name=effects>Estoque; máquina e horímetro; combustível; custo; carência; caderno de campo; financeiro; alertas</textarea></div><div class=form-field><label>Alçada mínima · R$</label><input name=amount_threshold type=number step=0.01 value=10000></div><div class=form-field><label>Perfil aprovador</label><select name=approver_role><option>Gestor</option><option>Agrônomo</option><option>Financeiro</option><option>Compras</option></select></div><div class=form-note>Todo efeito grava o evento de origem, usuário, data, versão e eventual estorno para auditoria.</div></div>');

registerPrototypeForm('approval_review','APROVAÇÕES','Revisar solicitação','Decisão registrada','Solicitação revisada conforme alçada','check','<div class=form-grid><div class=form-field><label>Solicitação</label><input name=request_id value=APR-284 readonly></div><div class=form-field><label>Decisão</label><select name=decision><option>Aprovar</option><option>Rejeitar</option><option>Solicitar ajuste</option></select></div><div class=form-field full><label>Resumo dos impactos</label><textarea name=impact readonly>Compra de 6 kits de filtros; R$ 18.420,00; três cotações; estoque crítico; contas a pagar projetado.</textarea></div><div class=form-field full><label>Justificativa</label><textarea name=reason required></textarea></div></div>');

registerPrototypeForm('telemetry_plan','TELEMETRIA','Enviar plano à máquina','Plano enviado','Plano operacional enviado à máquina e ao operador','tractor','<div class=form-grid><div class=form-field><label>Integração</label><select name=provider><option>John Deere Operations Center</option><option>FieldView</option><option>Gateway Gefaz360</option></select></div><div class=form-field><label>Máquina</label><select name=asset><option>Case 8250</option><option>JD 7230J</option><option>Uniport 3030</option></select></div><div class=form-field><label>Talhão</label><select name=plot>'+agronomicPlotOptions+'</select></div><div class=form-field><label>Operação</label><select name=operation><option>Colheita</option><option>Pulverização</option><option>Adubação</option><option>Plantio</option></select></div><div class=form-field><label>Área planejada · ha</label><input name=planned_area_ha type=number step=0.01 value=42></div><div class=form-field><label>Operador</label><select name=operator><option>Carlos Mendes</option><option>Rafael Souza</option><option>Paulo Nunes</option></select></div><div class=form-field full><label>Arquivo / mapa de prescrição</label><input name=plan_file type=file accept=.json,.geojson,.zip></div></div>');

registerPrototypeForm('coffee_cva','QUALIDADE DO CAFÉ · CVA','Nova ficha Coffee Value Assessment','Ficha CVA registrada','Nova avaliação CVA vinculada ao lote','coffee','<div class=form-stack><div class=form-section><div class=form-section-head><strong>Identificação</strong><span>Lote e protocolo</span></div><div class=form-grid><div class=form-field><label>Lote</label><select name=lot><option>TER-025 · SEC-041</option><option>TER-023 · SEC-040</option></select></div><div class=form-field><label>Versão do protocolo</label><select name=protocol_version><option>CVA 2024</option><option>SCAA histórico</option></select></div><div class=form-field><label>Provador</label><input name=evaluator value=Ana-Ribeiro></div><div class=form-field><label>Data</label><input name=evaluated_at type=date value=2026-07-25></div></div></div><div class=form-section><div class=form-section-head><strong>Avaliação física</strong><span>Peneira, tipo e umidade</span></div><div class=form-grid><div class=form-field><label>Nota física</label><input name=physical_score type=number step=0.01 value=86.2></div><div class=form-field><label>Peneira 17+ · %</label><input name=screen_17_plus_pct type=number step=0.1 value=68.4></div></div></div><div class=form-section><div class=form-section-head><strong>Avaliação descritiva</strong><span>Atributos e intensidades</span></div><div class=form-grid><div class=form-field><label>Descritores</label><textarea name=descriptors>Chocolate, caramelo, laranja, floral</textarea></div><div class=form-field><label>Nota descritiva</label><input name=descriptive_score type=number step=0.1 value=8.6></div></div></div><div class=form-section><div class=form-section-head><strong>Afetiva e extrínseca</strong><span>Qualidade percebida e contexto de valor</span></div><div class=form-grid><div class=form-field><label>Nota afetiva</label><input name=affective_score type=number step=0.1 value=8.8></div><div class=form-field><label>Nota extrínseca</label><input name=extrinsic_score type=number step=0.1 value=9.1></div><div class=form-field full><label>Fatores extrínsecos</label><textarea name=extrinsic_factors>Origem, variedade, processo natural, sustentabilidade e rastreabilidade completa.</textarea></div></div></div></div>');

const lotMovementBody = '<div class=form-grid><div class=form-field><label>Tipo</label><select name=movement_type><option>Transferência</option><option>Desdobramento</option><option>Mistura</option><option>Estorno</option><option>Ajuste auditado</option></select></div><div class=form-field><label>Data e hora</label><input name=occurred_at type=datetime-local value=2026-07-25T11:30 required></div><div class=form-field><label>Lote(s) de origem</label><input name=source_lots value=LOT-026 required></div><div class=form-field><label>Lote(s) de destino</label><input name=destination_lots value=LOT-026A-LOT-026B></div><div class=form-field><label>Quantidade canônica · kg</label><input name=quantity_kg type=number step=0.001 value=5410 required></div><div class=form-field><label>Proprietário</label><select name=owner><option>Fazenda Boa Vista</option><option>Terceiro consignante</option></select></div><div class=form-field><label>Local de origem</label><input name=source_location value=Tulha-04></div><div class=form-field><label>Local de destino</label><input name=destination_location value=Tulhas-04-e-05></div><div class=form-field full><label>Documento / motivo</label><textarea name=reason required>Segregação por classificação de qualidade.</textarea></div><div class=form-field><label>Gerar QR</label><select name=generate_qr><option>Sim</option><option>Não</option></select></div><div class=form-field><label>Imprimir guia</label><select name=print_guide><option>A4 + térmica</option><option>A4</option><option>Térmica</option><option>Não</option></select></div><div class=form-note>Movimentos confirmados são imutáveis. Correções são feitas por estorno vinculado ao lançamento original.</div></div>';
registerPrototypeForm('lot_movement','CAFÉ · RAZÃO DE LOTES','Movimentar lote','Movimento confirmado','Movimentação física de café registrada','package',lotMovementBody);
registerPrototypeForm('lot_split','CAFÉ · RAZÃO DE LOTES','Desdobrar lote','Desdobramento confirmado','Lote desdobrado com genealogia preservada','package',lotMovementBody);
registerPrototypeForm('lot_mix','CAFÉ · RAZÃO DE LOTES','Misturar lotes','Mistura confirmada','Novo blend criado com origens preservadas','package',lotMovementBody);
registerPrototypeForm('lot_reverse','CAFÉ · RAZÃO DE LOTES','Estornar movimento','Estorno confirmado','Movimento de lote estornado com justificativa','sync',lotMovementBody);

registerPrototypeForm('fiscal_xml','FISCAL','Importar XML fiscal','XML validado','Documento fiscal importado e conciliado','upload','<div class=form-grid><div class=form-field full><label>Arquivo XML</label><input name=xml_file type=file accept=.xml multiple required></div><div class=form-field><label>Tipo esperado</label><select name=document_type><option>NF-e de entrada</option><option>CT-e</option><option>NF-e de saída</option></select></div><div class=form-field><label>Centro de custo padrão</label><select name=cost_center><option>Validar por item</option><option>Oficina</option><option>Safra café</option><option>Safra grãos</option></select></div><div class=form-note>Chave, CNPJ, itens, impostos, quantidades, preços, pedido e duplicidade são validados antes de estoque e contas a pagar.</div></div>');
registerPrototypeForm('fiscal_document','FISCAL OPERACIONAL','Emitir documento fiscal','Documento preparado','NF-e ou MDF-e preparado para autorização','receipt','<div class=form-grid><div class=form-field><label>Documento</label><select name=document_type><option>NF-e de produtor</option><option>MDF-e</option><option>Carta de correção</option></select></div><div class=form-field><label>Carga</label><select name=shipment><option>MIL-084</option><option>MIL-083</option><option>SOJ-126</option></select></div><div class=form-field><label>Contrato</label><select name=contract><option>MIL-2026-04</option><option>SOJ-2026-02</option></select></div><div class=form-field><label>Valor · R$</label><input name=total_amount type=number step=0.01 value=43454></div><div class=form-field full><label>Observações fiscais</label><textarea name=fiscal_notes></textarea></div></div>');
registerPrototypeForm('sales_contract','COMERCIAL','Novo contrato de venda','Contrato registrado','Contrato comercial adicionado à posição','coins','<div class=form-grid><div class=form-field><label>Cultura</label><select name=crop><option>Café</option><option>Milho</option><option>Soja</option><option>Sorgo</option><option>Trigo</option></select></div><div class=form-field><label>Modalidade</label><select name=pricing_type><option>Preço fixo</option><option>A fixar</option><option>Disponível</option><option>Bolsa + diferencial</option></select></div><div class=form-field full><label>Comprador</label><input name=buyer required></div><div class=form-field><label>Quantidade</label><input name=quantity type=number step=0.001 required></div><div class=form-field><label>Unidade</label><select name=unit><option>sc</option><option>kg</option><option>t</option></select></div><div class=form-field><label>Preço / fórmula</label><input name=price_formula></div><div class=form-field><label>Frete</label><select name=freight><option>FOB</option><option>CIF</option></select></div><div class=form-field><label>Adiantamento · R$</label><input name=advance_amount type=number step=0.01></div><div class=form-field><label>Retenções / descontos</label><input name=deductions></div><div class=form-field full><label>Condições de qualidade</label><textarea name=quality_terms></textarea></div></div>');
registerPrototypeForm('bank_reconciliation','FINANCEIRO','Importar extrato e conciliar','Conciliação preparada','Extrato bancário importado para conciliação','sync','<div class=form-grid><div class=form-field><label>Conta bancária</label><select name=bank_account><option>Banco Rural · 1842-6</option><option>Cooperativa · 991-2</option></select></div><div class=form-field><label>Período</label><input name=period type=month value=2026-07></div><div class=form-field full><label>Arquivo OFX / CSV</label><input name=statement_file type=file accept=.ofx,.csv required></div><div class=form-note>O sistema propõe correspondências por valor, data, documento e contraparte; divergências permanecem para aprovação.</div></div>');

registerPrototypeForm('purchase_request','COMPRAS','Nova solicitação de compra','Solicitação criada','Nova solicitação gerada a partir do estoque','package','<div class=form-grid><div class=form-field><label>Item</label><select name=item><option>FIL-JD500 · Kit filtros JD 500h</option><option>ROL-6208 · Rolamento 6208 2RS</option><option>OLE-15W40 · Óleo motor 15W40</option></select></div><div class=form-field><label>Quantidade</label><input name=quantity type=number step=0.01 value=6 required></div><div class=form-field><label>Necessidade até</label><input name=needed_at type=date value=2026-07-27></div><div class=form-field><label>Centro de custo</label><select name=cost_center><option>Oficina</option><option>Café</option><option>Grãos</option></select></div><div class=form-field full><label>Justificativa</label><textarea name=reason required>Estoque abaixo do mínimo e revisão programada.</textarea></div></div>');
registerPrototypeForm('purchase_quote','COMPRAS','Registrar três cotações','Cotações comparadas','Cotações vinculadas à solicitação','coins','<div class=form-grid><div class=form-field><label>Solicitação</label><input name=request_id value=SC-048></div><div class=form-field><label>Critério</label><select name=selection_criterion><option>Menor custo total</option><option>Melhor prazo</option><option>Melhor condição técnica</option></select></div><div class=form-field full><label>Fornecedor 1 · valor / prazo</label><input name=quote_1 value=Agro-Peças-Oeste-R$-18.420-2-dias></div><div class=form-field full><label>Fornecedor 2 · valor / prazo</label><input name=quote_2 value=Campo-Forte-R$-17.820-8-dias></div><div class=form-field full><label>Fornecedor 3 · valor / prazo</label><input name=quote_3 value=Minas-Agro-R$-19.460-entrega-hoje></div><div class=form-note>A escolha fora do menor custo exige justificativa e segue para a alçada configurada.</div></div>');
registerPrototypeForm('purchase_receipt','COMPRAS · RECEBIMENTO','Receber pedido e NF','Recebimento conferido','Pedido recebido e comparado com a nota','download','<div class=form-grid><div class=form-field><label>Pedido de compra</label><select name=purchase_order><option>PC-025</option><option>PC-022</option></select></div><div class=form-field><label>NF-e</label><input name=invoice_number required></div><div class=form-field><label>Quantidade pedida</label><input name=ordered_qty type=number step=0.01 value=12></div><div class=form-field><label>Quantidade recebida</label><input name=received_qty type=number step=0.01 value=13></div><div class=form-field><label>Preço pedido · R$</label><input name=ordered_price type=number step=0.01 value=2880></div><div class=form-field><label>Preço na NF · R$</label><input name=invoiced_price type=number step=0.01 value=3120></div><div class=form-field full><label>Tratamento da divergência</label><select name=variance_action><option>Bloquear e enviar para aprovação</option><option>Receber parcialmente</option><option>Recusar entrega</option></select></div><div class=form-note>Somente após a conferência o recebimento cria entrada de estoque e contas a pagar.</div></div>');

function render() {
  const renderer = renderers[state.view] || renderDashboard;
  renderer();
  clarifyPrototypeStatus();
  const pageEyebrow = content.querySelector('.page-head .eyebrow');
  if (pageEyebrow) pageEyebrow.insertAdjacentHTML('afterend','<span class=season-context>Safra '+state.season+'</span>');
  seasonSelect.value = state.season;
  const nav = document.querySelector(`.nav-item[data-view="${state.view}"]`);
  document.querySelectorAll('.nav-item').forEach(item => item.classList.toggle('active', item === nav));
  pageTitle.textContent = nav?.dataset.title || 'Visão geral';
  bindViewInteractions();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigate(view) {
  if (!renderers[view]) return;
  state.view = view;
  if (location.hash !== `#${view}`) history.pushState(null, '', `#${view}`);
  render();
  closeSidebar();
  setTimeout(() => content.focus(), 20);
}

function bindViewInteractions() {
  content.querySelectorAll('[data-view-link]').forEach(btn => btn.addEventListener('click', () => navigate(btn.dataset.viewLink)));
  content.querySelectorAll('[data-action]').forEach(btn => btn.addEventListener('click', () => handleAction(btn.dataset.action, btn)));
  content.querySelectorAll('[data-grain]').forEach(btn => btn.addEventListener('click', () => { state.grainCrop = btn.dataset.grain; render(); }));
  content.querySelectorAll('[data-coffee-lot-filter]').forEach(btn => btn.addEventListener('click', () => { state.coffeeLotFilter = btn.dataset.coffeeLotFilter; renderCoffee(); bindViewInteractions(); }));
  content.querySelectorAll('[data-coffee-quality-tab]').forEach(btn => btn.addEventListener('click', () => { state.coffeeQualityTab = btn.dataset.coffeeQualityTab; renderCoffee(); bindViewInteractions(); }));
  content.querySelectorAll('[data-dryer-lot]').forEach(btn => btn.addEventListener('click', () => { state.coffeeDryerLot = btn.dataset.dryerLot; renderCoffee(); bindViewInteractions(); }));
  content.querySelectorAll('[data-inventory-filter]').forEach(btn => btn.addEventListener('click', () => { state.inventoryFilter = btn.dataset.inventoryFilter; renderInventory(); bindViewInteractions(); }));
  content.querySelectorAll('[data-soil-tab]').forEach(btn => btn.addEventListener('click', () => { state.soilTab = btn.dataset.soilTab; renderSoil(); bindViewInteractions(); }));
  content.querySelectorAll('[data-soil-plot]').forEach(btn => btn.addEventListener('click', () => { state.soilPlot = decodeURIComponent(btn.dataset.soilPlot); renderSoil(); bindViewInteractions(); }));
  content.querySelectorAll('[data-map-layer]').forEach(btn => btn.addEventListener('click', () => { state.mapLayer = btn.dataset.mapLayer; renderMapMip(); bindViewInteractions(); }));
  content.querySelectorAll('[data-connected-tab]').forEach(btn => btn.addEventListener('click', () => { state.connectedTab = btn.dataset.connectedTab; renderConnected(); bindViewInteractions(); }));
  const stockSearch = document.getElementById('inventorySearch');
  if (stockSearch) stockSearch.addEventListener('input', () => { document.getElementById('inventoryBody').innerHTML = inventoryRows(); });
  const loadSearch = document.getElementById('loadSearch');
  if (loadSearch) loadSearch.addEventListener('input', () => filterTable(loadSearch.value, 'loadsTable'));
  const soilSearch = document.getElementById('soilSearch');
  if (soilSearch) {
    soilSearch.value = state.soilQuery;
    soilSearch.placeholder = 'Buscar análise, talhão ou laboratório';
    soilSearch.addEventListener('input', () => { state.soilQuery = soilSearch.value; document.getElementById('soilTableBody').innerHTML = soilRows(); });
  }
  content.querySelectorAll('.chart-point').forEach(point => {
    const wrap = point.closest('.chart-wrap');
    const tooltip = wrap.querySelector('.chart-tooltip');
    point.addEventListener('pointerenter', e => {
      const rect = wrap.getBoundingClientRect();
      tooltip.textContent = point.dataset.tip;
      tooltip.style.left = `${e.clientX - rect.left}px`;
      tooltip.style.top = `${e.clientY - rect.top - 8}px`;
      tooltip.classList.add('show');
    });
    point.addEventListener('pointerleave', () => tooltip.classList.remove('show'));
  });
}

function filterTable(value, tableId) {
  const q = value.trim().toLowerCase();
  document.querySelectorAll(`#${tableId} tbody tr`).forEach(row => row.style.display = row.textContent.toLowerCase().includes(q) ? '' : 'none');
}

function handleAction(action, button) {
  const formActionMap = {
    'coffee-trailer': 'coffee_trailer',
    'coffee-lot': 'coffee_lot',
    'coffee-sieve': 'coffee_sieve',
    'coffee-sensory': 'coffee_sensory',
    'coffee-cva': 'coffee_cva',
    'lot-movement': 'lot_movement',
    'lot-split': 'lot_split',
    'lot-mix': 'lot_mix',
    'lot-reverse': 'lot_reverse',
    'dryer-batch': 'dryer_batch',
    'dryer-reading': 'dryer_reading',
    'dryer-close': 'dryer_close',
    'coffee-hours': 'coffee_hours',
    'harvest-settings': 'harvest_settings',
    'spray-params': 'spray_params',
    'coffee-soil-spray': 'coffee_soil_spray',
    'coffee-soil-params': 'coffee_soil_params',
    'grain-cover': 'grain_cover',
    'meter': 'meter_reading',
    'maintenance-reminder': 'maintenance_reminder',
    'fuel-dispense': 'fuel_dispense',
    'fuel-receipt': 'fuel_receipt',
    'fuel-count': 'fuel_count'
    ,'soil-analysis': 'soil_analysis'
    ,'soil-import': 'soil_analysis'
    ,'fertilization': 'fertilization'
    ,'liming': 'liming'
    ,'pruning': 'pruning'
    ,'weeding-mowing': 'weeding_mowing'
    ,'yarding-spreading': 'yarding_spreading'
    ,'whatsapp-entry': 'whatsapp_entry'
    ,'whatsapp-review': 'whatsapp_entry'
    ,'field-observation': 'field_observation'
    ,'map-import': 'map_import'
    ,'mip-scout': 'mip_scout'
    ,'localized-prescription': 'localized_prescription'
    ,'event-rule': 'event_rule'
    ,'approval-review': 'approval_review'
    ,'telemetry-plan': 'telemetry_plan'
    ,'telemetry-work-order': 'workshop'
    ,'fiscal-xml': 'fiscal_xml'
    ,'fiscal-document': 'fiscal_document'
    ,'sales-contract': 'sales_contract'
    ,'bank-reconciliation': 'bank_reconciliation'
    ,'purchase-request': 'purchase_request'
    ,'purchase-quote': 'purchase_quote'
    ,'purchase-receipt': 'purchase_receipt'
  };
  if (formActionMap[action]) return openModal(formActionMap[action]);
  if (['open-modal','row-detail','stock-move'].includes(action)) return openModal(action === 'stock-move' ? 'inventory' : undefined);
  if (action === 'export') return exportCurrentView();
  if (action === 'sync-now') {
    button.disabled = true;
    const old = button.innerHTML;
    button.innerHTML = `${icon('sync')}Simulando…`;
    setTimeout(() => { button.disabled = false; button.innerHTML = old; showToast('Simulação concluída','Nenhum dado externo foi sincronizado; este fluxo é apenas demonstrativo.'); }, 900);
    return;
  }
  const messages = {
    'close-day':['Dia conferido','O fechamento preliminar está pronto para aprovação.'],
    'close-timesheet':['Ponto conferido','11 inconsistências foram encaminhadas aos líderes.'],
    'reconcile':['Conciliação atualizada','Os lançamentos foram comparados com o extrato demonstrativo.'],
    'meter':['Horímetro pronto','Selecione a máquina no formulário de nova OS ou inventário.'],
    'resolve':['Pendência aberta','A comparação foi preparada para revisão.'],
    'method-report':['Relatório preparado','A análise por método está pronta para exportação.'],
    'schedule':['Plano preventivo','A agenda completa contém 17 intervenções nos próximos 30 dias.'],
    'settings':['Configuração protegida','Perfis administradores podem alterar regras de sincronização.'],
    'mapping':['Dicionário de dados','O mapeamento completo está documentado no blueprint técnico.'],
    'spray-map':['Mapa de aplicações','A camada geográfica está preparada para exibir cobertura, sobreposição e áreas não tratadas.'],
    'show-all':['Visão ampliada','No protótipo, esta ação representa a listagem completa.'],
    'count':['Inventário iniciado','Uma contagem cega demonstrativa foi criada.'],
    'whatsapp-confirm':['Entrada confirmada','O rascunho foi revisado, salvo e vinculado à mensagem original.'],
    'play-audio':['Áudio preparado','A reprodução representa o anexo preservado na entrada demonstrativa.'],
    'sync-policy':['Política de sincronização','A configuração considera idempotência, conflitos, anexos retomáveis e auditoria.'],
    'map-plot':['Talhão selecionado','O mapa preserva a camada ativa, as zonas e as observações georreferenciadas.'],
    'coffee-model':['Análise atualizada','Os indicadores foram recalculados com o histórico demonstrativo disponível.'],
    'telemetry-review':['Comparação aberta','Consumo, operação, talhão, umidade e carga foram organizados para revisão.']
  };
  const [title, message] = messages[action] || ['Ação registrada','A interação foi executada no modo demonstrativo.'];
  showToast(title, message);
}

function openModal(forcedView) {
  const config = forms[forcedView || state.view] || forms.dashboard;
  if ((forcedView || state.view) === 'map_import') {
    state.pendingMapImport = null;
    state.mapImportToken += 1;
  }
  document.getElementById('modalEyebrow').textContent = config.eyebrow;
  document.getElementById('modalTitle').textContent = config.title;
  document.getElementById('modalBody').innerHTML = config.body;
  modalBackdrop.dataset.formView = forcedView || state.view;
  modalBackdrop.classList.add('open');
  modalBackdrop.setAttribute('aria-hidden','false');
  const seasonField = modalBackdrop.querySelector('[name=season]');
  if (seasonField) seasonField.value = state.season;
  const plotField = modalBackdrop.querySelector('[name=plot]');
  if (plotField && state.soilPlot !== 'Todos' && [...plotField.options].some(option => option.value === state.soilPlot)) plotField.value = state.soilPlot;
  const mapSource = modalBackdrop.querySelector('[data-map-source]');
  const mapSourceGroups = [...modalBackdrop.querySelectorAll('[data-source-group]')];
  const mapImportSummary = modalBackdrop.querySelector('[name=import_summary]');
  if (mapSource && mapSourceGroups.length) {
    const updateMapSource = () => {
      mapSourceGroups.forEach(group => { group.hidden = group.dataset.sourceGroup !== mapSource.value; });
      if (mapImportSummary) {
        const labels = {FILE:'Selecione um arquivo para executar a leitura local.',GOOGLE_EARTH:'Informe um link KML/KMZ publicado pelo Google Earth.',QGIS_SERVICE:'Informe o serviço WFS ou QGIS Server e a camada.',QGIS_PROJECT:'Selecione um pacote QGZ, GeoPackage ou ZIP.'};
        mapImportSummary.value = labels[mapSource.value] || 'Aguardando configuração da fonte.';
      }
    };
    mapSource.addEventListener('change', updateMapSource);
    updateMapSource();
  }
  const mapFile = modalBackdrop.querySelector('[name=map_file]');
  if (mapFile && mapImportSummary) {
    mapFile.addEventListener('change', () => {
      const file = mapFile.files && mapFile.files[0];
      if (!file) return;
      const importToken = ++state.mapImportToken;
      state.pendingMapImport = null;
      const extension = file.name.split('.').pop().toLowerCase();
      if (extension !== 'kml') {
        mapImportSummary.value = file.name+' · '+fmtBR(file.size / 1024,1)+' KB · formato '+extension.toUpperCase()+' selecionado para validação no servidor.';
        return;
      }
      mapImportSummary.value = 'Lendo '+file.name+'…';
      const reader = new FileReader();
      reader.onload = () => {
        if (importToken !== state.mapImportToken || !modalBackdrop.classList.contains('open')) return;
        try {
          const xml = new DOMParser().parseFromString(String(reader.result || ''),'application/xml');
          if (xml.getElementsByTagName('parsererror').length) throw new Error('KML inválido');
          const placemarks = xml.getElementsByTagName('Placemark').length;
          const points = xml.getElementsByTagName('Point').length;
          const lines = xml.getElementsByTagName('LineString').length;
          const polygons = xml.getElementsByTagName('Polygon').length;
          const folders = xml.getElementsByTagName('Folder').length;
          const parseCoordinates = node => String(node && node.textContent || '').trim().split(/\s+/).map(value => value.split(',').slice(0,2).map(Number)).filter(point => point.length === 2 && point.every(Number.isFinite));
          const features = [];
          [...xml.getElementsByTagName('Placemark')].forEach((placemark,placemarkIndex) => {
            const nameNode = placemark.getElementsByTagName('name')[0];
            const featureName = nameNode && nameNode.textContent.trim() || 'Feição '+(placemarkIndex+1);
            [...placemark.getElementsByTagName('Polygon')].forEach((geometry,index) => {
              const coordinatesNode = geometry.getElementsByTagName('coordinates')[0];
              const coordinates = parseCoordinates(coordinatesNode);
              if (coordinates.length >= 3) features.push({type:'Polygon',name:index?featureName+' '+(index+1):featureName,coordinates:coordinates});
            });
            [...placemark.getElementsByTagName('LineString')].forEach((geometry,index) => {
              const coordinatesNode = geometry.getElementsByTagName('coordinates')[0];
              const coordinates = parseCoordinates(coordinatesNode);
              if (coordinates.length >= 2) features.push({type:'LineString',name:index?featureName+' '+(index+1):featureName,coordinates:coordinates});
            });
            [...placemark.getElementsByTagName('Point')].forEach((geometry,index) => {
              const coordinatesNode = geometry.getElementsByTagName('coordinates')[0];
              const coordinates = parseCoordinates(coordinatesNode);
              if (coordinates.length) features.push({type:'Point',name:index?featureName+' '+(index+1):featureName,coordinates:[coordinates[0]]});
            });
          });
          if (!features.length) throw new Error('nenhuma geometria compatível encontrada');
          state.pendingMapImport = {fileName:file.name,fileSize:file.size,documentName:(xml.getElementsByTagName('Document')[0] && xml.getElementsByTagName('Document')[0].getElementsByTagName('name')[0] && xml.getElementsByTagName('Document')[0].getElementsByTagName('name')[0].textContent.trim()) || file.name,features:features,placemarkCount:placemarks};
          mapImportSummary.value = file.name+' · '+placemarks+' Placemark · '+polygons+' polígonos · '+lines+' linhas · '+points+' pontos · '+folders+' pastas · leitura KML concluída.';
        } catch (error) {
          state.pendingMapImport = null;
          mapImportSummary.value = file.name+' · falha na leitura: '+error.message+'. Corrija o arquivo antes de importar.';
        }
      };
      reader.onerror = () => {
        if (importToken === state.mapImportToken && modalBackdrop.classList.contains('open')) mapImportSummary.value = file.name+' · não foi possível ler o arquivo local.';
      };
      reader.readAsText(file);
    });
  }
  const qgisProjectFile = modalBackdrop.querySelector('[name=qgis_project_file]');
  if (qgisProjectFile && mapImportSummary) qgisProjectFile.addEventListener('change', () => {
    const file = qgisProjectFile.files && qgisProjectFile.files[0];
    if (file) mapImportSummary.value = file.name+' · pacote QGIS selecionado · camadas, CRS, dados e estilos serão inventariados no servidor.';
  });
  const googleEarthUrl = modalBackdrop.querySelector('[name=google_earth_url]');
  if (googleEarthUrl && mapImportSummary) googleEarthUrl.addEventListener('input', () => { mapImportSummary.value = googleEarthUrl.value ? 'Google Earth · link configurado · conexão será testada antes da primeira importação.' : 'Informe um link KML/KMZ publicado pelo Google Earth.'; });
  const qgisServiceUrl = modalBackdrop.querySelector('[name=qgis_service_url]');
  if (qgisServiceUrl && mapImportSummary) qgisServiceUrl.addEventListener('input', () => { mapImportSummary.value = qgisServiceUrl.value ? 'QGIS · serviço configurado · capabilities, CRS e camada serão verificados antes de sincronizar.' : 'Informe o serviço WFS ou QGIS Server e a camada.'; });
  const capacity = modalBackdrop.querySelector('[name="capacity_l"]');
  const fill = modalBackdrop.querySelector('[name="fill_pct"]');
  const volume = modalBackdrop.querySelector('[name="volume_l"]');
  if (capacity && fill && volume) {
    const calculateVolume = () => {
      const measured = Number(capacity.value || 0) * Number(fill.value || 0) / 100;
      volume.value = Number.isFinite(measured) ? measured.toFixed(0) : '';
    };
    fill.addEventListener('input', calculateVolume);
    calculateVolume();
  }
  const startAt = modalBackdrop.querySelector('[name="start_at"]');
  const endAt = modalBackdrop.querySelector('[name="end_at"]');
  const hours = modalBackdrop.querySelector('[name="hours"]');
  if (startAt && endAt && hours) {
    const calculateHours = () => {
      const start = new Date(startAt.value);
      const end = new Date(endAt.value);
      const elapsed = (end - start) / 3600000;
      hours.value = Number.isFinite(elapsed) && elapsed >= 0 ? elapsed.toFixed(2) : '';
    };
    startAt.addEventListener('input', calculateHours);
    endAt.addEventListener('input', calculateHours);
    calculateHours();
  }
  const sensoryScores = [...modalBackdrop.querySelectorAll('[data-sensory-score]')];
  const sensoryTotal = modalBackdrop.querySelector('[name=total_score]');
  if (sensoryScores.length && sensoryTotal) {
    const calculateSensoryTotal = () => {
      const total = sensoryScores.reduce((sum, field) => sum + Number(field.value || 0), 0);
      sensoryTotal.value = Number.isFinite(total) ? total.toFixed(2) : '';
    };
    sensoryScores.forEach(field => field.addEventListener('input', calculateSensoryTotal));
    calculateSensoryTotal();
  }
  const sieveWeights = [...modalBackdrop.querySelectorAll('[data-sieve-weight]')];
  const sieve17PlusWeights = [...modalBackdrop.querySelectorAll('[data-sieve-17plus]')];
  const sieveTotal = modalBackdrop.querySelector('[name=sample_weight_g]');
  const sieve17Plus = modalBackdrop.querySelector('[name=screen_17_plus_pct]');
  if (sieveWeights.length && sieveTotal && sieve17Plus) {
    const calculateSieve = () => {
      const total = sieveWeights.reduce((sum, field) => sum + Number(field.value || 0), 0);
      const retained17Plus = sieve17PlusWeights.reduce((sum, field) => sum + Number(field.value || 0), 0);
      sieveTotal.value = Number.isFinite(total) ? total.toFixed(1) : '';
      sieve17Plus.value = total > 0 ? (retained17Plus * 100 / total).toFixed(2) : '';
    };
    sieveWeights.forEach(field => field.addEventListener('input', calculateSieve));
    calculateSieve();
  }
  const directedNozzles = modalBackdrop.querySelector('[data-directed-nozzles]');
  const applicationSides = modalBackdrop.querySelector('[data-application-sides]');
  const totalNozzles = modalBackdrop.querySelector('[name=nozzle_count]');
  if (directedNozzles && applicationSides && totalNozzles) {
    const calculateDirectedNozzles = () => { totalNozzles.value = String(Number(directedNozzles.value || 0) * Number(applicationSides.value || 0)); };
    directedNozzles.addEventListener('input', calculateDirectedNozzles);
    applicationSides.addEventListener('change', calculateDirectedNozzles);
    calculateDirectedNozzles();
  }
  const textureFractions = [...modalBackdrop.querySelectorAll('[data-texture-fraction]')];
  const textureTotal = modalBackdrop.querySelector('[name=texture_total_pct]');
  if (textureFractions.length && textureTotal) {
    const calculateTexture = () => { textureTotal.value = textureFractions.reduce((sum,field) => sum + Number(field.value || 0),0).toFixed(1); };
    textureFractions.forEach(field => field.addEventListener('input', calculateTexture));
    calculateTexture();
  }
  const operationDose = modalBackdrop.querySelector('[data-operation-dose]');
  const operationArea = modalBackdrop.querySelector('[data-operation-area]');
  const operationTotal = modalBackdrop.querySelector('[name=operation_total]');
  if (operationDose && operationArea && operationTotal) {
    const calculateOperationTotal = () => { operationTotal.value = (Number(operationDose.value || 0) * Number(operationArea.value || 0)).toFixed(2); };
    operationDose.addEventListener('input', calculateOperationTotal);
    operationArea.addEventListener('input', calculateOperationTotal);
    calculateOperationTotal();
  }
  setTimeout(() => modalBackdrop.querySelector('input,select,textarea')?.focus(), 80);
}

function closeModal() {
  if (modalBackdrop.dataset.formView === 'map_import') {
    state.pendingMapImport = null;
    state.mapImportToken += 1;
  }
  modalBackdrop.classList.remove('open');
  modalBackdrop.setAttribute('aria-hidden','true');
}

function showToast(title, message) {
  const toast = document.getElementById('toast');
  document.getElementById('toastTitle').textContent = title;
  document.getElementById('toastMessage').textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 3500);
}

function exportCurrentView() {
  const grainExports = {
    milho: [['colheita','32880','sc'],['cargas','84','carga'],['preco_medio','61.80','BRL/sc'],['contas_a_receber','428000','BRL']],
    soja: [['colheita','41230','sc'],['cargas','126','carga'],['preco_medio','128.40','BRL/sc'],['contas_a_receber','312000','BRL']],
    sorgo: [['colheita','12640','sc'],['cargas','31','carga'],['preco_medio','52.70','BRL/sc'],['contas_a_receber','186000','BRL']],
    trigo: [['colheita','9480','sc'],['cargas','24','carga'],['preco_medio','78.90','BRL/sc'],['contas_a_receber','142000','BRL']],
    coberturas: [['area_implantada','286','ha'],['operacoes','18','talhao'],['custo_medio','412','BRL/ha'],['sementes_a_distribuir','5.8','t']]
  };
  const rows = state.view === 'grains'
    ? [['modulo','safra','cultura','indicador','valor','unidade'], ...grainExports[state.grainCrop].map(row => ['cereais',state.season,state.grainCrop,...row])]
    : [['modulo','safra','indicador','valor','unidade'], ...[...content.querySelectorAll('.metric-card')].map(card => {
      const value = card.querySelector('.metric-value');
      return [state.view,state.season,card.dataset.exportLabel || card.querySelector('.metric-top span')?.textContent.trim() || 'indicador', value?.dataset.exportValue || value?.textContent.trim() || '', value?.dataset.exportUnit || ''];
    })];
  const csv = '\ufeff' + rows.map(row => row.join(';')).join('\n');
  const blob = new Blob([csv], { type:'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const exportScope = state.view === 'grains' ? `${state.view}-${state.grainCrop}` : state.view;
  a.href = url; a.download = `gefaz360-${exportScope}-demonstrativo.csv`; a.click();
  URL.revokeObjectURL(url);
  showToast('Arquivo exportado','O CSV demonstrativo foi gerado com identificação de safra e unidade.');
}

function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('mobileOverlay').classList.add('open');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('mobileOverlay').classList.remove('open');
}

document.querySelectorAll('.nav-item').forEach(item => item.addEventListener('click', () => navigate(item.dataset.view)));
document.getElementById('menuButton').addEventListener('click', openSidebar);
document.getElementById('mobileOverlay').addEventListener('click', closeSidebar);
document.getElementById('globalAdd').addEventListener('click', () => openModal());
document.getElementById('closeModal').addEventListener('click', closeModal);
document.getElementById('cancelModal').addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', e => { if (e.target === modalBackdrop) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closeSidebar(); } });
document.getElementById('profileButton').addEventListener('click', () => showToast('Perfil demonstrativo','Mariana tem acesso administrativo a todos os módulos.'));
document.getElementById('seasonSelect').addEventListener('change', e => showToast('Safra alterada',`${e.target.value} aplicada à visão atual.`));
seasonSelect.addEventListener('change', e => {
  state.season = e.target.value;
  localStorage.setItem('gefaz360-season', state.season);
  render();
});
document.getElementById('recordForm').addEventListener('submit', e => {
  e.preventDefault();
  const view = modalBackdrop.dataset.formView || state.view;
  const config = forms[view] || forms.dashboard;
  const formData = new FormData(e.currentTarget);
  if (view === 'map_import') {
    const sourceType = String(formData.get('source_type') || 'FILE');
    if (sourceType !== 'FILE') {
      const sourceLabels = {GOOGLE_EARTH:'Google Earth',QGIS_SERVICE:'QGIS por serviço',QGIS_PROJECT:'pacote QGIS'};
      showToast('Conexão ainda não disponível',(sourceLabels[sourceType] || 'Esta fonte')+' exige a futura API central. Nenhum registro foi salvo.');
      return;
    }
    if (!state.pendingMapImport) {
      showToast('Mapa ainda não importado','Selecione um KML válido e aguarde a pré-validação antes de salvar.');
      return;
    }
    const pending = state.pendingMapImport;
    const duplicateStrategy = String(formData.get('duplicate_strategy') || 'Criar nova versão');
    const existingIndex = state.importedMaps.findIndex(item => item.fileName === pending.fileName);
    if (existingIndex >= 0 && duplicateStrategy.includes('Ignorar')) {
      showToast('Mapa já existente','O arquivo '+pending.fileName+' já foi importado e a regra escolhida mantém a versão atual.');
      return;
    }
    const importedRecord = {
      id:'MAP-'+Date.now(),
      name:String(formData.get('import_name') || pending.documentName || pending.fileName),
      fileName:pending.fileName,
      fileSize:pending.fileSize,
      sourceType:'KML',
      sourceCrs:String(formData.get('source_crs') || 'EPSG:4326'),
      targetCrs:String(formData.get('target_crs') || 'EPSG:4326'),
      importTarget:String(formData.get('import_target') || 'Camada agronômica'),
      duplicateStrategy:duplicateStrategy,
      placemarkCount:pending.placemarkCount,
      features:pending.features,
      importedAt:new Date().toISOString()
    };
    if (existingIndex >= 0 && duplicateStrategy.includes('Atualizar')) state.importedMaps.splice(existingIndex,1);
    state.importedMaps.unshift(importedRecord);
    state.importedMaps = state.importedMaps.slice(0,20);
    localStorage.setItem('gefaz360-imported-maps',JSON.stringify(state.importedMaps));
    state.pendingMapImport = null;
    state.activities.unshift({icon:'map',title:plainActivityText('Mapa KML importado · '+importedRecord.name),meta:'Agora · '+importedRecord.features.length+' feição'+(importedRecord.features.length===1?'':'ões')});
    state.activities = state.activities.slice(0,5);
    localStorage.setItem('pvgest-activities',JSON.stringify(state.activities));
    closeModal();
    showToast('Mapa importado','O arquivo '+importedRecord.fileName+' foi convertido, desenhado e salvo neste navegador.');
    e.currentTarget.reset();
    if (state.view === 'mapmip') render();
    return;
  }
  const detail = [...formData.values()].find(v => typeof v === 'string' && v.trim()) || config.title;
  state.activities.unshift({ icon: config.icon, title: plainActivityText(config.activity), meta: plainActivityText(`Agora · ${String(detail).slice(0,42)}`) });
  state.activities = state.activities.slice(0,5);
  localStorage.setItem('pvgest-activities', JSON.stringify(state.activities));
  closeModal();
  showToast(config.success,'O registro foi validado no modo demonstrativo e aparece apenas nas atividades locais.');
  if (state.view === 'dashboard') render();
  e.currentTarget.reset();
});

hydrateIcons();
const initialView = location.hash.replace('#','');
state.view = renderers[initialView] ? initialView : 'dashboard';
if (!renderers[initialView]) history.replaceState(null,'','#dashboard');
window.addEventListener('hashchange', () => {
  const requestedView = location.hash.replace('#','');
  const nextView = renderers[requestedView] ? requestedView : 'dashboard';
  if (requestedView !== nextView) history.replaceState(null,'',`#${nextView}`);
  if (state.view === nextView) return;
  state.view = nextView;
  render();
  closeSidebar();
  setTimeout(() => content.focus(),20);
});
render();
if (storageRecoveryKeys.length) {
  setTimeout(() => showToast('Dados locais recuperados','Um armazenamento inválido foi ignorado sem apagar o valor original.'),0);
}
