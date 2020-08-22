import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { CustomButton, CustomProps } from 'molecules/Button';
import { Box } from 'atoms';

export default {
  title: 'Design Systems/Button/Search',
  component: CustomButton,
  argsType: { onPress: { action: 'clicked' } },
};

const ButtonTemplate: Story<CustomProps> = (args) => (
  <CustomButton type='search' {...args} />
);

export const base = ButtonTemplate.bind({});
base.args = { name: 'Search' };
