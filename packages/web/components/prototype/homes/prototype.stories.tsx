import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Prototype, PrototypeProps, $Prototype } from '@prototype/homes';

export default {
  title: 'Prototypes/Homes',
  component: Prototype,
} as Meta;

const TemplateStory: Story<PrototypeProps> = (args) => <Prototype {...args} />;

export const Nearby = TemplateStory.bind({});
Nearby.args = {
  variant: $Prototype.NEARBY,
  city: 'Location',
  filterCount: 1,
  guests: 1000,
  average: 5.0,
  filters: [
    { name: 'Filter', selected: false },
    { name: 'Filter', selected: true },
    { name: 'Filter', selected: false },
    { name: 'Filter', selected: false },
    { name: 'Filter', selected: true },
  ],
};

export const Category = TemplateStory.bind({});
Category.args = {
  variant: $Prototype.CATEGORY,
  subtitle: 'Subtitle',
  stayType: 'tent',
  filterCount: 1,
  filters: [
    { name: 'Filter', selected: true },
    { name: 'Filter', selected: false },
    { name: 'Filter', selected: false },
    { name: 'Filter', selected: true },
    { name: 'Filter', selected: false },
  ],
};
