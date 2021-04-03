import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  FAQTemplate,
  FAQTemplateProps,
} from '@template/d/onlinehost/faq/template';

export default {
  title: 'Templates/D/OnlineHosts',
  component: FAQTemplate,
} as Meta;

const TemplateStory: Story<FAQTemplateProps> = (args) => (
  <FAQTemplate {...args} />
);

export const Faq = TemplateStory.bind({});
Faq.args = {
  questions: [{ question: 'Example', answer: 'Answer' }],
};
