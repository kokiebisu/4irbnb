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
  <div className="flex items-center flex-wrap">
    {[
      { generalType: 'magnifyGlass' as const },
      { generalType: 'lock' as const },
      { generalType: 'globe' as const },
      { generalType: 'share' as const },
      { generalType: 'email' as const },
      { generalType: 'flag' as const },
      { generalType: 'bars' as const },
      { generalType: 'login' as const },
      { generalType: 'search' as const },
      { generalType: 'shield' as const },
      { generalType: 'distancing' as const },
      { generalType: 'caution' as const },
      { generalType: 'check' as const },
      { generalType: 'devices' as const },
      { generalType: 'devicesInverse' as const },
      { generalType: 'protection' as const },
      { generalType: 'guidance' as const },
      { generalType: 'requirements' as const },
      { generalType: 'customerService' as const },
      { generalType: 'toolbox' as const },
      { generalType: 'analytics' as const },
      { generalType: 'education' as const },
      { generalType: 'home' as const },
      { generalType: 'global' as const },
      { generalType: 'lightening' as const },
      { generalType: 'protected' as const },
    ].map((args) => {
      return (
        <div className="mr-2">
          <div className="mb-2" style={{ ...size }}>
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

export const Search = IconStory.bind({});
Search.args = {
  generalType: 'search',
};

export const Shield = IconStory.bind({});
Shield.args = {
  generalType: 'shield',
};

export const Distancing = IconStory.bind({});
Distancing.args = {
  generalType: 'distancing',
};

export const Caution = IconStory.bind({});
Caution.args = {
  generalType: 'caution',
};

export const Check = IconStory.bind({});
Check.args = {
  generalType: 'check',
};

export const Devices = IconStory.bind({});
Devices.args = {
  generalType: 'devices',
};

export const DevicesInverse = IconStory.bind({});
DevicesInverse.args = {
  generalType: 'devicesInverse',
};

export const Protection = IconStory.bind({});
Protection.args = {
  generalType: 'protection',
};

export const Guidance = IconStory.bind({});
Guidance.args = {
  generalType: 'guidance',
};

export const Requirements = IconStory.bind({});
Requirements.args = {
  generalType: 'requirements',
};

export const CustomerService = IconStory.bind({});
CustomerService.args = {
  generalType: 'customerService',
};

export const Toolbox = IconStory.bind({});
Toolbox.args = {
  generalType: 'toolbox',
};

export const Analytics = IconStory.bind({});
Analytics.args = {
  generalType: 'analytics',
};

export const Education = IconStory.bind({});
Education.args = {
  generalType: 'education',
};

export const Home = IconStory.bind({});
Home.args = {
  generalType: 'home',
};

export const Global = IconStory.bind({});
Global.args = {
  generalType: 'global',
};

export const Lightening = IconStory.bind({});
Lightening.args = {
  generalType: 'lightening',
};

export const Protected = IconStory.bind({});
Protected.args = {
  generalType: 'protected',
};
