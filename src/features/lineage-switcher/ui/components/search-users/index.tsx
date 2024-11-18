import { useUnit } from 'effector-react';
import { Input } from 'shared/ui/input';

import { $search, fieldUpdatedSearch } from '../../../model';

import s from './style.module.scss';

export const SearchUsers = () => {
  const [search] = useUnit([$search]);
  const [onFieldUpdatedSearch] = useUnit([fieldUpdatedSearch]);

  return (
    <Input
      value={search}
      onValue={onFieldUpdatedSearch}
      theme='secondary'
      classNames={{
        input: s.search
      }}
      placeholder='Начните ввод'
      text={{
        color:'main',
        font: 'additional'
      }}
      icon={{
        variant: 'search',
        size: 'xs'
      }}
    />
  );
};
