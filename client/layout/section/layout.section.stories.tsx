import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Layout, LayoutProps } from "../../layout/layout.component";

export default {
  title: "Design System/Layout/Section",
  component: Layout,
} as Meta;

const TemplateStory: Story<LayoutProps> = (args) => (
  <Layout type="section" {...args} />
);

export const landing = TemplateStory.bind({});
landing.args = {
  variant: "landing",
};

export const homes = TemplateStory.bind({});
homes.args = {
  variant: "homes",
};

export const onlinehost = TemplateStory.bind({});
onlinehost.args = {
  variant: "onlinehost",
};
