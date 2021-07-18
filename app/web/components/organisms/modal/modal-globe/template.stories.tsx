import React from "react";
import { Story, Meta } from "@storybook/react";
import { GlobeModalTemplate } from "./template";

export default {
  title: "Organisms/Modal",
  component: GlobeModalTemplate,
} as Meta;

const ModalStory: Story<{}> = (args) => <GlobeModalTemplate {...args} />;

export const Globe = ModalStory.bind({});
Globe.args = {};
