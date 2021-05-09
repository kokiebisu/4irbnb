import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  AnywhereSegmentTemplate,
  AnywhereSegmentTemplateProps,
} from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Index',
  component: AnywhereSegmentTemplate,
} as Meta;

const AnywhereTemplateStory: Story<AnywhereSegmentTemplateProps> = (args) => (
  <AnywhereSegmentTemplate {...args} />
);

export const Anywhere = AnywhereTemplateStory.bind({});
Anywhere.args = {
  ...mockData,
};
