import Link from 'next/link';
import React from 'react';

import font from '../../../styles/font.module.scss';
import layout from '../../../styles/layout.module.scss';

import { ChevronRight } from '../../../public/svg/regular';
import { ExpandButtonProps } from './props';

export const ExpandButton: React.FC<ExpandButtonProps> = ({
  to = '/',
  title = 'Button',
}) => {
  return (
    <div data-testid='button'>
      <Link href={to}>
        <a className={[font['weight--500']].join(' ')}>
          <div className={[layout['items-center']].join(' ')}>
            <div>
              <u>{title}</u>
            </div>
            <div>
              <ChevronRight width={14} stroke='black' strokeWidth={5} />
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};
