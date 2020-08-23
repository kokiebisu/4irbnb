import React from 'react';
import SearchButton from 'molecules/Button/button.search';
import CookieButton from 'molecules/Button/button.cookie';
import GlobeButton from 'molecules/Button/button.globe';
import MenuButton from 'molecules/Button/button.menu';
import { ElementProps } from 'atoms/Button';

export interface CustomProps extends ElementProps {
  name?: string;
}

interface mapProps {
  [key: string]: JSX.Element;
}

interface typeProps {
  type: string;
}

interface Props extends CustomProps, typeProps {}

export const CustomButton = ({ type, ...props }: Props) => {
  const types: mapProps = {
    search: <SearchButton {...props} />,
    cookie: <CookieButton {...props} />,
    globe: <GlobeButton {...props} />,
    menu: <MenuButton {...props} />,
  };
  return types[type];
};
