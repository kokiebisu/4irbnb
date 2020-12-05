import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Input } from "./input.component";

import { InputProps } from "./props";

export default {
  title: "Design System/Atoms/Input",
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

const InputStory: Story<InputProps> = (args) => <Input {...args} />;

export const email = InputStory.bind({});
email.args = {
  type: "email",
};

export const password = InputStory.bind({});
password.args = {
  type: "password",
};

export const name = InputStory.bind({});
name.args = {
  type: "name",
};
name.argTypes = {
  name: {
    control: {
      type: "select",
      options: ["firstname", "lastname"],
    },
  },
};

export const birthdate = InputStory.bind({});
birthdate.args = {
  type: "birthdate",
};

export const phone = InputStory.bind({});
phone.args = {
  type: "phone",
};

export const region = InputStory.bind({});
region.args = {
  type: "region",
};

export const place = InputStory.bind({});
place.args = {
  type: "place",
};

export const guests = InputStory.bind({});
guests.args = {
  type: "guests",
};

export const address = InputStory.bind({});
address.args = {
  type: "address",
};

export const select = InputStory.bind({});
select.args = {
  type: "select",
};

export const radio = InputStory.bind({});
radio.args = {
  type: "radio",
};

export const counter = InputStory.bind({});
counter.args = {
  type: "counter",
};

export const text = InputStory.bind({});
text.args = {
  type: "text",
};

export const checkbox = InputStory.bind({});
checkbox.args = {
  type: "checkbox",
};
checkbox.argTypes = {
  checked: {
    control: "boolean",
  },
};

export const textarea = InputStory.bind({});
textarea.args = {
  type: "textarea",
};
