import { Story, Meta } from '@storybook/react';
import { ScenarioBullet, ScenarioBulletProps } from '.';

export default {
  component: ScenarioBullet,
  title: 'Atoms/Bullet',
  argTypes: {
    variant: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const ScenarioBulletStory: Story<ScenarioBulletProps> = (args) => (
  <ScenarioBullet {...args} />
);
export const Scenario = ScenarioBulletStory.bind({});
Scenario.args = {
  scenarioType: 'available',
};
