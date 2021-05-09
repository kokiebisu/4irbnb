import { FilterButtonTemplate } from './template';

export interface FilterButtonProps {}

const FilterButton: React.FC<FilterButtonProps> = (props) => {
  return <FilterButtonTemplate {...props} />;
};

export const filter = (props) => {
  return {
    filter: {
      component: <FilterButton {...props} />,
    },
  };
};
