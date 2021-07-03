import { Story, Meta } from '@storybook/react';
import { IconProps } from '..';
import { AmenityIconTemplate, AmenityIconTemplateProps } from './template';

export default {
  title: 'Atoms/Icon/Amenity',
  component: AmenityIconTemplate,
} as Meta;

const size = {
  width: 24,
  height: 24,
};

const IconStory: Story<IconProps & AmenityIconTemplateProps> = (args) => (
  <div style={{ ...size }}>
    <AmenityIconTemplate {...args} />
  </div>
);
const IconBundleStory: Story<{}> = () => (
  <div className="flex items-center flex-wrap">
    {[
      { title: 'smokeAlarm' as const },
      { title: 'tv' as const },
      { title: 'kitchen' as const },
      { title: 'heating' as const },
      { title: 'privateEntrance' as const },
      { title: 'carbonAlarm' as const },
    ].map((icon) => {
      return (
        <div className="mr-2">
          <div className="mb-2" style={{ ...size }}>
            <AmenityIconTemplate amenityType={icon.title} />
          </div>
        </div>
      );
    })}
  </div>
);

export const Overview = IconBundleStory.bind({});

export const SmokeAlarm = IconStory.bind({});
SmokeAlarm.args = {
  amenityType: 'smokeAlarm',
};

export const TV = IconStory.bind({});
TV.args = {
  amenityType: 'tv',
};

export const Kitchen = IconStory.bind({});
Kitchen.args = {
  amenityType: 'kitchen',
};

export const Heating = IconStory.bind({});
Heating.args = {
  amenityType: 'heating',
};

export const PrivateEntrance = IconStory.bind({});
PrivateEntrance.args = {
  amenityType: 'privateEntrance',
};

export const CarbonAlarm = IconStory.bind({});
CarbonAlarm.args = {
  amenityType: 'carbonAlarm',
};
