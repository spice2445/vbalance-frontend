import { useUnit } from 'effector-react';
import { CourseBlockCard, coursesType } from 'entities/academy';
import { BaseLayout } from 'layouts';
import { router } from 'shared/config/router';
import { skeletonGeneration } from 'shared/lib/lazy';

import { coursesBanner } from '../config';

import s from './style.module.scss';

export const DirectionsPage = () => {
    const path = useUnit(router.$path);
    const currentDirection = path.split('/')[2] as coursesType;

    return(
        <BaseLayout>
            <div className={s.page}>
                {coursesBanner[currentDirection]}
                {/* Выбираем баннер взаивисимости от направления */}

                <div className={s.list_blocks}>
                    {skeletonGeneration(9).map((index) => (
                        <CourseBlockCard
                            key={index}
                            index={index+1}
                            direction={currentDirection}
                            title={'Основы'}
                            description='Как влиять и говорить так, чтобы следовали за вами?
                            Взаимодействовать и менять состояние окружающих.'
                            count_lessons={2}
                            count_time={11111}
                            banner='https://s3-alpha-sig.figma.com/img/7ab1/57a0/e16de706de8044ea07d96bc77fdd170c?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PO1TWNoJUmwnEl86jEmYtv2Ihboyk5a3bl4EaDsA3l-d~H7Wv7o9Sy6vlWV0R0eFMa~qqm-XYfgkUcfVElXK5sIiPdWeRn9fdfKp6PQjFGHmFjO2BqhioxUnNu~ZWMAqVYAaZ6JGGLNcmkoXO8J8WXonDDtR5tkE0C-wRYlbgPQC~zZTC6nkBf4lsN9ZHp2DqkBYMjQ~2e8LlxYHR6whvanoGZ0uia2UKMAlByGZgqkrmriESHqRNViaY09LWwjqR-Y5oyXboLM36SADXwtlJneJ-EX2DoW-kM7f~-fNl0Nsx17Y9uXzaXsyUCh5cArSFQdfDbng-qP1CttxcSNXpQ__'
                            isOpen={true}
                            haveMentorMark={true}
                        />
                    ))}
                    
                </div>

                {/* Получаем от бека данные для блоков */}
            </div>
        </BaseLayout>
    );
};
