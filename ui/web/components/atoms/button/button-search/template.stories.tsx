import { Story, Meta } from '@storybook/react';
import { SearchButtonTemplate, SearchButtonTemplateProps } from './template';

export default {
  title: 'Atoms/Button',
  component: SearchButtonTemplate,
} as Meta;

const ButtonStory: Story<SearchButtonTemplateProps> = (args) => (
  <SearchButtonTemplate {...args} />
);

export const Search = ButtonStory.bind({});
Search.args = {
  expand: false,
};
