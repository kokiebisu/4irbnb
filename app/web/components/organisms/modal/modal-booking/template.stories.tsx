import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BookingModalTemplate, BookingModalTemplateProps } from './template';

export default {
  title: 'Organisms/Modal',
  component: BookingModalTemplate,
} as Meta;

const ModalStory: Story<BookingModalTemplateProps> = (args) => (
  <BookingModalTemplate {...args} />
);

export const Booking = ModalStory.bind({});
Booking.args = {};
