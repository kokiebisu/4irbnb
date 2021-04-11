import { Story, Meta } from '@storybook/react';
import { HostBullet, HostBulletProps } from '.';

export default {
  component: HostBullet,
  title: 'Atoms/Bullet',
  argTypes: {
    variant: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const HostBulletStory: Story<HostBulletProps> = (args) => (
  <HostBullet {...args} />
);
export const Host = HostBulletStory.bind({});
Host.args = {
  categoryType: 'review',
  total: 100,
};
