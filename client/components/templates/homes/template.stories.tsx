import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Template, TemplateProps } from "@template/template.component";

export default {
  title: "Templates/Homes",
  component: Template,
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const TemplateStory: Story<TemplateProps> = (args) => <Template {...args} />;

export const nearby = TemplateStory.bind({});
nearby.args = {
  variant: "nearby",
};

export const category = TemplateStory.bind({});
category.args = {
  variant: "category",
};
