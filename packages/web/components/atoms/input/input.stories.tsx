import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Input, InputProps, $Input } from '@input';

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    extendsTo: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const InputStory: Story<InputProps> = (args) => <Input {...args} />;

export const email = InputStory.bind({});
email.args = {
  variant: $Input.EMAIL,
};

export const password = InputStory.bind({});
password.args = {
  variant: $Input.PASSWORD,
};

export const name = InputStory.bind({});
name.args = {
  variant: $Input.NAME,
};
name.argTypes = {
  name: {
    control: {
      type: 'select',
      options: ['firstname', 'lastname'],
    },
  },
};

export const birthdate = InputStory.bind({});
birthdate.args = {
  variant: $Input.BIRTHDATE,
};

export const phone = InputStory.bind({});
phone.args = {
  variant: $Input.PHONE,
};

export const region = InputStory.bind({});
region.args = {
  variant: $Input.REGION,
};

export const place = InputStory.bind({});
place.args = {
  variant: $Input.PLACE,
};

export const guests = InputStory.bind({});
guests.args = {
  variant: $Input.GUESTS,
};

export const address = InputStory.bind({});
address.args = {
  variant: $Input.ADDRESS,
};

export const select = InputStory.bind({});
select.args = {
  variant: $Input.SELECT,
};

export const radio = InputStory.bind({});
radio.args = {
  variant: $Input.RADIO,
};

export const counter = InputStory.bind({});
counter.args = {
  variant: $Input.COUNTER,
};

export const text = InputStory.bind({});
text.args = {
  variant: $Input.TEXT,
};

export const checkbox = InputStory.bind({});
checkbox.args = {
  variant: $Input.CHECKBOX,
};
checkbox.argTypes = {
  checked: {
    control: 'boolean',
  },
};

export const textarea = InputStory.bind({});
textarea.args = {
  variant: $Input.TEXTAREA,
};

export const verify = InputStory.bind({});
verify.args = {
  variant: $Input.VERIFY,
};

export const closed = InputStory.bind({});
closed.args = {
  variant: $Input.CLOSED,
};

export const price = InputStory.bind({});
price.args = {
  variant: $Input.PRICE,
};

export const limit = InputStory.bind({});
limit.args = {
  variant: $Input.LIMIT,
};

export const photo = InputStory.bind({});
photo.args = {
  variant: $Input.PHOTO,
};
photo.decorators = [
  (Story) => (
    <div style={{ maxWidth: 450 }}>
      <Story />
    </div>
  ),
];

export const another = InputStory.bind({});
another.args = {
  variant: $Input.ANOTHER,
};
another.decorators = [
  (Story) => (
    <div style={{ maxWidth: 250 }}>
      <Story />
    </div>
  ),
];
