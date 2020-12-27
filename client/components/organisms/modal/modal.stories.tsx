import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

/** components */
import { Modal, ModalProps } from "@modal/modal.component";

/** styles */
import shape from "@styles/shape.module.scss";
import layout from "@styles/layout.module.scss";
import color from "@styles/color.module.scss";

export default {
  title: "Design System/Organisms/Modal",
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const TemplateStory: Story<ModalProps> = (args) => <Modal {...args} />;

export const privacy = TemplateStory.bind({});
privacy.args = {
  variant: "privacy",
};

export const menu = TemplateStory.bind({});
menu.args = {
  variant: "menu",
  dispatch: "toggle_menu",
  extendsTo: [
    shape["br--15"],
    shape["shadow--lg"],
    layout["flex"],
    layout["items-center"],
    color["bg--white"],
    shape["w--230"],
  ].join(" "),
};
menu.argTypes = {
  authenticated: {
    control: "boolean",
  },
};

export const auth = TemplateStory.bind({});
auth.args = {
  variant: "auth",
  dispatch: "toggle_auth",
};

export const availability = TemplateStory.bind({});
availability.args = {
  variant: "availability",
};

export const booking = TemplateStory.bind({});
booking.args = {
  variant: "booking",
};

export const globe = TemplateStory.bind({});
globe.args = {
  variant: "globe",
};

export const location = TemplateStory.bind({});
location.args = {
  variant: "location",
};
location.decorators = [
  (Story) => (
    <div style={{ maxWidth: 400 }}>
      <Story />
    </div>
  ),
];

export const guests = TemplateStory.bind({});
guests.args = {
  variant: "guests",
};
guests.decorators = [
  (Story) => (
    <div style={{ maxWidth: 325 }}>
      <Story />
    </div>
  ),
];

export const check = TemplateStory.bind({});
check.args = {
  variant: "check",
};
check.decorators = [
  (Story) => (
    <div style={{ maxWidth: 720 }}>
      <Story />
    </div>
  ),
];
