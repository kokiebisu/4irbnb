import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Panel, PanelProps, $Panel } from "..";

export default {
  title: "Molecules/Panel",
  component: Panel,
} as Meta;

const TemplateStory: Story<PanelProps> = (args) => <Panel {...args} />;

export const Experience = TemplateStory.bind({});
Experience.args = {
  variant: $Panel.EXPERIENCE,
};

export const Room = TemplateStory.bind({});
Room.args = {
  variant: $Panel.ROOM,
};
