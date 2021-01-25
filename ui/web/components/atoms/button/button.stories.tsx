import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Button, ButtonProps } from "@button";

import button from "@button/button.module.scss";
import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";
import layout from "@styles/layout.module.scss";
import shape from "@styles/shape.module.scss";
import space from "@styles/space.module.scss";
import animation from "@styles/animation.module.scss";

import * as $button from "@button/variants";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    inverse: {
      control: "boolean",
    },
    variant: {
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

const TemplateStory: Story<ButtonProps> = (args) => <Button {...args} />;

export const Transparent = TemplateStory.bind({});
Transparent.args = {
  variant: $button.TRANSPARENT,
  content: <h3 className={[font["size--15"]].join(" ")}>Button</h3>,
};

export const Globe = TemplateStory.bind({});
Globe.args = {
  variant: $button.GLOBE,
  extendsTo: [font["text--left"]].join(" "),
};
Globe.argTypes = {
  selected: {
    control: "boolean",
  },
};

export const Menu = TemplateStory.bind({});
Menu.args = {
  variant: $button.MENU,
  extendsTo: [animation["hover-shadow--lg"], shape["br--30"]].join(" "),
};
Menu.argTypes = {
  ...disableTitle,
  user: {
    control: "boolean",
  },
};

export const Privacy = TemplateStory.bind({});
Privacy.args = {
  variant: $button.PRIVACY,
};

Privacy.decorators = [
  (Story) => (
    <div style={{ width: 300 }}>
      <Story />
    </div>
  ),
];

export const Border = TemplateStory.bind({});
Border.args = {
  variant: $button.BORDER,
};
Border.argTypes = {
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

export const Banner = TemplateStory.bind({});
Banner.args = {
  variant: $button.BANNER,
  extendsTo: [color["bg--white"], shape["br--6"]].join(" "),
};
Banner.argTypes = {
  ...disableInverse,
};

Banner.decorators = [
  (Story) => (
    <div style={{ width: 200 }}>
      <Story />
    </div>
  ),
];

export const Primary = TemplateStory.bind({});
Primary.args = {
  variant: $button.PRIMARY,
};
Primary.decorators = [
  (Story) => (
    <div style={{ width: 300 }}>
      <Story />
    </div>
  ),
];
Primary.argTypes = {
  ...disableInverse,
  loading: {
    control: "boolean",
  },
};

export const Searchbar = TemplateStory.bind({});
Searchbar.args = {
  variant: $button.SEARCHBAR,
};
Searchbar.argTypes = {
  ...disableInverse,
  mini: {
    control: "boolean",
  },
};

export const Auth = TemplateStory.bind({});
Auth.args = {
  variant: $button.AUTH,
};

Auth.decorators = [
  (Story) => (
    <div style={{ width: 300 }}>
      <Story />
    </div>
  ),
];

Auth.argTypes = {
  auth: {
    control: {
      type: "select",
      options: ["email", "facebook", "google", "apple"],
    },
  },
};

export const Paginate = TemplateStory.bind({});
Paginate.args = {
  variant: $button.PAGINATE,
};
Paginate.argTypes = {
  direction: {
    control: {
      type: "select",
      options: ["left", "right"],
    },
  },
};

export const Option = TemplateStory.bind({});
Option.args = {
  variant: $button.OPTION,
};

export const Underline = TemplateStory.bind({});
Underline.args = {
  variant: $button.UNDERLINE,
};

export const Filter = TemplateStory.bind({});
Filter.args = {
  variant: $button.FILTER,
};
Filter.argTypes = {
  inverse: {
    control: "boolean",
  },
};

export const Modal = TemplateStory.bind({});
Modal.args = {
  variant: $button.MODAL,
};
Modal.argTypes = {
  modalType: {
    control: {
      type: "select",
      options: ["close", "back"],
    },
  },
};

export const Back = TemplateStory.bind({});
Back.args = {
  variant: $button.BACK,
};

export const Link = TemplateStory.bind({});
Link.args = {
  variant: $button.LINK,
};

export const Search = TemplateStory.bind({});
Search.args = {
  variant: $button.SEARCH,
};
Search.argTypes = {
  expand: {
    control: "boolean",
  },
};

export const Expand = TemplateStory.bind({});
Expand.args = {
  variant: $button.EXPAND,
};

export const Location = TemplateStory.bind({});
Location.args = {
  variant: $button.LOCATION,
};
Location.argTypes = {
  type: {
    control: {
      type: "select",
      options: ["explore", "recent"],
    },
  },
};

export const Nearby = TemplateStory.bind({});
Nearby.args = {
  variant: $button.NEARBY,
};

export const Destination = TemplateStory.bind({});
Destination.args = {
  variant: $button.DESTINATION,
};
