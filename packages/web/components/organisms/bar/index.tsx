import { AvailabilityBarTemplateProps } from './bar-availability/template';
import { CovidBarTemplateProps } from './bar-covid/template';
import { CreateBarTemplateProps } from './bar-create/template';
import { FiltersBarTemplateProps } from './bar-filters/template';
import { MenuBarTemplateProps } from './bar-menu/template';
import { PaginateBarTemplateProps } from './bar-paginate/template';
import { ProgressBarTemplateProps } from './bar-progress/template';
import { SearchBarTemplateProps } from './bar-search/template';
import { barFactory } from './util/factory';

export interface BarProps
  extends AvailabilityBarTemplateProps,
    CovidBarTemplateProps,
    CreateBarTemplateProps,
    FiltersBarTemplateProps,
    MenuBarTemplateProps,
    PaginateBarTemplateProps,
    ProgressBarTemplateProps,
    SearchBarTemplateProps {
  variant:
    | 'availability'
    | 'paginate'
    | 'covid'
    | 'progress'
    | 'search'
    | 'create'
    | 'menu'
    | 'filters';
}

/**
 * Bundles the bar components
 * @param {string} variant - Specifies the variant of bar component
 */
export const Bar: React.FC<BarProps> = ({ variant = 'paginate', ...props }) => {
  const variants = barFactory(props);
  return variants[variant].component;
};
