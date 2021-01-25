import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Modal, ModalProps } from "@modal";

import * as $modal from "@modal/variants";

export default {
  title: "Organisms/Modal",
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const TemplateStory: Story<ModalProps> = (args) => <Modal {...args} />;

export const Privacy = TemplateStory.bind({});
Privacy.args = {
  variant: $modal.PRIVACY,
};

export const Menu = TemplateStory.bind({});
Menu.args = {
  variant: $modal.MENU,
};
Menu.argTypes = {
  authenticated: {
    control: "boolean",
  },
};

export const Auth = TemplateStory.bind({});
Auth.args = {
  variant: $modal.AUTH,
};

export const Booking = TemplateStory.bind({});
Booking.args = {
  variant: $modal.BOOKING,
};

export const Globe = TemplateStory.bind({});
Globe.args = {
  variant: $modal.GLOBE,
};

export const Location = TemplateStory.bind({});
Location.args = {
  variant: $modal.LOCATION,
};

export const Guests = TemplateStory.bind({});
Guests.args = {
  variant: $modal.GUESTS,
};

export const Checkin = TemplateStory.bind({});
Checkin.args = {
  variant: $modal.CHECKIN,
};

export const Checkout = TemplateStory.bind({});
Checkout.args = {
  variant: $modal.CHECKOUT,
};

export const Listing = TemplateStory.bind({});
Listing.args = {
  variant: $modal.LISTING,
};
