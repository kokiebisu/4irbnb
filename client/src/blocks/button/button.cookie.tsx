import React from 'react';
import { css } from 'styled-components';
import theme from 'styled-theming';

// block
import { BaseButton } from './button';

// element
import { Text } from '../../elements/Text';

type props = { size: string; onPress: () => void };

export default (props: props) => {
  return (
    <BaseButton styles={button} {...props}>
      <Text styles={text}>ok</Text>
    </BaseButton>
  );
};

// theme
const backgroundColor = theme('mode', {
  default: '#008489',
});

const textColor = theme('mode', {
  default: '#ffffff',
});

// style
const button = css`
  background-color: ${backgroundColor};
`;

const text = css`
  color: ${textColor};
`;
