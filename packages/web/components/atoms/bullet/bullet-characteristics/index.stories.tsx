import { Story, Meta } from '@storybook/react';
import { CharacteristicsBullet, CharacteristicsBulletProps } from '.';

export default {
  component: CharacteristicsBullet,
  title: 'Atoms/Bullet',
  argTypes: {
    variant: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const CharacteristicsBulletStory: Story<CharacteristicsBulletProps> = (
  args
) => <CharacteristicsBullet {...args} />;
export const Characteristics = CharacteristicsBulletStory.bind({});
Characteristics.args = {
  characteristicType: 'house',
  time: 60,
  devices: ['computer'],
  people: 5,
  group: 3,
  languages: 'English',
};
