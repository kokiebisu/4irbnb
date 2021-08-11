import { FilterButtonTemplate, FilterButtonTemplateProps } from "./template";

export type FilterButtonProps = FilterButtonTemplateProps;

export const FilterButton = (props: FilterButtonProps): JSX.Element => {
  return <FilterButtonTemplate {...props} />;
};
