import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  AnywhereTemplate,
  AnywhereTemplateProps,
} from 'components/segments/index/anywhere/template';
import * as mockData from './mock';

export default {
  title: 'Templates/Index',
  component: AnywhereTemplate,
} as Meta;

const AnywhereTemplateStory: Story<AnywhereTemplateProps> = (args) => (
  <AnywhereTemplate {...args} />
);

export const Anywhere = AnywhereTemplateStory.bind({});
Anywhere.args = {
  ...mockData,
};
