import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  WorthTemplate,
  WorthTemplateProps,
} from '@template/index/worth/template';

export default {
  title: 'Templates/Index',
  component: WorthTemplate,
} as Meta;

const TemplateStory: Story<WorthTemplateProps> = (args) => (
  <WorthTemplate {...args} />
);

export const Worth = TemplateStory.bind({});
Worth.args = {
  handleRedirectToHostPage: () => alert('Should redirect to host page'),
};
