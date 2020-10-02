import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button } from '../../../components/atoms/button/button.component';
import shape from '../../../styles/shape.module.scss';
import color from '../../../styles/color.module.scss';
import font from '../../../styles/font.module.scss';
import layout from '../../../styles/layout.module.scss';
import space from '../../../styles/space.module.scss';
import button from '../../../components/atoms/button/button.module.scss';
import { Globe, ChevronDown } from '../../../public/svg/regular';
import { ButtonProps } from './button.component';
import { Avatar, Bars } from '../../../public/svg/original';

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
  argTypes: { onPress: { action: 'clicked' } },
} as Meta;

const ButtonTemplate: Story<ButtonProps> = (args) => <Button {...args} />;

export const globe = ButtonTemplate.bind({});
globe.args = {
  extendsTo: [color['bg--transparent'], shape['br-30']].join(' '),
  children: (
    <div
      className={[
        layout['items-center'],
        button['hover-transparent'],
        color['bg--transparent'],
        space['p-t-13'],
        space['p-b-13'],
        space['p-l-15'],
        space['p-r-15'],
      ].join(' ')}>
      <div className={[layout['items-center'], space['m-r-8']].join(' ')}>
        <Globe width={16} fill='white' />
      </div>
      <div className={layout['items-center']}>
        <ChevronDown width={8} fill='white' />
      </div>
    </div>
  ),
};

export const host = ButtonTemplate.bind({});
host.args = {
  to: '/',
  children: (
    <a
      className={[
        shape['br-30'],
        font['weight--300'],
        font['size--14'],
        color['c-white'],
        layout['inline-block'],
        space['p-t-13'],
        space['p-b-13'],
        space['p-l-13'],
        space['p-r-13'],
        button['hover-transparent'],
      ].join(' ')}>
      Become a host
    </a>
  ),
};

export const menu = ButtonTemplate.bind({});
menu.args = {
  extendsTo: [
    layout['items-center'],
    space['p-t-6'],
    space['p-b-6'],
    space['p-r-8'],
    space['p-l-10'],
    color['bg--white'],
    shape['br-30'],
    button['hover-shadow'],
  ].join(' '),
  children: (
    <>
      <div className={space['m-r-8']}>
        <Bars fill='black' width={12} />
      </div>
      <div>
        <Avatar width={30} fill='gray' />
      </div>
    </>
  ),
};

export const cookie = ButtonTemplate.bind({});
cookie.args = {
  extendsTo: [
    space['p-t-13'],
    space['p-b-13'],
    font['weight--300'],
    color['c-white'],
    color['bg--black'],
    color['border--transparent'],
    shape['br-6'],
    shape['w-full'],
    font['size--16'],
  ].join(' '),
  children: <p>Save Settings</p>,
  tap: { scale: 0.98 },
};

export const cookieInverse = ButtonTemplate.bind({});
cookieInverse.args = {
  extendsTo: [
    space['p-t-13'],
    space['p-b-13'],
    font['weight--300'],
    color['bg--transparent'],
    color['border--black'],
    shape['br-6'],
    shape['w-full'],
    font['size--16'],
  ].join(' '),
  children: <p>Cookie Preferences</p>,
  tap: { scale: 0.98 },
};
