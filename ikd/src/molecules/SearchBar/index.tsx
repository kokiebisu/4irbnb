import React from 'react';
import { SearchbarLarge } from 'molecules/SearchBar/searchbar.large';
import { SearchbarMedium } from 'molecules/SearchBar/searchbar.medium';
import { SearchbarSmall } from 'molecules/SearchBar/searchbar.small';

type SearchBarProps = {
  type: string;
  styles?: any;
};

interface mapProps {
  [key: string]: JSX.Element;
}

export const SearchBar: React.FC<SearchBarProps> = ({ type, ...props }) => {
  const types: mapProps = {
    sm: <SearchbarSmall {...props} />,
    md: <SearchbarMedium {...props} />,
    lg: <SearchbarLarge {...props} />,
  };
  return types[type];
};
