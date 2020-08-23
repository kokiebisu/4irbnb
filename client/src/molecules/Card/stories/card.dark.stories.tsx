import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import styled, { css, ThemeProvider } from 'styled-components';
import Card from 'molecules/Card';
import { Box } from 'atoms';

import cardimg from 'assets/img/darkcard-sm.png';

export default {
  title: 'Design Systems/Card/Dark',
  component: Card,
} as Meta;

const cardData = {
  image: cardimg,
  subtitle: 'Fruits de mer with Michelin chef Marc Favier',
};

interface Props {
  className?: string;
  image: string;
  size: string;
}

const Wrapper = styled(Box)`
  width: 100%;
  &.small {
    max-width: 200px;
  }
  &.medium {
    max-width: 350px;
  }
  &.large {
    max-width: 400px;
  }
`;

const DarkCardTemplate: Story<Props> = ({ className, ...args }) => (
  <ThemeProvider theme={{ mode: 'dark' }}>
    <Wrapper className={className && className}>
      <Card {...args} />
    </Wrapper>
  </ThemeProvider>
);

export const small = DarkCardTemplate.bind({});
small.args = {
  className: 'small',
  size: 'sm',
  ...cardData,
};

export const medium = DarkCardTemplate.bind({});
medium.args = {
  className: 'medium',
  size: 'md',
  ...cardData,
};

export const large = DarkCardTemplate.bind({});
large.args = {
  className: 'large',
  size: 'lg',
  ...cardData,
};
