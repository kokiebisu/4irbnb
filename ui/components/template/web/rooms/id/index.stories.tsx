import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Template, TemplateProps, $Template } from ".";

export default {
  title: "Templates/Rooms/ID",
  component: Template,
  argTypes: {
    onClick: { action: "clicked" },
    type: { control: { disable: true } },
    extendsTo: { control: { disable: true } },
  },
} as Meta;

const TemplateStory: Story<TemplateProps> = (args) => <Template {...args} />;

export const Reviews = TemplateStory.bind({});
Reviews.args = {
  variant: $Template.REVIEWS,
};

export const Arrangements = TemplateStory.bind({});
Arrangements.args = {
  variant: $Template.ARRANGEMENTS,
};

export const Amenities = TemplateStory.bind({});
Amenities.args = {
  variant: $Template.AMENITIES,
};
Amenities.decorators = [
  (Story) => (
    <div style={{ maxWidth: 600 }}>
      <Story />
    </div>
  ),
];

export const Host = TemplateStory.bind({});
Host.args = {
  variant: $Template.HOST,
};
Host.decorators = [
  (Story) => (
    <div style={{ maxWidth: 1280 }}>
      <Story />
    </div>
  ),
];

export const Preview = TemplateStory.bind({});
Preview.args = {
  variant: $Template.PREVIEW,
};

export const Other = TemplateStory.bind({});
Other.args = {
  variant: $Template.OTHER,
};

export const Description = TemplateStory.bind({});
Description.args = {
  variant: $Template.DESCRIPTION,
};

export const Know = TemplateStory.bind({});
Know.args = {
  variant: $Template.KNOW,
};
