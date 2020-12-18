import React from "react";

/** components */
import { PaginateBar } from "./bar.paginate";
import { ProgressBar } from "./bar.progress";
import { SearchbarBar } from "./bar.searchbar";
import { CovidBar } from "./bar.covid";
import { CreateBar } from "./bar.create";

/** props */
import { BarProps } from "./props";

/**
 * Bundles the bar components
 * @param {string} type - Specifies the type of bar component
 */
export const Bar: React.FC<BarProps> = ({ type, ...props }) => {
  const types = {
    paginate: <PaginateBar {...props} />,
    covid: <CovidBar {...props} />,
    progress: <ProgressBar {...props} />,
    searchbar: <SearchbarBar {...props} />,
    create: <CreateBar {...props} />,
  };
  return types[type];
};
