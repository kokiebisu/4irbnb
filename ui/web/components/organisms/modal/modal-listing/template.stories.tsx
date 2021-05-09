import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ListingModalTemplate, ListingModalTemplateProps } from './template';

export default {
  title: 'Organisms/Modal',
  component: ListingModalTemplate,
} as Meta;

const ModalStory: Story<ListingModalTemplateProps> = (args) => (
  <ListingModalTemplate {...args} />
);

export const Listing = ModalStory.bind({});
Listing.args = {};
