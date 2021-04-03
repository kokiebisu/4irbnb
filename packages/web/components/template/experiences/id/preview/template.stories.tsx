import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PreviewTemplate, PreviewTemplateProps } from './template';
import * as data from './mock';

export default {
  title: 'Templates/Experiences/ID',
  component: PreviewTemplate,
} as Meta;

const TemplateStory: Story<PreviewTemplateProps> = (args) => (
  <PreviewTemplate {...args} />
);

export const Preview = TemplateStory.bind({});
Preview.args = {
  ...data,
};
