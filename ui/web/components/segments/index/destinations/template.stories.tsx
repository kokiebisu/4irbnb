import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  DestinationsSegmentTemplate,
  DestinationsSegmentTemplateProps,
} from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Index',
  component: DestinationsSegmentTemplate,
} as Meta;

const DestinationsSegmentTemplateStory: Story<DestinationsSegmentTemplateProps> = (
  args
) => <DestinationsSegmentTemplate {...args} />;

export const DestinationsSegment = DestinationsSegmentTemplateStory.bind({});
DestinationsSegment.args = {
  ...mockData,
};
