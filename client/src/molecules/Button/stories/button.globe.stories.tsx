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

const Template: Story<CustomProps> = (args) => {
  const extend = {
    wrapper: css`
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: black;
    `,
  };
  return (
    <Box styles={extend.wrapper}>
      <CustomButton type='globe' {...args} />
    </Box>
  );
};

export const base = Template.bind({});
base.args = {};
