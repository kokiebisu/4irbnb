import { Story, Meta } from '@storybook/react';
import { LocationButton, LocationButtonProps } from '.';

export default {
  component: LocationButton,
  title: 'Atoms/Button',
} as Meta;

const ButtonStory: Story<LocationButtonProps> = (args) => (
  <LocationButton {...args} />
);

export const Location = ButtonStory.bind({});
Location.args = {
  locationType: 'explore',
  location: 'Vancouver',
  from: 'June 17th',
  to: 'June 23rd',
  guests: 4,
};
