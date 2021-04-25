import { barFactory } from './util/factory';

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
  const variants = barFactory(props);
  return variants[variant].component;
};
