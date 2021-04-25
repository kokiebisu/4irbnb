import { PaginateBarTemplate } from './template';

export const PaginateBar = (props) => {
  return (
    <div data-testid="bar-paginate--organism">
      <PaginateBarTemplate {...props} />;
    </div>
  );
};

export const paginate = (props) => {
  return {
    paginate: {
      component: <PaginateBar {...props} />,
    },
  };
};
