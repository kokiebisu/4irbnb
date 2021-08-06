import { BarProps } from "@bar";
import { AvailabilityBar } from "@bar/bar-availability";
import { CovidBar } from "@bar/bar-covid";
import { CreateBar } from "@bar/bar-create";
import { FiltersBar } from "@bar/bar-filters";
import { MenuBar } from "@bar/bar-menu";
import { PaginateBar } from "@bar/bar-paginate";
import { ProgressBar } from "@bar/bar-progress";
import { SearchBar } from "@bar/bar-search";

export const factory = (props: BarProps) => {
  switch (props.variant) {
    case "availability":
      return <AvailabilityBar {...props} />;
    case "create":
      return <CreateBar {...props} />;
    case "covid":
      return <CovidBar {...props} />;
    case "filters":
      return <FiltersBar {...props} />;
    case "menu":
      return <MenuBar {...props} />;
    case "paginate":
      return <PaginateBar {...props} />;
    case "progress":
      return <ProgressBar />;
    case "search":
      return <SearchBar {...props} />;
    default:
      throw new Error("[Bar Error] Invalid variant provided");
  }
};
