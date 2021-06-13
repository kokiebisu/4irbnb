import { Icon } from '@atoms';
import { Story, Meta } from '@storybook/react';
import React from 'react';
import {
  SecondaryBulletTemplate,
  SecondaryBulletTemplateProps,
} from './template';

export default {
  component: SecondaryBulletTemplate,
  title: 'Atoms/Bullet/Secondary',
} as Meta;

const BulletStory: Story<SecondaryBulletTemplateProps> = (args) => (
  <SecondaryBulletTemplate {...args} />
);
export const Amenity = BulletStory.bind({});
Amenity.args = {
  icon: (
    <Icon variant="amenity" amenityType="carbonAlarm" width={24} height={24} />
  ),
  title: 'Title here...',
  description: 'Description here...',
};

export const Experience = BulletStory.bind({});
Experience.args = {
  icon: (
    <Icon variant="experience" experienceType="smile" width={36} height={36} />
  ),
  title: 'Thoughtful hosts',
  description:
    'Get to know hosts who share their expertise and a window to their world.',
};
