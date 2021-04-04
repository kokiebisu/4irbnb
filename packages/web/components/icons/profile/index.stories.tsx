import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ProfileIcon, ProfileTypeProps } from '.';
import { IconProps, IconPropsWithType } from '..';

export default {
  title: 'Atoms/Icons/Profile',
  component: ProfileIcon,
} as Meta;

const size = {
  width: 40,
  height: '100%',
};

const IconStory: Story<IconPropsWithType> = (args) => <ProfileIcon {...args} />;
const IconBundleStory: Story<IconProps & ProfileTypeProps> = () => (
  <div className="flex items-center">
    {[{ title: 'avatar' as const, size: { width: 32, height: 32 } }].map((icon) => {
      return (
        <div className="mr-2">
          <ProfileIcon profileType={icon.title} {...icon.size} />
        </div>
      );
    })}
  </div>
);

export const Overview = IconBundleStory.bind({});

export const Avatar = IconStory.bind({});
Avatar.args = {
  profileType: 'avatar',
  ...size,
};
