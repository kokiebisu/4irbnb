import { Story, Meta } from '@storybook/react';
import { HostBulletTemplate, HostBulletTemplateProps } from './template';

export default {
  component: HostBulletTemplate,
  title: 'Atoms/Bullet',
} as Meta;

const HostBulletTemplateStory: Story<HostBulletTemplateProps> = (args) => (
  <HostBulletTemplate {...args} />
);
export const Host = HostBulletTemplateStory.bind({});
Host.args = {
  hostType: 'review',
  total: 100,
};
