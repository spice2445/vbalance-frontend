import { string, object, array, boolean} from 'yup';

export const scheme = object({
    avatar: string(),
    fisrtName: string(),
    lastName: string(),
    genderMan: boolean(),
    genderWoman: boolean(),
    genderUknown: boolean(),
    placeCountry: string(),
    placeCity: string(),
    allowedCities: array(string())
});