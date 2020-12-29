import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Input, InputProps } from "@input/input.component";

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
  variant: "email",
};

export const password = TemplateStory.bind({});
password.args = {
  variant: "password",
};

export const name = TemplateStory.bind({});
name.args = {
  variant: "name",
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
  variant: "birthdate",
};

export const phone = TemplateStory.bind({});
phone.args = {
  variant: "phone",
};

export const region = TemplateStory.bind({});
region.args = {
  variant: "region",
};

export const place = TemplateStory.bind({});
place.args = {
  variant: "place",
};

export const guests = TemplateStory.bind({});
guests.args = {
  variant: "guests",
};

export const address = TemplateStory.bind({});
address.args = {
  variant: "address",
};

export const select = TemplateStory.bind({});
select.args = {
  variant: "select",
};

export const radio = TemplateStory.bind({});
radio.args = {
  variant: "radio",
};

export const counter = TemplateStory.bind({});
counter.args = {
  variant: "counter",
};

export const text = TemplateStory.bind({});
text.args = {
  variant: "text",
};

export const checkbox = TemplateStory.bind({});
checkbox.args = {
  variant: "checkbox",
};
checkbox.argTypes = {
  checked: {
    control: "boolean",
  },
};

export const textarea = TemplateStory.bind({});
textarea.args = {
  variant: "textarea",
};

export const verify = TemplateStory.bind({});
verify.args = {
  variant: "verify",
};

export const closed = TemplateStory.bind({});
closed.args = {
  variant: "closed",
};

export const price = TemplateStory.bind({});
price.args = {
  variant: "price",
};

export const photo = TemplateStory.bind({});
photo.args = {
  variant: "photo",
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
  variant: "another",
};
another.decorators = [
  (Story) => (
    <div style={{ maxWidth: 250 }}>
      <Story />
    </div>
  ),
];
