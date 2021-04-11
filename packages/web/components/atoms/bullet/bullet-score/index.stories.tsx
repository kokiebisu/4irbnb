import { Story, Meta } from '@storybook/react';
import { ScoreBullet, ScoreBulletProps } from '.';

export default {
  component: ScoreBullet,
  title: 'Atoms/Bullet',
  argTypes: {
    variant: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const ScoreBulletStory: Story<ScoreBulletProps> = (args) => (
  <ScoreBullet {...args} />
);
export const Score = ScoreBulletStory.bind({});
Score.args = {
  category: 'Aspect',
  average: 5.0,
};
