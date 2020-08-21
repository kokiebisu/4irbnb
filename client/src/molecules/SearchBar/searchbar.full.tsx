import React from 'react';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { lighten, darken } from 'polished';
import { colors } from 'styles';
import { Box, Button, Text } from 'atoms';
import { CustomButton } from 'molecules/Button';
import * as mixins from 'styles/mixins';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';

type SearchBarProps = {
  onPress: () => void;
};

const hover = theme('mode', {
  light: darken(0.05, colors.white),
});

const description = theme('mode', {
  light: lighten(0.05, colors.gray),
});

const border = theme('mode', {
  light: darken(0.25, colors.white),
});

const seperator = theme('mode', {
  light: darken(0.1, colors.white),
});

const Inputs = styled(Box)`
  width: 100%;
  height: 70px;
  border-radius: 15px;
  border: 1px solid ${border};
  display: flex;
  background-color: ${colors.white};
  box-shadow: rgb(0, 0, 0, 0.15) 0px 5px 12px;
  /* &:hover {
    border: none;
  } */
`;

const Section = styled(Box)`
  background-color: ${colors.white};
  height: 100%;
  width: 100%;
  border-radius: 15px;
`;

const Select = styled(Button)`
  width: inherit;
  height: inherit;
  border-radius: inherit;
  background-color: ${colors.white};
  text-align: left;
  padding: 0 20px;
  ${mixins.borderMixin(1, 2, 1, 2, 'transparent')};

  &.first {
    ${mixins.borderMixin(1, 2, 1, 1, 'transparent')};
  }

  &.first:hover {
    ${mixins.borderMixin(1, 2, 1, 1, border)};
  }

  &.last {
    ${mixins.borderMixin(1, 1, 1, 2, 'transparent')};
  }

  &.last:hover {
    ${mixins.borderMixin(1, 1, 1, 2, border)};
  }

  &:hover {
    ${mixins.borderMixin(1, 2, 1, 2, border)};
  }
`;

const LastSection = styled(Box)`
  background-color: inherit;
  border-radius: 15px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  &:hover {
    background-color: ${hover};
  }
`;

const Seperator = styled(Box)`
  width: 1px;
  height: 100%;
  background-color: ${seperator};
  align-self: center;
`;

const Search = styled(CustomButton)`
  position: absolute;
  right: 0px;
  z-index: 5px;
  margin-right: 12px;
`;

const Title = styled(Box)`
  p {
    font-weight: 700;
    letter-spacing: 0.5px;
    font-size: 10px;
    text-transform: uppercase;
  }
`;

const Description = styled(Box)`
  margin-top: 8px;
  p {
    font-size: 14px;
    font-weight: 300;
    color: ${description};
  }
`;

const Categories = styled(Box)`
  margin-bottom: 22px;
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
      ${mixins.hoverMixin(5)}
    `,
    second: css`
      flex: 0.8 0 0%;
      order: 3;
      ${mixins.hoverMixin(5)}
      ${mixins.hoverMixin(6)}
    `,
    third: css`
      flex: 0.8 0 0%;
      order: 5;
      ${mixins.hoverMixin(6)}
      ${mixins.hoverMixin(7)}
    `,
    fourth: css`
      flex: 1.15 0 0%;
      order: 7;
      ${mixins.hoverMixin(7)}
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
  search: css`
    position: relative;
    z-index: 10;
  `,
};

const Content = ({ title, description }: any) => {
  return (
    <>
      <Title>
        <Text>{title}</Text>
      </Title>
      <Description>
        <Text>{description}</Text>
      </Description>
    </>
  );
};

const Category = ({ type, title }: any) => {
  const extend = {
    wrapper: css`
      background-color: transparent;
      margin-right: 20px;
    `,
    title: css`
      font-weight: 300;
      font-size: 15.5px;
    `,
  };
  return (
    <Button styles={extend.wrapper} onPress={() => console.log(type)}>
      <Text styles={extend.title}>{title}</Text>
    </Button>
  );
};

export default ({ ...props }: SearchBarProps) => {
  return (
    <Box>
      <AnimateSharedLayout>
        <Categories layout>
          <Category type='places' title='Places to stay' />
          <Category type='monthly' title='Monthly stays' />
          <Category type='experiences' title='Experiences' />
          <Category type='online' title='Online Experiences' />
        </Categories>
      </AnimateSharedLayout>
      <Inputs>
        <Box styles={extend.options}>
          <Section styles={extend.section.first}>
            <Select className='first' onPress={() => console.log('pressed')}>
              <Content title='Location' description='Where are you going?' />
            </Select>
          </Section>
          <Section styles={extend.section.second}>
            <Select onPress={() => console.log('pressed')}>
              <Content title='Check in' description='Add dates' />
            </Select>
          </Section>
          <Section styles={extend.section.third}>
            <Select onPress={() => console.log('pressed')}>
              <Content title='Check out' description='Add dates' />
            </Select>
          </Section>
          <LastSection styles={extend.section.fourth}>
            <Select className='last' onPress={() => console.log('pressed')}>
              <Content title='Guests' description='Add guests' />
            </Select>
            <Search type='search' onPress={() => console.log('pressed')} />
          </LastSection>
          <Seperator styles={extend.seperator.first} />
          <Seperator styles={extend.seperator.second} />
          <Seperator styles={extend.seperator.third} />
        </Box>
      </Inputs>
    </Box>
  );
};
