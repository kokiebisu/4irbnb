import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  CategorySegmentTemplate,
  CategorySegmentTemplateProps,
} from "./template";
import * as mockData from "./mock";

export default {
  title: "Templates/Index",
  component: CategorySegmentTemplate,
} as Meta;

const CategorySegmentTemplateStory: Story<CategorySegmentTemplateProps> = (
  args
) => <CategorySegmentTemplate {...args} />;

export const Category = CategorySegmentTemplateStory.bind({});
Category.args = {
  ...mockData,
};
