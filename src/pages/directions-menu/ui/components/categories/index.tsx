
import clsx from 'clsx';
import useEmblaCarousel from 'embla-carousel-react';
import { DirectionCourseCard } from 'entities/academy';
import { Card } from 'shared/ui/card';

import { CATEGORIES } from '../../../config';
import common from '../../style.module.scss';
import { ProgressBar } from '../progress-bar';

import s from './style.module.scss';

export const Categories = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        dragFree: true,
        align: 'start'
    });

    return CATEGORIES.map((category) => (
        <Card
            title={{
                text: category.title
            }}
            className={clsx(common.slider, s.card_padding)}
            classNameContent={s.content}
            key={category.title}
        >
            <div className={s.slider}>
                <div className={'shadow_x'} ref={emblaRef}>
                    <div className={s.slider__container}>
                        {category.cards.map((card) => (
                            <DirectionCourseCard
                                {...card}
                                key={card.name}
                            />
                        ))}
                    </div>
                </div>
                
                <ProgressBar emblaApi={emblaApi} />
            </div>
        </Card>
    ));
};

  