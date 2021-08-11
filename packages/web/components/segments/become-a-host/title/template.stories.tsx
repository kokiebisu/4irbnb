import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TitleSegmentTemplate, TitleSegmentTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Become-A-Host',
  component: TitleSegmentTemplate,
} as Meta;

const SegmentStory: Story<TitleSegmentTemplateProps> = (args) => (
  <TitleSegmentTemplate {...args} />
);

export const Title = SegmentStory.bind({});
Title.args = {
  ...mockData,
};
