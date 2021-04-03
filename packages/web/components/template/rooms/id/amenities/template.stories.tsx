import React from 'react';
import { Story, Meta } from '@storybook/react';
import { AmenitiesTemplate, AmenitiesTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Rooms/ID',
  component: AmenitiesTemplate,
} as Meta;

const TemplateStory: Story<AmenitiesTemplateProps> = (args) => (
  <AmenitiesTemplate {...args} />
);

export const Amenities = TemplateStory.bind({});
Amenities.args = {
  ...mockData,
};
