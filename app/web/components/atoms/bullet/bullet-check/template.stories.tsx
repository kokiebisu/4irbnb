import { Story, Meta } from '@storybook/react';
import { CheckBulletTemplate, CheckBulletTemplateProps } from './template';

export default {
  component: CheckBulletTemplate,
  title: 'Atoms/Bullet',
} as Meta;

const CheckBulletTemplateStory: Story<CheckBulletTemplateProps> = (args) => (
  <CheckBulletTemplate {...args} />
);
export const Check = CheckBulletTemplateStory.bind({});
Check.args = {
  title: 'Title here',
};
