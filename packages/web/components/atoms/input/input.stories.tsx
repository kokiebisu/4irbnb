import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Input, InputProps, $Input } from "@input";

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

export const email = TemplateStory.bind({});
email.args = {
  variant: $Input.EMAIL,
};

export const password = TemplateStory.bind({});
password.args = {
  variant: $Input.PASSWORD,
};

export const name = TemplateStory.bind({});
name.args = {
  variant: $Input.NAME,
};
name.argTypes = {
  name: {
    control: {
      type: "select",
      options: ["firstname", "lastname"],
    },
  },
};

export const birthdate = TemplateStory.bind({});
birthdate.args = {
  variant: $Input.BIRTHDATE,
};

export const phone = TemplateStory.bind({});
phone.args = {
  variant: $Input.PHONE,
};

export const region = TemplateStory.bind({});
region.args = {
  variant: $Input.REGION,
};

export const place = TemplateStory.bind({});
place.args = {
  variant: $Input.PLACE,
};

export const guests = TemplateStory.bind({});
guests.args = {
  variant: $Input.GUESTS,
};

export const address = TemplateStory.bind({});
address.args = {
  variant: $Input.ADDRESS,
};

export const select = TemplateStory.bind({});
select.args = {
  variant: $Input.SELECT,
};

export const radio = TemplateStory.bind({});
radio.args = {
  variant: $Input.RADIO,
};

export const counter = TemplateStory.bind({});
counter.args = {
  variant: $Input.COUNTER,
};

export const text = TemplateStory.bind({});
text.args = {
  variant: $Input.TEXT,
};

export const checkbox = TemplateStory.bind({});
checkbox.args = {
  variant: $Input.CHECKBOX,
};
checkbox.argTypes = {
  checked: {
    control: "boolean",
  },
};

export const textarea = TemplateStory.bind({});
textarea.args = {
  variant: $Input.TEXTAREA,
};

export const verify = TemplateStory.bind({});
verify.args = {
  variant: $Input.VERIFY,
};

export const closed = TemplateStory.bind({});
closed.args = {
  variant: $Input.CLOSED,
};

export const price = TemplateStory.bind({});
price.args = {
  variant: $Input.PRICE,
};

export const photo = TemplateStory.bind({});
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

export const another = TemplateStory.bind({});
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
