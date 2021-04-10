import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SpacesSegmentTemplate, SpacesSegmentTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Become-A-Host',
  component: SpacesSegmentTemplate,
} as Meta;

const SegmentStory: Story<SpacesSegmentTemplateProps> = (args) => (
  <SpacesSegmentTemplate {...args} />
);

export const Spaces = SegmentStory.bind({});
Spaces.args = {
  ...mockData,
};
