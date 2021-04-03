import React from 'react';
import { Story, Meta } from '@storybook/react';
import { KnowTemplate, KnowTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Index',
  component: KnowTemplate,
} as Meta;

const TemplateStory: Story<KnowTemplateProps> = (args) => (
  <KnowTemplate {...args} />
);

export const Know = TemplateStory.bind({});
Know.args = {
  ...mockData,
};
