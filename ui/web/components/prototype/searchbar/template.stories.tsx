import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  SearchbarPrototypeTemplate,
  SearchbarPrototypeTemplateProps,
} from './template';

export default {
  title: 'Prototypes/Searchbar',
  component: SearchbarPrototypeTemplate,
} as Meta;

const SearchbarPrototypeStory: Story<SearchbarPrototypeTemplateProps> = (
  args
) => <SearchbarPrototypeTemplate {...args} />;

export const Searchbar = SearchbarPrototypeStory.bind({});
Searchbar.args = {};
