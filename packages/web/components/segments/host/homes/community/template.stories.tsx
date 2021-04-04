import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CommunityTemplate, CommunityTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Host/Homes',
  component: CommunityTemplate,
} as Meta;

const CommunityTemplateStory: Story<CommunityTemplateProps> = (args) => (
  <CommunityTemplate {...args} />
);

export const Community = CommunityTemplateStory.bind({});
Community.args = {
  ...mockData,
};
