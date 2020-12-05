import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

/** components */
import { Modal } from "./modal.component";

/** contexts */
import { ContextProvider } from "../../../context/provider";

/** props */
import { ModalProps } from "./props";

/** styles */
import shape from "../../../styles/shape.module.scss";
import layout from "../../../styles/layout.module.scss";
import color from "../../../styles/color.module.scss";

export default {
  title: "Design System/Organisms/Modal",
  argTypes: { onPress: { action: "clicked" } },
  decorators: [
    (Story) => (
      <ContextProvider>
        <Story />
      </ContextProvider>
    ),
  ],
} as Meta;

const ModalTemplate: Story<ModalProps> = (args) => <Modal {...args} />;

export const privacy = ModalTemplate.bind({});
privacy.args = {
  type: "privacy",
};

export const menu = ModalTemplate.bind({});
menu.args = {
  type: "menu",
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

export const auth = ModalTemplate.bind({});
auth.args = {
  type: "auth",
  dispatch: "toggle_auth",
};

export const availability = ModalTemplate.bind({});
availability.args = {
  type: "availability",
};

export const booking = ModalTemplate.bind({});
booking.args = {
  type: "booking",
};
