import React from "react";
import { Story, Meta } from "@storybook/react";
import { WideSegmentTemplate, WideSegmentTemplateProps } from "./template";
import * as mockData from "./mock";

export default {
  title: "Templates/Index",
  component: WideSegmentTemplate,
} as Meta;

const WideSegmentTemplateStory: Story<WideSegmentTemplateProps> = (args) => (
  <WideSegmentTemplate {...args} />
);

export const Wide = WideSegmentTemplateStory.bind({});
Wide.args = {
  ...mockData,
  handleRedirectToHostPage: () => alert("yo"),
};
