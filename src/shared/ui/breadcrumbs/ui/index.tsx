import { Link } from 'atomic-router-react';
import { clsx } from 'clsx';
import { useUnit } from 'effector-react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { controls, router } from 'shared/config/router';
import { breadCrumbs } from 'shared/lib/breadcrumbs';
import { Typography } from 'shared/ui/typography';

import s from './style.module.scss';

export const BreadCrumbs: FC<{ mobile?: boolean }> = ({ mobile }) => {
  const [pathString, back] = useUnit([router.$path, controls.back]);
  const { t } = useTranslation();

  if (!pathString) return null;

  const splittedPaths = pathString.split('/');
  const path = breadCrumbs.getPath(splittedPaths);

  const breadCrumbsPath = breadCrumbs.icons[path[1]] || 'arrow-reversed';
  const iconVariant = mobile ? 'arrow-reversed' : breadCrumbsPath;
  const titles = breadCrumbs.getTitle(path);

  return (
    <Typography
      className={clsx(s.breadcrumbs, { [s.mobile]: mobile })}
      icon={{
        variant: iconVariant,
        fill: 'green-dark',
        size: 'xs'
      }}
      onClick={back}
    >
      {titles.map(({title, to}, index) => (
        <Typography 
          key={title}
        >
          <Typography
            font='additional_bold'
            size='xs'
            color={index === 0 ? 'acsent_dark' : 'acsent'}
            as={Link}
            to={to}
          >
            {t(title)}
          </Typography>

          {index !== titles.length - 1
            && (
              <Typography
                font='additional_bold'
                size='xs'
                color='acsent_dark'
              >
                |
              </Typography>
            )}
        </Typography>
      ))}
    </Typography>
  );
};
