import React from 'react';
import { Story, Meta } from '@storybook/react';
import { LogoIcon, LogoIconTypeProps } from '.';
import { IconProps } from '..';

export default {
  title: 'Atoms/Icons/Logo',
  component: LogoIcon,
} as Meta;

const size = {
  width: 24,
  height: 24,
};

const IconStory: Story<IconProps & LogoIconTypeProps> = (args) => (
  <LogoIcon {...args} />
);
const IconBundleStory: Story<{}> = () => (
  <div className="flex items-center flex-wrap">
    {[
      { title: 'menubar' as const, size: { width: 32, height: 32 } },
      { title: 'name' as const, size: { width: 102, height: 32 } },
      { title: 'noName' as const, size: { width: 32, height: 32 } },
      { title: 'facebook' as const, size: { width: 32, height: 32 } },
      { title: 'google' as const, size: { width: 32, height: 32 } },
      { title: 'apple' as const, size: { width: 32, height: 32 } },
    ].map((icon) => {
      return (
        <div className="mr-2">
          <div className="mb-2">
            <LogoIcon logoType={icon.title} {...icon.size} />
          </div>
        </div>
      );
    })}
  </div>
);

export const Overview = IconBundleStory.bind({});

export const MenuBar = IconStory.bind({});
MenuBar.args = {
  logoType: 'menubar',
  ...size,
};

export const Name = IconStory.bind({});
Name.args = {
  logoType: 'name',
  width: 20,
};

export const NoName = IconStory.bind({});
NoName.args = {
  logoType: 'noName',
  ...size,
};

export const Facebook = IconStory.bind({});
Facebook.args = {
  logoType: 'facebook',
  ...size,
};

export const Google = IconStory.bind({});
Google.args = {
  logoType: 'google',
  ...size,
};

export const Apple = IconStory.bind({});
Apple.args = {
  logoType: 'apple',
  ...size,
};
