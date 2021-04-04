import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  CharacteristicsTemplate,
  CharacteristicsTemplateProps,
} from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Experiences/ID',
  component: CharacteristicsTemplate,
} as Meta;

const CharacteristicsTemplateStory: Story<CharacteristicsTemplateProps> = (
  args
) => <CharacteristicsTemplate {...args} />;

export const Characteristics = CharacteristicsTemplateStory.bind({});
Characteristics.args = {
  ...mockData,
};
