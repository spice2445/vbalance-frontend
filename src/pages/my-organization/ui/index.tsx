import { ProfileCard } from 'entities/user';
import { LineageSwitcher, SearchUsers } from 'features/lineage-switcher';
import { ReferralUser } from 'features/referral-link';
import { BaseLayout } from 'layouts';
import { PageDefaultLayout } from 'layouts/page-default';
import { Table } from 'shared/ui/table';
import { Tabs } from 'shared/ui/tabs';

import { tableUserSizeX, tableUserSizeY, tableUsersHead } from '../config';
import { userTable } from '../model';

import s from './style.module.scss';

export const MyOrganizationPage = () => (
  <BaseLayout>
    <PageDefaultLayout
      classesNameLines={[
        s.first_line
      ]}
      lines={[
        (<>
          <ProfileCard />
          <ReferralUser className={s.referral_link} />
        </>),
        (<>
          <Tabs
            isWrapperCard
            controllers={[
              {
                children: 'Список пользователей',
                icon: {
                  size: 'xs',
                  variant: 'user'
                },
                key: '1'
              },
              {
                children: 'Иерархия по линиям',
                icon: {
                  size: 'xs',
                  variant: 'hierarchy'
                },
                key: 'lineage'
              },
              {
                children: 'Аналитика организации',
                icon: {
                  size: 'xs',
                  variant: 'part'
                },
                key: '3'
              }
            ]}
            contents={[
              <Table
                head={tableUsersHead}
                $content={userTable.$table}
                $isDataRanedOut={userTable.$dataRanOut}
                reachedEndOfTable={userTable.reachedEndOfTable}
                loaddedTable={userTable.loaddedTable}
                key='1'
                gridX={tableUserSizeX}
                gridY={tableUserSizeY}
              />,
              <LineageSwitcher key='lineage' />
            ]}
            actionRight={<SearchUsers />}
          />
        </>)
      ]}
    />
  </BaseLayout>
);
