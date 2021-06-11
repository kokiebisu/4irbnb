import { SearchButtonTemplate, SearchButtonTemplateProps } from './template';

export interface SearchButtonProps extends SearchButtonTemplateProps {}

export const SearchButton: React.FC<SearchButtonProps> = ({ ...props }) => {
  return <SearchButtonTemplate {...props} />;
};
