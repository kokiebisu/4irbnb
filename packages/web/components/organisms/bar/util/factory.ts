import { availability } from '@bar/bar-availability';
import { covid } from '@bar/bar-covid';
import { create } from '@bar/bar-create';
import { filters } from '@bar/bar-filters';
import { paginate } from '@bar/bar-paginate';

export const barFactory = (props) => {
  return {
    ...availability(props),
    ...covid(props),
    ...create(props),
    ...filters(props),
    ...paginate(props),
  };
};
