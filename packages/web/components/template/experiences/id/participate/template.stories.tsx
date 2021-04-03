import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ParticipateTemplate, ParticipateTemplateProps } from './template';
import * as data from './mock';

export default {
  title: 'Templates/Experiences/ID',
  component: ParticipateTemplate,
} as Meta;

const TemplateStory: Story<ParticipateTemplateProps> = (args) => (
  <ParticipateTemplate {...args} />
);

export const Participate = TemplateStory.bind({});
Participate.args = {
  ...data,
};
