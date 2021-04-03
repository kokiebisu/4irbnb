import React from 'react';
import { Story, Meta } from '@storybook/react';
import { AvailableTemplate, AvailableTemplateProps } from './template';
import { availableSlots } from './mock';

export default {
  title: 'Templates/D/OnlineHosts',
  component: AvailableTemplate,
} as Meta;

const TemplateStory: Story<AvailableTemplateProps> = (args) => (
  <AvailableTemplate {...args} />
);

export const Available = TemplateStory.bind({});
Available.args = {
  availableSlots,
};
