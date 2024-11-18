import { academy } from './academy';
import { arb } from './arb';
import { auth } from './auth';
import { authTest } from './auth-test';
import { buy } from './buy';
import { index } from './index/index';
import { organization } from './organization';
import { user } from './user';

export const queries = {
    academy,
    auth,
    user,
    organization,
    index,
    arb,
    buy,
    authTest
};

export { type GetBotIdParams } from './auth/by-telegram';
export { type StatisticParams } from './index/statistic';