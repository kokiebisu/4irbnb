import { Story, Meta } from '@storybook/react';
import { AddressInputTemplate, AddressInputTemplateProps } from './template';

export default {
  title: 'Atoms/Input',
  component: AddressInputTemplate,
} as Meta;

const InputStory: Story<AddressInputTemplateProps> = (args) => (
  <AddressInputTemplate {...args} />
);

export const Address = InputStory.bind({});
Address.args = {
  onChange: () => alert('on change'),
  value: 'value',
  direction: undefined,
};
