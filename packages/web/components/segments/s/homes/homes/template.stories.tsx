import React from 'react';
import { Story, Meta } from '@storybook/react';
import { HomesTemplate, HomesTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/S/Homes',
  component: HomesTemplate,
} as Meta;

const HomesTemplateStory: Story<HomesTemplateProps> = (args) => (
  <HomesTemplate {...args} />
);

export const Homes = HomesTemplateStory.bind({});
Homes.args = {
  ...mockData,
};
