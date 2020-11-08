import React from 'react';
import { motion } from 'framer-motion';

import color from '../../../styles/color.module.scss';
import space from '../../../styles/space.module.scss';
import shape from '../../../styles/shape.module.scss';

import { ChevronLeft, ChevronRight } from '../../../public/svg/regular';
import { PaginateButtonProps } from './props';

export const PaginateButton: React.FC<PaginateButtonProps> = ({
  direction = 'left',
  tap = { scale: 0.98 },
  onPress,
}) => {
  return (
    <>
      {direction === 'left' ? (
        <motion.button
          whileTap={tap}
          data-testid='button'
          className={[
            color['b--white__2'],
            color['bg--white__0'],
            space['p--8'],
            shape['br--circle'],
          ].join(' ')}
          onClick={onPress}>
          <ChevronLeft width={10} stroke='black' strokeWidth={5} />
        </motion.button>
      ) : (
        <motion.button
          whileTap={tap}
          data-testid='button'
          className={[
            color['b--white__2'],
            color['bg--white__0'],
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
