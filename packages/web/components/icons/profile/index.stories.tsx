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

const IconStory: Story<IconPropsWithType> = (args) => <ProfileIcon {...args} />;
const IconBundleStory: Story<IconProps & ProfileIconTypeProps> = () => (
  <div className="flex items-center">
    {[{ title: 'avatar' as const }].map((icon) => {
      return (
        <div className="mr-2">
          <div style={{ ...size }}>
            <ProfileIcon profileType={icon.title} />
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
