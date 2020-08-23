import React from 'react';
import SearchButton from 'molecules/Button/button.search';
import CookieButton from 'molecules/Button/button.cookie';
import GlobeButton from 'molecules/Button/button.globe';
import MenuButton from 'molecules/Button/button.menu';
import { ElementProps } from 'atoms/Button';

interface mapProps {
  [key: string]: JSX.Element;
}

interface CustomProps extends ElementProps {
  type: string;
  name?: string;
}

/**
 * Use a button when you want to perform specific actions
 **/
export const CustomButton = ({ type, ...props }: CustomProps) => {
  const types: mapProps = {
    search: <SearchButton {...props} />,
    cookie: <CookieButton {...props} />,
    globe: <GlobeButton {...props} />,
    menu: <MenuButton {...props} />,
  };
  return types[type];
};
