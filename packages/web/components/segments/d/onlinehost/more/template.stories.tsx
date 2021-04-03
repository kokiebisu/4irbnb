import React from 'react';
import { Story, Meta } from '@storybook/react';
import { MoreTemplate, MoreTemplateProps } from './template';

export default {
  title: 'Templates/D/OnlineHosts',
  component: MoreTemplate,
} as Meta;

const MoreTemplateStory: Story<MoreTemplateProps> = (args) => (
  <MoreTemplate {...args} />
);

export const More = MoreTemplateStory.bind({});
More.args = {};
