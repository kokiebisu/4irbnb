import React from 'react';
import { LoadingAnimationProps } from './props';
import animation from './animation.module.scss';

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
