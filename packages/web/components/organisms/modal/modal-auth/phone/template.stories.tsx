import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  PhonePrototypeTemplate,
  PhonePrototypeTemplateProps,
} from "./template";

export default {
  title: "Organisms/Modal/Auth/Phone",
  component: PhonePrototypeTemplate,
} as Meta;

const PhonePrototypeStory: Story<PhonePrototypeTemplateProps> = (args) => (
  <PhonePrototypeTemplate {...args} />
);

export const Phone = PhonePrototypeStory.bind({});
Phone.args = {
  region: "",
  regionErrors: "",
  tel: "",
  telErrors: "",
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
  handleSubmit: () => alert("handleSubmit"),
  handleRegionChange: () => alert("handleRegionChange"),
  handlePhoneNumberChange: () => alert("handlePhoneNumberChange"),
  emailSwitchButton: {
    name: "Email",
    icon: {
      variant: "fill" as const,
      fillType: "email" as const,
      width: 17,
    },
    handleClick: () => alert("handleEmailChange"),
  },
};
