import React from "react";
import { Story, Meta } from "@storybook/react";
import { GuestsModalTemplate } from "./template";

export default {
  title: "Organisms/Modal",
  component: GuestsModalTemplate,
} as Meta;

const ModalStory: Story<{}> = (args) => <GuestsModalTemplate {...args} />;

export const Guests = ModalStory.bind({});
Guests.args = {};
