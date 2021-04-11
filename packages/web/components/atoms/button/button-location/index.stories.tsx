import React from 'react';
import { Story, Meta } from '@storybook/react';
import { LocationButton, LocationButtonProps } from '.';

export default {
  title: 'Atoms/Button',
  component: LocationButton,
} as Meta;

const ButtonStory: Story<LocationButtonProps> = (args) => (
  <LocationButton {...args} />
);

export const Location = ButtonStory.bind({});
Location.args = {
  type: 'explore',
  location,
  from: 'June 17th',
  to: 'June 23rd',
  guests: 4,
};
