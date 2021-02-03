import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Template, TemplateProps, $Template } from ".";

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
  variant: $Template.BANNER,
};

export const Cards = TemplateStory.bind({});
Cards.args = {
  variant: $Template.CARDS,
};

export const Starting = TemplateStory.bind({});
Starting.args = {
  variant: $Template.STARTING,
};

export const Collections = TemplateStory.bind({});
Collections.args = {
  variant: $Template.COLLECTIONS,
};
