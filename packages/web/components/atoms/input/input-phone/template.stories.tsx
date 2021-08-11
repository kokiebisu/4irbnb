import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  PhoneNumberInputTemplate,
  PhoneNumberInputTemplateProps,
} from './template';

export default {
  title: 'Atoms/Input',
  component: PhoneNumberInputTemplate,
} as Meta;

const InputStory: Story<PhoneNumberInputTemplateProps> = (args) => (
  <PhoneNumberInputTemplate {...args} />
);

export const PhoneNumber = InputStory.bind({});
PhoneNumber.args = {
  onChange: () => alert('on change'),
  value: '778-142-2342',
  direction: undefined,
  errors: false,
};
