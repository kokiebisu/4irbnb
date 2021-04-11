import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PlaceInput, PlaceInputProps } from '.';

export default {
  title: 'Atoms/Input',
  component: PlaceInput,
} as Meta;

const InputStory: Story<PlaceInputProps> = (args) => <PlaceInput {...args} />;

export const Place = InputStory.bind({});
Place.args = {
  value: 'Location',
  direction: undefined,
  onPlaceChange: () => alert('on place change'),
};
