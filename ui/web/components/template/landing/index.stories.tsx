import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Template, TemplateProps } from "@template/landing";

export default {
  title: "Templates/Landing",
  component: Template,
  argTypes: {
    onClick: { action: "clicked" },
    type: { control: { disable: true } },
    extendsTo: { control: { disable: true } },
  },
} as Meta;

const TemplateStory: Story<TemplateProps> = (args) => <Template {...args} />;

export const Categories = TemplateStory.bind({});
Categories.args = {
  variant: "category",
};

export const Nearby = TemplateStory.bind({});
Nearby.args = {
  variant: "nearby",
};

export const Online = TemplateStory.bind({});
Online.args = {
  variant: "online",
};

Online.argTypes = {
  dark: {
    control: "boolean",
  },
};
