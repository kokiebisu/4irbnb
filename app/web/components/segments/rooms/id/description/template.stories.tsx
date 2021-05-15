import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  DescriptionSegmentTemplate,
  DescriptionSegmentTemplateProps,
} from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Rooms/ID',
  component: DescriptionSegmentTemplate,
} as Meta;

const DescriptionSegmentTemplateStory: Story<DescriptionSegmentTemplateProps> = (
  args
) => <DescriptionSegmentTemplate {...args} />;

export const DescriptionSegment = DescriptionSegmentTemplateStory.bind({});
DescriptionSegment.args = {
  ...mockData,
};
