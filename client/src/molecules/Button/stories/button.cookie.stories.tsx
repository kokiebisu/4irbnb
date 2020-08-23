import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { css } from 'styled-components';
import { Box } from 'atoms';
import { CustomButton } from 'molecules/Button';

export default {
  title: 'Design Systems/Button/Cookie',
  component: CustomButton,
  argTypes: { onPress: { action: 'clicked' } },
} as Meta;

interface Props {
  name: string;
  styles?: any;
  onPress: () => void;
  inverse: boolean;
}

const baseStyles = {
  styles: css`
    width: 200px;
  `,
};

const ButtonTemplate: Story<Props> = ({ styles, ...args }) => {
  return (
    <Box styles={styles}>
      <CustomButton type='cookie' {...args} />
    </Box>
  );
};

export const base = ButtonTemplate.bind({});
base.args = { name: 'Save Settings', ...baseStyles };

export const inverse = ButtonTemplate.bind({});
inverse.args = { inverse: true, name: 'Cookie Preferences', ...baseStyles };
