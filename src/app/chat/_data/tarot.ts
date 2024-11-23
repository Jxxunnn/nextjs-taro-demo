// 메이저 아르카나
const majorArcana = {
  Fool: 'M_00',
  Magician: 'M_01',
  HighPriestess: 'M_02',
  Empress: 'M_03',
  Emperor: 'M_04',
  Hierophant: 'M_05',
  Lovers: 'M_06',
  Chariot: 'M_07',
  Strength: 'M_08',
  Hermit: 'M_09',
  WheelOfFortune: 'M_10',
  Justice: 'M_11',
  Temperance: 'M_12',
  Death: 'M_13',
  Devil: 'M_15',
  Tower: 'M_16',
  Star: 'M_17',
  Moon: 'M_18',
  Sun: 'M_19',
  Judgement: 'M_20',
  World: 'M_21',
} as const;

// 소드
const sword = {
  Sword01: 'S_01',
  Sword02: 'S_02',
  Sword03: 'S_03',
  Sword04: 'S_04',
  Sword05: 'S_05',
  Sword06: 'S_06',
  Sword07: 'S_07',
  Sword08: 'S_08',
  Sword09: 'S_09',
  Sword10: 'S_10',
  SwordKing: 'S_K',
  SwordQueen: 'S_Q',
  SwordKnight: 'S_N',
  SwordPage: 'S_P',
} as const;

// 컵
const cup = {
  Cup01: 'C_01',
  Cup02: 'C_02',
  Cup03: 'C_03',
  Cup04: 'C_04',
  Cup05: 'C_05',
  Cup06: 'C_06',
  Cup07: 'C_07',
  Cup08: 'C_08',
  Cup09: 'C_09',
  Cup10: 'C_10',
  CupKing: 'C_K',
  CupQueen: 'C_Q',
  CupKnight: 'C_N',
  CupPage: 'C_P',
} as const;

// 펜타클
const pentacle = {
  Pentacle01: 'P_01',
  Pentacle02: 'P_02',
  Pentacle03: 'P_03',
  Pentacle04: 'P_04',
  Pentacle05: 'P_05',
  Pentacle06: 'P_06',
  Pentacle07: 'P_07',
  Pentacle08: 'P_08',
  Pentacle09: 'P_09',
  Pentacle10: 'P_10',
  PentacleKing: 'P_K',
  PentacleQueen: 'P_Q',
  PentacleKnight: 'P_N',
  PentaclePage: 'P_P',
} as const;

// 완성된 카드 객체 (스프레드 연산자 사용)

export const tarotCard = {
  ...majorArcana,
  ...sword,
  ...cup,
  ...pentacle,
};
