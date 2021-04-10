import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  AdvanceBecomeAHostTemplate,
  AdvanceBecomeAHostTemplateProps,
} from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/D/OnlineHosts',
  component: AdvanceBecomeAHostTemplate,
} as Meta;

const AdvanceBecomeAHostTemplateStory: Story<AdvanceBecomeAHostTemplateProps> = (
  args
) => <AdvanceBecomeAHostTemplate {...args} />;

export const AdvanceBecomeAHost = AdvanceBecomeAHostTemplateStory.bind({});
AdvanceBecomeAHost.args = {
  ...mockData,
};
