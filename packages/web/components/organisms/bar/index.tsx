/** components */
import { PaginateBar } from '@bar/bar-paginate';
import { ProgressBar } from '@bar/bar.progress';
import { SearchBar } from '@bar/bar.search';
import { CovidBar } from '@bar/bar.covid';
import { CreateBar } from '@bar/bar.create';
import { MenuBar } from '@bar/bar.menu';
import { AvailabilityBar } from '@bar/bar.availability';
import { FiltersBar } from '@bar/bar.filters';

export const $Bar = {
  AVAILABILITY: 'availability',
  PAGINATE: 'paginate',
  COVID: 'covid',
  PROGRESS: 'progress',
  SEARCH: 'search',
  CREATE: 'create',
  MENU: 'menu',
  FILTERS: 'filters',
};

export interface BarProps {
  variant: string;
  [property: string]: any;
}

/**
 * Bundles the bar components
 * @param {string} type - Specifies the type of bar component
 */
export const Bar: React.FC<BarProps> = ({ variant = 'paginate', ...props }) => {
  const variants = {
    availability: <AvailabilityBar {...props} />,
    paginate: <PaginateBar {...props} />,
    covid: <CovidBar {...props} />,
    progress: <ProgressBar {...props} />,
    search: <SearchBar {...props} />,
    create: <CreateBar {...props} />,
    menu: <MenuBar {...props} />,
    filters: <FiltersBar {...props} />,
  };
  return <div data-testid={`${variant}-bar`}>{variants[variant]}</div>;
};
