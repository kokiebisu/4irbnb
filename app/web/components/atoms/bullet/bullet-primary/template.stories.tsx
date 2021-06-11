import { Icon } from '@atoms';
import { Story, Meta } from '@storybook/react';
import React from 'react';
import { PrimaryBulletTemplate, PrimaryBulletTemplateProps } from './template';

export default {
  component: PrimaryBulletTemplate,
  title: 'Atoms/Bullet/Primary',
} as Meta;

const BulletStory: Story<PrimaryBulletTemplateProps> = (args) => (
  <PrimaryBulletTemplate {...args} />
);
export const Amenity = BulletStory.bind({});
Amenity.args = {
  icon: (
    <Icon variant="amenity" amenityType="carbonAlarm" width={24} height={24} />
  ),
  title: 'There should be some text here...',
};

export const Checklist = BulletStory.bind({});
Checklist.args = {
  icon: <Icon variant="semantic" semanticType="check" width={24} height={24} />,
  title: 'Bring these...',
};
