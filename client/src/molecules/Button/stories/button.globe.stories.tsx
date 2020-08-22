import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { css } from 'styled-components';
import { Box } from 'atoms';
import { CustomButton, CustomProps } from 'molecules/Button';

export default {
  title: 'Design Systems/Button/Globe',
  component: CustomButton,
  argTypes: { onPress: { action: 'clicked' } },
};

const Template: Story<CustomProps> = (args) => (
  <CustomButton type='globe' {...args} />
);

export const base = Template.bind({});
base.args = {};
