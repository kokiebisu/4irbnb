import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Panel, PanelProps } from "@panel";

export default {
  title: "Molecules/Panel",
  component: Panel,
} as Meta;

const TemplateStory: Story<PanelProps> = (args) => <Panel {...args} />;

export const Experience = TemplateStory.bind({});
Experience.args = {
  variant: "experience",
};
Experience.decorators = [
  (Story) => (
    <div style={{ maxWidth: 1280 }}>
      <Story />
    </div>
  ),
];

export const Room = TemplateStory.bind({});
Room.args = {
  variant: "room",
};
Room.decorators = [
  (Story) => (
    <div style={{ maxWidth: 1280 }}>
      <Story />
    </div>
  ),
];
