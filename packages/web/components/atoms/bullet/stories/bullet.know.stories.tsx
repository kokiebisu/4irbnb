import { Story, Meta } from '@storybook/react';
import { KnowBullet, KnowBulletProps } from '../bullet.know';

export default {
  component: KnowBullet,
  title: 'Atoms/Bullet',
  argTypes: {
    variant: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const KnowBulletStory: Story<KnowBulletProps> = (args) => (
  <KnowBullet {...args} />
);
export const Know = KnowBulletStory.bind({});
Know.args = {
  categoryType: 'review',
  total: 100,
};
