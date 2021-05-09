import { Story, Meta } from '@storybook/react';
import { TextInputTemplate, TextInputTemplateProps } from './template';

export default {
  title: 'Atoms/Input',
  component: TextInputTemplate,
} as Meta;

const InputStory: Story<TextInputTemplateProps> = (args) => (
  <TextInputTemplate {...args} />
);

export const Text = InputStory.bind({});
Text.args = {
  name: 'Text',
  onChange: () => alert('on change'),
  value: 'Text',
  direction: undefined,
  placeholder: 'Placeholder',
};
