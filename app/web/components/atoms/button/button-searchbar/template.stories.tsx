import { Story, Meta } from '@storybook/react';
import {
  SearchbarButtonTemplate,
  SearchbarButtonTemplateProps,
} from './template';

export default {
  title: 'Atoms/Button',
  component: SearchbarButtonTemplate,
} as Meta;

const ButtonStory: Story<SearchbarButtonTemplateProps> = (args) => (
  <SearchbarButtonTemplate {...args} />
);

export const Searchbar = ButtonStory.bind({});
Searchbar.args = {};
