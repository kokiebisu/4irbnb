import React from 'react';

// block
import SearchBarLarge from './searchbar.large';
import SearchBarSmall from './searchbar.small';

type SearchBarProps = {
  type: string;
  onPress: () => void;
};

interface typeProps {
  [key: string]: JSX.Element;
}

export const SearchBar = ({ type, ...props }: SearchBarProps) => {
  const types: typeProps = {
    mobile: <SearchBarLarge {...props} />,
    normal: <SearchBarSmall {...props} />,
  };
  return types[type];
};
