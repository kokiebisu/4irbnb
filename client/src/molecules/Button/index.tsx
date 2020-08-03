import React from 'react';

// atoms
import { Button } from 'atoms';

// blocks
import SearchButton from 'molecules/Button/button.search';
import CookieButton from 'molecules/Button/button.cookie';
import GlobeButton from 'molecules/Button/button.globe';
import MenuButton from 'molecules/Button/button.menu';

import { Props } from 'molecules/Button/props';

interface mapProps {
  [key: string]: JSX.Element;
}

/**
 * Use a button when you want to perform specific actions
 **/
export const CustomButton = ({ type, ...props }: Props) => {
  if (!type) {
    return <Button {...props} />;
  }
  const types: mapProps = {
    search: <SearchButton {...props} />,
    cookie: <CookieButton {...props} />,
    globe: <GlobeButton {...props} />,
    menu: <MenuButton {...props} />,
  };
  return types[type];
};

export type CustomProps = Props;
