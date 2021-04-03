import React from 'react';
import { Story, Meta } from '@storybook/react';

import {
  SharingTemplate,
  SharingTemplateProps,
} from '@template/d/onlinehost/sharing/template';

export default {
  title: 'Templates/D/OnlineHosts',
  component: SharingTemplate,
} as Meta;

const TemplateStory: Story<SharingTemplateProps> = (args) => (
  <SharingTemplate {...args} />
);

export const Sharing = TemplateStory.bind({});
Sharing.args = {
  categories: ['design', 'share', 'submit', 'setup'],
};
