import { Story, Meta } from '@storybook/react';
import { CheckBullet, CheckBulletProps } from '../bullet.check';

export default {
  component: CheckBullet,
  title: 'Atoms/Bullet',
  argTypes: {
    variant: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const CheckBulletStory: Story<CheckBulletProps> = (args) => (
  <CheckBullet {...args} />
);
export const Check = CheckBulletStory.bind({});
Check.args = {
  title: 'Title here',
};
