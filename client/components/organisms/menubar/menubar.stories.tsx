import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { MenuBar } from "./menubar.component";
import { MenuBarProps } from "./props";

export default {
  title: "Design System/Organisms/MenuBar",
  component: MenuBar,
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const MenuBarTemplate: Story<MenuBarProps> = (args) => <MenuBar {...args} />;

export const basic = MenuBarTemplate.bind({});
basic.args = {};
