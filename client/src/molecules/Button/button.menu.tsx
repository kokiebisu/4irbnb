import React from 'react';
import styled, { css } from 'styled-components';
import { Box, Icon, Button } from 'atoms';
import { colors } from 'styles';
import { CustomProps } from 'molecules/Button';
import theme from 'styled-theming';
import { lighten } from 'polished';

const background = theme('mode', {
  light: colors.white,
});

const content = theme('mode', {
  light: colors.gray,
});

const border = theme('mode', {
  light: lighten(0.4, colors.gray),
});

export const Wrapper = styled(Button)`
  background-color: ${background};
  border-radius: 24px;
  padding: 5px 6px 5px 12px;
  transition: 0.2s ease-in;
  border: 1px solid ${border};
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  }
`;

export const Flex = styled(Box)`
  display: flex;
  align-items: center;
`;

export const CustomIcon = styled(Icon)`
  svg {
    width: 100%;
    height: 100%;
    path {
      fill: ${content};
    }
  }
`;

const extend = {
  bars: css`
    margin-right: 12px;
    height: 15px;
    width: 17px;
  `,
  avatar: css`
    height: 32px;
    width: 32px;
  `,
};

export default ({ name, ...props }: CustomProps) => {
  return (
    <Wrapper {...props}>
      <Flex>
        <CustomIcon styles={extend.bars} name='Bars' />
        <CustomIcon styles={extend.avatar} name='Avatar' />
      </Flex>
    </Wrapper>
  );
};
