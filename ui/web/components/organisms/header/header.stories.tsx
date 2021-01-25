import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Header, HeaderProps } from "@header";

import * as $header from "@header/variants";

export default {
  title: "Organisms/Header",
  component: Header,
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const TemplateStory: Story<HeaderProps> = (args) => <Header {...args} />;

export const landing = TemplateStory.bind({});
landing.args = {
  variant: $header.LANDING,
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
  variant: $header.WHITE,
};

export const details = TemplateStory.bind({});
details.args = {
  variant: $header.DETAILS,
};

export const homes = TemplateStory.bind({});
homes.args = {
  variant: $header.HOMES,
};

export const experiences = TemplateStory.bind({});
experiences.args = {
  variant: $header.EXPERIENCES,
};

export const onlineHost = TemplateStory.bind({});
onlineHost.args = {
  variant: $header.ONLINEHOST,
};

export const stay = TemplateStory.bind({});
stay.args = {
  variant: $header.STAY,
};
