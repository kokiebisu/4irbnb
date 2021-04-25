import { useFiltersBar } from './logic';
import { FiltersBarTemplate } from './template';

const FiltersBar = (props) => {
  const data = useFiltersBar();
  return (
    <div data-testid="bar-filters--organism">
      <FiltersBarTemplate {...props} {...data} />
    </div>
  );
};

export const filters = (props) => {
  return {
    filters: {
      component: <FiltersBar {...props} />,
    },
  };
};
