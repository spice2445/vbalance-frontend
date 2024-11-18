import { Link } from 'atomic-router-react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button';
import { Card } from 'shared/ui/card';
import { Image } from 'shared/ui/image';
import { Typography } from 'shared/ui/typography';

import { DirectionCardProps } from '../../config';

import bg_direction from './bg-direction.png';
import s from './style.module.scss';



export const DirectionCard = ({
  title,
  description,
  link
}: DirectionCardProps) => {
    const {t} = useTranslation();

    return(
        <Card
          className={s.card_direction}
        >
          <Image
            src={bg_direction}
            className={s.card_direction_bg}
          />
          <div className={s.card_content}>
            <Typography
              color='white'
              size='l'
            >
                {title}
            </Typography>
  
            <div className={s.content_action}>
              <Typography
                font='additional'
                color='white'
                size='s'
                as='p'
              >
                {t(description)}
              </Typography>
              <Button
                as={Link}
                to={link}
                theme='white'
                className={s.link_action}
                icon={{
                  variant: 'link',
                  size: 'xs'
                }}
              >
                {t('Перейти к направлению')}
              </Button>
            </div>
          </div>
        </Card>
    );
};