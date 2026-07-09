// 角色数据 - 从元素附着及产球.md解析生成
export const elementLabels = {
  fire: '火系', water: '水系', thunder: '雷系',
  ice: '冰系', wind: '风系', rock: '岩系', grass: '草系'
};

export const elementIds = ['fire', 'water', 'thunder', 'ice', 'wind', 'rock', 'grass'];

export const weaponTypes = ['单手剑', '弓', '双手剑', '长柄武器', '法器'];

export const characters = {
  "fire": [
    {
      "name": "安柏",
      "weapon": "弓",
      "energy": "40",
      "skills": [
        {
          "name": "瞄准",
          "elementAmount": "强火",
          "attachRule": "1 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "强火",
          "attachRule": "独立",
          "particles": "4 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱火",
          "attachRule": "1 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座1",
          "elementAmount": "弱火",
          "attachRule": "与「瞄准」共用附着 CD",
          "particles": "",
          "note": "瞄准产生副箭",
          "poise": ""
        }
      ]
    },
    {
      "name": "班尼特",
      "weapon": "单手剑",
      "energy": "60",
      "skills": [
        {
          "name": "e",
          "elementAmount": "强火",
          "attachRule": "独立",
          "particles": "2~3 个（3:1）",
          "note": "",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱火",
          "attachRule": "独立",
          "particles": "3 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "强火",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座6",
          "elementAmount": "弱火",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "Q 后普攻/重击",
          "poise": ""
        }
      ]
    },
    {
      "name": "迪卢克",
      "weapon": "双手剑",
      "energy": "40",
      "skills": [
        {
          "name": "普攻/重击",
          "elementAmount": "弱火",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "Q 后",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱火",
          "attachRule": "独立",
          "particles": "1~2 个/次（2:1）",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "强火",
          "attachRule": "2.5 s/5 hit",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "可莉",
      "weapon": "法器",
      "energy": "60",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱火",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "重击",
          "elementAmount": "弱火",
          "attachRule": "独立",
          "particles": "",
          "note": "持有爆裂火花时",
          "poise": "0"
        },
        {
          "name": "E 释放",
          "elementAmount": "弱火",
          "attachRule": "与「普攻」共用附着 CD",
          "particles": "4 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 二段",
          "elementAmount": "强火",
          "attachRule": "与「普攻」共用附着 CD",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 后续",
          "elementAmount": "弱火",
          "attachRule": "与「普攻」共用附着 CD",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱火",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座1",
          "elementAmount": "弱火",
          "attachRule": "与「 Q 」共用附着 CD",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座4",
          "elementAmount": "强火",
          "attachRule": "独立",
          "particles": "",
          "note": "Q 退场/结束爆炸",
          "poise": ""
        }
      ]
    },
    {
      "name": "香菱",
      "weapon": "长柄武器",
      "energy": "80",
      "skills": [
        {
          "name": "E 后续",
          "elementAmount": "弱火",
          "attachRule": "独立",
          "particles": "1 个/次",
          "note": "锅巴",
          "poise": ""
        },
        {
          "name": "Q 释放",
          "elementAmount": "弱火",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 后续",
          "elementAmount": "弱火",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座2",
          "elementAmount": "弱火",
          "attachRule": "独立",
          "particles": "",
          "note": "普攻尾刀",
          "poise": ""
        }
      ]
    },
    {
      "name": "辛焱",
      "weapon": "双手剑",
      "energy": "60",
      "skills": [
        {
          "name": "E 释放",
          "elementAmount": "弱火",
          "attachRule": "独立",
          "particles": "4 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 持续",
          "elementAmount": "弱火",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱火",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "胡桃",
      "weapon": "长柄武器",
      "energy": "60",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱火",
          "attachRule": "2.5 s/3 hit",
          "particles": "2~3 个/5 s（1:1）",
          "note": "E 后",
          "poise": ""
        },
        {
          "name": "重击",
          "elementAmount": "弱火",
          "attachRule": "0.5 sCD",
          "particles": "与「普攻」共用产球 CD",
          "note": "E 后",
          "poise": ""
        },
        {
          "name": "E 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "彼岸蝶舞，9 s",
          "poise": "0.5"
        },
        {
          "name": "E 后续",
          "elementAmount": "弱火",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "强火",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座6",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "10 s",
          "poise": "0"
        }
      ]
    },
    {
      "name": "烟绯",
      "weapon": "法器",
      "energy": "80",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱火",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "重击",
          "elementAmount": "弱火",
          "attachRule": "独立",
          "particles": "",
          "note": "含突破天赋2",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱火",
          "attachRule": "独立",
          "particles": "3 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "强火",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座1",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "丹火印数量n，10 s",
          "poise": "1 - 0.1 * n"
        }
      ]
    },
    {
      "name": "宵宫",
      "weapon": "弓",
      "energy": "60",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱火",
          "attachRule": "2.5 s/3 hit",
          "particles": "1 个/2 s",
          "note": "E 后",
          "poise": ""
        },
        {
          "name": "瞄准",
          "elementAmount": "弱火",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "瞄准二蓄",
          "elementAmount": "弱火",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 释放",
          "elementAmount": "强火",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 持续",
          "elementAmount": "弱火",
          "attachRule": "与「Q 释放」共用附着 CD",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座6",
          "elementAmount": "弱火",
          "attachRule": "与「普攻」共用附着 CD",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "托马",
      "weapon": "长柄武器",
      "energy": "80",
      "skills": [
        {
          "name": "E",
          "elementAmount": "弱火",
          "attachRule": "独立",
          "particles": "3~4 个（1:1）",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 释放",
          "elementAmount": "强火",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 持续",
          "elementAmount": "弱火",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "迪希雅",
      "weapon": "双手剑",
      "energy": "70",
      "skills": [
        {
          "name": "E 释放",
          "elementAmount": "弱火",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "净焰剑狱，12 s",
          "poise": "0.7"
        },
        {
          "name": "E 后续",
          "elementAmount": "弱火",
          "attachRule": "独立",
          "particles": "1 个/2.5 s",
          "note": "最多5次",
          "poise": ""
        },
        {
          "name": "Q 持续",
          "elementAmount": "弱火",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": "0"
        },
        {
          "name": "Q 结束",
          "elementAmount": "弱火",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "突破天赋1",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "熔金铸躯，9 s",
          "poise": "0"
        }
      ]
    },
    {
      "name": "林尼",
      "weapon": "弓",
      "energy": "60",
      "skills": [
        {
          "name": "瞄准",
          "elementAmount": "弱火",
          "attachRule": "独立",
          "particles": "",
          "note": "创造猫猫盒",
          "poise": ""
        },
        {
          "name": "瞄准后续",
          "elementAmount": "弱火",
          "attachRule": "1 sCD",
          "particles": "",
          "note": "礼花术弹，含 6 命",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱火",
          "attachRule": "独立",
          "particles": "5 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱火",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "怪笑帽帽猫",
          "poise": "0"
        }
      ]
    },
    {
      "name": "夏沃蕾",
      "weapon": "长柄武器",
      "energy": "60",
      "skills": [
        {
          "name": "E",
          "elementAmount": "弱火",
          "attachRule": "独立",
          "particles": "4 个/4 s",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "瞄准",
          "poise": "0.3"
        },
        {
          "name": "Q 释放",
          "elementAmount": "强火",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 后续",
          "elementAmount": "弱火",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "最多附着 2 次",
          "poise": ""
        },
        {
          "name": "命座2",
          "elementAmount": "弱火",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "连锁殉爆",
          "poise": ""
        }
      ]
    },
    {
      "name": "嘉明",
      "weapon": "双手剑",
      "energy": "60",
      "skills": [
        {
          "name": "下落攻击",
          "elementAmount": "弱火",
          "attachRule": "独立",
          "particles": "2 个/3 s",
          "note": "E 后",
          "poise": "0"
        },
        {
          "name": "E",
          "elementAmount": "弱火",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": "0.6"
        },
        {
          "name": "Q",
          "elementAmount": "弱火",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "舞兽态势，12 s",
          "poise": "0.5"
        }
      ]
    },
    {
      "name": "阿蕾奇诺",
      "weapon": "长柄武器",
      "energy": "60",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱火",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "红死之宴",
          "poise": ""
        },
        {
          "name": "重击",
          "elementAmount": "弱火",
          "attachRule": "0.5 sCD",
          "particles": "",
          "note": "红死之宴",
          "poise": ""
        },
        {
          "name": "重击持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "",
          "poise": "0.2"
        },
        {
          "name": "E 二段",
          "elementAmount": "弱火",
          "attachRule": "独立",
          "particles": "5 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 释放/后续",
          "elementAmount": "弱火",
          "attachRule": "10 s/3 hit",
          "particles": "",
          "note": "最多附着 3 次",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱火",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座1",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "红死之宴下普攻/重击",
          "poise": "0"
        },
        {
          "name": "命座2",
          "elementAmount": "弱火",
          "attachRule": "独立",
          "particles": "",
          "note": "回收血偿勒令 · 结",
          "poise": ""
        }
      ]
    },
    {
      "name": "旅行者（火）",
      "weapon": "单手剑",
      "energy": "70",
      "skills": [
        {
          "name": "e 持续",
          "elementAmount": "弱火",
          "attachRule": "2.5 s/3 hit",
          "particles": "1 个/2.9 s",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 释放",
          "elementAmount": "弱火",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 持续",
          "elementAmount": "弱火",
          "attachRule": "2.5 s/3 hit",
          "particles": "1 个/2.9 s",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱火",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座1",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "对抗「古斯托特」化形的蚀灭的源焰之主时",
          "poise": "0.5"
        },
        {
          "name": "命座6",
          "elementAmount": "弱火",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "夜魂状态下普攻/重击",
          "poise": ""
        }
      ]
    },
    {
      "name": "玛薇卡",
      "weapon": "双手剑",
      "energy": "无",
      "skills": [
        {
          "name": "普攻/重击",
          "elementAmount": "弱火",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "E/Q 后",
          "poise": ""
        },
        {
          "name": "e/E 释放",
          "elementAmount": "弱火",
          "attachRule": "独立",
          "particles": "5 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "e",
          "elementAmount": "弱火",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱火",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "死生之炉，7 s",
          "poise": "0"
        },
        {
          "name": "命座 6",
          "elementAmount": "无附着",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "杜林",
      "weapon": "单手剑",
      "energy": "70",
      "skills": [
        {
          "name": "E E/A",
          "elementAmount": "弱火",
          "attachRule": "2.5 s/3 hit",
          "particles": "4 个",
          "note": "「E A」转变 · 黑度之否之间",
          "poise": "0"
        },
        {
          "name": "Q 释放",
          "elementAmount": "弱火",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 后续",
          "elementAmount": "弱火",
          "attachRule": "1.5 sCD或2 hit",
          "particles": "",
          "note": "白龙遵循时间计数器，黑龙遵循次数计数器",
          "poise": ""
        }
      ]
    },
    {
      "name": "尼可",
      "weapon": "法器",
      "energy": "无",
      "skills": [
        {
          "name": "E",
          "elementAmount": "弱火",
          "attachRule": "独立",
          "particles": "5 个",
          "note": "",
          "poise": "0"
        },
        {
          "name": "Q 释放",
          "elementAmount": "弱火",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 后续",
          "elementAmount": "无附着",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座 1",
          "elementAmount": "无附着",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    }
  ],
  "water": [
    {
      "name": "芭芭拉",
      "weapon": "法器",
      "energy": "80",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱水",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "重击",
          "elementAmount": "弱水",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 释放",
          "elementAmount": "弱水",
          "attachRule": "2.5 s/3 hit",
          "particles": "0 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 持续",
          "elementAmount": "弱水",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "莫娜",
      "weapon": "法器",
      "energy": "60",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱水",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "重击",
          "elementAmount": "弱水",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 后续",
          "elementAmount": "弱水",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 结束",
          "elementAmount": "弱水",
          "attachRule": "独立",
          "particles": "3~4 个（2:1）",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 持续",
          "elementAmount": "弱水",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "泡影",
          "poise": ""
        },
        {
          "name": "Q 结束",
          "elementAmount": "强水",
          "attachRule": "与「Q 持续」共用附着 CD",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "冲刺",
          "elementAmount": "弱水",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "突破天赋1",
          "elementAmount": "弱水",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "行秋",
      "weapon": "单手剑",
      "energy": "80",
      "skills": [
        {
          "name": "E",
          "elementAmount": "弱水",
          "attachRule": "独立",
          "particles": "5 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 持续",
          "elementAmount": "弱水",
          "attachRule": "独立",
          "particles": "",
          "note": "雨帘剑，15 s",
          "poise": "0.3"
        },
        {
          "name": "Q 持续",
          "elementAmount": "弱水",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "珊瑚宫心海",
      "weapon": "法器",
      "energy": "70",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱水",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "重击",
          "elementAmount": "弱水",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱水",
          "attachRule": "独立",
          "particles": "0~1 个/次（1:2）",
          "note": "只有前6次攻击会产球，2 s/次",
          "poise": ""
        },
        {
          "name": "Q 释放",
          "elementAmount": "强水",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "仪来羽衣，10 s",
          "poise": "0.25"
        },
        {
          "name": "命座1",
          "elementAmount": "弱水",
          "attachRule": "独立",
          "particles": "",
          "note": "游鱼",
          "poise": ""
        }
      ]
    },
    {
      "name": "神里绫人",
      "weapon": "单手剑",
      "energy": "80",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱水",
          "attachRule": "2.5 s/3 hit",
          "particles": "1~2 个/1.9 s（1:1）",
          "note": "E 后",
          "poise": ""
        },
        {
          "name": "E 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "泷廻鉴花，6 s",
          "poise": "0.5"
        },
        {
          "name": "E 后续",
          "elementAmount": "弱水",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "水影",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱水",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座6",
          "elementAmount": "弱水",
          "attachRule": "独立",
          "particles": "",
          "note": "额外瞬水剑",
          "poise": ""
        }
      ]
    },
    {
      "name": "达达利亚",
      "weapon": "弓",
      "energy": "60",
      "skills": [
        {
          "name": "瞄准",
          "elementAmount": "弱水",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "断流·闪",
          "elementAmount": "弱水",
          "attachRule": "2.5 s/3 hit",
          "particles": "1 个/3 s",
          "note": "蓄力命中断流下敌人，含4命",
          "poise": ""
        },
        {
          "name": "断流·破",
          "elementAmount": "强水",
          "attachRule": "独立",
          "particles": "",
          "note": "击败断流下敌人",
          "poise": ""
        },
        {
          "name": "E 释放",
          "elementAmount": "强水",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "纯水武装，1~30 s",
          "poise": "0.5"
        },
        {
          "name": "普攻",
          "elementAmount": "弱水",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "E 后",
          "poise": ""
        },
        {
          "name": "重击",
          "elementAmount": "弱水",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "E 后",
          "poise": ""
        },
        {
          "name": "断流·斩",
          "elementAmount": "弱水",
          "attachRule": "独立",
          "particles": "",
          "note": "含4命",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "强水",
          "attachRule": "独立",
          "particles": "",
          "note": "含断流·爆",
          "poise": ""
        }
      ]
    },
    {
      "name": "夜兰",
      "weapon": "弓",
      "energy": "70",
      "skills": [
        {
          "name": "瞄准",
          "elementAmount": "弱水",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "瞄准二蓄",
          "elementAmount": "弱水",
          "attachRule": "0.3 sCD",
          "particles": "",
          "note": "破局矢",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱水",
          "attachRule": "独立",
          "particles": "4 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "",
          "poise": "0.2"
        },
        {
          "name": "Q 释放",
          "elementAmount": "强水",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 持续",
          "elementAmount": "弱水",
          "attachRule": "2 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座2",
          "elementAmount": "弱水",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座6",
          "elementAmount": "弱水",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "特殊破局失",
          "poise": ""
        }
      ]
    },
    {
      "name": "坎蒂丝",
      "weapon": "长柄武器",
      "energy": "60",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱水",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "Q 后",
          "poise": ""
        },
        {
          "name": "重击",
          "elementAmount": "弱水",
          "attachRule": "0.5 sCD",
          "particles": "",
          "note": "Q 后",
          "poise": ""
        },
        {
          "name": "e",
          "elementAmount": "弱水",
          "attachRule": "独立",
          "particles": "2 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱水",
          "attachRule": "独立",
          "particles": "3 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱水",
          "attachRule": "独立",
          "particles": "",
          "note": "含6命",
          "poise": ""
        }
      ]
    },
    {
      "name": "妮露",
      "weapon": "单手剑",
      "energy": "70",
      "skills": [
        {
          "name": "E 释放",
          "elementAmount": "弱水",
          "attachRule": "2.5 s/3 hit",
          "particles": "1~2 个（1:1）",
          "note": "",
          "poise": "0.6"
        },
        {
          "name": "E A/E",
          "elementAmount": "弱水",
          "attachRule": "与「E 释放」共用附着CD",
          "particles": "1 个/次",
          "note": "剑/旋舞步",
          "poise": "0.6"
        },
        {
          "name": "水月/水轮",
          "elementAmount": "弱水",
          "attachRule": "与「E 释放」共用附着CD",
          "particles": "1 个",
          "note": "翩转状态下A/E",
          "poise": "0.6"
        },
        {
          "name": "E 持续",
          "elementAmount": "弱水",
          "attachRule": "1.9 s/4 hit",
          "particles": "",
          "note": "祷月状态，8 s",
          "poise": "0.5"
        },
        {
          "name": "Q",
          "elementAmount": "弱水",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "那维莱特",
      "weapon": "法器",
      "energy": "70",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱水",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "重击蓄力",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "诉论心证",
          "poise": "0.5"
        },
        {
          "name": "重击",
          "elementAmount": "弱水",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "重击持续",
          "elementAmount": "弱水",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "衡平推裁",
          "poise": "0.5"
        },
        {
          "name": "E",
          "elementAmount": "弱水",
          "attachRule": "独立",
          "particles": "4 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱水",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座1",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "重击蓄力/重击持续",
          "poise": "0"
        },
        {
          "name": "命座6",
          "elementAmount": "弱水",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "洪流",
          "poise": ""
        }
      ]
    },
    {
      "name": "旅行者（水）",
      "weapon": "单手剑",
      "energy": "80",
      "skills": [
        {
          "name": "e",
          "elementAmount": "弱水",
          "attachRule": "独立",
          "particles": "3~4 个（2:1）",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 持续",
          "elementAmount": "弱水",
          "attachRule": "1.5 sCD",
          "particles": "",
          "note": "6 s",
          "poise": "0.5"
        },
        {
          "name": "Q 后续",
          "elementAmount": "弱水",
          "attachRule": "8 s/4 hit",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "芙宁娜",
      "weapon": "单手剑",
      "energy": "60",
      "skills": [
        {
          "name": "E 释放",
          "elementAmount": "弱水",
          "attachRule": "独立",
          "particles": "",
          "note": "召唤物传送有1.5秒冷却",
          "poise": ""
        },
        {
          "name": "E 后续",
          "elementAmount": "弱水",
          "attachRule": "2 hit",
          "particles": "1 个/2.5 s",
          "note": "乌瑟勋爵，2.9 s/ 次",
          "poise": ""
        },
        {
          "name": "E 后续",
          "elementAmount": "弱水",
          "attachRule": "2 hit",
          "particles": "与「乌瑟勋爵」共用产球 CD",
          "note": "海薇玛，1.19 s/ 次，攻击和传送有0.5秒的全局冷却",
          "poise": ""
        },
        {
          "name": "E 后续",
          "elementAmount": "弱水",
          "attachRule": "独立",
          "particles": "与「乌瑟勋爵」共用产球 CD",
          "note": "谢贝蕾妲，4.8 s/ 次",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱水",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座6",
          "elementAmount": "弱水",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "E 后普攻",
          "poise": ""
        },
        {
          "name": "命座6",
          "elementAmount": "弱水",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "E 后重击",
          "poise": ""
        }
      ]
    },
    {
      "name": "希格雯",
      "weapon": "弓",
      "energy": "70",
      "skills": [
        {
          "name": "瞄准",
          "elementAmount": "弱水",
          "attachRule": "2 sCD",
          "particles": "",
          "note": "含关心气泡",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱水",
          "attachRule": "2 sCD",
          "particles": "4 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "瞄准",
          "poise": "0.5"
        },
        {
          "name": "Q",
          "elementAmount": "弱水",
          "attachRule": "1.9 sCD",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "",
          "poise": "0"
        }
      ]
    },
    {
      "name": "玛拉妮",
      "weapon": "法器",
      "energy": "60",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱水",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "重击",
          "elementAmount": "弱水",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "普攻一二三蓄",
          "elementAmount": "弱水",
          "attachRule": "独立",
          "particles": "4~5 个/9999 s（1:1）（E 后刷新）",
          "note": "E 后",
          "poise": "0"
        },
        {
          "name": "E 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "冲浪，6 s",
          "poise": "0.15"
        },
        {
          "name": "Q",
          "elementAmount": "弱水",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "塔利雅",
      "weapon": "单手剑",
      "energy": "60",
      "skills": [
        {
          "name": "E",
          "elementAmount": "弱水",
          "attachRule": "独立",
          "particles": "3 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "强水",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "爱诺",
      "weapon": "双手剑",
      "energy": "50",
      "skills": [
        {
          "name": "E 释放",
          "elementAmount": "弱水",
          "attachRule": "2.5 s/3 hit",
          "particles": "3 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 瞄准",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "",
          "poise": "0.5"
        },
        {
          "name": "E 结束",
          "elementAmount": "弱水",
          "attachRule": "与「E 释放」共用附着 CD",
          "particles": "与「E 释放」共用产球 CD",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 后续",
          "elementAmount": "弱水",
          "attachRule": "3 sCD",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 后续",
          "elementAmount": "弱水",
          "attachRule": "2.1 sCD",
          "particles": "",
          "note": "满辉",
          "poise": ""
        },
        {
          "name": "命座2",
          "elementAmount": "弱水",
          "attachRule": "独立",
          "particles": "",
          "note": "额外水弹",
          "poise": ""
        }
      ]
    },
    {
      "name": "哥伦比亚",
      "weapon": "法器",
      "energy": "60",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱水",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 释放",
          "elementAmount": "弱水",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 持续",
          "elementAmount": "弱水",
          "attachRule": "独立",
          "particles": "1~2 个/2 次（2:1）",
          "note": "2 s/次",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "强水",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座1",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "引力干涉·月绽放，8 s",
          "poise": "0.3"
        }
      ]
    }
  ],
  "thunder": [
    {
      "name": "丽莎",
      "weapon": "法器",
      "energy": "80",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱雷",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "重击",
          "elementAmount": "弱雷",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "e",
          "elementAmount": "弱雷",
          "attachRule": "与「普攻」共用附着 CD",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "强雷",
          "attachRule": "独立",
          "particles": "5 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "咏唱，3 s",
          "poise": "0.5"
        },
        {
          "name": "Q",
          "elementAmount": "弱雷",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座2",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "咏唱，3 s",
          "poise": "0"
        }
      ]
    },
    {
      "name": "雷泽",
      "weapon": "双手剑",
      "energy": "80",
      "skills": [
        {
          "name": "e",
          "elementAmount": "强雷",
          "attachRule": "独立",
          "particles": "3 个",
          "note": "Q 存在时不会产球",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "强雷",
          "attachRule": "独立",
          "particles": "4 个",
          "note": "Q 存在时不会产球",
          "poise": ""
        },
        {
          "name": "Q 释放",
          "elementAmount": "强雷",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "雷狼，15 s",
          "poise": "0.5"
        },
        {
          "name": "Q 后续",
          "elementAmount": "弱雷",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座6",
          "elementAmount": "弱雷",
          "attachRule": "独立",
          "particles": "",
          "note": "落雷",
          "poise": ""
        }
      ]
    },
    {
      "name": "菲谢尔",
      "weapon": "弓",
      "energy": "60",
      "skills": [
        {
          "name": "瞄准",
          "elementAmount": "弱雷",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 释放",
          "elementAmount": "弱雷",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 后续",
          "elementAmount": "弱雷",
          "attachRule": "5 s/4 hit",
          "particles": "0~1 个/次（1:2）",
          "note": "奥兹，1 s/次",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱雷",
          "attachRule": "5 s/4 hit",
          "particles": "",
          "note": "奥兹，2.5 s",
          "poise": "0"
        },
        {
          "name": "突破天赋1和2",
          "elementAmount": "弱雷",
          "attachRule": "独立",
          "particles": "",
          "note": "天赋2触发CD为0.5秒",
          "poise": ""
        },
        {
          "name": "命座4",
          "elementAmount": "强雷",
          "attachRule": "与「 Q 」共用附着 CD",
          "particles": "",
          "note": "周围雷伤",
          "poise": ""
        },
        {
          "name": "命座6",
          "elementAmount": "弱雷",
          "attachRule": "与「E 后续」共用附着 CD",
          "particles": "",
          "note": "协同",
          "poise": ""
        }
      ]
    },
    {
      "name": "北斗",
      "weapon": "双手剑",
      "energy": "80",
      "skills": [
        {
          "name": "E",
          "elementAmount": "强雷",
          "attachRule": "独立",
          "particles": "2 个",
          "note": "每层弹反额外再加1球",
          "poise": ""
        },
        {
          "name": "Q 释放",
          "elementAmount": "超强雷",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 持续",
          "elementAmount": "弱雷",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "雷兽之盾，15 s",
          "poise": "0.5"
        },
        {
          "name": "命座4",
          "elementAmount": "弱雷",
          "attachRule": "与「Q 持续」共用附着CD",
          "particles": "",
          "note": "额外雷伤",
          "poise": ""
        }
      ]
    },
    {
      "name": "刻晴",
      "weapon": "单手剑",
      "energy": "40",
      "skills": [
        {
          "name": "普攻/重击",
          "elementAmount": "弱雷",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "E 后续后",
          "poise": ""
        },
        {
          "name": "E 释放",
          "elementAmount": "弱雷",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 后续/结束",
          "elementAmount": "强雷",
          "attachRule": "2.5 s/3 hit",
          "particles": "2~3 个（1:1）",
          "note": "",
          "poise": "0"
        },
        {
          "name": "Q",
          "elementAmount": "弱雷",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座1",
          "elementAmount": "弱雷",
          "attachRule": "与「E 后续/结束」共用附着 CD",
          "particles": "",
          "note": "出伤先于E",
          "poise": ""
        }
      ]
    },
    {
      "name": "旅行者（雷）",
      "weapon": "单手剑",
      "energy": "80",
      "skills": [
        {
          "name": "E",
          "elementAmount": "弱雷",
          "attachRule": "2.5 s/3 hit",
          "particles": "1 个/次",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 释放",
          "elementAmount": "弱雷",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 持续",
          "elementAmount": "弱雷",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "雷电将军",
      "weapon": "长柄武器",
      "energy": "90",
      "skills": [
        {
          "name": "普攻/重击",
          "elementAmount": "弱雷",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "Q 后",
          "poise": ""
        },
        {
          "name": "E 释放",
          "elementAmount": "弱雷",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 后续",
          "elementAmount": "弱雷",
          "attachRule": "2.5 s/3 hit",
          "particles": "0~1 个/次（1:1）",
          "note": "1 s/次",
          "poise": ""
        },
        {
          "name": "Q 释放",
          "elementAmount": "强雷",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "梦想一心，7 s",
          "poise": "0"
        }
      ]
    },
    {
      "name": "九条裟罗",
      "weapon": "弓",
      "energy": "80",
      "skills": [
        {
          "name": "瞄准",
          "elementAmount": "弱雷",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱雷",
          "attachRule": "独立",
          "particles": "3 个",
          "note": "蓄力引爆触发",
          "poise": ""
        },
        {
          "name": "Q 释放",
          "elementAmount": "弱雷",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 持续",
          "elementAmount": "弱雷",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座2",
          "elementAmount": "弱雷",
          "attachRule": "独立",
          "particles": "",
          "note": "额外乌羽",
          "poise": ""
        }
      ]
    },
    {
      "name": "八重神子",
      "weapon": "法器",
      "energy": "90",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱雷",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "重击",
          "elementAmount": "弱雷",
          "attachRule": "0.5 sCD",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 后续",
          "elementAmount": "弱雷",
          "attachRule": "2.5 s/3 hit",
          "particles": "1 个/2.5 s",
          "note": "杀生樱共用产球 CD，每2.8 s攻击一次",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱雷",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "久岐忍",
      "weapon": "单手剑",
      "energy": "60",
      "skills": [
        {
          "name": "E",
          "elementAmount": "弱雷",
          "attachRule": "2.5 s/3 hit",
          "particles": "0~1 个/次/0.2 s（11:9）",
          "note": "草轮，1.5 s/次",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱雷",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座4",
          "elementAmount": "弱雷",
          "attachRule": "独立",
          "particles": "与「 E 」共用产球 CD",
          "note": "草标",
          "poise": ""
        }
      ]
    },
    {
      "name": "多莉",
      "weapon": "双手剑",
      "energy": "80",
      "skills": [
        {
          "name": "E",
          "elementAmount": "弱雷",
          "attachRule": "2.5 s/3 hit",
          "particles": "2 个/1.5 s",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱雷",
          "attachRule": "3 sCD",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座6",
          "elementAmount": "弱雷",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "E 后普攻/重击",
          "poise": ""
        }
      ]
    },
    {
      "name": "赛诺",
      "weapon": "长柄武器",
      "energy": "80",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱雷",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "Q 后",
          "poise": ""
        },
        {
          "name": "重击",
          "elementAmount": "弱雷",
          "attachRule": "0.5 sCD",
          "particles": "",
          "note": "Q 后",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱雷",
          "attachRule": "0.2 sCD",
          "particles": "3个",
          "note": "",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱雷",
          "attachRule": "独立",
          "particles": "1~2 个（2:1）",
          "note": "Q 后",
          "poise": ""
        },
        {
          "name": "Q 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "启途誓使，10~18 s",
          "poise": "0.5"
        },
        {
          "name": "突破天赋1",
          "elementAmount": "弱雷",
          "attachRule": "2.5 sCD",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座6",
          "elementAmount": "弱雷",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "赛索斯",
      "weapon": "弓",
      "energy": "60",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱雷",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "Q 后",
          "poise": ""
        },
        {
          "name": "瞄准",
          "elementAmount": "弱雷",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "瞄准二蓄",
          "elementAmount": "强雷",
          "attachRule": "独立",
          "particles": "",
          "note": "贯影箭",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱雷",
          "attachRule": "独立",
          "particles": "2 个",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "克洛琳德",
      "weapon": "单手剑",
      "energy": "60",
      "skills": [
        {
          "name": "E A/E",
          "elementAmount": "弱雷",
          "attachRule": "2.5 s/3 hit",
          "particles": "1 个/2 s",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱雷",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座1",
          "elementAmount": "弱雷",
          "attachRule": "1 sCD",
          "particles": "夜巡之影，与「E A/E」共用产球 CD",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座2",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "",
          "poise": "0.3"
        },
        {
          "name": "命座6",
          "elementAmount": "弱雷",
          "attachRule": "与「E A/E」共用附着 CD",
          "particles": "明烛之影，与「E A/E」共用产球 CD",
          "note": "狩夜之巡，12 s",
          "poise": "0"
        }
      ]
    },
    {
      "name": "欧洛伦",
      "weapon": "弓",
      "energy": "60",
      "skills": [
        {
          "name": "瞄准",
          "elementAmount": "弱雷",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱雷",
          "attachRule": "2.5 s/3 hit",
          "particles": "3 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱雷",
          "attachRule": "3 sCD",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "突破天赋1",
          "elementAmount": "弱雷",
          "attachRule": "与「 E 」共用附着 CD",
          "particles": "",
          "note": "显象超感",
          "poise": ""
        }
      ]
    },
    {
      "name": "瓦雷莎",
      "weapon": "法器",
      "energy": "30",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱雷",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "重击",
          "elementAmount": "弱雷",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": "0"
        },
        {
          "name": "下落攻击",
          "elementAmount": "弱雷",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "",
          "attachRule": "",
          "particles": "2~3 个（1:1）",
          "note": "逐击",
          "poise": "0.15"
        },
        {
          "name": "E e",
          "elementAmount": "弱雷",
          "attachRule": "与「重击」共用附着 CD",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E E",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "突驰烈进",
          "poise": "0.2"
        },
        {
          "name": "q",
          "elementAmount": "弱雷",
          "attachRule": "与「重击」共用附着 CD",
          "particles": "",
          "note": "大火山崩落",
          "poise": "0.15"
        },
        {
          "name": "Q",
          "elementAmount": "弱雷",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座2",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "极限驱动",
          "poise": "0"
        }
      ]
    },
    {
      "name": "伊安珊",
      "weapon": "长柄武器",
      "energy": "70",
      "skills": [
        {
          "name": "重击",
          "elementAmount": "弱雷",
          "attachRule": "0.5 sCD",
          "particles": "",
          "note": "雷霆飞缒",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱雷",
          "attachRule": "2.5 s/3 hit",
          "particles": "4 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱雷",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "伊涅芙",
      "weapon": "长柄武器",
      "energy": "60",
      "skills": [
        {
          "name": "E",
          "elementAmount": "弱雷",
          "attachRule": "独立",
          "particles": "0~1 个/次（1:2）",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 后续",
          "elementAmount": "弱雷",
          "attachRule": "独立",
          "particles": "与「 E 」共用产球 CD",
          "note": "薇尔琪塔，2 s/次",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱雷",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "菲林斯",
      "weapon": "长柄武器",
      "energy": "30",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱雷",
          "attachRule": "2.5 s/3 hit",
          "particles": "1 个/2 s",
          "note": "E 后",
          "poise": ""
        },
        {
          "name": "重击",
          "elementAmount": "弱雷",
          "attachRule": "独立",
          "particles": "",
          "note": "E 后",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱雷",
          "attachRule": "独立",
          "particles": "",
          "note": "E 后，北国枪阵",
          "poise": ""
        },
        {
          "name": "E 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "幽焰显迹，10 s",
          "poise": "0.5"
        },
        {
          "name": "Q",
          "elementAmount": "弱雷",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    }
  ],
  "ice": [
    {
      "name": "凯亚",
      "weapon": "单手剑",
      "energy": "60",
      "skills": [
        {
          "name": "E",
          "elementAmount": "强冰",
          "attachRule": "独立",
          "particles": "2~3 个（1:2）",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "重云",
      "weapon": "双手剑",
      "energy": "40",
      "skills": [
        {
          "name": "普攻/重击",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "E 后",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "强冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "4 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱冰",
          "attachRule": "独立",
          "particles": "",
          "note": "含6命",
          "poise": ""
        },
        {
          "name": "突破天赋2",
          "elementAmount": "弱冰",
          "attachRule": "独立",
          "particles": "",
          "note": "领域消失",
          "poise": ""
        },
        {
          "name": "命座1",
          "elementAmount": "弱冰",
          "attachRule": "独立",
          "particles": "",
          "note": "普攻四段",
          "poise": ""
        }
      ]
    },
    {
      "name": "七七",
      "weapon": "单手剑",
      "energy": "80",
      "skills": [
        {
          "name": "E",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "2 个/6 s",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 持续",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 后续",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "与「 E 」共用产球 CD",
          "note": "寒病鬼差协同",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "强冰",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "迪奥娜",
      "weapon": "弓",
      "energy": "80",
      "skills": [
        {
          "name": "瞄准",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "e",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "0~1 个/只（1:4）",
          "note": "2只猫爪",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "0~1 个/只（1:4）",
          "note": "5只猫爪",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "甘雨",
      "weapon": "弓",
      "energy": "60",
      "skills": [
        {
          "name": "瞄准",
          "elementAmount": "弱冰",
          "attachRule": "独立",
          "particles": "",
          "note": "含霜华矢",
          "poise": ""
        },
        {
          "name": "瞄准二段",
          "elementAmount": "弱冰",
          "attachRule": "独立",
          "particles": "",
          "note": "霜华绽发",
          "poise": ""
        },
        {
          "name": "E 释放",
          "elementAmount": "弱冰",
          "attachRule": "独立",
          "particles": "2 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 结束",
          "elementAmount": "弱冰",
          "attachRule": "独立",
          "particles": "2 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 持续",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "罗莎莉亚",
      "weapon": "长柄武器",
      "energy": "60",
      "skills": [
        {
          "name": "E",
          "elementAmount": "弱冰",
          "attachRule": "独立",
          "particles": "3 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱冰",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "优菈",
      "weapon": "双手剑",
      "energy": "80",
      "skills": [
        {
          "name": "e",
          "elementAmount": "弱冰",
          "attachRule": "独立",
          "particles": "1~2 个（1:1）",
          "note": "",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱冰",
          "attachRule": "独立",
          "particles": "2~3 个（1:1）",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "冷酷之心，18 s",
          "poise": "0.5"
        },
        {
          "name": "E 后续",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "冰涡之剑",
          "poise": ""
        },
        {
          "name": "Q 释放",
          "elementAmount": "强冰",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "光降之剑，7 s",
          "poise": "0"
        }
      ]
    },
    {
      "name": "神里绫华",
      "weapon": "单手剑",
      "energy": "80",
      "skills": [
        {
          "name": "普攻（1~4段）",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "冲刺后",
          "poise": ""
        },
        {
          "name": "普攻（5段）",
          "elementAmount": "弱冰",
          "attachRule": "0.5 sCD",
          "particles": "",
          "note": "冲刺后",
          "poise": ""
        },
        {
          "name": "重击",
          "elementAmount": "弱冰",
          "attachRule": "0.5 sCD",
          "particles": "",
          "note": "冲刺后",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "强冰",
          "attachRule": "独立",
          "particles": "4~5 个（1:1）",
          "note": "",
          "poise": ""
        },
        {
          "name": "冲刺",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 持续",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "含2命",
          "poise": ""
        },
        {
          "name": "Q 结束",
          "elementAmount": "弱冰",
          "attachRule": "独立",
          "particles": "",
          "note": "含2命",
          "poise": ""
        }
      ]
    },
    {
      "name": "埃洛伊",
      "weapon": "弓",
      "energy": "40",
      "skills": [
        {
          "name": "瞄准",
          "elementAmount": "弱冰",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "普攻",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "E 后",
          "poise": ""
        },
        {
          "name": "E 释放",
          "elementAmount": "弱冰",
          "attachRule": "独立",
          "particles": "5 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 后续",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "强冰",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "申鹤",
      "weapon": "长柄武器",
      "energy": "80",
      "skills": [
        {
          "name": "e",
          "elementAmount": "弱冰",
          "attachRule": "0.1 sCD",
          "particles": "3 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "强冰",
          "attachRule": "独立",
          "particles": "4 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 释放",
          "elementAmount": "弱冰",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 持续",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "莱依拉",
      "weapon": "单手剑",
      "energy": "40",
      "skills": [
        {
          "name": "E 释放",
          "elementAmount": "弱冰",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 后续",
          "elementAmount": "弱冰",
          "attachRule": "3 s/7 hit",
          "particles": "1~2 个/3 s（2:1）",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "米卡",
      "weapon": "长柄武器",
      "energy": "70",
      "skills": [
        {
          "name": "e",
          "elementAmount": "弱冰",
          "attachRule": "独立",
          "particles": "4 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "4 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 后续",
          "elementAmount": "弱冰",
          "attachRule": "与「 E 」共用附着 CD",
          "particles": "",
          "note": "冰星破片",
          "poise": ""
        }
      ]
    },
    {
      "name": "菲米尼",
      "weapon": "双手剑",
      "energy": "60",
      "skills": [
        {
          "name": "E",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "2 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱冰",
          "attachRule": "与「 E 」共用附着 CD",
          "particles": "1 个",
          "note": "高压粉碎：0阶和4阶",
          "poise": ""
        },
        {
          "name": "E 持续",
          "elementAmount": "弱冰",
          "attachRule": "与「 E 」共用附着 CD",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱冰",
          "attachRule": "独立",
          "particles": "",
          "note": "潜猎模式，10 s",
          "poise": "0.5"
        }
      ]
    },
    {
      "name": "莱欧斯利",
      "weapon": "法器",
      "energy": "60",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "1 个/2 s",
          "note": "E 后产球",
          "poise": ""
        },
        {
          "name": "重击",
          "elementAmount": "弱冰",
          "attachRule": "独立",
          "particles": "与「普攻」共用产球 CD",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "寒烈的惩裁，10 s",
          "poise": "0.5"
        },
        {
          "name": "Q",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "0.1秒一下",
          "poise": ""
        },
        {
          "name": "命座6",
          "elementAmount": "弱冰",
          "attachRule": "独立",
          "particles": "",
          "note": "冰锥",
          "poise": ""
        }
      ]
    },
    {
      "name": "夏洛蒂",
      "weapon": "法器",
      "energy": "80",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "重击",
          "elementAmount": "弱冰",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "e",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "3 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱冰",
          "attachRule": "与「 e 」共用附着 CD",
          "particles": "5 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 持续",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "",
          "poise": "0.5"
        },
        {
          "name": "Q 释放",
          "elementAmount": "强冰",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 持续",
          "elementAmount": "弱冰",
          "attachRule": "4 s/4 hit",
          "particles": "",
          "note": "临事场域",
          "poise": ""
        },
        {
          "name": "命座6",
          "elementAmount": "弱冰",
          "attachRule": "独立",
          "particles": "",
          "note": "协同攻击",
          "poise": ""
        }
      ]
    },
    {
      "name": "茜特拉莉",
      "weapon": "法器",
      "energy": "60",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "重击",
          "elementAmount": "弱冰",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 释放",
          "elementAmount": "弱冰",
          "attachRule": "独立",
          "particles": "5 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 持续",
          "elementAmount": "弱冰",
          "attachRule": "1.5 sCD",
          "particles": "",
          "note": "霜陨风暴",
          "poise": ""
        },
        {
          "name": "Q 释放",
          "elementAmount": "强冰",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 后续",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "宿灵之鹬",
          "poise": ""
        },
        {
          "name": "命座4",
          "elementAmount": "弱冰",
          "attachRule": "独立",
          "particles": "",
          "note": "黑星",
          "poise": ""
        }
      ]
    },
    {
      "name": "爱可菲",
      "weapon": "长柄武器",
      "energy": "60",
      "skills": [
        {
          "name": "e 释放",
          "elementAmount": "弱冰",
          "attachRule": "1.5 sCD",
          "particles": "4 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "e 后续",
          "elementAmount": "弱冰",
          "attachRule": "与「 e 释放 」共用附着 CD",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "强冰",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座6",
          "elementAmount": "弱冰",
          "attachRule": "与「 e 释放 」共用附着 CD",
          "particles": "",
          "note": "特级冻霜芭菲",
          "poise": ""
        }
      ]
    },
    {
      "name": "丝柯克",
      "weapon": "单手剑",
      "energy": "无",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "4 个/15 s",
          "note": "e 后",
          "poise": ""
        },
        {
          "name": "重击",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "与「普攻」共用产球 CD",
          "note": "e 后",
          "poise": ""
        },
        {
          "name": "e/E",
          "elementAmount": "",
          "attachRule": "",
          "particles": "固定回45点蛇之狡谋",
          "note": "",
          "poise": ""
        },
        {
          "name": "e 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "七相一闪，6.43~12.5 s",
          "poise": "0.3"
        },
        {
          "name": "E 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "3 s",
          "poise": "0.2"
        },
        {
          "name": "Q",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "与「普攻」共用产球 CD",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座1",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "与「普攻」共用产球 CD",
          "note": "命座独立计算器",
          "poise": ""
        },
        {
          "name": "命座6",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "与「普攻」共用产球 CD",
          "note": "Q触发同Q附着，A触发同A附着，被动触发同1命附着",
          "poise": ""
        }
      ]
    },
    {
      "name": "洛恩",
      "weapon": "长柄武器",
      "energy": "无",
      "skills": [
        {
          "name": "普攻/重击",
          "elementAmount": "弱冰",
          "attachRule": "5 s/2 hit",
          "particles": "1 个/2 s",
          "note": "E 后",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "镂骨彻心",
          "poise": ""
        },
        {
          "name": "E 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "奇谋",
          "poise": "0.5"
        },
        {
          "name": "Q",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座 2",
          "elementAmount": "弱冰",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "桑多涅",
      "weapon": "未知",
      "energy": "未知",
      "skills": [
        {
          "name": "重击一段",
          "elementAmount": "弱冰",
          "attachRule": "1.4 s",
          "particles": "",
          "note": "扫射攻击",
          "poise": "0.5"
        },
        {
          "name": "重击",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "1 个/2.5 s",
          "note": "冷凝射线，非星辉",
          "poise": "0.5"
        },
        {
          "name": "重击二段",
          "elementAmount": "弱冰",
          "attachRule": "与「重击一段」共用附着 CD",
          "particles": "",
          "note": "功率过载",
          "poise": "0.5"
        },
        {
          "name": "E",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "与「重击」共用产球 CD",
          "note": "棱晶弹",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱冰",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座 6",
          "elementAmount": "弱冰",
          "attachRule": "与「重击」共用附着 CD",
          "particles": "",
          "note": "非星辉",
          "poise": ""
        }
      ]
    }
  ],
  "wind": [
    {
      "name": "旅行者（风）",
      "weapon": "单手剑",
      "energy": "60",
      "skills": [
        {
          "name": "E 持续",
          "elementAmount": "弱风，弱染色",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "染色顺序：冰火水雷",
          "poise": ""
        },
        {
          "name": "e 结束",
          "elementAmount": "弱风，弱染色",
          "attachRule": "独立",
          "particles": "2 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 结束",
          "elementAmount": "弱风，弱染色",
          "attachRule": "独立",
          "particles": "3~4 个（2:1）",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 持续",
          "elementAmount": "弱风，强染色",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "染色顺序：冰火水雷",
          "poise": ""
        },
        {
          "name": "突破天赋2",
          "elementAmount": "弱风",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座4",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "e/E",
          "poise": "0.5"
        }
      ]
    },
    {
      "name": "温迪",
      "weapon": "弓",
      "energy": "60",
      "skills": [
        {
          "name": "瞄准",
          "elementAmount": "弱风",
          "attachRule": "1 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "e",
          "elementAmount": "强风",
          "attachRule": "独立",
          "particles": "3 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "强风",
          "attachRule": "独立",
          "particles": "4 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "1 s",
          "poise": "0"
        },
        {
          "name": "Q 持续",
          "elementAmount": "弱风，弱染色",
          "attachRule": "1 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座1",
          "elementAmount": "弱风",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "分裂箭",
          "poise": ""
        }
      ]
    },
    {
      "name": "砂糖",
      "weapon": "法器",
      "energy": "80",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱风",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "重击",
          "elementAmount": "弱风",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱风",
          "attachRule": "独立",
          "particles": "4 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 后续",
          "elementAmount": "弱风，弱染色",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "琴",
      "weapon": "单手剑",
      "energy": "80",
      "skills": [
        {
          "name": "E",
          "elementAmount": "强风",
          "attachRule": "独立",
          "particles": "2~3 个（1:2）",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 释放",
          "elementAmount": "强风",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 后续",
          "elementAmount": "强风",
          "attachRule": "独立",
          "particles": "",
          "note": "出入领域",
          "poise": ""
        }
      ]
    },
    {
      "name": "魈",
      "weapon": "长柄武器",
      "energy": "70",
      "skills": [
        {
          "name": "普攻/重击",
          "elementAmount": "弱风",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "Q 后",
          "poise": ""
        },
        {
          "name": "下落攻击",
          "elementAmount": "弱风",
          "attachRule": "独立",
          "particles": "",
          "note": "Q 后",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱风",
          "attachRule": "0.1 sCD",
          "particles": "3 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "夜叉傩面，15 s",
          "poise": "0.5"
        }
      ]
    },
    {
      "name": "枫原万叶",
      "weapon": "单手剑",
      "energy": "60",
      "skills": [
        {
          "name": "下落攻击",
          "elementAmount": "弱风，弱染色",
          "attachRule": "独立",
          "particles": "",
          "note": "e/E 后",
          "poise": ""
        },
        {
          "name": "e",
          "elementAmount": "弱风",
          "attachRule": "独立",
          "particles": "3 个",
          "note": "",
          "poise": "0"
        },
        {
          "name": "E",
          "elementAmount": "强风",
          "attachRule": "独立",
          "particles": "4 个",
          "note": "",
          "poise": "0.4"
        },
        {
          "name": "Q 释放",
          "elementAmount": "强风",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 持续",
          "elementAmount": "弱风，弱染色",
          "attachRule": "独立",
          "particles": "",
          "note": "2 s/次",
          "poise": ""
        },
        {
          "name": "命座6",
          "elementAmount": "弱风",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "Q 后普攻/重击",
          "poise": ""
        }
      ]
    },
    {
      "name": "早柚",
      "weapon": "双手剑",
      "energy": "80",
      "skills": [
        {
          "name": "E 持续",
          "elementAmount": "弱风，弱染色",
          "attachRule": "2.5 s/3 hit",
          "particles": "1 个/3 s",
          "note": "10 s",
          "poise": "0.3"
        },
        {
          "name": "E 结束",
          "elementAmount": "弱风，弱染色",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 释放",
          "elementAmount": "弱风",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 后续",
          "elementAmount": "弱风",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "鹿野院平藏",
      "weapon": "法器",
      "energy": "40",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱风",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "重击",
          "elementAmount": "弱风",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "e",
          "elementAmount": "强风",
          "attachRule": "独立",
          "particles": "2 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 二蓄~三蓄",
          "elementAmount": "强风",
          "attachRule": "独立",
          "particles": "2~3 个（1:1）",
          "note": "2~3层「变格」",
          "poise": ""
        },
        {
          "name": "E 四蓄",
          "elementAmount": "强风",
          "attachRule": "独立",
          "particles": "3 个",
          "note": "4层「变格」",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱风，弱染色",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "流浪者",
      "weapon": "法器",
      "energy": "60",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱风",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "普攻",
          "elementAmount": "弱风",
          "attachRule": "2.5 s/3 hit",
          "particles": "1 个/2 s",
          "note": "E 后",
          "poise": ""
        },
        {
          "name": "重击",
          "elementAmount": "弱风",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 释放",
          "elementAmount": "弱风",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": "0"
        },
        {
          "name": "Q",
          "elementAmount": "弱风",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "突破天赋2",
          "elementAmount": "弱风",
          "attachRule": "1 sCD",
          "particles": "",
          "note": "风矢",
          "poise": ""
        },
        {
          "name": "命座6",
          "elementAmount": "弱风",
          "attachRule": "2 sCD",
          "particles": "",
          "note": "额外攻击",
          "poise": ""
        }
      ]
    },
    {
      "name": "珐露珊",
      "weapon": "弓",
      "energy": "80",
      "skills": [
        {
          "name": "瞄准",
          "elementAmount": "弱风",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "瞄准二段",
          "elementAmount": "弱风",
          "attachRule": "独立",
          "particles": "2 个",
          "note": "E 后",
          "poise": ""
        },
        {
          "name": "E 释放",
          "elementAmount": "弱风",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱风",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "琳妮特",
      "weapon": "单手剑",
      "energy": "70",
      "skills": [
        {
          "name": "E",
          "elementAmount": "弱风",
          "attachRule": "独立",
          "particles": "4 个",
          "note": "",
          "poise": "0.2"
        },
        {
          "name": "E 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "谜身影盗，2.5 s",
          "poise": "0.2"
        },
        {
          "name": "Q 释放",
          "elementAmount": "弱风",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 持续",
          "elementAmount": "弱风",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 后续",
          "elementAmount": "弱染色",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "彩练术弹，含2命，帧接触染色，无关元素量及先后",
          "poise": ""
        }
      ]
    },
    {
      "name": "闲云",
      "weapon": "法器",
      "energy": "70",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱风",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "重击",
          "elementAmount": "弱风",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱风",
          "attachRule": "独立",
          "particles": "5个",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 释放",
          "elementAmount": "弱风",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 持续",
          "elementAmount": "弱风",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "竹星",
          "poise": ""
        }
      ]
    },
    {
      "name": "恰斯卡",
      "weapon": "弓",
      "energy": "60",
      "skills": [
        {
          "name": "瞄准",
          "elementAmount": "弱风",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "瞄准",
          "elementAmount": "弱风",
          "attachRule": "独立",
          "particles": "",
          "note": "E 后",
          "poise": ""
        },
        {
          "name": "瞄准",
          "elementAmount": "弱风",
          "attachRule": "1.5 sCD",
          "particles": "5 个",
          "note": "E 后，追影弹",
          "poise": ""
        },
        {
          "name": "瞄准",
          "elementAmount": "弱元素",
          "attachRule": "1.5 s/2 hit",
          "particles": "",
          "note": "E 后，焕光弹",
          "poise": ""
        },
        {
          "name": "E 释放",
          "elementAmount": "弱风",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "夜魂期间，10 s",
          "poise": "0.3"
        },
        {
          "name": "Q",
          "elementAmount": "弱元素",
          "attachRule": "1.5 s/2 hit",
          "particles": "",
          "note": "最多3次",
          "poise": ""
        },
        {
          "name": "命座2/4",
          "elementAmount": "弱元素",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "蓝砚",
      "weapon": "法器",
      "energy": "60",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱风",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "重击",
          "elementAmount": "弱风",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱风",
          "attachRule": "2.5 s/3 hit",
          "particles": "3 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "强风",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "突破天赋1",
          "elementAmount": "弱染色",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "护盾转化",
          "poise": ""
        }
      ]
    },
    {
      "name": "梦见月瑞希",
      "weapon": "法器",
      "energy": "60",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱风",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 释放",
          "elementAmount": "弱风",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 持续",
          "elementAmount": "弱风",
          "attachRule": "2 hit",
          "particles": "1 个/0.5 s",
          "note": "最多4次产球",
          "poise": "0.5"
        },
        {
          "name": "Q 释放",
          "elementAmount": "强风",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 后续",
          "elementAmount": "弱风",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "伊法",
      "weapon": "法器",
      "energy": "60",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱风",
          "attachRule": "",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "普攻",
          "elementAmount": "弱风",
          "attachRule": "12 s/2 hit",
          "particles": "4~5 个（2:1）",
          "note": "E 后",
          "poise": ""
        },
        {
          "name": "E 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "夜魂加持，10 s",
          "poise": "0.5"
        },
        {
          "name": "Q 释放",
          "elementAmount": "弱风",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 后续",
          "elementAmount": "弱风",
          "attachRule": "2 sCD",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座6",
          "elementAmount": "弱风",
          "attachRule": "",
          "particles": "",
          "note": "额外秘药弹",
          "poise": ""
        }
      ]
    },
    {
      "name": "雅柯达",
      "weapon": "弓",
      "energy": "70",
      "skills": [
        {
          "name": "瞄准",
          "elementAmount": "弱风",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱风",
          "attachRule": "独立",
          "particles": "4 个",
          "note": "烟雾弹",
          "poise": ""
        },
        {
          "name": "E 结束",
          "elementAmount": "弱风",
          "attachRule": "独立",
          "particles": "与「 E 」共用产球 CD",
          "note": "未装满的呼噜噜秘藏瓶",
          "poise": ""
        },
        {
          "name": "E 结束",
          "elementAmount": "弱风",
          "attachRule": "独立",
          "particles": "与「 E 」共用产球 CD",
          "note": "装满的呼噜噜秘藏瓶",
          "poise": ""
        },
        {
          "name": "E 后续",
          "elementAmount": "弱染色",
          "attachRule": "独立",
          "particles": "与「 E 」共用产球 CD",
          "note": "满辉，装满的呼噜噜秘藏瓶，猫猫球",
          "poise": ""
        },
        {
          "name": "Q 释放",
          "elementAmount": "弱风",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 持续",
          "elementAmount": "弱染色",
          "attachRule": "15 s/4 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座1",
          "elementAmount": "弱元素",
          "attachRule": "15 s/2 hit",
          "particles": "",
          "note": "猫猫球弹跳",
          "poise": ""
        }
      ]
    },
    {
      "name": "法尔伽",
      "weapon": "双手剑",
      "energy": "60",
      "skills": [
        {
          "name": "e 释放",
          "elementAmount": "弱风",
          "attachRule": "独立",
          "particles": "6 个",
          "note": "狂飙突进",
          "poise": ""
        },
        {
          "name": "普攻/重击",
          "elementAmount": "弱风，弱元素",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "根据队伍中元素决定右手元素附着",
          "poise": ""
        },
        {
          "name": "e",
          "elementAmount": "弱风，弱元素",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "四风将起",
          "poise": ""
        },
        {
          "name": "e",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "狂飙突进，12 s",
          "poise": "0.5"
        },
        {
          "name": "特殊重击",
          "elementAmount": "弱风，弱元素",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "苍噬",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱元素，弱风",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座2",
          "elementAmount": "无附着",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "布伦妮",
      "weapon": "法器",
      "energy": "无",
      "skills": [
        {
          "name": "E",
          "elementAmount": "弱风",
          "attachRule": "独立",
          "particles": "5 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 二段",
          "elementAmount": "弱风",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 释放",
          "elementAmount": "弱风",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 持续",
          "elementAmount": "弱风",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "固有天赋 1",
          "elementAmount": "无附着",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座 4",
          "elementAmount": "无附着",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    }
  ],
  "rock": [
    {
      "name": "旅行者（岩）",
      "weapon": "单手剑",
      "energy": "60",
      "skills": [
        {
          "name": "E",
          "elementAmount": "强岩",
          "attachRule": "2.5 s/3 hit",
          "particles": "3~4 个（1:1）",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "强岩",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "突破天赋2",
          "elementAmount": "弱岩",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座1",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "岩潮叠嶂内，15 s",
          "poise": "0.7"
        },
        {
          "name": "命座2",
          "elementAmount": "弱岩",
          "attachRule": "与「 E 」共用附着 CD",
          "particles": "",
          "note": "荒星爆炸",
          "poise": ""
        }
      ]
    },
    {
      "name": "凝光",
      "weapon": "法器",
      "energy": "40",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱岩",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "重击",
          "elementAmount": "弱岩",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "重击二段",
          "elementAmount": "强岩",
          "attachRule": "与「重击」共用附着 CD",
          "particles": "",
          "note": "星璇",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱岩",
          "attachRule": "独立",
          "particles": "3~4 个/6 s（2:1）",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "强岩",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "诺艾尔",
      "weapon": "双手剑",
      "energy": "60",
      "skills": [
        {
          "name": "普攻/重击",
          "elementAmount": "弱岩",
          "attachRule": "独立",
          "particles": "",
          "note": "Q 后",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "强岩",
          "attachRule": "2.5 s/3 hit",
          "particles": "0 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱岩",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座4",
          "elementAmount": "强岩",
          "attachRule": "与「 E 」共用附着 CD",
          "particles": "",
          "note": "失去护心铠",
          "poise": ""
        }
      ]
    },
    {
      "name": "钟离",
      "weapon": "长柄武器",
      "energy": "40",
      "skills": [
        {
          "name": "e",
          "elementAmount": "强岩",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱岩",
          "attachRule": "与「 e 」共用附着 CD",
          "particles": "",
          "note": "无岩脊时生成岩脊",
          "poise": ""
        },
        {
          "name": "E 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "1 s",
          "poise": "0"
        },
        {
          "name": "E 后续",
          "elementAmount": "弱岩",
          "attachRule": "与「 e 」共用附着 CD",
          "particles": "0~1 个/次（1:1）",
          "note": "岩脊共鸣",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "超强岩",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "阿贝多",
      "weapon": "单手剑",
      "energy": "未知",
      "skills": [
        {
          "name": "E 释放",
          "elementAmount": "弱岩",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 后续",
          "elementAmount": "弱岩",
          "attachRule": "2.5 s/3 hit",
          "particles": "0~1 个（1:2）",
          "note": "刹那之花",
          "poise": ""
        },
        {
          "name": "Q 释放",
          "elementAmount": "弱岩",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 持续",
          "elementAmount": "弱岩",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "生灭之花",
          "poise": ""
        }
      ]
    },
    {
      "name": "荒泷一斗",
      "weapon": "双手剑",
      "energy": "未知",
      "skills": [
        {
          "name": "普攻/重击",
          "elementAmount": "弱岩",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "Q 后",
          "poise": ""
        },
        {
          "name": "重击持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "荒泷逆袈裟",
          "poise": "0"
        },
        {
          "name": "E",
          "elementAmount": "弱岩",
          "attachRule": "独立",
          "particles": "3~4 个（1:1）",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "五郎",
      "weapon": "弓",
      "energy": "80",
      "skills": [
        {
          "name": "瞄准",
          "elementAmount": "弱岩",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱岩",
          "attachRule": "独立",
          "particles": "2 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "大将旗指物，10 s",
          "poise": "0.5"
        },
        {
          "name": "Q 释放",
          "elementAmount": "弱岩",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 持续",
          "elementAmount": "弱岩",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "岩晶崩破",
          "poise": ""
        },
        {
          "name": "Q 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "大将威仪，9 s",
          "poise": "0.5"
        }
      ]
    },
    {
      "name": "云堇",
      "weapon": "长柄武器",
      "energy": "60",
      "skills": [
        {
          "name": "e",
          "elementAmount": "强岩",
          "attachRule": "独立",
          "particles": "2 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 一段",
          "elementAmount": "强岩",
          "attachRule": "独立",
          "particles": "2~3 个（1:1）",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 二段",
          "elementAmount": "超强岩",
          "attachRule": "独立",
          "particles": "3 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "强岩",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "娜维娅",
      "weapon": "双手剑",
      "energy": "60",
      "skills": [
        {
          "name": "普攻/重击",
          "elementAmount": "弱岩",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "E 后",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱岩",
          "attachRule": "独立",
          "particles": "3~4 个（1:1）",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "瞄准",
          "poise": "0.3"
        },
        {
          "name": "Q 释放",
          "elementAmount": "强岩",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 持续",
          "elementAmount": "弱岩",
          "attachRule": "3 hit",
          "particles": "",
          "note": "支援炮击",
          "poise": ""
        },
        {
          "name": "命座2",
          "elementAmount": "强岩",
          "attachRule": "与「Q 持续」共用附着 CD",
          "particles": "",
          "note": "额外炮击",
          "poise": ""
        }
      ]
    },
    {
      "name": "千织",
      "weapon": "单手剑",
      "energy": "50",
      "skills": [
        {
          "name": "普攻/重击",
          "elementAmount": "弱岩",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "EA 后",
          "poise": ""
        },
        {
          "name": "E 释放",
          "elementAmount": "弱岩",
          "attachRule": "1.9 s",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 后续",
          "elementAmount": "弱岩",
          "attachRule": "与「E 释放」共用附着 CD",
          "particles": "1~2 个",
          "note": "袖",
          "poise": ""
        },
        {
          "name": "E 后续",
          "elementAmount": "弱岩",
          "attachRule": "与「E 释放」共用附着 CD",
          "particles": "",
          "note": "战技协同",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "强岩",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座2/4",
          "elementAmount": "弱岩",
          "attachRule": "与「E 释放」共用附着 CD",
          "particles": "",
          "note": "绢",
          "poise": ""
        }
      ]
    },
    {
      "name": "卡齐娜",
      "weapon": "长柄武器",
      "energy": "50",
      "skills": [
        {
          "name": "E",
          "elementAmount": "弱岩",
          "attachRule": "2.5 s/3 hit",
          "particles": "0~1 个/次/0.2s（1:2）",
          "note": "2 s/次",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "搭乘冲天转转",
          "poise": "0.3"
        },
        {
          "name": "Q",
          "elementAmount": "弱岩",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座6",
          "elementAmount": "弱岩",
          "attachRule": "独立",
          "particles": "",
          "note": "护盾替换/摧毁",
          "poise": ""
        }
      ]
    },
    {
      "name": "希诺宁",
      "weapon": "单手剑",
      "energy": "50",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱岩",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "夜魂状态",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱岩",
          "attachRule": "2.5 s/3 hit",
          "particles": "4 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "夜魂状态，9 s",
          "poise": "0.5"
        },
        {
          "name": "Q",
          "elementAmount": "弱岩",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座1",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "源音采样，15 s",
          "poise": "0.5"
        }
      ]
    },
    {
      "name": "兹白",
      "weapon": "单手剑",
      "energy": "60",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱岩",
          "attachRule": "2.5 s/3 hit",
          "particles": "1 个/2 s",
          "note": "E 后",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱岩",
          "attachRule": "独立",
          "particles": "",
          "note": "月转时隙，15 s",
          "poise": "0.5"
        },
        {
          "name": "Q",
          "elementAmount": "弱岩",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "叶洛亚",
      "weapon": "长柄武器",
      "energy": "60",
      "skills": [
        {
          "name": "E",
          "elementAmount": "弱岩",
          "attachRule": "独立",
          "particles": "4~5 个（1:2）",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱岩",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座 2",
          "elementAmount": "弱岩",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "莉奈娅",
      "weapon": "弓",
      "energy": "60",
      "skills": [
        {
          "name": "E",
          "elementAmount": "弱岩",
          "attachRule": "2.5 s/3 hit",
          "particles": "3 个/9 s",
          "note": "超厉害形态",
          "poise": ""
        },
        {
          "name": "E E E…",
          "elementAmount": "",
          "attachRule": "",
          "particles": "与「 E 」共用产球 CD",
          "note": "究极厉害形态",
          "poise": "0.3"
        },
        {
          "name": "Q",
          "elementAmount": "弱岩",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    }
  ],
  "grass": [
    {
      "name": "旅行者（草）",
      "weapon": "单手剑",
      "energy": "未知",
      "skills": [
        {
          "name": "E",
          "elementAmount": "弱草",
          "attachRule": "独立",
          "particles": "2~3 个（1:1）",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 持续",
          "elementAmount": "弱草",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 结束",
          "elementAmount": "强草",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "提纳里",
      "weapon": "弓",
      "energy": "70",
      "skills": [
        {
          "name": "瞄准",
          "elementAmount": "弱草",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "瞄准二段",
          "elementAmount": "弱草",
          "attachRule": "2.5 s/4 hit",
          "particles": "",
          "note": "藏蕴花矢",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱草",
          "attachRule": "独立",
          "particles": "3~4 个（1:1）",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱草",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座6",
          "elementAmount": "弱草",
          "attachRule": "独立",
          "particles": "",
          "note": "额外花矢",
          "poise": ""
        }
      ]
    },
    {
      "name": "柯莱",
      "weapon": "弓",
      "energy": "60",
      "skills": [
        {
          "name": "瞄准",
          "elementAmount": "弱草",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱草",
          "attachRule": "5 sCD",
          "particles": "3 个",
          "note": "若飞出时已产球则不再产球",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱草",
          "attachRule": "3 sCD",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "突破天赋1",
          "elementAmount": "弱草",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "新叶",
          "poise": ""
        },
        {
          "name": "命座6",
          "elementAmount": "弱草",
          "attachRule": "独立",
          "particles": "",
          "note": "迷你柯里安巴",
          "poise": ""
        }
      ]
    },
    {
      "name": "纳西妲",
      "weapon": "法器",
      "energy": "50",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱草",
          "attachRule": "2.5s/3hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "重击",
          "elementAmount": "弱草",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "e/E",
          "elementAmount": "弱草",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "瞄准，5 s",
          "poise": "0"
        },
        {
          "name": "e/E 后续",
          "elementAmount": "中草",
          "attachRule": "1sCD",
          "particles": "3 个/7 s",
          "note": "灭净三业，2.5 s/次",
          "poise": ""
        },
        {
          "name": "命座6",
          "elementAmount": "弱草",
          "attachRule": "2.5s/3hit",
          "particles": "与「e/E 后续」共用产球 CD",
          "note": "业障除",
          "poise": ""
        }
      ]
    },
    {
      "name": "艾尔海森",
      "weapon": "单手剑",
      "energy": "70",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱草",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "持有琢光镜时",
          "poise": ""
        },
        {
          "name": "重击",
          "elementAmount": "弱草",
          "attachRule": "2 sCD",
          "particles": "",
          "note": "持有琢光镜时",
          "poise": ""
        },
        {
          "name": "下落攻击",
          "elementAmount": "弱草",
          "attachRule": "独立",
          "particles": "",
          "note": "持有琢光镜时",
          "poise": ""
        },
        {
          "name": "E 释放",
          "elementAmount": "弱草",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": "0"
        },
        {
          "name": "E 后续",
          "elementAmount": "弱草",
          "attachRule": "12 s/2 hit",
          "particles": "1 个/1.5 s",
          "note": "光幕攻击",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱草",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "瑶瑶",
      "weapon": "长柄武器",
      "energy": "未知",
      "skills": [
        {
          "name": "E",
          "elementAmount": "弱草",
          "attachRule": "2.5 sCD",
          "particles": "1 个/1.5 s",
          "note": "1 s/个",
          "poise": ""
        },
        {
          "name": "Q 释放",
          "elementAmount": "弱草",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 后续",
          "elementAmount": "弱草",
          "attachRule": "1.5 sCD",
          "particles": "",
          "note": "桂子仙机",
          "poise": ""
        },
        {
          "name": "突破天赋1",
          "elementAmount": "弱草",
          "attachRule": "与「Q 后续」共用附着 CD",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座6",
          "elementAmount": "弱草",
          "attachRule": "独立",
          "particles": "",
          "note": "大萝卜",
          "poise": ""
        }
      ]
    },
    {
      "name": "白术",
      "weapon": "法器",
      "energy": "80",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱草",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "重击",
          "elementAmount": "弱草",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱草",
          "attachRule": "2 sCD",
          "particles": "3~4 个（1:1）",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱草",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "命座2",
          "elementAmount": "弱草",
          "attachRule": "独立",
          "particles": "",
          "note": "游丝",
          "poise": ""
        }
      ]
    },
    {
      "name": "卡维",
      "weapon": "双手剑",
      "energy": "80",
      "skills": [
        {
          "name": "普攻/重击",
          "elementAmount": "弱草",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "Q 后",
          "poise": ""
        },
        {
          "name": "E",
          "elementAmount": "弱草",
          "attachRule": "独立",
          "particles": "2 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "强草",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "繁绘隅穹，12 s",
          "poise": "0.5"
        },
        {
          "name": "命座6",
          "elementAmount": "弱草",
          "attachRule": "独立",
          "particles": "",
          "note": "天园之光",
          "poise": ""
        }
      ]
    },
    {
      "name": "绮良良",
      "weapon": "单手剑",
      "energy": "60",
      "skills": [
        {
          "name": "e",
          "elementAmount": "弱草",
          "attachRule": "独立",
          "particles": "3 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 持续",
          "elementAmount": "弱草",
          "attachRule": "2.5 s/3 hit",
          "particles": "1 个/4 s",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 结束",
          "elementAmount": "弱草",
          "attachRule": "独立",
          "particles": "3 个",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 释放",
          "elementAmount": "强草",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "Q 后续",
          "elementAmount": "弱草",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "猫草豆蔻",
          "poise": ""
        },
        {
          "name": "命座4",
          "elementAmount": "弱草",
          "attachRule": "与「Q 后续」共用附着 CD",
          "particles": "",
          "note": "协同攻击",
          "poise": ""
        }
      ]
    },
    {
      "name": "艾梅莉埃",
      "weapon": "长柄武器",
      "energy": "80",
      "skills": [
        {
          "name": "E 释放",
          "elementAmount": "弱草",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 后续",
          "elementAmount": "弱草",
          "attachRule": "2 sCD",
          "particles": "1 个/2.5 s",
          "note": "柔灯之匣，1.5 s/次",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "强草",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "突破天赋1",
          "elementAmount": "弱草",
          "attachRule": "独立",
          "particles": "",
          "note": "清醒香氛",
          "poise": ""
        },
        {
          "name": "命座6",
          "elementAmount": "弱草",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "EQ 后普攻",
          "poise": ""
        }
      ]
    },
    {
      "name": "基尼奇",
      "weapon": "双手剑",
      "energy": "70",
      "skills": [
        {
          "name": "E A",
          "elementAmount": "弱草",
          "attachRule": "2 sCD",
          "particles": "",
          "note": "环绕射击",
          "poise": "0.5"
        },
        {
          "name": "E A",
          "elementAmount": "弱草",
          "attachRule": "1.2 sCD",
          "particles": "5 个（E 后刷新）",
          "note": "迴猎贯鳞炮，夜魂值达到上限时",
          "poise": "0.3"
        },
        {
          "name": "Q",
          "elementAmount": "弱草",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    },
    {
      "name": "菈乌玛",
      "weapon": "法器",
      "energy": "60",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱草",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "重击",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "灵使化形，10 s",
          "poise": "0.2"
        },
        {
          "name": "e/E",
          "elementAmount": "弱草",
          "attachRule": "独立",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "e/E 持续",
          "elementAmount": "弱草",
          "attachRule": "独立",
          "particles": "1~2 个/3.3 s（2:1）",
          "note": "2 s/次",
          "poise": ""
        }
      ]
    },
    {
      "name": "奈芙尔",
      "weapon": "法器",
      "energy": "60",
      "skills": [
        {
          "name": "普攻",
          "elementAmount": "弱草",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 释放",
          "elementAmount": "弱草",
          "attachRule": "2.5 s/3 hit",
          "particles": "2~3 个（1:2）",
          "note": "",
          "poise": ""
        },
        {
          "name": "E 持续",
          "elementAmount": "",
          "attachRule": "",
          "particles": "",
          "note": "影舞，9 s",
          "poise": "0.15"
        },
        {
          "name": "重击",
          "elementAmount": "弱草",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "E 后，幻戏",
          "poise": ""
        },
        {
          "name": "Q",
          "elementAmount": "弱草",
          "attachRule": "2.5 s/3 hit",
          "particles": "",
          "note": "",
          "poise": ""
        }
      ]
    }
  ]
};
