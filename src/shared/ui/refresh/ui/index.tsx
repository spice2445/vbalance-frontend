import { Query, JsonApiRequestError } from '@farfetched/core';
import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { Button } from 'shared/ui/button';
import { Icon } from 'shared/ui/icon';

import s from './style.module.scss';

interface RefreshProps {
    theme: 'icon' | 'button',
    query: Query<void, any, JsonApiRequestError, null>
}

export const Refresh = ({
    theme,
    query
}:RefreshProps) => {
    const [status, start] = useUnit([query.$status, query.start]) ;
    const isRefresing = status === 'pending';

    if(theme === 'icon') (
        <Icon
            onClick={start}
            className={clsx({[s.pending]: isRefresing})}
            variant='refresh'
            size='m'
            fill='green'
        />
    );

    return(
        <Button
            onClick={start}
            className={clsx(s.btn, {[s.pending_btn]: isRefresing})}
            theme='mini_icon'
            icon={{ variant: 'refresh', size: 'xs' }}
        /> 
    );
};