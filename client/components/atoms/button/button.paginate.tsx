import React from 'react';
import { motion } from 'framer-motion';

/**
 * Styles
 */
import color from '../../../styles/color.module.scss';
import space from '../../../styles/space.module.scss';
import shape from '../../../styles/shape.module.scss';
import button from './button.module.scss';

/**
 * Vectors
 */
import { ChevronLeft, ChevronRight } from '../../../public/svg/regular';

/**
 * Props
 */
import { PaginateButtonProps } from './props';

/**
 * Renders the paginate button component
 * @param {string} direction - The direction in which the arrow points
 * @param {function} onPress - The action being taken when the button is clicked
 * @param {boolean} disable - Whether if the button is disabled or not
 */
export const PaginateButton: React.FC<PaginateButtonProps> = ({
  direction = 'left',
  onPress,
  disable = false,
}) => {
  return (
    <>
      {direction === 'left' ? (
        <motion.button
          whileHover={{ scale: disable ? 1 : 1.04 }}
          whileTap={{ scale: disable ? 1 : 0.98 }}
          data-testid='button'
          disabled={disable}
          style={{ cursor: disable ? 'default' : 'pointer' }}
          className={[
            button['bg__paginate'],
            space['p--8'],
            color['b--white__2'],
            shape['br--circle'],
          ].join(' ')}
          onClick={onPress}>
          <ChevronLeft
            width={10}
            stroke={`${disable ? 'lightgray' : 'black'}`}
            strokeWidth={5}
          />
        </motion.button>
      ) : (
        <motion.button
          whileHover={!disable && { scale: 1.04 }}
          whileTap={!disable && { scale: 0.98 }}
          data-testid='button'
          style={{ cursor: disable ? 'default' : 'pointer' }}
          disabled={disable}
          className={[
            button['bg__paginate'],
            color['b--white__2'],
            space['p--8'],
            shape['br--circle'],
          ].join(' ')}
          onClick={onPress}>
          <ChevronRight
            width={10}
            stroke={`${disable ? 'lightgray' : 'black'}`}
            strokeWidth={5}
          />
        </motion.button>
      )}
    </>
  );
};
