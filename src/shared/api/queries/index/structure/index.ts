import {  applyBarrier, unknownContract } from '@farfetched/core';
import { invoke } from '@withease/factories';
import { barriers } from 'shared/api/barriers';
// import { contracts } from 'shared/api/contracts';
import { queryWrapper } from 'shared/lib/factories';

export interface compositionIndex {
  icon: string,
  title: string,
  percent?: number 
}

export const structure = invoke(queryWrapper<void, compositionIndex[]>, {
  url: '/index-token/structure',
  response: {
    contract: unknownContract, // contracts.index.structure,
    mapData: ({ result }) => (result as any).data[0]
  }
});

applyBarrier(structure.queryApi, { barrier: barriers.auth });
