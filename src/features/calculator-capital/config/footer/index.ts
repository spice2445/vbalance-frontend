import { IconVariant } from 'shared/ui/icon';

export type footerInfo = Record<string, number>;

export interface footerStaticInfo {
    icon: IconVariant,
    label: string,
}

export const footer: footerStaticInfo[] = [
  {
    icon: 'ticket',
    label: ' тикетов'
  },
  {
    icon: 'balance',
    label: ' на балансе'
  },
  {
    icon: 'graphic',
    label: ' тикет депозит в ARBов'
  },
  {
    icon: 'token',
    label: ' еженедельная покупка INDEX'
  }
];
