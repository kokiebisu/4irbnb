import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Prototype, PrototypeProps } from "@prototype";

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

export const login = TemplateStory.bind({});
login.args = {
  variant: "login",
};

export const signup = TemplateStory.bind({});
signup.args = {
  variant: "signup",
};

export const forgotpassword = TemplateStory.bind({});
forgotpassword.args = {
  variant: "forgotpassword",
};

export const exists = TemplateStory.bind({});
exists.args = {
  variant: "exists",
};
