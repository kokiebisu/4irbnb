import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Prototype, PrototypeProps, $Prototype } from '@prototype/globe';

export default {
  title: 'Prototypes/Globe',
  component: Prototype,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const GlobePrototype: Story<PrototypeProps> = (args) => <Prototype {...args} />;

export const Language = GlobePrototype.bind({});
Language.args = {
  variant: $Prototype.LANGUAGE,
};

export const Currency = GlobePrototype.bind({});
Currency.args = {
  variant: $Prototype.CURRENCY,
};
