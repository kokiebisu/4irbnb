import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  MultipleSegmentTemplate,
  MultipleSegmentTemplateProps,
} from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/S/Homes',
  component: MultipleSegmentTemplate,
} as Meta;

const MultipleSegmentTemplateStory: Story<MultipleSegmentTemplateProps> = (
  args
) => <MultipleSegmentTemplate {...args} />;

export const MultipleSegment = MultipleSegmentTemplateStory.bind({});
MultipleSegment.args = {
  ...mockData,
};
