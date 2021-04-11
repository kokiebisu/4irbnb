import { Story, Meta } from '@storybook/react';
import { AmenityBullet, AmenityBulletProps } from '.';

export default {
  component: AmenityBullet,
  title: 'Atoms/Bullet',
  argTypes: {
    variant: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const AmenityBulletStory: Story<AmenityBulletProps> = (args) => (
  <AmenityBullet {...args} />
);
export const Amenity = AmenityBulletStory.bind({});
Amenity.args = {
  amenityType: 'smoke',
  removed: false,
};
