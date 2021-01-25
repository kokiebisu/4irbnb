import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Panel, PanelProps } from "@panel";

import * as $panel from "@panel/variants";

export default {
  title: "Molecules/Panel",
  component: Panel,
} as Meta;

const TemplateStory: Story<PanelProps> = (args) => <Panel {...args} />;

export const Experience = TemplateStory.bind({});
Experience.args = {
  variant: $panel.EXPERIENCE,
};

export const Room = TemplateStory.bind({});
Room.args = {
  variant: $panel.ROOM,
};
