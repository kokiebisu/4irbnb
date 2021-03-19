import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Bar, BarProps, $BAR } from '..';

export default {
  title: 'Organisms/Bar',
  component: Bar,
  argTypes: { variant: { control: { disable: true } } },
} as Meta;

const TemplateStory: Story<BarProps> = (args) => <Bar {...args} />;

export const Paginate = TemplateStory.bind({});
Paginate.args = {
  variant: $BAR.paginate,
};

export const Covid = TemplateStory.bind({});
Covid.args = {
  variant: $BAR.covid,
};

export const Progress = TemplateStory.bind({});
Progress.args = {
  variant: $BAR.progress,
};
Progress.argTypes = {
  percentage: {
    control: 'number',
  },
};

export const Search = TemplateStory.bind({});
Search.args = {
  variant: $BAR.search,
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
      type: 'select',
      options: [null, 'location', 'checkin', 'checkout', 'guests'],
    },
  },
  type: {
    control: {
      type: 'select',
      options: ['stay', 'experiences'],
    },
  },
};

export const Create = TemplateStory.bind({});
Create.args = {
  variant: $BAR.create,
};

export const Menu = TemplateStory.bind({});
Menu.args = {
  variant: $BAR.menu,
};

export const Availability = TemplateStory.bind({});
Availability.args = {
  variant: $BAR.availability,
};

export const Filters = TemplateStory.bind({});
Filters.args = {
  variant: $BAR.filters,
};
