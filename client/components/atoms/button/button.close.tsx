import React from 'react';
import { motion } from 'framer-motion';
import { Close } from '../../../public/svg/original';

import color from '../../../styles/color.module.scss';
import space from '../../../styles/space.module.scss';
import { CloseButtonProps } from './props';
import button from './button.module.scss';
import shape from '../../../styles/shape.module.scss';

export const CloseButton: React.FC<CloseButtonProps> = ({
  onPress = () => alert('close button pressed'),
}) => {
  return (
    <motion.button
      className={[
        color['bg--transparent'],
        space['p--8'],
        shape['br--circle'],
        button['hover__close'],
      ].join(' ')}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      onClick={onPress}>
      <Close width={16} height={16} stroke='black' strokeWidth={2} />
    </motion.button>
  );
};
