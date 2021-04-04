import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PreviewTemplate, PreviewTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Experiences/ID',
  component: PreviewTemplate,
} as Meta;

const PreviewTemplateStory: Story<PreviewTemplateProps> = (args) => (
  <PreviewTemplate {...args} />
);

export const Preview = PreviewTemplateStory.bind({});
Preview.args = {
  ...mockData,
};
