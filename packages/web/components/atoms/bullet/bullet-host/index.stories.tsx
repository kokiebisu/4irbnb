import { Story, Meta } from '@storybook/react';
import { HostBullet, HostBulletProps } from './template';

export default {
  component: HostBullet,
  title: 'Atoms/Bullet',
} as Meta;

const HostBulletStory: Story<HostBulletProps> = (args) => (
  <HostBullet {...args} />
);
export const Host = HostBulletStory.bind({});
Host.args = {
  hostType: 'review',
  total: 100,
};
