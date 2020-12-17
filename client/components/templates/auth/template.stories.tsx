import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Template } from "../template.component";
import { ContextProvider } from "../../../context/provider";
import { TemplateProps } from "../props";

export default {
  title: "Design System/Templates/Auth",
  component: Template,
  argTypes: { onClick: { action: "clicked" } },
  decorators: [
    (Story) => (
      <ContextProvider>
        <Story />
      </ContextProvider>
    ),
  ],
} as Meta;

const TemplateStories: Story<TemplateProps> = (args) => <Template {...args} />;

export const auth = TemplateStories.bind({});
auth.args = {
  type: "auth",
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

// export const login = TemplateStories.bind({});
// login.args = {
//   type: 'login',
// };

// export const signup = TemplateStories.bind({});
// signup.args = {
//   type: 'signup',
// };

// export const forgotpassword = TemplateStories.bind({});
// forgotpassword.args = {
//   type: 'forgotpassword',
// };

// export const exists = TemplateStories.bind({});
// exists.args = {
//   type: 'exists',
// };
