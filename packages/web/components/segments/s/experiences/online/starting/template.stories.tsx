import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  StartingSegmentTemplate,
  StartingSegmentTemplateProps,
} from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/S/Experiences/Online',
  component: StartingSegmentTemplate,
} as Meta;

const StartingSegmentTemplateStory: Story<StartingSegmentTemplateProps> = (
  args
) => <StartingSegmentTemplate {...args} />;

export const StartingSegment = StartingSegmentTemplateStory.bind({});
StartingSegment.args = {
  ...mockData,
};
