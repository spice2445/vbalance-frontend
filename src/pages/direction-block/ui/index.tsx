
import { useUnit } from 'effector-react';
import { LessonCard } from 'entities/academy';
import { BaseLayout } from 'layouts';
import { useTranslation } from 'react-i18next';
import { router } from 'shared/config/router';
import { skeletonGeneration } from 'shared/lib/lazy';
import { Typography } from 'shared/ui/typography';
import { Lesson } from 'widgets/lesson';

import s from './style.module.scss';

export const DirectionBlockPage = () => {
    const {t} = useTranslation();
    const path = useUnit(router.$path);
    const directionName = path.split('/')[2];

    return(
        <BaseLayout>
            <div className={s.page}>
                <Lesson
                    allCountLessons={7}
                    name_block='Мастер своих коммуникаций'
                    name_lesson='Название занятия'
                    description={'Таким образом реализация намеченных плановых заданий позволяет выполнять важные задания по разработке позиций, занимаемых участниками в отношении поставленных задач. Товарищи! постоянный количественный рост и сфера нашей активности требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач.\n\n Значимость этих проблем настолько очевидна, что консультация с широким активом в значительной степени обуславливает создание систем массового участия. Равным образом новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.'}
                    additionalMaterials={[
                        {
                            name: 'PDF версия занятия',
                            link: '#'
                        },
                        {
                            name: 'Иллюстрации к занятию',
                            link: '#'
                        }
                    ]}
                />

                <div className={s.column_lessons}>
                    <Typography
                        color='main'
                        size='m'
                        icon={{
                            variant: 'hide',
                            size: 'l',
                            fill: 'green'
                        }}
                    >{t('Список занятий')}</Typography>

                    <div className={s.list_lessons}>
                        {skeletonGeneration(7).map((index) => (
                            <LessonCard 
                                key={index}
                                index={index+1}
                                title_block='Мастер своих коммуникаций'
                                title_lesson='Название второго занятия'
                                directionName={directionName}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
};