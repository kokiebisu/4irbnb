import React from 'react';
import {
  TransparentButtonTemplate,
  TransparentButtonTemplateProps,
} from './template';

export interface TransparentButtonProps
  extends TransparentButtonTemplateProps {}

export const TransparentButton: React.FC<TransparentButtonProps> = (props) => {
  return <TransparentButtonTemplate {...props} />;
};
