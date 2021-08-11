import React from "react";
import { Story, Meta } from "@storybook/react";
import { ListingModalTemplate } from "./template";

export default {
  title: "Organisms/Modal",
  component: ListingModalTemplate,
} as Meta;

const ModalStory: Story<{}> = (args) => <ListingModalTemplate {...args} />;

export const Listing = ModalStory.bind({});
Listing.args = {};
