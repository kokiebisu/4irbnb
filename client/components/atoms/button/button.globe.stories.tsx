import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button } from 'components/atoms/button/button';
import layout from 'styles/layout.module.scss';
import space from 'styles/space.module.scss';
import { Globe, ChevronDown } from 'public/svg/regular';

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
  argTypes: { onPress: { action: 'clicked' } },
} as Meta;

interface ButtonProps {
  onPress: () => void;
  children: React.ReactNode;
}

const ButtonTemplate: Story<ButtonProps> = (args) => <Button {...args} />;

export const globe = ButtonTemplate.bind({});
globe.args = {
  children: (
    <>
      <div className={[layout['items-center'], space['m-r-8']].join(' ')}>
        <Globe width={16} fill='white' />
      </div>
      <div className={layout['items-center']}>
        <ChevronDown width={8} fill='white' />
      </div>
    </>
  ),
};
