import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Template, TemplateProps } from "@template/stays";

export default {
  title: "Templates/Stays",
  component: Template,
  argTypes: {
    onClick: { action: "clicked" },
    type: { control: { disable: true } },
    extendsTo: { control: { disable: true } },
  },
} as Meta;

const TemplateStory: Story<TemplateProps> = (args) => <Template {...args} />;

export const Help = TemplateStory.bind({});
Help.args = {
  variant: "help",
};

export const Multiple = TemplateStory.bind({});
Multiple.args = {
  variant: "multiple",
};

export const Homes = TemplateStory.bind({});
Homes.args = {
  variant: "homes",
};

export const All = TemplateStory.bind({});
All.args = {
  variant: "All",
};

export const Also = TemplateStory.bind({});
Also.args = {
  variant: "also",
};

export const Priority = TemplateStory.bind({});
Priority.args = {
  variant: "priority",
};

export const Ready = TemplateStory.bind({});
Ready.args = {
  variant: "ready",
};
