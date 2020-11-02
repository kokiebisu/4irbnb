import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LoginButton } from './button.login';
import { ButtonProps } from './props';
import { GlobeButton } from './button.globe';
import { HostButton } from './button.host';
import { MenuButton } from './button.menu';

interface mapProps {
  [key: string]: JSX.Element;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  children = <p>Primary</p>,
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
  };

  // if (to) {
  //   return (
  //     <div className={extendsTo} data-testid='button'>
  //       <Link href={to} passHref>
  //         {children}
  //       </Link>
  //     </div>
  //   );
  // }

  return types[type];

  // return (
  //   <motion.button
  //     whileTap={tap}
  //     data-testid='button'
  //     className={extendsTo}
  //     onClick={onPress}>
  //     {children}
  //   </motion.button>
  // );
};
