import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { css } from 'styled-components';
import { Box } from 'atoms';
import { SearchBar } from 'molecules/SearchBar';
import { sizes } from 'styles';
import {
  searchbarSmall,
  searchbarMedium,
  searchbarLarge,
} from 'molecules/Searchbar/styles';

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
  <SearchBar {...args} />
);

export const small = SearchBarTemplate.bind({});
small.args = {
  styles: searchbarSmall,
  type: 'sm',
};

export const medium = SearchBarTemplate.bind({});
medium.args = {
  styles: searchbarMedium,
  type: 'md',
};

export const large = SearchBarTemplate.bind({});
large.args = {
  styles: searchbarLarge,
  type: 'lg',
};
