import React from 'react';
import { motion } from 'framer-motion';

import font from '../../../styles/font.module.scss';
import space from '../../../styles/space.module.scss';
import color from '../../../styles/color.module.scss';
import shape from '../../../styles/shape.module.scss';
import button from './button.module.scss';
import { PrivacyButtonProps } from './props';

export const PrivacyButton: React.FC<PrivacyButtonProps> = ({
  tap,
  title = 'Button',
  inverse = false,
  onPress,
}) => {
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
        // button['w--privacy'],
        font['size--15'],
      ].join(' ')} ${
        inverse
          ? [color['bg--gray__4'], color['b--transparent']].join(' ')
          : [color['bg--transparent'], color['b--black']].join(' ')
      }`}
      onClick={onPress}>
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
