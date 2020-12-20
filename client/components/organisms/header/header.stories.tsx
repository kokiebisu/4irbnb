import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Header, HeaderProps } from "./header.component";
import { ContextProvider } from "../../../context/provider";

export default {
  title: "Design System/Organisms/Header",
  component: Header,
  argTypes: { onClick: { action: "clicked" } },
  decorators: [
    (Story) => (
      <ContextProvider>
        <Story />
      </ContextProvider>
    ),
  ],
} as Meta;

const TemplateStory: Story<HeaderProps> = (args) => <Header {...args} />;

export const transparent = TemplateStory.bind({});
transparent.args = {
  type: "transparent",
};

export const white = TemplateStory.bind({});
white.args = {
  type: "white",
};

export const details = TemplateStory.bind({});
details.args = {
  type: "details",
};

export const homes = TemplateStory.bind({});
homes.args = {
  type: "homes",
};

export const experiences = TemplateStory.bind({});
experiences.args = {
  type: "experiences",
};

export const onlineHost = TemplateStory.bind({});
onlineHost.args = {
  type: "onlinehost",
};

export const stay = TemplateStory.bind({});
stay.args = {
  type: "stay",
};
