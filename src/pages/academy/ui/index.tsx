import { BaseLayout } from 'layouts';

import { 
    CardStatus, 
    StatusExclusive,
    AnotherCourses,
    Schedule,
    ActualCourses
} from './components';
import s from './style.module.scss';

export const AcademyPage = () => {
    return(
        <BaseLayout>
            <div className={s.page}>
                <div className={s.line_fisrt}>
                    <CardStatus />
                    <StatusExclusive />
                    <AnotherCourses />
                </div>

                <div className={s.line_second}>
                    <Schedule />
                    <ActualCourses />
                </div>
            </div>
        </BaseLayout>
    );
};