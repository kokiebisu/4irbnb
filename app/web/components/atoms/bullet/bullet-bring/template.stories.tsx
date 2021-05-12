import { Story, Meta } from '@storybook/react';
import { BringBulletTemplate, BringBulletTemplateProps } from './template';

export default {
  component: BringBulletTemplate,
  title: 'Atoms/Bullet',
} as Meta;

const BringBulletTemplateStory: Story<BringBulletTemplateProps> = (args) => (
  <BringBulletTemplate {...args} />
);
export const Bring = BringBulletTemplateStory.bind({});
Bring.args = {
  title: 'Title here',
};
