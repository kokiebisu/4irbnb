import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ReviewsTemplate, ReviewsTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Index',
  component: ReviewsTemplate,
} as Meta;

const TemplateStory: Story<ReviewsTemplateProps> = (args) => (
  <ReviewsTemplate {...args} />
);

export const Reviews = TemplateStory.bind({});
Reviews.args = {
  ...mockData,
};
