import React from 'react';
import { Story, Meta } from '@storybook/react';
import { HomesTemplate, HomesTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/S/Homes',
  component: HomesTemplate,
} as Meta;

const TemplateStory: Story<HomesTemplateProps> = (args) => (
  <HomesTemplate {...args} />
);

export const Homes = TemplateStory.bind({});
Homes.args = {
  ...mockData,
};
