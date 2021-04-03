import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CollectionsTemplate, CollectionsTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/S/Experiences/Online',
  component: CollectionsTemplate,
} as Meta;

const CollectionsTemplateStory: Story<CollectionsTemplateProps> = (args) => (
  <CollectionsTemplate {...args} />
);

export const Collections = CollectionsTemplateStory.bind({});
Collections.args = {
  ...mockData,
};
