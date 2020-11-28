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
  argTypes: {
    extendsTo: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const InputStories: Story<InputProps> = (args) => <Input {...args} />;

export const email = InputStories.bind({});
email.args = {
  type: 'email',
};

export const password = InputStories.bind({});
password.args = {
  type: 'password',
};

export const name = InputStories.bind({});
name.args = {
  type: 'name',
};
name.argTypes = {
  name: {
    control: {
      type: 'select',
      options: ['firstname', 'lastname'],
    },
  },
};

export const birthdate = InputStories.bind({});
birthdate.args = {
  type: 'birthdate',
};

export const phone = InputStories.bind({});
phone.args = {
  type: 'phone',
};

export const region = InputStories.bind({});
region.args = {
  type: 'region',
};

export const place = InputStories.bind({});
place.args = {
  type: 'place',
};

export const guests = InputStories.bind({});
guests.args = {
  type: 'guests',
};

export const address = InputStories.bind({});
address.args = {
  type: 'address',
};

export const select = InputStories.bind({});
select.args = {
  type: 'select'
}