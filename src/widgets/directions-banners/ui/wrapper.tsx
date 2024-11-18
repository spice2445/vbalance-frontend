import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { coursesType } from 'entities/academy';
import { BuyCourseProps } from 'features/buy-course';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { modalsStore } from 'shared/lib/modal';
import { Button } from 'shared/ui/button';
import { Card } from 'shared/ui/card';
import { Image } from 'shared/ui/image';
import { Typography } from 'shared/ui/typography';
import { VbalanceTitle, VbalanceTitleVariants } from 'shared/ui/vbalance-title';

import { banners } from '../assets';

import s from './wrapper.module.scss';

interface WrapperBannerProps {
    children: ReactNode,
    type_course: VbalanceTitleVariants,
    title: string,
    description: string,
    media: coursesType,
    isPayment?:boolean,
    classNames?: {
        card?: string,
        card_content?: string,
        media_content?: string,
        content?: string,
        description?: string,
        icon?: string,
        book?: string,
        book_content?: string,
    }
}

export const WrapperBanner = ({
    children,
    type_course,
    title,
    description,
    media,
    isPayment,
    classNames
}: WrapperBannerProps) => {
    const handleSetModal = useUnit(modalsStore.setModal);
    const {t} = useTranslation();
    const mediaContent = banners[media];
    
    return(
        <Card
            className={clsx(classNames?.card, s.card_clear)}
            classNameContent={clsx(s.card_content, classNames?.card_content)}
        >
            <div className={clsx(s.content, classNames?.content)} >
                <VbalanceTitle 
                    title={type_course}
                    size='m'
                />

                <Typography
                    size='xl'
                    color='acsent'
                    className={s.default_top}
                >
                    {t(title)}
                </Typography>

                <Typography
                    font='additional_bold'
                    color='main'
                    className={clsx(s.default_top, classNames?.description)}
                >
                    {t(description)}
                </Typography>

                {children}

                {!isPayment &&
                    <Button
                        onClick={() => handleSetModal({
                            ...BuyCourseProps,
                            dataProps: {
                                ...BuyCourseProps.dataProps,
                                priceUsdt: 2_500
                            }
                        })}
                        className={s.payment_top}
                        icon={{
                            variant: 'link',
                            size: 'xs'
                        }}
                    >
                        {t('Перейти к оплате')}
                    </Button>
                }
            </div>

            <div className={clsx(s.media_content, classNames?.media_content)}>
                <Image
                    className={clsx(s.book_content, classNames?.book_content)}
                    src={mediaContent.book_image}
                />
                <Image
                    className={clsx(s.media_book, classNames?.book)}
                    src={mediaContent.book}
                />

                <mediaContent.icon 
                    className={clsx(s.icon, classNames?.icon)}
                />
            </div>
        </Card>
    );
};