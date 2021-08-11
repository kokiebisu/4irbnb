import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  CharacteristicsSegmentTemplate,
  CharacteristicsSegmentTemplateProps,
} from "./template";
// import * as mockData from "./mock";

export default {
  title: "Templates/Experiences/ID",
  component: CharacteristicsSegmentTemplate,
} as Meta;

const CharacteristicsSegmentTemplateStory: Story<CharacteristicsSegmentTemplateProps> = (
  args
) => <CharacteristicsSegmentTemplate {...args} />;

export const CharacteristicsSegment = CharacteristicsSegmentTemplateStory.bind(
  {}
);
CharacteristicsSegment.args = {
  // ...mockData,
};
