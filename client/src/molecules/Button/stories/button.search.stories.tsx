import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CustomButton } from 'molecules/Button';

export default {
  title: 'Design Systems/Button/Custom',
  component: CustomButton,
  argsType: { onPress: { action: 'clicked' } },
} as Meta;

interface Props {
  type: string;
  name: string;
  onPress: () => void;
}

const ButtonTemplate: Story<Props> = (args) => <CustomButton {...args} />;

export const search = ButtonTemplate.bind({});
search.args = { type: 'search', name: 'Search' };
