import React from 'react';
import { Story, Meta } from '@storybook/react';
import { MultipleTemplate, MultipleTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/S/Homes',
  component: MultipleTemplate,
} as Meta;

const MultipleTemplateStory: Story<MultipleTemplateProps> = (args) => (
  <MultipleTemplate {...args} />
);

export const Multiple = MultipleTemplateStory.bind({});
Multiple.args = {
  ...mockData,
};
