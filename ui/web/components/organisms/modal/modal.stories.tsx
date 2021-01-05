import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

/** components */
import { Modal, ModalProps } from "@modal/modal.component";

/** styles */
import shape from "@styles/shape.module.scss";
import layout from "@styles/layout.module.scss";
import color from "@styles/color.module.scss";
import modal from "@modal/modal.module.scss";

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
  noPadding: true,
  extendsTo: [shape["w--200"]].join(" "),
};
Menu.argTypes = {
  authenticated: {
    control: "boolean",
  },
};

export const Auth = TemplateStory.bind({});
Auth.args = {
  variant: "auth",
  noPadding: true,
  extendsTo: [modal["w__auth"]].join(" "),
};

export const Availability = TemplateStory.bind({});
Availability.args = {
  variant: "availability",
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
Location.decorators = [
  (Story) => (
    <div style={{ maxWidth: 400 }}>
      <Story />
    </div>
  ),
];

export const Guests = TemplateStory.bind({});
Guests.args = {
  variant: "guests",
};
Guests.decorators = [
  (Story) => (
    <div style={{ maxWidth: 325 }}>
      <Story />
    </div>
  ),
];

export const Checkin = TemplateStory.bind({});
Checkin.args = {
  variant: "checkin",
};
Checkin.decorators = [
  (Story) => (
    <div style={{ maxWidth: 720 }}>
      <Story />
    </div>
  ),
];

export const Checkout = TemplateStory.bind({});
Checkout.args = {
  variant: "checkout",
};
Checkout.decorators = [
  (Story) => (
    <div style={{ maxWidth: 720 }}>
      <Story />
    </div>
  ),
];

export const Listing = TemplateStory.bind({});
Listing.args = {
  variant: "listing",
};
