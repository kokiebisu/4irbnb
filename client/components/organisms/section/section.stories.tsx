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

export const description = SectionTemplate.bind({});
description.args = {
  type: 'description',
};

description.decorators = [
  (Story) => (
    <div style={{ maxWidth: 600 }}>
      <Story />
    </div>
  ),
];

export const panelSuperhost = SectionTemplate.bind({});
panelSuperhost.args = {
  type: 'panel',
  superhost: true,
};

export const arrangements = SectionTemplate.bind({});
arrangements.args = {
  type: 'arrangements',
};

export const amenities = SectionTemplate.bind({});
amenities.args = {
  type: 'amenities',
};
amenities.decorators = [
  (Story) => (
    <div style={{ maxWidth: 600 }}>
      <Story />
    </div>
  ),
];

export const reviews = SectionTemplate.bind({});
reviews.args = {
  type: 'reviews',
};

export const host = SectionTemplate.bind({});
host.args = {
  type: 'host',
};
host.decorators = [
  (Story) => (
    <div style={{ maxWidth: 1280 }}>
      <Story />
    </div>
  ),
];

export const know = SectionTemplate.bind({});
know.args = {
  type: 'know',
};
