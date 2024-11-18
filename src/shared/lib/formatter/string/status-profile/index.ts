import { StatusUser, statusIdsI } from 'shared/types/user-statuses';

export const statusProfile = (statusId: statusIdsI) => {
    switch(statusId) {
        case 'base':
            return StatusUser.USER;
        case 'bronze':
            return StatusUser.COUNSELOR;
        case 'silver':
            return StatusUser.MENTOR;
        case 'gold':
            return StatusUser.MASTER;
        case 'platinum':
            return StatusUser.PARTNER;
        case 'founder1':
            return StatusUser.FOUNDER;
        case 'founder2':
            return StatusUser.FOUNDER_II;
        case 'founder3':
            return StatusUser.FOUNDER_III;
        default: 
            return StatusUser.FOUNDER_IV;
    }
};