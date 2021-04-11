import { Story, Meta } from '@storybook/react';
import { RequiredBullet, RequiredBulletProps } from '../bullet.required';

export default {
  component: RequiredBullet,
  title: 'Atoms/Bullet',
  argTypes: {
    variant: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const RequiredBulletStory: Story<RequiredBulletProps> = (args) => (
  <RequiredBullet {...args} />
);
export const Required = RequiredBulletStory.bind({});
Required.args = {
  message: 'Message here',
};
