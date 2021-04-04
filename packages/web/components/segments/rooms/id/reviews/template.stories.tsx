import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ReviewsTemplate, ReviewsTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Rooms/ID',
  component: ReviewsTemplate,
} as Meta;

const ReviewsTemplateStory: Story<ReviewsTemplateProps> = (args) => (
  <ReviewsTemplate {...args} />
);

export const Reviews = ReviewsTemplateStory.bind({});
Reviews.args = {
  ...mockData,
};
