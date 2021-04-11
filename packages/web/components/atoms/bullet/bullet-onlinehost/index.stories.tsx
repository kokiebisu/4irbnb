import { Story, Meta } from '@storybook/react';
import { OnlineHostBullet, OnlineHostBulletProps } from '.';

export default {
  component: OnlineHostBullet,
  title: 'Atoms/Bullet',
  argTypes: {
    variant: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const OnlineHostBulletStory: Story<OnlineHostBulletProps> = (args) => (
  <OnlineHostBullet {...args} />
);
export const OnlineHost = OnlineHostBulletStory.bind({});
OnlineHost.args = {
  onlinehostType: 'home',
};
