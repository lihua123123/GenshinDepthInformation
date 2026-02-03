const elementLabels = { fire: '火系', water: '水系', thunder: '雷系', ice: '冰系', wind: '风系', rock: '岩系', grass: '草系' };
const elementIcons = {
    '火系': 'icon/火.png',
    '水系': 'icon/水.png',
    '雷系': 'icon/雷.png',
    '冰系': 'icon/冰.png',
    '风系': 'icon/风.png',
    '岩系': 'icon/岩.png',
    '草系': 'icon/草.png'
};
const weaponIcons = {
    '单手剑': 'icon/单手剑.png',
    '双手剑': 'icon/双手剑.png',
    '长柄武器': 'icon/长柄武器.png',
    '法器': 'icon/法器.png',
    '弓': 'icon/弓.png'
};
let currentElement = 'fire', currentWeaponFilter = null;

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
}

function initFilterIcons() {
    document.querySelectorAll('.tab-button').forEach(button => {
        const key = button.dataset.element;
        const label = elementLabels[key];
        const src = elementIcons[label];
        if (src) setFilterIcon(button, src, label);
    });
    document.querySelectorAll('.weapon-button').forEach(button => {
        const label = button.dataset.weapon;
        const src = weaponIcons[label];
        if (src) setFilterIcon(button, src, label);
    });
}

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
        const weaponTag = table.querySelector('.weapon')?.dataset.weapon || '武器';
        table.style.display = currentWeaponFilter === null || weaponTag === currentWeaponFilter ? '' : 'none';
    });
}

function ensureCharacterTags() {
    document.querySelectorAll('.character-table').forEach(table => {
        const tab = table.closest('.tab-content');
        const elementName = elementLabels[tab?.id] || '元素';
        let elementSpan = table.querySelector('.element');
        if (!elementSpan) {
            elementSpan = document.createElement('span');
            elementSpan.className = 'element';
            elementSpan.style.display = 'none';
            table.insertBefore(elementSpan, table.querySelector('table'));
        }
        elementSpan.dataset.element = elementSpan.dataset.element || elementName;
        let weaponSpan = table.querySelector('.weapon');
        if (!weaponSpan) {
            weaponSpan = document.createElement('span');
            weaponSpan.className = 'weapon';
            weaponSpan.style.display = 'none';
            table.insertBefore(weaponSpan, table.querySelector('table'));
        }
        weaponSpan.dataset.weapon = weaponSpan.dataset.weapon || '武器';
        const tagRow = table.querySelector('.tag-row');
        if (tagRow) tagRow.remove();
    });
}

const elementColors = {
    '弱火': 'element-fire-weak', '强火': 'element-fire-strong', '超强火': 'element-fire-super',
    '弱水': 'element-water-weak', '强水': 'element-water-strong', '超强水': 'element-water-super',
    '弱雷': 'element-thunder-weak', '强雷': 'element-thunder-strong', '超强雷': 'element-thunder-super',
    '弱冰': 'element-ice-weak', '强冰': 'element-ice-strong', '超强冰': 'element-ice-super',
    '弱风': 'element-wind-weak', '强风': 'element-wind-strong', '超强风': 'element-wind-super',
    '弱岩': 'element-rock-weak', '强岩': 'element-rock-strong', '超强岩': 'element-rock-super',
    '弱草': 'element-grass-weak', '中草': 'element-grass-medium', '强草': 'element-grass-strong', '超强草': 'element-grass-super'
};

document.addEventListener('DOMContentLoaded', () => {
    const headerBar = document.querySelector('.header-bar');
    const filtersDock = document.querySelector('.filters-dock');
    const filtersNav = document.querySelector('.filters');
    initFilterIcons();
    const toggleHeaderShadow = () => headerBar?.classList.toggle('scrolled', window.scrollY > 8);
    const toggleFiltersDock = () => {
        if (!filtersDock) return;
        const dockTop = filtersDock.getBoundingClientRect().top;
        filtersDock.classList.toggle('stuck', dockTop <= 8);
    };

    if (filtersNav && filtersDock && headerBar) {
        let animationTimeout;
        const headerHeight = () => headerBar.offsetHeight || 0;

        const updateHeaderVisibility = () => {
            const threshold = Math.max(0, filtersDock.offsetTop - headerHeight());
            const passedDock = window.scrollY >= threshold;

            if (passedDock) {
                clearTimeout(animationTimeout);
                filtersDock.classList.add('show-actions');
                headerBar.classList.add('slide-out');
                animationTimeout = setTimeout(() => {
                    headerBar.classList.add('released');
                }, 300);
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
    }

    toggleHeaderShadow();
    toggleFiltersDock();
    window.addEventListener('resize', toggleFiltersDock);
    window.addEventListener('scroll', () => { toggleHeaderShadow(); toggleFiltersDock(); });
    currentElement = document.querySelector('.tab-button.active')?.dataset.element || currentElement;
    currentWeaponFilter = document.querySelector('.weapon-button.active')?.dataset.weapon || null;
    ensureCharacterTags();
    document.querySelectorAll('table').forEach(table => {
        const rows = table.querySelectorAll('tr');
        rows.forEach((row, i) => {
            if (i === 0) return;
            const cell = row.querySelectorAll('td')[1];
            if (!cell) return;
            const text = cell.textContent.trim();
            for (const [keyword, className] of Object.entries(elementColors)) {
                if (text.includes(keyword)) {
                    cell.classList.add(className);
                    break;
                }
            }
            if (text.includes('染色')) {
                cell.style.color = text.includes('弱') ? '#a7f3d0' : '#34d399';
                cell.style.fontWeight = '600';
            } else if (text.includes('弱元素') || text === '弱元素') {
                cell.style.color = '#a7f3d0';
                cell.style.fontWeight = '600';
            }
        });
    });
    applyWeaponFilter();
});

function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-mode');
    document.querySelectorAll('.mode-icon').forEach(el => el.textContent = isDark ? '☀️' : '🌙');
    document.querySelectorAll('.mode-text').forEach(el => el.textContent = isDark ? '浅色模式' : '深色模式');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
}

(() => {
    const darkMode = localStorage.getItem('darkMode') === 'enabled';
    if (darkMode) document.body.classList.add('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    document.querySelectorAll('.mode-icon').forEach(el => el.textContent = isDark ? '☀️' : '🌙');
    document.querySelectorAll('.mode-text').forEach(el => el.textContent = isDark ? '浅色模式' : '深色模式');
})();

(() => {
    const overlay = document.getElementById('changelog-overlay');
    const overlayContent = document.querySelector('.overlay-content');
    const openButtons = [
        document.getElementById('open-changelog'),
        document.getElementById('open-changelog-dock')
    ].filter(Boolean);

    openButtons.forEach(btn => btn.addEventListener('click', () => {
        if (!overlay) return;
        overlay.classList.add('active');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.classList.add('overlay-open');
    }));

    if (overlay) overlay.addEventListener('click', e => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
            overlay.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('overlay-open');
        }
    });
    if (overlayContent) overlayContent.addEventListener('click', e => e.stopPropagation());
})();
    