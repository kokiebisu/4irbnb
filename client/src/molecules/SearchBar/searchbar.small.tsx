import React from 'react';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { darken, lighten } from 'polished';
import { Icon, Box, Button, Text } from 'atoms';
import { colors } from 'styles';

const primary = theme('mode', {
  light: lighten(0.25, colors.black),
});

const border = theme('mode', {
  light: lighten(0.4, colors.gray),
});

const Wrapper = styled(Button)`
  background-color: transparent;
  border: 1px solid ${border};
  height: 50px;
  width: 260px;
  padding: 0 7px 0 18px;
  border-radius: 24px;
`;

const Label = styled(Text)`
  color: ${primary};
  font-size: 14px;
`;

const IconWrapper = styled(Box)`
  width: 32px;
  height: 32px;
  background: -webkit-linear-gradient(
    right,
    rgb(230, 30, 77) 0%,
    rgb(227, 28, 95) 50%,
    rgb(215, 4, 102) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const CustomIcon = styled(Icon)`
  position: relative;

  & svg {
    width: 12px;
    height: 12px;
    stroke: ${colors.white};
    & path {
      fill: ${colors.white};
      stroke-width: 2;
    }
  }
`;

export const Flex = styled(Box)`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

export default () => {
  return (
    <Wrapper onPress={() => console.log('clicked')}>
      <Flex>
        <Label>Start your search</Label>
        <IconWrapper>
          <CustomIcon name='Search' />
        </IconWrapper>
      </Flex>
    </Wrapper>
  );
};
