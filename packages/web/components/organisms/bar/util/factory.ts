import { availability } from '@bar/bar-availability';
import { paginate } from '@bar/bar-paginate';

export const barFactory = (props) => {
  return {
    ...availability(props),
    ...paginate(props),
  };
};
