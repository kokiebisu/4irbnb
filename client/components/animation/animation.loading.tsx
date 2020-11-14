import React from 'react';

/**
 * Props
 */
import { LoadingAnimationProps } from './props';

/**
 * Styles
 */
import animation from './animation.module.scss';

/**
 * Renders the loading animation
 */
export const LoadingAnimation: React.FC<LoadingAnimationProps> = () => {
  return (
    <div className={[animation['circle__wrapper']].join(' ')}>
      <span
        className={[animation['circle__content'], animation['circle--1']].join(
          ' '
        )}
      />
      <span
        className={[animation['circle__content'], animation['circle--2']].join(
          ' '
        )}
      />
      <span
        className={[animation['circle__content'], animation['circle--3']].join(
          ' '
        )}
      />
    </div>
  );
};
