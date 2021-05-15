import { Story, Meta } from '@storybook/react';
import { HelpBulletTemplate, HelpBulletTemplateProps } from './template';

export default {
  component: HelpBulletTemplate,
  title: 'Atoms/Bullet',
} as Meta;

const HelpBulletTemplateStory: Story<HelpBulletTemplateProps> = (args) => (
  <HelpBulletTemplate {...args} />
);
export const Help = HelpBulletTemplateStory.bind({});
Help.args = {
  helpType: 'support',
};
