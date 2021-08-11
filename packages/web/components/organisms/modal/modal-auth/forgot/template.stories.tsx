import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  ForgotPasswordPrototypeTemplate,
  ForgotPasswordPrototypeTemplateProps,
} from "./template";

export default {
  title: "Organisms/Modal/Auth",
  component: ForgotPasswordPrototypeTemplate,
} as Meta;

const ForgotPasswordPrototypeStory: Story<ForgotPasswordPrototypeTemplateProps> = (
  args
) => <ForgotPasswordPrototypeTemplate {...args} />;

export const ForgotPassword = ForgotPasswordPrototypeStory.bind({});
ForgotPassword.args = {
  handleSubmit: () => alert("handleSubmit"),
  handleEmailChange: () => alert("handleEmailChange"),
  email: "",
  emailErrors: "",
};
