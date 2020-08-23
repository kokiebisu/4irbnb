import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CustomButton } from 'molecules/Button';

export default {
  title: 'Design Systems/Button/Menu',
  component: CustomButton,
  argTypes: { onPress: { action: 'clicked' } },
} as Meta;

interface Props {
  onPress: () => void;
}

const ButtonTemplate: Story<Props> = (args) => (
  <CustomButton type='menu' {...args} />
);

export const base = ButtonTemplate.bind({});
base.args = {};
