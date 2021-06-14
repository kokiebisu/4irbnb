import { SearchButtonTemplate, SearchButtonTemplateProps } from './template';

export type SearchButtonProps = SearchButtonTemplateProps;

export const SearchButton = ({ ...props }: SearchButtonProps): JSX.Element => {
  return <SearchButtonTemplate {...props} />;
};
