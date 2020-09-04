import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SearchBar } from 'molecules/SearchBar';
import {
  searchbarSmall,
  searchbarMedium,
  searchbarLarge,
} from 'molecules/SearchBar/styles';

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

const SearchBarTemplate: Story<Props> = (args) => <SearchBar {...args} />;

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
