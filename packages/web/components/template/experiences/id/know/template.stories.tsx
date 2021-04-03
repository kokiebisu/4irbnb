import React from 'react';
import { Story, Meta } from '@storybook/react';
import { KnowTemplate, KnowTemplateProps } from './template';
import * as data from './mock';

export default {
  title: 'Templates/Experiences/ID',
  component: KnowTemplate,
} as Meta;

const TemplateStory: Story<KnowTemplateProps> = (args) => (
  <KnowTemplate {...args} />
);

export const Know = TemplateStory.bind({});
Know.args = {
  ...data,
};
