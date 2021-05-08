import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CardsSegmentTemplate, CardsSegmentTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/S/Experiences/Online',
  component: CardsSegmentTemplate,
} as Meta;

const CardsSegmentTemplateStory: Story<CardsSegmentTemplateProps> = (args) => (
  <CardsSegmentTemplate {...args} />
);

export const CardsSegment = CardsSegmentTemplateStory.bind({});
CardsSegment.args = {
  ...mockData,
};
