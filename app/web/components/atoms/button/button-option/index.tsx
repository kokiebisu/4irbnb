import React from 'react';
import { OptionButtonTemplate, OptionButtonTemplateProps } from './template';

export interface OptionButtonProps extends OptionButtonTemplateProps {}

const OptionButton: React.FC<OptionButtonProps> = ({ ...props }) => {
  return <OptionButtonTemplate {...props} />;
};

export const option = (props) => {
  return {
    option: {
      component: <OptionButton {...props} />,
    },
  };
};
