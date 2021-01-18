import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Template, TemplateProps } from "@template/s/experiences/online";

export default {
  title: "Templates/S/Experiences/Online",
  component: Template,
  argTypes: {
    onClick: { action: "clicked" },
    type: { control: { disable: true } },
    extendsTo: { control: { disable: true } },
  },
} as Meta;

const TemplateStory: Story<TemplateProps> = (args) => <Template {...args} />;

export const Banner = TemplateStory.bind({});
Banner.args = {
  variant: "banner",
};

export const Cards = TemplateStory.bind({});
Cards.args = {
  variant: "cards",
};

export const Starting = TemplateStory.bind({});
Starting.args = {
  variant: "starting",
};

export const Collections = TemplateStory.bind({});
Collections.args = {
  variant: "collections",
};
