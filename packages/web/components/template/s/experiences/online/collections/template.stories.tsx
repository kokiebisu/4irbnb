import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CollectionsTemplate, CollectionsTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/S/Experiences/Online',
  component: CollectionsTemplate,
} as Meta;

const TemplateStory: Story<CollectionsTemplateProps> = (args) => (
  <CollectionsTemplate {...args} />
);

export const Collections = TemplateStory.bind({});
Collections.args = {
  ...mockData,
};
