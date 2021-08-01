import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  PhonePrototypeTemplate,
  PhonePrototypeTemplateProps,
} from "./template";

export default {
  title: "Prototypes/Auth",
  component: PhonePrototypeTemplate,
} as Meta;

const PhonePrototypeStory: Story<PhonePrototypeTemplateProps> = (args) => (
  <PhonePrototypeTemplate {...args} />
);

export const Auth = PhonePrototypeStory.bind({});
Auth.args = {};
