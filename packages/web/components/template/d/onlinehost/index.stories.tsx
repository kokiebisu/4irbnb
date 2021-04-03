import React from 'react';
import { Story, Meta } from '@storybook/react';

import {
  WorksTemplate,
  WorksTemplateProps,
} from '@template/d/onlinehost/works/template';

export default {
  title: 'Templates/D/OnlineHosts',
  component: WorksTemplate,
} as Meta;

const TemplateStory: Story<WorksTemplateProps> = (args) => (
  <WorksTemplate {...args} />
);

export const Works = TemplateStory.bind({});
Works.args = {};
