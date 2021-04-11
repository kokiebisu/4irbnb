import { Story, Meta } from '@storybook/react';
import {
  CharacteristicsBullet,
  CharacteristicsBulletProps,
} from '../bullet.characteristics';

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
  title: 'Title here',
};
