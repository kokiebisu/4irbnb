import React from 'react';
import { Story, Meta } from '@storybook/react';
import { DestinationsTemplate, DestinationsTemplateProps } from './template';
import { categories, items } from './mock';

export default {
  title: 'Templates/Index',
  component: DestinationsTemplate,
} as Meta;

const TemplateStory: Story<DestinationsTemplateProps> = (args) => (
  <DestinationsTemplate {...args} />
);

export const Destinations = TemplateStory.bind({});
Destinations.args = {
  destinationType: 'artsCulture',
  handleDestinationTypeChange: () => alert('Should change destinationType'),
  handleDestinationRedirect: () =>
    alert('Should redirect to selected destination'),
  categories,
  items,
};
