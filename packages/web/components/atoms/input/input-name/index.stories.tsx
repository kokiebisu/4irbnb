import { Story, Meta } from '@storybook/react';
import { NameInput, NameInputProps } from '.';

export default {
  title: 'Atoms/Input',
  component: NameInput,
} as Meta;

const InputStory: Story<NameInputProps> = (args) => <NameInput {...args} />;

export const Name = InputStory.bind({});
Name.args = {
  onChange: () => alert('on change'),
  value: 'Name',
  direction: undefined,
  name: 'firstname',
  errors: false,
};
