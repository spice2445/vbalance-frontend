import { BaseLayout } from 'layouts';

import { acquiredStatuses, achievementStatuses } from '../model';

import { LayoutDescriptions } from './components';
import s from './style.module.scss';

export const ProfileStatusesPage = () => (
  <BaseLayout>
    <div className={s.page}>
      <LayoutDescriptions
        title='Приобретаемые статусы'
        descriptions={[
          'В сообществе вы сами определяете свой статус как в классическом бизнесе.',
          'Вы сами можете рассчитать свои вложения и доходы, которые будете регулярно получать.'
        ]}
        isBuyable
        loadedData={acquiredStatuses.loadded}
        $statuses={acquiredStatuses.$statuses}
      />
      <LayoutDescriptions
        title='Статусы Основателей'
        descriptions={[
          'Особые статусы сообщества для активных партнеров. Автоматически активируются при',
          'выполнении условий по товарообороту вашей организации и активном статусе «Партнер».'
        ]}
        isBuyable={false}
        loadedData={achievementStatuses.loadded}
        $statuses={achievementStatuses.$statuses}
      />
    </div>
  </BaseLayout>
);
