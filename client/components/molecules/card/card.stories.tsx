import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Card, CardProps } from "@card/card.component";

export default {
  title: "Molecules/Card",
  component: Card,
  argTypes: {
    onClick: { action: "clicked" },
    type: {
      control: {
        disable: true,
      },
    },
    extendsTo: {
      control: {
        disable: true,
      },
    },
    to: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const CardTemplate: Story<CardProps> = (args) => <Card {...args} />;

export const category = CardTemplate.bind({});
category.args = {
  variant: "category",
};

category.decorators = [
  (Story) => (
    <div style={{ width: 300 }}>
      <Story />
    </div>
  ),
];

export const horizontal = CardTemplate.bind({});
horizontal.args = {
  variant: "horizontal",
};

horizontal.decorators = [
  (Story) => (
    <div style={{ maxWidth: 600 }}>
      <Story />
    </div>
  ),
];

horizontal.argTypes = {
  superhost: {
    control: "boolean",
  },
  save: {
    control: "boolean",
  },
};

export const vertical = CardTemplate.bind({});
vertical.args = {
  variant: "vertical",
};
vertical.argTypes = {
  save: {
    control: "boolean",
  },
};

export const typeStay = CardTemplate.bind({});
typeStay.args = {
  variant: "typestay",
};

typeStay.decorators = [
  (Story) => (
    <div style={{ width: 200 }}>
      <Story />
    </div>
  ),
];

export const arrangements = CardTemplate.bind({});
arrangements.args = {
  variant: "arrangements",
};

export const checkin = CardTemplate.bind({});
checkin.args = {
  variant: "checkin",
};

checkin.decorators = [
  (Story) => (
    <div style={{ width: 500 }}>
      <Story />
    </div>
  ),
];

export const review = CardTemplate.bind({});
review.args = {
  variant: "review",
};

export const stay = CardTemplate.bind({});
stay.args = {
  variant: "stay",
};

export const nearby = CardTemplate.bind({});
nearby.args = {
  variant: "nearby",
};

export const online = CardTemplate.bind({});
online.args = {
  variant: "online",
};

online.decorators = [
  (Story) => (
    <div style={{ maxWidth: 600 }}>
      <Story />
    </div>
  ),
];

export const participate = CardTemplate.bind({});
participate.args = {
  variant: "participate",
};
participate.argTypes = {
  categoryType: {
    control: {
      type: "select",
      options: ["call", "private"],
    },
  },
};

export const available = CardTemplate.bind({});
available.args = {
  variant: "available",
};

export const host = CardTemplate.bind({});
host.args = {
  variant: "host",
};
host.decorators = [
  (Story) => (
    <div style={{ width: 400 }}>
      <Story />
    </div>
  ),
];

export const set = CardTemplate.bind({});
set.args = {
  variant: "set",
};

export const again = CardTemplate.bind({});
again.args = {
  variant: "again",
};

export const works = CardTemplate.bind({});
works.args = {
  variant: "works",
};
works.argTypes = {
  work: {
    control: {
      type: "select",
      options: ["design", "share", "submit", "setup"],
    },
  },
};

export const sharing = CardTemplate.bind({});
sharing.args = {
  variant: "sharing",
};
sharing.argsTypes = {
  sharing: {
    control: {
      type: "select",
      options: ["meditate", "baking", "magic"],
    },
  },
};

export const how = CardTemplate.bind({});
how.args = {
  variant: "how",
};
how.argTypes = {
  how: {
    control: {
      type: "select",
      options: ["qualified", "control", "notified"],
    },
  },
};
how.decorators = [
  (Story) => (
    <div style={{ width: 300 }}>
      <Story />
    </div>
  ),
];
