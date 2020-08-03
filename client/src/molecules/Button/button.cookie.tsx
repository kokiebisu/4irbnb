import React from 'react';
import { css } from 'styled-components';
import theme from 'styled-theming';
import { darken } from 'polished';
import { Button, Text } from 'atoms';
import { colors, sizes } from 'styles';
import { ButtonProps } from 'molecules/Button';

/**
 - Use a button when you want to perform specific cookie actions
 **/
export default ({ inverse, name, ...props }: ButtonProps) => {
  return (
    <Button
      styles={inverse ? extend.inverse.button : extend.normal.button}
      {...props}>
      <Text styles={inverse ? extend.inverse.text : extend.normal.text}>
        {name}
      </Text>
    </Button>
  );
};

const primary = theme('mode', {
  light: darken(0.4, colors.gray),
});

const secondary = theme('mode', {
  light: colors.white,
});

const common = css`
  padding: 14px 20px;
  font-size: 16px;
  letter-spacing: 1.1;
  font-weight: 300;
  white-space: nowrap;
  @media ${sizes.md} {
    min-width: 125px;
    width: 100%;
  }
`;

const extend = {
  normal: {
    button: css`
      ${common}
      background-color: ${primary};
    `,
    text: css`
      color: ${secondary};
    `,
  },
  inverse: {
    button: css`
      ${common}
      background-color: ${secondary}; 
      border: 1px solid ${primary};
    `,
    text: css`
      color: ${primary};
    `,
  },
};
