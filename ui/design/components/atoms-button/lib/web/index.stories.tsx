import React from "react";
import { Button, $Button, ButtonProps } from "..";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const TemplateStory: Story<ButtonProps> = (args) => <Button {...args} />;

export const Auth = TemplateStory.bind({});
Auth.args = {
  variant: $Button.AUTH,
  onClick() {
    alert("Auth Button Pressed");
  },
};

export const Back = TemplateStory.bind({});
Back.args = {
  variant: $Button.BACK,
  onClick() {
    alert("Back Button Pressed");
  },
};

export const Banner = TemplateStory.bind({});
Banner.args = {
  variant: $Button.BANNER,
  onClick() {
    alert("Banner Button Pressed");
  },
};

export const Bar = TemplateStory.bind({});
Bar.args = {
  variant: $Button.BAR,
  onClick() {
    alert("Bar Button Pressed");
  },
};

export const Border = TemplateStory.bind({});
Border.args = {
  variant: $Button.BORDER,
  onClick() {
    alert("Border Button Pressed");
  },
};

export const Calendar = TemplateStory.bind({});
Calendar.args = {
  variant: $Button.CALENDAR,
  onClick() {
    alert("Calendar Button Pressed");
  },
};

export const Closed = TemplateStory.bind({});
Closed.args = {
  variant: $Button.CLOSED,
  onClick() {
    alert("Closed Button Pressed");
  },
};

export const Currency = TemplateStory.bind({});
Currency.args = {
  variant: $Button.CURRENCY,
  onClick() {
    alert("Closed Button Pressed");
  },
};

export const Destination = TemplateStory.bind({});
Destination.args = {
  variant: $Button.DESTINATION,
  onClick() {
    alert("Closed Button Pressed");
  },
};

export const Expand = TemplateStory.bind({});
Expand.args = {
  variant: $Button.EXPAND,
  onClick() {
    alert("Closed Button Pressed");
  },
};
