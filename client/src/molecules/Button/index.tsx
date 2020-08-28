import React from 'react';
import SearchButton from 'molecules/Button/button.search';
import CookieButton from 'molecules/Button/button.cookie';
import MenuButton from 'molecules/Button/button.menu';
import { TransparentButton } from 'molecules/Button/button.transparent';
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
    menu: <MenuButton {...props} />,
    transparent: <TransparentButton {...props} />,
  };
  return types[type];
};
