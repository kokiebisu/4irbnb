import React from 'react';
import { Story, Meta } from '@storybook/react';
import { AvailableTemplate, AvailableTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/D/OnlineHosts',
  component: AvailableTemplate,
} as Meta;

const AvailableTemplateStory: Story<AvailableTemplateProps> = (args) => (
  <AvailableTemplate {...args} />
);

export const Available = AvailableTemplateStory.bind({});
Available.args = {
  ...mockData,
};
