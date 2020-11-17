import React from 'react';
import Link from 'next/link';

/**
 * Styles
 */
import color from '../../../styles/color.module.scss';
import layout from '../../../styles/layout.module.scss';
import font from '../../../styles/font.module.scss';
import shape from '../../../styles/shape.module.scss';
import space from '../../../styles/space.module.scss';

/**
 * Props
 */
import { BannerButtonProps } from './props';

/**
 * Renders the banner button component
 * @param {string} to - Link to which it redirects
 * @param {string} title - Title of the button
 */
export const BannerButton: React.FC<BannerButtonProps> = ({
  to = '/',
  title = 'Button',
}) => {
  return (
    <div className={[color['bg--transparent']].join(' ')} data-testid='button'>
      <Link href={to} passHref>
        <a
          className={[
            layout['all-center'],
            font['size--14'],
            color['bg--white__0'],
            shape['br--6'],
            space['p-h--12'],
            space['p-v--8'],
            font['ls--1'],
          ].join(' ')}>
          {title}
        </a>
      </Link>
    </div>
  );
};
