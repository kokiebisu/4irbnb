import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { Box } from 'atoms';
import { CustomButton } from 'molecules/Button';

export default {
  title: 'Design Systems/Button/Custom',
  component: CustomButton,
  argTypes: { onPress: { action: 'clicked' } },
} as Meta;

interface Props {
  name?: string;
  className?: string;
  onPress: () => void;
  type: string;
  inverse: boolean;
}

const Wrapper = styled(Box)`
  &.cookie {
    width: 200px;
  }
`;

const ButtonTemplate: Story<Props> = ({ className, ...args }) => {
  return (
    <Wrapper className={className && className}>
      <CustomButton {...args} />
    </Wrapper>
  );
};

export const cookie = ButtonTemplate.bind({});
cookie.args = { type: 'cookie', name: 'Save Settings', className: 'cookie' };

export const cookieInverse = ButtonTemplate.bind({});
cookieInverse.args = {
  type: 'cookie',
  inverse: true,
  name: 'Cookie Preferences',
};

export const globe = ButtonTemplate.bind({});
globe.args = { type: 'globe' };

export const menu = ButtonTemplate.bind({});
menu.args = { type: 'menu' };
