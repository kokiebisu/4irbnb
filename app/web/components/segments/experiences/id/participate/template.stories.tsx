import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  ParticipateSegmentTemplate,
  ParticipateSegmentTemplateProps,
} from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Experiences/ID',
  component: ParticipateSegmentTemplate,
} as Meta;

const ParticipateSegmentTemplateStory: Story<ParticipateSegmentTemplateProps> = (
  args
) => <ParticipateSegmentTemplate {...args} />;

export const ParticipateSegment = ParticipateSegmentTemplateStory.bind({});
ParticipateSegment.args = {
  ...mockData,
};
