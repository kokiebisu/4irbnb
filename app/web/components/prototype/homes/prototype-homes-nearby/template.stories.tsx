import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  NearbyPrototypeTemplate,
  NearbyPrototypeTemplateProps,
} from './template';

export default {
  title: 'Prototypes/Nearby',
  component: NearbyPrototypeTemplate,
} as Meta;

const NearbyPrototypeStory: Story<NearbyPrototypeTemplateProps> = (args) => (
  <NearbyPrototypeTemplate {...args} />
);

export const Nearby = NearbyPrototypeStory.bind({});
Nearby.args = {};
