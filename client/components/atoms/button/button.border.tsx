import Link from 'next/link';
import React from 'react';

import layout from '../../../styles/layout.module.scss';
import font from '../../../styles/font.module.scss';
import shape from '../../../styles/shape.module.scss';
import space from '../../../styles/space.module.scss';
import color from '../../../styles/color.module.scss';
import { BorderButtonProps } from './props';

export const BorderButton: React.FC<BorderButtonProps> = ({
  to = '/',
  title = 'Button',
  inverse = false,
}) => {
  return (
    <div className={color['bg--transparent']} data-testid='button'>
      <Link href={to}>
        <a
          className={`${[
            font['text--center'],
            layout['block'],
            font['size--14'],
            font['weight--500'],
            shape['br--6'],
            space['p-t--6'],
            space['p-b--6'],
            space['p-l--14'],
            space['p-r--14'],
          ].join(' ')} ${
            inverse
              ? [color['b--white__0'], color['c--white__0']].join(' ')
              : [color['b--black']].join(' ')
          }`}>
          {title}
        </a>
      </Link>
    </div>
  );
};
