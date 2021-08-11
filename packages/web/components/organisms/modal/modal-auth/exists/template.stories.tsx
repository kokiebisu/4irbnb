import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  ExistsPrototypeTemplate,
  ExistsPrototypeTemplateProps,
} from "./template";

export default {
  title: "Organisms/Modal/Auth/Exists",
  component: ExistsPrototypeTemplate,
} as Meta;

const ExistsPrototypeStory: Story<ExistsPrototypeTemplateProps> = (args) => (
  <ExistsPrototypeTemplate {...args} />
);

export const Exists = ExistsPrototypeStory.bind({});
Exists.args = {
  handleSubmit: () => alert("handleSubmit"),
  handlePasswordChange: () => alert("handlePasswordChange"),
  handleLoading: () => alert("handleLoading"),
  password: "",
  passwordErrors: "",
  loading: false,
};
