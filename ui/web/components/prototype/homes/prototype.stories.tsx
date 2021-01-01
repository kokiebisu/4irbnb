import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Prototype, PrototypeProps } from "@prototype";

export default {
  title: "Prototypes/Homes",
  component: Prototype,
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const TemplateStory: Story<PrototypeProps> = (args) => <Prototype {...args} />;

export const nearby = TemplateStory.bind({});
nearby.args = {
  variant: "nearby",
};

export const category = TemplateStory.bind({});
category.args = {
  variant: "category",
};
