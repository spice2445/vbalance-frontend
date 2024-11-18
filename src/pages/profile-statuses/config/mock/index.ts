import { CardStatuses } from '../type';

export const MOCK_ACQUIRED_STATUSES: CardStatuses[] = [
  {
    theme: 'acsent',
    isBuyable: true,
    status: 'Партнер',
    commision: 1, // '1.0 USDT / 10% (1-5 ',
    magicBonus: 1,
    proporions: [
      {
        icon: '8',
        percent: 1,
        status: 'Советников',
        isDisabled: false
      },
      {
        icon: '7',
        percent: 1,
        status: 'Менторов',
        isDisabled: false
      },
      {
        icon: '6',
        percent: 1,
        status: 'Мастеров',
        isDisabled: false
      },
      {
        icon: '5',
        percent: 3,
        status: 'Партнеров',
        isDisabled: false
      }
    ],
    getUsdtMonth: 21,
    price: 5_000
  },
  {
    theme: 'base',
    isBuyable: true,
    status: 'Мастер',
    commision: 1,
    magicBonus: 1,
    proporions: [
      {
        icon: '8',
        percent: 1,
        status: 'Советников',
        isDisabled: false
      },
      {
        icon: '7',
        percent: 1,
        status: 'Менторов',
        isDisabled: false
      },
      {
        icon: '6',
        percent: 1,
        status: 'Мастеров',
        isDisabled: false
      },
      {
        icon: '5',
        percent: 3,
        status: 'Партнеров',
        isDisabled: false
      }
    ],
    getUsdtMonth: 23,
    price: 2_400
  },
  {
    theme: 'base',
    isBuyable: true,
    status: 'Ментор',
    commision: 1,
    magicBonus: 1,
    proporions: [
      {
        icon: '8',
        percent: 1,
        status: 'Советников',
        isDisabled: false
      },
      {
        icon: '7',
        percent: 1,
        status: 'Менторов',
        isDisabled: false
      },
      {
        icon: '6',
        percent: 1,
        status: 'Мастеров',
        isDisabled: false
      },
      {
        icon: '5',
        percent: 3,
        status: 'Партнеров',
        isDisabled: false
      }
    ],
    getUsdtMonth: 23,
    price: 800
  },
  {
    theme: 'base',
    isBuyable: true,
    status: 'Советник',
    commision: 1,
    magicBonus: 0.5,
    proporions: [
      {
        icon: '8',
        percent: 1,
        status: 'Советников',
        isDisabled: false
      },
      {
        icon: '7',
        percent: 1,
        status: 'Менторов',
        isDisabled: false
      },
      {
        icon: '6',
        percent: 1,
        status: 'Мастеров',
        isDisabled: false
      },
      {
        icon: '5',
        percent: 3,
        status: 'Партнеров',
        isDisabled: false
      }
    ],
    getUsdtMonth: 23,
    price: 200
  }
];

export const MOCK_ACHIEVEMENT_STATUSES: CardStatuses[] = [
  {
    theme: 'base',
    isBuyable: false,
    status: 'Основатель I',
    includedStatus: 'Партнер',
    proporions: [
      {
        icon: '8',
        percent: 2,
        status: 'Основателей I',
        isDisabled: false
      },
      {
        icon: '7',
        percent: 1,
        status: 'Основателей II',
        isDisabled: true
      },
      {
        icon: '6',
        percent: 2,
        status: 'Основателей III',
        isDisabled: true
      },
      {
        icon: '5',
        percent: 2,
        status: 'Основателей IV',
        isDisabled: true
      }
    ],
    getUsdtMonth: 230,
    turnover: {
      done: 67500,
      need: 100_000
    }
  },
  {
    theme: 'base',
    isBuyable: false,
    status: 'Основатель II',
    includedStatus: 'Партнер',
    proporions: [
      {
        icon: '8',
        percent: 2,
        status: 'Основателей I',
        isDisabled: false
      },
      {
        icon: '7',
        percent: 2,
        status: 'Основателей II',
        isDisabled: true
      },
      {
        icon: '6',
        percent: 2,
        status: 'Основателей III',
        isDisabled: true
      },
      {
        icon: '5',
        percent: 2,
        status: 'Основателей IV',
        isDisabled: true
      }
    ],
    getUsdtMonth: 230,
    turnover: {
      done: 67500,
      need: 250_000
    }
  },
  {
    theme: 'base',
    isBuyable: false,
    status: 'Основателей III',
    includedStatus: 'Партнер',
    proporions: [
      {
        icon: '8',
        percent: 1,
        status: 'Основателей I',
        isDisabled: false
      },
      {
        icon: '7',
        percent: 1,
        status: 'Основателей II',
        isDisabled: false
      },
      {
        icon: '6',
        percent: 1,
        status: 'Основателей III',
        isDisabled: false
      },
      {
        icon: '5',
        percent: 3,
        status: 'Основателей IV',
        isDisabled: true
      }
    ],
    getUsdtMonth: 230,
    turnover: {
      done: 67500,
      need: 500_000
    }
  },
  {
    theme: 'base',
    isBuyable: false,
    status: 'Основатель IV',
    includedStatus: 'Партнер',
    proporions: [
      {
        icon: '8',
        percent: 1,
        status: 'Основателей I',
        isDisabled: false
      },
      {
        icon: '7',
        percent: 1,
        status: 'Основателей II',
        isDisabled: false
      },
      {
        icon: '6',
        percent: 1,
        status: 'Основателей III',
        isDisabled: false
      },
      {
        icon: '5',
        percent: 3,
        status: 'Основателей IV',
        isDisabled: false
      }
    ],
    getUsdtMonth: 230,
    turnover: {
      done: 67500,
      need: 1_000_000
    }
  }
];
