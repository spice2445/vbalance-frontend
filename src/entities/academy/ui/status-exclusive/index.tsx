import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { $cardProfile } from 'entities/user';
import { useTranslation } from 'react-i18next';
import { exclusiveCourseProps } from 'shared/api/queries/academy/exclusive';
import { Button } from 'shared/ui/button';
import { Card } from 'shared/ui/card';
import { Image } from 'shared/ui/image';
import { Typography } from 'shared/ui/typography';

import s from './style.module.scss';


type statusExclusiveCardProps = Partial<exclusiveCourseProps> & {
    isLoading: boolean
}

export const StatusExclusiveCard = ({
    needStatus,
    titleCourse,
    description,
    idCourse,
    maskImg,
    isLoading
}: statusExclusiveCardProps) => {
    const cardProfile = useUnit($cardProfile);
    const {t} = useTranslation('');
    
    return(
        <Card
            key={idCourse}
            className={s.card}
            classNameContent={s.card_content}
        >
            <Image 
                className={s.card_mask}
                isLoading={isLoading}
                src={maskImg}
            />

            <div 
                className={clsx(s.card_content_padding, {[s.card_content_skeleton]: isLoading})}
            >
                <Typography
                    color='acsent'
                    size='l'
                    isTextLine
                    isLoading={isLoading}
                >
                    {needStatus && t(needStatus)}

                    <Typography
                        color='main'
                        size='l'
                    >
                        {titleCourse && `«${t(titleCourse)}»`}
                    </Typography>
                </Typography>

                <Typography
                    className={s.description}
                    color='main'
                    font='additional_bold'
                    isLoading={isLoading}
                >
                    {description && t(description)}
                
                    <Button
                        icon={{
                            variant: 'status',
                            size: 's'
                        }}
                        isLoading={!cardProfile && isLoading}
                    >
                        {t(cardProfile?.status === needStatus ?
                            'Перейти к направлению'
                            :
                            `Стать ${needStatus}`
                        )}
                    </Button>
                </Typography>
            </div>
        </Card>
    );
};