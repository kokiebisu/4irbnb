import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Template, TemplateProps } from "../template.component";
import { ContextProvider } from "../../../context/provider";

export default {
  title: "Design System/Templates/Homes",
  component: Template,
  argTypes: { onClick: { action: "clicked" } },
  decorators: [
    (Story) => (
      <ContextProvider>
        <Story />
      </ContextProvider>
    ),
  ],
} as Meta;

const TemplateStory: Story<TemplateProps> = (args) => <Template {...args} />;

export const nearby = TemplateStory.bind({});
nearby.args = {
  variant: "nearby",
};

export const category = TemplateStory.bind({});
category.args = {
  variant: "category",
};
