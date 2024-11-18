import { StatusUser } from 'shared/types/user-statuses';

export const eligibilityStatus = (statusUser: StatusUser) => {
    switch(statusUser) {
        case StatusUser.COUNSELOR:
            return StatusUser.COUNSELOR;
    }
};