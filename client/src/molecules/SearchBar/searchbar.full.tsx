import React, { useReducer } from 'react';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { darken } from 'polished';
import { colors } from 'styles';
import { Flex } from 'layout';
import { Box, Button, Icon, Text } from 'atoms';
import { CustomButton } from 'molecules/Button';

type SearchBarProps = {
  onPress: () => void;
};

const hover = theme('mode', {
  light: darken(0.05, colors.white),
});

const seperator = theme('mode', {
  light: darken(0.1, colors.white),
});

const hoverMixin = (number: number) => css`
  &:hover ~ div:nth-child(${number}) {
    width: 1px;
    height: 28px;
    background-color: transparent;
  }
`;

const Wrapper = styled(Box)`
  width: 100%;
  max-width: 850px;
  height: 65px;
  border-radius: 50px;
  display: flex;
  background-color: ${colors.white};
  box-shadow: rgb(0, 0, 0, 0.15) 0px 5px 12px;
`;

const Section = styled(Button)`
  background-color: inherit;
  border-radius: 50px;
  height: 100%;
  width: 100%;
  &:hover {
    background-color: ${hover};
  }
`;

const Seperator = styled(Box)`
  width: 1px;
  height: 28px;
  background-color: ${seperator};
  align-self: center;
`;

const extend = {
  options: css`
    background-color: white;
    display: flex;
    flex: 1 1 0%;
    height: 100%;
    border-radius: inherit;
  `,
  section: {
    first: css`
      flex: 1.5 0 0%;
      order: 1;
      ${hoverMixin(5)}
    `,
    second: css`
      flex: 0.8 0 0%;
      padding: 20px;
      order: 3;
      ${hoverMixin(5)}
      ${hoverMixin(6)}
    `,
    third: css`
      flex: 0.8 0 0%;
      padding: 20px;
      order: 5;
      ${hoverMixin(6)}
      ${hoverMixin(7)}
    `,
    fourth: css`
      flex: 1.15 0 0%;
      order: 7;
      ${hoverMixin(7)}
    `,
  },
  seperator: {
    first: css`
      order: 2;
    `,
    second: css`
      order: 4;
    `,
    third: css`
      order: 6;
    `,
  },
};

export default ({ ...props }: SearchBarProps) => {
  return (
    <Wrapper>
      <Box styles={extend.options}>
        <Section
          styles={extend.section.first}
          onPress={() => console.log('pressed')}>
          sadf
        </Section>
        <Section
          styles={extend.section.second}
          onPress={() => console.log('pressed')}>
          sadf
        </Section>
        <Section
          styles={extend.section.third}
          onPress={() => console.log('pressed')}>
          sadf
        </Section>
        <Section
          styles={extend.section.fourth}
          onPress={() => console.log('pressed')}>
          sdaf
        </Section>
        <Seperator styles={extend.seperator.first} />
        <Seperator styles={extend.seperator.second} />
        <Seperator styles={extend.seperator.third} />
      </Box>
    </Wrapper>
  );
};
