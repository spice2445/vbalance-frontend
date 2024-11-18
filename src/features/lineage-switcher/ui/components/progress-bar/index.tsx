import { EmblaCarouselType } from 'embla-carousel';
import {
  memo, useCallback, useEffect, useState
} from 'react';

import s from './style.module.scss';

export const ProgressBar = memo(({ emblaApi }: { emblaApi: EmblaCarouselType | undefined }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    emblaApi.on('reInit', onScroll);
    emblaApi.on('scroll', onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className={s.slider__controls}>
      <div className={s.slider__progress_bg} />
      <div className={s.slider__progress}>
        <div
          className={s.slider__progress__bar}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </div>
  );
});
