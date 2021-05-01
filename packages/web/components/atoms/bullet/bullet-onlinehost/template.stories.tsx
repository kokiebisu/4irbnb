import { Story, Meta } from '@storybook/react';
import {
  OnlineHostBulletTemplate,
  OnlineHostBulletTemplateProps,
} from './template';

export default {
  component: OnlineHostBulletTemplate,
  title: 'Atoms/Bullet',
} as Meta;

const OnlineHostBulletTemplateStory: Story<OnlineHostBulletTemplateProps> = (
  args
) => <OnlineHostBulletTemplate {...args} />;
export const OnlineHost = OnlineHostBulletTemplateStory.bind({});
OnlineHost.args = {
  onlinehostType: 'home',
};
