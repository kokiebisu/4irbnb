import React from 'react';
import { Story, Meta } from '@storybook/react';
import { LocationModalTemplate, LocationModalTemplateProps } from './template';

export default {
  title: 'Organisms/Modal',
  component: LocationModalTemplate,
} as Meta;

const ModalStory: Story<LocationModalTemplateProps> = (args) => (
  <LocationModalTemplate {...args} />
);

export const Location = ModalStory.bind({});
Location.args = {};
