import { FilterButtonTemplate } from './template';

export interface FilterButtonProps {}

export const FilterButton: React.FC<FilterButtonProps> = (props) => {
  return <FilterButtonTemplate {...props} />;
};
