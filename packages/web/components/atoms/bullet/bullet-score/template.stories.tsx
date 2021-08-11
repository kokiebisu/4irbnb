import { Story, Meta } from '@storybook/react';
import { ScoreBulletTemplate, ScoreBulletTemplateProps } from './template';

export default {
  component: ScoreBulletTemplate,
  title: 'Atoms/Bullet',
} as Meta;

const ScoreBulletTemplateStory: Story<ScoreBulletTemplateProps> = (args) => (
  <ScoreBulletTemplate {...args} />
);
export const Score = ScoreBulletTemplateStory.bind({});
Score.args = {
  category: 'Aspect',
  average: 5.0,
};
