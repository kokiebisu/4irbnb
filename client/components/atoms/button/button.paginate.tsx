import React from 'react';
import { motion } from 'framer-motion';

import color from '../../../styles/color.module.scss';
import space from '../../../styles/space.module.scss';
import shape from '../../../styles/shape.module.scss';
import button from './button.module.scss';

import { ChevronLeft, ChevronRight } from '../../../public/svg/regular';
import { PaginateButtonProps } from './props';

export const PaginateButton: React.FC<PaginateButtonProps> = ({
  direction = 'left',
  onPress,
}) => {
  return (
    <>
      {direction === 'left' ? (
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          data-testid='button'
          className={[
            button['bg__paginate'],
            space['p--8'],
            color['b--white__2'],
            shape['br--circle'],
          ].join(' ')}
          onClick={onPress}>
          <ChevronLeft width={10} stroke='black' strokeWidth={5} />
        </motion.button>
      ) : (
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          data-testid='button'
          className={[
            button['bg__paginate'],
            color['b--white__2'],
            space['p--8'],
            shape['br--circle'],
          ].join(' ')}
          onClick={onPress}>
          <ChevronRight width={10} stroke='black' strokeWidth={5} />
        </motion.button>
      )}
    </>
  );
};
