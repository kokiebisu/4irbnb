import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Bullet, BulletProps } from "@bullet";

/** types */
import { types as OnlineHostTypes } from "@bullet/bullet.onlinehost";

export default {
  title: "Atoms/Bullet",
  component: Bullet,
  argTypes: {
    variant: {
      control: { disable: true },
    },
    extendsTo: {
      control: { disable: true },
    },
  },
} as Meta;

const TemplateStory: Story<BulletProps> = (args) => <Bullet {...args} />;

export const Characteristic = TemplateStory.bind({});
Characteristic.args = {
  variant: "characteristic",
};
Characteristic.argTypes = {
  characteristicType: {
    control: {
      type: "select",
      options: ["house", "sparkle", "door", "calendar", "guidelines", "time"],
    },
  },
};

export const Amenity = TemplateStory.bind({});
Amenity.args = {
  variant: "amenity",
};
Amenity.argTypes = {
  removed: {
    control: "boolean",
  },
  amenityType: {
    control: {
      type: "select",
      options: ["smoke", "tv", "kitchen", "heating", "entrance", "carbon"],
    },
  },
};

export const Review = TemplateStory.bind({});
Review.args = {
  variant: "score",
};
Review.decorators = [
  (Story) => (
    <div style={{ width: 300 }}>
      <Story />
    </div>
  ),
];

export const Know = TemplateStory.bind({});
Know.args = {
  variant: "know",
};
Know.argTypes = {
  categoryType: {
    control: {
      type: "select",
      options: [
        "checkin",
        "checkout",
        "self",
        "children",
        "smoking",
        "pets",
        "parties",
        "cleaning",
        "distancing",
        "caution",
        "check",
      ],
    },
  },
};

export const Rating = TemplateStory.bind({});
Rating.args = {
  variant: "rating",
};

export const Bring = TemplateStory.bind({});
Bring.args = {
  variant: "bring",
};

export const Experience = TemplateStory.bind({});
Experience.args = {
  variant: "experience",
};
Experience.argTypes = {
  experience: {
    control: {
      type: "select",
      options: ["host", "activities", "global"],
    },
  },
};

export const Priority = TemplateStory.bind({});
Priority.args = {
  variant: "priority",
};
Priority.argTypes = {
  priority: {
    control: {
      type: "select",
      options: ["protection", "guidance", "requirements"],
    },
  },
};

export const Help = TemplateStory.bind({});
Help.args = {
  variant: "help",
};
Help.argTypes = {
  help: {
    control: {
      type: "select",
      options: ["support", "tools", "insights", "education"],
    },
  },
};

export const Required = TemplateStory.bind({});
Required.args = {
  variant: "required",
};

export const OnlineHost = TemplateStory.bind({});
OnlineHost.args = {
  variant: "onlinehost",
};
OnlineHost.argTypes = {
  type: {
    control: {
      type: "select",
      options: Object.keys(OnlineHostTypes),
    },
  },
};

export const Score = TemplateStory.bind({});
Score.args = {
  variant: "score",
};

export const Question = TemplateStory.bind({});
Question.args = {
  variant: "question",
};

export const Check = TemplateStory.bind({});
Check.args = {
  variant: "check",
};
