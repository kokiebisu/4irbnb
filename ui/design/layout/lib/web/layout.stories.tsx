import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { Layout, LayoutProps, $Layout } from ".";

export default {
  title: "Layout",
  component: Layout,
} as Meta;

const TemplateStory: Story<LayoutProps> = (args) => <Layout {...args} />;

export const landing = TemplateStory.bind({});
landing.args = {
  variant: $Layout.LANDING,
};

export const homes = TemplateStory.bind({});
homes.args = {
  variant: $Layout.HOMES,
};

export const onlinehost = TemplateStory.bind({});
onlinehost.args = {
  variant: $Layout.ONLINEHOST,
};

export const currency = TemplateStory.bind({});
currency.args = {
  variant: $Layout.CURRENCY,
};

export const input = TemplateStory.bind({});
input.args = {
  variant: $Layout.INPUT,
};

export const location = TemplateStory.bind({});
location.args = {
  variant: $Layout.LOCATION,
};
