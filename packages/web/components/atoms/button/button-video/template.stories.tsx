import React from 'react';
import { Story, Meta } from '@storybook/react';
import { VideoButtonTemplate, VideoButtonTemplateProps } from './template';

export default {
  title: 'Atoms/Button',
  component: VideoButtonTemplate,
} as Meta;

const ButtonStory: Story<VideoButtonTemplateProps> = (args) => (
  <VideoButtonTemplate {...args} />
);

export const Video = ButtonStory.bind({});
Video.args = {
  play: false,
};
