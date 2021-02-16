/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import { PaginateBar } from "./web/bar.paginate";
import { ProgressBar } from "./web/bar.progress";
import { SearchBar } from "./web/bar.search";
import { CovidBar } from "./web/bar.covid";
import { CreateBar } from "./web/bar.create";
import { MenuBar } from "./web/bar.menu";
import { AvailabilityBar } from "./web/bar.availability";
import { FiltersBar } from "./web/bar.filters";

export const $Bar = {
  AVAILABILITY: "availability",
  PAGINATE: "paginate",
  COVID: "covid",
  PROGRESS: "progress",
  SEARCH: "search",
  CREATE: "create",
  MENU: "menu",
  FILTERS: "filters",
};

export interface BarProps {
  variant: string;
  [property: string]: any;
}

/**
 * Bundles the bar components
 * @param {string} type - Specifies the type of bar component
 */
export const Bar: React.FC<BarProps> = ({
  variant = $Bar.AVAILABILITY,
  ...props
}) => {
  const variants: { [variant: string]: JSX.Element } = {
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
