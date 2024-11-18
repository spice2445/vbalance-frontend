import {
  StatisticDepostisArb,
  CountEquityPoolsArb,
  EquityPools,
  HistoryDepositsArbTable
} from 'entities/arb';
// import { ArbitrageDeposit } from 'features/arbitrage-deposit';
import { AutomaticIndexAccumulation } from 'features/automatic-index-accumulation';
import { PageDefaultLayout, BaseLayout } from 'layouts';
import { Card } from 'shared/ui/card';

import s from './style.module.scss';

export const InvestmentsArb = () => (
  <BaseLayout>
    <PageDefaultLayout
      lines={[
        (<>
          {/* <ArbitrageDeposit /> */}
          <AutomaticIndexAccumulation />
          <div className={s.line_first_group}>
            <StatisticDepostisArb />
            <CountEquityPoolsArb />
          </div>
        </>),
        <EquityPools />,
        <Card
          title={{
            variantIcon: 'time',
            text: 'История депозитов ARB'
          }}
        >
          <HistoryDepositsArbTable />
        </Card>
      ]}
      classesNameLines={['', s.line_second]}
    />
  </BaseLayout>
);
