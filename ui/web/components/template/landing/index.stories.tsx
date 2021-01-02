import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Template, TemplateProps } from "@template/landing";

export default {
  title: "Template/Landing",
  component: Template,
  argTypes: {
    onClick: { action: "clicked" },
    type: { control: { disable: true } },
    extendsTo: { control: { disable: true } },
  },
} as Meta;

const TemplateStory: Story<TemplateProps> = (args) => <Template {...args} />;

export const categories = TemplateStory.bind({});
categories.args = {
  variant: "category",
};
