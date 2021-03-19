import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Input, InputProps, $INPUT } from '..';

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

const TemplateStory: Story<InputProps> = (args) => <Input {...args} />;

export const Email = TemplateStory.bind({});
Email.args = {
  variant: $INPUT.email,
};

export const Password = TemplateStory.bind({});
Password.args = {
  variant: $INPUT.password,
};

export const Name = TemplateStory.bind({});
Name.args = {
  variant: $INPUT.name,
};
Name.argTypes = {
  name: {
    control: {
      type: 'select',
      options: ['firstname', 'lastname'],
    },
  },
};

export const Birthdate = TemplateStory.bind({});
Birthdate.args = {
  variant: $INPUT.birthdate,
};

export const Phone = TemplateStory.bind({});
Phone.args = {
  variant: $INPUT.phone,
};

export const Region = TemplateStory.bind({});
Region.args = {
  variant: $INPUT.region,
};

export const Place = TemplateStory.bind({});
Place.args = {
  variant: $INPUT.place,
};

export const Guests = TemplateStory.bind({});
Guests.args = {
  variant: $INPUT.guests,
};

export const Address = TemplateStory.bind({});
Address.args = {
  variant: $INPUT.address,
};

export const Select = TemplateStory.bind({});
Select.args = {
  variant: $INPUT.select,
};

export const Radio = TemplateStory.bind({});
Radio.args = {
  variant: $INPUT.radio,
};

export const Counter = TemplateStory.bind({});
Counter.args = {
  variant: $INPUT.counter,
};

export const Text = TemplateStory.bind({});
Text.args = {
  variant: $INPUT.text,
};

export const Checkbox = TemplateStory.bind({});
Checkbox.args = {
  variant: $INPUT.checkbox,
};
Checkbox.argTypes = {
  checked: {
    control: 'boolean',
  },
};

export const Textarea = TemplateStory.bind({});
Textarea.args = {
  variant: $INPUT.textarea,
};

export const Verify = TemplateStory.bind({});
Verify.args = {
  variant: $INPUT.verify,
};

export const Closed = TemplateStory.bind({});
Closed.args = {
  variant: $INPUT.closed,
};

export const Price = TemplateStory.bind({});
Price.args = {
  variant: $INPUT.price,
};

export const Photo = TemplateStory.bind({});
Photo.args = {
  variant: $INPUT.photo,
};
Photo.decorators = [
  (Story) => (
    <div style={{ maxWidth: 450 }}>
      <Story />
    </div>
  ),
];

export const Another = TemplateStory.bind({});
Another.args = {
  variant: $INPUT.another,
};
Another.decorators = [
  (Story) => (
    <div style={{ maxWidth: 250 }}>
      <Story />
    </div>
  ),
];
