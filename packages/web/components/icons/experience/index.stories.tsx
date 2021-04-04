import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ExperienceIcon, ExperienceIconTypeProps } from '.';
import { IconProps, IconPropsWithType } from '..';

export default {
  title: 'Atoms/Icons/Experience',
  component: ExperienceIcon,
} as Meta;

const size = {
  width: 24,
  height: 24,
};

const IconStory: Story<IconPropsWithType> = (args) => (
  <div style={{ ...size }}>
    <ExperienceIcon {...args} />
  </div>
);
const IconBundleStory: Story<IconProps & ExperienceIconTypeProps> = () => (
  <div className="flex items-center">
    {[
      { title: 'time' as const },
      { title: 'people' as const },
      { title: 'language' as const },
      { title: 'computer' as const },
      { title: 'smile' as const },
    ].map((icon) => {
      return (
        <div className="mr-2">
          <div style={{ ...size }}>
            <ExperienceIcon experienceType={icon.title} />
          </div>
        </div>
      );
    })}
  </div>
);

export const Overview = IconBundleStory.bind({});

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
