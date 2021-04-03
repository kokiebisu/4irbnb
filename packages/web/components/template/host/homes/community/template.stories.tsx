import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  CommunityTemplate,
  CommunityTemplateProps,
} from '@template/host/homes/community/template';

export default {
  title: 'Templates/Experiences/ID',
  component: CommunityTemplate,
} as Meta;

const TemplateStory: Story<CommunityTemplateProps> = (args) => (
  <CommunityTemplate {...args} />
);

export const Community = TemplateStory.bind({});
Community.args = {
  title: 'Title',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  hosts: [undefined, undefined, undefined, undefined, undefined],
};
