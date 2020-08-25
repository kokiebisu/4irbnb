import React from 'react';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { darken } from 'polished';
import { colors } from 'styles';
import { Box, Button, Icon, Text } from 'atoms';

const primary = theme('mode', {
  light: colors.gray,
});

const secondary = theme('mode', {
  light: darken(0.7, colors.gray),
});

const Wrapper = styled(Button)`
  background-color: transparent;
  box-shadow: rgb(0, 0, 0, 0.15) 0px 5px 12px;
  height: 50px;
  width: 100%;
  padding: 0 10px 0 18px;
  border-radius: 24px;
`;

const Flex = styled(Box)`
  display: flex;
  align-items: center;
`;

const CustomIcon = styled(Icon)`
  position: relative;
  top: 2px;
  margin-right: 16px;
  & svg {
    width: 16px;
    height: 16px;
    stroke: ${secondary};
    & path {
      fill: ${secondary};
      stroke-width: 2;
    }
  }
`;

const Label = styled(Text)`
  color: ${primary};
  font-size: 16px;
  font-weight: 500;
`;

export default () => {
  return (
    <Wrapper onPress={() => console.log('clicked')}>
      <Flex>
        <CustomIcon name='Search' />
        <Label>Where are you going?</Label>
      </Flex>
    </Wrapper>
  );
};
