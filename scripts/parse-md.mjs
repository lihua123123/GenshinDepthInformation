/**
 * MD 数据解析脚本
 * 从 元素附着及产球.md 中解析角色技能数据，结合 characters-meta.json 的武器/能量信息，
 * 生成 src/data/characters.js
 *
 * 用法: node scripts/parse-md.mjs
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// ========== 配置 ==========
const MD_PATH = resolve(ROOT, 'src/data/元素附着及产球.md');
const META_PATH = resolve(ROOT, 'src/data/characters-meta.json');
const OUTPUT_PATH = resolve(ROOT, 'src/data/characters.js');

// ========== 元素映射 ==========
const ELEMENT_MAP = {
  '火系': 'fire',
  '水系': 'water',
  '雷系': 'thunder',
  '冰系': 'ice',
  '风系': 'wind',
  '岩系': 'rock',
  '草系': 'grass',
};

const ELEMENT_LABELS = {
  fire: '火系', water: '水系', thunder: '雷系',
  ice: '冰系', wind: '风系', rock: '岩系', grass: '草系',
};

const ELEMENT_IDS = ['fire', 'water', 'thunder', 'ice', 'wind', 'rock', 'grass'];
const WEAPON_TYPES = ['单手剑', '弓', '双手剑', '长柄武器', '法器'];

// ========== 主逻辑 ==========
function main() {
  // 1. 读取 MD 文件
  if (!existsSync(MD_PATH)) {
    console.error(`❌ 未找到 MD 文件: ${MD_PATH}`);
    console.error('请将 元素附着及产球.md 放到 src/data/ 目录下');
    process.exit(1);
  }
  const mdContent = readFileSync(MD_PATH, 'utf-8');

  // 2. 读取元数据
  const meta = readMeta();

  // 3. 解析 MD
  const characters = parseCharacterData(mdContent, meta);

  // 4. 生成输出
  const output = generateOutput(characters);

  // 5. 写入文件
  writeFileSync(OUTPUT_PATH, output, 'utf-8');
  console.log(`✅ 已生成 ${OUTPUT_PATH}`);
  console.log(`   共 ${Object.values(characters).flat().length} 个角色`);
}

// ========== 读取元数据 ==========
function readMeta() {
  if (!existsSync(META_PATH)) {
    console.warn('⚠️ 未找到 characters-meta.json，角色将缺少武器/能量信息');
    return {};
  }
  return JSON.parse(readFileSync(META_PATH, 'utf-8'));
}

// ========== 解析角色数据 ==========
function parseCharacterData(mdContent, meta) {
  const lines = mdContent.split('\n');

  let currentElement = null;
  let currentChar = null;
  let inTable = false;
  let tableHeaders = [];

  const characters = {};

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // === 一级标题: 元素分类 ===
    const elementMatch = trimmed.match(/^#\s+(.+)$/);
    if (elementMatch) {
      const label = elementMatch[1];
      currentElement = ELEMENT_MAP[label] || null;
      if (currentElement && !characters[currentElement]) {
        characters[currentElement] = [];
      }
      inTable = false;
      currentChar = null;
      continue;
    }

    // === 二级标题: 角色名 ===
    const charMatch = trimmed.match(/^##\s+(.+)$/);
    if (charMatch) {
      if (currentElement && characters[currentElement]) {
        const namePart = charMatch[1];
        // 尝试解析名称中的 (武器/能量) 标注
        let name = namePart;
        let weapon = null;
        let energy = null;

        // 尝试解析名称中的 (武器/能量) 标注
        // 使用最后一个「（」来分割，支持「旅行者（火）（单手剑/70）」这种格式
        const lastOpen = namePart.lastIndexOf('（');
        const lastClose = namePart.lastIndexOf('）');
        if (lastOpen !== -1 && lastClose !== -1 && lastClose > lastOpen) {
          name = namePart.substring(0, lastOpen).trim();
          const metaPart = namePart.substring(lastOpen + 1, lastClose);
          const parts = metaPart.split(/[\/,，]/).map(s => s.trim());
          if (parts.length >= 2) {
            weapon = parts[0];
            energy = parts[1];
          }
        }

        // 从元数据中获取武器/能量
        const charMeta = meta[name] || {};
        currentChar = {
          name,
          weapon: weapon || charMeta.weapon || '',
          energy: energy || charMeta.energy || '',
          skills: [],
        };
        characters[currentElement].push(currentChar);
      }
      inTable = false;
      continue;
    }

    // === 表格检测 ===
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      // 检测表头行
      if (trimmed.includes('技能') && trimmed.includes('元素量') &&
          trimmed.includes('附着规则') && trimmed.includes('产球')) {
        inTable = true;
        tableHeaders = parseTableRow(trimmed);
        // 跳过下一行（分隔符行）
        i++;
        continue;
      }

      if (inTable) {
        // 跳过分隔符行
        if (trimmed.includes(':-:')) continue;
        // 空行结束表格
        if (trimmed === '|' || trimmed === '||') {
          inTable = false;
          continue;
        }

        // 解析数据行
        const cells = parseTableRow(trimmed);
        if (cells.length >= 6 && currentChar) {
          currentChar.skills.push({
            name: cells[0] || '',
            elementAmount: cells[1] || '',
            attachRule: cells[2] || '',
            particles: cells[3] || '',
            note: cells[4] || '',
            poise: cells[5] || '',
          });
        }
        continue;
      }
    }

    // 非表格行时重置表格状态
    if (inTable && trimmed === '') {
      inTable = false;
    }
  }

  return characters;
}

// ========== 解析表格行 ==========
function parseTableRow(row) {
  // 去掉首尾的 |，然后按 | 分割，保留空单元格
  return row
    .split('|')
    .slice(1, -1)
    .map(cell => cell.trim());
}

// ========== 生成输出 ==========
function generateOutput(characters) {
  const lines = [];
  lines.push('// 角色数据 - 从 元素附着及产球.md 解析生成');
  lines.push('// 更新角色数据请修改 src/data/元素附着及产球.md，然后运行: node scripts/parse-md.mjs');
  lines.push('');
  lines.push(`export const elementLabels = ${JSON.stringify(ELEMENT_LABELS, null, 2)};`);
  lines.push('');
  lines.push(`export const elementIds = ${JSON.stringify(ELEMENT_IDS)};`);
  lines.push('');
  lines.push(`export const weaponTypes = ${JSON.stringify(WEAPON_TYPES)};`);
  lines.push('');
  lines.push('export const characters = ' + JSON.stringify(characters, null, 2) + ';');
  return lines.join('\n');
}

main();
