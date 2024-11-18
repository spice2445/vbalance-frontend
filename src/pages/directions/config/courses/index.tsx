import { coursesType } from 'entities/academy';
import { ReactNode } from 'react';
import { 
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
} from 'widgets/directions-banners';

type coursesBanners = Record<coursesType, ReactNode>;

export const coursesBanner: coursesBanners = {
    ParentsAreSacred: <ParentsAreSacred />,
    MasterOfHisLife: <MasterOfHisLife />,
    TokenomicsVbalance: <TokenomicsVbalance />,
    BuisnesWithVbalance: <BuisnesWithVbalance />,
    MasterMind: <MasterMind />,
    InvestmentsWithVbalance: <InvestmentsWithVbalance />,
    HighSchoolMLM: <HighSchoolMLM />,
    SchoolSensoryLanguage: <SchoolSensoryLanguage />,
    AcademyMastering: <AcademyMastering />,
    BasicEducation: <BasicEducation />,
    WorkingWithPersonalAccount: <WorkingWithPersonalAccount />,
    CurrencyLife: <CurrencyLife />,
    TestOfTheFeasibility: <TestOfTheFeasibility />,
    RoadToBigMoney: <RoadToBigMoney />
};