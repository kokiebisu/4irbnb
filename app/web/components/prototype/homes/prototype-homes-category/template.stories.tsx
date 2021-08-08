import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  CategoryPrototypeTemplate,
  CategoryPrototypeTemplateProps,
} from "./template";

export default {
  title: "Prototypes/Category",
  component: CategoryPrototypeTemplate,
} as Meta;

const CategoryPrototypeStory: Story<CategoryPrototypeTemplateProps> = (
  args
) => <CategoryPrototypeTemplate {...args} />;

export const Category = CategoryPrototypeStory.bind({});
Category.args = {
  filters: [
    {
      name: "he",
      selected: true,
    },
  ],
};
