import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Input, InputProps } from "@input";

import * as $input from "@input/variants";

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
  variant: $input.EMAIL,
};

export const password = TemplateStory.bind({});
password.args = {
  variant: $input.PASSWORD,
};

export const name = TemplateStory.bind({});
name.args = {
  variant: $input.NAME,
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
  variant: $input.BIRTHDATE,
};

export const phone = TemplateStory.bind({});
phone.args = {
  variant: $input.PHONE,
};

export const region = TemplateStory.bind({});
region.args = {
  variant: $input.REGION,
};

export const place = TemplateStory.bind({});
place.args = {
  variant: $input.PLACE,
};

export const guests = TemplateStory.bind({});
guests.args = {
  variant: $input.GUESTS,
};

export const address = TemplateStory.bind({});
address.args = {
  variant: $input.ADDRESS,
};

export const select = TemplateStory.bind({});
select.args = {
  variant: $input.SELECT,
};

export const radio = TemplateStory.bind({});
radio.args = {
  variant: $input.RADIO,
};

export const counter = TemplateStory.bind({});
counter.args = {
  variant: $input.COUNTER,
};

export const text = TemplateStory.bind({});
text.args = {
  variant: $input.TEXT,
};

export const checkbox = TemplateStory.bind({});
checkbox.args = {
  variant: $input.CHECKBOX,
};
checkbox.argTypes = {
  checked: {
    control: "boolean",
  },
};

export const textarea = TemplateStory.bind({});
textarea.args = {
  variant: $input.TEXTAREA,
};

export const verify = TemplateStory.bind({});
verify.args = {
  variant: $input.VERIFY,
};

export const closed = TemplateStory.bind({});
closed.args = {
  variant: $input.CLOSED,
};

export const price = TemplateStory.bind({});
price.args = {
  variant: $input.PRICE,
};

export const photo = TemplateStory.bind({});
photo.args = {
  variant: $input.PHOTO,
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
  variant: $input.ANOTHER,
};
another.decorators = [
  (Story) => (
    <div style={{ maxWidth: 250 }}>
      <Story />
    </div>
  ),
];
