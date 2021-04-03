import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  NearbyTemplate,
  NearbyTemplateProps,
} from '@template/index/nearby/template';
import { groupByTwo } from '@helper/array';

export default {
  title: 'Templates/Index',
  component: NearbyTemplate,
} as Meta;

const TemplateStory: Story<NearbyTemplateProps> = (args) => (
  <NearbyTemplate {...args} />
);

export const Nearby = TemplateStory.bind({});
Nearby.args = {
  items: groupByTwo([
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ]),
};
