import { SearchBarTemplate } from './template';

const SearchBar = (props) => {
  return (
    <div data-testid="bar-search--organism">
      <SearchBarTemplate {...props} />
    </div>
  );
};

export const search = (props) => {
  return {
    search: {
      component: <SearchBar {...props} />,
    },
  };
};
