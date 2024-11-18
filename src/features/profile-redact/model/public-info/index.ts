import { invoke } from '@withease/factories';
import { combine, createEffect, createEvent, sample } from 'effector';
import { api } from 'shared/api';
import { createButtonOptions } from 'shared/lib/factories';
import { createForm } from 'shared/lib/form';

import { publicInfoScheme } from '../../config';

export const optionsCities = invoke(createButtonOptions);

interface formPublicInfo {
    avatar?: string,
    fisrtName?: string,
    lastName?: string,
    genderMan?: boolean,
    genderWoman?: boolean,
    genderUknown?: boolean,
    placeCountry?: string,
    placeCity?: string,
    allowedCities?: (string | undefined)[]
}

const $initialValues = combine({ me: api.queries.user.me.$data, allowedCities: optionsCities.$options }, ({me, allowedCities}) => ({
    avatar: me.avatar,
    fisrtName: me.name,
    lastName: '',
    genderMan: false,
    genderWoman: false,
    genderUknown: true,
    placeCountry: '',
    placeCity: '',
    allowedCities: allowedCities.map((city) => city.text)
} as formPublicInfo));

const sendCodeFx = createEffect((form: formPublicInfo) => {
    console.log('sendCodeFx: ');
    console.log(form);
});

export const $$formPublicInfo = createForm<formPublicInfo>({
    schema: publicInfoScheme,
    initialValues: $initialValues,
    onSubmit: sendCodeFx
});

export const settedGenderMan = createEvent();
export const settedGenderWoman = createEvent();
export const settedGenderUknown = createEvent();

sample({
    // @ts-ignore
    clock: settedGenderMan,
    source: $$formPublicInfo.$values,
    fn: (values: formPublicInfo) => ({
        ...values,
        genderMan: true,
        genderWoman: false,
        genderUknown: false
    }),
    target: $$formPublicInfo.$values
});

sample({
    // @ts-ignore
    clock: settedGenderWoman,
    source: $$formPublicInfo.$values,
    fn: (values: formPublicInfo) => ({
        ...values,
        genderWoman: true,
        genderMan: false,
        genderUknown: false
    }),
    target: $$formPublicInfo.$values
});

sample({
    // @ts-ignore
    clock: settedGenderUknown,
    source: $$formPublicInfo.$values,
    fn: (values: formPublicInfo) => ({
        ...values,
        genderUknown: true,
        genderMan: false,
        genderWoman: false
    }),
    target: $$formPublicInfo.$values
});