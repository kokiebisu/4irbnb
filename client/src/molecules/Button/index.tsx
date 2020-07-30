import React from 'react';

// atoms
import { Button } from 'atoms';

// blocks
import SearchButton from 'molecules/Button/button.search';
import CookieButton from 'molecules/Button/button.cookie';
import GlobeButton from 'molecules/Button/button.globe';

export type ButtonProps = {
  type?: string;
  onPress: () => void;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  inverse?: boolean;
  name?: string;
};

interface mapProps {
  [key: string]: JSX.Element;
}

/**
 * Use a button when you want to perform specific actions
 **/
export const CustomButton = ({ type, ...props }: ButtonProps) => {
  if (!type) {
    return <Button {...props} />;
  }
  const types: mapProps = {
    search: <SearchButton {...props} />,
    cookie: <CookieButton {...props} />,
    globe: <GlobeButton {...props} />,
  };
  return types[type];
};
