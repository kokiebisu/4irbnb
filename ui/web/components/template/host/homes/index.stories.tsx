import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Template, TemplateProps } from "@template/host/homes";

export default {
  title: "Templates/Host/Homes",
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

export const Community = TemplateStory.bind({});
Community.args = {
  variant: "community",
};

export const Priority = TemplateStory.bind({});
Priority.args = {
  variant: "priority",
};

export const Ready = TemplateStory.bind({});
Ready.args = {
  variant: "ready",
};

export const All = TemplateStory.bind({});
All.args = {
  variant: "all",
};

export const Banner = TemplateStory.bind({});
Banner.args = {
  variant: "banner",
};
