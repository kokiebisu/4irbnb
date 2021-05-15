import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  ExperiencesHeaderTemplate,
  ExperiencesHeaderTemplateProps,
} from './template';

export default {
  title: 'Organisms/Header',
  component: ExperiencesHeaderTemplate,
} as Meta;

const HeaderStory: Story<ExperiencesHeaderTemplateProps> = (args) => (
  <ExperiencesHeaderTemplate {...args} />
);

export const Details = HeaderStory.bind({});
Details.args = {};
