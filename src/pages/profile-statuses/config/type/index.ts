export interface CardStatuses {
  theme: 'base' | 'acsent';
  isBuyable?: boolean;
  status?: string;
  commision?: number;
  magicBonus?: number;
  proporions?:{
    icon: string;
    percent: number;
    status: string;
    isDisabled: boolean;
  }[];
  getUsdtMonth?: number;
  price?: number;
  includedStatus?: string;
  turnover?: {
    done: number;
    need: number;
  }
}
