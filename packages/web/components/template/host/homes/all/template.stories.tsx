import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  AllTemplate,
  AllTemplateProps,
} from '@template/host/homes/all/template';

export default {
  title: 'Templates/Experiences/ID',
  component: AllTemplate,
} as Meta;

const TemplateStory: Story<AllTemplateProps> = (args) => (
  <AllTemplate {...args} />
);

export const All = TemplateStory.bind({});
All.args = {};
