import { PaginateBarTemplate } from './template';

export const PaginateBar = (props) => {
  return <PaginateBarTemplate {...props} />;
};

export const paginate = (props) => {
  return {
    paginate: {
      component: <PaginateBar {...props} />,
    },
  };
};
