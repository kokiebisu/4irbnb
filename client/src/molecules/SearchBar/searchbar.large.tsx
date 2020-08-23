import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { lighten, darken } from 'polished';
import { colors } from 'styles';
import { Box, Button, Text } from 'atoms';
import { CustomButton } from 'molecules/Button';
import * as mixins from 'styles/mixins';
import { AnimateSharedLayout, AnimatePresence, motion } from 'framer-motion';

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

const category = theme('mode', {
  light: lighten(0.1, colors.gray),
});

const Inputs = styled(Box)`
  width: 100%;
  height: 70px;
  border-radius: 15px;
  border: 1px solid ${border};
  display: flex;
  background-color: ${colors.white};
  box-shadow: rgb(0, 0, 0, 0.15) 0px 5px 12px;
`;

const Section = styled(Box)`
  background-color: ${colors.white};
  height: 100%;
  width: 100%;
  border-radius: 15px;

  &.first {
    flex: 1.5 0 0%;
    order: 1;
    ${mixins.hoverMixin(5)}
  }

  &.second {
    flex: 0.8 0 0%;
    order: 3;
    ${mixins.hoverMixin(5)}
    ${mixins.hoverMixin(6)}
  }
  &.third {
    flex: 0.8 0 0%;
    order: 5;
    ${mixins.hoverMixin(6)}
    ${mixins.hoverMixin(7)}
  }
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
  flex: 1.15 0 0%;
  order: 7;
  ${mixins.hoverMixin(7)}
`;

const Seperator = styled(Box)`
  width: 1px;
  height: 100%;
  background-color: ${seperator};
  align-self: center;
  &.first {
    order: 2;
  }
  &.second {
    order: 4;
  }
  &.third {
    order: 6;
  }
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

const List = styled.li`
  background-color: transparent;
  margin-right: 20px;

  &.outline {
  }
`;

const Options = styled(Box)`
  background-color: white;
  display: flex;
  flex: 1 1 0%;
  height: 100%;
  border-radius: inherit;
`;

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

const Categories = () => {
  const categories = ['places', 'monthly', 'experiences', 'online'];
  const [selected, setSelected] = useState(categories[0]);
  return (
    <AnimateSharedLayout>
      <ul>
        {categories.map((category) => (
          <Category
            key={category}
            category={category}
            isSelected={selected === category}
            onClick={() => setSelected(category)}
          />
        ))}
      </ul>
    </AnimateSharedLayout>
  );
};

const Category = ({ category, onClick, isSelected }: any) => {
  const extend = {
    title: css`
      font-weight: 300;
      font-size: 15.5px;
      &:hover {
        color: ${category};
      }
    `,
  };
  const spring = {
    type: 'spring',
    stiffness: 500,
    damping: 30,
  };
  return (
    <List onClick={onClick}>
      {isSelected && (
        <motion.div
          // layoutId='outline'
          className='outline'
          animate={{ borderBottom: '2px solid black' }}
          transition={spring}>
          {category}
        </motion.div>
      )}
    </List>
  );
};

export default ({ ...props }: SearchBarProps) => {
  const extend = {
    search: css`
      position: relative;
      z-index: 10;
    `,
  };
  return (
    <Box>
      {/* <Categories /> */}
      <Inputs>
        <Options>
          <Section className='first'>
            <Select className='first' onPress={() => console.log('pressed')}>
              <Content title='Location' description='Where are you going?' />
            </Select>
          </Section>
          <Section className='second'>
            <Select onPress={() => console.log('pressed')}>
              <Content title='Check in' description='Add dates' />
            </Select>
          </Section>
          <Section className='third'>
            <Select onPress={() => console.log('pressed')}>
              <Content title='Check out' description='Add dates' />
            </Select>
          </Section>
          <LastSection>
            <Select className='last' onPress={() => console.log('pressed')}>
              <Content title='Guests' description='Add guests' />
            </Select>
            <Search type='search' onPress={() => console.log('pressed')} />
          </LastSection>
          <Seperator className='first' />
          <Seperator className='second' />
          <Seperator className='third' />
        </Options>
      </Inputs>
    </Box>
  );
};
