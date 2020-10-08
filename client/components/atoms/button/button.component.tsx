import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LoginButton } from './button.login';

export interface ButtonProps {
  onPress: () => void;
  children: React.ReactNode;
  to?: string;
  extendsTo?: string;
  tap?: {
    scale: number;
  };
  type: string;
  platform?: string;
  icon?: JSX.Element;
}

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
  };

  if (to) {
    return (
      <div className={extendsTo} data-testid='button'>
        <Link href={to} passHref>
          {children}
        </Link>
      </div>
    );
  }

  if (type) {
    return types[type];
  }

  return (
    <motion.button
      whileTap={tap}
      data-testid='button'
      className={extendsTo}
      onClick={onPress}>
      {children}
    </motion.button>
  );
};
