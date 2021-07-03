import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PhotosSegmentTemplate, PhotosSegmentTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Become-A-Host',
  component: PhotosSegmentTemplate,
} as Meta;

const SegmentStory: Story<PhotosSegmentTemplateProps> = (args) => (
  <PhotosSegmentTemplate {...args} />
);

export const Photos = SegmentStory.bind({});
Photos.args = {
  ...mockData,
};
