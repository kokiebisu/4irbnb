import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Prototype, PrototypeProps, $PROTOTYPE } from '..';

export default {
  title: 'Prototypes/Homes',
  component: Prototype,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const TemplateStory: Story<PrototypeProps> = (args) => <Prototype {...args} />;

export const Nearby = TemplateStory.bind({});
Nearby.args = {
  variant: $PROTOTYPE.nearby,
};

export const Category = TemplateStory.bind({});
Category.args = {
  variant: $PROTOTYPE.category,
};
