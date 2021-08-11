import { useFiltersBar } from "./logic";
import { FiltersBarTemplate, FiltersBarTemplateProps } from "./template";

export type FiltersBarProps = FiltersBarTemplateProps;

export const FiltersBar = (props: FiltersBarProps): JSX.Element => {
  const data = useFiltersBar();
  return (
    <div data-testid="bar-filters--organism">
      <FiltersBarTemplate {...props} {...data} />
    </div>
  );
};
