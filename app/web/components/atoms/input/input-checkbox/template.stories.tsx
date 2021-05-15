import { Story, Meta } from '@storybook/react';
import { CheckboxInputTemplate, CheckboxInputTemplateProps } from './template';

export default {
  title: 'Atoms/Input',
  component: CheckboxInputTemplate,
} as Meta;

const InputStory: Story<CheckboxInputTemplateProps> = (args) => (
  <CheckboxInputTemplate {...args} />
);

export const Checkbox = InputStory.bind({});
Checkbox.args = {
  onChange: () => alert('on change'),
  value: false,
  title: 'Title here',
  description: 'Description here',
};
