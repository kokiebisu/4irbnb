import { Story, Meta } from '@storybook/react';
import {
  ScenarioBulletTemplate,
  ScenarioBulletTemplateProps,
} from './template';

export default {
  component: ScenarioBulletTemplate,
  title: 'Atoms/Bullet',
} as Meta;

const ScenarioBulletTemplateStory: Story<ScenarioBulletTemplateProps> = (
  args
) => <ScenarioBulletTemplate {...args} />;
export const Scenario = ScenarioBulletTemplateStory.bind({});
Scenario.args = {
  scenarioType: 'available',
};
