import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  DescriptionTemplate,
  DescriptionTemplateProps,
} from '@template/experiences/id/description/template';

export default {
  title: 'Templates/Experiences/ID',
  component: DescriptionTemplate,
} as Meta;

const TemplateStory: Story<DescriptionTemplateProps> = (args) => (
  <DescriptionTemplate {...args} />
);

export const Description = TemplateStory.bind({});
Description.args = {};
