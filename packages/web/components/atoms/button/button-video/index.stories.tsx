import React from 'react';
import { Story, Meta } from '@storybook/react';
import { VideoButton, VideoButtonProps } from '.';

export default {
  title: 'Atoms/Button',
  component: VideoButton,
} as Meta;

const ButtonStory: Story<VideoButtonProps> = (args) => (
  <VideoButton {...args} />
);

export const Video = ButtonStory.bind({});
Video.args = {
  play: false,
};
