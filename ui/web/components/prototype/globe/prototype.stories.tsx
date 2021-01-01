import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

/** Prototypes */
import { Prototype, PrototypeProps } from "@prototype";

export default {
  title: "Prototypes/Globe",
  component: Prototype,
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const TemplateStory: Story<PrototypeProps> = (args) => <Prototype {...args} />;

export const language = TemplateStory.bind({});
language.args = {
  variant: "language",
};

export const currency = TemplateStory.bind({});
currency.args = {
  variant: "currency",
};
