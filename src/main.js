// 角色数据
import { elementLabels, elementIds, weaponTypes, characters } from './data/characters.js';
// 图标
import { elementIcons, weaponIcons } from './assets/icons.js';
// 样式
import './style.css';

// 初始化图标全局变量
window.elementIcons = elementIcons;
window.weaponIcons = weaponIcons;

// ========== 状态 ==========
let currentElement = 'fire';
let currentWeaponFilter = null;

// ========== 工具函数 ==========
function setFilterIcon(button, src, label) {
  let img = button.querySelector('.filter-icon');
  if (!img) {
    img = document.createElement('img');
    img.className = 'filter-icon';
    button.textContent = '';
    button.appendChild(img);
  }
  img.src = src;
  img.alt = label;
  button.title = label;
  button.setAttribute('aria-label', label);
  button.setAttribute('data-tooltip', label);
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ========== 渲染角色表格 ==========
const elementColors = {
  '弱火': 'element-fire-weak', '强火': 'element-fire-strong', '超强火': 'element-fire-super',
  '弱水': 'element-water-weak', '强水': 'element-water-strong', '超强水': 'element-water-super',
  '弱雷': 'element-thunder-weak', '强雷': 'element-thunder-strong', '超强雷': 'element-thunder-super',
  '弱冰': 'element-ice-weak', '强冰': 'element-ice-strong', '超强冰': 'element-ice-super',
  '弱风': 'element-wind-weak', '强风': 'element-wind-strong', '超强风': 'element-wind-super',
  '弱岩': 'element-rock-weak', '强岩': 'element-rock-strong', '超强岩': 'element-rock-super',
  '弱草': 'element-grass-weak', '中草': 'element-grass-medium', '强草': 'element-grass-strong', '超强草': 'element-grass-super'
};

function getElementAmountClass(text) {
  if (!text) return '';
  for (const [keyword, className] of Object.entries(elementColors)) {
    if (text.includes(keyword)) return className;
  }
  return '';
}

function getElementAmountStyle(text) {
  if (!text) return '';
  if (text.includes('染色')) {
    return text.includes('弱') ? 'color:#a7f3d0;font-weight:600;' : 'color:#34d399;font-weight:600;';
  }
  if (text.includes('弱元素') || text === '弱元素') {
    return 'color:#a7f3d0;font-weight:600;';
  }
  return '';
}

function renderCharacterTable(char) {
  const rows = char.skills.map(skill => {
    const amountClass = getElementAmountClass(skill.elementAmount);
    const amountStyle = getElementAmountStyle(skill.elementAmount);
    const amountHtml = amountClass
      ? `<td class="${amountClass}">${escapeHtml(skill.elementAmount)}</td>`
      : amountStyle
        ? `<td style="${amountStyle}">${escapeHtml(skill.elementAmount)}</td>`
        : `<td>${escapeHtml(skill.elementAmount)}</td>`;
    return `<tr>
      <td>${escapeHtml(skill.name)}</td>
      ${amountHtml}
      <td>${escapeHtml(skill.attachRule)}</td>
      <td>${escapeHtml(skill.particles)}</td>
      <td>${escapeHtml(skill.note)}</td>
      <td>${escapeHtml(skill.poise)}</td>
    </tr>`;
  }).join('');

  return `<div class="character-table" data-weapon="${escapeHtml(char.weapon)}" data-energy="${escapeHtml(char.energy)}">
    <h3>${escapeHtml(char.name)}</h3>
    <table>
      <tr><th>技能</th><th>元素量</th><th>附着规则</th><th>产球</th><th>备注</th><th>抗打断</th></tr>
      ${rows}
    </table>
  </div>`;
}

function renderElementTab(elementId) {
  const chars = characters[elementId] || [];
  const title = elementLabels[elementId];
  const titleColorMap = {
    fire: '#ff6b6b', water: '#4dabf7', thunder: '#b197fc',
    ice: '#a5f3fc', wind: '#a7f3d0', rock: '#fde047', grass: '#86efac'
  };

  const tables = chars.map(renderCharacterTable).join('');

  return `<div class="tab-content ${elementId === 'fire' ? 'active' : ''}" id="${elementId}">
    <h2 class="element-title" style="color:${titleColorMap[elementId]}">${title}角色技能附着及产球表</h2>
    ${elementId === 'wind' ? `<div class="wind-info-box">
      <p><strong>说明：</strong></p>
      <p>染色会造成对应元素的伤害，与原风伤的附着规则一致但彼此独立，拥有独立的元素量强弱</p>
      <p>未特别说明的情况下染色顺序为：火水雷冰</p>
    </div>` : ''}
    ${tables}
  </div>`;
}

function initCharacterTabs() {
  const container = document.getElementById('character-tabs-container');
  if (!container) return;
  container.innerHTML = elementIds.map(renderElementTab).join('');
}

// ========== Tab & Filter ==========
function showTab(element, button) {
  currentElement = element;
  document.querySelectorAll('.tab-content').forEach(c => c.classList.toggle('active', c.id === element));
  document.querySelectorAll('.tab-button').forEach(b => b.classList.toggle('active', b === button));
  applyWeaponFilter();
}

function selectWeapon(weapon, button) {
  const isActive = button.classList.contains('active');
  const buttons = document.querySelectorAll('.weapon-button');
  if (isActive) {
    currentWeaponFilter = null;
    buttons.forEach(b => b.classList.remove('active'));
  } else {
    currentWeaponFilter = weapon;
    buttons.forEach(b => b.classList.toggle('active', b === button));
  }
  applyWeaponFilter();
}

function applyWeaponFilter() {
  const activeTab = document.getElementById(currentElement);
  if (!activeTab) return;
  activeTab.querySelectorAll('.character-table').forEach(table => {
    const weaponTag = table.dataset.weapon || '武器';
    table.style.display = currentWeaponFilter === null || weaponTag === currentWeaponFilter ? '' : 'none';
  });
}

// ========== 深色模式 ==========
function toggleDarkMode() {
  const isDark = document.body.classList.toggle('dark-mode');
  document.querySelectorAll('.mode-icon').forEach(el => el.textContent = isDark ? '☀️' : '🌙');
  document.querySelectorAll('.mode-text').forEach(el => el.textContent = isDark ? '浅色模式' : '深色模式');
  localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
}

function initDarkMode() {
  const darkMode = localStorage.getItem('darkMode') === 'enabled';
  if (darkMode) document.body.classList.add('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  document.querySelectorAll('.mode-icon').forEach(el => el.textContent = isDark ? '☀️' : '🌙');
  document.querySelectorAll('.mode-text').forEach(el => el.textContent = isDark ? '浅色模式' : '深色模式');
}

// ========== 弹窗 ==========
function initOverlays() {
  const bindings = [
    { overlay: document.getElementById('changelog-overlay'), openButtons: ['open-changelog', 'open-changelog-dock'] }
  ];

  const closeOverlay = (overlay) => {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('overlay-open');
  };

  bindings.forEach(({ overlay, openButtons }) => {
    if (!overlay) return;
    const overlayContent = overlay.querySelector('.overlay-content');
    const buttons = openButtons.map(id => document.getElementById(id)).filter(Boolean);

    buttons.forEach(btn => btn.addEventListener('click', () => {
      overlay.classList.add('active');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.classList.add('overlay-open');
    }));

    overlay.addEventListener('click', e => { if (e.target === overlay) closeOverlay(overlay); });
    if (overlayContent) overlayContent.addEventListener('click', e => e.stopPropagation());
  });
}

// ========== 充能计算器 ==========
function autoFillEnergy() {
  const characterName = document.getElementById('character-name')?.value.trim();
  const energyInput = document.getElementById('x');
  if (!characterName || !energyInput) return;

  const allChars = [];
  Object.values(characters).forEach(arr => allChars.push(...arr));
  const found = allChars.find(c => c.name === characterName);
  if (found && found.energy && found.energy !== '未知') {
    energyInput.value = found.energy;
    calculateResult();
  }
}

function updateCharacterSuggestions() {
  const input = document.getElementById('character-name');
  const datalist = document.getElementById('character-suggestions');
  if (!input || !datalist) return;

  const keyword = input.value.trim();
  const names = [];
  Object.values(characters).forEach(arr => {
    arr.forEach(c => {
      if (!keyword || c.name.includes(keyword)) names.push(c.name);
    });
  });
  const uniqueNames = Array.from(new Set(names));
  datalist.innerHTML = uniqueNames.map(name => `<option value="${escapeHtml(name)}"></option>`).join('');
}

function calculateResult() {
  const x = parseFloat(document.getElementById('x')?.value) || 0;
  const a = parseFloat(document.getElementById('a')?.value) || 0;
  const d = parseFloat(document.getElementById('d')?.value) || 0;
  const b = parseFloat(document.getElementById('b')?.value) || 0;
  const e = parseFloat(document.getElementById('e')?.value) || 0;
  const c = parseFloat(document.getElementById('c')?.value) || 0;
  const f = parseFloat(document.getElementById('f')?.value) || 0;
  const resultEl = document.getElementById('result');
  if (!resultEl) return;

  if (document.getElementById('x')?.value === '') {
    resultEl.textContent = '未输入';
    return;
  }

  const frontEnergy = (3 * a) + (2 * b) + c;
  const backEnergy = 0.6 * ((3 * d) + (2 * e) + f);
  const denominator = frontEnergy + backEnergy;

  if (denominator === 0) {
    resultEl.textContent = '分母为零';
    return;
  }

  const y = x / denominator;
  const percentage = (y * 100).toFixed(1);
  resultEl.textContent = `${percentage}%`;
}

// ========== 初始化筛选图标 ==========
function initFilterIcons() {
  document.querySelectorAll('.tab-button').forEach(button => {
    const key = button.dataset.element;
    const label = elementLabels[key];
    const src = elementIcons[label];
    if (src) setFilterIcon(button, `data:image/webp;base64,${src}`, label);
  });
  document.querySelectorAll('.weapon-button').forEach(button => {
    const label = button.dataset.weapon;
    const src = weaponIcons[label];
    if (src) setFilterIcon(button, `data:image/webp;base64,${src}`, label);
  });
}

// ========== 滚动交互 ==========
function initScrollEffects() {
  const headerBar = document.querySelector('.header-bar');
  const filtersDock = document.querySelector('.filters-dock');
  if (!headerBar || !filtersDock) return;

  const toggleHeaderShadow = () => headerBar.classList.toggle('scrolled', window.scrollY > 8);
  const toggleFiltersDock = () => {
    const dockTop = filtersDock.getBoundingClientRect().top;
    filtersDock.classList.toggle('stuck', dockTop <= 8);
  };

  let animationTimeout;

  const updateHeaderVisibility = () => {
    const dockTop = filtersDock.getBoundingClientRect().top;
    const passedDock = dockTop <= 8;

    if (passedDock) {
      clearTimeout(animationTimeout);
      filtersDock.classList.add('show-actions');
      headerBar.classList.add('slide-out');
      animationTimeout = setTimeout(() => headerBar.classList.add('released'), 300);
    } else {
      clearTimeout(animationTimeout);
      headerBar.classList.remove('released');
      animationTimeout = setTimeout(() => {
        filtersDock.classList.remove('show-actions');
        headerBar.classList.remove('slide-out');
      }, 50);
    }
  };

  updateHeaderVisibility();
  window.addEventListener('scroll', updateHeaderVisibility, { passive: true });
  window.addEventListener('resize', updateHeaderVisibility);

  toggleHeaderShadow();
  toggleFiltersDock();
  window.addEventListener('resize', toggleFiltersDock);
  window.addEventListener('scroll', () => { toggleHeaderShadow(); toggleFiltersDock(); });
}

// ========== 绑定事件 ==========
function bindEvents() {
  // 充能计算器
  ['character-name', 'x', 'a', 'd', 'b', 'e', 'c', 'f'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', () => {
        if (id === 'character-name') { autoFillEnergy(); updateCharacterSuggestions(); }
        else calculateResult();
      });
    }
  });

  // 全局绑定toggleDarkMode
  window.toggleDarkMode = toggleDarkMode;
  window.showTab = showTab;
  window.selectWeapon = selectWeapon;

  // 深色模式按钮
  ['toggle-dark-header', 'toggle-dark-changelog', 'toggle-dark-dock'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', toggleDarkMode);
  });

  // Tab切换
  elementIds.forEach(el => {
    const btn = document.getElementById('tab-' + el);
    if (btn) btn.addEventListener('click', () => showTab(el, btn));
  });

  // 武器筛选
  weaponTypes.forEach(wt => {
    const btn = document.getElementById('weapon-' + wt);
    if (btn) btn.addEventListener('click', () => selectWeapon(wt, btn));
  });
}

// ========== 主入口 ==========
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initFilterIcons();
  initCharacterTabs();
  initScrollEffects();
  initOverlays();
  bindEvents();

  currentElement = document.querySelector('.tab-button.active')?.dataset.element || currentElement;
  currentWeaponFilter = document.querySelector('.weapon-button.active')?.dataset.weapon || null;
  applyWeaponFilter();

  updateCharacterSuggestions();
  calculateResult();
});
