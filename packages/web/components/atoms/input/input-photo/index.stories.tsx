import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PhotoInput, PhotoInputProps } from '.';

export default {
  title: 'Atoms/Input',
  component: PhotoInput,
} as Meta;

const InputStory: Story<PhotoInputProps> = (args) => <PhotoInput {...args} />;

export const Photo = InputStory.bind({});
Photo.args = {
  onChange: () => alert('on change'),
};
