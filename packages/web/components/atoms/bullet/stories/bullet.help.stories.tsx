import { Story, Meta } from '@storybook/react';
import { HelpBullet, HelpBulletProps } from '../bullet.help';

export default {
  component: HelpBullet,
  title: 'Atoms/Bullet',
  argTypes: {
    variant: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const HelpBulletStory: Story<HelpBulletProps> = (args) => (
  <HelpBullet {...args} />
);
export const Help = HelpBulletStory.bind({});
Help.args = {
  help: 'support',
};
