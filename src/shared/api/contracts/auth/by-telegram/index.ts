import { runtypeContract } from '@farfetched/runtypes';
import { Record, Number } from 'runtypes';

export const botId = runtypeContract(
  Record({
    data: Record({
      botId: Number
    })
  })    
);