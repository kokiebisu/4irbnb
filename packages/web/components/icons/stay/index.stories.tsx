import React from 'react';
import { Story, Meta } from '@storybook/react';
import { StayIcon, StayIconTypeProps } from '.';
import { IconProps, IconPropsWithType } from '..';

export default {
  title: 'Atoms/Icons/Stay',
  component: StayIcon,
} as Meta;

const size = {
  width: 24,
  height: 24,
};

const IconStory: Story<IconPropsWithType> = (args) => (
  <div style={{ ...size }}>
    <StayIcon {...args} />
  </div>
);
const IconBundleStory: Story<IconProps & StayIconTypeProps> = () => (
  <div className="flex items-center">
    {[
      { stayType: 'house' as const },
      { stayType: 'sparkle' as const },
      { stayType: 'door' as const },
      { stayType: 'calendar' as const },
      { stayType: 'guidelines' as const },
      { stayType: 'clock' as const },
      { stayType: 'checkin' as const },
      { stayType: 'children' as const },
      { stayType: 'smoking' as const },
      { stayType: 'pets' as const },
      { stayType: 'parties' as const },
      { stayType: 'cleaning' as const },
    ].map((args) => {
      return (
        <div className="mr-2">
          <div style={{ ...size }}>
            <StayIcon {...args} />
          </div>
        </div>
      );
    })}
  </div>
);

export const Overview = IconBundleStory.bind({});

export const House = IconStory.bind({});
House.args = {
  stayType: 'house',
};

export const Sparkle = IconStory.bind({});
Sparkle.args = {
  stayType: 'sparkle',
};

export const Door = IconStory.bind({});
Door.args = {
  stayType: 'door',
};

export const Calendar = IconStory.bind({});
Calendar.args = {
  stayType: 'calendar',
};

export const Guidelines = IconStory.bind({});
Guidelines.args = {
  stayType: 'guidelines',
};

export const Clock = IconStory.bind({});
Clock.args = {
  stayType: 'clock',
};

export const CheckIn = IconStory.bind({});
CheckIn.args = {
  stayType: 'checkin',
};

export const Children = IconStory.bind({});
Children.args = {
  stayType: 'children',
};

export const Smoking = IconStory.bind({});
Smoking.args = {
  stayType: 'smoking',
};

export const Pets = IconStory.bind({});
Pets.args = {
  stayType: 'pets',
};

export const Parties = IconStory.bind({});
Parties.args = {
  stayType: 'parties',
};

export const Cleaning = IconStory.bind({});
Cleaning.args = {
  stayType: 'cleaning',
};
