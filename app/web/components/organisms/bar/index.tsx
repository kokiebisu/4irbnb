import { factory } from "./util/factory";
import { AvailabilityBarProps } from "./bar-availability";
import { CovidBarProps } from "./bar-covid";
import { CreateBarProps } from "./bar-create";
import { FiltersBarProps } from "./bar-filters";
import { MenuBarProps } from "./bar-menu";
import { PaginateBarProps } from "./bar-paginate";
import { ProgressBarProps } from "./bar-progress";
import { SearchBarProps } from "./bar-search";

export type BarProps =
  | ({ variant: "availability" } & AvailabilityBarProps)
  | ({ variant: "covid" } & CovidBarProps)
  | ({ variant: "create" } & CreateBarProps)
  | ({ variant: "filters" } & FiltersBarProps)
  | ({ variant: "menu" } & MenuBarProps)
  | ({ variant: "paginate" } & PaginateBarProps)
  | ({ variant: "progress" } & ProgressBarProps)
  | ({ variant: "search" } & SearchBarProps);

/**
 * Bundles the bar components
 * @param {string} variant - Specifies the variant of bar component
 */
export const Bar = ({ ...props }: BarProps): JSX.Element => factory(props);
