import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Template, TemplateProps, $Template } from ".";

export default {
  title: "Templates/Index",
  component: Template,
  argTypes: {
    onClick: { action: "clicked" },
    type: { control: { disable: true } },
    extendsTo: { control: { disable: true } },
  },
} as Meta;

const TemplateStory: Story<TemplateProps> = (args) => <Template {...args} />;

export const Banner = TemplateStory.bind({});
Banner.args = {
  variant: $Template.BANNER,
};
Banner.parameters = {
  storyshots: { disable: true },
};

export const Categories = TemplateStory.bind({});
Categories.args = {
  variant: $Template.CATEGORY,
};

export const Nearby = TemplateStory.bind({});
Nearby.args = {
  variant: $Template.NEARBY,
};

export const Online = TemplateStory.bind({});
Online.args = {
  variant: $Template.ONLINE,
};

Online.argTypes = {
  dark: {
    control: "boolean",
  },
};

export const Destinations = TemplateStory.bind({});
Destinations.args = {
  variant: $Template.DESTINATIONS,
};
