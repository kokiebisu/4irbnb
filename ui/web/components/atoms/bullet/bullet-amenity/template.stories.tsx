import { Story, Meta } from '@storybook/react';
import { AmenityBulletTemplate, AmenityBulletTemplateProps } from './template';

export default {
  component: AmenityBulletTemplate,
  title: 'Atoms/Bullet',
  argTypes: {
    variant: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const AmenityBulletTemplateStory: Story<AmenityBulletTemplateProps> = (
  args
) => <AmenityBulletTemplate {...args} />;
export const Amenity = AmenityBulletTemplateStory.bind({});
Amenity.args = {
  amenityType: 'smoke',
  removed: false,
};
