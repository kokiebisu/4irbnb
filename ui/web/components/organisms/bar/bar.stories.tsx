import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Bar, BarProps } from "@bar";

import * as $bar from "@bar/variants";

export default {
  title: "Organisms/Bar",
  component: Bar,
  argTypes: { variant: { control: { disable: true } } },
} as Meta;

const TemplateStory: Story<BarProps> = (args) => <Bar {...args} />;

export const Paginate = TemplateStory.bind({});
Paginate.args = {
  variant: $bar.PAGINATE,
};

export const Covid = TemplateStory.bind({});
Covid.args = {
  variant: $bar.COVID,
};

export const Progress = TemplateStory.bind({});
Progress.args = {
  variant: $bar.PROGRESS,
};
Progress.argTypes = {
  percentage: {
    control: "number",
  },
};

export const Search = TemplateStory.bind({});
Search.args = {
  variant: $bar.SEARCH,
};
Search.decorators = [
  (Story) => (
    <div style={{ maxWidth: 720 }}>
      <Story />
    </div>
  ),
];
Search.argTypes = {
  selected: {
    control: {
      type: "select",
      options: [null, "location", "checkin", "checkout", "guests"],
    },
  },
  type: {
    control: {
      type: "select",
      options: ["stay", "experiences"],
    },
  },
};

export const Create = TemplateStory.bind({});
Create.args = {
  variant: $bar.CREATE,
};

export const Menu = TemplateStory.bind({});
Menu.args = {
  variant: $bar.MENU,
};

export const Availability = TemplateStory.bind({});
Availability.args = {
  variant: $bar.AVAILABILITY,
};

export const Filters = TemplateStory.bind({});
Filters.args = {
  variant: $bar.FILTERS,
};
