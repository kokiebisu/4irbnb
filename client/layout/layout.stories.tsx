import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { Layout, LayoutProps } from "./layout.component";

export default {
  title: "Design Systems/Layout",
  component: Layout,
} as Meta;

const TemplateStory: Story<LayoutProps> = (args) => <Layout {...args} />;

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

export const currency = TemplateStory.bind({});
currency.args = {
  variant: "currency",
};

export const input = TemplateStory.bind({});
input.args = {
  variant: "input",
};

export const location = TemplateStory.bind({});
location.args = {
  variant: "location",
};
