import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Prototype, PrototypeProps, $Prototype } from "@prototype/globe";

export default {
  title: "Prototypes/Globe",
  component: Prototype,
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const TemplateStory: Story<PrototypeProps> = (args) => <Prototype {...args} />;

export const Language = TemplateStory.bind({});
Language.args = {
  variant: $Prototype.LANGUAGE,
};

export const Currency = TemplateStory.bind({});
Currency.args = {
  variant: $Prototype.CURRENCY,
};
