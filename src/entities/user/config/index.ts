import { skeletonGeneration } from 'shared/lib/lazy';
import { StatusUser } from 'shared/types/user-statuses';

export const bonusesGroupFisrt = [
  'Тикеты',
  'Статусы'
];

export const bonusesGroupSecond = skeletonGeneration(8);

export const BONUSES_FIRST_STATUSES: Record<StatusUser, number> = {
  [StatusUser.USER]: 0.3,
  [StatusUser.COUNSELOR]: 0.5,
  [StatusUser.MENTOR]: 0.7,
  [StatusUser.MASTER]: 1,
  [StatusUser.PARTNER]: 1,
  [StatusUser.FOUNDER]: 1,
  [StatusUser.FOUNDER_II]: 1,
  [StatusUser.FOUNDER_III]: 1,
  [StatusUser.FOUNDER_IV]: 1
};

export const BONUSES_SECOND_STATUSES: Record<StatusUser, number[]> = {
  [StatusUser.USER]: [],
  [StatusUser.COUNSELOR]: [1],
  [StatusUser.MENTOR]: [1, 1],
  [StatusUser.MASTER]: [1, 1, 1],
  [StatusUser.PARTNER]: [1, 1, 1, 3],
  [StatusUser.FOUNDER]: [1, 1, 1, 3, 2],
  [StatusUser.FOUNDER_II]: [1, 1, 1, 3, 2, 2],
  [StatusUser.FOUNDER_III]: [1, 1, 1, 3, 2, 2, 2],
  [StatusUser.FOUNDER_IV]: [1, 1, 1, 3, 2, 2, 2, 2]
};

export interface cardProfileProps {
  avatar: string;
  name: string;
  status:StatusUser,
  bonusesGroupFisrt: number[],
  bonusesGroupSecond: number[]
}
