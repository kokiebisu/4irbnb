import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Input, InputProps, $Input } from ".";

export default {
  title: "Atoms/Input",
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
  variant: $Input.EMAIL,
};

export const Password = TemplateStory.bind({});
Password.args = {
  variant: $Input.PASSWORD,
};

export const Name = TemplateStory.bind({});
Name.args = {
  variant: $Input.NAME,
};
Name.argTypes = {
  name: {
    control: {
      type: "select",
      options: ["firstname", "lastname"],
    },
  },
};

export const Birthdate = TemplateStory.bind({});
Birthdate.args = {
  variant: $Input.BIRTHDATE,
};

export const Phone = TemplateStory.bind({});
Phone.args = {
  variant: $Input.PHONE,
};

export const Region = TemplateStory.bind({});
Region.args = {
  variant: $Input.REGION,
};

export const Place = TemplateStory.bind({});
Place.args = {
  variant: $Input.PLACE,
};

export const Guests = TemplateStory.bind({});
Guests.args = {
  variant: $Input.GUESTS,
};

export const Address = TemplateStory.bind({});
Address.args = {
  variant: $Input.ADDRESS,
};

export const Select = TemplateStory.bind({});
Select.args = {
  variant: $Input.SELECT,
};

export const Radio = TemplateStory.bind({});
Radio.args = {
  variant: $Input.RADIO,
};

export const Counter = TemplateStory.bind({});
Counter.args = {
  variant: $Input.COUNTER,
};

export const Text = TemplateStory.bind({});
Text.args = {
  variant: $Input.TEXT,
};

export const Checkbox = TemplateStory.bind({});
Checkbox.args = {
  variant: $Input.CHECKBOX,
};
Checkbox.argTypes = {
  checked: {
    control: "boolean",
  },
};

export const Textarea = TemplateStory.bind({});
Textarea.args = {
  variant: $Input.TEXTAREA,
};

export const Verify = TemplateStory.bind({});
Verify.args = {
  variant: $Input.VERIFY,
};

export const Closed = TemplateStory.bind({});
Closed.args = {
  variant: $Input.CLOSED,
};

export const Price = TemplateStory.bind({});
Price.args = {
  variant: $Input.PRICE,
};

export const Photo = TemplateStory.bind({});
Photo.args = {
  variant: $Input.PHOTO,
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
  variant: $Input.ANOTHER,
};
Another.decorators = [
  (Story) => (
    <div style={{ maxWidth: 250 }}>
      <Story />
    </div>
  ),
];
