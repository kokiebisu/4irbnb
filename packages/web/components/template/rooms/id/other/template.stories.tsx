import React from 'react';
import { Story, Meta } from '@storybook/react';
import { OtherTemplate, OtherTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Rooms/ID',
  component: OtherTemplate,
} as Meta;

const TemplateStory: Story<OtherTemplateProps> = (args) => (
  <OtherTemplate {...args} />
);

export const Other = TemplateStory.bind({});
Other.args = {
  ...mockData,
};
