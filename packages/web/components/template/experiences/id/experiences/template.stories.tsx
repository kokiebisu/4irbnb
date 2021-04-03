import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  ExperiencesTemplate,
  ExperiencesTemplateProps,
} from '@template/experiences/id/experiences/template';

export default {
  title: 'Templates/Experiences/ID',
  component: ExperiencesTemplate,
} as Meta;

const TemplateStory: Story<ExperiencesTemplateProps> = (args) => (
  <ExperiencesTemplate {...args} />
);

export const Experiences = TemplateStory.bind({});
Experiences.args = {};
