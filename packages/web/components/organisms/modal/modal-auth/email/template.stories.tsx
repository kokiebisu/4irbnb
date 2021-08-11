import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  EmailPrototypeTemplate,
  EmailPrototypeTemplateProps,
} from "./template";

export default {
  title: "Organisms/Modal/Auth",
  component: EmailPrototypeTemplate,
} as Meta;

const EmailPrototypeStory: Story<EmailPrototypeTemplateProps> = (args) => (
  <EmailPrototypeTemplate {...args} />
);

export const Email = EmailPrototypeStory.bind({});
Email.args = {
  authMethods: [
    {
      name: "Facebook",
      icon: {
        variant: "others" as const,
        othersType: "facebookLogo" as const,
        width: 19,
      },
      handleClick: () => alert("handleClick"),
    },
    {
      name: "Google",
      icon: {
        variant: "others" as const,
        othersType: "googleLogo" as const,
        width: 17,
      },
      handleClick: () => alert("handleClick"),
    },
    {
      name: "Apple",
      icon: {
        variant: "others" as const,
        othersType: "appleLogo" as const,
        width: 17,
      },
      handleClick: () => alert("handleClick"),
    },
  ],
  phoneSwitchButton: {
    name: "Phone",
    icon: {
      variant: "others" as const,
      othersType: "phone" as const,
      width: 17,
    },
    handleClick: () => alert("handlePhoneLogin"),
  },
};
