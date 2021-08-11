import { Story, Meta } from "@storybook/react";
import { PriceInputTemplate, PriceInputTemplateProps } from "./template";

export default {
  title: "Atoms/Input",
  component: PriceInputTemplate,
} as Meta;

const InputStory: Story<PriceInputTemplateProps> = (args) => (
  <PriceInputTemplate {...args} />
);

export const Price = InputStory.bind({});
Price.args = {
  name: "text",
  onChange: () => alert("on change"),
  onKeyPress: () => alert("on key press"),
  value: 500,
};
