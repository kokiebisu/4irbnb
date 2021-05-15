import React from 'react';
import {
  SearchbarInputTemplate,
  SearchbarInputTemplateProps,
} from './template';

export interface SearchbarInputProps extends SearchbarInputTemplateProps {}

export const SearchbarInput: React.FC<SearchbarInputProps> = (props) => {
  return <SearchbarInputTemplate {...props} />;
};

export const searchbar = (props) => {
  return {
    searchbar: {
      component: <SearchbarInput {...props} />,
    },
  };
};
