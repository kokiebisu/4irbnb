import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Input } from './input.component';

import { InputProps } from './props';

export default {
  title: 'Design System/Atoms/Input',
  component: Input,
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const InputTemplate: Story<InputProps> = (args) => <Input {...args} />;

export const text = InputTemplate.bind({});
text.args = {
  type: 'text',
};

export const email = InputTemplate.bind({});
email.args = {
  type: 'email',
};

export const password = InputTemplate.bind({});
password.args = {
  type: 'password',
};

export const name = InputTemplate.bind({});
name.args = {
  type: 'name',
};
name.argTypes = {
  name: {
    control: {
      type: 'select',
      options: ['first', 'last'],
    },
  },
};
