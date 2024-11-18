import { useField, useForm } from '@filledout/react';
import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { useTranslation } from 'react-i18next';
import { modalsStore } from 'shared/lib/modal';
import { Button } from 'shared/ui/button';
import { ButtonOptions } from 'shared/ui/button-options';
import { Card } from 'shared/ui/card';
import { Checkbox } from 'shared/ui/checkbox';
import { Image } from 'shared/ui/image';
import { FieldInput } from 'shared/ui/input';
import { Typography } from 'shared/ui/typography';

import { 
    $$formPublicInfo, 
    optionsCities,
    settedGenderMan,
    settedGenderUknown,
    settedGenderWoman
} from '../../../model';
import common from '../common.module.scss';

import s from './style.module.scss';
import { updateAvatarModalProps } from './update-avatar';

export const PublicInfo = () => {
    const { t } = useTranslation();
    const setModal = useUnit(modalsStore.setModal);
    const {
        onSubmit,
        fields
    } = useForm($$formPublicInfo);

    const [
        formsValue,
        setGenderMan,
        setGenderUknown,
        setGenderWoman
    ] = useUnit([
        $$formPublicInfo.$values,
        settedGenderMan,
        settedGenderUknown,
        settedGenderWoman
    ]);

    const avatar = useField(fields.avatar);
    
    return(
        <Card
            className={common.size_card}
            title={{
                variantIcon: 'info',  
                text: 'Общая информация'
            }}
        >
            <div className={common.top_m}>
                <Typography>{t('Фотография профиля')}</Typography>

                <div className={clsx(s.avatar_block, common.top_s)}>
                    <div className={s.avatar}>
                        <Image 
                            src={avatar.value}
                        />
                    </div>

                    <Button
                        onClick={() => setModal(updateAvatarModalProps)}
                        icon={{
                            variant: 'edit',
                            size: 's'
                        }}
                    >{t('Изменить фотографию')}</Button>
                </div>
            </div>

            <div className={common.top_l}>
                <Typography>{t('Имя и фамилия')}</Typography>

                <div className={clsx(common.top_s)}>
                    <FieldInput
                        field={fields.fisrtName}
                        classNames={{
                            input: common.input
                        }}
                        theme='large'
                        placeholder='Введите ваше имя'
                    />
                    <FieldInput
                        field={fields.lastName}
                        classNames={{
                            body: common.top_xs,
                            input: common.input
                        }}
                        theme='large'
                        placeholder='Введите вашу фамилию'
                    />
                </div>
            </div>

            <div className={clsx(s.block_gender, common.top_l)}>
                <Checkbox
                    isChoose={Boolean(formsValue.genderMan)}
                    onChange={setGenderMan}
                >
                    {t('Мужчина')}
                    {/* <Typography font='additional' color='acsent_dark'>{}</Typography> */}
                </Checkbox>
                <Checkbox
                    isChoose={Boolean(formsValue.genderWoman)}
                    onChange={setGenderWoman}
                >
                    {t('Женщина')}
                    {/* <Typography font='additional' color='acsent'>{t('Женщина')}</Typography> */}
                </Checkbox>
                <Checkbox
                    isChoose={Boolean(formsValue.genderUknown)}
                    onChange={setGenderUknown}
                >
                    {t('Не указывать')}
                    {/* <Typography font='additional' color='acsent'>{t('Не указывать')}</Typography> */}
                </Checkbox>
            </div>

            <div className={common.top_l}>
                <Typography>{t('Местоположение (для ивентов)')}</Typography>

                <div className={clsx(common.top_s)}>
                    <FieldInput
                        field={fields.placeCountry}
                        classNames={{
                            input: common.input
                        }}
                        theme='large'
                        placeholder='Страна проживания'
                    />
                    <FieldInput
                        field={fields.placeCity}
                        classNames={{
                            body: common.top_xs,
                            input: common.input
                        }}
                        theme='large'
                        placeholder='Город, населенный пункт'
                    />
                </div>
            </div>
            
            <div className={common.top_l}>
                <Typography font='additional'>{t('Города, в которые Вы могли бы приехать:')}</Typography>

                <ButtonOptions
                    {...optionsCities}
                    classNames={{
                        container: common.top_xs
                    }}
                />
            </div>

            <Button
                onClick={() => onSubmit()}
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