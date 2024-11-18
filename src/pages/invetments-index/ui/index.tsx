import { CompositionIndex, HistoryDepositsIndexTable } from 'entities/index';
import { VBTIPrograms } from 'features/VBTI-programs';
import { PageDefaultLayout, BaseLayout } from 'layouts';
import { Card } from 'shared/ui/card';

export const InvestmentsIndex = () => (
  <BaseLayout>
    <PageDefaultLayout
      lines={[
        <>
          <CompositionIndex />
          <VBTIPrograms />
        </>,
        <Card
          title={{
            variantIcon: 'time',
            text: 'История покупок/продаж VBTI'
          }}
        >
          <HistoryDepositsIndexTable />
        </Card>
      ]}
    />
  </BaseLayout>
);
