import React from 'react';
import { motion } from 'framer-motion';

import color from '../../../styles/color.module.scss';
import shape from '../../../styles/shape.module.scss';
import layout from '../../../styles/layout.module.scss';
import font from '../../../styles/font.module.scss';
import space from '../../../styles/space.module.scss';
import { PlainButtonProps } from './props';

export const PlainButton: React.FC<PlainButtonProps> = ({
  title = 'Button',
  tap = { scale: 0.98 },
  onPress = () => alert('plain button clicked'),
}) => {
  return (
    <motion.button
      whileTap={tap}
      data-testid='button'
      className={[
        color['bg--primary'],
        color['c--white__0'],
        shape['w--full'],
        layout['block'],
        font['size--16'],
        space['p-v--14'],
        space['p-h--20'],
        shape['br--8'],
        font['weight--300'],
      ].join(' ')}
      onClick={onPress}>
      <p>{title}</p>
    </motion.button>
  );
};
