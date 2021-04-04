import React from 'react';
import { Story, Meta } from '@storybook/react';
import { AllTemplate, AllTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Host/Homes',
  component: AllTemplate,
} as Meta;

const AllTemplateStory: Story<AllTemplateProps> = (args) => (
  <AllTemplate {...args} />
);

export const All = AllTemplateStory.bind({});
All.args = {
  ...mockData,
};
