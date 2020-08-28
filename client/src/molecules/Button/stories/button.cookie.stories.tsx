import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { Box } from 'atoms';
import { CustomButton } from 'molecules/Button';

export default {
  title: 'Design Systems/Button/Cookie',
  component: CustomButton,
  argTypes: { onPress: { action: 'clicked' } },
} as Meta;

interface Props {
  name?: string;
  className?: string;
  onPress: () => void;
  type: string;
  inverse: boolean;
  styles?: any;
}

const Wrapper = styled(Box)`
  &.cookie {
    width: 200px;
  }
`;

const ButtonTemplate: Story<Props> = ({ type, ...args }) => {
  return (
    <Wrapper className={type}>
      <CustomButton type={type} {...args} />
    </Wrapper>
  );
};

export const cookie = ButtonTemplate.bind({});
cookie.args = { type: 'cookie', name: 'Save Settings' };

export const cookieInverse = ButtonTemplate.bind({});
cookieInverse.args = {
  type: 'cookie',
  inverse: true,
  name: 'Cookie Preferences',
};
