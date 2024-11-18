import { EventCallable } from 'effector';
import { delayGetMock } from 'shared/lib/lazy';

export interface getTableMockProps {
  page: number;
  mock: unknown[][];
  dataRanedOut: EventCallable<void>;
}

export const getTableMockFn = async (args:getTableMockProps) => {
  await delayGetMock(0);
  const { page, mock, dataRanedOut } = args;

  const readyData = mock.slice(0, 10 * page);

  if (mock.length === readyData.length) {
    dataRanedOut();
  }

  return readyData;
};
