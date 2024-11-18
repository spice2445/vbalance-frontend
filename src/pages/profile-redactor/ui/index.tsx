import { RedactProfile } from 'features/profile-redact';
import { BaseLayout } from 'layouts';

import s from './style.module.scss';

export const ProfileRedactorPage = (): JSX.Element => (
  <BaseLayout>
    <div className={s.container}>
      <RedactProfile.PublicInfo />
      <RedactProfile.SettingsSignIn />
      <RedactProfile.Security />
    </div>
  </BaseLayout>
);
