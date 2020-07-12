import React from 'react';

// block
import SearchBarLarge from './searchbar.large';
import SearchBarSmall from './searchbar.small';

type SearchButtonProps = {
  type: string;
};

interface typeProps {
  [key: string]: JSX.Element;
}

export const SearchButton = ({ type, ...props }: SearchButtonProps) => {
  const types: typeProps = {
    mobile: <SearchBarLarge {...props} />,
    normal: <SearchBarSmall {...props} />,
  };
  return types[type];
};
