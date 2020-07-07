import React from 'react';
import { css } from 'styled-components';

// svg
import { Icon } from '../../assets/svg/icon';

// layout
import { Flex } from '../layout';

// block
import { BaseButton } from './button';

// element
import { Text } from '../../elements/Text';

type props = { size: number; onPress: () => void };

export default (props: props) => {
  return (
    <BaseButton styles={button} {...props}>
      <Flex alignCenter>
        <Icon styles={icon} name='search' />
        <Text styles={text}>Search</Text>
      </Flex>
    </BaseButton>
  );
};

const button = css`
  background: -webkit-linear-gradient(
    right,
    rgb(230, 30, 77) 0%,
    rgb(227, 28, 95) 50%,
    rgb(215, 4, 102) 100%
  );
  border: none;
  color: white;
`;

const icon = css`
  position: relative;
  top: 1.5px;
  margin-right: 7px;
  & svg {
    width: 14px;
    height: 14px;
    path {
      fill: white;
    }
  }
`;

const text = css`
  font-size: 15px;
  letter-spacing: 0.5px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    Helvetica Neue, sans-serif !important;
  font-weight: 400;
`;
