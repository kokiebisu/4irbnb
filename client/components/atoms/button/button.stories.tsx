import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button } from '../../../components/atoms/button/button.component';
import shape from '../../../styles/shape.module.scss';
import color from '../../../styles/color.module.scss';
import font from '../../../styles/font.module.scss';
import layout from '../../../styles/layout.module.scss';
import space from '../../../styles/space.module.scss';
import animation from '../../../styles/animation.module.scss';
import button from '../../../components/atoms/button/button.module.scss';
import { Globe, ChevronDown, MagnifyGlass } from '../../../public/svg/regular';

import { Avatar, Bars, Email } from '../../../public/svg/original';
import { Apple, Facebook, Google } from '../../../public/svg/logo';
import { ButtonProps } from './props';
import { Login } from 'storybook-static/svg/regular';

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
  argTypes: {
    inverse: {
      control: 'boolean',
    },
    type: {
      control: { disable: true },
    },
    platform: {
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

    tap: {
      control: {
        disable: true,
      },
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

export const globe = ButtonTemplate.bind({});
globe.args = {
  type: 'globe',
};
globe.argTypes = {
  ...disableTitle,
};

export const host = ButtonTemplate.bind({});
host.args = {
  type: 'host',
};

export const menu = ButtonTemplate.bind({});
menu.args = {
  type: 'menu',
};
menu.argTypes = {
  ...disableTitle,
};

export const privacy = ButtonTemplate.bind({});
privacy.args = {
  type: 'privacy',
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
  type: 'border',
};
border.decorators = [
  (Story) => (
    <div style={{ width: '100px' }}>
      <Story />
    </div>
  ),
];

export const banner = ButtonTemplate.bind({});
banner.args = {
  type: 'banner',
};
banner.argTypes = {
  ...disableInverse,
};

export const plain = ButtonTemplate.bind({});
plain.args = {
  type: 'plain',
};
plain.argTypes = {
  ...disableInverse,
};
plain.decorators = [
  (Story) => (
    <div style={{ width: 300 }}>
      <Story />
    </div>
  ),
];

export const searchbarMini = ButtonTemplate.bind({});
searchbarMini.args = {
  type: 'searchbar',
  mini: true,
};
searchbarMini.argTypes = {
  ...disableInverse,
};

export const searchbarMedium = ButtonTemplate.bind({});
searchbarMedium.args = {
  type: 'searchbar',
};
searchbarMedium.argTypes = {
  ...disableInverse,
};

export const login = ButtonTemplate.bind({});
login.args = {
  type: 'login',
  platform: 'Email',
  icon: <Email width={18} height={18} />,
};
login.argTypes = {
  ...disableInverse,
};
login.decorators = [
  (Story) => (
    <div style={{ width: 300 }}>
      <Story />
    </div>
  ),
];

export const paginate = ButtonTemplate.bind({});
paginate.args = {
  type: 'paginate',
};

paginate.argTypes = {
  direction: {
    control: {
      type: 'select',
      options: ['left', 'right'],
    },
  },
};
