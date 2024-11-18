import { clsx } from 'clsx';
import {
  memo, useCallback, useState
} from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button';
import { Card } from 'shared/ui/card';

import { TabsProps } from './index.type';
import s from './style.module.scss';

const TabsComponent = ({
  controllers,
  contents,
  className,
  classNames,
  actionRight,
  isWrapperCard
}: TabsProps) => {
  const { t } = useTranslation('');
  const [active, setActive] = useState<number>(0);
  const [isMounteds, setIsMounteds] = useState<number[]>([0]);

  const onSetActive = useCallback((index: number, onClick?: () => void) => () => {
    onClick?.();
    setActive(index);
    if (!isMounteds.includes(index)) {
      setIsMounteds((prevState) => [...prevState, index]);
    }
  }, [isMounteds]);

  const Wrapper = isWrapperCard ? Card : 'div';

  return (
    <Wrapper
      // dangeour
      className={clsx({ [s.tab_lineage]: (contents[active] as { key: string })?.key === 'lineage' })}
    >
      <div className={clsx(s.tabsContainer,  [className ?? ''])}>
        <div className={clsx(s.tabsControllers, classNames?.controllers)}>
          {controllers.map((controllerProps, index) => (
            <Button
              theme='tab'
              isActive={active === index}
              {...controllerProps}
              onClick={onSetActive(index, controllerProps.onClick as () => void)}
              key={controllerProps.key}
              className={active === index
                ? clsx(controllerProps.activeClass, s.tab_button_active)
                : clsx(controllerProps.className, s.tab_button)}
            >
              {t(controllerProps.children)}
            </Button>
          ))}

          {actionRight &&
            active === controllers.findIndex((controller) => controller.key === 'lineage') &&
            (
              <div className={s.action_right}>
                {actionRight}
              </div>
            )
          }
        </div>

        <div className={clsx(s.tabsContents, classNames?.content)}>
          {contents.map((content, index) => {
            if (isMounteds.includes(index)) {
              return (
                <div
                  key={controllers[index].key}
                  className={s.tabContent}
                  style={{ display: active === index ? 'block' : 'none' }}
                >
                  {content}
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export const Tabs = memo(TabsComponent);
