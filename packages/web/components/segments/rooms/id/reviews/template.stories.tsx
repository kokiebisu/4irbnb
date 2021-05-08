import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  ReviewsSegmentTemplate,
  ReviewsSegmentTemplateProps,
} from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Rooms/ID',
  component: ReviewsSegmentTemplate,
} as Meta;

const ReviewsSegmentTemplateStory: Story<ReviewsSegmentTemplateProps> = (
  args
) => <ReviewsSegmentTemplate {...args} />;

export const ReviewsSegment = ReviewsSegmentTemplateStory.bind({});
ReviewsSegment.args = {
  ...mockData,
};
