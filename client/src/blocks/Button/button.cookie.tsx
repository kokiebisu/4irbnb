import React from 'react';
import { css } from 'styled-components';
import theme from 'styled-theming';

// element
import { BaseButton } from '../../elements/Button';
import { Text } from '../../elements/Text';
import { colorpallete } from '../../styles/colorpallete';

// type
import { ButtonProps } from './button';

export default ({ inverse, children, ...props }: ButtonProps) => {
  return (
    <BaseButton
      styles={inverse ? extend.inverse.button : extend.normal.button}
      {...props}>
      <Text styles={inverse ? extend.inverse.text : extend.normal.text}>
        {children}
      </Text>
    </BaseButton>
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
