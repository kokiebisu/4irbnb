import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  BedroomsSegmentTemplate,
  BedroomsSegmentTemplateProps,
} from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/D/OnlineHosts',
  component: BedroomsSegmentTemplate,
} as Meta;

const BedroomsBecomeAHostTemplateStory: Story<BedroomsSegmentTemplateProps> = (
  args
) => <BedroomsSegmentTemplate {...args} />;

export const BedroomsBecomeAHost = BedroomsBecomeAHostTemplateStory.bind({});
BedroomsBecomeAHost.args = {
  ...mockData,
};
