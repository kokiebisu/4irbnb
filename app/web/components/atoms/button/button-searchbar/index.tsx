import { SearchbarButtonTemplate } from './template';

export interface SearchbarButtonProps {}

export const SearchbarButton: React.FC<SearchbarButtonProps> = (props) => {
  return <SearchbarButtonTemplate {...props} />;
};
