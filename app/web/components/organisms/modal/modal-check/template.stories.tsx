import React from "react";
import { Story, Meta } from "@storybook/react";
import { CheckModalTemplate } from "./template";

export default {
  title: "Organisms/Modal",
  component: CheckModalTemplate,
} as Meta;

const ModalStory: Story<{}> = (args) => <CheckModalTemplate {...args} />;

export const Check = ModalStory.bind({});
Check.args = {};
