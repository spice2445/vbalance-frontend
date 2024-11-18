
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button';
import { Card } from 'shared/ui/card';
import { Checkbox } from 'shared/ui/checkbox';
import { Icon } from 'shared/ui/icon';
import { Image } from 'shared/ui/image';
import { Input } from 'shared/ui/input';
import { Typography } from 'shared/ui/typography';

import common from '../common.module.scss';

import s from './style.module.scss';

export const SettingsSignIn = () => {
    const { t } = useTranslation();
    const isConnectTelegram = true;
    const isEmailConnect = false;
    const isPasswordSetted = isEmailConnect && false;

    return(
        <Card
            className={common.size_card}
            title={{
                variantIcon: 'settings',
                text: 'Настройки входа'
            }}
        >
            <div className={common.top_l}>
                <div className={s.header}>
                    <Typography>{`Telegram ${t('аккаунт')}`}</Typography>

                    {isConnectTelegram &&
                        <Typography
                            className={s.header_text}
                            font='additional_bold'
                            size='xs'
                            icon={{
                                variant: 'close',
                                size: 'xs2',
                                fill: 'green'
                            }}
                        >
                            {t('Отключить')}
                        </Typography>
                    }
                </div>

                {isConnectTelegram ?
                    <div className={common.top_s}>
                        <div className={s.telegram_account}>
                            <div className={s.telegram_avatar}>
                                <Image
                                    src={'https://s3-alpha-sig.figma.com/img/fac7/47cd/cbbcdd5e4f4133e03323f1d8694a313e?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NJJj1f29nRjljMlT~0VB2LP2hXE5GEF10H0lyPVGvlfN1ds~yOFL8NQ8hMNQzZ7zHtL1EK3~p2j2b5~gHd6mW-XRg18od3pKmP47Wq8HqQQEazNrwmpVYQp0cDV0tCjqb5g9luo3XDe1SrZTYFqYw~4z7wXd6gUfEKa64JCCBe4yOmpms6KXBkZzYOyMPzIcagLRFoM1Jrdu9r6YNEEoEohZV1jxSWpkVo-22Bv5VpBJTDcVTjwSqQ2r6PlFpqKs3vYg4SwU1WktvnBXSV5WaFmIRi8jyCI-inXfYIyORZotHwjyWwrHAo0DS7YXW6SlFCyG2T0e7D20JA2VECdIzA__'}
                                />
                            </div>

                            <div className={s.telegram_texts}>
                                <Typography color='main' font='additional_bold'>{'@alex_konstantinov'}</Typography>
                                <Typography color='main' font='additional'>{'+7 960 399 20 40'}</Typography>
                            </div>
                        </div>

                        <div className={common.top_s}>
                            <Checkbox
                                isChoose={true}
                                classNames={{
                                    container: common.top_xs2
                                }}
                            >
                                {t('Показать тому, кто меня пригласил')}
                            </Checkbox>

                            <Checkbox
                                isChoose={false}
                                classNames={{
                                    container: common.top_xs2
                                }}
                            >
                                {t('Показать во всей иерархии')}
                            </Checkbox>

                            <Checkbox
                                isChoose={false}
                                classNames={{
                                    container: common.top_xs2
                                }}
                            >
                                {t('Не показывать никому')}
                            </Checkbox>
                        </div>
                    </div>
                    :
                    <Button
                        className={common.top_s}
                        icon={{
                            variant: 'confirm',
                            size: 'xs'
                        }}
                    >
                        {`${t('Подключить')} Telegram`}
                    </Button>
                }
            </div>

            <div className={common.top_m}>
                <div className={s.header}>
                    <Typography>{t('Электронная почта')}</Typography>
                    {isEmailConnect && 
                        <Typography
                            className={s.header_text}
                            font='additional_bold'
                            size='xs'
                            icon={{
                                variant: 'edit',
                                size: 'xs',
                                fill: 'green'
                            }}
                        >
                            {t('Изменить')}
                        </Typography>
                    }
                </div>

                <div className={common.top_s}>
                    <div className={s.email_block}>
                        <Input
                            classNames={{
                                input: common.input,
                                body: s.email_input
                            }}
                            theme='large'
                            placeholder={'Введите электронную почту'}
                        />

                        {isEmailConnect && 
                            <Icon
                                className={s.email_valid}
                                variant='check'
                                size='m'
                                fill='green'
                            />
                        }
                    </div>

                    {!isEmailConnect && 
                        <Input
                            classNames={{
                                input: common.input,
                                body: common.top_xs
                            }}
                            theme='large'
                            placeholder={'Введите код из письма'}
                        />
                    }

                    <Button
                        className={common.top_m}
                        icon={{
                            variant: 'confirm',
                            size: 'xs'
                        }}
                    >
                        {t('Получить код на почту')}
                    </Button>
                </div>

                <div className={clsx(common.top_l, {[s.password_block]: !isEmailConnect})}>
                    <Typography>
                        {t(isPasswordSetted ? 'Изменить пароль' : 'Создать пароль')}
                    </Typography>

                    {isPasswordSetted ?
                        <>
                            <Input
                                classNames={{
                                    input: common.input,
                                    body: common.top_s
                                }}
                                theme='large'
                                placeholder={'Введите действующий пароль'}
                            />

                            <Input
                                classNames={{
                                    input: common.input,
                                    body: common.top_xs
                                }}
                                theme='large'
                                placeholder={'Введите новый пароль'}
                            />

                            <Input
                                classNames={{
                                    input: common.input,
                                    body: common.top_xs
                                }}
                                theme='large'
                                placeholder={'Подтвердите новый пароль'}
                            />
                        </>
                        :
                        <>
                            <Input
                                classNames={{
                                    input: common.input,
                                    body: common.top_s
                                }}
                                theme='large'
                                placeholder={'Введите пароль'}
                            />
                            <Input
                                classNames={{
                                    input: common.input,
                                    body: common.top_xs
                                }}
                                theme='large'
                                placeholder={'Подтвердите пароль'}
                            />
                        </>
                    }
                </div>
            </div>

            <Button
                className={common.top_m}
                icon={{
                    variant: 'save',
                    size: 's'
                }}
            >
                {t('Сохранить изменения')}
            </Button>
        </Card>
    );
};