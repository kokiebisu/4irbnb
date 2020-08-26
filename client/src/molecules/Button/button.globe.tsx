import React from 'react';
import styled, { css } from 'styled-components';
import { Box, Icon, Button } from 'atoms';
import { colors } from 'styles';
import { CustomProps } from 'molecules/Button';
import theme from 'styled-theming';

const stroke = theme('mode', {
  light: colors.white,
});

const hover = theme('mode', {
  light: 'rgba(190, 190, 190, 0.2)',
});

const Wrapper = styled(Button)`
  padding: 15px;
  background-color: transparent;
  border-radius: 24px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${hover};
  }
`;

const StyledIcon = styled(Icon)`
  &.globe {
    position: relative;
    top: 50%;
    margin-right: 6px;
    width: 16px;
    height: 16px;
  }
  &.arrow {
    width: 10px;
  }
`;

export const Flex = styled(Box)`
  display: flex;
  align-items: center;
`;

export default ({ name, ...props }: CustomProps) => {
  return (
    <Wrapper {...props}>
      <Flex>
        <StyledIcon fillColor={stroke} className='globe' name='Globe' />
        <StyledIcon fillColor={stroke} className='arrow' name='ChevronDown' />
      </Flex>
    </Wrapper>
  );
};
