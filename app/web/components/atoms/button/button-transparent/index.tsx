import React from 'react';
import {
  TransparentButtonTemplate,
  TransparentButtonTemplateProps,
} from './template';

export interface TransparentButtonProps
  extends TransparentButtonTemplateProps {}

const TransparentButton: React.FC<TransparentButtonProps> = (props) => {
  return <TransparentButtonTemplate {...props} />;
};

export const transparent = (props) => {
  return {
    transparent: {
      component: <TransparentButton {...props} />,
    },
  };
};
