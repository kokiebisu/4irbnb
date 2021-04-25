import { paginate } from '@bar/bar-paginate';

export const barFactory = (props) => {
  return {
    ...paginate(props),
  };
};
