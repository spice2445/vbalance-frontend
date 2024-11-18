import { combine } from 'effector';
import { BONUSES_FIRST_STATUSES, BONUSES_SECOND_STATUSES } from 'entities/user/config';
import { api } from 'shared/api';
import { formatter } from 'shared/lib/formatter';
import { statusIdsI } from 'shared/types/user-statuses';

export const $balancesProfile = api.queries.user.me.$data.map((me) => ({
    usdt: (me?.wallet ?? 0) as number,
    ticklets: (me?.count_avatars) as number,
    vbti: (me?.token_stacking) as number
}));

export const $statusProfile = api.queries.user.me.$data.map((me) => formatter.string.statusProfile(me?.status as statusIdsI));

export const $cardProfile = combine(api.queries.user.me.$data, $statusProfile, (me, status) => ({
    avatar: me?.avatar,
    name: me?.name,
    status,
    bonusesGroupFisrt:  BONUSES_FIRST_STATUSES[status],
    bonusesGroupSecond: BONUSES_SECOND_STATUSES[status]
}));