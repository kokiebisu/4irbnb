import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { Box } from 'atoms';
import { CustomButton } from 'molecules/Button';

export default {
  title: 'Design Systems/Button/Cookie Button',
  component: CustomButton,
  argTypes: { onPress: { action: 'clicked' } },
} as Meta;

interface Props {
  name: string;
  className: string;
  onPress: () => void;
  type: string;
  inverse: boolean;
}

const Wrapper = styled(Box)`
  width: 200px;
`;

const ButtonTemplate: Story<Props> = ({ className, ...args }) => {
  return (
    <Wrapper className={className && className}>
      <CustomButton {...args} />
    </Wrapper>
  );
};

export const base = ButtonTemplate.bind({});
base.args = { type: 'cookie', name: 'Save Settings' };

export const inverse = ButtonTemplate.bind({});
inverse.args = {
  type: 'cookie',
  inverse: true,
  name: 'Cookie Preferences',
};
