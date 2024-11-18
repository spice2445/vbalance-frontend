import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { Button } from 'shared/ui/button';

import { loginnedAs } from '../model';

import s from './style.module.scss';

interface LoginAsProps  {
    className?: string 
}

export const LoginAs = ({className}: LoginAsProps) => {
    const loginAs = useUnit(loginnedAs);

    return(
        <Button
            onClick={loginAs}
            className={clsx(s.loginAs, className)}
        >
            Login As
        </Button>
    );
};