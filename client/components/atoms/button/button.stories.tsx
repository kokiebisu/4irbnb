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
  extendsTo: [color['bg--transparent'], shape['br--30']].join(' '),
  children: (
    <div
      className={[
        layout['items-center'],
        animation['hover-transparent'],
        color['bg--transparent'],
        space['p-t--13'],
        space['p-b--13'],
        space['p-l--15'],
        space['p-r--15'],
      ].join(' ')}>
      <div className={[layout['items-center'], space['m-r--8']].join(' ')}>
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
        shape['br--30'],
        font['weight--300'],
        font['size--14'],
        color['c--white__0'],
        layout['inline-block'],
        space['p-t--13'],
        space['p-b--13'],
        space['p-l--13'],
        space['p-r--13'],
        animation['hover-transparent'],
      ].join(' ')}>
      Become a host
    </a>
  ),
};

export const menu = ButtonTemplate.bind({});
menu.args = {
  extendsTo: [
    layout['items-center'],
    space['p-t--6'],
    space['p-b--6'],
    space['p-r--8'],
    space['p-l--10'],
    color['bg--white__0'],
    shape['br--30'],
    animation['hover-shadow'],
  ].join(' '),
  children: (
    <>
      <div className={space['m-r--8']}>
        <Bars fill='black' width={12} />
      </div>
      <div>
        <Avatar width={30} fill='gray' />
      </div>
    </>
  ),
};

export const privacy = ButtonTemplate.bind({});
privacy.args = {
  extendsTo: [
    font['no-wrap'],
    space['p-v--13'],
    space['p-h--18'],
    font['weight--500'],
    color['c--white__0'],
    color['bg--gray__4'],
    color['b--transparent'],
    shape['br--8'],
    shape['w--full'],
    shape['min-w--150'],
    button['w--privacy'],
    font['size--15'],
  ].join(' '),
  children: <p>OK</p>,
  tap: { scale: 0.98 },
};

export const privacyInverse = ButtonTemplate.bind({});
privacyInverse.args = {
  extendsTo: [
    font['no-wrap'],
    space['p-v--13'],
    space['p-h--18'],
    font['weight--500'],
    color['bg--transparent'],
    color['b--black'],
    shape['br--8'],
    button['w--privacy'],
    font['size--15'],
  ].join(' '),
  children: <p>Cookie Preferences</p>,
  tap: { scale: 0.98 },
};

export const border = ButtonTemplate.bind({});
border.args = {
  extendsTo: color['bg--transparent'],
  children: (
    <a
      className={[
        layout['block'],
        font['size--14'],
        font['weight--500'],
        shape['br--6'],
        space['p-t--6'],
        space['p-b--6'],
        space['p-l--14'],
        space['p-r--14'],
        color['b--black'],
      ].join(' ')}>
      Donate
    </a>
  ),
};

export const borderInverse = ButtonTemplate.bind({});
borderInverse.args = {
  extendsTo: color['bg--transparent'],
  children: (
    <a
      className={[
        layout['block'],
        font['size--14'],
        font['weight--500'],
        shape['br--6'],
        space['p-t--6'],
        space['p-b--6'],
        space['p-l--14'],
        space['p-r--14'],
        color['b--white__0'],
        color['c--white__0'],
      ].join(' ')}>
      Explore all
    </a>
  ),
};

export const banner = ButtonTemplate.bind({});
banner.args = {
  extendsTo: color['bg--transparent'],
  children: (
    <a
      className={[
        layout['all-center'],
        font['size--14'],
        color['bg--white__0'],
        shape['br--6'],
        shape['w--140'],
        shape['h--30'],
        font['ls--1'],
      ].join(' ')}>
      Explore nearby
    </a>
  ),
};

export const primary = ButtonTemplate.bind({});
primary.args = {
  extendsTo: [
    color['bg--primary'],
    color['c--white__0'],
    shape['w--full'],
    layout['block'],
    font['size--16'],
    space['p-v--14'],
    shape['br--8'],
  ].join(' '),
};
