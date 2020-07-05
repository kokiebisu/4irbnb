import React from 'react';
import { BaseButton } from './button';
import styled from 'styled-components';
import { Flex } from '../layout';

import { Icon } from '../../assets/svg/icon';
import { Text } from '../../elements/Text';

type props = { size: number; onPress: () => void };

export default (props: props) => {
  return (
    <Wrapper {...props}>
      <Flex alignCenter>
        <StyledIcon name='search' />
        <StyledText>Search</StyledText>
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled(BaseButton)`
  background: -webkit-linear-gradient(
    right,
    rgb(230, 30, 77) 0%,
    rgb(227, 28, 95) 50%,
    rgb(215, 4, 102) 100%
  );
  border: none;
  color: white;
`;

const StyledIcon = styled(Icon)`
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

const StyledText = styled(Text)`
  font-size: 15px;
  letter-spacing: 0.5px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    Helvetica Neue, sans-serif !important;
  font-weight: 400;
`;
