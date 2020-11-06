import React from 'react';
import { motion } from 'framer-motion';
import { PrivacyButtonProps } from './props';
import { useToggleDispatch } from '../../../context/toggle';

import font from '../../../styles/font.module.scss';
import space from '../../../styles/space.module.scss';
import color from '../../../styles/color.module.scss';
import shape from '../../../styles/shape.module.scss';

export const PrivacyButton: React.FC<PrivacyButtonProps> = ({
  tap,
  title = 'Button',
  inverse = false,
}) => {
  const toggleDispatch = useToggleDispatch();

  const handlePress = () => {
    if (title === 'Save') {
      /**
       * Save the cookie
       */
      return toggleDispatch({ type: 'toggle_privacy' });
    }
    /**
     * Open Cookie Preferences
     */
    return toggleDispatch({ type: 'toggle_privacy' });
  };
  return (
    <motion.button
      whileTap={tap}
      data-testid='button'
      className={`${[
        font['no-wrap'],
        space['p-v--13'],
        space['p-h--18'],
        font['weight--500'],
        shape['br--8'],
        shape['w--full'],
        shape['min-w--150'],
        font['size--15'],
      ].join(' ')} ${
        inverse
          ? [color['bg--gray__4'], color['b--transparent']].join(' ')
          : [color['bg--transparent'], color['b--black']].join(' ')
      }`}
      onClick={handlePress}>
      <p
        className={
          inverse
            ? [color['c--white__0']].join(' ')
            : [color['c--black']].join(' ')
        }>
        {title}
      </p>
    </motion.button>
  );
};
