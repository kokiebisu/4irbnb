import { Icon } from "@atoms";
import { Story, Meta } from "@storybook/react";
import React from "react";
import {
  QuaternaryBulletTemplate,
  QuaternaryBulletTemplateProps,
} from "./template";

export default {
  component: QuaternaryBulletTemplate,
  title: "Atoms/Bullet/Quaternary",
} as Meta;

const BulletStory: Story<QuaternaryBulletTemplateProps> = (args) => (
  <QuaternaryBulletTemplate {...args} />
);

export const Onlinehost = BulletStory.bind({});
Onlinehost.args = {
  icon: (
    <Icon variant="others" othersType="protection" width={40} height={40} />
  ),
  title: "Host insurance and protection",
  description:
    "To support you in the rare event of an incident, each booking on AIrbnb includes property damae protection of up to $1M USD and liability insurance of up to $1M USD.",
  link: "How you're protected while hosting",
};

export const Scenario = BulletStory.bind({});
Scenario.args = {
  icon: (
    <img
      style={{ width: 150 }}
      src="https://a0.muscache.com/nextbnb/static/list_your_space/scenarios-meet-guest-eaa389217c2acc8887e3f88cc197f9fe.png"
    />
  ),
  title: "You're available to host starting Dec. 21",
  description: "Lou is planning her trip and tshinks your listing is perfect.",
};
