import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Footer, FooterProps } from "@footer/footer.component";

export default {
  title: "Design System/Organisms",
  component: Footer,
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const FooterTemplate: Story<FooterProps> = (args) => <Footer {...args} />;

export const footer = FooterTemplate.bind({});
footer.args = {};
