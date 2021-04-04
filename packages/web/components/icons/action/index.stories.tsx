import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ActionIcon, ActionIconTypeProps } from '.';
import { IconProps } from '..';

export default {
  title: 'Atoms/Icons/Action',
  component: ActionIcon,
} as Meta;

const size = {
  width: 24,
  height: 24,
};

const IconStory: Story<IconProps & ActionIconTypeProps> = (args) => (
  <div style={{ ...size }}>
    <ActionIcon {...args} />
  </div>
);

const IconBundleStory: Story<{}> = () => (
  <div className="flex items-center">
    {[
      { title: 'heart' as const, size },
      { title: 'close' as const, size },
      { title: 'pause' as const, size },
      { title: 'play' as const, size },
    ].map((icon) => {
      return (
        <div className="mr-2">
          <div style={{ ...icon.size }}>
            <ActionIcon actionType={icon.title} />
          </div>
        </div>
      );
    })}
  </div>
);

export const Overview = IconBundleStory.bind({});

export const Heart = IconStory.bind({});
Heart.args = {
  actionType: 'heart',
};

export const Close = IconStory.bind({});
Close.args = {
  actionType: 'close',
};

export const Play = IconStory.bind({});
Play.args = {
  actionType: 'play',
};

export const Pause = IconStory.bind({});
Pause.args = {
  actionType: 'pause',
};
