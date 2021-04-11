import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SearchbarButton, SearchbarButtonProps } from '.';

export default {
  title: 'Atoms/Button',
  component: SearchbarButton,
} as Meta;

const ButtonStory: Story<SearchbarButtonProps> = (args) => (
  <SearchbarButton {...args} />
);

export const Searchbar = ButtonStory.bind({});
Searchbar.args = {
  mini: false,
};
