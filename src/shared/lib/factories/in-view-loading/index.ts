import { 
  DynamicallySourcedField, 
  Contract, 
  Validator, 
  createJsonQuery, 
  SourcedField,
  declareParams,
  FetchApiRecord,
  JsonApiRequestError, 
  Query,
  createBarrier,
  isHttpErrorCode,
  applyBarrier
} from '@farfetched/core';
import { createFactory } from '@withease/factories';
import {
  Effect,
  StoreShape, 
  Unit, 
  attach, 
  createEvent, 
  createStore, 
  restore, 
  sample
} from 'effector';
import { baseUrl } from 'shared/lib/base-url';


// ######
// LEGACY
// ######
interface createDataLoadingInViewProps<argsI, sourceI> {
  effect: Effect<argsI, sourceI, Error>,
  source?: StoreShape
}

export const loadingInViewFactory = createFactory(<argsI, sourceI>({
  effect,
  source
}: createDataLoadingInViewProps<argsI, sourceI>) => {
  const loaddedData = createEvent();

  const getData = attach({
    effect,
    source: source as StoreShape
  });

  sample({
    clock: loaddedData,
    target: getData
  });

  const $data = restore(getData.doneData, null);

  return {
    loaddedData,
    $data
  };
});
// ######
// LEGACY
// ######
// <<<--->>>
interface createDataLoadingInViewTestProps<DataApi, ParamsApi = void> {
  apiEffect: Query<ParamsApi, DataApi, JsonApiRequestError>,
  params?: ParamsApi
}

export const loadingInViewFactoryApi = createFactory(<DataApi, ParamsApi>({
  apiEffect,
  params
}: createDataLoadingInViewTestProps<DataApi, ParamsApi>) => {
  const loaddedData = createEvent();
  const $data = createStore<DataApi | null>(null);

  // @ts-ignore
  sample({
    clock: loaddedData,
    fn: () => params,
    target: apiEffect.start
  });

  sample({
    clock: apiEffect.$data,
    fn: (data) => data,
    target: $data
  });

  return {
    loaddedData,
    $data
  };
});
// <<<--->>>

interface queryWrapperProps {
  url: string | SourcedField<void, string, void>,
  query?: SourcedField<any, string, void> | SourcedField<any, FetchApiRecord, void> | undefined,
  response: {
    contract: Contract<unknown, unknown>;
    mapData?: DynamicallySourcedField<{
      result: unknown;
      params: unknown;
    }, unknown, void>;
    validate?: Validator<unknown, unknown, void> | undefined;
  },
  source?: Record<string, Unit<any>>
}


export const queryWrapper = createFactory(<Params, Data>({
  url,
  query,
  response,
  source
}: queryWrapperProps) => {
  const loaddedData = createEvent();

  const queryApi = createJsonQuery({
    params: declareParams<any>(),
    request: {
      method: 'GET',
      url: typeof url === 'string' ? baseUrl(url) : url,
      query: query as any,
      credentials: 'include'
    },
    response
  });

  applyBarrier(
    queryApi, 
    { 
      barrier: 
        createBarrier({
          activateOn: {
            failure: isHttpErrorCode([401, 404])
          },
          perform: [queryApi]
        })
    }
  );

  if(source) {
    sample({
      // @ts-ignore
      clock: loaddedData,
      source,
      fn: (source: Record<string, any>) => source,
      target: queryApi.start
    });
  } else {
    sample({
      clock: loaddedData,
      target: queryApi.start
    });
  }
  

  return {
    queryApi: queryApi  as Query<Params, Data, JsonApiRequestError, null>,
    loaddedData
  };
});
