import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Modal, ModalProps, $Modal } from '@modal';

export default {
  title: 'Organisms/Modal',
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const ModalStory: Story<ModalProps> = (args) => <Modal {...args} />;

export const Privacy = ModalStory.bind({});
Privacy.args = {
  variant: $Modal.PRIVACY,
};

export const Menu = ModalStory.bind({});
Menu.args = {
  variant: $Modal.MENU,
};
Menu.argTypes = {
  authenticated: {
    control: 'boolean',
  },
};

export const Auth = ModalStory.bind({});
Auth.args = {
  variant: $Modal.AUTH,
};

export const Booking = ModalStory.bind({});
Booking.args = {
  variant: $Modal.BOOKING,
};

export const Globe = ModalStory.bind({});
Globe.args = {
  variant: $Modal.GLOBE,
};

export const Location = ModalStory.bind({});
Location.args = {
  variant: $Modal.LOCATION,
};

export const Guests = ModalStory.bind({});
Guests.args = {
  variant: $Modal.GUESTS,
};

export const Checkin = ModalStory.bind({});
Checkin.args = {
  variant: $Modal.CHECKIN,
};

export const Checkout = ModalStory.bind({});
Checkout.args = {
  variant: $Modal.CHECKOUT,
};

export const Listing = ModalStory.bind({});
Listing.args = {
  variant: $Modal.LISTING,
};
