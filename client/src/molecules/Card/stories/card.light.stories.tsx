import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { css } from 'styled-components';
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

const basicStyles = {
  styles: css`
    width: 100%;
    max-width: 350px;
  `,
};

interface Props {
  styles?: any;
  title?: string;
  image: string;
  size: string;
}

const SingleCardLightTemplate: Story<Props> = ({ styles, ...args }) => {
  return (
    <Box styles={styles}>
      <Card {...args} />
    </Box>
  );
};

const MultipleCardLightTemplate: Story<Props> = ({ styles, ...args }) => {
  return (
    <Box styles={styles}>
      <Card {...args} />
      <Card {...args} />
      <Card {...args} />
    </Box>
  );
};

export const base = SingleCardLightTemplate.bind({});
base.args = {
  title: 'Online experiences',
  ...cardData,
  ...basicStyles,
};

export const noTitle = SingleCardLightTemplate.bind({});
noTitle.args = {
  ...cardData,
  ...basicStyles,
};

export const multiple = MultipleCardLightTemplate.bind({});
multiple.args = {
  styles: css`
    width: 100%;
    height: 100%;
    padding: 0 20px;
    display: flex;

    @media ${sizes.sm} {
      display: grid;
      align-items: center;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 15px;
    }
  `,
  ...cardData,
};
