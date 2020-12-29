import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Template, TemplateProps } from "@template/template.component";

export default {
  title: "Templates/Modal",
  component: Template,
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const TemplateStory: Story<TemplateProps> = (args) => <Template {...args} />;

export const location = TemplateStory.bind({});
location.args = {
  variant: "location",
};

export const check = TemplateStory.bind({});
check.args = {
  variant: "check",
};
check.decorators = [
  (Story) => (
    <div>
      <Story />
    </div>
  ),
];
