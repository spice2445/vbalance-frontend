
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { skeletonGeneration } from 'shared/lib/lazy';
import { Button } from 'shared/ui/button';
import { Image } from 'shared/ui/image';
import { ModalDefault } from 'shared/ui/modal';
import { Typography } from 'shared/ui/typography';

import { UPDATE_AVATAR_MODAL_KEY } from '../../../../config';
import common from '../../common.module.scss';

import s from './style.module.scss';

const UpdateAvatarModal = () => {
    const {t} = useTranslation();
    
    return(
        <ModalDefault
            className={s.modal}
            title={{
                text: 'Изменить фотографию',
                variantIcon: 'edit',
                align: 'center'
            }}
            keyModal={UPDATE_AVATAR_MODAL_KEY}
        >
            <Button
                className={common.top_l}
                icon={{
                    variant: 'download',
                    size: 'xs'
                }}
            >
                {t('Загрузить свою')}
            </Button>

            <div className={clsx(s.avatars, common.top_l)}>
                {skeletonGeneration(10).map(() => (
                    <div>
                        <Image 
                            src=''
                        />
                    </div>
                ))}
            </div>

            <div className={clsx(s.navigation, common.top_xs)}>
                <Button 
                    theme='big_icon'
                    icon={{
                        variant: 'arrow-reversed',
                        size: 'xs'
                    }}
                />
                <Typography
                    className={s.current_page}
                    color='acsent'
                >
                    1
                    <Typography
                        className={s.all_page}
                        size='m'
                    >
                        /
                        <Typography
                            size='m'
                        >
                            2
                        </Typography>
                    </Typography>
                </Typography>
                <Button 
                    theme='big_icon'
                    icon={{
                        variant: 'arrow',
                        size: 'xs'
                    }}
                />
            </div>

            <div className={clsx(s.footer_form, common.top_m)}>
                <Button 
                    theme='big_icon'
                    icon={{
                        variant: 'close',
                        size: 'xs2'
                    }}
                />

                <Button 
                    icon={{
                        variant: 'check',
                        size: 'xs'
                    }}
                >{t('Сохранить изменения')}</Button>
            </div>
        </ModalDefault>
    );
};

export const updateAvatarModalProps = {
    ModalElement: UpdateAvatarModal,
    isOpen: true,
    dataProps: {
        keyModal: UPDATE_AVATAR_MODAL_KEY
    }
};
  