import React from 'react';
import { motion } from 'framer-motion';

/**
 * Styles
 */
import space from '../../../styles/space.module.scss';
import shape from '../../../styles/shape.module.scss';
import color from '../../../styles/color.module.scss';
import font from '../../../styles/font.module.scss';
import button from './button.module.scss';

/**
 * Renders the filter button
 * @param {string} name - Name of the filter button
 */
export const FilterButton = ({ name = 'Cancellation flexibility' }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      whileHover={{ scale: 1.02 }}
      className={[
        button['hover__filter'],
        space['p-v--8'],
        space['p-h--14'],
        shape['br--20'],
        color['bg--transparent'],
      ].join(' ')}>
      <p className={[font['size--15']].join(' ')}>{name}</p>
    </motion.button>
  );
};
