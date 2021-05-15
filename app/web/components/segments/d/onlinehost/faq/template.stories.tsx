import React from 'react';
import { Story, Meta } from '@storybook/react';
import { FAQSegmentTemplate, FAQSegmentTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/D/OnlineHosts',
  component: FAQSegmentTemplate,
} as Meta;

const FAQTemplateStory: Story<FAQSegmentTemplateProps> = (args) => (
  <FAQSegmentTemplate {...args} />
);

export const Faq = FAQTemplateStory.bind({});
Faq.args = {
  ...mockData,
};
