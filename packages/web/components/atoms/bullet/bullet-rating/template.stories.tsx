import { Story, Meta } from '@storybook/react';
import { RatingBulletTemplate, RatingBulletTemplateProps } from './template';

export default {
  component: RatingBulletTemplate,
  title: 'Atoms/Bullet',
} as Meta;

const RatingBulletTemplateStory: Story<RatingBulletTemplateProps> = (args) => (
  <RatingBulletTemplate {...args} />
);
export const Rating = RatingBulletTemplateStory.bind({});
Rating.args = {
  ratings: 5,
  reviews: 100,
};
