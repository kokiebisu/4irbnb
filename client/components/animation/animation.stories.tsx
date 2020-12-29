import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Animation, AnimationProps } from "@animation/animation.component";

export default {
  title: "Particles/Animation",
} as Meta;

const AnimationStory: Story<AnimationProps> = (args) => <Animation {...args} />;

export const loading = AnimationStory.bind({});
loading.args = {
  type: "loading",
};
loading.argTypes = {
  dark: {
    control: "boolean",
  },
};
