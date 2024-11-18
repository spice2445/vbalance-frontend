
export const variantsDeposit = [
  {
    monthlyInterest: 5,
    monthCount: 3
  },
  {
    monthlyInterest: 6,
    monthCount: 6
  },
  {
    monthlyInterest: 7,
    monthCount: 12
  },
  {
    monthlyInterest: 8,
    monthCount: 18
  }
];

export const payments = [
  'Кошелек: 0xbf12c...xd9lgp6',
  'Balance',
  'Usdt trc20'
];

export interface abritrageCardI {
  openLimit: number,
  fullCountDeposits: number,
}

export const ARBITRAGE_CARD_MOCK: abritrageCardI = {
  openLimit: 10_000,
  fullCountDeposits: 6_000
};