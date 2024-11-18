import { HistoryDepositsArbTable } from 'entities/arb';
import { HistoryDepositsIndexTable } from 'entities/index';
import { ArbitrageDeposit } from 'features/arbitrage-deposit';
import { AutopurchaseVBTI } from 'features/autopurchase-VBTI';
import { CalculatorCapital } from 'features/calculator-capital';
import { PageDefaultLayout, BaseLayout } from 'layouts';
import { Card } from 'shared/ui/card';
import { Tabs } from 'shared/ui/tabs';

import { directionsInvestments } from '../config';

import { DirectionCard } from './card-direction';

export const Investments = () => {
  return (
    <BaseLayout>
      <PageDefaultLayout
        lines={[
          (<>
            {directionsInvestments.map((direction) => (
              <DirectionCard
                key={direction.title}
                {...direction}
              />
            ))}
          </>),
          // <></>,
          <CalculatorCapital />,
          (<>
            <ArbitrageDeposit />
            <AutopurchaseVBTI />
          </>),
          <Card
            title={{
              text: 'История инвестиций'
            }}
          >
            <Tabs
              controllers={[
                {
                  children: 'История депозитов ARB',
                  icon: {
                    size: 'xs',
                    variant: 'token'
                  },
                  key: '1'
                },
                {
                  children: 'История токенов индекса',
                  icon: {
                    size: 'xs',
                    variant: 'token'
                  },
                  key: '2'
                }
              ]}
              contents={[
                <HistoryDepositsArbTable isInTab key='1' />,
                <HistoryDepositsIndexTable isInTab key='2' />
              ]}
            />
          </Card>
        ]}
      >
      </PageDefaultLayout>
    </BaseLayout>
  );
};
