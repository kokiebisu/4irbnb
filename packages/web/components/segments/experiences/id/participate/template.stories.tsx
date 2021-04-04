import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ParticipateTemplate, ParticipateTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Experiences/ID',
  component: ParticipateTemplate,
} as Meta;

const ParticipateTemplateStory: Story<ParticipateTemplateProps> = (args) => (
  <ParticipateTemplate {...args} />
);

export const Participate = ParticipateTemplateStory.bind({});
Participate.args = {
  ...mockData,
};
