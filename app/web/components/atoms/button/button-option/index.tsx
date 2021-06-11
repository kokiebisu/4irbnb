import React from 'react';
import { OptionButtonTemplate, OptionButtonTemplateProps } from './template';

export interface OptionButtonProps extends OptionButtonTemplateProps {}

export const OptionButton: React.FC<OptionButtonProps> = ({ ...props }) => {
  return <OptionButtonTemplate {...props} />;
};
