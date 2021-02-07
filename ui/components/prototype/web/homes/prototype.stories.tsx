import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Prototype, PrototypeProps, $Prototype } from ".";

export default {
  title: "Prototypes/Homes",
  component: Prototype,
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const TemplateStory: Story<PrototypeProps> = (args) => <Prototype {...args} />;

export const Nearby = TemplateStory.bind({});
Nearby.args = {
  variant: $Prototype.NEARBY,
};

export const Category = TemplateStory.bind({});
Category.args = {
  variant: $Prototype.CATEGORY,
};
