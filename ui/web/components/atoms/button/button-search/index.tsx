import { SearchButtonTemplate, SearchButtonTemplateProps } from './template';

export interface SearchButtonProps extends SearchButtonTemplateProps {}

const SearchButton: React.FC<SearchButtonProps> = ({ ...props }) => {
  return <SearchButtonTemplate {...props} />;
};

export const search = (props) => {
  return {
    search: {
      component: <SearchButton {...props} />,
    },
  };
};
