import React from 'react';
import { Story, Meta } from '@storybook/react';
import { DetailsHeaderTemplate, DetailsHeaderTemplateProps } from './template';

export default {
  title: 'Organisms/Header',
  component: DetailsHeaderTemplate,
} as Meta;

const HeaderStory: Story<DetailsHeaderTemplateProps> = (args) => (
  <DetailsHeaderTemplate {...args} />
);

export const Details = HeaderStory.bind({});
Details.args = {};
