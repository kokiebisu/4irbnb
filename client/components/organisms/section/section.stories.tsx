import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Section } from './section.component';

import { SectionProps } from './props';

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

export const panel = SectionTemplate.bind({});
panel.args = {
  type: 'panel',
};

export const panelSuperhost = SectionTemplate.bind({});
panelSuperhost.args = {
  type: 'panel',
  superhost: true,
};
