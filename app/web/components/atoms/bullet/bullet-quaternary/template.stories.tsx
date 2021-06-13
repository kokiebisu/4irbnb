import { Icon } from '@atoms';
import { Story, Meta } from '@storybook/react';
import React from 'react';
import {
  QuaternaryBulletTemplate,
  QuaternaryBulletTemplateProps,
} from './template';

export default {
  component: QuaternaryBulletTemplate,
  title: 'Atoms/Bullet/Quaternary',
} as Meta;

const BulletStory: Story<QuaternaryBulletTemplateProps> = (args) => (
  <QuaternaryBulletTemplate {...args} />
);

export const Priority = BulletStory.bind({});
Priority.args = {
  icon: (
    <Icon variant="general" generalType="protection" width={40} height={40} />
  ),
  title: 'Host insurance and protection',
  description:
    'To support you in the rare event of an incident, each booking on AIrbnb includes property damae protection of up to $1M USD and liability insurance of up to $1M USD.',
  link: "How you're protected while hosting",
};
