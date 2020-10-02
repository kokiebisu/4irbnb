import React from 'react';
import Link from 'next/link';
import module from './button.module.scss';

interface ButtonProps {
  onPress: () => void;
  children: React.ReactNode;
  to?: string;
  extendTo?: string;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  children,
  to,
  extendTo = '',
}) => {
  if (to) {
    return (
      <Link href={to} passHref>
        {children}
      </Link>
    );
  } else {
    return (
      <button className={module[extendTo]} onClick={onPress}>
        {children}
      </button>
    );
  }
};
