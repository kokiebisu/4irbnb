import React from 'react';
import { Story, Meta } from '@storybook/react';
import { DescriptionTemplate, DescriptionTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Rooms/ID',
  component: DescriptionTemplate,
} as Meta;

const TemplateStory: Story<DescriptionTemplateProps> = (args) => (
  <DescriptionTemplate {...args} />
);

export const Description = TemplateStory.bind({});
Description.args = {
  ...mockData,
};
