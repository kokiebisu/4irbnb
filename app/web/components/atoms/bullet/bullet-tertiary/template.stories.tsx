import { Icon } from '@atoms';
import { Story, Meta } from '@storybook/react';
import React from 'react';
import {
  TertiaryBulletTemplate,
  TertiaryBulletTemplateProps,
} from './template';

export default {
  component: TertiaryBulletTemplate,
  title: 'Atoms/Bullet/Tertiary',
} as Meta;

const BulletStory: Story<TertiaryBulletTemplateProps> = (args) => (
  <TertiaryBulletTemplate {...args} />
);

export const Help = BulletStory.bind({});
Help.args = {
  icon: (
    <Icon
      variant="general"
      generalType="customerService"
      width={28}
      height={28}
    />
  ),
  title: '24/7 customer support',
  description:
    'From setting up your listing to concerns about guests, our global team is here to support you by phone, email, and chat, every step of the way.',
};
