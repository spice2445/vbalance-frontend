import { StatusUser } from 'shared/types/user-statuses';

export const getStatusCountPoolsArb = (statusUser: StatusUser) => {
  switch (statusUser) {
    case StatusUser.FOUNDER:
    case StatusUser.FOUNDER_II:
    case StatusUser.FOUNDER_III:
    case StatusUser.FOUNDER_IV:
      return StatusUser.PARTNER;
  }

  return statusUser;
};
