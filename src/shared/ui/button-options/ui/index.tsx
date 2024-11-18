import clsx from 'clsx';
import { EventCallable, StoreWritable } from 'effector';
import { useUnit } from 'effector-react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button/ui';
import { Icon } from 'shared/ui/icon';
import { Typography } from 'shared/ui/typography';

import s from './style.module.scss';

interface ButtonOptionsProps {
    classNames?: {
        container?: string
    }
    $options: StoreWritable<{
        key: string,
        text: string
    }[]>,
    changedOption: EventCallable<{
        text: string,
        index: number
    }>,
    deletedOption: EventCallable<number>
}

export const ButtonOptions = ({
    classNames,
    $options,
    changedOption,
    deletedOption
}: ButtonOptionsProps) => {
    const {t} = useTranslation();
    const options = useUnit($options);
    const [changeOption, deleteOption] = useUnit([changedOption, deletedOption]);

    return(
        <div className={clsx(s.container, classNames?.container)}>
            {options.map((option, index) => (
                <Button
                    type='button'
                    key={option.key}
                    theme='transparent'
                    className={s.button}
                >
                    <div className={s.input_container}>
                        <input
                            className={s.input}
                            value={option.text}
                            onChange={(event) => changeOption({
                                text: event.target.value,
                                index
                            })}
                            // style={{
                            //     minWidth: `${option.text.length < 4 ? 32 : option.text.length * 8}px`
                            // }}
                        />
                    </div>
                    <Icon
                        onClick={() => deleteOption(index)}
                        variant='close'
                        size='xs2'
                    />
                </Button>
            ))}

            <Button
                type='button'
                theme='transparent'
                className={s.button}
                onClick={() => changeOption({
                    text: '',
                    index: options.length + 1
                })}
            >
                <div className={s.input_container}>
                    {/* <input 
                        className={s.input}
                    /> */}
                    <Typography
                        font='additional_bold'
                        size='xs'
                        color='acsent'
                    >
                        {`${t('Добавить')}...`}
                    </Typography>
                </div>
            </Button>
        </div>
    );
};