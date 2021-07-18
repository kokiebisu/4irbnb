import React from "react";
import { Story, Meta } from "@storybook/react";
import { ExperiencesHeaderTemplate } from "./template";

export default {
  title: "Organisms/Header",
  component: ExperiencesHeaderTemplate,
} as Meta;

const HeaderStory: Story<{}> = (args) => (
  <ExperiencesHeaderTemplate {...args} />
);

export const Details = HeaderStory.bind({});
Details.args = {};
