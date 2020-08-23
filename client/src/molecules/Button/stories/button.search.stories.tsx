import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CustomButton, CustomProps } from 'molecules/Button';

export default {
  title: 'Design Systems/Button/Search Button',
  component: CustomButton,
  argsType: { onPress: { action: 'clicked' } },
} as Meta;

interface Props {
  type: string;
  onPress: () => void;
}

const ButtonTemplate: Story<Props> = (args) => <CustomButton {...args} />;

export const base = ButtonTemplate.bind({});
base.args = { type: 'search', name: 'Search' };
