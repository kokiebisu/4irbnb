import { Story, Meta } from '@storybook/react';
import {
  PriorityBulletTemplate,
  PriorityBulletTemplateProps,
} from './template';

export default {
  component: PriorityBulletTemplate,
  title: 'Atoms/Bullet',
} as Meta;

const PriorityBulletTemplateStory: Story<PriorityBulletTemplateProps> = (
  args
) => <PriorityBulletTemplate {...args} />;
export const Priority = PriorityBulletTemplateStory.bind({});
Priority.args = {
  priorityType: 'protection',
  onClick: () => alert('Clicked'),
};
