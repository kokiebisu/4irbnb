import React from 'react';
import { Story, Meta } from '@storybook/react';
import { KnowSegmentTemplate, KnowSegmentTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Rooms/ID',
  component: KnowSegmentTemplate,
} as Meta;

const KnowSegmentTemplateStory: Story<KnowSegmentTemplateProps> = (args) => (
  <KnowSegmentTemplate {...args} />
);

export const KnowSegment = KnowSegmentTemplateStory.bind({});
KnowSegment.args = {
  ...mockData,
};
