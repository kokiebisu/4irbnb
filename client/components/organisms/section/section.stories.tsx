import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Section, SectionProps } from './section.component';
import { horizontals } from '../../../data';
import { typeStays } from '../../../content';

export default {
  title: 'Design System/Organisms/Section',
  component: Section,
  argTypes: { onPress: { action: 'clicked' } },
} as Meta;

const SectionTemplate: Story<SectionProps> = (args) => <Section {...args} />;

export const categories = SectionTemplate.bind({});
categories.args = {
  type: 'category',
};

export const stayTypes = SectionTemplate.bind({});
stayTypes.args = {
  type: 'stay',
  carouselType: 'stayTypes',
};

export const stayWithPagination = SectionTemplate.bind({});
stayWithPagination.args = {
  type: 'stay',
  pagination: true,
  save: true,
  isDescription: true,
};

export const twoRows = SectionTemplate.bind({});
twoRows.args = {
  type: 'stay',
  save: true,
  isDescription: true,
};
