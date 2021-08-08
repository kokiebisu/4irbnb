import React from "react";
import { Story, Meta } from "@storybook/react";
import { BannerSegmentTemplate } from "./template";

export default {
  title: "Templates/Host/Homes",
  component: BannerSegmentTemplate,
} as Meta;

const BannerSegmentTemplateStory: Story<{}> = (args) => (
  <BannerSegmentTemplate {...args} />
);

export const BannerSegment = BannerSegmentTemplateStory.bind({});
BannerSegment.args = {};
