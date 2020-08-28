import React from 'react';
import { css } from 'styled-components';
import { Button, Text } from 'atoms';
import { colors, sizes } from 'styles';
import { CustomProps } from 'molecules/Button';
import theme from 'styled-theming';
import { darken } from 'polished';

export const cookieButtonColors = {
  primary: theme('mode', {
    light: darken(0.25, colors.gray),
  }),
};

export const cookieButtonStyles = {
  wrapper: css`
    padding: 14px 20px;
    font-size: 16px;
    letter-spacing: 1.1;
    font-weight: 300;
    white-space: nowrap;
    min-width: none;
    margin-top: 25px;

    @media ${sizes.lg} {
      min-width: 125px;
      width: 100%;
      margin-top: initial;
    }
  `,
  inverse: css`
    border: 1px solid ${cookieButtonColors.primary};
    background-color: transparent;
  `,
  normal: css`
    color: ${colors.white};
    background-color: ${cookieButtonColors.primary};
  `,
};

export const CookieButton: React.FC<CustomProps> = ({
  inverse,
  name,
  ...props
}) => {
  return (
    <Button
      styles={
        inverse
          ? [...cookieButtonStyles.inverse, ...cookieButtonStyles.wrapper]
          : [...cookieButtonStyles.normal, ...cookieButtonStyles.wrapper]
      }
      {...props}>
      <Text>{name}</Text>
    </Button>
  );
};
