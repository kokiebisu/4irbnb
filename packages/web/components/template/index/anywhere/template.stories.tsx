import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  AnywhereTemplate,
  AnywhereTemplateProps,
} from '@template/index/anywhere/template';
import * as mockData from './mock';

export default {
  title: 'Templates/Index',
  component: AnywhereTemplate,
} as Meta;

const TemplateStory: Story<AnywhereTemplateProps> = (args) => (
  <AnywhereTemplate {...args} />
);

export const Anywhere = TemplateStory.bind({});
Anywhere.args = {
  ...mockData,
};
