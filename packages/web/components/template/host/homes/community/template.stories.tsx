import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CommunityTemplate, CommunityTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Host/Homes',
  component: CommunityTemplate,
} as Meta;

const TemplateStory: Story<CommunityTemplateProps> = (args) => (
  <CommunityTemplate {...args} />
);

export const Community = TemplateStory.bind({});
Community.args = {
  ...mockData,
};
