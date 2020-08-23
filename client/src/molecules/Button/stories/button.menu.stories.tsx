import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CustomButton } from 'molecules/Button';

export default {
  title: 'Design Systems/Button/Custom',
  component: CustomButton,
  argTypes: { onPress: { action: 'clicked' } },
} as Meta;

interface Props {
  type: string;
  onPress: () => void;
}

const ButtonTemplate: Story<Props> = (args) => <CustomButton {...args} />;

export const menu = ButtonTemplate.bind({});
menu.args = { type: 'menu' };
