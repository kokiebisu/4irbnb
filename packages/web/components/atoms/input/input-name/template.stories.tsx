import { Story, Meta } from '@storybook/react';
import { NameInputTemplate, NameInputTemplateProps } from './template';

export default {
  title: 'Atoms/Input',
  component: NameInputTemplate,
} as Meta;

const InputStory: Story<NameInputTemplateProps> = (args) => (
  <NameInputTemplate {...args} />
);

export const Name = InputStory.bind({});
Name.args = {
  onChange: () => alert('on change'),
  value: 'Name',
  direction: undefined,
  name: 'firstname',
  errors: false,
};
