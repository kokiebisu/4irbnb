import React from "react";
import { Story, Meta } from "@storybook/react";
import { MenuModalTemplate, MenuModalTemplateProps } from "./template";

export default {
  title: "Organisms/Modal/Menu",
  component: MenuModalTemplate,
} as Meta;

const ModalStory: Story<MenuModalTemplateProps> = (args) => (
  <MenuModalTemplate {...args} />
);

export const Unauthenticated = ModalStory.bind({});
Unauthenticated.args = {
  topOptions: [
    {
      name: "Sign up",
      handleClick: () => alert("Clicked"),
      bold: true,
    },
    {
      name: "Login",
      handleClick: () => alert("Clicked"),
      bold: false,
    },
  ],
  bottomOptions: [
    {
      name: "Host your home",
      handleClick: () => alert("Clicked"),
      bold: false,
    },
    {
      name: "Host an experience",
      handleClick: () => alert("Clicked"),
      bold: false,
    },
    {
      name: "Help",
      handleClick: () => alert("Clicked"),
      bold: false,
    },
  ],
};

export const Authenticated = ModalStory.bind({});
Authenticated.args = {
  topOptions: [
    {
      name: "Login",
      handleClick: () => alert("Clicked"),
      bold: false,
    },
  ],
  bottomOptions: [
    {
      name: "Login",
      handleClick: () => alert("Clicked"),
      bold: false,
    },
  ],
};
