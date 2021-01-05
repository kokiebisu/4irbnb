import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Bar, BarProps } from "@bar";

export default {
  title: "Organisms/Bar",
  component: Bar,
  argTypes: { type: { control: { disable: true } } },
} as Meta;

const TemplateStory: Story<BarProps> = (args) => <Bar {...args} />;

export const paginate = TemplateStory.bind({});
paginate.args = {
  variant: "paginate",
};

export const covid = TemplateStory.bind({});
covid.args = {
  variant: "covid",
};

export const progress = TemplateStory.bind({});
progress.args = {
  variant: "progress",
};
progress.argTypes = {
  percentage: {
    control: "number",
  },
};

export const search = TemplateStory.bind({});
search.args = {
  variant: "search",
};
search.decorators = [
  (Story) => (
    <div style={{ maxWidth: 720 }}>
      <Story />
    </div>
  ),
];
search.argTypes = {
  selected: {
    control: {
      type: "select",
      options: [null, "location", "checkin", "checkout", "guests"],
    },
  },
};

export const create = TemplateStory.bind({});
create.args = {
  variant: "create",
};

export const menu = TemplateStory.bind({});
menu.args = {
  variant: "menu",
};

export const Availability = TemplateStory.bind({});
Availability.args = {
  variant: "availability",
};
