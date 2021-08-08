import { useSearchbar } from "./logic";
import { SearchbarPrototypeTemplate } from "./template";

export interface SearchbarPrototypeProps {
  expanded?: boolean;
  setExpanded?: any;
  type?: any;
  setCategory?: any;
  transparent?: boolean;
}

export const SearchbarPrototype = ({
  type,
  setCategory,
  transparent = false,
  expanded,
  setExpanded,
}: SearchbarPrototypeProps): JSX.Element => {
  const data = useSearchbar();

  return (
    <SearchbarPrototypeTemplate
      type={type}
      setCategory={setCategory}
      transparent={transparent}
      expanded={expanded}
      setExpanded={setExpanded}
      {...data}
    />
  );
};
