import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

/** components */
import { Modal, ModalProps } from "@modal";

export default {
  title: "Organisms/Modal",
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const TemplateStory: Story<ModalProps> = (args) => <Modal {...args} />;

export const Privacy = TemplateStory.bind({});
Privacy.args = {
  variant: "privacy",
};

export const Menu = TemplateStory.bind({});
Menu.args = {
  variant: "menu",
};
Menu.argTypes = {
  authenticated: {
    control: "boolean",
  },
};

export const Auth = TemplateStory.bind({});
Auth.args = {
  variant: "auth",
};

export const Booking = TemplateStory.bind({});
Booking.args = {
  variant: "booking",
};

export const Globe = TemplateStory.bind({});
Globe.args = {
  variant: "globe",
};

export const Location = TemplateStory.bind({});
Location.args = {
  variant: "location",
};

export const Guests = TemplateStory.bind({});
Guests.args = {
  variant: "guests",
};

export const Checkin = TemplateStory.bind({});
Checkin.args = {
  variant: "checkin",
};

export const Checkout = TemplateStory.bind({});
Checkout.args = {
  variant: "checkout",
};

export const Listing = TemplateStory.bind({});
Listing.args = {
  variant: "listing",
};
