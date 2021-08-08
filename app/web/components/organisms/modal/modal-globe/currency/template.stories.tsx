import React from "react";
import { Story, Meta } from "@storybook/react";
import { CurrencyInnerTemplate } from "./template";

export default {
  title: "Prototypes/Currency",
  component: CurrencyInnerTemplate,
} as Meta;

const CurrencyPrototypeStory: Story<{}> = (args) => (
  <CurrencyInnerTemplate {...args} />
);

export const Currency = CurrencyPrototypeStory.bind({});
Currency.args = {};
