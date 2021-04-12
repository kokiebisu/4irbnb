import { Story, Meta } from '@storybook/react';
import { TextInput, TextInputProps } from '.';

export default {
  title: 'Atoms/Input',
  component: TextInput,
} as Meta;

const InputStory: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const Text = InputStory.bind({});
Text.args = {
  name: 'Text',
  onChange: () => alert('on change'),
  value: 'Text',
  direction: undefined,
  placeholder: 'Placeholder',
};
