import React from "react";
import { Story, Meta } from "@storybook/react";
import { NearbySegmentTemplate, NearbySegmentTemplateProps } from "./template";
import * as mockData from "./mock";

export default {
  title: "Templates/Index",
  component: NearbySegmentTemplate,
} as Meta;

const NearbySegmentTemplateStory: Story<NearbySegmentTemplateProps> = (
  args
) => <NearbySegmentTemplate {...args} />;

export const Nearby = NearbySegmentTemplateStory.bind({});
Nearby.args = {
  ...mockData,
};
