import { Story, Meta } from '@storybook/react';
import { KnowBullet, KnowBulletProps } from './template';

export default {
  component: KnowBullet,
  title: 'Atoms/Bullet',
} as Meta;

const KnowBulletStory: Story<KnowBulletProps> = (args) => (
  <KnowBullet {...args} />
);
export const Know = KnowBulletStory.bind({});
Know.args = {
  categoryType: 'checkin',
  checkin: { min: '10:00am', max: '12:00pm' },
  checkout: '4:00pm',
};
