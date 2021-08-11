import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  DiscoverSegmentTemplate,
  DiscoverSegmentTemplateProps,
} from "./template";
import { categories } from "./content";

export default {
  title: "Templates/Index",
  component: DiscoverSegmentTemplate,
} as Meta;

const DiscoverSegmentTemplateStory: Story<DiscoverSegmentTemplateProps> = (
  args
) => <DiscoverSegmentTemplate {...args} />;

export const Discover = DiscoverSegmentTemplateStory.bind({});
Discover.args = {
  items: categories,
};
