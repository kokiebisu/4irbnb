import { Story, Meta } from '@storybook/react';
import { ExperienceIcon, ExperienceIconTypeProps } from '.';
import { IconProps, BaseIconProps } from '..';

export default {
  title: 'Atoms/Icons/Experience',
  component: ExperienceIcon,
} as Meta;

const size = {
  width: 24,
  height: 24,
};

const IconStory: Story<BaseIconProps> = (args) => (
  <div style={{ ...size }}>
    <ExperienceIcon {...args} />
  </div>
);
const IconBundleStory: Story<IconProps & ExperienceIconTypeProps> = () => (
  <div className="flex items-center flex-wrap">
    {[
      { title: 'time' as const },
      { title: 'people' as const },
      { title: 'language' as const },
      { title: 'computer' as const },
      { title: 'smile' as const },
      { title: 'activity' as const },
    ].map((icon) => {
      return (
        <div className="mr-2">
          <div className="mb-2" style={{ ...size }}>
            <ExperienceIcon experienceType={icon.title} />
          </div>
        </div>
      );
    })}
  </div>
);

export const Overview = IconBundleStory.bind({});

export const Time = IconStory.bind({});
Time.args = {
  experienceType: 'time',
};

export const People = IconStory.bind({});
People.args = {
  experienceType: 'people',
};

export const Language = IconStory.bind({});
Language.args = {
  experienceType: 'language',
};

export const Computer = IconStory.bind({});
Computer.args = {
  experienceType: 'computer',
};

export const Smile = IconStory.bind({});
Smile.args = {
  experienceType: 'smile',
};

export const Activity = IconStory.bind({});
Activity.args = {
  experienceType: 'activity',
};
