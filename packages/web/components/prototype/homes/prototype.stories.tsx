import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Prototype, PrototypeProps, $Prototype } from '@prototype/homes';

export default {
  title: 'Prototypes/Homes',
  component: Prototype,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const HomesPrototypeStory: Story<PrototypeProps> = (args) => (
  <Prototype {...args} />
);

export const Nearby = HomesPrototypeStory.bind({});
Nearby.args = {
  variant: $Prototype.NEARBY,
};

export const Category = HomesPrototypeStory.bind({});
Category.args = {
  variant: $Prototype.CATEGORY,
};
