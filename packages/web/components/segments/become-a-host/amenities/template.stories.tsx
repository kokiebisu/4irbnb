import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  AmenitiesBecomeAHostTemplate,
  AmenitiesBecomeAHostTemplateProps,
} from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/D/OnlineHosts',
  component: AmenitiesBecomeAHostTemplate,
} as Meta;

const AmenitiesBecomeAHostTemplateStory: Story<AmenitiesBecomeAHostTemplateProps> = (
  args
) => <AmenitiesBecomeAHostTemplate {...args} />;

export const AmenitiesBecomeAHost = AmenitiesBecomeAHostTemplateStory.bind({});
AmenitiesBecomeAHost.args = {
  ...mockData,
};
