import { compositionIndex } from 'shared/api/queries/index/structure';
import { formatter} from 'shared/lib/formatter';
import { Image } from 'shared/ui/image';
import { Typography } from 'shared/ui/typography';

import s from './style.module.scss';

export type CompositionTokenProps = Partial<compositionIndex> & {
    isLoading: boolean;
}

export const CompositionToken = ({
    isLoading,
    icon,
    title,
    percent
}: CompositionTokenProps) => {
    return (
        <div className={s.inside_token}>
            <div className={s.inside_token_icon}>
                <Image
                    isLoading={isLoading}
                    src={icon}
                />
            </div>

            <Typography
                isLoading={isLoading}
                color='main'
                font='additional_bold'
            >
                {title}
                <Typography
                    color='acsent'
                    font='additional_bold'
                >
                    {`(${formatter.number.defaultN(percent ?? 0)}%)`}
                </Typography>
            </Typography>
        </div>   
    );
};