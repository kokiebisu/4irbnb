import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CustomButton, CustomProps } from 'molecules/Button';

export default {
  title: 'Design Systems/Button/Search',
  component: CustomButton,
  argsType: { onPress: { action: 'clicked' } },
} as Meta;

interface Props {
  onPress: () => void;
}

const ButtonTemplate: Story<CustomProps> = (args) => (
  <CustomButton type='search' {...args} />
);

export const base = ButtonTemplate.bind({});
base.args = { name: 'Search' };
