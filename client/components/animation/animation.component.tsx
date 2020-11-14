import { AnimationProps } from './props';
import React from 'react';
import { LoadingAnimation } from './animation.loading';

export const Animation: React.FC<AnimationProps> = ({
  type = 'loading',
  ...props
}) => {
  const types = {
    loading: <LoadingAnimation {...props} />,
  };
  return <div data-testid='animation'>{types[type]}</div>;
};
