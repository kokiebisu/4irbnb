import React from 'react';
import { Story, Meta } from '@storybook/react';
import { AlsoSegmentTemplate, AlsoSegmentTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/S/Homes',
  component: AlsoSegmentTemplate,
} as Meta;

const AlsoTemplateStory: Story<AlsoSegmentTemplateProps> = (args) => (
  <AlsoSegmentTemplate {...args} />
);

export const Also = AlsoTemplateStory.bind({});
Also.args = {
  ...mockData,
};
