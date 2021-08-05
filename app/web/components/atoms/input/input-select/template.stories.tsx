import { Story, Meta } from "@storybook/react";
import { SelectInputTemplate, SelectInputTemplateProps } from "./template";

export default {
  title: "Atoms/Input",
  component: SelectInputTemplate,
} as Meta;

const InputStory: Story<SelectInputTemplateProps> = (args) => (
  <SelectInputTemplate {...args} />
);

export const Select = InputStory.bind({});
Select.args = {
  onChange: () => alert("on change"),
  value: "Apartment",
  errors: false,
  disabled: false,
  inputType: "Bed and breakfast",
};
