import { Story, Meta } from '@storybook/react';
import {
  LoadingAnimationTemplate,
  LoadingAnimationTemplateProps,
} from './template';

export default {
  title: 'Particles/Animation',
} as Meta;

const AnimationStory: Story<LoadingAnimationTemplateProps> = (args) => (
  <LoadingAnimationTemplate {...args} />
);

export const Loading = AnimationStory.bind({});
Loading.args = {};
