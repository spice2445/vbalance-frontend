import { useUnit } from 'effector-react';
import { useTranslation } from 'react-i18next';
import { formatter } from 'shared/lib/formatter';
import { Input } from 'shared/ui/input';
import { Select } from 'shared/ui/select';
import { Typography } from 'shared/ui/typography';

import { 
    $usdt,
    $addressTrc20,
    $prevAddress,
    $chooseOption,
    options, 
    choosedOption, 
    handleChangedAddress, 
    selectedPrevAddress 
} from '../../../model';
import s from '../common.module.scss';

export const SelectVariant = () => {
    const {t} = useTranslation('');
    const [usdt, addressTrc20, prevAddress] = useUnit([$usdt, $addressTrc20, $prevAddress]);
    const [onHandleChange, onSelectedPrevAddress] = useUnit([handleChangedAddress, selectedPrevAddress]);

    const balanceFormatter = formatter.number.defaultN(usdt);

    return(
        <>
            <Select
                options={options}
                $chooseOption={$chooseOption}
                onChoosed={choosedOption}
            />

            <Typography
                className={s.medium_top}
                color='main'
                font='additional'
                align='center'
                isNotFlex
            >
                {t('Сумма вывода:')}

                <Typography font='additional_bold' align='center' as='span' isNotFlex>
                    {` ${balanceFormatter} USDT`}
                </Typography>
            </Typography>

            <Input
                value={addressTrc20}
                onValue={onHandleChange}
                theme='large-2'
                type='text'
                placeholder={t('Ваш кошелек USDT TRC-20')}
                classNames={{
                    body: s.large_top
                }}
                text={{
                    align:'center'
                }}
            />

            {prevAddress &&
                <Typography
                    onClick={onSelectedPrevAddress}
                    className={s.mini_top}
                    size='xs'
                    font='additional_bold'
                    align='center'
                    isNotFlex
                >
                    {t('Использовать кошелек:')}

                    <Typography size='xs' font='additional' align='center'>
                        {prevAddress}
                    </Typography>
                </Typography>
            }
        </>
    );
};