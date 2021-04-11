import { Story, Meta } from '@storybook/react';
import { QuestionBullet, QuestionBulletProps } from '../bullet.question';

export default {
  component: QuestionBullet,
  title: 'Atoms/Bullet',
  argTypes: {
    variant: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const QuestionBulletStory: Story<QuestionBulletProps> = (args) => (
  <QuestionBullet {...args} />
);
export const Question = QuestionBulletStory.bind({});
Question.args = {
  title: 'Title here',
  answer: 'Answer here',
};
