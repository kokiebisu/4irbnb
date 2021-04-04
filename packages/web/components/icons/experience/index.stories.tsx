import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ExperienceIcon, ExperienceIconTypeProps } from '.';
import { IconProps, IconPropsWithType } from '..';

export default {
  title: 'Atoms/Icons/Experience',
  component: ExperienceIcon,
} as Meta;

const size = {
  width: 40,
  height: '100%',
};

const IconStory: Story<IconPropsWithType> = (args) => (
  <ExperienceIcon {...args} />
);
const IconBundleStory: Story<IconProps & ExperienceIconTypeProps> = () => (
  <div className="flex items-center">
    {[
      { title: 'people' as const, size: { width: 32, height: 32 } },
      { title: 'language' as const, size: { width: 32, height: 32 } },
      { title: 'computer' as const, size: { width: 32, height: 32 } },
      { title: 'smile' as const, size: { width: 32, height: 32 } },
    ].map((icon) => {
      return (
        <div className="mr-2">
          <ExperienceIcon experienceType={icon.title} {...icon.size} />
        </div>
      );
    })}
  </div>
);

export const Overview = IconBundleStory.bind({});

export const People = IconStory.bind({});
People.args = {
  experienceType: 'people',
  ...size,
};

export const Language = IconStory.bind({});
Language.args = {
  experienceType: 'language',
  ...size,
};

export const Computer = IconStory.bind({});
Computer.args = {
  experienceType: 'computer',
  ...size,
};

export const Smile = IconStory.bind({});
Smile.args = {
  experienceType: 'smile',
  ...size,
};
