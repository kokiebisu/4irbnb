import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Template, $Template, TemplateProps } from ".";

export default {
  title: "Templates/Host/Homes",
  component: Template,
  argTypes: {
    onClick: { action: "clicked" },
    extendsTo: { control: { disable: true } },
  },
} as Meta;

const TemplateStory: Story<TemplateProps> = (args) => <Template {...args} />;

export const Help = TemplateStory.bind({});
Help.args = {
  variant: $Template.HELP,
};

// export const Community = TemplateStory.bind({});
// Community.args = {
//   variant: $Template.COMMUNITY,
// };

// export const Priority = TemplateStory.bind({});
// Priority.args = {
//   variant: $Template.PRIORITY,
// };

// export const Ready = TemplateStory.bind({});
// Ready.args = {
//   variant: $Template.READY,
// };

// export const All = TemplateStory.bind({});
// All.args = {
//   variant: $Template.ALL,
// };

// export const Banner = TemplateStory.bind({});
// Banner.args = {
//   variant: $Template.BANNER,
// };

// export const Hosting = TemplateStory.bind({});
// Hosting.args = {
//   variant: $Template.HOSTING,
// };
