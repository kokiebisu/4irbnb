import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Section, SectionProps } from './section.component';

export default {
  title: 'Design System/Organisms/Section',
  component: Section,
  argTypes: { onPress: { action: 'clicked' } },
} as Meta;

const SectionTemplate: Story<SectionProps> = (args) => <Section {...args} />;

export const stay = SectionTemplate.bind({});
stay.args = {
  type: 'stay',
  pagination: false,
};

export const stayWithPagination = SectionTemplate.bind({});
stayWithPagination.args = {
  type: 'stay',
  pagination: true,
};

export const stayWithDescription = SectionTemplate.bind({});
stayWithPagination.args = {
  type: 'stay',
  pagination: false,
  description:
    'Head outdoors for less crowded spaces with more room to connect.',
};
