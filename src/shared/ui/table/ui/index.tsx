import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { InView } from 'react-intersection-observer';
import { LoaddedData } from 'shared/ui/loaddedData';
import { Typography } from 'shared/ui/typography';

import { DefaultCell } from './components/cells/default';
import { HeadCell } from './components/head';
import { SkeletonsTabs } from './components/skeletons';
import { TableProps } from './index.type';
import s from './style.module.scss';

export const Table = ({
  head,
  $content,
  $isDataRanedOut,
  reachedEndOfTable,
  loaddedTable,
  fixedSpeaker,
  gridX,
  gridY,
  className
}: TableProps) => {
  const [
    content,
    isDataRanedOut
  ] = useUnit([$content, $isDataRanedOut]);
  
  const isShowContent = Array.isArray(content);
  const columnCount = content?.[0]?.length ?? 0;
  const fixedSpeakersIndex = content ? content.map((_, index) => (
    index * columnCount + (fixedSpeaker ?? 0))).flat() : undefined;

  return (
    <div className={clsx(s.container, className)}>
      <LoaddedData loaddedData={loaddedTable} />
      <div className={s.table}>
        <div
          className={s.head}
          style={{
            gridTemplateColumns: gridX
          }}
        >
          {head.map((element, index) => (
            <HeadCell
              // onClick={element?.isFilterable ? onclickHeadFiler : undefined}
              onClick={undefined}
              index={index}
              fixedSpeaker={fixedSpeaker}
              {...element}
              key={element.content}
            />
          ))}
        </div>

        <div
          className={s.content}
          style={{
            gridTemplateColumns: gridX,
            gridTemplateRows: `repeat(10, ${gridY})`
          }}
        >
          {isShowContent
            ? content.flat().map((cell, index) => (
              <DefaultCell
                {...cell}
                index={index}
                key={index}
                fixedSpeakers={fixedSpeakersIndex}
              />
            ))
            : (
              <SkeletonsTabs
                countColumns={head.length}
                countRows={10}
              />
            )}

          {(isShowContent && !isDataRanedOut && content.length > 0) && (
            <>
              <SkeletonsTabs
                countColumns={head.length}
                countRows={2}
              />
              <InView
                as='div'
                className={s.reachedEnd}
                onChange={(inView) => inView && reachedEndOfTable()}
              />
            </>
          )}
        </div>

        {(isShowContent && content.length === 0) &&
          <Typography 
            size='xl'
            className={s.not_data}
          >
            Not data!
          </Typography>
        }
      </div>
    </div>
  );
};
