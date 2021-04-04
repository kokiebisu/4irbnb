import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Layout, LayoutProps, $Layout } from '.';

export default {
  title: 'Layout',
  component: Layout,
} as Meta;

const LayoutStory: Story<LayoutProps> = (args) => <Layout {...args} />;

export const landing = LayoutStory.bind({});
landing.args = {
  variant: $Layout.LANDING,
};

export const homes = LayoutStory.bind({});
homes.args = {
  variant: $Layout.HOMES,
};

export const onlinehost = LayoutStory.bind({});
onlinehost.args = {
  variant: $Layout.ONLINEHOST,
};

export const currency = LayoutStory.bind({});
currency.args = {
  variant: $Layout.CURRENCY,
};

export const input = LayoutStory.bind({});
input.args = {
  variant: $Layout.INPUT,
};

export const location = LayoutStory.bind({});
location.args = {
  variant: $Layout.LOCATION,
};
