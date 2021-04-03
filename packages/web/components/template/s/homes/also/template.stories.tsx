import React from 'react';
import { Story, Meta } from '@storybook/react';
import { AlsoTemplate, AlsoTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/S/Homes',
  component: AlsoTemplate,
} as Meta;

const TemplateStory: Story<AlsoTemplateProps> = (args) => (
  <AlsoTemplate {...args} />
);

export const Also = TemplateStory.bind({});
Also.args = {
  ...mockData,
};
