import { Icon } from "@atoms";
import { Story, Meta } from "@storybook/react";
import { ModalButtonTemplate, ModalButtonTemplateProps } from "./template";

export default {
  title: "Atoms/Button/Modal",
  component: ModalButtonTemplate,
} as Meta;

const ButtonStory: Story<ModalButtonTemplateProps> = (args) => (
  <ModalButtonTemplate {...args} />
);

export const Close = ButtonStory.bind({});
Close.args = {
  icon: (
    <Icon
      variant="stroke"
      strokeType="close"
      width={16}
      height={16}
      stroke="black"
      strokeWidth={2}
    />
  ),
  onClick: () => alert("Triggered onClick"),
};

export const Back = ButtonStory.bind({});
Back.args = {
  icon: (
    <Icon
      variant="stroke"
      strokeType="chevronLeft"
      width={16}
      height={16}
      stroke="black"
      strokeWidth={2}
    />
  ),
  onClick: () => alert("Triggered onClick"),
};
