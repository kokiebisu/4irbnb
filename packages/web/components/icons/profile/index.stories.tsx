import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ProfileIcon, ProfileIconTypeProps } from '.';
import { IconProps, IconPropsWithType } from '..';

export default {
  title: 'Atoms/Icons/Profile',
  component: ProfileIcon,
} as Meta;

const size = {
  width: 24,
  height: 24,
};

const IconStory: Story<IconPropsWithType> = (args) => (
  <div style={{ ...size }}>
    <ProfileIcon {...args} />
  </div>
);
const IconBundleStory: Story<IconProps & ProfileIconTypeProps> = () => (
  <div className="flex items-center">
    {[
      { profileType: 'avatar' as const },
      { profileType: 'star' as const },
      { profileType: 'superhost' as const },
    ].map((args) => {
      return (
        <div className="mr-2">
          <div style={{ ...size }}>
            <ProfileIcon {...args} />
          </div>
        </div>
      );
    })}
  </div>
);

export const Overview = IconBundleStory.bind({});

export const Avatar = IconStory.bind({});
Avatar.args = {
  profileType: 'avatar',
};
