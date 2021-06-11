import { Story, Meta } from '@storybook/react';
import { StayIconTemplate, StayIconTemplateProps } from './template';

export default {
  title: 'Atoms/Icons/Stay',
  component: StayIconTemplate,
} as Meta;

const size = {
  width: 24,
  height: 24,
};

const IconStory: Story<StayIconTemplateProps> = (args) => (
  <div style={{ ...size }}>
    <StayIconTemplate {...args} />
  </div>
);
const IconBundleStory: Story<StayIconTemplateProps> = () => (
  <div className="flex items-center flex-wrap">
    {[
      { stayType: 'doublebed' as const },
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
          <div className="mb-2" style={{ ...size }}>
            <StayIconTemplate {...args} />
          </div>
        </div>
      );
    })}
  </div>
);

export const Overview = IconBundleStory.bind({});

export const DoubleBed = IconStory.bind({});
DoubleBed.args = {
  stayType: 'doublebed',
};

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
