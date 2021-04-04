import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ExperiencesTemplate, ExperiencesTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Experiences/ID',
  component: ExperiencesTemplate,
} as Meta;

const ExperiencesTemplateStory: Story<ExperiencesTemplateProps> = (args) => (
  <ExperiencesTemplate {...args} />
);

export const Experiences = ExperiencesTemplateStory.bind({});
Experiences.args = {
  ...mockData,
};
