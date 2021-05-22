import React from 'react';
import { LogoIconTemplate, LogoIconTemplateProps } from './template';

export type LogoIconProps = LogoIconTemplateProps;

export const LogoIcon = (props: LogoIconProps): JSX.Element => {
  return <LogoIconTemplate {...props} />;
};
