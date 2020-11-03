import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from '../../../public/svg/original';
import { ChevronDown } from '../../../public/svg/regular';

import color from '../../../styles/color.module.scss';
import shape from '../../../styles/shape.module.scss';
import layout from '../../../styles/layout.module.scss';
import animation from '../../../styles/animation.module.scss';
import space from '../../../styles/space.module.scss';
import { GlobeButtonProps } from './props';

export const GlobeButton: React.FC<GlobeButtonProps> = ({
  tap = { scale: 0.98 },
  onPress = () => console.log('Globe Button Clicked'),
  inverse = false,
}) => {
  return (
    <motion.button
      whileTap={tap}
      data-testid='button'
      className={[color['bg--transparent'], shape['br--30']].join(' ')}
      onClick={onPress}>
      <div
        className={`${[
          layout['flex'],
          layout['items-center'],
          color['bg--transparent'],
          space['p-t--13'],
          space['p-b--13'],
          space['p-l--15'],
          space['p-r--15'],
        ].join(' ')} ${
          inverse
            ? [animation['hover-background--white__1']].join(' ')
            : [animation['hover-background--gray__1']].join(' ')
        }`}>
        <div className={[layout['items-center'], space['m-r--8']].join(' ')}>
          <Globe width={16} fill={inverse ? 'white' : '#363636'} />
        </div>
        <div className={layout['items-center']}>
          <ChevronDown width={8} fill={inverse ? 'white' : '#363636'} />
        </div>
      </div>
    </motion.button>
  );
};
