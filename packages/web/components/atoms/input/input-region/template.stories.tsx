import { Story, Meta } from "@storybook/react";
import { RegionInputTemplate, RegionInputTemplateProps } from "./template";

export default {
  title: "Atoms/Input",
  component: RegionInputTemplate,
} as Meta;

const InputStory: Story<RegionInputTemplateProps> = (args) => (
  <RegionInputTemplate {...args} />
);

export const Region = InputStory.bind({});
Region.args = {
  onChange: () => alert("on change"),
  value: "canada",
  errors: false,
};
