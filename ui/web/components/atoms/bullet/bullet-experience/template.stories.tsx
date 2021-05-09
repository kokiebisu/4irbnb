import { Story, Meta } from '@storybook/react';
import {
  ExperienceBulletTemplate,
  ExperienceBulletTemplateProps,
} from './template';

export default {
  component: ExperienceBulletTemplate,
  title: 'Atoms/Bullet',
} as Meta;

const ExperienceBulletTemplateStory: Story<ExperienceBulletTemplateProps> = (
  args
) => <ExperienceBulletTemplate {...args} />;
export const Experience = ExperienceBulletTemplateStory.bind({});
Experience.args = {
  experienceType: 'hosts',
};
