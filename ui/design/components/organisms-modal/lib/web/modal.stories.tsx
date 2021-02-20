import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Modal, ModalProps, $Modal } from "..";

export default {
  title: "Organisms/Modal",
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const TemplateStory: Story<ModalProps> = (args) => <Modal {...args} />;

export const Privacy = TemplateStory.bind({});
Privacy.args = {
  variant: $Modal.PRIVACY,
};

export const Menu = TemplateStory.bind({});
Menu.args = {
  variant: $Modal.MENU,
};
Menu.argTypes = {
  authenticated: {
    control: "boolean",
  },
};

export const Auth = TemplateStory.bind({});
Auth.args = {
  variant: $Modal.AUTH,
  authState: { title: "Forgot password" },
};
Auth.argTypes = {
  title: {
    control: {
      type: "select",
      options: ["Forgot password", "Others"],
    },
  },
  display: {
    control: {
      type: "select",
      options: ["login", "signup", "auth", "forgotpassword", "exists"],
    },
  },
};

export const Booking = TemplateStory.bind({});
Booking.args = {
  variant: $Modal.BOOKING,
};

export const Globe = TemplateStory.bind({});
Globe.args = {
  variant: $Modal.GLOBE,
};

export const Location = TemplateStory.bind({});
Location.args = {
  variant: $Modal.LOCATION,
};

export const Guests = TemplateStory.bind({});
Guests.args = {
  variant: $Modal.GUESTS,
};

export const Checkin = TemplateStory.bind({});
Checkin.args = {
  variant: $Modal.CHECKIN,
};

export const Checkout = TemplateStory.bind({});
Checkout.args = {
  variant: $Modal.CHECKOUT,
};

export const Listing = TemplateStory.bind({});
Listing.args = {
  variant: $Modal.LISTING,
};
