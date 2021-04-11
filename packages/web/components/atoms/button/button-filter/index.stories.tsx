import { Story, Meta } from '@storybook/react';
import { FilterButton, FilterButtonProps } from '.';

export default {
  title: 'Atoms/Button',
  component: FilterButton,
} as Meta;

const ButtonStory: Story<FilterButtonProps> = (args) => (
  <FilterButton {...args} />
);

export const Filter = ButtonStory.bind({});
Filter.args = {
  label: 'Button',
  inverse: false,
};
