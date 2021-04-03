import React from 'react';
import { Story, Meta } from '@storybook/react';
import { WorthTemplate, WorthTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Index',
  component: WorthTemplate,
} as Meta;

const TemplateStory: Story<WorthTemplateProps> = (args) => (
  <WorthTemplate {...args} />
);

export const Worth = TemplateStory.bind({});
Worth.args = {
  ...mockData,
};
