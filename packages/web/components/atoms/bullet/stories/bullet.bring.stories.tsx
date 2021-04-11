import { Story, Meta } from '@storybook/react';
import { BringBullet, BringBulletProps } from '../bullet.bring';

export default {
  component: BringBullet,
  title: 'Atoms/Bullet',
  argTypes: {
    variant: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const BringBulletStory: Story<BringBulletProps> = (args) => (
  <BringBullet {...args} />
);
export const Bring = BringBulletStory.bind({});
Bring.args = {
  title: 'Title here',
};
