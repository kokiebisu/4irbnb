import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { css } from 'styled-components';
import { Box } from 'atoms';
import { SearchBar } from 'molecules/SearchBar';
import { sizes } from 'styles';

export default {
  title: 'Design Systems/SearchBar',
  component: SearchBar,
  argTypes: { onPress: { action: 'clicked' } },
} as Meta;

interface Props {
  type: string;
  onPress: () => void;
  styles?: any;
}

const SearchBarTemplate: Story<Props> = ({ styles, ...args }) => (
  <Box styles={styles}>
    <SearchBar {...args} />
  </Box>
);

export const small = SearchBarTemplate.bind({});
small.args = {
  type: 'sm',
  styles: css`
    width: 100%;
  `,
};

export const medium = SearchBarTemplate.bind({});
medium.args = {
  type: 'md',
  styles: css`
    @media ${sizes.lg} {
      width: 100%;
      max-width: 1560px;
    }
  `,
};

export const large = SearchBarTemplate.bind({});
large.args = {
  type: 'lg',
  styles: css`
    @media ${sizes.lg} {
      width: 100%;
      max-width: 1560px;
    }
  `,
};
