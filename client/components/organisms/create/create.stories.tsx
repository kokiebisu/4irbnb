import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Create } from "./create.component";

/** Props */
import { CreateProps } from "./props";

/** Contexts */
import { StayProvider } from "../../../context/stay";

export default {
  title: "Design System/Organisms/Create",
  component: Create,
  argTypes: { onPress: { action: "clicked" } },
  decorators: [
    (Story) => (
      <StayProvider>
        <Story />
      </StayProvider>
    ),
  ],
} as Meta;

const CreateStories: Story<CreateProps> = (args) => <Create {...args} />;

export const getStarted = CreateStories.bind({});
getStarted.args = {
  type: "getstarted",
};

export const room = CreateStories.bind({});
room.args = {
  type: "room",
};
