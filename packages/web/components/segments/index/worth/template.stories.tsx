import React from 'react';
import { Story, Meta } from '@storybook/react';
import { WorthTemplate, WorthTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Index',
  component: WorthTemplate,
} as Meta;

const WorthTemplateStory: Story<WorthTemplateProps> = (args) => (
  <WorthTemplate {...args} />
);

export const Worth = WorthTemplateStory.bind({});
Worth.args = {
  ...mockData,
};
