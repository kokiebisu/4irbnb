import React from 'react';
import { Story, Meta } from '@storybook/react';
import { FAQTemplate, FAQTemplateProps } from './template';
import { questions } from './mock';

export default {
  title: 'Templates/D/OnlineHosts',
  component: FAQTemplate,
} as Meta;

const FAQTemplateStory: Story<FAQTemplateProps> = (args) => (
  <FAQTemplate {...args} />
);

export const Faq = FAQTemplateStory.bind({});
Faq.args = {
  questions,
};
