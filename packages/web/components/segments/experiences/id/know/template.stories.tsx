import React from "react";
import { Story, Meta } from "@storybook/react";
import { KnowSegmentTemplate } from "./template";
import * as mockData from "./mock";

export default {
  title: "Templates/Experiences/ID",
  component: KnowSegmentTemplate,
} as Meta;

const KnowSegmentTemplateStory: Story<{}> = (args) => (
  <KnowSegmentTemplate {...args} />
);

export const KnowSegment = KnowSegmentTemplateStory.bind({});
KnowSegment.args = {
  ...mockData,
};
