import React from 'react';
import { Story, Meta } from '@storybook/react';
import { GeneralIcon, GeneralIconTypeProps } from '.';
import { IconProps } from '..';

export default {
  title: 'Atoms/Icons/General',
  component: GeneralIcon,
} as Meta;

const size = {
  width: 20,
  height: 20,
};

const IconStory: Story<IconProps & GeneralIconTypeProps> = (args) => (
  <div style={{ ...size }}>
    <GeneralIcon {...args} />
  </div>
);
const IconBundleStory: Story<IconProps & GeneralIconTypeProps> = () => (
  <div className="flex items-center">
    {[
      { generalType: 'magnifyGlass' as const },
      { generalType: 'lock' as const },
      { generalType: 'globe' as const },
      { generalType: 'share' as const },
      { generalType: 'email' as const },
      { generalType: 'flag' as const },
      { generalType: 'bars' as const },
      { generalType: 'login' as const },
    ].map((args) => {
      return (
        <div className="mr-2">
          <div style={{ ...size }}>
            <GeneralIcon {...args} />
          </div>
        </div>
      );
    })}
  </div>
);

export const Overview = IconBundleStory.bind({});

export const MagnifyGlass = IconStory.bind({});
MagnifyGlass.args = {
  generalType: 'magnifyGlass',
};

export const Lock = IconStory.bind({});
Lock.args = {
  generalType: 'lock',
};

export const Globe = IconStory.bind({});
Globe.args = {
  generalType: 'globe',
};

export const Share = IconStory.bind({});
Share.args = {
  generalType: 'share',
};

export const Flag = IconStory.bind({});
Flag.args = {
  generalType: 'flag',
};

export const Login = IconStory.bind({});
Login.args = {
  generalType: 'login',
};
