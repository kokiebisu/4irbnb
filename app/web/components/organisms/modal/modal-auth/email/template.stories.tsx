import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  EmailPrototypeTemplate,
  EmailPrototypeTemplateProps,
} from "./template";

export default {
  title: "Prototypes/Auth",
  component: EmailPrototypeTemplate,
} as Meta;

const EmailPrototypeStory: Story<EmailPrototypeTemplateProps> = (args) => (
  <EmailPrototypeTemplate {...args} />
);

export const Auth = EmailPrototypeStory.bind({});
Auth.args = {};
