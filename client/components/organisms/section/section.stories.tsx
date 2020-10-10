import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Section, SectionProps } from './section.component';
import { horizontals } from '../../../data';

export default {
  title: 'Design System/Organisms/Section',
  component: Section,
  argTypes: { onPress: { action: 'clicked' } },
} as Meta;

const SectionTemplate: Story<SectionProps> = (args) => <Section {...args} />;

export const stayTypes = SectionTemplate.bind({});
stayTypes.args = {
  type: 'stay',
  pagination: false,
  title: 'Explore all types of unique stays',
  description: null,
  carouselType: 'stayTypes',
};

export const stayWithPagination = SectionTemplate.bind({});
stayWithPagination.args = {
  type: 'stay',
  pagination: true,
  title: 'Nearby stays in nature',
  description:
    'Head outdoors for less crowded spaces with more room to connect.',
  carouselType: 'pagination',
  save: true,
  showAll: { url: '/', description: 'Show all nearby imaginative stays' },
  cards: horizontals,
};

export const stayWithDescription = SectionTemplate.bind({});
stayWithDescription.args = {
  type: 'stay',
  pagination: false,
  title: 'Unique stays around the world',
  description: 'Dream about your future vacation by saving these unique homes.',
  showAll: { url: '/', description: 'Show all unique stays' },
};
