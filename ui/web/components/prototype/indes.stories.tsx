import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Prototype, PrototypeProps } from "@prototype";

export default {
  title: "Prototypes/Searchbar",
  component: Prototype,
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const TemplateStory: Story<PrototypeProps> = (args) => <Prototype {...args} />;

export const Searchbar = TemplateStory.bind({});
Searchbar.args = {
  variant: "searchbar",
};
Searchbar.decorators = [
  (Story) => (
    <div style={{ maxWidth: 720 }}>
      <Story />
    </div>
  ),
];
