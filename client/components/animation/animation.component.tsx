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
  ...props
}) => {
  const types = {
    loading: <LoadingAnimation {...props} />,
  };
  return <div data-testid='animation'>{types[type]}</div>;
};
