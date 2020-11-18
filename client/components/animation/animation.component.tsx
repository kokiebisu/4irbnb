import React from 'react';

/**
 * Props
 */
import { AnimationProps } from './props';

/**
 * Components
 */
import { LoadingAnimation } from './animation.loading';

/**
 * Bundles the animation components
 * @param {string} type - Specifies the type of animation component
 */
export const Animation: React.FC<AnimationProps> = ({
  type = 'loading',
  extendsTo,
  ...props
}) => {
  const types = {
    loading: <LoadingAnimation {...props} />,
  };
  return (
    <div data-testid='animation' className={extendsTo}>
      {types[type]}
    </div>
  );
};
