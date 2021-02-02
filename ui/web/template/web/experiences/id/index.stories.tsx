import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Template, TemplateProps, $Template } from ".";

export default {
  title: "Templates/Experiences/ID",
  component: Template,
  argTypes: {
    onClick: { action: "clicked" },
    type: { control: { disable: true } },
    extendsTo: { control: { disable: true } },
  },
} as Meta;

const TemplateStory: Story<TemplateProps> = (args) => <Template {...args} />;

export const Experiences = TemplateStory.bind({});
Experiences.args = {
  variant: $Template.EXPERIENCES,
};

export const Participate = TemplateStory.bind({});
Participate.args = {
  variant: $Template.PARTICIPATE,
};

export const Bring = TemplateStory.bind({});
Bring.args = {
  variant: $Template.BRING,
};

export const Characteristics = TemplateStory.bind({});
Characteristics.args = {
  variant: $Template.CHARACTERISTIC,
};

export const Available = TemplateStory.bind({});
Available.args = {
  variant: $Template.AVAILABLE,
};

export const Preview = TemplateStory.bind({});
Preview.args = {
  variant: $Template.PREVIEW,
};

export const Description = TemplateStory.bind({});
Description.args = {
  variant: $Template.DESCRIPTION,
};

export const Host = TemplateStory.bind({});
Host.args = {
  variant: $Template.HOST,
};

export const Know = TemplateStory.bind({});
Know.args = {
  variant: $Template.KNOW,
};

export const Reviews = TemplateStory.bind({});
Reviews.args = {
  variant: $Template.REVIEWS,
};
