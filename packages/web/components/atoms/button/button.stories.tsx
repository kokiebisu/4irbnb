import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps, $Button } from '@button';

import font from '@styles/font.module.scss';
import color from '@styles/color.module.scss';
import shape from '@styles/shape.module.scss';
import animation from '@styles/animation.module.scss';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    inverse: {
      control: 'boolean',
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

const ButtonStory: Story<ButtonProps> = (args) => <Button {...args} />;

export const Transparent = ButtonStory.bind({});
Transparent.args = {
  variant: $Button.TRANSPARENT,
  content: <h3 className={[font['size--15']].join(' ')}>Button</h3>,
};

export const Globe = ButtonStory.bind({});
Globe.args = {
  variant: $Button.GLOBE,
  extendsTo: [font['text--left']].join(' '),
};
Globe.argTypes = {
  selected: {
    control: 'boolean',
  },
};

export const Menu = ButtonStory.bind({});
Menu.args = {
  variant: $Button.MENU,
};
Menu.argTypes = {
  ...disableTitle,
  user: {
    control: 'boolean',
  },
};

export const Privacy = ButtonStory.bind({});
Privacy.args = {
  variant: $Button.PRIVACY,
};

Privacy.decorators = [
  (Story) => (
    <div style={{ width: 300 }}>
      <Story />
    </div>
  ),
];

export const Border = ButtonStory.bind({});
Border.args = {
  variant: $Button.BORDER,
  title: 'Button',
  inverse: false,
  size: 'md',
  bold: true,
};

export const Banner = ButtonStory.bind({});
Banner.args = {
  variant: $Button.BANNER,
  extendsTo: [color['bg--white'], shape['br--6']].join(' '),
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

export const Primary = ButtonStory.bind({});
Primary.args = {
  variant: $Button.PRIMARY,
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
    control: 'boolean',
  },
};

export const Searchbar = ButtonStory.bind({});
Searchbar.args = {
  variant: $Button.SEARCHBAR,
};
Searchbar.argTypes = {
  ...disableInverse,
  mini: {
    control: 'boolean',
  },
};

export const Auth = ButtonStory.bind({});
Auth.args = {
  variant: $Button.AUTH,
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
      type: 'select',
      options: ['email', 'facebook', 'google', 'apple'],
    },
  },
};

export const Paginate = ButtonStory.bind({});
Paginate.args = {
  variant: $Button.PAGINATE,
};
Paginate.argTypes = {
  direction: {
    control: {
      type: 'select',
      options: ['left', 'right'],
    },
  },
};

export const Option = ButtonStory.bind({});
Option.args = {
  variant: $Button.OPTION,
};

export const Underline = ButtonStory.bind({});
Underline.args = {
  variant: $Button.UNDERLINE,
};

export const Filter = ButtonStory.bind({});
Filter.args = {
  variant: $Button.FILTER,
};
Filter.argTypes = {
  inverse: {
    control: 'boolean',
  },
};

export const Modal = ButtonStory.bind({});
Modal.args = {
  variant: $Button.MODAL,
};
Modal.argTypes = {
  modalType: {
    control: {
      type: 'select',
      options: ['close', 'back'],
    },
  },
};

export const Back = ButtonStory.bind({});
Back.args = {
  variant: $Button.BACK,
};

export const Link = ButtonStory.bind({});
Link.args = {
  variant: $Button.LINK,
};

export const Search = ButtonStory.bind({});
Search.args = {
  variant: $Button.SEARCH,
};
Search.argTypes = {
  expand: {
    control: 'boolean',
  },
};

export const Expand = ButtonStory.bind({});
Expand.args = {
  variant: $Button.EXPAND,
};

export const Location = ButtonStory.bind({});
Location.args = {
  variant: $Button.LOCATION,
};
Location.argTypes = {
  type: {
    control: {
      type: 'select',
      options: ['explore', 'recent'],
    },
  },
};

export const Nearby = ButtonStory.bind({});
Nearby.args = {
  variant: $Button.NEARBY,
};

export const Destination = ButtonStory.bind({});
Destination.args = {
  variant: $Button.DESTINATION,
};

export const Closed = ButtonStory.bind({});
Closed.args = {
  variant: $Button.CLOSED,
};

export const Verify = ButtonStory.bind({});
Verify.args = {
  variant: $Button.VERIFY,
};
