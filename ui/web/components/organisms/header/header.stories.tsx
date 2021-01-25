import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Header, HeaderProps, $Header } from "@header";

export default {
  title: "Organisms/Header",
  component: Header,
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const TemplateStory: Story<HeaderProps> = (args) => <Header {...args} />;

export const landing = TemplateStory.bind({});
landing.args = {
  variant: $Header.LANDING,
};
landing.argTypes = {
  criteria: {
    control: "boolean",
  },
};
landing.parameters = {
  storyshots: { disable: true },
};

export const white = TemplateStory.bind({});
white.args = {
  variant: $Header.WHITE,
};

export const details = TemplateStory.bind({});
details.args = {
  variant: $Header.DETAILS,
};

export const homes = TemplateStory.bind({});
homes.args = {
  variant: $Header.HOMES,
};

export const experiences = TemplateStory.bind({});
experiences.args = {
  variant: $Header.EXPERIENCES,
};

export const onlineHost = TemplateStory.bind({});
onlineHost.args = {
  variant: $Header.ONLINEHOST,
};

export const stay = TemplateStory.bind({});
stay.args = {
  variant: $Header.STAY,
};
