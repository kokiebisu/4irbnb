import { Story, Meta } from '@storybook/react';
import { SearchbarInput, SearchbarInputProps } from '.';

export default {
  title: 'Atoms/Input',
  component: SearchbarInput,
} as Meta;

const InputStory: Story<SearchbarInputProps> = (args) => (
  <SearchbarInput {...args} />
);

export const Searchbar = InputStory.bind({});
Searchbar.args = {
  inverse: false,
  value: 'Value',
  onChange: () => alert('on change'),
};
