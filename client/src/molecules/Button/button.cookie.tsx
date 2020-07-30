import React from 'react';
import { css } from 'styled-components';
import theme from 'styled-theming';

// atoms
import { Button, Text } from 'atoms';

// colors
import { colorpallete } from 'styles/colorpallete';

// type
import { ButtonProps } from 'molecules/Button/button';

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
  light: colorpallete.bluegreen__5,
});

const secondary = theme('mode', {
  light: colorpallete.white,
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
