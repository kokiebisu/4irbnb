import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  MoreTemplate,
  MoreTemplateProps,
} from '@template/d/onlinehost/more/template';

export default {
  title: 'Templates/D/OnlineHosts',
  component: MoreTemplate,
} as Meta;

const TemplateStory: Story<MoreTemplateProps> = (args) => (
  <MoreTemplate {...args} />
);

export const More = TemplateStory.bind({});
More.args = {};
