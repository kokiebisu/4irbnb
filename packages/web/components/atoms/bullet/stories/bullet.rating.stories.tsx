import { Story, Meta } from '@storybook/react';
import { RatingBullet, RatingBulletProps } from '../bullet.rating';

export default {
  component: RatingBullet,
  title: 'Atoms/Bullet',
  argTypes: {
    variant: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const RatingBulletStory: Story<RatingBulletProps> = (args) => (
  <RatingBullet {...args} />
);
export const Rating = RatingBulletStory.bind({});
Rating.args = {
  ratings: 5,
  reviews: 100,
};
