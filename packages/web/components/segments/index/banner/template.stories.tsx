import React from "react";
import { Story, Meta } from "@storybook/react";
import { BannerSegmentTemplate, BannerSegmentTemplateProps } from "./template";
import * as mockData from "./mock";

export default {
  title: "Templates/Index",
  component: BannerSegmentTemplate,
} as Meta;

const BannerSegmentTemplateStory: Story<BannerSegmentTemplateProps> = (
  args
) => <BannerSegmentTemplate {...args} />;

export const Banner = BannerSegmentTemplateStory.bind({});
Banner.args = {
  ...mockData,
};
