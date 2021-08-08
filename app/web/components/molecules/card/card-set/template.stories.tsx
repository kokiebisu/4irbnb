import { Meta, Story } from "@storybook/react";
import { SetCardTemplate } from "./template";

export default {
  title: "Molecules/Card",
  component: SetCardTemplate,
} as Meta;

const CardStory: Story<{}> = (args) => <SetCardTemplate {...args} />;

export const Set = CardStory.bind({});
Set.args = {};
