import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { Box, Text } from 'atoms';
import { CustomButton } from 'molecules/Button';
import { stroke, StyledIcon, Flex } from 'molecules/Button/button.transparent';

export default {
  title: 'Design Systems/Button/Transparent',
  component: CustomButton,
  argTypes: { onPress: { action: 'clicked' } },
} as Meta;

interface Props {
  name?: string;
  className?: string;
  onPress: () => void;
  type: string;
  children: React.ReactNode;
}

const Wrapper = styled(Box)``;

const ButtonTemplate: Story<Props> = ({ className, ...args }) => {
  return (
    <Wrapper>
      <CustomButton {...args} />
    </Wrapper>
  );
};

export const globe = ButtonTemplate.bind({});
globe.args = {
  type: 'transparent',
  children: (
    <Flex>
      <StyledIcon fillColor={stroke} className='globe' name='Globe' />
      <StyledIcon fillColor={stroke} className='arrow' name='ChevronDown' />
    </Flex>
  ),
};

export const host = ButtonTemplate.bind({});
host.args = {
  type: 'transparent',
  children: <Text>Become a host</Text>,
};
