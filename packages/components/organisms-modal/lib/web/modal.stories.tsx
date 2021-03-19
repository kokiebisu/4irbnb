import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Modal, ModalProps, $MODAL } from '..';

export default {
  title: 'Organisms/Modal',
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const TemplateStory: Story<ModalProps> = (args) => <Modal {...args} />;

export const Privacy = TemplateStory.bind({});
Privacy.args = {
  variant: $MODAL.privacy,
};

export const Menu = TemplateStory.bind({});
Menu.args = {
  variant: $MODAL.menu,
};
Menu.argTypes = {
  authenticated: {
    control: 'boolean',
  },
};

export const Auth = TemplateStory.bind({});
Auth.args = {
  variant: $MODAL.auth,
  authState: { title: 'Forgot password' },
};
Auth.argTypes = {
  title: {
    control: {
      type: 'select',
      options: ['Forgot password', 'Others'],
    },
  },
  display: {
    control: {
      type: 'select',
      options: ['login', 'signup', 'auth', 'forgotpassword', 'exists'],
    },
  },
};

export const Booking = TemplateStory.bind({});
Booking.args = {
  variant: $MODAL.booking,
};

export const Globe = TemplateStory.bind({});
Globe.args = {
  variant: $MODAL.globe,
};

export const Location = TemplateStory.bind({});
Location.args = {
  variant: $MODAL.location,
};

export const Guests = TemplateStory.bind({});
Guests.args = {
  variant: $MODAL.guests,
};

export const Checkin = TemplateStory.bind({});
Checkin.args = {
  variant: $MODAL.checkin,
};

export const Checkout = TemplateStory.bind({});
Checkout.args = {
  variant: $MODAL.checkout,
};

export const Listing = TemplateStory.bind({});
Listing.args = {
  variant: $MODAL.listing,
};
