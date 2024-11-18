import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button';
import { Card } from 'shared/ui/card';
import { Input } from 'shared/ui/input';
import { Select } from 'shared/ui/select';
import { Typography } from 'shared/ui/typography';

import { optionsSecurity, selectSecurity } from '../../../model';
import common from '../common.module.scss';

export const Security = () => {
    const { t } = useTranslation();
    const isSettedQuestion = false;

    return(
        <Card
            className={common.size_card}
            title={{
                variantIcon: 'confirm',  
                text: 'Безопасность'
            }}
        >
            <Button
                className={common.top_l}
                icon={{
                    variant: 'link',
                    size: 'xs'
                }}
            >
                {t('Рекомендации')}
            </Button>

            {isSettedQuestion ?
                <Typography className={common.top_l} isTextLine>
                    {t('Ответ на контрольный вопрос:')}

                    <Typography color='acsent'>
                        {t('Сохранен')}
                    </Typography>
                </Typography>
                :
                <>
                    <Typography className={common.top_l}>
                        {t('Контрольный вопрос')}
                    </Typography>

                    <Typography
                        className={common.top_xs}
                        font='additional'
                        color='main'
                        size='xs'
                    >
                        {t('В случае потери доступа к личному кабинету или проблемами с восстановлением доступа, поможет «Контрольный вопрос». При восстановлении доступа или в случае любых подозрительных действий с вашего аккаунта для вашей безопасности наш сотрудник попросит вас написать ответ на контрольный вопрос.')}
                    </Typography>

                    <Select
                        className={common.top_s}
                        $chooseOption={selectSecurity.$select}
                        onChoosed={selectSecurity.choosedSelect}
                        options={optionsSecurity}
                    />

                    <Input 
                        classNames={{
                            body: common.top_s,
                            input: common.input
                        }}
                        theme='large'
                        placeholder='Введите ответ на выбранный вопрос'
                    />

                    <Button
                        className={common.top_m}
                        icon={{
                            variant: 'save',
                            size: 's'
                        }}
                    >
                        {t('Сохранить изменения')}
                    </Button>
                </>
            }
        </Card>
    );
};