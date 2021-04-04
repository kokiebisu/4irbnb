import React from 'react';
import { Story, Meta } from '@storybook/react';
import { WorksTemplate, WorksTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/D/OnlineHosts',
  component: WorksTemplate,
} as Meta;

const WorksTemplateStory: Story<WorksTemplateProps> = (args) => (
  <WorksTemplate {...args} />
);

export const Works = WorksTemplateStory.bind({});
Works.args = {
  ...mockData,
};
