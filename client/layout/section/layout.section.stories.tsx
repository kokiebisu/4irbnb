import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Layout } from 'layout/layout.component';
import { LayoutProps } from '../props';

export default {
  title: 'Design System/Layout/Section',
  component: Layout,
} as Meta;

const SectionLayoutStory: Story<LayoutProps> = (args) => (
  <Layout type='section' {...args} />
);

export const landing = SectionLayoutStory.bind({});
landing.args = {
  sectionType: 'landing',
};

export const homes = SectionLayoutStory.bind({});
homes.args = {
  sectionType: 'homes',
};
