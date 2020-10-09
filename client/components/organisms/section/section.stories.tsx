import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Section, SectionProps } from './section.component';

export default {
  title: 'Design System/Organisms/Section',
  component: Section,
  argTypes: { onPress: { action: 'clicked' } },
} as Meta;

const SectionTemplate: Story<SectionProps> = (args) => <Section {...args} />;

export const typeStay = SectionTemplate.bind({});
typeStay.args = {
  type: 'typestay',
};
