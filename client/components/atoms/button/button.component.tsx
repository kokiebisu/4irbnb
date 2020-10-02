import React from 'react';
import Link from 'next/link';
import button from './button.module.scss';

export interface ButtonProps {
  onPress: () => void;
  children: React.ReactNode;
  to?: string;
  extendsTo?: string;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  children,
  to,
  extendsTo,
}) => {
  if (to) {
    return (
      <div data-testid='button'>
        <Link href={to} passHref>
          {children}
        </Link>
      </div>
    );
  } else {
    return (
      <button data-testid='button' className={extendsTo} onClick={onPress}>
        {children}
      </button>
    );
  }
};
