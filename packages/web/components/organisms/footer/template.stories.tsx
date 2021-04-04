import React from 'react';
import { Story, Meta } from '@storybook/react';
import { FooterTemplate, FooterTemplateProps } from './template';

export default {
  title: 'Organisms',
  component: FooterTemplate,
} as Meta;

const FooterStory: Story<FooterTemplateProps> = (args) => (
  <FooterTemplate {...args} />
);

export const Footer = FooterStory.bind({});
Footer.args = {};
