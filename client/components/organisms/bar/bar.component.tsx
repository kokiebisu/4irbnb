import React from "react";

/** components */
import { PaginateBar } from "@bar/bar.paginate";
import { ProgressBar } from "@bar/bar.progress";
import { SearchbarBar } from "@bar/bar.searchbar";
import { CovidBar } from "@bar/bar.covid";
import { CreateBar } from "@bar/bar.create";
import { MenuBar } from "@bar/bar.menu";

export interface BarProps {
  variant: string;
  [property: string]: any;
}

/**
 * Bundles the bar components
 * @param {string} type - Specifies the type of bar component
 */
export const Bar: React.FC<BarProps> = ({ variant = "paginate", ...props }) => {
  const variants = {
    paginate: <PaginateBar {...props} />,
    covid: <CovidBar {...props} />,
    progress: <ProgressBar {...props} />,
    searchbar: <SearchbarBar {...props} />,
    create: <CreateBar {...props} />,
    menu: <MenuBar {...props} />,
  };
  return <div data-testid={`${variant}-bar`}>{variants[variant]}</div>;
};
