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
