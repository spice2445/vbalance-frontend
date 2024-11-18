
import { useTranslation } from 'react-i18next';
import { Typography } from 'shared/ui/typography';

import common from '../common.module.scss';
import { SharedStat } from '../shared-stat';

export const ConfrimData = () => {
    const {t} = useTranslation('');

    return(
        <>
            <SharedStat />

            <Typography
                className={common.medium_top}
                font='additional'
                color='main'
                align='center'
                isNotFlex
            >
                {t('Обратите внимание, выбрана на сеть')}
                <Typography font='additional_bold' as='span' isNotFlex>
                    {' TRC20. '}
                </Typography>
                {t('Если перевод будет отправлен в другой сети, то ваши средства пропадут безвозвратно. Мы не сможем возместить пропажу.')}
            </Typography>
        </>
    );
};