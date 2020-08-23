import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import Card from 'molecules/Card';
import { Box } from 'atoms';
import { sizes } from 'styles';

import cardImg from 'assets/img/card1.jpg';

export default {
  title: 'Design Systems/Card/Light',
  component: Card,
} as Meta;

const cardData = {
  image: cardImg,
  description: 'Unique activities we can do together, led by a world of hosts',
};

interface Props {
  className: string;
  title?: string;
  image: string;
  size: string;
}

const Wrapper = styled(Box)`
  width: 100%;
  &.single {
    max-width: 350px;
  }
  &.multiple {
    height: 100%;
    padding: 0 20px;
    display: flex;

    @media ${sizes.sm} {
      display: grid;
      align-items: center;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 15px;
    }
  }
`;

const SingleCardLightTemplate: Story<Props> = ({ className, ...args }) => {
  return (
    <Wrapper className={className && className}>
      <Card {...args} />
    </Wrapper>
  );
};

const MultipleCardLightTemplate: Story<Props> = ({ className, ...args }) => {
  return (
    <Wrapper className={className && className}>
      <Card {...args} />
      <Card {...args} />
      <Card {...args} />
    </Wrapper>
  );
};

export const base = SingleCardLightTemplate.bind({});
base.args = {
  className: 'single',
  title: 'Online experiences',
  ...cardData,
};

export const noTitle = SingleCardLightTemplate.bind({});
noTitle.args = {
  className: 'single',
  ...cardData,
};

export const multiple = MultipleCardLightTemplate.bind({});
multiple.args = {
  className: 'multiple',
  ...cardData,
};
