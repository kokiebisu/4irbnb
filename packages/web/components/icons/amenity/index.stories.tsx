import React from 'react';
import { Story, Meta } from '@storybook/react';
import { AmenityIcon, AmenityIconTypeProps } from '.';
import { IconProps } from '..';

export default {
  title: 'Atoms/Icons/Amenity',
  component: AmenityIcon,
} as Meta;

const size = {
  width: 40,
  height: '100%',
};

const IconStory: Story<IconProps & AmenityIconTypeProps> = (args) => (
  <AmenityIcon {...args} />
);
const IconBundleStory: Story<{}> = () => (
  <div className="flex items-center">
    {[
      { title: 'smokeAlarm' as const, size: { width: 32, height: 32 } },
      { title: 'tv' as const, size: { width: 32, height: 32 } },
      { title: 'kitchen' as const, size: { width: 32, height: 32 } },
      { title: 'heating' as const, size: { width: 32, height: 32 } },
      { title: 'privateEntrance' as const, size: { width: 32, height: 32 } },
      { title: 'carbonAlarm' as const, size: { width: 32, height: 32 } },
    ].map((icon) => {
      return (
        <div className="mr-2">
          <AmenityIcon amenityType={icon.title} {...icon.size} />
        </div>
      );
    })}
  </div>
);

export const Overview = IconBundleStory.bind({});

export const SmokeAlarm = IconStory.bind({});
SmokeAlarm.args = {
  amenityType: 'smokeAlarm',
  ...size,
};

export const TV = IconStory.bind({});
TV.args = {
  amenityType: 'tv',
  ...size,
};

export const Kitchen = IconStory.bind({});
Kitchen.args = {
  amenityType: 'kitchen',
  ...size,
};

export const Heating = IconStory.bind({});
Heating.args = {
  amenityType: 'heating',
  ...size,
};

export const PrivateEntrance = IconStory.bind({});
PrivateEntrance.args = {
  amenityType: 'privateEntrance',
  ...size,
};

export const CarbonAlarm = IconStory.bind({});
CarbonAlarm.args = {
  amenityType: 'carbonAlarm',
  ...size,
};
