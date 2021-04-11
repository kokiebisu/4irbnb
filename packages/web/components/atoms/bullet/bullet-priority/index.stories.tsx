import { Story, Meta } from '@storybook/react';
import { PriorityBullet, PriorityBulletProps } from '.';

export default {
  component: PriorityBullet,
  title: 'Atoms/Bullet',
  argTypes: {
    variant: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const PriorityBulletStory: Story<PriorityBulletProps> = (args) => (
  <PriorityBullet {...args} />
);
export const Priority = PriorityBulletStory.bind({});
Priority.args = {
  priorityType: 'protection',
  onClick: () => alert('Clicked'),
};
