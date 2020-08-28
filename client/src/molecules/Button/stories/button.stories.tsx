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

const Wrapper = styled(Box)``;

const ButtonTemplate: Story<Props> = ({ className, ...args }) => {
  return (
    <Wrapper className={className}>
      <CustomButton {...args} />
    </Wrapper>
  );
};

export const menu = ButtonTemplate.bind({});
menu.args = { type: 'menu' };

export const search = ButtonTemplate.bind({});
search.args = { type: 'search', name: 'Search' };
