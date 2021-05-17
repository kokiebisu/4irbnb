import { Story, Meta } from '@storybook/react';
import {
  CharacteristicsBulletTemplate,
  CharacteristicsBulletTemplateProps,
} from './template';

export default {
  component: CharacteristicsBulletTemplate,
  title: 'Atoms/Bullet',
  argTypes: {
    variant: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const CharacteristicsBulletTemplateStory: Story<CharacteristicsBulletTemplateProps> = (
  args
) => <CharacteristicsBulletTemplate {...args} />;
export const Characteristics = CharacteristicsBulletTemplateStory.bind({});
Characteristics.args = {
  characteristicType: 'house',
  duration: '1 hour',
  devices: ['computer'],
  people: 5,
  group: 3,
  languages: ['English'],
};
