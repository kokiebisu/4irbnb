import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  HostTemplate,
  HostTemplateProps,
} from '@template/experiences/id/host/template';

export default {
  title: 'Templates/Experiences/ID',
  component: HostTemplate,
} as Meta;

const TemplateStory: Story<HostTemplateProps> = (args) => (
  <HostTemplate {...args} />
);

export const Host = TemplateStory.bind({});
Host.args = {
  host: 'Host Name',
  isSuperhost: false,
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  joined: 'February 2016',
  duringStay:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  numberOfReviews: 100,
  hostImgUrl: '',
  responseTime: 'within an hour',
  responseRate: 54,
  layoutType: 'room',
  verified: false,
};
