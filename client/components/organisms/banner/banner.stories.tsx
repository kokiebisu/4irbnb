import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Banner, BannerProps } from "./banner.component";
import { ContextProvider } from "../../../context/provider";

export default {
  title: "Design System/Organisms/Banner",
  component: Banner,
  argTypes: { onClick: { action: "clicked" } },
  decorators: [
    (Story) => (
      <ContextProvider>
        <Story />
      </ContextProvider>
    ),
  ],
} as Meta;

const TemplateStory: Story<BannerProps> = (args) => <Banner {...args} />;

export const homes = TemplateStory.bind({});
homes.args = {
  variant: "homes",
};

export const experiences = TemplateStory.bind({});
experiences.args = {
  variant: "experiences",
};

export const landing = TemplateStory.bind({});
landing.args = {
  variant: "landing",
};

export const onlineHost = TemplateStory.bind({});
onlineHost.args = {
  variant: "onlinehost",
};
