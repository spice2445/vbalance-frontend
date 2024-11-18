import { createStore } from 'effector';
import { OrganizationBalance } from 'entities/organization';
import { ProfileCard } from 'entities/user';
import { LineageSwitcher, SearchUsers } from 'features/lineage-switcher';
import { SharingPool } from 'features/sharing-pool';
import { PageDefaultLayout, BaseLayout } from 'layouts';
import { Card } from 'shared/ui/card';
import { Tabs } from 'shared/ui/tabs';

import { VBTStaking } from './card-staking';
import s from './style.module.scss';

const VBT_VESTING = 'VBT VESTING';
const VBT_STAKING = 'VBT STAKING';
const $depositVBT = createStore('150 000');
const $depositVBTInUSDT = createStore('34 500.78');
const $rateToken = createStore('0.23');

export const TokenomicsPage = () => (
  <BaseLayout>
    <PageDefaultLayout
      lines={[
        (<>
          <ProfileCard />
          <OrganizationBalance />
        </>),
        (<>
          <SharingPool />
          <VBTStaking
            title={VBT_VESTING}
            $depositVBT={$depositVBT}
            $depositVBTInUSDT={$depositVBTInUSDT}
            $rateToken={$rateToken}
          />
          <VBTStaking
            title={VBT_STAKING}
            $depositVBT={$depositVBT}
            $depositVBTInUSDT={$depositVBTInUSDT}
            $rateToken={$rateToken}
          />
        </>),
        (<>
          <Card
            title={{
              text: 'История баланса VBT',
              variantIcon: 'time'
            }}
          >
            <Tabs
              controllers={[
                {
                  children: 'История токенов',
                  icon: {
                    size: 'xs',
                    variant: 'balance'
                  },
                  key: '1'
                },
                {
                  children: 'Доли в иерархии',
                  icon: {
                    size: 'xs',
                    variant: 'token'
                  },
                  key: '2'
                },
                {
                  children: 'История вознаграждений',
                  icon: {
                    size: 'xs',
                    variant: 'ticket'
                  },
                  key: '3'
                }
              ]}
              contents={[
                <LineageSwitcher key='2' />,
                <LineageSwitcher key='2' />,
                <LineageSwitcher key='3' />
              ]}
              actionRight={<SearchUsers />}
            />
          </Card>
        </>)
      ]}
      classesNameLines={[
        s.first_line,
        s.second_line
      ]}
    />
  </BaseLayout>
);
