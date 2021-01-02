import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Template, TemplateProps } from "@template/d/onlinehost";

export default {
  title: "Templates/D/OnlineHosts",
  component: Template,
  argTypes: {
    onClick: { action: "clicked" },
    type: { control: { disable: true } },
    extendsTo: { control: { disable: true } },
  },
} as Meta;

const TemplateStory: Story<TemplateProps> = (args) => <Template {...args} />;

export const More = TemplateStory.bind({});
More.args = {
  variant: "more",
};

export const Back = TemplateStory.bind({});
Back.args = {
  variant: "back",
};

export const Sharing = TemplateStory.bind({});
Sharing.args = {
  variant: "sharing",
};

export const Works = TemplateStory.bind({});
Works.args = {
  variant: "works",
};

export const Faq = TemplateStory.bind({});
Faq.args = {
  variant: "faq",
};

export const Banner = TemplateStory.bind({});
Banner.args = {
  variant: "banner",
};
