import { invoke } from '@withease/factories';
import {
  createEvent, createStore, sample
} from 'effector';
import { api } from 'shared/api';
import { inputFactory } from 'shared/lib/factories';

import { LineageData } from '../config';

export const {
  queryApi: queryApiLineage
} = api.queries.user.lineage;

export const changedFilter = createEvent<{idLine: number, value: boolean}>();
export const loaddedDataLineage = createEvent<{ userId: number } |  undefined>();
export const choosedUserLineage = createEvent<{
  indexParents: [number, number]
}>();

export const {
  $value: $search,
  $debouncedValue: $debouncedSearch,
  fieldUpdated: fieldUpdatedSearch,
  debouncedValue: debouncedSearch
} = invoke(inputFactory, { defaultValue: '' });
export const $filterlineage = createStore<Record<number, boolean>>({});
export const $lineage = createStore<LineageData[] | null>(null);
export const $choosedUsers = createStore<number[]>([]);

sample({
  clock: loaddedDataLineage,
  source: api.queries.user.me.$data,
  fn: (me, props) => ({
    userId: props?.userId ?? me?.id ?? 0
  }),
  target: queryApiLineage.start
});

sample({
  clock: choosedUserLineage,
  source: $lineage,
  filter: (parents) => parents !== null,
  fn: (parents, { indexParents: [y, x] }) => {
    const copy = [...parents as LineageData[]];
    const clickParentId = copy[y].data[x].id;
    return {
      userId:clickParentId ?? 0,
      lineageY: y
    };
  },
  target:queryApiLineage.start
});

sample({
  clock: choosedUserLineage,
  source: $choosedUsers,
  fn: (choosedUsers, { indexParents: [x, index] }) => {
    const copy = [...choosedUsers];
    copy.splice(x);

    return [...copy, index];
  },
  target: $choosedUsers
});

sample({
  clock: changedFilter,
  source: $filterlineage,
  fn: (filters, { idLine, value }) => {
    const copy = { ...filters };
    copy[idLine] = value;

    return copy;
  },
  target: $filterlineage
});

sample({
  clock: queryApiLineage.finished.success,
  source: $lineage,
  fn: (prevsLineage, nextLineage) => {
    if(prevsLineage === null) {
      return [nextLineage.result];
    } else {
      const prevsLineageCopy = [...prevsLineage];
      const y = nextLineage.params.lineageY ?? 0;

      prevsLineageCopy.splice(y + 1);
      prevsLineageCopy[y + 1] = nextLineage.result;

      return prevsLineageCopy;
    }
  },
  target: $lineage
});
