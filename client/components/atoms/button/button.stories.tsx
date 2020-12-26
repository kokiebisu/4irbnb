import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

/** components */
import { Button, ButtonProps } from "@button/button.component";

/** contexts */
import { ContextProvider } from "../../../context/provider";

/** styles */
import button from "@button/button.module.scss";
import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";
import layout from "@styles/layout.module.scss";
import shape from "@styles/shape.module.scss";
import space from "@styles/space.module.scss";
import animation from "@styles/animation.module.scss";

export default {
  title: "Design System/Atoms/Button",
  component: Button,
  decorators: [
    (Story) => (
      <ContextProvider>
        <Story />
      </ContextProvider>
    ),
  ],
  argTypes: {
    inverse: {
      control: "boolean",
    },
    type: {
      control: { disable: true },
    },
    icon: {
      control: { disable: true },
    },
    to: {
      control: { disable: true },
    },
    extendsTo: {
      control: { disable: true },
    },
  },
} as Meta;

const disableInverse = {
  inverse: {
    control: {
      disable: true,
    },
  },
};

const disableTitle = {
  title: {
    control: {
      disable: true,
    },
  },
};

const ButtonTemplate: Story<ButtonProps> = (args) => <Button {...args} />;

export const transparent = ButtonTemplate.bind({});
transparent.args = {
  variant: "transparent",
  content: <h3 className={[font["size--15"]].join(" ")}>Button</h3>,
};

export const globe = ButtonTemplate.bind({});
globe.args = {
  variant: "globe",
  extendsTo: [font["text--left"]].join(" "),
};
globe.argTypes = {
  selected: {
    control: "boolean",
  },
};

export const menu = ButtonTemplate.bind({});
menu.args = {
  variant: "menu",
  extendsTo: [
    shape["br--30"],
    animation["hover-shadow--lg"],
    color["b-2--white__2"],
  ].join(" "),
};
menu.argTypes = {
  ...disableTitle,
  user: {
    control: "boolean",
  },
};

export const privacy = ButtonTemplate.bind({});
privacy.args = {
  variant: "privacy",
};

privacy.decorators = [
  (Story) => (
    <div style={{ width: 300 }}>
      <Story />
    </div>
  ),
];

export const border = ButtonTemplate.bind({});
border.args = {
  variant: "border",
  extendsTo: [color["bg--transparent"]].join(" "),
};
border.argTypes = {
  size: {
    control: {
      type: "select",
      options: ["sm", "md", "lg"],
    },
  },
  bold: {
    control: "boolean",
  },
};

export const banner = ButtonTemplate.bind({});
banner.args = {
  variant: "banner",
  extendsTo: [color["bg--white"], shape["br--6"]].join(" "),
};
banner.argTypes = {
  ...disableInverse,
};

banner.decorators = [
  (Story) => (
    <div style={{ width: 200 }}>
      <Story />
    </div>
  ),
];

export const primary = ButtonTemplate.bind({});
primary.args = {
  variant: "primary",
};
primary.decorators = [
  (Story) => (
    <div style={{ width: 300 }}>
      <Story />
    </div>
  ),
];
primary.argTypes = {
  ...disableInverse,
  loading: {
    control: "boolean",
  },
};

export const searchbar = ButtonTemplate.bind({});
searchbar.args = {
  variant: "searchbar",
};
searchbar.argTypes = {
  ...disableInverse,
  mini: {
    control: "boolean",
  },
};

export const auth = ButtonTemplate.bind({});
auth.args = {
  variant: "auth",
  extendsTo: [
    button["hover__auth"],
    color["bg--transparent"],
    layout["block"],
    shape["w--full"],
    space["p-h--12"],
    space["p-v--12"],
    shape["br--8"],
  ].join(" "),
};

auth.decorators = [
  (Story) => (
    <div style={{ width: 300 }}>
      <Story />
    </div>
  ),
];

auth.argTypes = {
  auth: {
    control: {
      type: "select",
      options: ["email", "facebook", "google", "apple"],
    },
  },
};

export const paginate = ButtonTemplate.bind({});
paginate.args = {
  variant: "paginate",
};
paginate.argTypes = {
  direction: {
    control: {
      type: "select",
      options: ["left", "right"],
    },
  },
};

export const option = ButtonTemplate.bind({});
option.args = {
  variant: "option",
  extendsTo: [shape["w--full"]].join(" "),
};

export const underline = ButtonTemplate.bind({});
underline.args = {
  variant: "underline",
};

export const filter = ButtonTemplate.bind({});
filter.args = {
  variant: "filter",
};

export const modal = ButtonTemplate.bind({});
modal.args = {
  variant: "modal",
};
modal.argTypes = {
  modalType: {
    control: {
      type: "select",
      options: ["close", "back"],
    },
  },
};

export const back = ButtonTemplate.bind({});
back.args = {
  variant: "back",
};

export const link = ButtonTemplate.bind({});
link.args = {
  variant: "link",
};

export const search = ButtonTemplate.bind({});
search.args = {
  variant: "search",
};
search.argTypes = {
  expand: {
    control: "boolean",
  },
};
