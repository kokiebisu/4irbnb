import {
  SearchbarButtonTemplate,
  SearchbarButtonTemplateProps,
} from './template';

export type SearchbarButtonProps = SearchbarButtonTemplateProps;

export const SearchbarButton = (props: SearchbarButtonProps): JSX.Element => {
  return <SearchbarButtonTemplate {...props} />;
};
