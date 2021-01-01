import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Prototype, PrototypeProps } from "@prototype/auth";

/** styles */
import color from "@styles/color.module.scss";
import layout from "@styles/layout.module.scss";
import shape from "@styles/shape.module.scss";
import space from "@styles/space.module.scss";
import button from "@button/button.module.scss";

export default {
  title: "Prototypes/Auth",
  component: Prototype,
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const TemplateStory: Story<PrototypeProps> = (args) => <Prototype {...args} />;

export const auth = TemplateStory.bind({});
auth.args = {
  variant: "auth",
  extendsTo: [
    button["hover__auth"],
    color["bg--transparent"],
    layout["block"],
    shape["w--full"],
    space["p-h--12"],
    space["p-v--12"],
    shape["br--8"],
  ].join(" "),
};

export const Login = TemplateStory.bind({});
Login.args = {
  variant: "login",
};

export const Signup = TemplateStory.bind({});
Signup.args = {
  variant: "signup",
};

export const ForgotPassword = TemplateStory.bind({});
ForgotPassword.args = {
  variant: "forgotpassword",
};

export const Exists = TemplateStory.bind({});
Exists.args = {
  variant: "exists",
};
