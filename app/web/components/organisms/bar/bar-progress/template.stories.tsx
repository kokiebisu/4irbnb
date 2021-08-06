import { Meta, Story } from "@storybook/react";
import { ProgressBarTemplate, ProgressBarTemplateProps } from "./template";

export default {
  title: "Organisms/Bar",
  component: ProgressBarTemplate,
} as Meta;

const BarStory: Story<ProgressBarTemplateProps> = () => <ProgressBarTemplate />;

export const Progress = BarStory.bind({});
Progress.args = {
  percentage: 50,
};
