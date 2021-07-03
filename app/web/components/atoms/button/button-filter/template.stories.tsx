import { Story, Meta } from '@storybook/react';
import { FilterButtonTemplate, FilterButtonTemplateProps } from './template';

export default {
  title: 'Atoms/Button',
  component: FilterButtonTemplate,
} as Meta;

const ButtonStory: Story<FilterButtonTemplateProps> = (args) => (
  <FilterButtonTemplate {...args} />
);

export const Filter = ButtonStory.bind({});
Filter.args = {
  label: 'Button',
  inverse: false,
};
