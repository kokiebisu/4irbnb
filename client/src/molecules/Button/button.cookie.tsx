import React from 'react';
import styled, { css } from 'styled-components';
import { Button, Text } from 'atoms';
import { colors, sizes } from 'styles';
import { CustomProps } from 'molecules/Button';
import theme from 'styled-theming';
import { darken } from 'polished';

export const cookieColors = {
  primary: theme('mode', {
    light: darken(0.25, colors.gray),
  }),
};

export const cookieStyles = {
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
    border: 1px solid ${cookieColors.primary};
    background-color: transparent;
  `,
  normal: css`
    color: ${colors.white};
    background-color: ${cookieColors.primary};
  `,
};

export default ({ inverse, name, ...props }: CustomProps) => {
  return (
    <Button
      styles={
        inverse
          ? [...cookieStyles.inverse, ...cookieStyles.wrapper]
          : [...cookieStyles.normal, ...cookieStyles.wrapper]
      }
      {...props}>
      <Text>{name}</Text>
    </Button>
  );
};
