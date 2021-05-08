import React from 'react';
import { Story, Meta } from '@storybook/react';
import { WorksSegmentTemplate, WorksSegmentTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/D/OnlineHosts',
  component: WorksSegmentTemplate,
} as Meta;

const WorksSegmentTemplateStory: Story<WorksSegmentTemplateProps> = (args) => (
  <WorksSegmentTemplate {...args} />
);

export const Works = WorksSegmentTemplateStory.bind({});
Works.args = {
  ...mockData,
};
