import { Icon } from "@atoms";
import { Meta, Story } from "@storybook/react";
import {
  ParticipateCardTemplate,
  ParticipateCardTemplateProps,
} from "./template";

export default {
  title: "Molecules/Card",
  component: ParticipateCardTemplate,
} as Meta;

const CardStory: Story<ParticipateCardTemplateProps> = (args) => (
  <ParticipateCardTemplate {...args} />
);

export const Participate = CardStory.bind({});
Participate.args = {
  icon: (
    <Icon
      variant="fill"
      fillType="calendar"
      width={32}
      height={32}
      fill="black"
    />
  ),
  title: "Request availability",
  description:
    "Can’t find a date that works? Cici can schedule and customize an experience based on your preferences.",
  more: "Contact Cici",
};
Participate.decorators = [
  (Story) => (
    <div style={{ maxWidth: 300 }}>
      <Story />
    </div>
  ),
];
