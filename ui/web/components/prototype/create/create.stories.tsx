import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Prototype, CreateProps } from "@prototype/create";

import * as $prototype from "@prototype/create/variants";

export default {
  title: "Prototypes/Create",
  component: Prototype,
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const TemplateStory: Story<CreateProps> = (args) => <Prototype {...args} />;

export const GetStarted = TemplateStory.bind({});
GetStarted.args = {
  variant: $prototype.GETSTARTED,
};

export const Room = TemplateStory.bind({});
Room.args = {
  variant: $prototype.ROOM,
};

export const Bedrooms = TemplateStory.bind({});
Bedrooms.args = {
  variant: $prototype.BEDROOMS,
};

export const Bathrooms = TemplateStory.bind({});
Bathrooms.args = {
  variant: $prototype.BATHROOMS,
};

export const Location = TemplateStory.bind({});
Location.args = {
  variant: $prototype.LOCATION,
};

export const Amenities = TemplateStory.bind({});
Amenities.args = {
  variant: $prototype.AMENITIES,
};

export const Spaces = TemplateStory.bind({});
Spaces.args = {
  variant: $prototype.SPACES,
};

export const Description = TemplateStory.bind({});
Description.args = {
  variant: $prototype.DESCRIPTION,
};

export const Title = TemplateStory.bind({});
Title.args = {
  variant: $prototype.TITLE,
};

export const Phone = TemplateStory.bind({});
Phone.args = {
  variant: $prototype.PHONE,
};

export const Requirements = TemplateStory.bind({});
Requirements.args = {
  variant: $prototype.REQUIREMENTS,
};

export const Rules = TemplateStory.bind({});
Rules.args = {
  variant: $prototype.RULES,
};

export const Checkin = TemplateStory.bind({});
Checkin.args = {
  variant: $prototype.CHECKIN,
};

export const Advance = TemplateStory.bind({});
Advance.args = {
  variant: $prototype.ADVANCE,
};
