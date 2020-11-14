import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Animation } from './animation.component';
import { AnimationProps } from './props';

export default {
  title: 'Design System/Animation',
} as Meta;

const AnimationStory: Story<AnimationProps> = (args) => <Animation {...args} />;

export const loading = AnimationStory.bind({});
loading.args = {
  type: 'loading',
};
