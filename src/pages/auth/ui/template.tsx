
import { useUnit } from 'effector-react';
import { CONDITIONS_KEY, ModalConditions } from 'features/sign-up';
import { ToggleLanguage } from 'features/toggle-language';
import { ToggleTheme } from 'features/toggle-theme';
import { ClearLayout } from 'layouts';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { routes } from 'shared/config/router';
import { modalsStore } from 'shared/lib/modal';
import { Image } from 'shared/ui/image';
import { Logo } from 'shared/ui/logo';
import { Typography } from 'shared/ui/typography';

import promo from './assets/promo.webp';
import { AnotherMethods, ConverselyLink, PlayButton } from './components';
import s from './template.module.scss';

interface AuthTemplateProps {
  children: ReactNode;
  title: string;
}

export const AuthTemplate = ({
  children,
  title
}: AuthTemplateProps) => {
  const { t } = useTranslation();
  const onSetModal = useUnit(modalsStore.setModal);
  const [isOpenedSignIn] = useUnit([routes.auth.signIn.$isOpened]);

  return (
    <ClearLayout>
      <div className={s.page}>
        <div className={s.navbar}>
          <header className={s.header}>
            <Logo size='full' />

            <div className={s.controls}>
              <ToggleTheme />
              <ToggleLanguage />
            </div>
          </header>
          <div className={s.auth}>
            <Typography size='xl' color='acsent'>{t(title)}</Typography>

            <ConverselyLink />

            {children}
            
            <div className={s.another_variants_body}>
              <Typography
                className={s.another_variants_title}
                size='l'
                color='acsent_dark'
              >
                {`${t('Другие способы ')}${t(isOpenedSignIn ? 'входа' : 'регистрации')}`}
              </Typography>

              <AnotherMethods />
            </div>
          </div>

          <footer className={s.footer}>
            <Typography size='xs' font='additional'>{t('©Сopyright VBALANCE 2024')}</Typography>

            {isOpenedSignIn &&
              <>
                <Typography
                  className={s.cursor_link}
                  size='xs' 
                  color='acsent' 
                  font='additional'
                  onClick={() => onSetModal({
                    dataProps: {
                      keyModal: CONDITIONS_KEY
                    },
                    ModalElement: ModalConditions,
                    isOpen: true
                  })}
                >{t('Пользовательское соглашение')}</Typography>

                <Typography
                  className={s.cursor_link}
                  size='xs' 
                  color='acsent' 
                  font='additional'
                  onClick={() => onSetModal({
                    dataProps: {
                      keyModal: CONDITIONS_KEY
                    },
                    ModalElement: ModalConditions,
                    isOpen: true
                  })}
                >{t('Политика конфиденциальности')}</Typography>
              </>
            }
          </footer>
        </div>
        <div className={s.promo}>
          <Image
            src={promo}
            className={s.promo_image}
          />
          <Logo
            size='small'
            className={s.icon}
          />

          <PlayButton />
        </div>
      </div>
    </ClearLayout>
  );
};
