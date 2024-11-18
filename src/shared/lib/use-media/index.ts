import { trackMediaQuery } from '@withease/web-api';
import { appStarted } from 'shared/config/init';

export const createMQ = (mq: number) => (
  trackMediaQuery(`(max-width: ${mq}px)`, {
    setup: appStarted
  })
);

export const defaultMQ = {
  tablet: createMQ(890),
  mobile: createMQ(595)
};