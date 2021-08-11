import React from "react";
import { Story, Meta } from "@storybook/react";
import { WideSegmentTemplate, WideSegmentTemplateProps } from "./template";

export default {
  title: "Templates/Index",
  component: WideSegmentTemplate,
} as Meta;

const WideSegmentTemplateStory: Story<WideSegmentTemplateProps> = (args) => (
  <WideSegmentTemplate {...args} />
);

export const Wide = WideSegmentTemplateStory.bind({});
Wide.args = {
  title: "Title",
  description: "Description",
  bannerImg: "",
  handleRedirectToHostPage: () => alert(""),
};
