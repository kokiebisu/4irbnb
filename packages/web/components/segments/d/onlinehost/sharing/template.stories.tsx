import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SharingTemplate, SharingTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/D/OnlineHosts',
  component: SharingTemplate,
} as Meta;

const SharingTemplateStory: Story<SharingTemplateProps> = (args) => (
  <SharingTemplate {...args} />
);

export const Sharing = SharingTemplateStory.bind({});
Sharing.args = {
  ...mockData,
};
