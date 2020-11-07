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
}) => {
  const handleLeftPagination = () => {
    alert('handle left pressed');
  };
  const handleRightPagination = () => {
    alert('handle right pressed');
  };
  return (
    <>
      {direction === 'left' ? (
        <motion.button
          whileTap={tap}
          data-testid='button'
          className={[
            color['b--white__2'],
            color['bg--transparent'],
            space['p--8'],
            shape['br--circle'],
          ].join(' ')}
          onClick={handleLeftPagination}>
          <ChevronLeft width={10} stroke='black' strokeWidth={5} />
        </motion.button>
      ) : (
        <motion.button
          whileTap={tap}
          data-testid='button'
          className={[
            color['b--white__2'],
            color['bg--transparent'],
            space['p--8'],
            shape['br--circle'],
          ].join(' ')}
          onClick={handleRightPagination}>
          <ChevronRight width={10} stroke='black' strokeWidth={5} />
        </motion.button>
      )}
    </>
  );
};
