import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export interface ButtonProps {
  onPress: () => void;
  children: React.ReactNode;
  to?: string;
  extendsTo?: string;
  tap?: {
    scale: number;
  };
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  children = <p>Primary</p>,
  to,
  extendsTo,
  tap,
}) => {
  if (to) {
    return (
      <div className={extendsTo} data-testid='button'>
        <Link href={to} passHref>
          {children}
        </Link>
      </div>
    );
  } else {
    return (
      <motion.button
        whileTap={tap}
        data-testid='button'
        className={extendsTo}
        onClick={onPress}>
        {children}
      </motion.button>
    );
  }
};
