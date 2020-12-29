import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Create, CreateProps } from "@create/create.component";

export default {
  title: "Organisms/Create",
  component: Create,
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const TemplateStory: Story<CreateProps> = (args) => <Create {...args} />;

export const getStarted = TemplateStory.bind({});
getStarted.args = {
  variant: "getstarted",
};

export const room = TemplateStory.bind({});
room.args = {
  variant: "room",
};

export const bedrooms = TemplateStory.bind({});
bedrooms.args = {
  variant: "bedrooms",
};

export const bathrooms = TemplateStory.bind({});
bathrooms.args = {
  variant: "bathrooms",
};

export const location = TemplateStory.bind({});
location.args = {
  variant: "location",
};

export const amenities = TemplateStory.bind({});
amenities.args = {
  variant: "amenities",
};

export const spaces = TemplateStory.bind({});
spaces.args = {
  variant: "spaces",
};

export const description = TemplateStory.bind({});
description.args = {
  variant: "description",
};

export const title = TemplateStory.bind({});
title.args = {
  variant: "title",
};

export const phone = TemplateStory.bind({});
phone.args = {
  variant: "phone",
};

export const requirements = TemplateStory.bind({});
requirements.args = {
  variant: "requirements",
};

export const rules = TemplateStory.bind({});
rules.args = {
  variant: "rules",
};

export const checkin = TemplateStory.bind({});
checkin.args = {
  variant: "checkin",
};

export const advance = TemplateStory.bind({});
advance.args = {
  variant: "advance",
};
