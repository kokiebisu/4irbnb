import React from 'react';
import { Story, Meta } from '@storybook/react';
import { AmenitiesTemplate, AmenitiesTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Rooms/ID',
  component: AmenitiesTemplate,
} as Meta;

const AmenitiesTemplateStory: Story<AmenitiesTemplateProps> = (args) => (
  <AmenitiesTemplate {...args} />
);

export const Amenities = AmenitiesTemplateStory.bind({});
Amenities.args = {
  ...mockData,
};
