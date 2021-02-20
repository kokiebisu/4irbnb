import React from "react";
import { Story, Meta } from "@storybook/react";
import { Prototype, CreateProps, $Prototype } from "..";

export default {
  title: "Prototypes/Create",
  component: Prototype,
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const TemplateStory: Story<CreateProps> = (args) => <Prototype {...args} />;

export const GetStarted = TemplateStory.bind({});
GetStarted.args = {
  variant: $Prototype.GETSTARTED,
};

export const Room = TemplateStory.bind({});
Room.args = {
  variant: $Prototype.ROOM,
};

export const Bedrooms = TemplateStory.bind({});
Bedrooms.args = {
  variant: $Prototype.BEDROOMS,
};

export const Bathrooms = TemplateStory.bind({});
Bathrooms.args = {
  variant: $Prototype.BATHROOMS,
};

export const Location = TemplateStory.bind({});
Location.args = {
  variant: $Prototype.LOCATION,
};

export const Amenities = TemplateStory.bind({});
Amenities.args = {
  variant: $Prototype.AMENITIES,
};

export const Spaces = TemplateStory.bind({});
Spaces.args = {
  variant: $Prototype.SPACES,
};

export const Description = TemplateStory.bind({});
Description.args = {
  variant: $Prototype.DESCRIPTION,
};

export const Title = TemplateStory.bind({});
Title.args = {
  variant: $Prototype.TITLE,
};

export const Phone = TemplateStory.bind({});
Phone.args = {
  variant: $Prototype.PHONE,
};

export const Requirements = TemplateStory.bind({});
Requirements.args = {
  variant: $Prototype.REQUIREMENTS,
};

export const Rules = TemplateStory.bind({});
Rules.args = {
  variant: $Prototype.RULES,
};

export const Checkin = TemplateStory.bind({});
Checkin.args = {
  variant: $Prototype.CHECKIN,
};

export const Advance = TemplateStory.bind({});
Advance.args = {
  variant: $Prototype.ADVANCE,
};
