import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Animation, AnimationProps } from '@animation';

export default {
  title: 'Particles/Animation',
} as Meta;

const AnimationStory: Story<AnimationProps> = (args) => <Animation {...args} />;

export const Loading = AnimationStory.bind({});
Loading.args = {};
