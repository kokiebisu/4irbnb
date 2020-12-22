import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

/** templates */
import { Template, TemplateProps } from "@template/template.component";

/** providers */
import { ContextProvider } from "@context/provider";

export default {
  title: "Design System/Templates/Globe",
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

export const language = TemplateStory.bind({});
language.args = {
  variant: "language",
};

export const currency = TemplateStory.bind({});
currency.args = {
  variant: "currency",
};
