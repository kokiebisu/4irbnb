import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SearchButton, SearchButtonProps } from '.';

export default {
  title: 'Atoms/Button',
  component: SearchButton,
} as Meta;

const ButtonStory: Story<SearchButtonProps> = (args) => (
  <SearchButton {...args} />
);

export const Search = ButtonStory.bind({});
Search.args = {
  expand: false,
};
