import { Story, Meta } from '@storybook/react';
import {
  SearchbarInputTemplate,
  SearchbarInputTemplateProps,
} from './template';

export default {
  title: 'Atoms/Input',
  component: SearchbarInputTemplate,
} as Meta;

const InputStory: Story<SearchbarInputTemplateProps> = (args) => (
  <SearchbarInputTemplate {...args} />
);

export const Searchbar = InputStory.bind({});
Searchbar.args = {
  inverse: false,
  value: 'Value',
  onChange: () => alert('on change'),
};
