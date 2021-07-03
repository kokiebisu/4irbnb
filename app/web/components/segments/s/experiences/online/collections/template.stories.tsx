import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  CollectionsSegmentTemplate,
  CollectionsSegmentTemplateProps,
} from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/S/Experiences/Online',
  component: CollectionsSegmentTemplate,
} as Meta;

const CollectionsSegmentTemplateStory: Story<CollectionsSegmentTemplateProps> = (
  args
) => <CollectionsSegmentTemplate {...args} />;

export const CollectionsSegment = CollectionsSegmentTemplateStory.bind({});
CollectionsSegment.args = {
  ...mockData,
};
