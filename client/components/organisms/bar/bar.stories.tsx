import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { BarProps } from "./props";
import { Bar } from "./bar.component";

export default {
  title: "Design System/Organisms/Bar",
  component: Bar,
  argTypes: { type: { control: { disable: true } } },
} as Meta;

const BarStory: Story<BarProps> = (args) => <Bar {...args} />;

export const paginate = BarStory.bind({});
paginate.args = {
  type: "paginate",
};

export const covid = BarStory.bind({});
covid.args = {
  type: "covid",
};

export const progress = BarStory.bind({});
progress.args = {
  type: "progress",
};
progress.argTypes = {
  percentage: {
    control: "number",
  },
};
