import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  CharacteristicsTemplate,
  CharacteristicsTemplateProps,
} from '@template/experiences/id/characteristics/template';

export default {
  title: 'Templates/Experiences/ID',
  component: CharacteristicsTemplate,
} as Meta;

const TemplateStory: Story<CharacteristicsTemplateProps> = (args) => (
  <CharacteristicsTemplate {...args} />
);

export const Characteristics = TemplateStory.bind({});
Characteristics.args = {};
