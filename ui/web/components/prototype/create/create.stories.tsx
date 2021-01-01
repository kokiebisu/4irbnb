import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Prototype, CreateProps } from "@prototype/create";

export default {
  title: "Prototypes/Create",
  component: Prototype,
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const TemplateStory: Story<CreateProps> = (args) => <Prototype {...args} />;

export const GetStarted = TemplateStory.bind({});
GetStarted.args = {
  variant: "getstarted",
};

export const Room = TemplateStory.bind({});
Room.args = {
  variant: "room",
};

export const Bedrooms = TemplateStory.bind({});
Bedrooms.args = {
  variant: "bedrooms",
};

export const Bathrooms = TemplateStory.bind({});
Bathrooms.args = {
  variant: "bathrooms",
};

export const Location = TemplateStory.bind({});
Location.args = {
  variant: "location",
};

export const Amenities = TemplateStory.bind({});
Amenities.args = {
  variant: "amenities",
};

export const Spaces = TemplateStory.bind({});
Spaces.args = {
  variant: "spaces",
};

export const Description = TemplateStory.bind({});
Description.args = {
  variant: "description",
};

export const Title = TemplateStory.bind({});
Title.args = {
  variant: "title",
};

export const Phone = TemplateStory.bind({});
Phone.args = {
  variant: "phone",
};

export const Requirements = TemplateStory.bind({});
Requirements.args = {
  variant: "requirements",
};

export const Rules = TemplateStory.bind({});
Rules.args = {
  variant: "rules",
};

export const Checkin = TemplateStory.bind({});
Checkin.args = {
  variant: "checkin",
};

export const Advance = TemplateStory.bind({});
Advance.args = {
  variant: "advance",
};
