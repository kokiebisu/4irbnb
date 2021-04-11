import { Story, Meta } from '@storybook/react';
import { ExperienceBullet, ExperienceBulletProps } from '.';

export default {
  component: ExperienceBullet,
  title: 'Atoms/Bullet',
  argTypes: {
    variant: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const ExperienceBulletStory: Story<ExperienceBulletProps> = (args) => (
  <ExperienceBullet {...args} />
);
export const Experience = ExperienceBulletStory.bind({});
Experience.args = {
  experienceType: 'hosts',
};
