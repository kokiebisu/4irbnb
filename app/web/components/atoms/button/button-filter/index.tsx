import { FilterButtonTemplate, FilterButtonTemplateProps } from './template';

export interface FilterButtonProps extends FilterButtonTemplateProps {}

export const FilterButton: React.FC<FilterButtonProps> = (props) => {
  return <FilterButtonTemplate {...props} />;
};
