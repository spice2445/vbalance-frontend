import { coursesType } from 'entities/academy';

import { bannersMediaI } from '../config';

import { AcademyMastering } from './AcademyMastering';
import { BasicEducation } from './BasicEducation';
import { BuisnesWithVbalance } from './BuisnesWithVbalance';
import { CurrencyLife } from './CurrencyLife';
import { HighSchoolMLM } from './HighSchoolMLM';
import { InvestmentsWithVbalance } from './InvestmentsWithVbalance';
import { MasterMind } from './MasterMind';
import { MasterOfHisLife } from './MasterOfHisLife';
import { ParentsAreSacred } from './ParentsAreSacred';
import { RoadToBigMoney } from './RoadToBigMoney';
import { SchoolSensoryLanguage } from './SchoolSensoryLanguage';
import { TestOfTheFeasibility } from './TestOfTheFeasibility';
import { TokenomicsVbalance } from './TokenomicsVbalance';
import { WorkingWithPersonalAccount } from './WorkingWithPersonalAccount';

export const banners: Record<coursesType,bannersMediaI>  = {
    AcademyMastering,
    BasicEducation,
    BuisnesWithVbalance,
    CurrencyLife,
    HighSchoolMLM,
    InvestmentsWithVbalance,
    MasterMind,
    MasterOfHisLife,
    ParentsAreSacred,
    SchoolSensoryLanguage,
    TestOfTheFeasibility,
    TokenomicsVbalance,
    WorkingWithPersonalAccount,
    RoadToBigMoney
};