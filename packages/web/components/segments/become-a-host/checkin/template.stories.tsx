import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  CheckInSegmentTemplate,
  CheckInSegmentTemplateProps,
} from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/D/OnlineHosts',
  component: CheckInSegmentTemplate,
} as Meta;

const CheckInBecomeAHostTemplateStory: Story<CheckInSegmentTemplateProps> = (
  args
) => <CheckInSegmentTemplate {...args} />;

export const CheckInBecomeAHost = CheckInBecomeAHostTemplateStory.bind({});
CheckInBecomeAHost.args = {
  ...mockData,
};
