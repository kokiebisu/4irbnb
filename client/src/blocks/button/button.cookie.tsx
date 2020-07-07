import React from 'react';
import { css } from 'styled-components';

import { BaseButton } from './button';

import { Text } from '../../elements/Text';

type props = { size: number; onPress: () => void };

export default (props: props) => {
  return (
    <BaseButton styles={button} {...props}>
      <Text styles={text}>ok</Text>
    </BaseButton>
  );
};

const button = css`
  background-color: green;
`;

const text = css``;
