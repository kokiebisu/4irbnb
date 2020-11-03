import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LoginButton } from './button.login';
import { ButtonProps } from './props';
import { GlobeButton } from './button.globe';
import { HostButton } from './button.host';
import { MenuButton } from './button.menu';
import { PrivacyButton } from './button.privacy';
import { BorderButton } from './button.border';
import { BannerButton } from './button.banner';
import { PlainButton } from './button.plain';
import { SearchbarButton } from './button.searchbar';
import { PaginateButton } from './button.paginate';
import { ExpandButton } from './button.expand';

interface mapProps {
  [key: string]: JSX.Element;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  to,
  extendsTo,
  tap,
  type,
  ...props
}) => {
  const types: mapProps = {
    login: <LoginButton {...props} />,
    globe: <GlobeButton {...props} />,
    host: <HostButton {...props} />,
    menu: <MenuButton {...props} />,
    privacy: <PrivacyButton {...props} />,
    border: <BorderButton {...props} />,
    banner: <BannerButton {...props} />,
    plain: <PlainButton {...props} />,
    searchbar: <SearchbarButton {...props} />,
    paginate: <PaginateButton {...props} />,
    expand: <ExpandButton {...props} />,
  };

  return types[type];
};
