import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  ExperiencesSegmentTemplate,
  ExperiencesSegmentTemplateProps,
} from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/ExperiencesSegment/ID',
  component: ExperiencesSegmentTemplate,
} as Meta;

const ExperiencesSegmentTemplateStory: Story<ExperiencesSegmentTemplateProps> = (
  args
) => <ExperiencesSegmentTemplate {...args} />;

export const ExperiencesSegment = ExperiencesSegmentTemplateStory.bind({});
ExperiencesSegment.args = {
  ...mockData,
};
