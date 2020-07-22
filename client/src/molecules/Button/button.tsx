import React from 'react';

// element
import { BaseButton } from '../../atoms/Button';

// block
import SearchButton from './button.search';
import CookieButton from './button.cookie';

export type ButtonProps = {
  type?: string;
  onPress: () => void;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  inverse?: boolean;
  name: string;
};

interface mapProps {
  [key: string]: JSX.Element;
}

/**
 * Use a button when you want to perform specific actions
 **/
export const Button = ({ type, ...props }: ButtonProps) => {
  if (!type) {
    return <BaseButton {...props} />;
  }
  const types: mapProps = {
    search: <SearchButton {...props} />,
    cookie: <CookieButton {...props} />,
  };
  return types[type];
};
