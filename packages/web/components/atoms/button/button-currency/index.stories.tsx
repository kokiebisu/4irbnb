import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CurrencyButton, CurrencyButtonProps } from '.';

export default {
  title: 'Atoms/Button',
  component: CurrencyButton,
} as Meta;

const ButtonStory: Story<CurrencyButtonProps> = (args) => (
  <CurrencyButton {...args} />
);

export const Currency = ButtonStory.bind({});
Currency.args = {
  name: 'Canadian Dollar',
  abbreviation: 'CAD',
  symbol: '$',
};
