import React from 'react';
import Link from 'next/link';

/**
 * Styles
 */
import shape from '../../../styles/shape.module.scss';
import font from '../../../styles/font.module.scss';
import color from '../../../styles/color.module.scss';
import layout from '../../../styles/layout.module.scss';
import space from '../../../styles/space.module.scss';
import animation from '../../../styles/animation.module.scss';

/**
 * Props
 */
import { HostButtonProps } from './props';

/**
 * Renders the host button component
 * @param {string} to - Redirects to the specified path
 * @param {boolean} inverse - Whether if the button takes the inverse styling or not
 */
export const HostButton: React.FC<HostButtonProps> = ({
  to = '/',
  inverse = false,
}) => {
  return (
    <div data-testid='button'>
      <Link href={to}>
        <a
          className={`${[
            shape['br--30'],
            font['size--14'],
            layout['inline-block'],
            space['p-t--13'],
            space['p-b--13'],
            space['p-l--13'],
            space['p-r--13'],
          ].join(' ')} ${
            inverse
              ? [
                  font['weight--300'],
                  color['c--white__0'],
                  animation['hover-background--white__transparent'],
                ].join(' ')
              : [
                  font['weight--500'],
                  color['c--gray__4'],
                  animation['hover-background--white__1'],
                ].join(' ')
          }`}>
          Become a host
        </a>
      </Link>
    </div>
  );
};
