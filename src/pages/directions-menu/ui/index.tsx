import { BaseLayout } from 'layouts';
import { useTranslation } from 'react-i18next';
import { Typography } from 'shared/ui/typography';

import { DIRECTIONS } from '../config';

import { Categories } from './components';
import s from './style.module.scss';

export const DirectionsMenuPage = (): JSX.Element => {
  const {t} = useTranslation('');

  return (
    <BaseLayout>
      <div className={s.page}>
        {
          DIRECTIONS.map((directions, index) => (
            <div>
              <Typography
                color='main'
                size='m'
                icon={{
                  variant: directions.icon,
                  size: 'm'
                }}
              >
                {t(directions.name)}
              </Typography>

                {index === 0 ?
                  <div className={s.slider}>
                    {/* {
                      directions.sliders[0].cards.map((card) => (
                        <DirectionCourseCard 
                          {...card}
                          key={card.name}
                        />
                      ))
                    } */}
                  </div>
                  :
                  <Categories />
                  // directions?.sliders?.map((slider) => (
                  //   <Card
                  //     title={slider.title ? {
                  //       text: slider.title
                  //     } : undefined}
                  //     className={s.slider}
                  //   >
                  //     {
                  //       slider.cards.map((card) => (
                  //         <DirectionCourseCard 
                  //           {...card}
                  //           key={card.name}
                  //         />
                  //       ))
                  //     }
                  //   </Card>
                  // ))
                }
            </div>
          ))
        }
      </div>
    </BaseLayout>
  );
};

