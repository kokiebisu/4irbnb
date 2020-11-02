import { motion } from 'framer-motion';
import React from 'react';

import layout from '../../../styles/layout.module.scss';
import space from '../../../styles/space.module.scss';
import color from '../../../styles/color.module.scss';
import shape from '../../../styles/shape.module.scss';
import animation from '../../../styles/animation.module.scss';
import { Avatar, Bars } from '../../../public/svg/original';
import { MenuButtonProps } from './props';

export const MenuButton: React.FC<MenuButtonProps> = ({
  tap,
  onPress,
  inverse = false,
}) => {
  return (
    <motion.button
      whileTap={tap}
      data-testid='button'
      className={`${[
        layout['items-center'],
        space['p-t--6'],
        space['p-b--6'],
        space['p-r--8'],
        space['p-l--10'],
        color['bg--white__0'],
        shape['br--30'],
        animation['hover-shadow--lg'],
      ].join(' ')} ${inverse && [color['b--white__2']].join(' ')}`}
      onClick={onPress}>
      <div className={space['m-r--8']}>
        <Bars fill='black' width={12} />
      </div>
      <div>
        <Avatar width={30} fill='gray' />
      </div>
    </motion.button>
  );
};
