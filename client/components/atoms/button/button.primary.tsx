import React from 'react';
import { motion } from 'framer-motion';

/**
 * Styles
 */
import color from '../../../styles/color.module.scss';
import shape from '../../../styles/shape.module.scss';
import layout from '../../../styles/layout.module.scss';
import font from '../../../styles/font.module.scss';
import space from '../../../styles/space.module.scss';

/**
 * Props
 */
import { PrimaryButtonProps } from './props';

/**
 * Renders the primary button component
 * @param {string} title - Title of the button
 * @param {function} onPress - Action being taken when the button is clicked
 * @param {string} size - Size of the button
 * @param {boolean} spread - Whether if the button takes the full width of the parent
 */
export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title = 'Button',
  onPress,
  size = 'md',
  spread = false,
}) => {
  const components = {
    sm: (
      <motion.button
        whileTap={{ scale: 0.98 }}
        data-testid='button'
        className={`${[
          color['bg--primary'],
          color['c--white__0'],
          shape['w--full'],
          font['size--14'],
          space['p-v--8'],
          space['p-h--14'],
          shape['br--8'],
          font['weight--300'],
        ].join(' ')} ${spread ? layout['block'] : layout['inline-block']}`}
        onClick={onPress}>
        <h4>{title}</h4>
      </motion.button>
    ),
    md: (
      <motion.button
        whileTap={{ scale: 0.98 }}
        data-testid='button'
        className={`${[
          color['bg--primary'],
          color['c--white__0'],
          shape['w--full'],
          font['size--16'],
          space['p-v--14'],
          space['p-h--20'],
          shape['br--8'],
          font['weight--300'],
        ].join(' ')} ${spread ? layout['block'] : layout['inline-block']}`}
        onClick={onPress}>
        {title}
      </motion.button>
    ),
    lg: (
      <motion.button
        whileTap={{ scale: 0.98 }}
        data-testid='button'
        className={`${[
          color['bg--primary'],
          color['c--white__0'],
          shape['w--full'],
          layout['block'],
          font['size--16'],
          space['p-v--14'],
          space['p-h--20'],
          shape['br--8'],
          font['weight--300'],
        ].join(' ')} ${spread ? layout['block'] : layout['inline-block']}`}
        onClick={onPress}>
        {title}
      </motion.button>
    ),
  };
  return components[size];
};
