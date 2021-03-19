import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Video, VideoProps } from '.';

export default {
  title: 'Atoms/Video',
  component: Video,
  argTypes: {
    extendsTo: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const TemplateStory: Story<VideoProps> = (args) => <Video {...args} />;

export const Default = TemplateStory.bind({});
Default.args = {

}