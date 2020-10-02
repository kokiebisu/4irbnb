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

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
  argTypes: { onPress: { action: 'clicked' } },
} as Meta;

interface ButtonProps {
  onPress: () => void;
  children: React.ReactNode;
  to: any;
  extend: string;
}

const ButtonTemplate: Story<ButtonProps> = (args) => <Button {...args} />;

export const globe = ButtonTemplate.bind({});
globe.args = {
  extendTo: 'globe',
  children: (
    <div
      className={[
        shape['br-30'],
        layout['items-center'],
        button['hover-transparent'],
        color['bg-transparent'],
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
        font['weight-300'],
        font['size-14'],
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
