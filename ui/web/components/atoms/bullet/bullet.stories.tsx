import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Bullet, BulletProps } from "@bullet";

export default {
  title: "Atoms/Bullet",
  component: Bullet,
  argTypes: {
    type: {
      control: { disable: true },
    },
    extendsTo: {
      control: { disable: true },
    },
  },
} as Meta;

const TemplateStory: Story<BulletProps> = (args) => <Bullet {...args} />;

export const characteristic = TemplateStory.bind({});
characteristic.args = {
  variant: "characteristic",
};
characteristic.argTypes = {
  characteristicType: {
    control: {
      type: "select",
      options: ["house", "sparkle", "door", "calendar", "guidelines", "time"],
    },
  },
};

export const amenity = TemplateStory.bind({});
amenity.args = {
  variant: "amenity",
};
amenity.argTypes = {
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

export const review = TemplateStory.bind({});
review.args = {
  variant: "score",
};
review.decorators = [
  (Story) => (
    <div style={{ width: 300 }}>
      <Story />
    </div>
  ),
];

export const know = TemplateStory.bind({});
know.args = {
  variant: "know",
};
know.argTypes = {
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

export const rating = TemplateStory.bind({});
rating.args = {
  variant: "rating",
};

export const bring = TemplateStory.bind({});
bring.args = {
  variant: "bring",
};

export const experience = TemplateStory.bind({});
experience.args = {
  variant: "experience",
};
experience.argTypes = {
  experience: {
    control: {
      type: "select",
      options: ["host", "activities", "global"],
    },
  },
};

export const priority = TemplateStory.bind({});
priority.args = {
  variant: "priority",
};
priority.argTypes = {
  priority: {
    control: {
      type: "select",
      options: ["protection", "guidance", "requirements"],
    },
  },
};

export const help = TemplateStory.bind({});
help.args = {
  variant: "help",
};
help.argTypes = {
  help: {
    control: {
      type: "select",
      options: ["support", "tools", "insights", "education"],
    },
  },
};

export const required = TemplateStory.bind({});
required.args = {
  variant: "required",
};

export const onlinehost = TemplateStory.bind({});
onlinehost.args = {
  variant: "onlinehost",
};
onlinehost.argTypes = {
  bullet: {
    control: {
      type: "select",
      options: ["home", "global", "business"],
    },
  },
};

export const score = TemplateStory.bind({});
score.args = {
  variant: "score",
};

export const question = TemplateStory.bind({});
question.args = {
  variant: "question",
};

export const check = TemplateStory.bind({});
check.args = {
  variant: "check",
};
