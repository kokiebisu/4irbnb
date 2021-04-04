import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Bar, BarProps, $Bar } from '@bar';

export default {
  title: 'Organisms/Bar',
  component: Bar,
  argTypes: { variant: { control: { disable: true } } },
} as Meta;

const BarStory: Story<BarProps> = (args) => <Bar {...args} />;

export const Paginate = BarStory.bind({});
Paginate.args = {
  variant: $Bar.PAGINATE,
};

export const Covid = BarStory.bind({});
Covid.args = {
  variant: $Bar.COVID,
};

export const Progress = BarStory.bind({});
Progress.args = {
  variant: $Bar.PROGRESS,
};
Progress.argTypes = {
  percentage: {
    control: 'number',
  },
};

export const Search = BarStory.bind({});
Search.args = {
  variant: $Bar.SEARCH,
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

export const Create = BarStory.bind({});
Create.args = {
  variant: $Bar.CREATE,
};

export const Menu = BarStory.bind({});
Menu.args = {
  variant: $Bar.MENU,
};

export const Availability = BarStory.bind({});
Availability.args = {
  variant: $Bar.AVAILABILITY,
};

export const Filters = BarStory.bind({});
Filters.args = {
  variant: $Bar.FILTERS,
};
