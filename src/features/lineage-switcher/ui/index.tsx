import { EventCallable } from 'effector';
import { useUnit } from 'effector-react';
import { LoaddedData } from 'shared/ui/loaddedData';

import { 
  $choosedUsers, 
  $lineage, 
  loaddedDataLineage 
} from '../model';

import { LineageSlider } from './components';

export const LineageSwitcher = () => {
  const [lineage, choosedUsers] = useUnit([$lineage, $choosedUsers]);

  if (lineage) {
    return lineage.map((users, index) => {
      return (
        <LineageSlider
          key={users?.data[index]?.id}
          users={users.data}
          indexParent={index}
          nameParent={lineage[index-1]?.data[choosedUsers[index-1]]?.name ?? 'Anonym'}
          choosedUser={choosedUsers[index]}
          statisticInvited={{
            all: users.count,
            direct: users.withHierarchyCount
          }}
          isLoading={false}
        />
      );
    });
  }

  return (
    <>
      <LoaddedData
        loaddedData={loaddedDataLineage as unknown as EventCallable<void>}
      />

      <LineageSlider
        isLoading
      />
    </>
  );
};
