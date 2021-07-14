import { SearchBarTemplate, SearchBarTemplateProps } from "./template";

export type SearchBarProps = SearchBarTemplateProps;

export const SearchBar = (props: SearchBarProps): JSX.Element => {
  return (
    <div data-testid="bar-search--organism">
      <SearchBarTemplate {...props} />
    </div>
  );
};
