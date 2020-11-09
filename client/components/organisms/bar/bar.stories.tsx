import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { BarProps } from './props';
import { Bar } from './bar.component';

export default {
  title: 'Design System/Organisms/Bar',
  component: Bar,
  argTypes: { onPress: { action: 'clicked' } },
} as Meta;

const BarTemplate: Story<BarProps> = (args) => <Bar {...args} />;

export const paginate = BarTemplate.bind({});
paginate.args = {
  type: 'paginate',
};
