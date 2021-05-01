import { Story, Meta } from '@storybook/react';
import {
  QuestionBulletTemplate,
  QuestionBulletTemplateProps,
} from './template';

export default {
  component: QuestionBulletTemplate,
  title: 'Atoms/Bullet',
} as Meta;

const QuestionBulletTemplateStory: Story<QuestionBulletTemplateProps> = (
  args
) => <QuestionBulletTemplate {...args} />;
export const Question = QuestionBulletTemplateStory.bind({});
Question.args = {
  title: 'Title here',
  answer: 'Answer here',
};
