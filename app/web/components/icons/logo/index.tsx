import React from 'react';
import { LogoIconTemplate, LogoIconTemplateProps } from './template';

export type LogoIconProps = LogoIconTemplateProps & {
  width: number;
  height: number;
};

export const LogoIcon = ({
  width,
  height,
  ...props
}: LogoIconProps): JSX.Element => {
  return (
    <div data-testid="logo-icon" style={{ width, height }}>
      <LogoIconTemplate {...props} />
    </div>
  );
};
