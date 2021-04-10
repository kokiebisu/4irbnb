import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PriceSegmentTemplate, PriceSegmentTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/D/OnlineHosts',
  component: PriceSegmentTemplate,
} as Meta;

const SegmentStory: Story<PriceSegmentTemplateProps> = (args) => (
  <PriceSegmentTemplate {...args} />
);

export const Price = SegmentStory.bind({});
Price.args = {
  ...mockData,
};
