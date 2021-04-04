import React from 'react';
import { Story, Meta } from '@storybook/react';
import { KnowTemplate, KnowTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Rooms/ID',
  component: KnowTemplate,
} as Meta;

const KnowTemplateStory: Story<KnowTemplateProps> = (args) => (
  <KnowTemplate {...args} />
);

export const Know = KnowTemplateStory.bind({});
Know.args = {
  ...mockData,
};
