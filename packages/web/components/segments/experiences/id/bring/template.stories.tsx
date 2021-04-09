import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BringTemplate, BringTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Experiences/ID',
  component: BringTemplate,
} as Meta;

const BringTemplateStory: Story<BringTemplateProps> = (args) => (
  <BringTemplate {...args} />
);

export const Bring = BringTemplateStory.bind({});
Bring.args = {
  ...mockData,
};
