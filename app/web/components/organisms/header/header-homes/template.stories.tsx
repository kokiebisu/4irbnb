import React from "react";
import { Story, Meta } from "@storybook/react";
import { HomesHeaderTemplate, HomesHeaderTemplateProps } from "./template";

export default {
  title: "Organisms/Header",
  component: HomesHeaderTemplate,
} as Meta;

const HeaderStory: Story<HomesHeaderTemplateProps> = () => (
  <HomesHeaderTemplate />
);

export const Details = HeaderStory.bind({});
Details.args = {};
