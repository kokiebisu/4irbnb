import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Create } from "./create.component";

/** props */
import { CreateProps } from "./props";

/** contexts */
import { StayProvider } from "../../../context/stay";

export default {
  title: "Design System/Organisms/Create",
  component: Create,
  argTypes: { onClick: { action: "clicked" } },
  decorators: [
    (Story) => (
      <StayProvider>
        <Story />
      </StayProvider>
    ),
  ],
} as Meta;

const Template: Story<CreateProps> = (args) => <Create {...args} />;

export const getStarted = Template.bind({});
getStarted.args = {
  type: "getstarted",
};

export const room = Template.bind({});
room.args = {
  type: "room",
};

export const bedrooms = Template.bind({});
bedrooms.args = {
  type: "bedrooms",
};

export const bathrooms = Template.bind({});
bathrooms.args = {
  type: "bathrooms",
};

export const location = Template.bind({});
location.args = {
  type: "location",
};

export const amenities = Template.bind({});
amenities.args = {
  type: "amenities",
};

export const spaces = Template.bind({});
spaces.args = {
  type: "spaces",
};

export const description = Template.bind({});
description.args = {
  type: "description",
};

export const title = Template.bind({});
title.args = {
  type: "title",
};

export const phone = Template.bind({});
phone.args = {
  type: "phone",
};

export const requirements = Template.bind({});
requirements.args = {
  type: "requirements",
};

export const rules = Template.bind({});
rules.args = {
  type: "rules",
};
