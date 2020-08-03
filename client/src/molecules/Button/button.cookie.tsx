import React from 'react';
import { css } from 'styled-components';
import theme from 'styled-theming';

// atoms
import { Button, Text } from 'atoms';

// colors
import { colors } from 'styles';

// type
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
  light: colors.bluegreen,
});

const secondary = theme('mode', {
  light: colors.white,
});

const common = css`
  padding: 15px 0;
  font-size: 12px;
  font-weight: 700;
  min-width: 125px;
  width: 100%;
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
