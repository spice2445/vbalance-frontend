import { OrganizationBalance } from 'entities/organization';
import { ProfileCard } from 'entities/user';
import { ReferralUser } from 'features/referral-link';
import { PageDefaultLayout, BaseLayout } from 'layouts';
import { Card, for_table_padding, for_content_table_margin } from 'shared/ui/card';
import { Table } from 'shared/ui/table';
import { Tabs } from 'shared/ui/tabs';

import { tableGrid, tableHead } from '../config';
import {
  tableCabinet,
  tableTickets,
  tableTokens
} from '../model';

import { Cabinet, Tickets } from './cardBalanceMini';
import s from './style.module.scss';

export const ProfilePage = (): JSX.Element => (
  <BaseLayout>
    <PageDefaultLayout
      classesNameLines={[
        s.first_line,
        s.second_line
      ]}
      lines={[
        (<>
          <ProfileCard />
          <ReferralUser />
        </>),
        (<>
          <Cabinet />
          <Tickets />
          <OrganizationBalance />
        </>),
        (<Card
          title={{
            text: 'История баланса по каждому направлению',
            variantIcon: 'time',
            className: for_content_table_margin
          }}
          className={for_table_padding}
        >
          <Tabs
            classNames={{
              controllers: for_content_table_margin
            }}
            controllers={[
              {
                children: 'История кабинета',
                icon: {
                  size: 'xs',
                  variant: 'balance'
                },
                key: '1'
              },
              {
                children: 'История токенов',
                icon: {
                  size: 'xs',
                  variant: 'token'
                },
                key: '2'
              },
              {
                children: 'История тикетов',
                icon: {
                  size: 'xs',
                  variant: 'ticket'
                },
                key: '3'
              }
            ]}
            contents={[
              <Table
                head={tableHead}
                $content={tableCabinet.$table}
                $isDataRanedOut={tableCabinet.$dataRanOut}
                reachedEndOfTable={tableCabinet.reachedEndOfTable}
                loaddedTable={tableCabinet.loaddedTable}
                fixedSpeaker={2}
                key='1'
                gridX={tableGrid.x}
                gridY={tableGrid.y}
              />,
              <Table
                head={tableHead}
                $content={tableTokens.$table}
                $isDataRanedOut={tableTokens.$dataRanOut}
                reachedEndOfTable={tableTokens.reachedEndOfTable}
                loaddedTable={tableTokens.loaddedTable}
                fixedSpeaker={2}
                key='2'
                gridX={tableGrid.x}
                gridY={tableGrid.y}
              />,
              <Table
                head={tableHead}
                $content={tableTickets.$table}
                $isDataRanedOut={tableTickets.$dataRanOut}
                reachedEndOfTable={tableTickets.reachedEndOfTable}
                loaddedTable={tableTickets.loaddedTable}
                fixedSpeaker={2}
                key='3'
                gridX={tableGrid.x}
                gridY={tableGrid.y}
              />
            ]}
          />
        </Card>)
      ]}
    />
  </BaseLayout>
);
