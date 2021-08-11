import { Story, Meta } from '@storybook/react';
import {
  RequiredBulletTemplate,
  RequiredBulletTemplateProps,
} from './template';

export default {
  component: RequiredBulletTemplate,
  title: 'Atoms/Bullet',
} as Meta;

const RequiredBulletTemplateStory: Story<RequiredBulletTemplateProps> = (
  args
) => <RequiredBulletTemplate {...args} />;
export const Required = RequiredBulletTemplateStory.bind({});
Required.args = {
  message: 'Message here',
};
