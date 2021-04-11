import { Story, Meta } from '@storybook/react';
import { NearbyButton, NearbyButtonProps } from '.';

export default {
  title: 'Atoms/Button',
  component: NearbyButton,
} as Meta;

const ButtonStory: Story<NearbyButtonProps> = (args) => (
  <NearbyButton {...args} />
);

export const Nearby = ButtonStory.bind({});
Nearby.args = {
  label: 'Nearby',
};
