import React from 'react';
import { Story, Meta } from '@storybook/react';
import { StartingTemplate, StartingTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/S/Experiences/Online',
  component: StartingTemplate,
} as Meta;

const StartingTemplateStory: Story<StartingTemplateProps> = (args) => (
  <StartingTemplate {...args} />
);

export const Starting = StartingTemplateStory.bind({});
Starting.args = {
  ...mockData,
};
