import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BackSegmentTemplate, BackSegmentTemplateProps } from './template';

export default {
  title: 'Templates/D/OnlineHosts',
  component: BackSegmentTemplate,
} as Meta;

const BackTemplateStory: Story<BackSegmentTemplateProps> = (args) => (
  <BackSegmentTemplate {...args} />
);

export const Back = BackTemplateStory.bind({});
Back.args = {};
