import { Icon } from '@atoms';
import { Story, Meta } from '@storybook/react';
import React from 'react';
import {
  SecondaryBulletTemplate,
  SecondaryBulletTemplateProps,
} from './template';

export default {
  component: SecondaryBulletTemplate,
  title: 'Atoms/Bullet',
} as Meta;

const BulletStory: Story<SecondaryBulletTemplateProps> = (args) => (
  <SecondaryBulletTemplate {...args} />
);
export const Secondary = BulletStory.bind({});
Secondary.args = {
  icon: (
    <Icon variant="amenity" amenityType="carbonAlarm" width={24} height={24} />
  ),
  title: 'Title here...',
  description: 'Description here...',
};
