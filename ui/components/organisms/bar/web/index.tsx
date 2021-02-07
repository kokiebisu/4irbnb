/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import { PaginateBar } from "./bar.paginate";
import { ProgressBar } from "./bar.progress";
import { SearchBar } from "./bar.search";
import { CovidBar } from "./bar.covid";
import { CreateBar } from "./bar.create";
import { MenuBar } from "./bar.menu";
import { AvailabilityBar } from "./bar.availability";
import { FiltersBar } from "./bar.filters";

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
